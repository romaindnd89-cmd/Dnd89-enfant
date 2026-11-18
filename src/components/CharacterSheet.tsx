import React, { useRef } from 'react';
import { Printer, Heart, Sparkles } from 'lucide-react';

export interface Stat {
  label: string;
  emoji: string;
  value: string;
  note?: string;
}

/**
 * Thème de la fiche : on passe des classes Tailwind LITTÉRALES
 * (pas construites dynamiquement) pour que le compilateur les détecte.
 */
export interface SheetTheme {
  bannerGradient: string; // ex: 'from-orange-400 to-orange-600'
  statBox: string;        // ex: 'border-orange-100 bg-orange-50/60'
  statValue: string;      // ex: 'text-orange-600'
  dot: string;            // ex: 'bg-orange-400'
  accentText: string;     // ex: 'text-orange-600'
  button: string;         // ex: 'bg-orange-600 hover:bg-orange-700'
}

interface CharacterSheetProps {
  heroEmoji: string;
  heroTitle: string;
  subtitle: string;
  theme: SheetTheme;
  stats: Stat[];
  hp: number;
  abilities: { name: string; desc: string }[];
  startItems: string[];
  /** Zone de dessin plus petite à l'impression, pour les fiches qui ont beaucoup de texte */
  compactPrint?: boolean;
  /** Libellés personnalisables (par défaut : points de vie / PV / Mes pouvoirs) */
  hpLabel?: string;
  hpUnit?: string;
  abilitiesLabel?: string;
}

/**
 * Fiche de personnage imprimable, dessinée en CSS (pas besoin d'image).
 * Des zones vides laissent l'enfant écrire son nom, son âge, dessiner...
 *
 * Impression : la fiche est clonée dans un conteneur #print-root placé
 * directement sous <body>. Le CSS d'impression retire tout le reste de la
 * page, ce qui donne une seule page A4 (les variantes `print:` compactent
 * la mise en page).
 */
export default function CharacterSheet({
  heroEmoji,
  heroTitle,
  subtitle,
  theme,
  stats,
  hp,
  abilities,
  startItems,
  compactPrint,
  hpLabel = 'Points de vie',
  hpUnit = 'PV',
  abilitiesLabel = 'Mes pouvoirs',
}: CharacterSheetProps) {
  const sheetRef = useRef<HTMLDivElement>(null);

  const handlePrint = () => {
    const sheet = sheetRef.current;
    if (!sheet) return;
    let root = document.getElementById('print-root');
    if (!root) {
      root = document.createElement('div');
      root.id = 'print-root';
      document.body.appendChild(root);
    }
    root.innerHTML = '';
    root.appendChild(sheet.cloneNode(true));
    window.print();
  };

  return (
    <div className="mt-12">
      <div
        ref={sheetRef}
        className="print-sheet bg-white rounded-3xl shadow-lg border-2 border-slate-200 overflow-hidden"
      >
        {/* Bandeau */}
        <div className={`bg-gradient-to-r ${theme.bannerGradient} p-6 print:p-3 text-center text-white relative overflow-hidden`}>
          <div className="absolute -right-4 -top-4 text-8xl opacity-20 print:hidden">{heroEmoji}</div>
          <div className="relative z-10 print:flex print:items-center print:justify-center print:gap-3">
            <div className="text-5xl print:text-4xl mb-2 print:mb-0 drop-shadow">{heroEmoji}</div>
            <div>
              <h3 className="font-display text-2xl font-bold">{heroTitle}</h3>
              <p className="text-white/80 text-sm">{subtitle}</p>
            </div>
          </div>
        </div>

        <div className="p-6 print:p-4 space-y-6 print:space-y-3">
          {/* Identité */}
          <div className="grid grid-cols-1 sm:grid-cols-2 print:grid-cols-2 gap-4">
            <Field label="Mon nom de héros" />
            <Field label="Mon âge" />
          </div>

          {/* Portrait à dessiner */}
          <div>
            <p className="text-xs font-bold text-slate-400 uppercase tracking-wide mb-2 print:mb-1">Mon portrait (à dessiner)</p>
            <div className={`h-32 ${compactPrint ? 'print:h-40' : 'print:h-72'} rounded-2xl border-2 border-dashed border-slate-300 bg-slate-50 flex items-center justify-center text-slate-300 text-4xl`}>
              <span className="print:hidden">✏️</span>
            </div>
          </div>

          {/* Caractéristiques */}
          <div>
            <p className="text-xs font-bold text-slate-400 uppercase tracking-wide mb-2 print:mb-1">Mes talents</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 print:grid-cols-5 gap-3 print:gap-2">
              {stats.map((s) => (
                <div key={s.label} className={`rounded-2xl border-2 ${theme.statBox} p-3 print:p-2 text-center`}>
                  <div className="text-2xl print:text-xl">{s.emoji}</div>
                  <div className="font-display font-bold text-slate-700 text-sm">{s.label}</div>
                  <div className={`font-display font-bold text-xl ${theme.statValue}`}>{s.value}</div>
                  {s.note && <div className="text-[10px] text-slate-400 leading-tight mt-0.5">{s.note}</div>}
                </div>
              ))}
            </div>
          </div>

          {/* Points de vie */}
          <div className="flex items-center gap-3 flex-wrap">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wide">{hpLabel}</span>
            <div className="flex items-center gap-1">
              {Array.from({ length: hp }).map((_, i) => (
                <Heart key={i} className="w-6 h-6 print:w-5 print:h-5 text-rose-400 fill-rose-400" />
              ))}
            </div>
            <span className="font-display font-bold text-rose-500">{hp} {hpUnit}</span>
          </div>

          {/* Capacités spéciales */}
          <div>
            <p className="text-xs font-bold text-slate-400 uppercase tracking-wide mb-2 print:mb-1 flex items-center gap-1">
              <Sparkles className="w-3.5 h-3.5" /> {abilitiesLabel}
            </p>
            <div className="space-y-2 print:space-y-1">
              {abilities.map((a) => (
                <div key={a.name} className="flex gap-2 text-sm">
                  <span className={`font-display font-bold ${theme.accentText} whitespace-nowrap`}>{a.name} :</span>
                  <span className="text-slate-600">{a.desc}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Sac à dos */}
          <div>
            <p className="text-xs font-bold text-slate-400 uppercase tracking-wide mb-2 print:mb-1">🎒 Mon sac à dos</p>
            <div className="space-y-2 print:space-y-1">
              {startItems.map((item, i) => (
                <div key={i} className="text-sm text-slate-600 flex items-center gap-2">
                  <span className={`w-2 h-2 shrink-0 rounded-full ${theme.dot}`} />
                  {item}
                </div>
              ))}
              <Field label="" compact />
              <Field label="" compact />
            </div>
          </div>
        </div>
      </div>

      {/* Bouton imprimer (hors de la fiche, donc jamais imprimé) */}
      <div className="flex justify-center mt-6">
        <button
          onClick={handlePrint}
          className={`flex items-center gap-2 ${theme.button} text-white font-bold py-3 px-6 rounded-full transition-colors shadow-md`}
        >
          <Printer className="w-5 h-5" />
          Imprimer ma fiche
        </button>
      </div>
    </div>
  );
}

function Field({ label, compact }: { label: string; compact?: boolean }) {
  return (
    <div>
      {label && <p className="text-xs font-bold text-slate-400 uppercase tracking-wide mb-1">{label}</p>}
      <div className={`border-b-2 border-dashed border-slate-300 ${compact ? 'h-7' : 'h-9'}`} />
    </div>
  );
}
