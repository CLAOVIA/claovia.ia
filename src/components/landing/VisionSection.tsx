"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
    AlertTriangle,
    ArrowDown,
    Target,
    Briefcase,
    GraduationCap
} from "lucide-react";

export function VisionSection() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    return (
        <section ref={containerRef} className="py-24 bg-sage-50 relative" id="vision-section">
            <div className="sticky top-20 max-w-7xl mx-auto px-6 mb-20 text-center z-10">
                <h2 className="text-3xl md:text-5xl font-bold text-sage-900 mb-6">
                    Du &quot;Principe de Peter&quot; à<br />
                    <span className="text-sage-600">l&apos;Augmentation Managériale</span>
                </h2>
                <p className="text-lg text-stone-600 max-w-2xl mx-auto">
                    Pourquoi les managers de proximité échouent-ils souvent malgré leur talent ? Ce n&apos;est pas de leur faute, c&apos;est structurel.
                </p>
            </div>

            <div className="max-w-4xl mx-auto px-6 relative pb-40">
                {/* Progress Line */}
                <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-stone-200 -translate-x-1/2">
                    <motion.div
                        className="absolute top-0 w-full bg-sage-600 origin-top"
                        style={{ scaleY: scrollYProgress, bottom: 0 }}
                    />
                </div>

                {/* Node 1: L'Expert */}
                <div className="relative mb-40 flex items-center justify-start md:justify-end w-full md:w-1/2 pr-0 md:pr-12 md:ml-auto">
                    <div className="bg-white p-6 rounded-2xl border border-stone-100 shadow-sm relative z-10 max-w-sm ml-12 md:ml-0 md:mr-12">
                        <div className="absolute top-6 -left-16 md:hidden w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 border-4 border-white">
                            <Target className="w-4 h-4" />
                        </div>
                        {/* Desktop Dot */}
                        <div className="hidden md:flex absolute top-1/2 -left-[68px] w-8 h-8 bg-blue-100 rounded-full items-center justify-center text-blue-600 border-4 border-white -translate-y-1/2">
                            <Target className="w-4 h-4" />
                        </div>

                        <h3 className="font-bold text-sage-900 text-lg mb-2">1. L&apos;Expert Technique</h3>
                        <p className="text-sm text-stone-600">
                            Excellent dans son métier opérationnel. Promu manager pour ses résultats individuels.
                        </p>
                    </div>
                </div>

                {/* Node 2: Le Choc */}
                <div className="relative mb-40 flex items-center justify-start w-full md:w-1/2 pl-12">
                    <div className="bg-white p-6 rounded-2xl border border-red-100 shadow-sm relative z-10 max-w-sm">
                        <div className="absolute top-6 -left-16 w-8 h-8 bg-red-100 rounded-full flex items-center justify-center text-red-600 border-4 border-white">
                            <AlertTriangle className="w-4 h-4" />
                        </div>
                        <div className="hidden md:flex absolute top-1/2 -right-[68px] w-8 h-8 bg-red-100 rounded-full items-center justify-center text-red-600 border-4 border-white -translate-y-1/2">
                            <AlertTriangle className="w-4 h-4" />
                        </div>

                        <h3 className="font-bold text-red-900 text-lg mb-2">2. Le Choc de Réalité</h3>
                        <p className="text-sm text-stone-600">
                            Soudain, il doit gérer des humains. 80% de son temps est pris par des tâches administratives et de la psychologie de comptoir. Il perd pied.
                        </p>
                    </div>
                </div>

                {/* Node 3: La Solution (Center) */}
                <div className="relative flex justify-center pt-12">
                    <div className="bg-sage-900 text-white p-8 rounded-3xl shadow-2xl relative z-10 max-w-lg text-center border-4 border-white">
                        <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-sage-500 rounded-full flex items-center justify-center text-white border-4 border-white">
                            <GraduationCap className="w-6 h-6" />
                        </div>

                        <h3 className="font-bold text-2xl mb-4 mt-2">3. Le Manager Augmenté</h3>
                        <p className="text-sage-100 mb-6">
                            Claovia lui redonne ses super-pouvoirs. L&apos;IA gère l&apos;écoute et l&apos;analyse, lui permettant d&apos;agir avec justesse et rapidité.
                        </p>
                        <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-lg text-sm font-bold">
                            <ArrowDown className="w-4 h-4" /> +30% de Productivité Équipe
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
