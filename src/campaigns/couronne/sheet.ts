import type { CharacterSheetProps, SheetTheme } from '../../components/CharacterSheet';

/** Fiches partagées entre le livre d'aventure (Intro) et le kit imprimable. */
export const couronneTheme: SheetTheme = {
  bannerGradient: 'from-yellow-500 to-fuchsia-600',
  statBox: 'border-fuchsia-100 bg-fuchsia-50/60',
  statValue: 'text-fuchsia-600',
  dot: 'bg-rose-400',
  accentText: 'text-fuchsia-700',
  button: 'bg-fuchsia-600 hover:bg-fuchsia-700',
};

export const detectiveSheet: CharacterSheetProps = {
  heroEmoji: '🕵️',
  heroTitle: 'Le Détective-Aventurier',
  subtitle: 'La Couronne du Rire : fiche du héros, difficulté 3',
  theme: couronneTheme,
  hp: 18,
  stats: [
    { label: 'Courage', emoji: '🔥', value: '+3', note: 'se battre, foncer, résister' },
    { label: 'Malice', emoji: '🧠', value: '+3', note: 'enquêter, crocheter, deviner les mensonges' },
    { label: 'Charme', emoji: '😎', value: '+3', note: 'baratiner, faire rire, convaincre' },
  ],
  abilities: [
    { name: 'Réplique Cinglante', desc: "une fois par chapitre, tu lances une blague qui fait perdre son tour à un ennemi (1 Panache)." },
    { name: 'Coup de Génie', desc: "une fois par chapitre, tu relances un dé raté et tu gardes le meilleur résultat." },
    { name: 'Roulade Héroïque', desc: "tu évites une attaque d'un ennemi en te jetant par terre, avec beaucoup de style (1 Panache)." },
  ],
  startItems: [
    "Une épée un peu rouillée (1D6 +1 de dégâts) et un manteau de détective (CA 13).",
    '3 potions de pomme : chacune rend 5 PV.',
    'Un sac à gadgets : une loupe, un grappin, une cuillère « très utile » et un sifflet qui fait un bruit de canard.',
    '3 points de Panache (5 au maximum) et 20 écus dans la bourse.',
  ],
};
