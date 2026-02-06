import { HeartHandshake, LayoutGrid, Zap, CheckCircle } from "lucide-react"

export function Features() {
    return (
        <>
            {/* Values Section */}
            <section id="values" className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16 animate-fade-in-up">
                        <h2 className="text-3xl font-bold text-sage-900 mb-4">Pourquoi ça marche ?</h2>
                        <p className="text-stone-500">Une approche centrée sur l&apos;humain, propulsée par la donnée.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="p-8 bg-stone-50 rounded-2xl border border-stone-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                            <div className="bg-white w-14 h-14 rounded-xl flex items-center justify-center mb-6 text-sage-600 shadow-sm border border-stone-100">
                                <HeartHandshake className="w-7 h-7" />
                            </div>
                            <h4 className="font-bold text-sage-900 text-xl mb-3">Authenticité</h4>
                            <p className="text-stone-500 leading-relaxed">
                                Le collaborateur s&apos;exprime avec ses mots. Clao capte le contexte émotionnel et les non-dits que les QCM ratent toujours.
                            </p>
                        </div>
                        <div className="p-8 bg-stone-50 rounded-2xl border border-stone-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                            <div className="bg-white w-14 h-14 rounded-xl flex items-center justify-center mb-6 text-sage-600 shadow-sm border border-stone-100">
                                <LayoutGrid className="w-7 h-7" />
                            </div>
                            <h4 className="font-bold text-sage-900 text-xl mb-3">Clarté</h4>
                            <p className="text-stone-500 leading-relaxed">
                                Fini le bruit. L&apos;information est triée, hiérarchisée et synthétisée pour que vous puissiez voir l&apos;essentiel en 30 secondes.
                            </p>
                        </div>
                        <div className="p-8 bg-stone-50 rounded-2xl border border-stone-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                            <div className="bg-white w-14 h-14 rounded-xl flex items-center justify-center mb-6 text-sage-600 shadow-sm border border-stone-100">
                                <Zap className="w-7 h-7" />
                            </div>
                            <h4 className="font-bold text-sage-900 text-xl mb-3">Impact Rapide</h4>
                            <p className="text-stone-500 leading-relaxed">
                                On ne vous donne pas juste le problème, on vous donne la solution &quot;clé en main&quot;. Email, script, plan d&apos;action.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Metrics Section */}
            <section className="py-20 bg-sage-900 text-white overflow-hidden relative">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-sage-800/30 rounded-full blur-[100px]"></div>
                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold mb-6">Le coût caché du silence</h2>
                            <p className="text-sage-200 text-lg mb-8 leading-relaxed">
                                80% des départs sont liés à un problème de management non résolu. La solution n&apos;est pas de former 2 jours par an, c&apos;est d&apos;outiller au quotidien.
                            </p>
                            <ul className="space-y-4">
                                <li className="flex items-center gap-3">
                                    <CheckCircle className="w-5 h-5 text-green-400" />
                                    <span className="text-sage-100">Anticipez les démissions 3 mois avant</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <CheckCircle className="w-5 h-5 text-green-400" />
                                    <span className="text-sage-100">Réduisez le temps de reporting de 50%</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <CheckCircle className="w-5 h-5 text-green-400" />
                                    <span className="text-sage-100">Créez une culture du feedback continu</span>
                                </li>
                            </ul>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/10">
                                <p className="text-4xl font-bold text-white mb-2">500€</p>
                                <p className="text-sm text-sage-300">Coût d&apos;une heure de coaching externe</p>
                            </div>
                            <div className="bg-green-500/20 backdrop-blur-sm p-6 rounded-2xl border border-green-500/30">
                                <p className="text-4xl font-bold text-white mb-2">10x</p>
                                <p className="text-sm text-green-100">Moins cher avec Claovia</p>
                            </div>
                            <div className="col-span-2 bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10">
                                <p className="text-4xl font-bold text-white mb-2">100%</p>
                                <p className="text-sm text-sage-300">Automatise : du feedback au plan d&apos;action sans effort supplementaire</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
