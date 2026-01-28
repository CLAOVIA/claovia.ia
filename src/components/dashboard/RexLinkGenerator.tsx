"use client";

import { useState, useEffect } from "react";
import { Link2, Copy, Check, QrCode, RefreshCw } from "lucide-react";

interface RexLinkData {
    link: string;
    managerId: string;
    managerName: string;
}

export function RexLinkGenerator() {
    const [linkData, setLinkData] = useState<RexLinkData | null>(null);
    const [loading, setLoading] = useState(true);
    const [copied, setCopied] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const fetchLink = async () => {
        setLoading(true);
        setError(null);
        try {
            const response = await fetch("/api/rex-link");
            if (!response.ok) {
                throw new Error("Erreur lors de la récupération du lien");
            }
            const data = await response.json();
            setLinkData(data);
        } catch (err) {
            setError(err instanceof Error ? err.message : "Une erreur est survenue");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchLink();
    }, []);

    const handleCopy = async () => {
        if (!linkData?.link) return;

        try {
            await navigator.clipboard.writeText(linkData.link);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch {
            // Fallback for older browsers
            const textArea = document.createElement("textarea");
            textArea.value = linkData.link;
            document.body.appendChild(textArea);
            textArea.select();
            document.execCommand("copy");
            document.body.removeChild(textArea);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        }
    };

    if (loading) {
        return (
            <div className="bg-white rounded-2xl border border-sage-100 p-6 animate-pulse">
                <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-sage-100 rounded-xl"></div>
                    <div className="h-5 bg-sage-100 rounded w-32"></div>
                </div>
                <div className="h-12 bg-sage-50 rounded-xl"></div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="bg-white rounded-2xl border border-red-100 p-6">
                <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-red-50 rounded-xl flex items-center justify-center text-red-500">
                        <Link2 className="w-5 h-5" />
                    </div>
                    <h3 className="font-semibold text-sage-900">Lien d&apos;invitation</h3>
                </div>
                <p className="text-red-600 text-sm mb-4">{error}</p>
                <button
                    onClick={fetchLink}
                    className="flex items-center gap-2 text-sm text-sage-600 hover:text-sage-800"
                >
                    <RefreshCw className="w-4 h-4" />
                    Réessayer
                </button>
            </div>
        );
    }

    return (
        <div className="bg-white rounded-2xl border border-sage-100 p-6 shadow-sm">
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-sage-50 rounded-xl flex items-center justify-center text-sage-600">
                        <Link2 className="w-5 h-5" />
                    </div>
                    <div>
                        <h3 className="font-semibold text-sage-900">Lien d&apos;invitation</h3>
                        <p className="text-xs text-stone-400">Partagez ce lien avec votre équipe</p>
                    </div>
                </div>
                <button
                    className="p-2 rounded-lg hover:bg-sage-50 text-stone-400 hover:text-sage-600 transition-colors"
                    title="Générer QR Code"
                    disabled
                >
                    <QrCode className="w-5 h-5" />
                </button>
            </div>

            {/* Link Display */}
            <div className="flex items-center gap-2">
                <div className="flex-1 bg-sage-50 rounded-xl px-4 py-3 font-mono text-sm text-sage-800 truncate border border-sage-100">
                    {linkData?.link}
                </div>
                <button
                    onClick={handleCopy}
                    className={`flex items-center gap-2 px-4 py-3 rounded-xl font-medium text-sm transition-all ${
                        copied
                            ? "bg-green-100 text-green-700 border border-green-200"
                            : "bg-sage-800 text-white hover:bg-sage-900 shadow-sm"
                    }`}
                >
                    {copied ? (
                        <>
                            <Check className="w-4 h-4" />
                            Copié
                        </>
                    ) : (
                        <>
                            <Copy className="w-4 h-4" />
                            Copier
                        </>
                    )}
                </button>
            </div>

            {/* Instructions */}
            <p className="text-xs text-stone-400 mt-3">
                Envoyez ce lien par email, Slack ou Teams. Les collaborateurs pourront partager leur ressenti en toute confidentialité.
            </p>
        </div>
    );
}
