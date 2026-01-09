export function FAQ() {
    return (
        <section className="py-24 bg-white" id="faq">
            <div className="max-w-3xl mx-auto px-6">
                <h2 className="text-3xl font-bold text-sage-900 mb-12 text-center">Questions Fréquentes</h2>

                <div className="space-y-4">
                    <details className="group bg-sage-50/50 rounded-2xl p-6 [&_summary::-webkit-details-marker]:hidden cursor-pointer border border-transparent hover:border-sage-200 transition-all">
                        <summary className="flex items-center justify-between text-lg font-bold text-sage-900">
                            Est-ce vraiment anonyme ?
                            <span className="shrink-0 ml-4 w-8 h-8 bg-white rounded-full flex items-center justify-center text-sage-600 group-open:bg-sage-200 group-open:rotate-45 transition-all">+</span>
                        </summary>
                        <p className="mt-4 text-stone-600 leading-relaxed text-sm">
                            Oui. Claovia est conçu sur le principe de la "Privacy by Design". Les données personnelles sont chiffrées et l&apos;IA reformule systématiquement les propos pour éviter toute identification par le style d&apos;écriture.
                        </p>
                    </details>

                    <details className="group bg-sage-50/50 rounded-2xl p-6 [&_summary::-webkit-details-marker]:hidden cursor-pointer border border-transparent hover:border-sage-200 transition-all">
                        <summary className="flex items-center justify-between text-lg font-bold text-sage-900">
                            Combien de temps dure un REX ?
                            <span className="shrink-0 ml-4 w-8 h-8 bg-white rounded-full flex items-center justify-center text-sage-600 group-open:bg-sage-200 group-open:rotate-45 transition-all">+</span>
                        </summary>
                        <p className="mt-4 text-stone-600 leading-relaxed text-sm">
                            Environ 3 à 5 minutes pour le collaborateur. C&apos;est une conversation fluide, pas un formulaire interminable.
                        </p>
                    </details>

                    <details className="group bg-sage-50/50 rounded-2xl p-6 [&_summary::-webkit-details-marker]:hidden cursor-pointer border border-transparent hover:border-sage-200 transition-all">
                        <summary className="flex items-center justify-between text-lg font-bold text-sage-900">
                            L&apos;IA remplace-t-elle le manager ?
                            <span className="shrink-0 ml-4 w-8 h-8 bg-white rounded-full flex items-center justify-center text-sage-600 group-open:bg-sage-200 group-open:rotate-45 transition-all">+</span>
                        </summary>
                        <p className="mt-4 text-stone-600 leading-relaxed text-sm">
                            Non, au contraire ! Elle l&apos;augmente. Claovia s&apos;occupe de la collecte et de l&apos;analyse (tâches chronophages) pour permettre au manager de se concentrer sur l&apos;humain et la décision.
                        </p>
                    </details>
                </div>
            </div>
        </section>
    );
}
