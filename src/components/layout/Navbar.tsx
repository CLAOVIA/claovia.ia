"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Command, Menu, PlayCircle, X } from "lucide-react";

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={`fixed w-full z-50 top-0 left-0 transition-all duration-300 ${isScrolled
                ? "bg-sage-50/80 backdrop-blur-md border-b border-sage-100"
                : "bg-transparent border-transparent"
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-3 group">
                    <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#0f172a] via-[#1e1b4b] to-[#312e81] flex items-center justify-center group-hover:scale-105 transition-transform duration-300 shadow-lg shadow-indigo-900/20 border border-white/10 relative overflow-hidden">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(34,211,238,0.4),transparent_70%)] opacity-70"></div>
                        <Command className="w-5 h-5 text-cyan-100 relative z-10 drop-shadow-[0_0_8px_rgba(34,211,238,0.6)] stroke-[1.5]" />
                    </div>
                    <span className="font-semibold text-sage-900 tracking-tight text-xl">
                        Claovia
                    </span>
                </Link>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center gap-8">
                    <Link
                        href="/"
                        className="text-sm font-medium text-stone-600 hover:text-sage-800 transition-colors"
                    >
                        Accueil
                    </Link>
                    <Link
                        href="#how-it-works"
                        className="text-sm font-medium text-stone-600 hover:text-sage-800 transition-colors"
                    >
                        Fonctionnalités
                    </Link>
                    <Link
                        href="#demo-section"
                        className="text-sm font-medium text-stone-600 hover:text-sage-800 transition-colors"
                    >
                        Démo
                    </Link>
                    <Link
                        href="#vision"
                        className="text-sm font-medium text-stone-600 hover:text-sage-800 transition-colors"
                    >
                        Notre Vision
                    </Link>
                </div>

                {/* Desktop CTA */}
                <div className="hidden md:flex items-center gap-4">
                    <a
                        href="https://typebot.co/l-o-l-2-svsf1j3"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-sage-900 text-white text-sm font-medium hover:bg-sage-800 transition-all hover:shadow-lg hover:shadow-sage-900/20 hover:-translate-y-0.5"
                    >
                        <PlayCircle className="w-4 h-4" />
                        Tester le REX
                    </a>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden text-sage-800 hover:text-sage-600 focus:outline-none"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    {mobileMenuOpen ? (
                        <X className="w-6 h-6" />
                    ) : (
                        <Menu className="w-6 h-6" />
                    )}
                </button>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className="md:hidden bg-white border-t border-sage-100 absolute w-full shadow-lg z-40 animate-fade-in">
                    <div className="flex flex-col px-6 py-4 space-y-4">
                        <Link
                            href="/"
                            className="text-sm font-medium text-stone-600 py-2 border-b border-stone-50"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            Accueil
                        </Link>
                        <Link
                            href="#how-it-works"
                            className="text-sm font-medium text-stone-600 py-2 border-b border-stone-50"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            Fonctionnalités
                        </Link>
                        <Link
                            href="#demo-section"
                            className="text-sm font-medium text-stone-600 py-2 border-b border-stone-50"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            Démo
                        </Link>
                        <Link
                            href="#vision"
                            className="text-sm font-medium text-stone-600 py-2 border-b border-stone-50"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            Notre Vision
                        </Link>
                        <a
                            href="https://typebot.co/l-o-l-2-svsf1j3"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block text-center px-5 py-3 rounded-xl bg-sage-800 text-white text-sm font-medium shadow-md shadow-sage-900/10 mt-2"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            Tester le REX
                        </a>
                    </div>
                </div>
            )}
        </nav>
    );
}
