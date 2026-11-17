import React from 'react';
import { Eye, Trophy, Compass, Backpack } from 'lucide-react';

/** Objet à ramasser : du vrai butin, avec un effet concret pour la suite de
 *  l'aventure. À noter sur la fiche du héros (sac à dos). Le passage en
 *  italique se lit à voix haute ; le reste (nom de l'objet, effet) est pour toi. */
export function LootBox({ children, item }: { children: React.ReactNode; item: string }) {
  return (
    <div className="my-6 rounded-2xl bg-amber-50 border-2 border-amber-300 overflow-hidden shadow-sm">
      <div className="bg-amber-100/70 px-4 py-2 border-b border-amber-300 flex flex-wrap items-center gap-2">
        <Backpack className="w-5 h-5 text-amber-700 shrink-0" />
        <span className="font-bold text-amber-900 font-display">🎒 {item}</span>
        <span className="inline-flex items-center gap-1 text-[11px] sm:text-xs font-bold uppercase tracking-wide px-2 py-0.5 rounded-full bg-amber-600 text-white">
          À noter sur la fiche du héros
        </span>
      </div>
      <div className="p-4 sm:p-6 text-amber-900 space-y-2">{children}</div>
    </div>
  );
}

function Kicker({ emoji, text, className }: { emoji: string; text: string; className: string }) {
  return (
    <span className={`inline-flex items-center gap-1 text-[11px] sm:text-xs font-bold uppercase tracking-wide px-2 py-0.5 rounded-full ${className}`}>
      <span aria-hidden="true">{emoji}</span> {text}
    </span>
  );
}

/** Décor, sons, odeurs et conseils de jeu pour aider le MJ à planter l'ambiance.
 *  Réservé à ce qui n'est PAS déjà raconté dans le texte à voix haute qui suit
 *  (sinon ça fait lire deux fois la même scène) : surtout des conseils de jeu
 *  d'acteur (voix, rythme), pas une redite du décor. Courte par nature — une
 *  ou deux lignes, pas un pavé. */
export function AmbianceBox({ children, title = 'Décor & ambiance' }: { children: React.ReactNode; title?: string }) {
  return (
    <div className="my-6 rounded-2xl bg-teal-50 border-2 border-teal-200 overflow-hidden shadow-sm">
      <div className="bg-teal-100/50 px-4 py-2 border-b border-teal-200 flex flex-wrap items-center gap-2">
        <Eye className="w-5 h-5 text-teal-600 shrink-0" />
        <span className="font-bold text-teal-800 font-display">{title}</span>
        <Kicker emoji="🤫" text="Pour toi — improvise avec ces détails, ne les lis pas tels quels" className="bg-teal-600 text-white" />
      </div>
      <div className="p-4 sm:p-6 text-teal-900 space-y-2">{children}</div>
    </div>
  );
}

/** Texte à lire quand le héros gagne un combat ou réussit une épreuve, avec le butin.
 *  Le passage en italique se lit à voix haute ; ce qui suit (récompenses, conséquences)
 *  est pour toi. */
export function VictoryBox({ children, title = 'Victoire !' }: { children: React.ReactNode; title?: string }) {
  return (
    <div className="my-6 rounded-2xl bg-yellow-50 border-2 border-yellow-300 overflow-hidden shadow-sm">
      <div className="bg-yellow-100/60 px-4 py-2 border-b border-yellow-300 flex flex-wrap items-center gap-2">
        <Trophy className="w-5 h-5 text-yellow-600 shrink-0" />
        <span className="font-bold text-yellow-800 font-display">{title}</span>
        <Kicker emoji="🔊" text="L'italique se lit à voix haute — le reste est pour toi" className="bg-yellow-600 text-white" />
      </div>
      <div className="p-4 sm:p-6 text-yellow-900 space-y-3">{children}</div>
    </div>
  );
}

/** Rencontre facultative : à jouer si l'enfant en redemande, à sauter si le temps manque. */
export function SideQuestBox({ children, title }: { children: React.ReactNode; title: string }) {
  return (
    <div className="my-6 rounded-2xl bg-purple-50 border-2 border-dashed border-purple-300 overflow-hidden shadow-sm">
      <div className="bg-purple-100/50 px-4 py-2 border-b border-purple-200 flex flex-wrap items-center gap-2">
        <Compass className="w-5 h-5 text-purple-600 shrink-0" />
        <span className="font-bold text-purple-800 font-display">Rencontre annexe (facultative) : {title}</span>
        <Kicker emoji="✨" text="Facultatif — l'italique se lit à voix haute" className="bg-purple-600 text-white" />
      </div>
      <div className="p-4 sm:p-6 text-purple-900 space-y-3">{children}</div>
    </div>
  );
}
