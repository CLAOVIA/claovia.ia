"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, Clock, Zap } from "lucide-react";
import { trackEvent } from "@/lib/gtm";

export default function OnboardingPage() {
    return (
        <main className="min-h-screen bg-stone-50 relative overflow-hidden flex items-center justify-center p-6">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-gradient-to-br from-sage-50 via-white to-stone-50" />
            <div
                className="absolute top-20 right-1/4 w-[500px] h-[500px] bg-sage-200/30 rounded-full blur-[120px] animate-pulse-slow"
            />
            <div
                className="absolute bottom-20 left-1/4 w-[400px] h-[400px] bg-blue-100/20 rounded-full blur-[100px]"
            />

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="relative z-10 max-w-2xl w-full bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/50 p-8 md:p-12 text-center"
            >
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sage-100/50 border border-sage-200 text-sage-700 text-sm font-medium mb-8">
                    <Zap className="w-4 h-4 text-amber-500" />
                    <span>Démonstration Interactive</span>
                </div>

                <h1 className="text-3xl md:text-5xl font-bold text-sage-900 mb-6 tracking-tight">
                    Prêt à tester <span className="text-sage-600">Claovia</span> ?
                </h1>

                <p className="text-lg text-stone-600 mb-10 leading-relaxed max-w-lg mx-auto">
                    Découvrez comment l'IA transforme un simple feedback en plan d'action managérial.
                    Cette démo vous met dans la peau d'un collaborateur, puis d'un manager.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10 text-left max-w-lg mx-auto">

                    <div className="bg-white p-4 rounded-xl border border-stone-100 shadow-sm">
                        <CheckCircle className="w-5 h-5 text-sage-500 mb-2" />
                        <h3 className="font-bold text-sage-900 text-sm">Concret</h3>
                        <p className="text-xs text-stone-500">Générez un vrai rapport</p>
                    </div>
                    <div className="bg-white p-4 rounded-xl border border-stone-100 shadow-sm">
                        <Zap className="w-5 h-5 text-sage-500 mb-2" />
                        <h3 className="font-bold text-sage-900 text-sm">Gratuit</h3>
                        <p className="text-xs text-stone-500">Sans engagement</p>
                    </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link
                        href="/rex"
                        onClick={() => trackEvent("cta_click", { cta_name: "commencer_experience", section: "onboarding" })}
                        className="group relative px-8 py-4 rounded-full bg-sage-800 text-white text-lg font-medium overflow-hidden transition-all shadow-xl shadow-sage-300/30 hover:shadow-2xl hover:shadow-sage-300/40 hover:-translate-y-1 flex items-center justify-center gap-2 w-full sm:w-auto"
                    >
                        <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                        Commencer l'expérience
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <Link
                        href="/"
                        className="px-8 py-4 rounded-full bg-transparent border border-stone-200 text-stone-600 text-lg font-medium hover:bg-stone-50 transition-all flex items-center justify-center w-full sm:w-auto"
                    >
                        Retour
                    </Link>
                </div>

                <div className="mt-8 bg-sage-50/80 p-4 rounded-xl border border-sage-100 max-w-lg mx-auto text-left">
                    <p className="text-xs font-bold text-sage-800 mb-2 text-center uppercase tracking-wide">Durant la discussion avec Clao :</p>
                    <div className="flex flex-col gap-2">
                        <button
                            type="button"
                            onClick={() => trackEvent("mode_click", { mode: "test", section: "onboarding" })}
                            className="flex items-start gap-2 rounded-lg p-1 hover:bg-sage-100/50 transition-colors text-left cursor-pointer"
                        >
                            <span className="text-base">🧪</span>
                            <div>
                                <span className="text-xs font-bold text-sage-900">Mode TEST (pour moi)</span>
                                <p className="text-[10px] text-stone-500 leading-tight">Vous recevez le rapport par email pour tester l'analyse sans impact.</p>
                            </div>
                        </button>
                        <button
                            type="button"
                            onClick={() => trackEvent("mode_click", { mode: "reel", section: "onboarding" })}
                            className="flex items-start gap-2 rounded-lg p-1 hover:bg-sage-100/50 transition-colors text-left cursor-pointer"
                        >
                            <span className="text-base">🚀</span>
                            <div>
                                <span className="text-xs font-bold text-sage-900">Mode RÉEL (envoyer au manager)</span>
                                <p className="text-[10px] text-stone-500 leading-tight">Le rapport est envoyé à votre manager pour initier une vraie démarche.</p>
                            </div>
                        </button>
                    </div>
                </div>

                <p className="mt-8 text-xs text-stone-400">
                    Aucune donnée personnelle n'est conservée à des fins commerciales.
                </p>
            </motion.div>
        </main>
    );
}
