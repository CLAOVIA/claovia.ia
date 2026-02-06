"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion, useMotionValue, useTransform, useSpring, useReducedMotion } from "framer-motion";
import {
    ShieldCheck,
    Server,
    Lock,
    Command,
    BrainCircuit,
    Lightbulb,
    Square,
    Briefcase,
    Mail,
    Mic2,
    FileText,
    CheckSquare,
    Sparkles,
    Play,
    Zap
} from "lucide-react";

// Composant Badge animé
function AnimatedBadge({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
    return (
        <motion.span
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay, duration: 0.5 }}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/80 backdrop-blur-sm border border-sage-200 shadow-sm text-xs font-medium text-sage-700"
        >
            {children}
        </motion.span>
    );
}

// Composant Mockup 3D du Rapport REX
function ReportMockup3D() {
    const prefersReducedMotion = useReducedMotion();
    const containerRef = useRef<HTMLDivElement>(null);

    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // Optimized springs with lower stiffness for smoother animations
    const rotateX = useSpring(useTransform(mouseY, [-300, 300], [5, -5]), { stiffness: 50, damping: 20, mass: 0.5 });
    const rotateY = useSpring(useTransform(mouseX, [-300, 300], [-5, 5]), { stiffness: 50, damping: 20, mass: 0.5 });

    const handleMouseMove = (e: React.MouseEvent) => {
        if (prefersReducedMotion || !containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        mouseX.set(e.clientX - centerX);
        mouseY.set(e.clientY - centerY);
    };

    const handleMouseLeave = () => {
        mouseX.set(0);
        mouseY.set(0);
    };

    // Callouts animés
    const callouts = [
        { label: "Synthèse IA", position: "top-[140px] -left-8", delay: 1.2 },
        { label: "Plan d'action", position: "top-[340px] -right-8", delay: 1.4 },
        { label: "Email prêt", position: "bottom-[80px] -left-8", delay: 1.6 }
    ];

    return (
        <div
            ref={containerRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="relative w-full max-w-[480px] mx-auto py-10" // Increased max-width and Py for breathing room
            style={{ perspective: "1500px" }} // Increased perspective for less distortion
        >
            {/* Glow effect behind - reduced blur for performance */}
            <div className="absolute inset-0 bg-gradient-to-br from-sage-300/40 via-sage-200/30 to-transparent rounded-[2rem] blur-2xl -z-10" />

            <motion.div
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.3 }}
                style={{
                    rotateX: prefersReducedMotion ? 0 : rotateX,
                    rotateY: prefersReducedMotion ? 0 : rotateY,
                    transformStyle: "preserve-3d"
                }}
                className="relative" // Removed will-change-transform to avoid low-res rasterization
            >
                {/* Shadow layer */}
                <div className="absolute inset-0 bg-sage-900/10 rounded-[2rem] blur-xl translate-y-8 translate-x-4 -z-10" />

                {/* Main card - Pixel perfect rendering */}
                <div className="relative bg-white rounded-[1.5rem] border border-sage-200 shadow-2xl overflow-hidden ring-1 ring-black/5 backface-hidden"
                    style={{ transform: "translateZ(1px)" }}>

                    {/* Report Header */}
                    <header className="flex justify-between items-end border-b border-sage-100 p-6 pb-4 bg-white">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-xl bg-sage-900 flex items-center justify-center text-white shadow-lg">
                                <Command className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-sage-900 tracking-tight leading-none">Rapport REX</h3>
                                <p className="text-[11px] text-stone-500 font-medium mt-1 uppercase tracking-wide">Analyse Confidentielle</p>
                            </div>
                        </div>
                        <div className="text-right">
                            <p className="text-sm font-bold text-sage-900">Marie Dupont</p>
                            <p className="text-[10px] text-stone-400 font-mono">24 Oct 2025</p>
                        </div>
                    </header>

                    <div className="p-6 space-y-5 bg-stone-50/30">
                        {/* Synthèse IA */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.5, duration: 0.6 }}
                            className="bg-white p-4 rounded-xl border border-sage-100 shadow-sm relative group hover:border-sage-300 transition-colors"
                        >
                            <div className="absolute -left-px top-4 bottom-4 w-1 bg-sage-500 rounded-r-full" />
                            <h4 className="text-[10px] font-bold text-sage-600 uppercase tracking-widest mb-2 flex items-center gap-1.5">
                                <BrainCircuit className="w-3.5 h-3.5" /> Synthèse IA
                            </h4>
                            <p className="text-stone-800 text-xs leading-relaxed mb-3 font-medium">
                                Marie est très engagée mais <strong>saturée par la charge administrative</strong>. Elle ressent un déséquilibre "Effort / Valorisation".
                            </p>
                            <div className="flex items-center gap-2 bg-amber-50 p-2 rounded-lg border border-amber-100">
                                <div className="text-amber-600"><Lightbulb className="w-3 h-3" /></div>
                                <p className="text-[10px] font-bold text-amber-800">Conseil : Positionnez-vous en "Facilitateur" plutôt qu'en "Contrôleur".</p>
                            </div>
                        </motion.div>

                        {/* Thématiques Grid */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.7, duration: 0.6 }}
                        >
                            <h4 className="text-[10px] font-bold text-stone-400 uppercase tracking-widest mb-2 pl-1">Analyse Thématique</h4>
                            <div className="grid grid-cols-1 gap-2">
                                {[
                                    { label: "Relation", value: "Manque soutien", desc: "Sentiment d'isolement décisionnel", color: "bg-orange-500" },
                                    { label: "Charge", value: "Saturée", desc: "Débordement sur vie perso", color: "bg-red-500" },
                                    { label: "Motivation", value: "Freinée", desc: "Perte de sens progressive", color: "bg-yellow-400" },
                                    { label: "Objectifs", value: "Clairs", desc: "Cap aligné avec la vision", color: "bg-green-500" }
                                ].map((item, i) => (
                                    <div key={i} className="p-2.5 bg-white rounded-lg border border-stone-200 shadow-sm flex items-center gap-3 hover:translate-x-1 transition-transform cursor-default">
                                        <div className={`w-2 h-2 rounded-full ${item.color} shrink-0`} />
                                        <div className="flex-1 flex justify-between items-center">
                                            <div>
                                                <p className="text-[9px] font-bold text-stone-400 uppercase tracking-wide">T{i + 1}. {item.label}</p>
                                                <p className="text-xs font-bold text-sage-900">{item.value}</p>
                                            </div>
                                            <p className="text-[10px] text-stone-500 font-medium text-right max-w-[140px] leading-tight">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Plan d'Action - Simplified for space */}
                        <div className="pt-2 border-t border-stone-100">
                            <div className="flex justify-between items-center mb-2">
                                <h4 className="text-[10px] font-bold text-stone-400 uppercase tracking-widest pl-1">Plan d&apos;Action</h4>
                                <span className="text-[9px] text-sage-600 bg-sage-50 px-2 py-0.5 rounded-full font-medium">3 actions</span>
                            </div>
                            <div className="flex items-center gap-3 p-3 bg-white border-l-4 border-red-500 rounded-lg shadow-sm">
                                <Square className="w-4 h-4 text-stone-300 shrink-0" />
                                <div className="flex-1 flex justify-between items-center">
                                    <div>
                                        <h5 className="text-[11px] font-bold text-sage-900">Envoyer l&apos;email de rassurance</h5>
                                        <p className="text-[9px] text-stone-500">Modèle "Reconnaissance" généré</p>
                                    </div>
                                    <span className="text-[9px] bg-red-100 text-red-700 px-2 py-0.5 rounded font-bold uppercase">Maintenant</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Callouts - Sharper */}
                {callouts.map((callout, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: callout.delay, duration: 0.4 }}
                        className={`absolute ${callout.position} z-20 hidden md:block`}
                    >
                        <div className="bg-white px-4 py-2 rounded-full shadow-xl border border-sage-200 flex items-center gap-2 transform hover:scale-105 transition-transform">
                            <div className="w-2 h-2 rounded-full bg-sage-500 animate-pulse" />
                            <span className="text-xs font-bold text-sage-800 whitespace-nowrap">{callout.label}</span>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
}

// Hero Principal
export function HeroPremium() {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setIsLoaded(true), 0);
        return () => clearTimeout(timer);
    }, []);

    return (
        <header className="relative pt-28 pb-20 lg:pt-36 lg:pb-28 px-6 overflow-hidden min-h-screen flex items-center">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-sage-50 via-white to-stone-50" />

            {/* Noise texture overlay */}
            <div className="absolute inset-0 opacity-[0.015]"
                style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")" }}
            />

            {/* Optimized static blobs - CSS-based for better performance */}
            <div
                className="absolute top-20 right-1/4 w-[500px] h-[500px] bg-sage-200/30 rounded-full blur-[120px] will-change-transform animate-blob-slow"
                style={{ transform: "translateZ(0)" }}
            />
            <div
                className="absolute bottom-20 left-1/4 w-[400px] h-[400px] bg-blue-100/20 rounded-full blur-[100px] will-change-transform animate-blob-medium"
                style={{ transform: "translateZ(0)", animationDelay: "2s" }}
            />
            <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-sage-100/20 rounded-full blur-[150px] will-change-transform animate-blob-fast"
                style={{ transform: "translateZ(0)", animationDelay: "4s" }}
            />

            <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-20 items-center relative z-10">
                {/* Text Content */}
                {isLoaded && (
                    <div className="text-left">
                        {/* Badges */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="flex flex-wrap gap-2 mb-8"
                        >
                            <AnimatedBadge delay={0.3}>
                                <Sparkles className="w-3 h-3 text-sage-600" />
                                Écoute augmentée
                            </AnimatedBadge>
                            <AnimatedBadge delay={0.4}>
                                <CheckSquare className="w-3 h-3 text-sage-600" />
                                Action immédiate
                            </AnimatedBadge>
                            <AnimatedBadge delay={0.5}>
                                <Briefcase className="w-3 h-3 text-sage-600" />
                                Rétention talents
                            </AnimatedBadge>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.1 }}
                            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-sage-900 tracking-tight leading-[1.1] mb-6"
                        >
                            <span className="block">Transformez le</span>
                            <span className="relative inline-block">
                                <span
                                    className="relative z-10 bg-gradient-to-r from-sage-700 via-sage-600 to-sage-500 bg-clip-text text-transparent"
                                >
                                    ressenti collaborateur
                                </span>
                                <motion.span
                                    initial={{ scaleX: 0, opacity: 0 }}
                                    animate={{ scaleX: 1, opacity: 1 }}
                                    transition={{ delay: 0.8, duration: 0.6, ease: "easeOut" }}
                                    className="absolute -bottom-1 left-0 right-0 h-3 bg-gradient-to-r from-sage-300/80 to-sage-200/60 -z-10 origin-left rounded-sm"
                                />
                            </span>
                            <span className="block mt-2">
                                en{" "}
                                <motion.span
                                    className="relative inline-block"
                                    initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                                    transition={{ delay: 1.2, duration: 0.5, type: "spring", stiffness: 200 }}
                                >
                                    <span className="relative z-10 text-sage-600">levier de performance</span>
                                    <motion.span
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        transition={{ delay: 1.5, duration: 0.4 }}
                                        className="absolute -inset-2 bg-sage-100 rounded-xl -z-10"
                                    />
                                    <motion.span
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 1.8, duration: 0.3 }}
                                        className="absolute -top-6 -right-6 text-2xl"
                                    >
                                        <Sparkles className="w-6 h-6 text-amber-400" />
                                    </motion.span>
                                </motion.span>
                            </span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.2 }}
                            className="text-lg text-stone-600 max-w-lg mb-10 leading-relaxed"
                        >
                            Claovia est le <strong>copilote IA</strong> qui transforme chaque retour collaborateur en plan d&apos;action concret pour le manager. Synthese, analyse thematique, actions prioritaires et kit manager complet : <strong>tout ce qu&apos;il faut pour agir, pas juste constater</strong>.
                        </motion.p>

                        {/* CTAs */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.3 }}
                            className="flex flex-col sm:flex-row gap-4 mb-10"
                        >
                            <Link
                                href="/rex"
                                className="group relative px-8 py-4 rounded-full bg-sage-800 text-white text-base font-medium overflow-hidden transition-all shadow-xl shadow-sage-300/30 hover:shadow-2xl hover:shadow-sage-300/40 hover:-translate-y-1 flex items-center justify-center gap-2"
                            >
                                {/* Shine effect */}
                                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                                <Play className="w-4 h-4" />
                                Tester gratuitement
                            </Link>
                            <Link
                                href="#contenu-rex"
                                className="px-8 py-4 rounded-full bg-white border border-sage-200 text-sage-800 text-base font-medium hover:bg-sage-50 transition-all flex items-center justify-center gap-2 hover:-translate-y-1 shadow-lg shadow-stone-100"
                            >
                                <Zap className="w-4 h-4" />
                                Voir le contenu du rapport
                            </Link>
                        </motion.div>

                        {/* Proof elements */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.4 }}
                            className="flex items-center gap-6 text-xs text-stone-500 font-medium"
                        >
                            <span className="flex items-center gap-1.5">
                                <FileText className="w-4 h-4 text-sage-600" /> PDF A4 prêt
                            </span>
                            <span className="flex items-center gap-1.5">
                                <ShieldCheck className="w-4 h-4 text-sage-600" /> Confidentiel
                            </span>
                            <span className="flex items-center gap-1.5">
                                <Zap className="w-4 h-4 text-sage-600" /> Automatise
                            </span>
                        </motion.div>

                        {/* Mini features */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.5 }}
                            className="mt-12 pt-8 border-t border-stone-200 grid grid-cols-3 gap-4"
                        >
                            {[
                                { icon: BrainCircuit, label: "Comprendre", desc: "Le vrai problème" },
                                { icon: CheckSquare, label: "Agir", desc: "Tout de suite" },
                                { icon: FileText, label: "Garder", desc: "Ses talents" }
                            ].map((feature, i) => (
                                <div key={i} className="text-center">
                                    <div className="w-10 h-10 mx-auto mb-2 bg-sage-50 rounded-xl flex items-center justify-center text-sage-600">
                                        <feature.icon className="w-5 h-5" />
                                    </div>
                                    <p className="text-xs font-bold text-sage-900">{feature.label}</p>
                                    <p className="text-[10px] text-stone-500">{feature.desc}</p>
                                </div>
                            ))}
                        </motion.div>

                        {/* Security badges */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.6 }}
                            className="mt-8 flex items-center gap-4 text-[10px] text-stone-400"
                        >
                            <span className="flex items-center gap-1">
                                <ShieldCheck className="w-3 h-3" /> RGPD
                            </span>
                            <span className="flex items-center gap-1">
                                <Server className="w-3 h-3" /> France
                            </span>
                            <span className="flex items-center gap-1">
                                <Lock className="w-3 h-3" /> Chiffré
                            </span>
                        </motion.div>
                    </div>
                )}

                {/* 3D Mockup */}
                <div className="relative hidden lg:block">
                    <ReportMockup3D />
                </div>

                {/* Mobile Mockup (simplified) */}
                <div className="lg:hidden">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6, duration: 0.8 }}
                        className="max-w-sm mx-auto"
                    >
                        <ReportMockup3D />
                    </motion.div>
                </div>
            </div>
        </header>
    );
}
