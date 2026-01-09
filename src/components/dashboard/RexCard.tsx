import Link from "next/link";
import { formatRelativeTime, getScoreColor, getUrgencyColor } from "@/lib/utils";
import { ArrowRight, BrainCircuit, User } from "lucide-react";

interface RexReportSummary {
    id: string;
    summary: string | null;
    climateScore: number | null;
    createdAt: Date;
    status: string;
    manager: {
        fullName: string | null;
    };
    // We don't have direct access to 'collaborator name' in RexReport unless we join via entries -> teamMember
    // For the list, we might want to show "REX from [Collaborator Name]"?
    // Current schema: RexReport -> entries -> teamMember.
    // We'll fetching this in the page query.
    entries: {
        teamMember: {
            name: string | null;
        } | null;
    }[];
}

interface RexCardProps {
    report: RexReportSummary;
}

export function RexCard({ report }: RexCardProps) {
    // Get collaborator name (assuming one primary collaborator per report for now, or use first entry)
    const collaboratorName = report.entries[0]?.teamMember?.name || "Anonyme";

    return (
        <Link
            href={`/dashboard/rex/${report.id}`}
            className="block group"
        >
            <div className="bg-white rounded-xl border border-stone-200 p-6 hover:shadow-md hover:border-sage-300 transition-all duration-300 h-full flex flex-col">

                {/* Header */}
                <div className="flex justify-between items-start mb-4">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-sage-50 flex items-center justify-center text-sage-600 font-bold text-sm">
                            {collaboratorName.charAt(0).toUpperCase()}
                        </div>
                        <div>
                            <h3 className="font-bold text-sage-900 text-sm">{collaboratorName}</h3>
                            <p className="text-xs text-stone-500 flex items-center gap-1">
                                {formatRelativeTime(report.createdAt)}
                            </p>
                        </div>
                    </div>

                    {report.climateScore && (
                        <div className={`text-lg font-bold ${getScoreColor(report.climateScore)}`}>
                            {report.climateScore.toFixed(1)}<span className="text-stone-300 text-xs font-normal">/10</span>
                        </div>
                    )}
                </div>

                {/* Summary Snippet */}
                <div className="flex-1 mb-6">
                    <div className="flex gap-3">
                        <div className="w-1 min-h-[40px] bg-stone-100 rounded-full shrink-0 group-hover:bg-sage-200 transition-colors"></div>
                        <p className="text-sm text-stone-600 line-clamp-3 leading-relaxed">
                            {report.summary || "Analyse en cours..."}
                        </p>
                    </div>
                </div>

                {/* Footer info/tags */}
                <div className="flex items-center justify-between mt-auto pt-4 border-t border-stone-50">
                    <div className="flex gap-2">
                        <span className="px-2 py-1 rounded-md bg-stone-50 text-[10px] font-medium text-stone-500 border border-stone-100">
                            REX #Initial
                        </span>
                        {report.status === 'SENT' && (
                            <span className="px-2 py-1 rounded-md bg-green-50 text-[10px] font-medium text-green-700 border border-green-100 flex items-center gap-1">
                                <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div> Traité
                            </span>
                        )}
                    </div>

                    <div className="text-sage-600 opacity-0 group-hover:opacity-100 transition-opacity transform group-hover:translate-x-1">
                        <ArrowRight className="w-4 h-4" />
                    </div>
                </div>

            </div>
        </Link>
    );
}
