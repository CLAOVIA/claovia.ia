import { TrendingDown, Users, AlertCircle, ArrowRight } from "lucide-react";

export function MetricsSection() {
    return (
        <section className="py-24 bg-white relative overflow-hidden" id="metrics">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-sage-900 mb-6">
                        Le coût caché du <span className="text-stone-400 decoration-sage-300 underline underline-offset-4 decoration-2">silence</span>
                    </h2>
                    <p className="text-lg text-stone-600 max-w-2xl mx-auto">
                        Vos équipes ont des choses à dire. Ne pas les écouter coûte souvent plus cher que vous ne le pensez.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {/* Card 1 */}
                    <div className="p-8 rounded-3xl bg-red-50/50 border border-red-100 hover:shadow-lg transition-all group">
                        <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center text-red-600 mb-6 group-hover:scale-110 transition-transform">
                            <TrendingDown className="w-6 h-6" />
                        </div>
                        <h3 className="text-4xl font-bold text-sage-900 mb-2">25%</h3>
                        <p className="font-bold text-stone-700 mb-2">de Turnover en plus</p>
                        <p className="text-sm text-stone-500">dans les équipes où le feedback ne remonte pas.</p>
                    </div>

                    {/* Card 2 */}
                    <div className="p-8 rounded-3xl bg-amber-50/50 border border-amber-100 hover:shadow-lg transition-all group scale-105 shadow-xl relative z-10">
                        <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center text-amber-600 mb-6 group-hover:scale-110 transition-transform">
                            <AlertCircle className="w-6 h-6" />
                        </div>
                        <h3 className="text-4xl font-bold text-sage-900 mb-2">8/10</h3>
                        <p className="font-bold text-stone-700 mb-2">Managers débordés</p>
                        <p className="text-sm text-stone-500">par le manque de visibilité sur le climat social.</p>
                    </div>

                    {/* Card 3 */}
                    <div className="p-8 rounded-3xl bg-sage-50/50 border border-sage-100 hover:shadow-lg transition-all group">
                        <div className="w-12 h-12 bg-sage-100 rounded-xl flex items-center justify-center text-sage-600 mb-6 group-hover:scale-110 transition-transform">
                            <Users className="w-6 h-6" />
                        </div>
                        <h3 className="text-4xl font-bold text-sage-900 mb-2">-40%</h3>
                        <p className="font-bold text-stone-700 mb-2">d&apos;Engagement</p>
                        <p className="text-sm text-stone-500">lorsque les collaborateurs ne se sentent pas écoutés.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
