export function FAQ() {
    return (
        <section className="py-24 bg-white" id="faq">
            <div className="max-w-3xl mx-auto px-6">
                <h2 className="text-3xl font-bold text-sage-900 mb-12 text-center">Questions Fréquentes</h2>

                <div className="space-y-4">
                    <details className="group bg-sage-50/50 rounded-2xl p-6 [&_summary::-webkit-details-marker]:hidden cursor-pointer border border-transparent hover:border-sage-200 transition-all">
                        <summary className="flex items-center justify-between text-lg font-bold text-sage-900">
                            Est-ce anonyme ?
                            <span className="shrink-0 ml-4 w-8 h-8 bg-white rounded-full flex items-center justify-center text-sage-600 group-open:bg-sage-200 group-open:rotate-45 transition-all">+</span>
                        </summary>
                        <div className="mt-4 text-stone-600 leading-relaxed text-sm space-y-3">
                            <p>
                                <strong className="text-sage-900">Non, et c&apos;est volontaire.</strong> L&apos;objectif de Claovia n&apos;est pas de créer des canaux anonymes, mais d&apos;accompagner réellement les collaborateurs.
                            </p>
                            <p>
                                Un feedback anonyme ne permet pas au manager d&apos;agir concrètement. Avec Claovia, le manager sait <strong>qui</strong> a besoin d&apos;aide et reçoit un <strong>plan d&apos;action personnalisé</strong> pour cette personne.
                            </p>
                            <p>
                                Nous voulons éviter les &quot;postes fictifs&quot; où des managers ont le titre sans faire de vrai management. REX oblige à <strong>agir</strong>, pas à collecter des données dans le vide.
                            </p>
                            <p className="bg-sage-100 p-3 rounded-lg text-sage-800 font-medium">
                                Les données sont <strong>confidentielles</strong> (chiffrées, RGPD) mais pas anonymes. Le manager reçoit tout ce qu&apos;il faut pour aider Marie, pas un rapport générique.
                            </p>
                        </div>
                    </details>

                    <details className="group bg-sage-50/50 rounded-2xl p-6 [&_summary::-webkit-details-marker]:hidden cursor-pointer border border-transparent hover:border-sage-200 transition-all">
                        <summary className="flex items-center justify-between text-lg font-bold text-sage-900">
                            Combien de temps dure un REX ?
                            <span className="shrink-0 ml-4 w-8 h-8 bg-white rounded-full flex items-center justify-center text-sage-600 group-open:bg-sage-200 group-open:rotate-45 transition-all">+</span>
                        </summary>
                        <p className="mt-4 text-stone-600 leading-relaxed text-sm">
                            <strong>3 à 5 minutes</strong> pour le collaborateur. C&apos;est une conversation fluide avec Clao, pas un formulaire interminable. Le collaborateur parle avec ses mots, l&apos;IA reformule de manière constructive.
                        </p>
                    </details>

                    <details className="group bg-sage-50/50 rounded-2xl p-6 [&_summary::-webkit-details-marker]:hidden cursor-pointer border border-transparent hover:border-sage-200 transition-all">
                        <summary className="flex items-center justify-between text-lg font-bold text-sage-900">
                            L&apos;IA remplace-t-elle le manager ?
                            <span className="shrink-0 ml-4 w-8 h-8 bg-white rounded-full flex items-center justify-center text-sage-600 group-open:bg-sage-200 group-open:rotate-45 transition-all">+</span>
                        </summary>
                        <p className="mt-4 text-stone-600 leading-relaxed text-sm">
                            <strong>Non, elle l&apos;augmente.</strong> Claovia s&apos;occupe de la collecte et de l&apos;analyse (les tâches chronophages). Le manager garde ce qui compte : <strong>la relation humaine et la décision</strong>. L&apos;IA prépare le terrain, le manager agit.
                        </p>
                    </details>

                    <details className="group bg-sage-50/50 rounded-2xl p-6 [&_summary::-webkit-details-marker]:hidden cursor-pointer border border-transparent hover:border-sage-200 transition-all">
                        <summary className="flex items-center justify-between text-lg font-bold text-sage-900">
                            Et si le collaborateur ne veut pas que son manager sache ?
                            <span className="shrink-0 ml-4 w-8 h-8 bg-white rounded-full flex items-center justify-center text-sage-600 group-open:bg-sage-200 group-open:rotate-45 transition-all">+</span>
                        </summary>
                        <div className="mt-4 text-stone-600 leading-relaxed text-sm space-y-3">
                            <p>
                                C&apos;est justement le problème que Claovia résout. Beaucoup de collaborateurs n&apos;osent pas parler en face-à-face. L&apos;IA <strong>reformule leurs propos</strong> de manière constructive et professionnelle.
                            </p>
                            <p>
                                Marie ne dit pas &quot;je suis épuisée et Bastien ne comprend rien&quot;. Elle reçoit un rapport qui dit &quot;Marie exprime un besoin d&apos;accompagnement opérationnel&quot;. Le fond est préservé, la forme est adaptée.
                            </p>
                        </div>
                    </details>

                    <details className="group bg-sage-50/50 rounded-2xl p-6 [&_summary::-webkit-details-marker]:hidden cursor-pointer border border-transparent hover:border-sage-200 transition-all">
                        <summary className="flex items-center justify-between text-lg font-bold text-sage-900">
                            Que se passe-t-il après le REX ?
                            <span className="shrink-0 ml-4 w-8 h-8 bg-white rounded-full flex items-center justify-center text-sage-600 group-open:bg-sage-200 group-open:rotate-45 transition-all">+</span>
                        </summary>
                        <div className="mt-4 text-stone-600 leading-relaxed text-sm space-y-3">
                            <p>
                                Le manager reçoit immédiatement :
                            </p>
                            <ul className="list-disc list-inside space-y-1 pl-2">
                                <li>Une <strong>synthèse IA</strong> claire du feedback</li>
                                <li>Un <strong>plan d&apos;action</strong> priorisé</li>
                                <li>Un <strong>email pré-rédigé</strong> pour contacter le collaborateur</li>
                                <li>Un <strong>script d&apos;entretien</strong> pour le premier échange</li>
                            </ul>
                            <p>
                                Le manager n&apos;a plus d&apos;excuse pour ne pas agir. Tout est prêt.
                            </p>
                        </div>
                    </details>
                </div>
            </div>
        </section>
    );
}
