import Link from "next/link"
import { Eye, ShieldCheck, Server, Lock, Command, BrainCircuit, Lightbulb, Square, Briefcase, Mail, Mic2 } from "lucide-react"

export function Hero() {
    return (
        <header className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 px-6 overflow-hidden min-h-screen flex items-center">
            {/* Background Elements */}
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[600px] h-[600px] bg-sage-200/30 rounded-full blur-[100px] animate-pulse-slow"></div>
            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-[400px] h-[400px] bg-blue-100/30 rounded-full blur-[100px]"></div>

            <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">
                {/* Text Content */}
                <div className="text-left animate-fade-in-up">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-sage-200 shadow-sm mb-8">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-sage-500"></span>
                        </span>
                        <span className="text-xs font-semibold text-sage-800 tracking-wide uppercase">
                            Pilotage d&apos;Équipe Augmenté
                        </span>
                    </div>

                    <h1 className="text-5xl lg:text-7xl font-bold text-sage-900 tracking-tight leading-[1.1] mb-6">
                        Ne laissez plus vos talents<br />
                        <span className="text-stone-400">partir en silence.</span>
                    </h1>

                    <p className="text-lg text-stone-600 max-w-lg mb-10 leading-relaxed">
                        Transformez le ressenti collaborateur en <strong>plan d&apos;action managérial immédiat</strong>. Avant qu&apos;il ne soit trop tard.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 mb-12">
                        <Link
                            href="/onboarding"
                            className="px-8 py-4 rounded-full bg-sage-800 text-white text-base font-medium hover:bg-sage-900 transition-all shadow-xl shadow-sage-200/50 flex items-center justify-center gap-2 hover:-translate-y-1"
                        >
                            Essayer Gratuitement
                        </Link>
                        <Link
                            href="/onboarding"
                            className="px-8 py-4 rounded-full bg-white border border-sage-200 text-sage-800 text-base font-medium hover:bg-sage-50 transition-all flex items-center justify-center gap-2 hover:-translate-y-1"
                        >
                            <Eye className="w-4 h-4" />
                            Voir la démo
                        </Link>
                    </div>

                    <div className="flex items-center gap-6 text-xs text-stone-400 font-medium">
                        <span className="flex items-center gap-1">
                            <ShieldCheck className="w-4 h-4 text-sage-600" /> RGPD Compliant
                        </span>
                        <span className="flex items-center gap-1">
                            <Server className="w-4 h-4 text-sage-600" /> Hébergé en France
                        </span>
                        <span className="flex items-center gap-1">
                            <Lock className="w-4 h-4 text-sage-600" /> Données Chiffrées
                        </span>
                    </div>
                </div>

                {/* Hero Visual - Rapport REX Mockup */}
                <div className="relative hidden lg:block perspective-1000">
                    <div className="relative transform rotate-y-inv-12 hover:rotate-0 transition-transform duration-700 preserve-3d">
                        <div className="bg-white rounded-[2rem] border border-sage-200 shadow-2xl overflow-hidden relative z-10">
                            {/* Report Header */}
                            <header className="flex justify-between items-end border-b-2 border-sage-100 p-6 pb-4">
                                <div className="flex items-center gap-3">
                                    <div className="w-12 h-12 rounded-2xl bg-sage-900 flex items-center justify-center text-white shadow-lg">
                                        <Command className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-sage-900 tracking-tight leading-none">Rapport REX</h3>
                                        <p className="text-xs text-stone-500 font-medium mt-1">Analyse Confidentielle</p>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <p className="text-sm font-bold text-sage-900">Marie Dupont</p>
                                    <p className="text-[10px] text-stone-400 font-mono">24 Oct 2025</p>
                                </div>
                            </header>

                            <div className="p-6 space-y-5">
                                {/* Synthèse IA */}
                                <div className="bg-stone-50 p-4 rounded-xl border border-stone-100 relative">
                                    <div className="absolute -left-0.5 top-4 bottom-4 w-1 bg-sage-500 rounded-r-full"></div>
                                    <h4 className="text-[10px] font-bold text-sage-600 uppercase tracking-widest mb-2 flex items-center gap-2">
                                        <BrainCircuit className="w-3 h-3" /> Synthèse IA
                                    </h4>
                                    <p className="text-stone-700 text-xs leading-relaxed mb-3">
                                        Marie est engagée mais se sent <strong>saturée par l&apos;administratif</strong>. Décalage perçu avec un management trop axé résultats.
                                    </p>
                                    <div className="flex items-center gap-2 bg-white p-2 rounded-lg border border-stone-200 shadow-sm">
                                        <div className="bg-amber-100 p-1 rounded text-amber-600"><Lightbulb className="w-3 h-3" /></div>
                                        <p className="text-[10px] font-bold text-stone-700">Conseil : &quot;Contrôleur&quot; → &quot;Facilitateur&quot;</p>
                                    </div>
                                </div>

                                {/* Analyse Thématique Grid - 2x3 */}
                                <div>
                                    <h4 className="text-[10px] font-bold text-stone-400 uppercase tracking-widest mb-3">Analyse par Thématique</h4>
                                    <div className="grid grid-cols-2 gap-2">
                                        <div className="p-2.5 bg-white rounded-lg border border-stone-200 shadow-sm flex gap-2">
                                            <div className="mt-0.5"><div className="w-2 h-2 rounded-full bg-orange-500"></div></div>
                                            <div>
                                                <p className="text-[8px] font-bold text-stone-400 uppercase">T1. Relation</p>
                                                <p className="text-xs font-bold text-sage-900">Manque soutien</p>
                                            </div>
                                        </div>
                                        <div className="p-2.5 bg-white rounded-lg border border-stone-200 shadow-sm flex gap-2">
                                            <div className="mt-0.5"><div className="w-2 h-2 rounded-full bg-red-500"></div></div>
                                            <div>
                                                <p className="text-[8px] font-bold text-stone-400 uppercase">T2. Charge</p>
                                                <p className="text-xs font-bold text-sage-900">Saturée</p>
                                            </div>
                                        </div>
                                        <div className="p-2.5 bg-white rounded-lg border border-stone-200 shadow-sm flex gap-2">
                                            <div className="mt-0.5"><div className="w-2 h-2 rounded-full bg-yellow-400"></div></div>
                                            <div>
                                                <p className="text-[8px] font-bold text-stone-400 uppercase">T3. Motivation</p>
                                                <p className="text-xs font-bold text-sage-900">Freinée</p>
                                            </div>
                                        </div>
                                        <div className="p-2.5 bg-white rounded-lg border border-stone-200 shadow-sm flex gap-2">
                                            <div className="mt-0.5"><div className="w-2 h-2 rounded-full bg-green-500"></div></div>
                                            <div>
                                                <p className="text-[8px] font-bold text-stone-400 uppercase">T4. Objectifs</p>
                                                <p className="text-xs font-bold text-sage-900">Clairs</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Plan d'Action */}
                                <div>
                                    <h4 className="text-[10px] font-bold text-stone-400 uppercase tracking-widest mb-3">Plan d&apos;Action</h4>
                                    <div className="space-y-2">
                                        <div className="flex items-center gap-3 p-3 bg-white border-l-4 border-red-500 rounded-r-lg shadow-sm ring-1 ring-stone-100">
                                            <Square className="w-4 h-4 text-stone-300 shrink-0" />
                                            <div className="flex-1">
                                                <div className="flex justify-between items-center gap-2">
                                                    <h5 className="text-xs font-bold text-sage-900">Envoyer l&apos;email</h5>
                                                    <span className="text-[8px] bg-red-100 text-red-700 px-1.5 py-0.5 rounded font-bold uppercase">Maintenant</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-3 p-3 bg-white border-l-4 border-sage-500 rounded-r-lg shadow-sm ring-1 ring-stone-100">
                                            <Square className="w-4 h-4 text-stone-300 shrink-0" />
                                            <div className="flex-1">
                                                <div className="flex justify-between items-center gap-2">
                                                    <h5 className="text-xs font-bold text-sage-900">Point Hebdo (30 min)</h5>
                                                    <span className="text-[8px] bg-stone-100 text-stone-600 px-1.5 py-0.5 rounded font-bold uppercase">Planifier</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Kit Manager */}
                                <div className="bg-sage-50 p-4 rounded-xl border border-sage-100">
                                    <div className="flex items-center gap-2 mb-3">
                                        <div className="bg-white p-1.5 rounded-lg shadow-sm text-sage-700">
                                            <Briefcase className="w-4 h-4" />
                                        </div>
                                        <h4 className="text-xs font-bold text-sage-900 uppercase tracking-wider">Kit Manager</h4>
                                    </div>
                                    <div className="grid grid-cols-2 gap-2">
                                        <div className="bg-white rounded-lg p-2.5 border border-sage-200 flex items-center gap-2">
                                            <Mail className="w-4 h-4 text-blue-600" />
                                            <p className="text-[10px] font-bold text-stone-800">Email prêt</p>
                                        </div>
                                        <div className="bg-white rounded-lg p-2.5 border border-sage-200 flex items-center gap-2">
                                            <Mic2 className="w-4 h-4 text-purple-600" />
                                            <p className="text-[10px] font-bold text-stone-800">Script entretien</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Floating Element behind */}
                        <div className="absolute -z-10 top-10 -right-10 w-full h-full bg-sage-200 rounded-[2rem] opacity-50 blur-sm transform translate-y-4"></div>
                    </div>
                </div>
            </div>
        </header>
    )
}
