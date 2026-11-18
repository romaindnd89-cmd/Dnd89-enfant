import React from 'react';
import { motion } from 'motion/react';
import { MessageCircle, Swords, Dices, Info, Target, Search } from 'lucide-react';

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
        <MessageCircle className="box-icon w-5 h-5 text-indigo-600 shrink-0" />
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
        <Swords className="box-icon w-5 h-5 text-rose-600 shrink-0" />
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
        <Dices className="box-icon w-5 h-5 text-emerald-600 shrink-0" />
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
        <Info className="box-icon w-5 h-5 text-amber-600 shrink-0" />
        <span className="font-bold text-amber-800 font-display">{title}</span>
        <Kicker emoji="🤫" text="Pour toi seul(e) — ne lis pas ça à l'enfant" className="bg-amber-600 text-white" />
      </div>
      <div className="p-4 sm:p-6 text-amber-900 space-y-2">
        {children}
      </div>
    </Reveal>
  );
}

/** Premier tour d'un combat, joué pas à pas avec des chiffres, pour montrer comment faire. */
export function FirstRound({ children }: { children: React.ReactNode }) {
  return (
    <div className="my-4 rounded-xl border-2 border-dashed border-rose-300 bg-white/70 p-3 sm:p-4 text-rose-950">
      <p className="flex items-center gap-2 font-display font-bold text-rose-800 mb-2">
        <Target className="w-5 h-5 shrink-0" /> Exemple du premier tour
        <span className="text-xs font-bold uppercase tracking-wide bg-rose-100 text-rose-700 rounded-full px-2 py-0.5">
          à jouer avec de vrais dés
        </span>
      </p>
      <div className="space-y-2 text-[15px] leading-relaxed">{children}</div>
    </div>
  );
}

/**
 * Question de déduction : l'enfant réfléchit avec les indices qu'il a trouvés.
 * La réponse est repliée pour que l'enfant ne la lise pas par hasard.
 */
export function Deduction({
  question,
  clues,
  hint,
  answer,
  title = 'À toi de déduire',
}: {
  question: string;
  clues: string[];
  hint: string;
  answer: React.ReactNode;
  title?: string;
}) {
  return (
    <Reveal className="my-6 rounded-2xl bg-violet-50 border-2 border-violet-200 overflow-hidden shadow-sm">
      <div className="bg-violet-100/50 px-4 py-2 border-b border-violet-200 flex flex-wrap items-center gap-2">
        <Search className="box-icon w-5 h-5 text-violet-600 shrink-0" />
        <span className="font-bold text-violet-800 font-display">🔎 {title}</span>
        <Kicker emoji="🧠" text="On réfléchit ensemble, sans dé" className="bg-violet-600 text-white" />
      </div>
      <div className="p-4 sm:p-6 text-violet-900 space-y-3">
        <p className="text-lg font-bold">{question}</p>
        <div>
          <p className="font-bold text-sm uppercase tracking-wide text-violet-700 mb-1">Les indices à relire</p>
          <ul className="list-disc pl-5 space-y-1">
            {clues.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>
        </div>
        <p className="rounded-xl bg-white/70 border border-violet-200 px-3 py-2 text-[15px]">
          <strong>Coup de pouce si l'enfant sèche :</strong> {hint}
        </p>
        <details className="rounded-xl bg-white/70 border border-violet-200 px-3 py-2">
          <summary className="cursor-pointer font-bold text-violet-800">👁️ Voir la réponse (pour le MJ)</summary>
          <div className="mt-2 space-y-2 text-[15px]">{answer}</div>
        </details>
      </div>
    </Reveal>
  );
}
