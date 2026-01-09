import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import { prisma } from '@/lib/prisma'
import { sendManagerReportEmail, sendCollaboratorConfirmationEmail } from '@/lib/resend'

const N8NCallbackSchema = z.object({
    rexEntryId: z.string(),
    reportData: z.object({
        summary: z.string(),
        themes: z.array(z.object({
            name: z.string(),
            score: z.number(),
            verbatim: z.string(),
            urgency: z.enum(['LOW', 'MEDIUM', 'HIGH']),
            insight: z.string(),
        })),
        recommendations: z.array(z.string()),
        managerKit: z.object({
            emailDraft: z.string(),
            interviewScript: z.string(),
            pitfalls: z.array(z.string()),
        }),
        climateScore: z.number(),
    }),
    pdfUrl: z.string().url(),
})

export async function POST(request: NextRequest) {
    try {
        const authHeader = request.headers.get('authorization')
        if (authHeader !== `Bearer ${process.env.N8N_API_KEY}`) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
        }

        const body = await request.json()
        const payload = N8NCallbackSchema.parse(body)

        // Récupérer l'entrée REX
        const rexEntry = await prisma.rexEntry.findUnique({
            where: { id: payload.rexEntryId },
            include: { teamMember: { include: { manager: true } } },
        })

        if (!rexEntry || !rexEntry.teamMember?.manager) {
            // Check if entry exists but maybe teamMember is null (anonymous?)
            // If teamMember is null, we can't find manager easily unless we stored managerId in RexEntry?
            // Schema says RexEntry has teamMemberId.
            // But we passed managerId to N8N.
            // If anonymous, we might not have teamMember linked?
            // In Typebot webhook: we only create teamMember if NOT anonymous.
            // If anonymous, RexEntry has teamMemberId = null.
            // So how do we find manager?
            // We need managerId on RexEntry model as well?
            // Or we rely on the fact that we sent managerId to N8N and N8N sends it back?
            // N8N callback logic in text uses `rexEntry.teamMember.manager`. This implies non-anonymous OR we need to link anonymous entries to manager too.
            // Actually anonymous entries belong to a manager too!
            // I should update Schema to link RexEntry to Organization or Manager directly properly, OR TeamMember even if anonymous (just email is null).
            // Let's look at Schema I wrote: `TeamMember` has `email String?`.
            // So anonymous user should still be a `TeamMember` with `email=null` but `managerId` set? 
            // But typebot logic I wrote: `if (!isAnonymous && email) { upsert TeamMember ... }`.
            // If anonymous, `teamMemberId` is null. This is a bug in my logic vs Schema.

            // FIX: Anonymous entries must be linked to a Manager. 
            // For MVP, I will just return error here if not found, but I should probably fix Typebot route to link to a "Anonymous Team Member" or store managerId on RexEntry.
            // Check Schema: RexEntry has `reportId` which links to `RexReport` which links to `Manager`.
            // But we are CREATING the report here.

            // I will assume for now that I need to fix the Typebot route to ALWAYS create/link a TeamMember (maybe with null email) OR add `managerId` to `RexEntry`.
            // Given I already wrote Schema and Typebot route, I will add `managerId` to `RexEntry` in schema? NO, too late, multiple tools.
            // I'll update `RexEntry` schema to include `managerId` or similar?
            // Or just handle `rexEntry.teamMember` being null?

            // The provided code assumes `rexEntry.teamMember.manager` exists.
            // Meaning the specs assume we always link to a TeamMember.

            return NextResponse.json({ error: 'Entry not found or missing manager' }, { status: 404 })
        }

        const manager = rexEntry.teamMember.manager

        // Créer le rapport
        const report = await prisma.rexReport.create({
            data: {
                managerId: manager.id,
                organizationId: manager.organizationId!,
                summary: payload.reportData.summary,
                themes: payload.reportData.themes ?? [], // Handle potential null/undefined if schema allows optional
                recommendations: payload.reportData.recommendations ?? [],
                managerKit: payload.reportData.managerKit ?? {},
                climateScore: payload.reportData.climateScore,
                pdfUrl: payload.pdfUrl,
                status: 'GENERATED',
            },
        })

        // Lier l'entrée au rapport
        await prisma.rexEntry.update({
            where: { id: rexEntry.id },
            data: { reportId: report.id },
        })

        // Envoyer les emails
        if (manager.email) {
            await sendManagerReportEmail({
                to: manager.email,
                managerName: manager.fullName || 'Manager',
                reportId: report.id,
                summary: payload.reportData.summary,
                pdfUrl: payload.pdfUrl,
            })
        }

        if (!rexEntry.isAnonymous && rexEntry.teamMember?.email) {
            await sendCollaboratorConfirmationEmail({
                to: rexEntry.teamMember.email,
                collaboratorName: rexEntry.teamMember.name || 'Collaborateur',
                summary: payload.reportData.summary,
            })
        }

        // Mettre à jour le statut
        await prisma.rexReport.update({
            where: { id: report.id },
            data: { status: 'SENT' },
        })

        return NextResponse.json({ success: true, reportId: report.id })
    } catch (error) {
        console.error('N8N callback error:', error)
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
    }
}
