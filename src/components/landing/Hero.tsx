import Link from "next/link"
import { Eye, ShieldCheck, Server, Lock, LayoutDashboard, Sun, Bell, ArrowUp } from "lucide-react"

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
                            Pilotage d'Équipe Augmenté
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
                            href="#demo-section"
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

                {/* Hero Visual (3D Mockup) */}
                <div className="relative hidden lg:block perspective-1000">
                    <div className="relative transform rotate-x-12 rotate-y-inv-12 hover:rotate-0 transition-transform duration-700 preserve-3d">
                        <div className="bg-white rounded-[2rem] border border-sage-200 shadow-2xl p-6 relative z-10">
                            {/* Card Header */}
                            <div className="flex justify-between items-center mb-6 pb-6 border-b border-sage-100">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-sage-100 rounded-xl flex items-center justify-center text-sage-600">
                                        <LayoutDashboard className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-sage-900 text-lg">REX Manager • Q1 2026</h3>
                                        <p className="text-sm text-stone-500">Vue d'ensemble équipe</p>
                                    </div>
                                </div>
                                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-bold">
                                    Actif
                                </span>
                            </div>

                            {/* Content Grid */}
                            <div className="grid grid-cols-2 gap-4">
                                {/* Card 1 */}
                                <div className="bg-stone-50 p-4 rounded-xl border border-stone-100">
                                    <div className="flex justify-between items-start mb-2">
                                        <span className="text-xs font-bold text-stone-400 uppercase">Climat</span>
                                        <Sun className="w-4 h-4 text-amber-500" />
                                    </div>
                                    <p className="text-2xl font-bold text-sage-900">7.8/10</p>
                                    <p className="text-xs text-green-600 mt-1 flex items-center gap-1">
                                        <ArrowUp className="w-3 h-3" /> +0.4 pts
                                    </p>
                                </div>
                                {/* Card 2 */}
                                <div className="bg-stone-50 p-4 rounded-xl border border-stone-100">
                                    <div className="flex justify-between items-start mb-2">
                                        <span className="text-xs font-bold text-stone-400 uppercase">Alertes</span>
                                        <Bell className="w-4 h-4 text-red-500" />
                                    </div>
                                    <p className="text-2xl font-bold text-sage-900">2</p>
                                    <p className="text-xs text-red-600 mt-1 font-medium">À traiter</p>
                                </div>
                                {/* Wide Card */}
                                <div className="col-span-2 bg-sage-900 text-white p-5 rounded-xl shadow-lg relative overflow-hidden">
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2"></div>
                                    <h4 className="text-sm font-bold mb-2 relative z-10">Dernier REX : Marie D.</h4>
                                    <p className="text-xs text-sage-200 mb-4 relative z-10 line-clamp-2">
                                        "Besoin de soutien opérationnel identifié. Risque de surcharge sur le dossier Alpha..."
                                    </p>
                                    <div className="flex items-center gap-2 relative z-10">
                                        <button className="bg-white text-sage-900 px-3 py-1.5 rounded-lg text-xs font-bold hover:bg-sage-100 transition-colors">
                                            Voir l'analyse
                                        </button>
                                        <span className="text-[10px] text-sage-300">Reçu il y a 2h</span>
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
