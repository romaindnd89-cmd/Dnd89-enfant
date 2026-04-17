import React from 'react';
import { MessageCircle, Swords, Dices, Info } from 'lucide-react';

export function ReadAloud({ children, title = "À lire à voix haute" }: { children: React.ReactNode, title?: string }) {
  return (
    <div className="my-6 rounded-2xl bg-indigo-50 border-2 border-indigo-200 overflow-hidden shadow-sm">
      <div className="bg-indigo-100/50 px-4 py-2 border-b border-indigo-200 flex items-center gap-2">
        <MessageCircle className="w-5 h-5 text-indigo-600" />
        <span className="font-bold text-indigo-800 font-display">{title}</span>
      </div>
      <div className="p-4 sm:p-6 text-indigo-900 text-lg leading-relaxed italic font-medium">
        {children}
      </div>
    </div>
  );
}

export function CombatBox({ children, title = "Combat" }: { children: React.ReactNode, title?: string }) {
  return (
    <div className="my-6 rounded-2xl bg-rose-50 border-2 border-rose-200 overflow-hidden shadow-sm">
      <div className="bg-rose-100/50 px-4 py-2 border-b border-rose-200 flex items-center gap-2">
        <Swords className="w-5 h-5 text-rose-600" />
        <span className="font-bold text-rose-800 font-display">{title}</span>
      </div>
      <div className="p-4 sm:p-6 text-rose-900 space-y-3">
        {children}
      </div>
    </div>
  );
}

export function ActionBox({ children, title = "Action & Jets de dés" }: { children: React.ReactNode, title?: string }) {
  return (
    <div className="my-6 rounded-2xl bg-emerald-50 border-2 border-emerald-200 overflow-hidden shadow-sm">
      <div className="bg-emerald-100/50 px-4 py-2 border-b border-emerald-200 flex items-center gap-2">
        <Dices className="w-5 h-5 text-emerald-600" />
        <span className="font-bold text-emerald-800 font-display">{title}</span>
      </div>
      <div className="p-4 sm:p-6 text-emerald-900 space-y-3">
        {children}
      </div>
    </div>
  );
}

export function InfoBox({ children, title = "Note pour le MJ" }: { children: React.ReactNode, title?: string }) {
  return (
    <div className="my-6 rounded-2xl bg-amber-50 border-2 border-amber-200 overflow-hidden shadow-sm">
      <div className="bg-amber-100/50 px-4 py-2 border-b border-amber-200 flex items-center gap-2">
        <Info className="w-5 h-5 text-amber-600" />
        <span className="font-bold text-amber-800 font-display">{title}</span>
      </div>
      <div className="p-4 sm:p-6 text-amber-900 space-y-2">
        {children}
      </div>
    </div>
  );
}
