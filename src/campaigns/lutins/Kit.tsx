import React from 'react';
import KitAventure, { KitConfig, KitMonstre, RuleCard } from '../../components/KitAventure';
import { items } from './Galerie';
import { lutinsSheet } from './sheet';

const theme = {
  bandeau: 'from-emerald-500 to-teal-700',
  titre: 'text-emerald-700 border-emerald-200',
  button: 'bg-emerald-600 hover:bg-emerald-700',
  accent: 'text-emerald-600',
};

const mon = (salle: number, nom: string, nb: string, emoji: string, chips: string[], lignes: React.ReactNode[]): KitMonstre => ({
  chap: `Salle ${salle}`,
  nom,
  nb,
  emoji,
  chips,
  lignes,
});

/** Ici, pas de points de vie : on compte les touches, et la farce enlève des Rires à l'équipe. */
const monstres: KitMonstre[] = [
  mon(1, 'Gargouilles Chatouilleuses', '×3', '🗿', ['🎯 2 touches chacune', '✅ touche à 10+'], [
    <><strong>Leur farce</strong> (fin du tour de table) : le MJ lance 1D6. Sur <strong>1 ou 2</strong>, une plume chatouille un héros : l'équipe perd 1 Rire.</>,
    'Pour en faire tomber une : 2 touches.',
  ]),
  mon(2, 'Marmitons et Dame Louche', '(1 marmiton par enfant)', '🍳', ['🎯 Marmiton : 2 touches', '🎯 Dame Louche : 3 touches'], [
    <><strong>Leur farce :</strong> 1D6 ; sur <strong>1 ou 2</strong>, une tarte fait mouche : l'équipe perd 1 Rire.</>,
    'Sol glissant : un enfant qui rate un jet d’Agilité glisse (sans dégât) et passe son tour.',
    'Le faire rire (Cœur) : une seule réussite sort un marmiton de la bataille.',
  ]),
  mon(3, 'Dictionnaires Gloutons', '×3', '📚', ['🎯 2 touches chacun', '✅ touche à 10+'], [
    <><strong>Leur farce :</strong> 1D6 ; sur <strong>1 ou 2</strong>, un dictionnaire mord un chapeau : l'équipe perd 1 Rire.</>,
    'Lui lire une histoire drôle (Cœur) : touche automatique. Lui donner un mot difficile (Malice) : il perd son tour.',
  ]),
  mon(4, 'Le chevalier Trois-Lutins', '', '🛡️', ['🎯 6 touches (5 à 3 enfants)', '✅ touche à 11+'], [
    <><strong>Sa farce :</strong> le plumeau chatouille. 1D6 ; sur <strong>1, 2 ou 3</strong>, l'équipe perd 1 Rire.</>,
    'Passer entre ses jambes (Agilité, DD 10) : la touche de ce tour compte double.',
  ]),
  mon(5, 'Les Doubles Farceurs', '(1 Double par enfant)', '🪞', ['🎯 2 touches chacun', '✅ touche à 10+'], [
    <><strong>Leur farce :</strong> 1D6 ; sur <strong>1 ou 2</strong>, un Double joue un tour à son héros : l'équipe perd 1 Rire.</>,
    'Le Double copie le dernier geste du héros : refaire deux fois la même action, il l’esquive. Il faut changer de geste à chaque tour. Un Double qui rit ne copie plus : touche automatique.',
  ]),
  mon(6, 'Gardes Royaux et Sir Plumard', '(3 gardes + le capitaine)', '🛏️', ['🎯 Garde : 2 touches', '🎯 Sir Plumard : 3 touches', '✅ touche à 11+'], [
    <><strong>Leur farce :</strong> 1D6 ; sur <strong>1, 2 ou 3</strong>, un coussin « paf » un héros : l'équipe perd 1 Rire.</>,
    'Plumes partout : le premier à éternuer perd son tour (D6 : sur 1, c’est lui).',
  ]),
];

