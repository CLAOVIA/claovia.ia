import { createClient } from "@/lib/supabase/server";
import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

/**
 * GET /api/rex-link
 * Returns the unique REX link for the authenticated manager
 */
export async function GET() {
    try {
        const supabase = await createClient();
        const { data: { user } } = await supabase.auth.getUser();

        if (!user) {
            return NextResponse.json(
                { error: "Non authentifié" },
                { status: 401 }
            );
        }

        // Get or create profile for the user
        let profile = await prisma.profile.findUnique({
            where: { id: user.id },
        });

        // If profile doesn't exist, create it
        if (!profile) {
            profile = await prisma.profile.create({
                data: {
                    id: user.id,
                    email: user.email || "",
                    fullName: user.user_metadata?.full_name || user.user_metadata?.name || null,
                    avatarUrl: user.user_metadata?.avatar_url || null,
                    role: "MANAGER",
                },
            });
        }

        // Generate the unique REX link
        // The link uses the profile ID as the reference
        const baseUrl = process.env.NEXT_PUBLIC_APP_URL || "https://claovia.fr";
        const rexLink = `${baseUrl}/start?ref=${profile.id}`;

        return NextResponse.json({
            link: rexLink,
            managerId: profile.id,
            managerName: profile.fullName || profile.email,
        });
    } catch (error) {
        console.error("Error generating REX link:", error);
        return NextResponse.json(
            { error: "Erreur lors de la génération du lien" },
            { status: 500 }
        );
    }
}
