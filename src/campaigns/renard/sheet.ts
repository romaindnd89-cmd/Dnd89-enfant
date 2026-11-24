import type { CharacterSheetProps, SheetTheme } from '../../components/CharacterSheet';

/** Fiche du Renardeau : partagée entre le livre d'aventure (Intro) et le kit imprimable. */
export const renardTheme: SheetTheme = {
  bannerGradient: 'from-orange-400 to-amber-600',
  statBox: 'border-orange-100 bg-orange-50/60',
  statValue: 'text-orange-600',
  dot: 'bg-orange-400',
  accentText: 'text-orange-600',
  button: 'bg-orange-600 hover:bg-orange-700',
};

export const renardSheet: CharacterSheetProps = {
  heroEmoji: '🦊',
  heroTitle: 'Le Renardeau',
  subtitle: 'Le seul à se souvenir — dès 6 ans',
  theme: renardTheme,
  hp: 10,
  stats: [
    { label: 'Courage', emoji: '🔥', value: '+3' },
    { label: 'Agilité', emoji: '🤸', value: '+4', note: 'pour bondir' },
    { label: 'Flair', emoji: '👃', value: '+5', note: 'ton super-pouvoir' },
    { label: 'Malice', emoji: '🦊', value: '+3' },
    { label: 'Cœur', emoji: '💛', value: '+5', note: 'pour les amis' },
  ],
  abilities: [
    { name: 'Bond du Renard', desc: 'tu sautes très loin ou très haut. Lance 1D20 + Agilité.' },
    { name: 'Super-Flair', desc: 'tu sens les choses cachées et tu devines les mensonges. Lance 1D20 + Flair.' },
    { name: 'Petit Malin', desc: 'une fois par aventure, tu peux relancer un dé raté.' },
  ],
  startItems: [
    'La Feuille d’Or : ta boussole magique. Elle brille plus fort quand un souvenir est tout près.',
    '3 Noisettes grillées : si tu en manges une, tu récupères 3 PV.',
    'Une écharpe rouge, tricotée par Mémé Rouquine.',
    'Ta fourrure agile : pour te toucher, un monstre doit faire 11 ou plus au D20 (ta CA).',
  ],
};
