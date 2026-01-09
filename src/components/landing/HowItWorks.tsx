import { MessageSquare, Cpu, CheckCircle2 } from "lucide-react";

export function HowItWorks() {
    return (
        <section className="py-24 bg-sage-50/50" id="how-it-works">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <span className="text-xs font-bold text-sage-600 uppercase tracking-widest bg-sage-100 px-3 py-1 rounded-full">Processus Simple</span>
                    <h2 className="text-3xl md:text-5xl font-bold text-sage-900 mt-4 mb-6">
                        Du message à l&apos;action en 3 étapes
                    </h2>
                </div>

                <div className="grid md:grid-cols-3 gap-12 relative">
                    {/* Connector Line (Desktop) */}
                    <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-gradient-to-r from-transparent via-sage-300 to-transparent border-t border-dashed border-sage-400 opacity-50"></div>

                    {/* Step 1 */}
                    <div className="relative flex flex-col items-center text-center">
                        <div className="w-24 h-24 bg-white rounded-full border-4 border-sage-100 shadow-xl flex items-center justify-center text-sage-600 mb-6 relative z-10">
                            <MessageSquare className="w-10 h-10" />
                            <div className="absolute -top-2 -right-2 w-8 h-8 bg-sage-800 text-white rounded-full flex items-center justify-center font-bold text-sm border-2 border-white">1</div>
                        </div>
                        <h3 className="text-xl font-bold text-sage-900 mb-3">Libération de la parole</h3>
                        <p className="text-stone-600 text-sm leading-relaxed px-4">
                            Le collaborateur discute librement avec l&apos;IA. Anonymat garanti, écoute bienveillante 24/7.
                        </p>
                    </div>

                    {/* Step 2 */}
                    <div className="relative flex flex-col items-center text-center">
                        <div className="w-24 h-24 bg-white rounded-full border-4 border-sage-100 shadow-xl flex items-center justify-center text-sage-600 mb-6 relative z-10">
                            <Cpu className="w-10 h-10" />
                            <div className="absolute -top-2 -right-2 w-8 h-8 bg-sage-800 text-white rounded-full flex items-center justify-center font-bold text-sm border-2 border-white">2</div>
                        </div>
                        <h3 className="text-xl font-bold text-sage-900 mb-3">Analyse & Structuration</h3>
                        <p className="text-stone-600 text-sm leading-relaxed px-4">
                            L&apos;IA synthétise les points clés, détecte les signaux faibles et prépare un rapport objectif.
                        </p>
                    </div>

                    {/* Step 3 */}
                    <div className="relative flex flex-col items-center text-center">
                        <div className="w-24 h-24 bg-white rounded-full border-4 border-sage-100 shadow-xl flex items-center justify-center text-sage-600 mb-6 relative z-10">
                            <CheckCircle2 className="w-10 h-10" />
                            <div className="absolute -top-2 -right-2 w-8 h-8 bg-sage-800 text-white rounded-full flex items-center justify-center font-bold text-sm border-2 border-white">3</div>
                        </div>
                        <h3 className="text-xl font-bold text-sage-900 mb-3">Action Managériale</h3>
                        <p className="text-stone-600 text-sm leading-relaxed px-4">
                            Le manager reçoit un kit complet : synthèse, conseils, et plan d&apos;action prêt à l&apos;emploi.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