const ecran = (
  <>
    <RuleCard theme={theme} tone="indigo" titre="🎲 Le jet de dé">
      <p>À son tour, l'enfant dit ce que fait son héros et lance le <strong>D20</strong>. Il ajoute <strong>+3</strong> si l'action correspond à son talent. <strong>10 ou plus : réussi.</strong></p>
      <p className="mt-1.5 italic">Exemple : Léa (Acrobate) fait 8 au dé, +3 de talent (Agilité) = 11. C'est réussi !</p>
    </RuleCard>
    <RuleCard theme={theme} tone="emerald" titre="🤝 Le coup de main">
      <p>Avant un jet, un autre enfant dit comment son héros aide : le lanceur gagne <strong>+2</strong>.</p>
      <p className="mt-1.5">Encourage-le à chaque fois : c'est le cœur de l'aventure.</p>
    </RuleCard>
    <RuleCard theme={theme} tone="rose" titre="😂 Les Rires de l'équipe">
      <p>L'équipe n'a pas de PV : elle a <strong>2 Rires par enfant</strong>. Quand une farce touche un héros, elle perd <strong>1 Rire</strong>.</p>
      <p className="mt-1.5"><strong>À 0 Rire,</strong> personne n'est blessé : pause chatouilles, et les lutins rendent <strong>3 Rires</strong> contre une grimace de groupe.</p>
    </RuleCard>
    <RuleCard theme={theme} tone="amber" titre="⚔️ La bataille à plusieurs">
      <ol className="list-decimal pl-5 space-y-1">
        <li>Chacun son tour autour de la table.</li>
        <li>Un jet réussi = <strong>une touche</strong> (le nombre à faire est dans la carte du monstre).</li>
        <li>À la fin du tour de table, le MJ lance le <strong>D6</strong> : sur le chiffre indiqué, l'équipe perd 1 Rire.</li>
      </ol>
    </RuleCard>
    <RuleCard theme={theme} tone="violet" titre="🎭 Les 4 façons d'agir (une option par talent)" large>
      <p className="grid grid-cols-2 gap-x-5 gap-y-1">
        <span><strong>🛡️ Courage :</strong> s'abriter, tenir bon, cogner.</span>
        <span><strong>🤸 Agilité :</strong> grimper, lancer, esquiver (+2 au prochain jet).</span>
        <span><strong>🧠 Malice :</strong> ruser, faire perdre son tour à l'ennemi.</span>
        <span><strong>💛 Cœur :</strong> faire rire, rassurer : souvent une touche automatique.</span>
      </p>
    </RuleCard>
    <RuleCard theme={theme} tone="orange" titre="🦸 Les rôles et leur pouvoir (une fois par aventure)" large>
      <ul className="grid grid-cols-2 gap-x-5 gap-y-0.5">
        {lutinsSheet.abilities.map((a) => (
          <li key={a.name}><strong>{a.name} :</strong> {a.desc}</li>
        ))}
      </ul>
    </RuleCard>
    <RuleCard theme={theme} tone="sky" titre="🍫 Le trésor et le secret de la fin" large>
      <p>Les <strong>pièces en chocolat</strong> gagnées vont dans le bol de l'équipe, pas dans les poches. Le grand coffre ne s'ouvre que si l'équipe accepte de <strong>partager le trésor avec les lutins</strong> : ne le dis pas avant !</p>
    </RuleCard>
  </>
);

const config: KitConfig = {
  titreCourt: 'Le Trésor des Lutins Farceurs',
  emoji: '🍀',
  titre: 'Le Trésor des Lutins Farceurs',
  sous: 'Livret du MJ · 1h15 à 1h45 · Difficulté 1,5/5 · 3 à 6 héros, dès 5 ans',
  theme,
  intro: "Tout ce qu'il faut pour une partie d'équipe, à imprimer avant la séance : livret du MJ, fiches à distribuer, images à montrer, cartes d'objets et de monstres, écran du MJ et dés en papier.",
  resume: (
    <>
      <p>Une aventure <strong>d'équipe pour 3 à 6 enfants</strong>, en 6 salles. Dans chaque salle, les héros déjouent une farce des lutins et gagnent des <strong>pièces en chocolat</strong>. Il n'y a pas de vrais méchants : les lutins veulent surtout jouer, et vérifier que les enfants savent <strong>s'entraider et partager</strong>.</p>
      <p>Le secret de la fin : le grand coffre ne s'ouvre que si l'équipe accepte de <strong>partager le trésor</strong> avec les lutins.</p>
    </>
  ),
  materiel: [
    'Ce kit imprimé : une fiche par enfant (imprime la page 2 en plusieurs exemplaires)',
    'Des ciseaux pour découper les cartes',
    'Un dé à 20 faces (D20) et un dé à 6 faces (D6), ou le bouton 🎲 de l’application',
    'Des pièces en chocolat : 3 ou 4 par enfant, à partager à la fin',
    'Un bol pour le trésor de l’équipe, et des crayons',
  ],
  jouer: [
    'Chaque enfant choisit un rôle différent et reçoit une fiche.',
    'Entourez le rôle et écrivez +3 dans son talent.',
    'Lis le prologue, puis avance salle par salle.',
    'Autour de la table : chacun son tour, et le coup de main (+2) à chaque fois.',
    'Montre les images (page 3) en entrant dans chaque salle.',
    'Les pièces gagnées vont dans le bol de l’équipe.',
  ],
  chapitres: [
    { label: "Prologue : le début de l'histoire" },
    { label: 'Salle 1 : La Grille qui Chatouille', combat: 'bataille' },
    { label: 'Salle 2 : La Cuisine en Folie', combat: 'bataille' },
    { label: 'Salle 3 : La Bibliothèque des Livres Volants', combat: 'bataille' },
    { label: 'Salle 4 : La Galerie des Armures', combat: 'bataille' },
    { label: 'Salle 5 : La Salle des Miroirs', combat: 'bataille' },
    { label: 'Salle 6 : Le Trésor du Roi Pirouette', combat: 'bataille' },
    { label: 'Épilogue : La Grande Fête' },
  ],
  fiches: [lutinsSheet],
  fichesNote: 'une par enfant, à imprimer en plusieurs exemplaires',
  items,
  monstres,
  ecranSous: 'Les règles de la partie à plusieurs, en un coup d’œil. Plie la page en deux et pose-la devant toi.',
  ecran,
};

export default function Kit() {
  return <KitAventure config={config} />;
}
