import React from 'react';
import { MessageCircle, Eye, Dices, Swords, Info, Trophy, Compass, BookOpenCheck } from 'lucide-react';

interface Row {
  icon: React.ReactNode;
  box: string;
  rule: string;
  color: string; // classes littérales pour la puce de couleur
}

const ROWS: Row[] = [
  {
    icon: <MessageCircle className="w-4 h-4" />,
    box: 'Encadré violet « À lire à voix haute »',
    rule: "Tu lis ce texte à l'enfant, presque mot pour mot. C'est écrit pour être raconté tel quel.",
    color: 'bg-indigo-100 border-indigo-300 text-indigo-800',
  },
  {
    icon: <Info className="w-4 h-4" />,
    box: 'Encadré ambre « Note pour le MJ »',
    rule: "C'est pour toi uniquement. Lis-le avant de jouer la scène, puis raconte avec tes propres mots — ne lis jamais cette liste telle quelle.",
    color: 'bg-amber-100 border-amber-300 text-amber-800',
  },
  {
    icon: <Eye className="w-4 h-4" />,
    box: 'Encadré turquoise « Décor & ambiance »',
    rule: "Pareil : c'est une préparation pour toi, pas un texte à réciter. Pioche quelques détails pour planter le décor avec tes mots.",
    color: 'bg-teal-100 border-teal-300 text-teal-800',
  },
  {
    icon: <Dices className="w-4 h-4" />,
    box: 'Encadrés vert et rose « Action » et « Combat »',
    rule: 'Les règles du jeu : qui lance quel dé, ce qui se passe selon le résultat. Les phrases en italique à l\'intérieur, tu peux les lire à voix haute.',
    color: 'bg-emerald-100 border-emerald-300 text-emerald-800',
  },
  {
    icon: <Trophy className="w-4 h-4" />,
    box: 'Encadré jaune « Victoire »',
    rule: 'Le texte en italique se lit à voix haute ; ce qui suit (récompenses) est pour toi.',
    color: 'bg-yellow-100 border-yellow-300 text-yellow-800',
  },
  {
    icon: <Compass className="w-4 h-4" />,
    box: 'Encadré violet pointillé « Rencontre annexe »',
    rule: "Une scène facultative. Joue-la si l'enfant a envie d'explorer, saute-la sans problème si le temps manque.",
    color: 'bg-purple-100 border-purple-300 text-purple-800',
  },
  {
    icon: <Swords className="w-4 h-4" />,
    box: 'Les chiffres (1D20, 1D6...)',
    rule: "1D20 veut dire : lance un dé à 20 faces (ou utilise le bouton 🎲 en bas de l'écran). Additionne le bonus indiqué, puis compare au nombre de réussite — si tu l'atteins ou le dépasses, c'est gagné.",
    color: 'bg-slate-100 border-slate-300 text-slate-700',
  },
];

export default function ReadingLegend() {
  return (
    <div className="my-8 rounded-2xl bg-white border-2 border-slate-200 overflow-hidden shadow-sm">
      <div className="bg-slate-100 px-4 py-3 border-b border-slate-200 flex items-center gap-2">
        <BookOpenCheck className="w-5 h-5 text-slate-600 shrink-0" />
        <span className="font-bold text-slate-700 font-display">
          Mode d'emploi — pour les MJ débutants (lis ceci une seule fois !)
        </span>
      </div>
      <div className="p-4 sm:p-5 space-y-3">
        <p className="text-slate-600 text-sm">
          Tu n'as jamais fait de jeu de rôle ? Pas de souci : ce livre utilise des encadrés de couleur, toujours
          avec la même règle. Un petit badge en haut de chaque encadré te le rappelle, mais voici le code complet :
        </p>
        {ROWS.map((r, i) => (
          <div key={i} className={`flex items-start gap-3 rounded-xl border-2 p-3 ${r.color}`}>
            <div className="mt-0.5 shrink-0">{r.icon}</div>
            <div>
              <p className="font-bold text-sm">{r.box}</p>
              <p className="text-sm opacity-90">{r.rule}</p>
            </div>
          </div>
        ))}
        <p className="text-slate-500 text-sm italic pt-1">
          Si jamais tu hésites en pleine partie, demande de l'aide à Flammèche 🐉 (le bouton en bas à gauche) : il
          te souffle une phrase toute prête pour n'importe quel moment de l'histoire.
        </p>
      </div>
    </div>
  );
}
