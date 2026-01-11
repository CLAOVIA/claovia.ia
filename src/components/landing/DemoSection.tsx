"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Bot, MessageSquare, Send, ArrowRight, User, BrainCircuit, Lightbulb, Briefcase, Mail, Mic2, FileCheck, Command, Square, ChevronDown, Copy, Check, Zap, AlertTriangle, Users, Calendar, TrendingDown, ExternalLink, Heart } from "lucide-react"

// Composant pour le scoring animé des profils
function ProfileScoring() {
    const [currentProfile, setCurrentProfile] = useState(0);

    const profiles = [
        {
            collaborateur: { name: "Marie", age: 24, poste: "Chargée de clientèle", experience: "2 ans" },
            manager: { name: "Laurie", age: 52, poste: "Directrice commerciale", experience: "28 ans" },
            conflit: "Conflit générationnel",
            description: "Laurie peine à comprendre les attentes de Marie sur le télétravail et l'équilibre vie pro/perso.",
            color: "purple"
        },
        {
            collaborateur: { name: "Thomas", age: 35, poste: "Développeur senior", experience: "10 ans" },
            manager: { name: "Julien", age: 29, poste: "Tech Lead", experience: "4 ans" },
            conflit: "Inversion hiérarchique",
            description: "Thomas a plus d'expérience que Julien mais doit se reporter à lui. Frustration latente.",
            color: "amber"
        },
        {
            collaborateur: { name: "Sophie", age: 42, poste: "Comptable", experience: "15 ans" },
            manager: { name: "Marc", age: 38, poste: "DAF", experience: "8 ans" },
            conflit: "Expert vs Manager",
            description: "Marc gère les chiffres mais ne comprend pas le métier au quotidien de Sophie.",
            color: "blue"
        }
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentProfile((prev) => (prev + 1) % profiles.length);
        }, 6000); // Slower transition for better performance
        return () => clearInterval(interval);
    }, [profiles.length]);

    const profile = profiles[currentProfile];
    const colorClasses = {
        purple: { bg: "bg-purple-50", border: "border-purple-200", text: "text-purple-700", badge: "bg-purple-100 text-purple-800" },
        amber: { bg: "bg-amber-50", border: "border-amber-200", text: "text-amber-700", badge: "bg-amber-100 text-amber-800" },
        blue: { bg: "bg-blue-50", border: "border-blue-200", text: "text-blue-700", badge: "bg-blue-100 text-blue-800" }
    };
    const colors = colorClasses[profile.color as keyof typeof colorClasses];

    return (
        <div className={`${colors.bg} ${colors.border} border rounded-2xl p-6 relative overflow-hidden`}>
            {/* Progress indicators */}
            <div className="flex gap-2 mb-4">
                {profiles.map((_, i) => (
                    <div
                        key={i}
                        className={`h-1 flex-1 rounded-full transition-all duration-300 ${i === currentProfile ? 'bg-sage-600' : 'bg-stone-200'}`}
                    />
                ))}
            </div>

            <AnimatePresence mode="wait">
                <motion.div
                    key={currentProfile}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    style={{ willChange: "opacity" }}
                >
                    {/* Profils face à face */}
                    <div className="flex items-center justify-between gap-4 mb-4">
                        {/* Collaborateur */}
                        <div className="flex-1 text-center">
                            <div className="w-14 h-14 mx-auto mb-2 rounded-full bg-white border-2 border-sage-200 flex items-center justify-center text-sage-600 shadow-sm">
                                <User className="w-7 h-7" />
                            </div>
                            <p className="font-bold text-sage-900 text-sm">{profile.collaborateur.name}</p>
                            <p className="text-xs text-stone-500">{profile.collaborateur.age} ans</p>
                            <p className="text-[10px] text-stone-400">{profile.collaborateur.experience} d&apos;exp.</p>
                        </div>

                        {/* VS / Conflit */}
                        <div className="flex flex-col items-center">
                            <div className={`${colors.badge} px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wide`}>
                                {profile.conflit}
                            </div>
                            <div className="w-px h-4 bg-stone-200 my-2" />
                            <Zap className={`w-5 h-5 ${colors.text}`} />
                        </div>

                        {/* Manager */}
                        <div className="flex-1 text-center">
                            <div className="w-14 h-14 mx-auto mb-2 rounded-full bg-white border-2 border-sage-200 flex items-center justify-center text-sage-600 shadow-sm">
                                <Briefcase className="w-7 h-7" />
                            </div>
                            <p className="font-bold text-sage-900 text-sm">{profile.manager.name}</p>
                            <p className="text-xs text-stone-500">{profile.manager.age} ans</p>
                            <p className="text-[10px] text-stone-400">{profile.manager.experience} d&apos;exp.</p>
                        </div>
                    </div>

                    {/* Description */}
                    <p className="text-xs text-stone-600 text-center leading-relaxed bg-white/60 p-3 rounded-xl">
                        {profile.description}
                    </p>
                </motion.div>
            </AnimatePresence>
        </div>
    );
}

