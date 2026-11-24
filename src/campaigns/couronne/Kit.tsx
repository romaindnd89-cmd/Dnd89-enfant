import React from 'react';
import KitAventure, { KitConfig, KitMonstre, RuleCard } from '../../components/KitAventure';
import { items } from './Galerie';
import { detectiveSheet } from './sheet';

const theme = {
  bandeau: 'from-yellow-500 to-fuchsia-600',
  titre: 'text-fuchsia-700 border-fuchsia-200',
  button: 'bg-fuchsia-600 hover:bg-fuchsia-700',
  accent: 'text-fuchsia-600',
};

const L = ({ nom, pv, ca, atk, d, note }: { nom: string; pv: number; ca: number; atk: number; d: string; note?: string }) => (
  <>
    <strong>{nom}</strong> : {pv} PV, CA {ca}, attaque +{atk}, {d}.{note ? ` ${note}` : ''}
  </>
);

const monstres: KitMonstre[] = [
  {
    chap: 'Chapitre 2', nom: 'Les 3 Brigands Poètes', emoji: '🗡️', chips: ['⚔️ attaque : D20 + bonus, touche à 13+ (CA du héros)'],
    lignes: [
      <L nom="Rimbaud" pv={10} ca={12} atk={3} d="1D6" />,
      <L nom="Verlaine" pv={8} ca={11} atk={2} d="1D4" note="Il rougit si on le complimente et rate son tour." />,
      <L nom="La Fontaine" pv={8} ca={11} atk={1} d="1D4" note="Il attaque seulement s’il trouve une rime (D20 : 10 ou plus)." />,
    ],
  },
  {
    chap: 'Chapitre 3', nom: 'Canetons Casse-Cou et Colonel Colvert', emoji: '🦆', chips: ['⚔️ touche à 13+'],
    lignes: [
      <><strong>Canetons (×4)</strong> : 4 PV, CA 12, attaque +2, 1D4. En bande : si deux sont côte à côte, +1.</>,
      <L nom="Colonel Colvert" pv={12} ca={13} atk={4} d="1D6" note="« Ordre de quacker ! » : les canetons gagnent +1." />,
      'Le sifflet à canard hypnotise tous les canards pendant un tour.',
    ],
  },
  {
    chap: 'Chapitre 4', nom: 'Maître Concombre et 2 Gros-Bras', emoji: '🥒', chips: ['⚔️ touche à 13+'],
    lignes: [
      <L nom="Maître Concombre" pv={10} ca={12} atk={3} d="1D6 (courgette)" />,
      <><strong>Gros-Bras (×2)</strong> : 8 PV, CA 11, attaque +2, 1D4 (tomates et poireaux).</>,
      'Pyramide de melons (Malice, DD 12) : deux Gros-Bras trébuchent et perdent leur tour.',
    ],
  },
  {
    chap: 'Chapitre 5', nom: 'Brutus et 2 Gardes du Château', emoji: '🐕', chips: ['⚔️ touche à 13+'],
    lignes: [
      <L nom="Brutus" pv={6} ca={13} atk={3} d="1D4" note="Si Gaston s’approche, il s’enfuit en jappant." />,
      <><strong>Gardes (×2)</strong> : 10 PV, CA 12, attaque +3, 1D6. Ils attaquent un tour sur deux (ils oublient pourquoi ils sont là).</>,
      'Baratin (Charme, DD 13) : les gardes s’en vont chercher un goûter.',
    ],
  },
  {
    chap: 'Chapitre 6', nom: 'Garde-Chef Pâté et 2 Soldats', emoji: '💂', chips: ['⚔️ touche à 13+'],
    lignes: [
      <L nom="Garde-Chef Pâté" pv={14} ca={14} atk={4} d="1D8" note="Il lit son carnet un tour sur deux et rate alors son attaque." />,
      <><strong>Soldats (×2)</strong> : 8 PV, CA 12, attaque +2, 1D6.</>,
      'Le carnet tombé dans la marmite (Malice, DD 13) : le chef passe un tour à le chercher.',
    ],
  },
  {
    chap: 'Chapitre 7', nom: 'Cravates Grises', nb: '×3', emoji: '👔', chips: ['❤️ PV 9', '🛡️ CA 13', '⚔️ +3, 1D6'],
    lignes: [
      'Elles attaquent en ligne : si deux sont alignées, la deuxième ajoute +1.',
      'Silence : personne ne peut crier ou chanter, sauf le héros (1 Panache). Si le MJ parle trop fort, il perd un tour : joue-le pour de rire.',
      'Une bonne blague (Charme, DD 12) : une Cravate perd son tour en se bouchant les oreilles.',
    ],
  },
  {
    chap: 'Chapitre 8 : le combat final', nom: 'Gribouille le Très Sérieux', emoji: '🎩', chips: ['❤️ PV 24', '🛡️ CA 15 (11 sans bouclier)', '⚔️ +5, 1D8'],
    lignes: [
      <><strong>Bouclier de Sérieux :</strong> 3 anneaux de brume. Chaque rire dans la salle en brise un (Charme DD 13, ou Réplique Cinglante). À 3 anneaux brisés, la CA tombe à 11.</>,
      <><strong>Regard Sévère :</strong> le héros perd 1 Panache s’il rate un jet de Charme (DD 13).</>,
      <><strong>Phase 2 (12 PV ou moins) :</strong> « SILENCE ! » : pas de Panache pendant un tour. <strong>Phase 3 (6 PV ou moins) :</strong> l’Armée de Statues Grises.</>,
    ],
  },
];

