import { prisma } from "@/lib/prisma";
import { createClient } from "@/lib/supabase/server";
import { formatDate, getScoreColor, getUrgencyColor } from "@/lib/utils";
import { ThemeAnalysis, ManagerKit } from "@/types";
import {
    ArrowLeft,
    BrainCircuit,
    Lightbulb,
    Download,
    Mail,
    Mic2,
    AlertTriangle,
    Copy,
    ChevronDown,
    User,
    LayoutDashboard
} from "lucide-react";
import Link from "next/link";
import { redirect, notFound } from "next/navigation";

export default async function RexDetailPage({ params }: { params: { id: string } }) {
    const supabase = await createClient();
    const { data: { user } } = await supabase.auth.getUser();

    if (!user) {
        redirect("/login");
    }

    const report = await prisma.rexReport.findUnique({
        where: {
            id: params.id,
            managerId: user.id, // Security check
        },
        include: {
            entries: {
                include: {
                    teamMember: true,
                },
            },
        },
    });

    if (!report) {
        notFound();
    }

    // Cast JSON types safely
    const themes = (report.themes as unknown as ThemeAnalysis[]) || [];
    const recommendations = (report.recommendations as unknown as string[]) || [];
    const managerKit = (report.managerKit as unknown as ManagerKit) || { emailDraft: "", interviewScript: "", pitfalls: [] };
    const collaboratorName = report.entries[0]?.teamMember?.name || "Anonyme";

    return (
        <div className="space-y-8 animate-fade-in-up">

            {/* Navigation & Header */}
            <div className="flex flex-col gap-4">
                <Link
                    href="/dashboard"
                    className="inline-flex items-center gap-2 text-sm text-stone-500 hover:text-sage-800 transition-colors w-fit"
                >
                    <ArrowLeft className="w-4 h-4" /> Retour au tableau de bord
                </Link>

                <div className="flex justify-between items-start bg-white p-6 rounded-2xl border border-stone-200 shadow-sm">
                    <div className="flex items-center gap-4">
                        <div className="w-14 h-14 rounded-xl bg-sage-900 flex items-center justify-center text-white shadow-md">
                            <LayoutDashboard className="w-7 h-7" />
                        </div>
                        <div>
                            <h1 className="font-bold text-sage-900 text-2xl">REX {formatDate(report.createdAt)}</h1>
                            <p className="text-sm text-stone-500 mt-1 flex items-center gap-2">
                                <User className="w-4 h-4" /> {collaboratorName}
                                <span className="text-stone-300">|</span>
                                Status: <span className="font-medium text-sage-700">{report.status}</span>
                            </p>
                        </div>
                    </div>

                    <div className="flex gap-3">
                        {report.pdfUrl && (
                            <a
                                href={report.pdfUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 px-4 py-2 rounded-lg border border-stone-200 bg-white text-sm font-medium text-stone-600 hover:bg-stone-50 transition-colors"
                            >
                                <Download className="w-4 h-4" /> Télécharger PDF
                            </a>
                        )}
                    </div>
                </div>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">

                {/* LEFT COLUMN: Analysis (2/3) */}
                <div className="lg:col-span-2 space-y-8">

                    {/* 1. Synthèse */}
                    <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-sm">
                        <h4 className="text-xs font-bold text-stone-400 uppercase tracking-widest flex items-center gap-2 mb-6">
                            <BrainCircuit className="w-4 h-4 text-sage-500" /> Synthèse & Recommandation
                        </h4>
                        <div className="flex gap-4 items-start">
                            <div className="w-1 h-full min-h-[60px] bg-orange-400 rounded-full shrink-0"></div>
                            <div className="space-y-4">
                                <p className="text-stone-700 leading-relaxed text-lg">
                                    {report.summary}
                                </p>

                                {/* Recommendations List */}
                                {recommendations.length > 0 && (
                                    <div className="bg-sage-50 rounded-xl p-4 border border-sage-100">
                                        <h5 className="flex items-center gap-2 font-bold text-sage-900 text-sm mb-3">
                                            <Lightbulb className="w-4 h-4 text-amber-500" /> Conseils Rapides
                                        </h5>
                                        <ul className="space-y-2">
                                            {recommendations.map((rec, i) => (
                                                <li key={i} className="flex gap-2 text-sm text-stone-600">
                                                    <span className="text-sage-400">•</span> {rec}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* 2. Thématiques Grid */}
                    <div>
                        <h4 className="text-xs font-bold text-stone-400 uppercase tracking-widest mb-4">Analyse par Thématique</h4>
                        <div className="grid md:grid-cols-2 gap-4">
                            {themes.map((theme, i) => (
                                <div key={i} className="p-4 bg-white rounded-xl border border-stone-100 shadow-sm hover:border-sage-200 transition-colors">
                                    <div className="flex justify-between mb-2">
                                        <p className="text-[10px] text-stone-400 font-bold uppercase">{theme.name}</p>
                                        <div className={`w-2 h-2 rounded-full ${getUrgencyColor(theme.urgency).split(' ')[1].replace('bg-', 'bg-').replace('-50', '-500')}`}></div>
                                    </div>
                                    <div className="flex justify-between items-end mb-2">
                                        <p className="font-bold text-sage-900">{theme.score}/10</p>
                                    </div>
                                    <p className="text-xs text-stone-600 font-medium mb-1">
                                        {theme.insight}
                                    </p>
                                    <p className="text-[10px] text-stone-400 italic mt-2 border-t border-stone-50 pt-2">
                                        &quot;{theme.verbatim}&quot;
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>

                {/* RIGHT COLUMN: Manager Kit (1/3) */}
                <div className="space-y-6">
                    <div className="bg-stone-100 p-6 rounded-2xl border border-stone-200 sticky top-24">
                        <div className="flex items-center justify-between mb-6">
                            <h4 className="text-sm font-bold text-sage-900 uppercase tracking-widest flex items-center gap-2">
                                <User className="w-5 h-5 text-sage-600" /> Kit Manager
                            </h4>
                        </div>

                        <div className="space-y-4">

                            {/* Email Draft */}
                            {managerKit.emailDraft && (
                                <details className="group bg-white rounded-xl border border-stone-200 overflow-hidden open:shadow-lg transition-all">
                                    <summary className="flex items-center justify-between p-4 cursor-pointer hover:bg-stone-50 transition-colors">
                                        <div className="flex items-center gap-3">
                                            <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600 shrink-0">
                                                <Mail className="w-4 h-4" />
                                            </div>
                                            <span className="text-sm font-bold text-stone-800">Email Type</span>
                                        </div>
                                        <ChevronDown className="w-4 h-4 text-stone-400 group-open:rotate-180 transition-transform" />
                                    </summary>
                                    <div className="p-4 pt-0 border-t border-stone-100 mt-2 bg-stone-50/30">
                                        <div className="mt-2 text-xs text-stone-600 font-serif whitespace-pre-wrap bg-white p-3 rounded border border-stone-200">
                                            {managerKit.emailDraft}
                                        </div>
                                        <button className="w-full mt-3 flex items-center justify-center gap-2 bg-sage-100 text-sage-800 hover:bg-sage-200 py-2 rounded-lg text-xs font-bold transition-colors">
                                            <Copy className="w-3 h-3" /> Copier
                                        </button>
                                    </div>
                                </details>
                            )}

                            {/* Script */}
                            {managerKit.interviewScript && (
                                <details className="group bg-white rounded-xl border border-stone-200 overflow-hidden open:shadow-lg transition-all">
                                    <summary className="flex items-center justify-between p-4 cursor-pointer hover:bg-stone-50 transition-colors">
                                        <div className="flex items-center gap-3">
                                            <div className="w-8 h-8 rounded-lg bg-purple-50 flex items-center justify-center text-purple-600 shrink-0">
                                                <Mic2 className="w-4 h-4" />
                                            </div>
                                            <span className="text-sm font-bold text-stone-800">Guide d&apos;Entretien</span>
                                        </div>
                                        <ChevronDown className="w-4 h-4 text-stone-400 group-open:rotate-180 transition-transform" />
                                    </summary>
                                    <div className="p-4 pt-0 border-t border-stone-100 mt-2 bg-stone-50/30">
                                        <div className="mt-2 text-xs text-stone-600 whitespace-pre-wrap">
                                            {managerKit.interviewScript}
                                        </div>
                                    </div>
                                </details>
                            )}

                            {/* Pitfalls */}
                            {managerKit.pitfalls && managerKit.pitfalls.length > 0 && (
                                <div className="bg-amber-50 border border-amber-100 p-4 rounded-xl">
                                    <div className="flex items-center gap-2 mb-2">
                                        <AlertTriangle className="w-4 h-4 text-amber-600" />
                                        <span className="text-xs font-bold text-amber-800 uppercase">À Éviter</span>
                                    </div>
                                    <ul className="list-disc pl-4 space-y-1">
                                        {managerKit.pitfalls.map((pitfall, i) => (
                                            <li key={i} className="text-xs text-amber-700">
                                                {pitfall}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
