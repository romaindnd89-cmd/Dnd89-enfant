import type { CharacterSheetProps, SheetTheme } from '../../components/CharacterSheet';

/** Fiches partagées entre le livre d'aventure (Intro) et le kit imprimable. */
export const knightTheme: SheetTheme = {
  bannerGradient: 'from-orange-500 to-rose-600',
  statBox: 'border-orange-100 bg-orange-50/60',
  statValue: 'text-orange-600',
  dot: 'bg-rose-400',
  accentText: 'text-orange-700',
  button: 'bg-orange-600 hover:bg-orange-700',
};

export const mageTheme: SheetTheme = {
  bannerGradient: 'from-violet-500 to-indigo-700',
  statBox: 'border-violet-100 bg-violet-50/60',
  statValue: 'text-violet-600',
  dot: 'bg-violet-400',
  accentText: 'text-violet-700',
  button: 'bg-violet-600 hover:bg-violet-700',
};

export const chevalierSheet: CharacterSheetProps = {
  heroEmoji: '🛡️',
  heroTitle: 'Le Chevalier',
  subtitle: 'Le Dragonneau Perdu : fiche du héros costaud',
  theme: knightTheme,
  hp: 12,
  compactPrint: true,
  stats: [
    { label: 'Courage', emoji: '🔥', value: '+3', note: 'foncer, pousser, se battre' },
    { label: 'Malice', emoji: '🧠', value: '+1', note: 'deviner, ruser' },
    { label: 'Cœur', emoji: '💛', value: '+2', note: 'rassurer, convaincre' },
  ],
  abilities: [
    { name: "Coup d'épée", desc: "pour attaquer : 1D20 + Courage. Si c'est réussi, 1D6 de dégâts." },
    { name: 'Bouclier', desc: "une fois par chapitre, tu annules une attaque contre toi ou contre ton ami." },
  ],
  startItems: [
    "Une épée d'entraînement et un bouclier en bois.",
    '2 pommes du verger : +3 PV chacune.',
  ],
};

export const magicienSheet: CharacterSheetProps = {
  heroEmoji: '🪄',
  heroTitle: "L'Apprenti Magicien",
  subtitle: 'Le Dragonneau Perdu : fiche du héros malin',
  theme: mageTheme,
  hp: 10,
  compactPrint: true,
  stats: [
    { label: 'Courage', emoji: '🔥', value: '+1', note: 'foncer, pousser, se battre' },
    { label: 'Malice', emoji: '🧠', value: '+3', note: 'deviner, ruser, lancer des sorts' },
    { label: 'Cœur', emoji: '💛', value: '+2', note: 'rassurer, convaincre' },
  ],
  abilities: [
    { name: 'Étincelle', desc: "pour attaquer : 1D20 + Malice. Si c'est réussi, 1D6 de dégâts." },
    { name: 'Lueur magique', desc: "une fois par chapitre, tu éclaires un lieu sombre ou tu donnes un avantage à un jet de ton ami (il lance deux D20 et garde le meilleur)." },
  ],
  startItems: [
    'Une baguette de bois et un petit grimoire.',
    '2 biscuits à la cannelle : +3 PV chacun.',
  ],
};
