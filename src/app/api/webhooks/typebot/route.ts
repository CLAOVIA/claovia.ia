import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import { prisma } from '@/lib/prisma'

const TypebotPayloadSchema = z.object({
    sessionId: z.string(),
    answers: z.array(z.object({
        questionId: z.string(),
        answer: z.string(),
    })),
    metadata: z.object({
        managerId: z.string(),
        isAnonymous: z.boolean().optional(),
        collaboratorEmail: z.string().email().optional(),
    }),
})

export async function POST(request: NextRequest) {
    try {
        // Vérifier le secret webhook
        const authHeader = request.headers.get('x-webhook-secret')
        if (authHeader !== process.env.TYPEBOT_WEBHOOK_SECRET) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
        }

        const body = await request.json()
        const payload = TypebotPayloadSchema.parse(body)

        // Créer ou récupérer le TeamMember
        let teamMemberId: string | null = null
        if (!payload.metadata.isAnonymous && payload.metadata.collaboratorEmail) {
            // Note: In a real app we might want to ensure the managerId matches to prevent spoofing if emails aren't verified
            // Here we assume Typebot secured the link
            // Since email_managerId needs to be unique if we defined it that way, but schema just says isAnonymous
            // Let's look at schema: TeamMember has managerId. 
            // We'll search for existing member by email + managerId if possible.
            // But prisma schema for TeamMember doesn't enforce strict unique constraint on email+managerId in the schema provided earlier?
            // Actually Implementation guide used `where: { email_managerId: ... }`. 
            // I need to make sure my schema has `@@unique([email, managerId])` for TeamMember if I want that.
            // The schema I wrote earlier: `model TeamMember { ... email String? ... @@map("team_members") }`. 
            // I DID NOT add @@unique([email, managerId]). 
            // I should FIX the schema or adjust the code.
            // Adjusting code to findFirst instead of upsert with unique requirement if schema lacks it, 
            // OR better, update Schema to include unique constraint. 
            // I will update Schema in next step if this fails, but better to fix Schema now?
            // For now I'll use findFirst/create loop or just simple create if not exists.

            const existingMember = await prisma.teamMember.findFirst({
                where: {
                    email: payload.metadata.collaboratorEmail,
                    managerId: payload.metadata.managerId
                }
            });

            if (existingMember) {
                teamMemberId = existingMember.id;
            } else {
                const newMember = await prisma.teamMember.create({
                    data: {
                        email: payload.metadata.collaboratorEmail,
                        managerId: payload.metadata.managerId,
                        name: payload.metadata.collaboratorEmail.split('@')[0] // Fallback name
                    }
                });
                teamMemberId = newMember.id;
            }
        }

        // Créer l'entrée REX
        const rexEntry = await prisma.rexEntry.create({
            data: {
                sessionId: payload.sessionId,
                content: payload.answers,
                isAnonymous: payload.metadata.isAnonymous ?? false,
                teamMemberId,
            },
        })

        // Déclencher N8N pour la génération
        // We only trigger if N8N URL is present
        if (process.env.N8N_WEBHOOK_URL) {
            await fetch(process.env.N8N_WEBHOOK_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${process.env.N8N_API_KEY}`,
                },
                body: JSON.stringify({
                    rexEntryId: rexEntry.id,
                    managerId: payload.metadata.managerId,
                    answers: payload.answers,
                    isAnonymous: payload.metadata.isAnonymous,
                }),
            })
        }

        return NextResponse.json({ success: true, entryId: rexEntry.id })
    } catch (error) {
        console.error('Typebot webhook error:', error)
        if (error instanceof z.ZodError) {
            return NextResponse.json({ error: 'Invalid payload', details: error.issues }, { status: 400 })
        }
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
    }
}
