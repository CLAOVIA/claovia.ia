import { Sparkles, Bot, MessageSquare, Send, ArrowRight, User, LayoutDashboard, BrainCircuit, Lightbulb, Briefcase, Mail, ChevronDown, Mic2, AlertTriangle, FileCheck } from "lucide-react"

export function DemoSection() {
    return (
        <section id="demo-section" className="py-24 px-6 bg-gradient-to-b from-white via-sage-50/50 to-white overflow-hidden">
            <div className="max-w-[1400px] mx-auto relative z-10">
                {/* Header */}
                <div className="text-center mb-16 animate-fade-in-up">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-800 text-xs font-semibold mb-4">
                        <Sparkles className="w-3 h-3" /> Démo Live
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-sage-900 mb-4">Parlez, Claovia s'occupe du reste</h2>
                    <p className="text-stone-500 max-w-2xl mx-auto text-lg">
                        Le collaborateur s'exprime librement. L'IA génère instantanément l'analyse complète et les outils pour le manager.
                    </p>
                </div>

                {/* Side-by-Side Container */}
                <div className="flex flex-col xl:flex-row items-start justify-center gap-10 xl:gap-16">

                    {/* GAUCHE: Chat Collaborateur (Marie) */}
                    <div className="flex-1 w-full max-w-lg mx-auto xl:max-w-none animate-fade-in-up min-w-0" style={{ animationDelay: '0.1s' }}>
                        <div className="text-center mb-6 xl:text-left xl:pl-4">
                            <span className="text-sm font-bold text-sage-900 bg-white px-4 py-2 rounded-full border border-sage-100 shadow-sm">
                                1. Marie se confie
                            </span>
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
                                    <MessageSquare className="w-3 h-3" /> claovia.app/coach
                                </div>
                            </div>

                            {/* Header */}
                            <div className="bg-stone-50 p-6 border-b border-stone-100 flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-sage-800 flex items-center justify-center text-white shadow-sm">
                                    <Bot className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-sage-900 text-lg">Clao • Coach RH</h3>
                                    <p className="text-xs text-stone-500 flex items-center gap-1">
                                        <span className="w-2 h-2 bg-green-500 rounded-full"></span> En ligne
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
                                        Bonjour Marie ! Ravie de te retrouver pour ce REX. L'objectif est de faire le point sur ton vécu. Comment te sens-tu globalement dans ton poste en ce moment ?
                                    </div>
                                </div>

                                {/* Marie 1 */}
                                <div className="flex gap-4 flex-row-reverse">
                                    <div className="w-8 h-8 rounded-full bg-blue-100 flex-shrink-0 flex items-center justify-center text-blue-600 text-xs shadow-sm border border-white">
                                        <User className="w-4 h-4" />
                                    </div>
                                    <div className="bg-blue-600 p-4 rounded-2xl rounded-tr-none shadow-md text-sm text-white max-w-[85%]">
                                        Bonjour Clao. Honnêtement, c'est mitigé. J'adore mes clients, mais je me sens noyée sous l'administratif.
                                    </div>
                                </div>

                                {/* Clao 2 */}
                                <div className="flex gap-4">
                                    <div className="w-8 h-8 rounded-full bg-sage-800 flex-shrink-0 flex items-center justify-center text-white text-xs shadow-sm">
                                        <Bot className="w-4 h-4" />
                                    </div>
                                    <div className="bg-white p-4 rounded-2xl rounded-tl-none shadow-sm text-sm text-stone-600 border border-stone-100 max-w-[85%]">
                                        Je comprends. As-tu l'impression d'avoir le soutien nécessaire de la part de Baptiste sur ces aspects ?
                                    </div>
                                </div>

                                {/* Marie 2 */}
                                <div className="flex gap-4 flex-row-reverse">
                                    <div className="w-8 h-8 rounded-full bg-blue-100 flex-shrink-0 flex items-center justify-center text-blue-600 text-xs shadow-sm border border-white">
                                        <User className="w-4 h-4" />
                                    </div>
                                    <div className="bg-blue-600 p-4 rounded-2xl rounded-tr-none shadow-md text-sm text-white max-w-[85%]">
                                        Pas vraiment. Baptiste est très focus résultats. Quand je parle de mes blocages, j'ai l'impression qu'il ne voit que l'objectif, pas le chemin.
                                    </div>
                                </div>

                                {/* Clao 3 */}
                                <div className="flex gap-4">
                                    <div className="w-8 h-8 rounded-full bg-sage-800 flex-shrink-0 flex items-center justify-center text-white text-xs shadow-sm">
                                        <Bot className="w-4 h-4" />
                                    </div>
                                    <div className="bg-white p-4 rounded-2xl rounded-tl-none shadow-sm text-sm text-stone-600 border border-stone-100 max-w-[85%]">
                                        C'est un point clé. Si tu devais formuler une demande concrète pour qu'il puisse t'aider, quelle serait-elle ?
                                    </div>
                                </div>

                                {/* Marie 3 */}
                                <div className="flex gap-4 flex-row-reverse">
                                    <div className="w-8 h-8 rounded-full bg-blue-100 flex-shrink-0 flex items-center justify-center text-blue-600 text-xs shadow-sm border border-white">
                                        <User className="w-4 h-4" />
                                    </div>
                                    <div className="bg-blue-600 p-4 rounded-2xl rounded-tr-none shadow-md text-sm text-white max-w-[85%]">
                                        J'aimerais qu'on prenne 30 min/semaine pour revoir les priorités ensemble. Un vrai temps de coaching, pas du reporting.
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
                    <div className="flex flex-col items-center justify-center gap-3 animate-fade-in-up xl:py-40" style={{ animationDelay: '0.2s' }}>
                        <div className="xl:rotate-0 rotate-90 bg-sage-100 p-4 rounded-full text-sage-600 shadow-inner border border-sage-200 group hover:scale-110 transition-transform cursor-default">
                            <ArrowRight className="w-8 h-8 xl:w-10 xl:h-10 animate-pulse group-hover:animate-none" />
                        </div>
                        <span className="text-xs font-bold text-sage-500 uppercase tracking-wide bg-white px-2 py-1 rounded shadow-sm">Analyse IA</span>
                    </div>

                    {/* DROITE: REX Manager (Baptiste) */}
                    <div className="flex-1 w-full max-w-lg mx-auto xl:max-w-none animate-fade-in-up min-w-0" style={{ animationDelay: '0.3s' }}>
                        <div className="text-center mb-6 xl:text-left xl:pl-4">
                            <span className="text-sm font-bold text-white bg-sage-900 px-4 py-2 rounded-full shadow-lg shadow-sage-200">
                                2. Baptiste reçoit
                            </span>
                        </div>

                        {/* PC Window Frame */}
                        <div className="bg-stone-100 rounded-xl border border-stone-300 shadow-2xl overflow-hidden flex flex-col h-[700px] relative">
                            {/* Window Bar */}
                            <div className="bg-stone-200 px-4 py-3 flex items-center gap-2 border-b border-stone-300">
                                <div className="flex gap-2">
                                    <div className="w-3 h-3 rounded-full bg-red-400 border border-red-500"></div>
                                    <div className="w-3 h-3 rounded-full bg-yellow-400 border border-yellow-500"></div>
                                    <div className="w-3 h-3 rounded-full bg-green-400 border border-green-500"></div>
                                </div>
                                <div className="mx-auto text-xs font-medium text-stone-500 bg-stone-100 px-4 py-1 rounded-md border border-stone-200 shadow-sm flex items-center gap-2">
                                    <FileCheck className="w-3 h-3" /> claovia.app/dashboard
                                </div>
                            </div>

                            {/* Dashboard Content */}
                            <div className="flex-1 bg-stone-50 p-6 md:p-8 overflow-y-auto w-full">

                                {/* Header Report */}
                                <div className="flex justify-between items-start mb-8 bg-white p-6 rounded-2xl border border-stone-200 shadow-sm">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 rounded-xl bg-sage-900 flex items-center justify-center text-white shadow-md">
                                            <LayoutDashboard className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-sage-900 text-xl">REX Manager</h3>
                                            <p className="text-sm text-stone-500 mt-1 flex items-center gap-2">
                                                <User className="w-3 h-3" /> Marie Dupont • Commerciale
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="grid gap-6">
                                    {/* 1. Synthèse */}
                                    <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-sm">
                                        <h4 className="text-xs font-bold text-stone-400 uppercase tracking-widest flex items-center gap-2 mb-4">
                                            <BrainCircuit className="w-4 h-4 text-sage-500" /> Synthèse & Recommandation
                                        </h4>
                                        <div className="flex gap-4 items-start">
                                            <div className="w-1 h-12 bg-orange-400 rounded-full shrink-0"></div>
                                            <div>
                                                <p className="text-sm text-stone-700 leading-relaxed mb-3">
                                                    <strong>Analyse :</strong> Marie est très engagée commercialement mais se sent saturée par l'administratif. Elle perçoit un décalage entre ses besoins opérationnels et un management qu'elle juge trop axé sur les résultats.
                                                </p>
                                                <div className="inline-flex items-center gap-2 text-sm text-sage-800 font-medium bg-sage-50 px-3 py-2 rounded-lg border border-sage-100">
                                                    <Lightbulb className="w-4 h-4 text-amber-500" />
                                                    To-Do : Passer d'une posture de "Contrôleur" à "Facilitateur".
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* 2. 4 Thématiques (Simplified Grid for Demo) */}
                                    <div className="grid grid-cols-2 gap-3">
                                        <div className="p-3 bg-white rounded-xl border border-stone-100 shadow-sm">
                                            <div className="flex justify-between mb-1">
                                                <p className="text-[10px] text-stone-400 font-bold uppercase">Relation</p>
                                                <div className="w-2 h-2 rounded-full bg-orange-500"></div>
                                            </div>
                                            <p className="text-xs font-bold text-stone-800">Manque soutien</p>
                                        </div>
                                        <div className="p-3 bg-white rounded-xl border border-stone-100 shadow-sm">
                                            <div className="flex justify-between mb-1">
                                                <p className="text-[10px] text-stone-400 font-bold uppercase">Charge</p>
                                                <div className="w-2 h-2 rounded-full bg-orange-500"></div>
                                            </div>
                                            <p className="text-xs font-bold text-stone-800">Saturée</p>
                                        </div>
                                    </div>

                                    {/* 4. Kit Manager Complet */}
                                    <div className="bg-stone-100 rounded-2xl p-6 border border-stone-200">
                                        <div className="flex items-center justify-between mb-6">
                                            <h4 className="text-sm font-bold text-sage-900 uppercase tracking-widest flex items-center gap-2">
                                                <Briefcase className="w-5 h-5 text-sage-600" /> Kit Manager
                                            </h4>
                                        </div>

                                        <div className="space-y-3">
                                            {/* Ressource 1: Email Contextualisé */}
                                            <details className="group bg-white rounded-xl border border-stone-200 overflow-hidden open:shadow-lg transition-all" open>
                                                <summary className="flex items-center justify-between p-4 cursor-pointer hover:bg-stone-50 transition-colors">
                                                    <div className="flex items-center gap-4">
                                                        <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600 shrink-0">
                                                            <Mail className="w-5 h-5" />
                                                        </div>
                                                        <div>
                                                            <span className="block text-sm font-bold text-stone-800">Email d'invitation</span>
                                                        </div>
                                                    </div>
                                                    <ChevronDown className="w-5 h-5 text-stone-400 group-open:rotate-180 transition-transform" />
                                                </summary>
                                                <div className="p-5 pt-0 border-t border-stone-100 mt-2 bg-stone-50/30">
                                                    <div className="mt-4 bg-white border border-stone-200 rounded-lg p-4 shadow-sm">
                                                        <p className="text-sm text-stone-600 font-serif leading-relaxed">
                                                            "Salut Marie, Merci pour ta franchise sur la charge administrative. On prend 30 min pour 'hacker' ton agenda ?"
                                                        </p>
                                                    </div>
                                                </div>
                                            </details>

                                            {/* Ressource 2: Script Coaching */}
                                            <details className="group bg-white rounded-xl border border-stone-200 overflow-hidden open:shadow-lg transition-all">
                                                <summary className="flex items-center justify-between p-4 cursor-pointer hover:bg-stone-50 transition-colors">
                                                    <div className="flex items-center gap-4">
                                                        <div className="w-10 h-10 rounded-lg bg-purple-50 flex items-center justify-center text-purple-600 shrink-0">
                                                            <Mic2 className="w-5 h-5" />
                                                        </div>
                                                        <div>
                                                            <span className="block text-sm font-bold text-stone-800">Script d'Entretien</span>
                                                        </div>
                                                    </div>
                                                    <ChevronDown className="w-5 h-5 text-stone-400 group-open:rotate-180 transition-transform" />
                                                </summary>
                                            </details>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}