export function DemoSection() {
    const [openSection, setOpenSection] = useState<"email" | "script" | null>(null);
    const [copied, setCopied] = useState<"email" | "script" | null>(null);

    const handleCopy = (type: "email" | "script", text: string) => {
        navigator.clipboard.writeText(text);
        setCopied(type);
        setTimeout(() => setCopied(null), 2000);
    };

    const emailContent = `Salut Marie,

J'ai bien reçu ton retour via Claovia. Merci pour ta franchise sur la charge administrative et ton besoin d'accompagnement.

Je te propose qu'on se cale un créneau de 30 min cette semaine, dédié exclusivement à tes priorités et tes blocages. L'objectif : trouver ensemble des solutions concrètes.

Dispo jeudi 10h ?

Bastien`;

    const scriptContent = {
        mindset: "Marie est engagée mais frustrée. Ton but n'est pas de te justifier, mais de l'écouter. Tu es nouveau dans ce rôle, c'est normal de ne pas tout maîtriser. Sors du mode 'contrôleur', entre en mode 'coach'.",
        steps: [
            {
                title: "L'Accroche",
                duration: "2 min",
                objective: "Créer un climat de confiance",
                script: "Salut Marie. Merci d'avoir pris le temps de faire ce REX. Je veux vraiment comprendre ce qui te bloque au quotidien. On prend 20 min pour en parler ?"
            },
            {
                title: "Le Diagnostic",
                duration: "8 min",
                objective: "Identifier le vrai problème",
                script: "Au-delà de l'administratif, qu'est-ce qui te prend le plus d'énergie en ce moment ? Qu'est-ce que tu aimerais changer en priorité ?",
                tip: "Laisser un silence. Laisser Marie répondre sans l'interrompre."
            },
            {
                title: "La Solution",
                duration: "5 min",
                objective: "S'engager sur une action concrète",
                script: "Ok, si je comprends bien, tu as besoin de X. Je te propose qu'on teste ça pendant 2 semaines. On fait un point vendredi prochain pour voir si ça fonctionne ?"
            }
        ],
        warning: "Ne jamais dire \"Tu aurais dû m'en parler plus tôt\" (Culpabilisant). Dire \"Merci d'en parler maintenant\" (Valorisant)."
    };

    return (
        <section id="demo-section" className="py-24 px-6 bg-gradient-to-b from-white via-sage-50/50 to-white overflow-hidden">
            <div className="max-w-[1400px] mx-auto relative z-10">

                {/* Header avec contexte */}
                <div className="text-center mb-12 animate-fade-in-up">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-800 text-xs font-semibold mb-4">
                        <Sparkles className="w-3 h-3" /> Cas Concret
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-sage-900 mb-4">
                        L&apos;histoire de Marie et Bastien
                    </h2>
                    <p className="text-stone-500 max-w-3xl mx-auto text-lg leading-relaxed">
                        Marie est <strong>chargée de clientèle</strong>. Elle rencontre des difficultés à exprimer ses besoins lors des points hebdomadaires.
                        Bastien, son manager, vient d&apos;être promu. C&apos;est son <strong>premier poste de management</strong>.
                    </p>
                </div>

                {/* Stats et contexte */}
                <div className="grid md:grid-cols-3 gap-6 mb-16 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                    {/* Stat 1 */}
                    <div className="bg-white rounded-2xl p-6 border border-stone-100 shadow-sm hover:shadow-md transition-shadow">
                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center text-red-500 shrink-0">
                                <TrendingDown className="w-6 h-6" />
                            </div>
                            <div>
                                <p className="text-3xl font-bold text-sage-900">1 sur 2</p>
                                <p className="text-sm text-stone-600 mb-2">salariés quitte son emploi à cause de son manager</p>
                                <a
                                    href="https://www.gallup.com/workplace/231593/state-american-workplace-report-2017.aspx"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-[10px] text-sage-600 hover:text-sage-800 flex items-center gap-1"
                                >
                                    Source: Gallup <ExternalLink className="w-3 h-3" />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Stat 2 */}
                    <div className="bg-white rounded-2xl p-6 border border-stone-100 shadow-sm hover:shadow-md transition-shadow">
                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 bg-amber-50 rounded-xl flex items-center justify-center text-amber-500 shrink-0">
                                <Users className="w-6 h-6" />
                            </div>
                            <div>
                                <p className="text-3xl font-bold text-sage-900">60%</p>
                                <p className="text-sm text-stone-600 mb-2">des nouveaux managers échouent dans les 2 premières années</p>
                                <a
                                    href="https://www.mckinsey.com/capabilities/people-and-organizational-performance/our-insights"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-[10px] text-sage-600 hover:text-sage-800 flex items-center gap-1"
                                >
                                    Source: McKinsey <ExternalLink className="w-3 h-3" />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Stat 3 */}
                    <div className="bg-white rounded-2xl p-6 border border-stone-100 shadow-sm hover:shadow-md transition-shadow">
                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-500 shrink-0">
                                <Calendar className="w-6 h-6" />
                            </div>
                            <div>
                                <p className="text-3xl font-bold text-sage-900">6 mois</p>
                                <p className="text-sm text-stone-600 mb-2">délai moyen avant qu&apos;un problème soit remonté à la direction</p>
                                <a
                                    href="https://www.shrm.org/topics-tools/news/employee-relations"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-[10px] text-sage-600 hover:text-sage-800 flex items-center gap-1"
                                >
                                    Source: SHRM <ExternalLink className="w-3 h-3" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Section "C'est peut-être vous" avec scoring */}
                <div className="bg-sage-50 rounded-3xl p-8 mb-16 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                        <div>
                            <div className="flex items-center gap-2 mb-4">
                                <Heart className="w-5 h-5 text-red-500" />
                                <span className="text-sm font-bold text-sage-900 uppercase tracking-wide">Marie, c&apos;est vous</span>
                            </div>
                            <h3 className="text-2xl font-bold text-sage-900 mb-4">
                                Ou quelqu&apos;un que vous connaissez.
                            </h3>
                            <p className="text-stone-600 leading-relaxed mb-4">
                                Ces situations se répètent <strong>à l&apos;infini</strong> dans toutes les entreprises.
                                Un écart d&apos;âge, d&apos;expérience, de vision... et la communication se bloque.
                            </p>
                            <p className="text-stone-600 leading-relaxed">
                                <strong>Claovia</strong> donne les mots au collaborateur et les outils au manager.
                                Pour que chaque Marie trouve son Bastien capable de l&apos;écouter.
                            </p>
                        </div>
                        <ProfileScoring />
                    </div>
                </div>

                {/* Side-by-Side Demo Container */}
                <div className="flex flex-col xl:flex-row items-start justify-center gap-10 xl:gap-16">

                    {/* GAUCHE: Chat Collaborateur (Marie) */}
                    <div className="flex-1 w-full max-w-lg mx-auto xl:max-w-none animate-fade-in-up min-w-0" style={{ animationDelay: '0.3s' }}>
                        <div className="text-center mb-6 xl:text-left xl:pl-4">
                            <span className="text-sm font-bold text-sage-900 bg-white px-4 py-2 rounded-full border border-sage-100 shadow-sm">
                                1. Marie utilise REX
                            </span>
                            <p className="text-xs text-stone-500 mt-2 xl:pl-4">Elle n&apos;arrive pas à formuler son besoin en réunion</p>
                        </div>

                        <div className="bg-stone-100 rounded-xl border border-stone-300 shadow-2xl overflow-hidden flex flex-col h-[700px] relative">
                            {/* Window Bar */}
                            <div className="bg-stone-200 px-4 py-3 flex items-center gap-2 border-b border-stone-300">
                                <div className="flex gap-2">
                                    <div className="w-3 h-3 rounded-full bg-red-400 border border-red-500"></div>
                                    <div className="w-3 h-3 rounded-full bg-yellow-400 border border-yellow-500"></div>
                                    <div className="w-3 h-3 rounded-full bg-green-400 border border-green-500"></div>
                                </div>
                                <div className="mx-auto text-xs font-medium text-stone-500 bg-stone-100 px-4 py-1 rounded-md border border-stone-200 shadow-sm flex items-center gap-2">
                                    <MessageSquare className="w-3 h-3" /> claovia.app/rex
                                </div>
                            </div>

                            {/* Header */}
                            <div className="bg-stone-50 p-6 border-b border-stone-100 flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-sage-800 flex items-center justify-center text-white shadow-sm">
                                    <Bot className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-sage-900 text-lg">Clao</h3>
                                    <p className="text-xs text-stone-500 flex items-center gap-1">
                                        <span className="w-2 h-2 bg-green-500 rounded-full"></span> Assistant REX
                                    </p>
                                </div>
                            </div>

                            {/* Chat Area */}
                            <div className="flex-1 bg-stone-50/30 p-6 space-y-6 overflow-y-auto">
                                {/* Clao 1 */}
                                <div className="flex gap-4">
                                    <div className="w-8 h-8 rounded-full bg-sage-800 flex-shrink-0 flex items-center justify-center text-white text-xs shadow-sm">
                                        <Bot className="w-4 h-4" />
                                    </div>
                                    <div className="bg-white p-4 rounded-2xl rounded-tl-none shadow-sm text-sm text-stone-600 border border-stone-100 max-w-[85%]">
                                        Bonjour Marie ! Je suis là pour t&apos;aider à exprimer ce que tu ressens au travail. Tout ce que tu me dis sera reformulé de manière constructive pour Bastien. Comment te sens-tu en ce moment ?
                                    </div>
                                </div>

                                {/* Marie 1 */}
                                <div className="flex gap-4 flex-row-reverse">
                                    <div className="w-8 h-8 rounded-full bg-blue-100 flex-shrink-0 flex items-center justify-center text-blue-600 text-xs shadow-sm border border-white">
                                        <User className="w-4 h-4" />
                                    </div>
                                    <div className="bg-blue-600 p-4 rounded-2xl rounded-tr-none shadow-md text-sm text-white max-w-[85%]">
                                        Honnêtement, je suis perdue. J&apos;adore mon travail mais je me sens noyée. En réunion avec Bastien, je n&apos;arrive jamais à dire ce qui ne va pas...
                                    </div>
                                </div>

                                {/* Clao 2 */}
                                <div className="flex gap-4">
                                    <div className="w-8 h-8 rounded-full bg-sage-800 flex-shrink-0 flex items-center justify-center text-white text-xs shadow-sm">
                                        <Bot className="w-4 h-4" />
                                    </div>
                                    <div className="bg-white p-4 rounded-2xl rounded-tl-none shadow-sm text-sm text-stone-600 border border-stone-100 max-w-[85%]">
                                        Je comprends. Bastien est nouveau dans son rôle de manager. As-tu l&apos;impression qu&apos;il comprend tes difficultés du quotidien ?
                                    </div>
                                </div>

                                {/* Marie 2 */}
                                <div className="flex gap-4 flex-row-reverse">
                                    <div className="w-8 h-8 rounded-full bg-blue-100 flex-shrink-0 flex items-center justify-center text-blue-600 text-xs shadow-sm border border-white">
                                        <User className="w-4 h-4" />
                                    </div>
                                    <div className="bg-blue-600 p-4 rounded-2xl rounded-tr-none shadow-md text-sm text-white max-w-[85%]">
                                        Non, pas vraiment. Il était commercial comme moi avant. Maintenant il parle que de chiffres et d&apos;objectifs. Je voudrais juste qu&apos;il m&apos;aide à m&apos;organiser.
                                    </div>
                                </div>

                                {/* Clao 3 */}
                                <div className="flex gap-4">
                                    <div className="w-8 h-8 rounded-full bg-sage-800 flex-shrink-0 flex items-center justify-center text-white text-xs shadow-sm">
                                        <Bot className="w-4 h-4" />
                                    </div>
                                    <div className="bg-white p-4 rounded-2xl rounded-tl-none shadow-sm text-sm text-stone-600 border border-stone-100 max-w-[85%]">
                                        Si tu pouvais lui demander une chose concrète pour t&apos;aider, ce serait quoi ?
                                    </div>
                                </div>

                                {/* Marie 3 */}
                                <div className="flex gap-4 flex-row-reverse">
                                    <div className="w-8 h-8 rounded-full bg-blue-100 flex-shrink-0 flex items-center justify-center text-blue-600 text-xs shadow-sm border border-white">
                                        <User className="w-4 h-4" />
                                    </div>
                                    <div className="bg-blue-600 p-4 rounded-2xl rounded-tr-none shadow-md text-sm text-white max-w-[85%]">
                                        Un vrai point hebdo où on parle de MON organisation, pas que des résultats. Un moment où je peux lui dire ce qui bloque sans avoir peur d&apos;être jugée.
                                    </div>
                                </div>
                            </div>

                            {/* Input Area */}
                            <div className="p-4 bg-white border-t border-stone-100">
                                <div className="flex gap-2">
                                    <div className="flex-1 bg-stone-50 border border-stone-200 rounded-full px-4 py-2 text-sm text-stone-400">Merci Clao...</div>
                                    <button className="w-10 h-10 rounded-full bg-sage-800 text-white flex items-center justify-center shadow-sm">
                                        <Send className="w-4 h-4" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* CENTER: Arrow Animation (Responsive) */}
                    <div className="flex flex-col items-center justify-center gap-3 animate-fade-in-up xl:py-40" style={{ animationDelay: '0.4s' }}>
                        <div className="xl:rotate-0 rotate-90 bg-sage-100 p-4 rounded-full text-sage-600 shadow-inner border border-sage-200 group hover:scale-110 transition-transform cursor-default">
                            <ArrowRight className="w-8 h-8 xl:w-10 xl:h-10 animate-pulse group-hover:animate-none" />
                        </div>
                        <span className="text-xs font-bold text-sage-500 uppercase tracking-wide bg-white px-2 py-1 rounded shadow-sm">Analyse IA</span>
                    </div>

                    {/* DROITE: Rapport REX (Bastien) */}
                    <div className="flex-1 w-full max-w-lg mx-auto xl:max-w-none animate-fade-in-up min-w-0" style={{ animationDelay: '0.5s' }}>
                        <div className="text-center mb-6 xl:text-left xl:pl-4">
                            <span className="text-sm font-bold text-white bg-sage-900 px-4 py-2 rounded-full shadow-lg shadow-sage-200">
                                2. Bastien reçoit le rapport
                            </span>
                            <p className="text-xs text-stone-500 mt-2 xl:pl-4">Avec tout ce qu&apos;il faut pour agir</p>
                        </div>

                        {/* PC Window Frame - PDF Report Style */}
                        <div className="bg-stone-100 rounded-xl border border-stone-300 shadow-2xl overflow-hidden flex flex-col h-[700px] relative">
                            {/* Window Bar */}
                            <div className="bg-stone-200 px-4 py-3 flex items-center gap-2 border-b border-stone-300">
                                <div className="flex gap-2">
                                    <div className="w-3 h-3 rounded-full bg-red-400 border border-red-500"></div>
                                    <div className="w-3 h-3 rounded-full bg-yellow-400 border border-yellow-500"></div>
                                    <div className="w-3 h-3 rounded-full bg-green-400 border border-green-500"></div>
                                </div>
                                <div className="mx-auto text-xs font-medium text-stone-500 bg-stone-100 px-4 py-1 rounded-md border border-stone-200 shadow-sm flex items-center gap-2">
                                    <FileCheck className="w-3 h-3" /> rapport-rex-marie.pdf
                                </div>
                            </div>

                            {/* PDF Report Content */}
                            <div className="flex-1 bg-white overflow-y-auto p-6">
                                {/* Report Header */}
                                <header className="flex justify-between items-end border-b-2 border-sage-100 pb-4 mb-6">
                                    <div className="flex items-center gap-3">
                                        <div className="w-12 h-12 rounded-2xl bg-sage-900 flex items-center justify-center text-white shadow-lg">
                                            <Command className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-sage-900 tracking-tight leading-none">Rapport REX</h3>
                                            <p className="text-xs text-stone-500 font-medium mt-1">Pour : Bastien (Manager)</p>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-sm font-bold text-sage-900">Marie Dupont</p>
                                        <p className="text-[10px] text-stone-400 font-mono">Chargée de clientèle</p>
                                    </div>
                                </header>

                                {/* Synthèse IA */}
                                <section className="mb-6">
                                    <div className="bg-stone-50 p-4 rounded-xl border border-stone-100 relative">
                                        <div className="absolute -left-0.5 top-4 bottom-4 w-1 bg-sage-500 rounded-r-full"></div>
                                        <h4 className="text-[10px] font-bold text-sage-600 uppercase tracking-widest mb-2 flex items-center gap-2">
                                            <BrainCircuit className="w-3 h-3" /> Synthèse IA
                                        </h4>
                                        <p className="text-stone-700 text-xs leading-relaxed mb-3">
                                            Marie est <strong>motivée par son métier</strong> mais se sent <strong>isolée dans sa gestion quotidienne</strong>.
                                            Elle a besoin d&apos;un accompagnement opérationnel, pas uniquement d&apos;un suivi de résultats.
                                        </p>
                                        <div className="flex items-center gap-2 bg-white p-2 rounded-lg border border-stone-200 shadow-sm">
                                            <div className="bg-amber-100 p-1 rounded text-amber-600"><Lightbulb className="w-3 h-3" /></div>
                                            <p className="text-[10px] font-bold text-stone-700">Conseil : Instaurer un point &quot;coaching&quot; distinct du point &quot;résultats&quot;.</p>
                                        </div>
                                    </div>
                                </section>

                                {/* Analyse Thématique Grid */}
                                <section className="mb-6">
                                    <h4 className="text-[10px] font-bold text-stone-400 uppercase tracking-widest mb-3">Analyse par Thématique</h4>
                                    <div className="grid grid-cols-2 gap-2">
                                        <div className="p-2.5 bg-white rounded-lg border border-stone-200 shadow-sm flex gap-2">
                                            <div className="mt-0.5"><div className="w-2 h-2 rounded-full bg-orange-500"></div></div>
                                            <div>
                                                <p className="text-[8px] font-bold text-stone-400 uppercase">Communication</p>
                                                <p className="text-xs font-bold text-sage-900">Difficulté à s&apos;exprimer</p>
                                            </div>
                                        </div>
                                        <div className="p-2.5 bg-white rounded-lg border border-stone-200 shadow-sm flex gap-2">
                                            <div className="mt-0.5"><div className="w-2 h-2 rounded-full bg-red-500"></div></div>
                                            <div>
                                                <p className="text-[8px] font-bold text-stone-400 uppercase">Accompagnement</p>
                                                <p className="text-xs font-bold text-sage-900">Demande de coaching</p>
                                            </div>
                                        </div>
                                        <div className="p-2.5 bg-white rounded-lg border border-stone-200 shadow-sm flex gap-2">
                                            <div className="mt-0.5"><div className="w-2 h-2 rounded-full bg-yellow-400"></div></div>
                                            <div>
                                                <p className="text-[8px] font-bold text-stone-400 uppercase">Organisation</p>
                                                <p className="text-xs font-bold text-sage-900">Besoin de structuration</p>
                                            </div>
                                        </div>
                                        <div className="p-2.5 bg-white rounded-lg border border-stone-200 shadow-sm flex gap-2">
                                            <div className="mt-0.5"><div className="w-2 h-2 rounded-full bg-green-500"></div></div>
                                            <div>
                                                <p className="text-[8px] font-bold text-stone-400 uppercase">Motivation</p>
                                                <p className="text-xs font-bold text-sage-900">Intacte</p>
                                            </div>
                                        </div>
                                    </div>
                                </section>

                                {/* Plan d'Action */}
                                <section className="mb-6">
                                    <h4 className="text-[10px] font-bold text-stone-400 uppercase tracking-widest mb-3">Plan d&apos;Action</h4>
                                    <div className="space-y-2">
                                        <div className="flex items-center gap-3 p-3 bg-white border-l-4 border-red-500 rounded-r-lg shadow-sm ring-1 ring-stone-100">
                                            <Square className="w-4 h-4 text-stone-300 shrink-0" />
                                            <div className="flex-1">
                                                <div className="flex justify-between items-start gap-2">
                                                    <h5 className="text-xs font-bold text-sage-900">Envoyer l&apos;email de prise de contact</h5>
                                                    <span className="text-[8px] bg-red-100 text-red-700 px-1.5 py-0.5 rounded font-bold uppercase shrink-0">Maintenant</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-3 p-3 bg-white border-l-4 border-sage-500 rounded-r-lg shadow-sm ring-1 ring-stone-100">
                                            <Square className="w-4 h-4 text-stone-300 shrink-0" />
                                            <div className="flex-1">
                                                <div className="flex justify-between items-start gap-2">
                                                    <h5 className="text-xs font-bold text-sage-900">Instaurer un point &quot;coaching&quot; hebdo</h5>
                                                    <span className="text-[8px] bg-stone-100 text-stone-600 px-1.5 py-0.5 rounded font-bold uppercase shrink-0">Cette semaine</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>

                                {/* Kit Manager - Interactive */}
                                <section className="bg-sage-50 p-4 rounded-xl border border-sage-100">
                                    <div className="flex items-center gap-2 mb-4">
                                        <div className="bg-white p-1.5 rounded-lg shadow-sm text-sage-700">
                                            <Briefcase className="w-4 h-4" />
                                        </div>
                                        <div>
                                            <h4 className="text-xs font-bold text-sage-900 uppercase tracking-wider">Kit Manager</h4>
                                            <p className="text-[9px] text-stone-500">Tout est prêt, il n&apos;y a plus qu&apos;à agir</p>
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        {/* Email Button */}
                                        <div className="bg-white rounded-xl border border-sage-200 overflow-hidden shadow-sm">
                                            <button
                                                onClick={() => setOpenSection(openSection === "email" ? null : "email")}
                                                className="w-full flex items-center justify-between p-3 hover:bg-stone-50 transition-colors"
                                            >
                                                <div className="flex items-center gap-3">
                                                    <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600">
                                                        <Mail className="w-4 h-4" />
                                                    </div>
                                                    <div className="text-left">
                                                        <p className="text-xs font-bold text-stone-800">Email d&apos;invitation</p>
                                                        <p className="text-[9px] text-stone-400">Prêt à envoyer</p>
                                                    </div>
                                                </div>
                                                <ChevronDown className={`w-4 h-4 text-stone-400 transition-transform ${openSection === "email" ? "rotate-180" : ""}`} />
                                            </button>

                                            {openSection === "email" && (
                                                <div className="border-t border-stone-100 p-3 bg-stone-50/50">
                                                    <div className="bg-stone-100 px-3 py-1.5 rounded-t-lg border border-stone-200 border-b-0 flex justify-between items-center">
                                                        <p className="text-[9px] text-stone-500 font-mono">Objet : Point organisation - On se cale ?</p>
                                                        <button
                                                            onClick={() => handleCopy("email", emailContent)}
                                                            className="text-[9px] font-bold text-sage-700 hover:text-sage-900 flex items-center gap-1 transition-colors"
                                                        >
                                                            {copied === "email" ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                                                            {copied === "email" ? "Copié !" : "Copier"}
                                                        </button>
                                                    </div>
                                                    <div className="bg-white p-3 rounded-b-lg border border-stone-200 text-[11px] text-stone-700 leading-relaxed whitespace-pre-line">
                                                        {emailContent}
                                                    </div>
                                                </div>
                                            )}
                                        </div>

                                        {/* Script Button */}
                                        <div className="bg-white rounded-xl border border-sage-200 overflow-hidden shadow-sm">
                                            <button
                                                onClick={() => setOpenSection(openSection === "script" ? null : "script")}
                                                className="w-full flex items-center justify-between p-3 hover:bg-stone-50 transition-colors"
                                            >
                                                <div className="flex items-center gap-3">
                                                    <div className="w-8 h-8 rounded-lg bg-purple-50 flex items-center justify-center text-purple-600">
                                                        <Mic2 className="w-4 h-4" />
                                                    </div>
                                                    <div className="text-left">
                                                        <p className="text-xs font-bold text-stone-800">Script d&apos;entretien</p>
                                                        <p className="text-[9px] text-stone-400">Guide de conversation</p>
                                                    </div>
                                                </div>
                                                <ChevronDown className={`w-4 h-4 text-stone-400 transition-transform ${openSection === "script" ? "rotate-180" : ""}`} />
                                            </button>

                                            {openSection === "script" && (
                                                <div className="border-t border-stone-100 bg-stone-50/50">
                                                    {/* Mindset */}
                                                    <div className="bg-purple-50 p-3 border-b border-purple-100 flex gap-2">
                                                        <Zap className="w-4 h-4 text-purple-600 shrink-0 mt-0.5" />
                                                        <div>
                                                            <p className="text-[9px] font-bold text-purple-900 uppercase mb-1">Mindset à adopter</p>
                                                            <p className="text-[10px] text-purple-800 italic">&quot;{scriptContent.mindset}&quot;</p>
                                                        </div>
                                                    </div>

                                                    {/* Steps */}
                                                    <div className="p-3 space-y-3">
                                                        {scriptContent.steps.map((step, i) => (
                                                            <div key={i} className="relative pl-4 border-l-2 border-sage-200">
                                                                <div className="absolute -left-[7px] top-0 w-3 h-3 rounded-full bg-sage-100 border-2 border-sage-400 flex items-center justify-center text-[7px] font-bold text-sage-700">
                                                                    {i + 1}
                                                                </div>
                                                                <h5 className="text-[10px] font-bold text-sage-900 mb-0.5">
                                                                    {step.title} <span className="text-stone-400 font-normal">({step.duration})</span>
                                                                </h5>
                                                                <p className="text-[9px] text-stone-500 mb-1">Objectif : {step.objective}</p>
                                                                <div className="bg-white p-2 rounded-lg border border-stone-100 text-[10px] italic text-stone-600">
                                                                    &quot;{step.script}&quot;
                                                                </div>
                                                                {step.tip && (
                                                                    <p className="text-[8px] text-stone-400 uppercase tracking-widest font-bold mt-1">{step.tip}</p>
                                                                )}
                                                            </div>
                                                        ))}
                                                    </div>

                                                    {/* Warning */}
                                                    <div className="bg-red-50 p-3 border-t border-red-100 flex gap-2 items-start">
                                                        <AlertTriangle className="w-4 h-4 text-red-500 shrink-0" />
                                                        <p className="text-[9px] text-red-800">
                                                            <strong>Piège à éviter :</strong> {scriptContent.warning}
                                                        </p>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </section>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}
