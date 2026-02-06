import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

export function StartSection() {
    return (
        <section className="py-24 px-6 bg-sage-900 text-white text-center relative overflow-hidden" id="start-section">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/20 rounded-full blur-[120px]"></div>

            <div className="relative z-10 max-w-4xl mx-auto">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 shadow-sm mb-8 backdrop-blur-sm">
                    <Sparkles className="w-4 h-4 text-emerald-300" />
                    <span className="text-xs font-semibold text-white tracking-wide uppercase">Démarrer maintenant</span>
                </div>

                <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
                    Prêt à libérer le potentiel <br /> de votre équipe ?
                </h2>

                <p className="text-xl text-sage-200 max-w-2xl mx-auto mb-12">
                    Commencez par un premier REX. C&apos;est gratuit, sécurisé et immédiat.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Link
                        href="/rex"
                        className="px-8 py-4 bg-white text-sage-900 rounded-full font-bold text-lg hover:bg-sage-50 transition-all hover:scale-105 flex items-center gap-2 group"
                    >
                        Lancer un REX
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <Link
                        href="#demo-section"
                        className="px-8 py-4 bg-transparent border border-white/20 text-white rounded-full font-bold text-lg hover:bg-white/10 transition-all"
                    >
                        Découvrir la démo
                    </Link>
                </div>

                {/* Mode Explanation */}
                <div className="mt-8 max-w-2xl mx-auto bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                    <div className="grid sm:grid-cols-2 gap-4 text-left">
                        <div className="flex items-start gap-3">
                            <div className="w-3 h-3 mt-1.5 rounded-full bg-emerald-400 shrink-0"></div>
                            <div>
                                <p className="text-sm font-bold text-white">Mode Test</p>
                                <p className="text-xs text-sage-200">Le collaborateur reçoit sa synthèse et le manager reçoit le REX.</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-3">
                            <div className="w-3 h-3 mt-1.5 rounded-full bg-blue-400 shrink-0"></div>
                            <div>
                                <p className="text-sm font-bold text-white">Mode Réel</p>
                                <p className="text-xs text-sage-200">Le collaborateur reçoit sa synthèse et le manager reçoit également les résultats.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
