import type { CharacterSheetProps, SheetTheme } from '../../components/CharacterSheet';

/** Fiches partagées entre le livre d'aventure (Intro) et le kit imprimable. */
export const ileTheme: SheetTheme = {
  bannerGradient: 'from-cyan-500 to-emerald-600',
  statBox: 'border-cyan-100 bg-cyan-50/60',
  statValue: 'text-cyan-700',
  dot: 'bg-rose-400',
  accentText: 'text-cyan-700',
  button: 'bg-cyan-600 hover:bg-cyan-700',
};

export const mousseSheet: CharacterSheetProps = {
  heroEmoji: '🏴‍☠️',
  heroTitle: 'Le Mousse Pirate',
  subtitle: "L'Île qui Bougeait : fiche du héros (aventure express)",
  theme: ileTheme,
  hp: 12,
  compactPrint: true,
  stats: [
    { label: 'Courage', emoji: '🔥', value: '+3', note: 'se battre, sauter, grimper' },
    { label: 'Malice', emoji: '🧠', value: '+4', note: 'ruser, observer, bricoler' },
    { label: 'Cœur', emoji: '💛', value: '+2', note: 'convaincre, rassurer, faire rire' },
  ],
  abilities: [
    { name: 'Coup de Sabre', desc: "pour attaquer : D20 + Courage. Si c'est touché, 1D6 de dégâts." },
    { name: 'Coup de Chance', desc: "une fois par acte, tu relances un dé raté et tu gardes le meilleur." },
    { name: 'Grappin Express', desc: "une fois par acte, tu franchis un obstacle (tronc, ravin) sans jet." },
    { name: 'Conseil du Perroquet', desc: "une fois par acte, Capitaine Miette te donne un indice gratuit (en hurlant)." },
  ],
  startItems: [
    "Un sabre de bois renforcé, un grappin et une longue-vue.",
    '2 biscuits de mer : +3 PV chacun.',
    'Capitaine Miette, un perroquet qui se prend pour le chef.',
    'Ta CA : 11 (les ennemis doivent faire 11 ou plus au D20 pour te toucher).',
  ],
};
