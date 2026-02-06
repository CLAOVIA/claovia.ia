"use client";

import { useEffect, useState } from "react";
import { trackEvent } from "@/lib/gtm";

export default function FeedbackPage() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 300);
    return () => clearTimeout(timer);
  }, []);

  // Track page view feedback
  useEffect(() => {
    trackEvent("feedback_page_view");
  }, []);

  // Écoute les messages de Tally.so pour détecter la soumission du formulaire
  useEffect(() => {
    function handleTallyMessage(event: MessageEvent) {
      if (typeof event.data === "string") {
        try {
          const data = JSON.parse(event.data);
          if (data.event === "Tally.FormSubmitted") {
            trackEvent("feedback_form_submitted", {
              form_id: data.payload?.formId ?? "Gxlb12",
            });
          }
        } catch {
          // Pas un message JSON Tally, on ignore
        }
      }
    }

    window.addEventListener("message", handleTallyMessage);
    return () => window.removeEventListener("message", handleTallyMessage);
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-sage-50 via-[#E8F0EB] to-sage-100" />
        <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] rounded-full bg-sage-200/30 blur-[100px]" />
        <div className="absolute bottom-[-15%] left-[-10%] w-[500px] h-[500px] rounded-full bg-sage-300/20 blur-[100px]" />
        <div className="absolute top-[40%] left-[50%] w-[300px] h-[300px] rounded-full bg-sage-200/20 blur-[80px]" />
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(#1F3027 1px, transparent 1px), linear-gradient(90deg, #1F3027 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* Top bar */}
      <header className="relative z-10 px-6 py-4">
        <div className="max-w-3xl mx-auto flex items-center justify-between">
          <a href="/" className="flex items-center gap-2.5 group">
            <div className="w-8 h-8 rounded-xl bg-sage-900 flex items-center justify-center text-white font-bold text-sm shadow-lg shadow-sage-900/20 group-hover:scale-105 transition-transform">
              C
            </div>
            <span className="text-sage-900 font-semibold tracking-tight text-sm">
              Claovia
            </span>
          </a>
          <div className="flex items-center gap-1.5 text-xs text-sage-500">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            100% anonyme
          </div>
        </div>
      </header>

      {/* Intro */}
      <div
        className={`relative z-10 max-w-2xl mx-auto px-6 pt-6 pb-4 text-center transition-all duration-700 ${
          loaded
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-4"
        }`}
      >
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/60 backdrop-blur-sm border border-sage-200/50 text-xs text-sage-600 font-medium mb-5 shadow-sm">
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          </svg>
          5 min &middot; 13 questions
        </div>
        <h1 className="text-2xl md:text-3xl font-bold text-sage-900 tracking-tight leading-tight mb-3">
          Aidez-nous &agrave; construire
          <br />
          <span className="bg-gradient-to-r from-sage-700 to-sage-500 bg-clip-text text-transparent">
            l&apos;outil qui vous sert vraiment
          </span>
        </h1>
        <p className="text-sm text-stone-500 max-w-md mx-auto leading-relaxed">
          Chaque retour influence directement notre feuille de route.
          <br />
          Vos r&eacute;ponses sont anonymes et trait&eacute;es de fa&ccedil;on
          s&eacute;curis&eacute;e.
        </p>
      </div>

      {/* Tally embed */}
      <div
        className={`relative z-10 max-w-2xl mx-auto px-4 pb-12 transition-all duration-700 delay-200 ${
          loaded
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-6"
        }`}
      >
        <div className="bg-white/70 backdrop-blur-xl rounded-3xl border border-sage-100/60 shadow-xl shadow-sage-900/[0.04] overflow-hidden">
          <iframe
            src="https://tally.so/embed/Gxlb12?alignLeft=1&hideTitle=1&transparentBackground=1"
            width="100%"
            height="700"
            frameBorder="0"
            title="Feedback Claovia"
            className="w-full"
            style={{ minHeight: 700 }}
          />
        </div>
      </div>

      {/* Footer */}
      <footer className="relative z-10 pb-8 text-center">
        <p className="text-xs text-sage-400">
          Propuls&eacute; par{" "}
          <a
            href="/"
            className="text-sage-500 hover:text-sage-700 font-medium transition-colors"
          >
            Claovia
          </a>{" "}
          &middot; Donn&eacute;es s&eacute;curis&eacute;es &amp; anonymes
        </p>
      </footer>
    </div>
  );
}
