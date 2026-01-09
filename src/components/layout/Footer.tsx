import Link from "next/link"

export function Footer() {
    return (
        <footer className="bg-white border-t border-sage-100 pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid md:grid-cols-4 gap-12 mb-16">
                    <div className="col-span-1 md:col-span-2">
                        <Link href="#" className="flex items-center gap-2 mb-6 group">
                            <span className="font-semibold text-sage-900 tracking-tight text-xl">Claovia</span>
                        </Link>
                        <p className="text-stone-500 text-sm leading-relaxed max-w-sm mb-6">
                            L&apos;assistant IA qui transforme le management de proximité.
                            Moins de reporting, plus d&apos;humain.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-bold text-sage-900 mb-4">Produit</h4>
                        <ul className="space-y-3 text-sm text-stone-500">
                            <li><Link href="#" className="hover:text-sage-800 transition-colors">Fonctionnalités</Link></li>
                            <li><Link href="#" className="hover:text-sage-800 transition-colors">Tarifs</Link></li>
                            <li><Link href="#" className="hover:text-sage-800 transition-colors">Manifesto</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-sage-900 mb-4">Légal</h4>
                        <ul className="space-y-3 text-sm text-stone-500">
                            <li><Link href="#" className="hover:text-sage-800 transition-colors">Mentions Légales</Link></li>
                            <li><Link href="#" className="hover:text-sage-800 transition-colors">Politique de Confidentialité</Link></li>
                            <li><Link href="#" className="hover:text-sage-800 transition-colors">CGV</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-stone-100 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-stone-400">
                    <p>© 2026 Claovia. Tous droits réservés.</p>
                    <div className="flex gap-6">
                        <span>Fait avec ❤️ à Paris</span>
                    </div>
                </div>
            </div>
        </footer>
    )
}