const ecran = (
  <>
    <RuleCard theme={theme} tone="indigo" titre="🎲 Le jet de dé">
      <p>Le héros lance le <strong>D20</strong> et ajoute son talent (+3 partout). Si le total <strong>atteint le DD</strong>, c'est réussi.</p>
      <p className="mt-1.5"><strong>DD de cette aventure :</strong> 11 à 14 (plus dur que les histoires d'initiation).</p>
      <p className="mt-1.5 italic">Exemple : crocheter une porte (DD 13). 9 + 3 de Malice = 12 : raté de peu. Avec 1 Panache (+3) : 15, réussi !</p>
    </RuleCard>
    <RuleCard theme={theme} tone="fuchsia" titre="✨ Le Panache (3 au départ, 5 au maximum)">
      <p>Un point de Panache : <strong>+3 sur un jet</strong> (après avoir vu le dé), ou <strong>esquiver</strong> une attaque qui vient de toucher, ou une <strong>Réplique Cinglante</strong>.</p>
      <p className="mt-1.5"><strong>Pour en regagner :</strong> donne-en un quand l'enfant fait quelque chose de malin, drôle, gentil ou courageux.</p>
    </RuleCard>
    <RuleCard theme={theme} tone="rose" titre="⚔️ Le combat">
      <ol className="list-decimal pl-5 space-y-1">
        <li><strong>Le héros attaque :</strong> D20 + Courage (+3) contre la <strong>CA</strong> du monstre ; s'il touche : <strong>1D6 +1</strong> (épée).</li>
        <li><strong>Le monstre attaque :</strong> D20 + son bonus. Si le total atteint la <strong>CA du héros (13)</strong>, il touche.</li>
        <li>Une potion de pomme rend <strong>5 PV</strong> mais prend un tour.</li>
      </ol>
    </RuleCard>
    <RuleCard theme={theme} tone="amber" titre="❤️ PV et KO comique">
      <p>Le héros a <strong>18 PV</strong>. À 0 PV, jamais de mort : <strong>KO comique</strong> (tonneau, buisson, filet...). Il se réveille plus tard avec <strong>5 PV</strong> et perd 1 Panache.</p>
      <p className="mt-1.5">Il a 3 potions de pomme et 20 écus au départ.</p>
    </RuleCard>
    <RuleCard theme={theme} tone="orange" titre="🦸 Les pouvoirs du Détective" large>
      <ul className="space-y-0.5">
        {detectiveSheet.abilities.map((a) => (
          <li key={a.name}><strong>{a.name} :</strong> {a.desc}</li>
        ))}
      </ul>
    </RuleCard>
    <RuleCard theme={theme} tone="violet" titre="🕵️ Les secrets de l'enquête (ne les dis pas au héros)" large>
      <ul className="list-disc pl-5 space-y-0.5">
        <li><strong>Gaston l'oie va trahir le héros</strong> (on lui a promis un sac de grain doré). Elle aura une chance de se racheter.</li>
        <li><strong>Le vrai coupable est le Chancelier Gribouille</strong>, celui qui a confié l'enquête. Quatre indices pointent vers lui au fil des chapitres : l'enfant n'a pas besoin de tous les trouver.</li>
        <li><strong>Le roi, accusé par une lettre anonyme,</strong> a lui-même tendu un piège pour attraper le coupable.</li>
        <li>Joue les voix, exagère : tout le monde dans ce royaume est excessif. Ne bloque jamais l'histoire sur un échec.</li>
      </ul>
    </RuleCard>
  </>
);

const config: KitConfig = {
  titreCourt: 'La Couronne du Rire',
  emoji: '🕵️',
  titre: 'La Couronne du Rire',
  sous: 'Livret du MJ · 3h15 à 4h30 (3 séances) · Difficulté 3/5 · 1 héros, dès 8 ans',
  theme,
  intro: "Tout ce qu'il faut pour mener l'enquête, à imprimer avant la séance : livret du MJ, fiche du détective, images à montrer, cartes d'objets et de monstres, écran du MJ et dés en papier.",
  resume: (
    <>
      <p>Une enquête <strong>drôle et pleine de surprises</strong> pour <strong>un héros</strong>, un cran au-dessus des histoires d'initiation. La Couronne du roi a disparu la veille du Grand Banquet. Le héros, accompagné d'une oie bavarde et très gourmande, mène l'enquête à travers huit étapes.</p>
      <p><strong>Spoilers :</strong> le héros va être <strong>trahi</strong> par son coéquipier, puis découvrir que <strong>celui qui lui a confié l'enquête est le vrai coupable</strong>. Laisse l'enfant deviner : il y a des indices partout.</p>
      <p>Trois séances conseillées : chapitres 1 à 3, puis 4 à 6, puis 7 et 8.</p>
    </>
  ),
  materiel: [
    'Ce kit imprimé : fiche du détective, cartes, écran',
    'Des ciseaux pour découper les cartes',
    'Un dé à 20 faces (D20) et un dé à 6 faces (D6)',
    'Pas de dés ? Le bouton 🎲 de l’application les remplace. Le patron en papier (dernière page) est facultatif',
    'Des jetons ou des perles pour compter le Panache et les écus',
  ],
  jouer: [
    'Donne la fiche à l’enfant : il écrit son nom et dessine son portrait.',
    'Pose 3 jetons de Panache devant lui.',
    'Lis le prologue, puis avance chapitre par chapitre.',
    'Joue les voix : plus tu exagères, plus l’enfant rit.',
    'Récompense par un Panache tout ce qui est malin, drôle ou gentil.',
    'Fais une pause entre les séances conseillées.',
  ],
  compagnon: {
    titre: '🪿 Ton compagnon : Gaston l’oie détective',
    texte: <>Une oie bavarde et très gourmande, qui parle comme une diva. Elle peut mordre un ennemi (D20 +2, 1D4) contre une promesse de maïs. Attention : elle va trahir le héros au chapitre 5, puis se racheter.</>,
  },
  chapitres: [
    { label: "Prologue : le début de l'histoire" },
    { label: "Chapitre 1 : Une couronne, ça ne s'évapore pas" },
    { label: 'Chapitre 2 : La Forêt des Brigands Poètes', combat: 'combat' },
    { label: 'Chapitre 3 : La Mare des Canards Syndiqués', combat: 'combat' },
    { label: 'Chapitre 4 : Le Marché aux Menteurs', combat: 'combat' },
    { label: 'Chapitre 5 : Le Château du Baron Cornichon', combat: 'combat' },
    { label: 'Chapitre 6 : Les Cachots et la Grande Surprise', combat: 'combat' },
    { label: 'Chapitre 7 : La Course vers le Palais', combat: 'combat' },
    { label: 'Chapitre 8 : Le Grand Banquet', combat: 'combat final' },
    { label: 'Épilogue : Le Royaume qui Rit' },
  ],
  fiches: [detectiveSheet],
  items,
  monstres,
  ecranSous: 'Règles de difficulté 3 et secrets de l’enquête. Plie la page en deux et pose-la devant toi.',
  ecran,
};

export default function Kit() {
  return <KitAventure config={config} />;
}
