'use client';

import { useState } from 'react';
import Link from 'next/link';
import { User, Bell, Shield, CreditCard, ArrowLeft, Settings } from 'lucide-react';

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState('profile');

  return (
    <div className="min-h-screen bg-sage-50">
      <div className="p-8 max-w-4xl mx-auto">
        <Link href="/dashboard" className="inline-flex items-center gap-2 text-sm text-stone-500 hover:text-sage-800 mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4" /> Retour au dashboard
        </Link>

        <h1 className="text-2xl font-bold text-sage-900 mb-8">Param\u00e8tres</h1>

        <div className="bg-white rounded-2xl shadow-sm border border-sage-100 overflow-hidden flex flex-col md:flex-row">
          {/* Settings Sidebar */}
          <div className="w-full md:w-64 bg-stone-50 border-r border-stone-100 p-4">
            <nav className="space-y-1">
              <button
                onClick={() => setActiveTab('profile')}
                className={`w-full flex items-center gap-3 px-4 py-2.5 text-sm font-medium rounded-lg transition-colors ${activeTab === 'profile' ? 'bg-white text-sage-900 shadow-sm' : 'text-stone-500 hover:text-stone-900 hover:bg-white/50'}`}
              >
                <User className="w-4 h-4" /> Profil
              </button>
              <button
                onClick={() => setActiveTab('notifications')}
                className={`w-full flex items-center gap-3 px-4 py-2.5 text-sm font-medium rounded-lg transition-colors ${activeTab === 'notifications' ? 'bg-white text-sage-900 shadow-sm' : 'text-stone-500 hover:text-stone-900 hover:bg-white/50'}`}
              >
                <Bell className="w-4 h-4" /> Notifications
              </button>
              <button
                onClick={() => setActiveTab('security')}
                className={`w-full flex items-center gap-3 px-4 py-2.5 text-sm font-medium rounded-lg transition-colors ${activeTab === 'security' ? 'bg-white text-sage-900 shadow-sm' : 'text-stone-500 hover:text-stone-900 hover:bg-white/50'}`}
              >
                <Shield className="w-4 h-4" /> S\u00e9curit\u00e9
              </button>
              <button
                onClick={() => setActiveTab('billing')}
                className={`w-full flex items-center gap-3 px-4 py-2.5 text-sm font-medium rounded-lg transition-colors ${activeTab === 'billing' ? 'bg-white text-sage-900 shadow-sm' : 'text-stone-500 hover:text-stone-900 hover:bg-white/50'}`}
              >
                <CreditCard className="w-4 h-4" /> Abonnement
              </button>
            </nav>
          </div>

          {/* Content Area */}
          <div className="flex-1 p-8">
            {activeTab === 'profile' && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium text-sage-900">Informations personnelles</h3>
                  <p className="text-sm text-stone-500">Mettez \u00e0 jour vos informations de contact.</p>
                </div>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-stone-500 uppercase tracking-wider mb-2">Pr\u00e9nom</label>
                      <input type="text" className="w-full px-4 py-2 rounded-xl bg-stone-50 border border-stone-200 text-sm focus:outline-none focus:ring-2 focus:ring-sage-500" placeholder="Baptiste" />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-stone-500 uppercase tracking-wider mb-2">Nom</label>
                      <input type="text" className="w-full px-4 py-2 rounded-xl bg-stone-50 border border-stone-200 text-sm focus:outline-none focus:ring-2 focus:ring-sage-500" placeholder="Dupont" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-stone-500 uppercase tracking-wider mb-2">Email</label>
                    <input type="email" disabled className="w-full px-4 py-2 rounded-xl bg-stone-100 border border-stone-200 text-sm text-stone-400 cursor-not-allowed" value="baptiste@entreprise.com" />
                  </div>
                </div>
                <div className="pt-4 border-t border-stone-100 flex justify-end">
                  <button className="bg-sage-800 text-white px-6 py-2 rounded-lg text-sm font-bold hover:bg-sage-900 transition-colors">Enregistrer</button>
                </div>
              </div>
            )}

            {activeTab === 'notifications' && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium text-sage-900">Pr\u00e9f\u00e9rences de notifications</h3>
                  <p className="text-sm text-stone-500">Configurez comment vous souhaitez \u00eatre notifi\u00e9.</p>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-stone-50 rounded-xl">
                    <div>
                      <p className="font-medium text-sage-900 text-sm">Nouveaux REX</p>
                      <p className="text-xs text-stone-500">Recevoir un email quand un collaborateur soumet un REX</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" defaultChecked className="sr-only peer" />
                      <div className="w-11 h-6 bg-stone-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-sage-100 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-stone-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-sage-600"></div>
                    </label>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-stone-50 rounded-xl">
                    <div>
                      <p className="font-medium text-sage-900 text-sm">Rappels hebdomadaires</p>
                      <p className="text-xs text-stone-500">R\u00e9sum\u00e9 des REX non trait\u00e9s</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" defaultChecked className="sr-only peer" />
                      <div className="w-11 h-6 bg-stone-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-sage-100 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-stone-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-sage-600"></div>
                    </label>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'security' && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium text-sage-900">S\u00e9curit\u00e9 du compte</h3>
                  <p className="text-sm text-stone-500">G\u00e9rez la s\u00e9curit\u00e9 de votre compte.</p>
                </div>
                <div className="p-4 bg-green-50 rounded-xl border border-green-100">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                      <Shield className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <p className="font-medium text-green-800 text-sm">Connexion s\u00e9curis\u00e9e active</p>
                      <p className="text-xs text-green-600">Authentification via Magic Link</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'billing' && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium text-sage-900">Votre abonnement</h3>
                  <p className="text-sm text-stone-500">G\u00e9rez votre plan et facturation.</p>
                </div>
                <div className="p-6 bg-sage-50 rounded-xl border border-sage-100">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <span className="text-xs font-bold text-sage-600 uppercase">Plan actuel</span>
                      <h4 className="text-xl font-bold text-sage-900">Gratuit</h4>
                    </div>
                    <span className="bg-sage-100 text-sage-700 px-3 py-1 rounded-full text-xs font-bold">Actif</span>
                  </div>
                  <p className="text-sm text-stone-500 mb-4">Jusqu&apos;\u00e0 5 REX par mois, 1 manager</p>
                  <button className="w-full bg-sage-800 text-white py-2 rounded-lg text-sm font-bold hover:bg-sage-900 transition-colors">
                    Passer au plan Pro
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
