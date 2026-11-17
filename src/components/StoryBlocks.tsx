import React from 'react';
import { motion } from 'motion/react';
import { MessageCircle, Swords, Dices, Info } from 'lucide-react';

/**
 * Petit badge fixe, toujours affiché quel que soit le titre personnalisé
 * passé au composant. C'est lui qui répond, sans ambiguïté, à la question
 * d'un MJ débutant : « est-ce que je dois lire ça à voix haute, ou c'est
 * pour moi ? »
 */
function Kicker({ emoji, text, className }: { emoji: string; text: string; className: string }) {
  return (
    <span className={`inline-flex items-center gap-1 text-[11px] sm:text-xs font-bold uppercase tracking-wide px-2 py-0.5 rounded-full ${className}`}>
      <span aria-hidden="true">{emoji}</span> {text}
    </span>
  );
}

/** Chaque encadré apparaît en douceur quand on arrive dessus en lisant. */
function Reveal({ className, children }: { className: string; children: React.ReactNode }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.08 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
}

export function ReadAloud({ children, title = "À lire à voix haute" }: { children: React.ReactNode, title?: string }) {
  return (
    <Reveal className="my-6 rounded-2xl bg-indigo-50 border-2 border-indigo-200 overflow-hidden shadow-sm">
      <div className="bg-indigo-100/50 px-4 py-2 border-b border-indigo-200 flex flex-wrap items-center gap-2">
        <MessageCircle className="w-5 h-5 text-indigo-600 shrink-0" />
        <span className="font-bold text-indigo-800 font-display">{title}</span>
        <Kicker emoji="🔊" text="Lis ce texte à l'enfant, presque mot pour mot" className="bg-indigo-600 text-white" />
      </div>
      <div className="p-4 sm:p-6 text-indigo-900 text-lg leading-relaxed italic font-medium">
        {children}
      </div>
    </Reveal>
  );
}

export function CombatBox({ children, title = "Combat" }: { children: React.ReactNode, title?: string }) {
  return (
    <Reveal className="my-6 rounded-2xl bg-rose-50 border-2 border-rose-200 overflow-hidden shadow-sm">
      <div className="bg-rose-100/50 px-4 py-2 border-b border-rose-200 flex flex-wrap items-center gap-2">
        <Swords className="w-5 h-5 text-rose-600 shrink-0" />
        <span className="font-bold text-rose-800 font-display">{title}</span>
        <Kicker emoji="🎲" text="Règles du jeu — les phrases en italique, tu peux les lire" className="bg-rose-600 text-white" />
      </div>
      <div className="p-4 sm:p-6 text-rose-900 space-y-3">
        {children}
      </div>
    </Reveal>
  );
}

export function ActionBox({ children, title = "Action & Jets de dés" }: { children: React.ReactNode, title?: string }) {
  return (
    <Reveal className="my-6 rounded-2xl bg-emerald-50 border-2 border-emerald-200 overflow-hidden shadow-sm">
      <div className="bg-emerald-100/50 px-4 py-2 border-b border-emerald-200 flex flex-wrap items-center gap-2">
        <Dices className="w-5 h-5 text-emerald-600 shrink-0" />
        <span className="font-bold text-emerald-800 font-display">{title}</span>
        <Kicker emoji="🎲" text="Règles du jeu — les phrases en italique, tu peux les lire" className="bg-emerald-600 text-white" />
      </div>
      <div className="p-4 sm:p-6 text-emerald-900 space-y-3">
        {children}
      </div>
    </Reveal>
  );
}

export function InfoBox({ children, title = "Note pour le MJ" }: { children: React.ReactNode, title?: string }) {
  return (
    <Reveal className="my-6 rounded-2xl bg-amber-50 border-2 border-amber-200 overflow-hidden shadow-sm">
      <div className="bg-amber-100/50 px-4 py-2 border-b border-amber-200 flex flex-wrap items-center gap-2">
        <Info className="w-5 h-5 text-amber-600 shrink-0" />
        <span className="font-bold text-amber-800 font-display">{title}</span>
        <Kicker emoji="🤫" text="Pour toi seul(e) — ne lis pas ça à l'enfant" className="bg-amber-600 text-white" />
      </div>
      <div className="p-4 sm:p-6 text-amber-900 space-y-2">
        {children}
      </div>
    </Reveal>
  );
}
