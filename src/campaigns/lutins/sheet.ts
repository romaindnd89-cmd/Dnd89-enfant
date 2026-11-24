import type { CharacterSheetProps, SheetTheme } from '../../components/CharacterSheet';

/** Fiches partagées entre le livre d'aventure (Intro) et le kit imprimable. */
export const lutinsTheme: SheetTheme = {
  bannerGradient: 'from-emerald-500 to-teal-700',
  statBox: 'border-emerald-100 bg-emerald-50/60',
  statValue: 'text-emerald-600',
  dot: 'bg-emerald-400',
  accentText: 'text-emerald-700',
  button: 'bg-emerald-600 hover:bg-emerald-700',
};

export const lutinsSheet: CharacterSheetProps = {
  heroEmoji: '🍀',
  heroTitle: 'Chasseur de Trésor',
  subtitle: 'Le Trésor des Lutins Farceurs — une fiche par enfant',
  theme: lutinsTheme,
  hp: 2,
  hpLabel: 'Mes Rires',
  hpUnit: 'Rires',
  abilitiesLabel: "Mon rôle (j'en entoure un) et son pouvoir",
  compactPrint: true,
  stats: [
    { label: 'Courage', emoji: '🛡️', value: '+__', note: 'oser, pousser, tenir bon' },
    { label: 'Agilité', emoji: '🤸', value: '+__', note: 'sauter, grimper, attraper' },
    { label: 'Malice', emoji: '🧠', value: '+__', note: 'deviner, ruser, bricoler' },
    { label: 'Cœur', emoji: '💛', value: '+__', note: 'rassurer, faire rire, convaincre' },
  ],
  abilities: [
    { name: 'Chevalier (Courage)', desc: 'Bouclier : annule une farce qui touche un ami.' },
    { name: 'Acrobate (Agilité)', desc: 'Galipette : réussit automatiquement un saut ou une esquive.' },
    { name: 'Magicien (Malice)', desc: 'Abracadabra : relance le dé d\'un ami.' },
    { name: 'Barde (Cœur)', desc: 'Chanson rigolote : rend 2 Rires à l\'équipe.' },
    { name: 'Éclaireur (Agilité)', desc: 'Œil de lynx : repère un piège avant qu\'il ne se déclenche.' },
    { name: 'Ami des bêtes (Cœur)', desc: 'Appelle une souris du château qui montre le bon chemin.' },
  ],
  startItems: [
    'J\'entoure mon rôle ci-dessus, et j\'écris +3 dans mon talent (+0 dans les autres).',
    'Mes 2 cœurs sont mes 2 Rires : je les mets dans la réserve de l\'équipe.',
    'Une lanterne, et un grand sac pour les pièces en chocolat.',
  ],
};
