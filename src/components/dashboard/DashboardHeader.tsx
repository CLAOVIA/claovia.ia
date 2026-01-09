"use client";

import Link from "next/link";
import { User as SupabaseUser } from "@supabase/supabase-js";
import {
    Bell,
    Settings,
    LogOut,
    User,
    LayoutDashboard
} from "lucide-react";
import { createClient } from "@/lib/supabase/client";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface DashboardHeaderProps {
    user: SupabaseUser;
}

export function DashboardHeader({ user }: DashboardHeaderProps) {
    const router = useRouter();
    const supabase = createClient();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleSignOut = async () => {
        await supabase.auth.signOut();
        router.refresh();
    };

    return (
        <header className="bg-white border-b border-stone-200 sticky top-0 z-30">
            <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

                <div className="flex items-center gap-8">
                    <Link href="/dashboard" className="flex items-center gap-2 group">
                        <div className="w-8 h-8 rounded-lg bg-sage-800 flex items-center justify-center text-white shadow-sm group-hover:scale-105 transition-transform">
                            <LayoutDashboard className="w-4 h-4" />
                        </div>
                        <span className="font-bold text-sage-900 tracking-tight">Claovia Manager</span>
                    </Link>

                    <nav className="hidden md:flex items-center gap-1">
                        <Link
                            href="/dashboard"
                            className="px-3 py-2 rounded-md text-sm font-medium text-sage-900 bg-sage-50"
                        >
                            Mes REX
                        </Link>
                        <Link
                            href="/dashboard/team"
                            className="px-3 py-2 rounded-md text-sm font-medium text-stone-500 hover:text-sage-800 hover:bg-stone-50 transition-colors"
                        >
                            Mon Équipe
                        </Link>
                    </nav>
                </div>

                <div className="flex items-center gap-4">
                    <button className="text-stone-400 hover:text-sage-600 transition-colors relative">
                        <Bell className="w-5 h-5" />
                        <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
                    </button>

                    <div className="relative">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="flex items-center gap-3 pl-3 py-1.5 pr-1.5 rounded-full border border-stone-200 hover:border-sage-300 transition-colors bg-stone-50"
                        >
                            <span className="text-xs font-medium text-stone-600 hidden sm:block">
                                {user.email}
                            </span>
                            <div className="w-8 h-8 rounded-full bg-sage-100 flex items-center justify-center text-sage-600">
                                <User className="w-4 h-4" />
                            </div>
                        </button>

                        {isMenuOpen && (
                            <div className="absolute right-0 top-full mt-2 w-48 bg-white rounded-xl shadow-lg border border-stone-100 py-1 animate-fade-in-up">
                                <Link href="/settings" className="flex items-center gap-2 px-4 py-2 text-sm text-stone-600 hover:bg-stone-50">
                                    <Settings className="w-4 h-4" /> Paramètres
                                </Link>
                                <button
                                    onClick={handleSignOut}
                                    className="w-full flex items-center gap-2 px-4 py-2 text-sm text-red-600 hover:bg-red-50 text-left"
                                >
                                    <LogOut className="w-4 h-4" /> Déconnexion
                                </button>
                            </div>
                        )}
                    </div>
                </div>

            </div>
        </header>
    );
}
