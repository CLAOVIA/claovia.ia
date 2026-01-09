import { prisma } from "@/lib/prisma";
import { createClient } from "@/lib/supabase/server";
import { RexCard } from "@/components/dashboard/RexCard";
import { Sparkles, Filter } from "lucide-react";
import { redirect } from "next/navigation";

export default async function DashboardPage() {
    const supabase = await createClient();
    const { data: { user } } = await supabase.auth.getUser();

    if (!user) {
        redirect("/login");
    }

    // Fetch reports for this manager
    // Note: user.id must match Profile.id. 
    // If Profile doesn't exist, we might return empty or error.

    const reports = await prisma.rexReport.findMany({
        where: {
            managerId: user.id,
        },
        include: {
            entries: {
                include: {
                    teamMember: true,
                },
            },
            manager: true, // Optional, checking if exists
        },
        orderBy: {
            createdAt: 'desc',
        },
    });

    return (
        <div className="space-y-8">

            {/* Page Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-sage-900">Tableau de bord</h1>
                    <p className="text-stone-500 text-sm">Vue d&apos;ensemble de vos retours d&apos;expérience.</p>
                </div>

                <div className="flex items-center gap-3">
                    <button className="flex items-center gap-2 px-4 py-2 rounded-lg border border-stone-200 bg-white text-sm font-medium text-stone-600 hover:bg-stone-50">
                        <Filter className="w-4 h-4" /> Filtres
                    </button>
                    <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-sage-800 text-white text-sm font-medium hover:bg-sage-900 shadow-sm">
                        <Sparkles className="w-4 h-4" /> Nouvelle Analyse
                    </button>
                </div>
            </div>

            {/* Reports Grid */}
            {reports.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {reports.map((report) => (
                        <RexCard key={report.id} report={report} />
                    ))}
                </div>
            ) : (
                <div className="text-center py-20 bg-white rounded-2xl border border-dashed border-stone-300">
                    <div className="w-16 h-16 bg-sage-50 rounded-full flex items-center justify-center mx-auto mb-4 text-sage-500">
                        <Sparkles className="w-8 h-8" />
                    </div>
                    <h3 className="text-lg font-bold text-sage-900 mb-2">Aucun REX pour le moment</h3>
                    <p className="text-stone-500 max-w-sm mx-auto mb-6">
                        Invitez votre équipe à partager leur ressenti pour commencer à recevoir des analyses.
                    </p>
                    {/* Maybe a link to invite? or copy link */}
                </div>
            )}

        </div>
    );
}
