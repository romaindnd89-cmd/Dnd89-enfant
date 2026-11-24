import React from 'react';
import KitAventure, { KitConfig, KitMonstre, RuleCard } from '../../components/KitAventure';
import { items } from './Galerie';
import { mousseSheet } from './sheet';

const theme = {
  bandeau: 'from-cyan-500 to-emerald-600',
  titre: 'text-cyan-700 border-cyan-200',
  button: 'bg-cyan-600 hover:bg-cyan-700',
  accent: 'text-cyan-600',
};

const monstres: KitMonstre[] = [
  {
    chap: 'Acte 1',
    nom: 'Crabes Pirates',
    nb: '×3',
    emoji: '🦀',
    chips: ['❤️ PV 4 chacun', '🛡️ CA 11'],
    lignes: [
      <><strong>Attaque :</strong> coup de pince, 1D4. Touche à 11 ou plus (D20 du MJ).</>,
      'Le Péage (Cœur, DD 11) : offrir un biscuit, le petit crabe timide accepte et les autres hésitent : le combat s’arrête.',
      'Miette (une fois) : elle hurle « BOU ! » et un crabe lâche sa pince.',
    ],
  },
  {
    chap: 'Acte 3 : le duel',
    nom: 'Barbe-Rose, Grumeau et Pétoche',
    emoji: '🧔',
    chips: ['Barbe-Rose ❤️ 12 · 🛡️ 12', 'Grumeau et Pétoche ❤️ 4 · 🛡️ 10'],
    lignes: [
      <><strong>Barbe-Rose :</strong> coup de louche, 1D6, touche à 11 ou plus. Chaque fois qu’elle est touchée, sa barbe de papier se décolle un peu.</>,
      <><strong>Grumeau et Pétoche :</strong> coup de pied peureux, 1D4, touche à 11 ou plus. Ils attaquent un tour sur deux (ils hésitent).</>,
      'Si Barbe-Rose est alliée (acte 2) : elle commence à 6 PV et peut abandonner à tout moment.',
      'Miette (une fois) : « LA GRANDE VAGUE ARRIVE ! », Barbe-Rose se retourne et le héros gagne un tour.',
    ],
  },
];

const ecran = (
  <>
    <RuleCard theme={theme} tone="indigo" titre="🎲 Le jet de dé">
      <p>Le héros lance le <strong>D20</strong> et ajoute son talent. Si le total atteint le <strong>DD</strong>, c'est réussi.</p>
      <p className="mt-1.5 italic">Exemple : sauter un tronc (DD 10). 8 + 3 de Courage = 11 : réussi !</p>
    </RuleCard>
    <RuleCard theme={theme} tone="rose" titre="⚔️ Le combat">
      <ol className="list-decimal pl-5 space-y-1">
        <li><strong>Le héros attaque :</strong> D20 + talent contre la CA ; s'il touche : <strong>1D6</strong>.</li>
        <li><strong>L'ennemi attaque :</strong> le MJ lance un D20 ; à <strong>11 ou plus</strong> (la CA du mousse), il touche.</li>
      </ol>
    </RuleCard>
    <RuleCard theme={theme} tone="amber" titre="❤️ PV et biscuits">
      <p>Le mousse a <strong>12 PV</strong>. À 0 PV, jamais de mort : il s'endort dans un hamac et se réveille avec <strong>4 PV</strong>.</p>
      <p className="mt-1.5">2 biscuits de mer : <strong>+3 PV</strong> chacun.</p>
    </RuleCard>
    <RuleCard theme={theme} tone="emerald" titre="⏱️ Le chrono du MJ">
      <p>30 à 40 minutes, en 3 actes d'environ 10 minutes. Pas de temps ? Joue seulement les textes violets (« à lire à voix haute »), les encadrés verts marqués ⭐ et les deux combats : 20 minutes.</p>
    </RuleCard>
    <RuleCard theme={theme} tone="orange" titre="🦸 Les pouvoirs du Mousse (une fois par acte)" large>
      <ul className="grid grid-cols-2 gap-x-5 gap-y-0.5">
        {mousseSheet.abilities.map((a) => (
          <li key={a.name}><strong>{a.name} :</strong> {a.desc}</li>
        ))}
      </ul>
      <p className="mt-1.5">Talents : Courage <strong>+3</strong>, Malice <strong>+4</strong>, Cœur <strong>+2</strong>.</p>
    </RuleCard>
    <RuleCard theme={theme} tone="sky" titre="🐢 Le secret de l'île (ne le dis pas à l'enfant)" large>
      <p><strong>L'île est une tortue géante</strong> qui cherche son œuf depuis cent ans. Les indices sont là dès le début : le sol qui tremble, les arbres qui ronflent, la « montagne » qui respire. La révélation est le grand moment de l'histoire.</p>
    </RuleCard>
  </>
);

const config: KitConfig = {
  titreCourt: "L'Île qui Bougeait",
  emoji: '🏴‍☠️',
  titre: "L'Île qui Bougeait",
  sous: 'Livret du MJ · 30 à 40 minutes (20 avec les raccourcis) · Difficulté 2/5 · 1 héros, dès 6 ans',
  theme,
  intro: "Tout ce qu'il faut pour une aventure express, à imprimer avant la séance : livret du MJ, fiche du mousse, images à montrer, cartes d'objets et de monstres, écran du MJ et dés en papier.",
  resume: (
    <>
      <p>Une aventure <strong>express de 30 minutes</strong> pour <strong>un héros</strong> : un jeune pirate échoue sur une île qui ronfle, rencontre une capitaine rivale très susceptible, trouve un œuf géant dans une grotte... et découvre que <strong>l'île est une tortue géante</strong> qui cherche son œuf depuis cent ans.</p>
      <p><strong>Spoiler :</strong> ne dis pas à l'enfant que l'île est vivante ! Il y a des indices dès le début. 2 petits combats.</p>
    </>
  ),
  materiel: [
    'Ce kit imprimé : fiche du mousse, cartes, écran',
    'Des ciseaux pour découper les cartes',
    'Un dé à 20 faces (D20) et un dé à 6 faces (D6)',
    'Pas de dés ? Le bouton 🎲 de l’application les remplace. Le patron en papier (dernière page) est facultatif',
    'Un vrai biscuit à grignoter pendant le jeu ?',
  ],
  jouer: [
    'Donne la fiche à l’enfant : il écrit son nom et dessine son portrait.',
    'Lis le prologue, puis avance acte par acte (environ 10 minutes chacun).',
    'Lis à voix haute les textes violets.',
    'Si le temps manque, joue seulement les passages marqués ⭐ et les deux combats.',
    'Montre les images (page 3) en arrivant dans chaque lieu.',
  ],
  compagnon: {
    titre: '🦜 Ton compagnon : Capitaine Miette',
    texte: <>Un perroquet vert à voix de trompette, qui s'est nommé chef parce qu'il parlait plus fort que tout le monde. Une fois par acte, il donne un indice gratuit (en hurlant).</>,
  },
  chapitres: [
    { label: "Prologue : le début de l'histoire" },
    { label: 'Acte 1 : Le Naufrage de Poche', combat: 'combat des crabes' },
    { label: 'Acte 2 : La Jungle qui Ronfle' },
    { label: 'Acte 3 : Le Trésor qui Respire', combat: 'duel contre Barbe-Rose' },
    { label: 'Épilogue et médailles' },
  ],
  fiches: [mousseSheet],
  items,
  monstres,
  ecranSous: 'Tout pour une partie de 30 minutes. Plie la page en deux et pose-la devant toi.',
  ecran,
};

export default function Kit() {
  return <KitAventure config={config} />;
}
