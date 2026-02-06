"use client";

import Link from "next/link";
import { MessageCircle, ArrowRight } from "lucide-react";
import { trackEvent } from "@/lib/gtm";

export function FeedbackSection() {
    return (
        <section className="py-20 px-6 bg-sage-50 relative" id="feedback-section">
            <div className="max-w-2xl mx-auto text-center">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-sage-100 mb-6">
                    <MessageCircle className="w-7 h-7 text-sage-600" />
                </div>

                <h2 className="text-3xl md:text-4xl font-bold text-sage-900 mb-4 leading-tight">
                    Aidez-nous &agrave; construire<br />
                    l&apos;outil qui vous sert vraiment
                </h2>

                <p className="text-stone-500 text-lg leading-relaxed mb-4 max-w-xl mx-auto">
                    Claovia est en phase de construction.{" "}
                    <strong className="text-sage-800">
                        Chaque retour influence directement les prochaines fonctionnalit&eacute;s.
                    </strong>
                </p>

                <p className="text-stone-400 text-sm leading-relaxed mb-8 max-w-md mx-auto">
                    13 questions, 5 minutes. Votre feedback est anonyme et nous aide
                    &agrave; valider que Claovia r&eacute;pond &agrave; un vrai besoin.
                </p>

                <Link
                    href="/feedback"
                    onClick={() => trackEvent("cta_click", { cta_name: "donner_mon_avis", section: "feedback" })}
                    className="inline-flex items-center gap-2 px-8 py-4 bg-sage-900 text-white rounded-full font-semibold text-base hover:bg-sage-800 transition-all hover:scale-105 hover:shadow-lg hover:shadow-sage-900/20"
                >
                    Donner mon avis
                    <ArrowRight className="w-4 h-4" />
                </Link>
            </div>
        </section>
    );
}
