import React from 'react';
import KitAventure, { KitConfig, KitMonstre, RuleCard } from '../../components/KitAventure';
import { items } from './Galerie';
import { chevalierSheet, magicienSheet } from './sheet';

const theme = {
  bandeau: 'from-orange-500 to-rose-600',
  titre: 'text-orange-700 border-orange-200',
  button: 'bg-orange-600 hover:bg-orange-700',
  accent: 'text-orange-500',
};

const mon = (chap: string, nom: string, nb: string, emoji: string, pv: string, ca: number, attaque: string, special: string, extra?: string): KitMonstre => ({
  chap,
  nom,
  nb,
  emoji,
  chips: [`❤️ PV ${pv}`, `🛡️ CA ${ca}`],
  lignes: [
    <><strong>Attaque :</strong> {attaque}. Touche à 10 ou plus (D20 du MJ).</>,
    special,
    ...(extra ? [extra] : []),
  ],
});

const monstres: KitMonstre[] = [
  mon('Chapitre 1', 'Pies Voleuses', '×2', '🐦', '5 chacune', 11, 'elles volent un objet au lieu de faire des dégâts', 'Une pie touchée lâche ce qu’elle tenait. L’appât (Malice, DD 10) : une cuillère brillante la fait se cogner.'),
  mon('Chapitre 2', 'Gelées Farceuses', '×2', '🟦', '6 chacune', 10, 'Éclaboussure : 1D4, chaque gelée vise un héros différent', 'Le sirop bleu (Malice, DD 9) colle une gelée : elle passe son tour. Les calmer (Cœur, DD 10) : elles se changent en bonbons.'),
  mon('Chapitre 2', 'Gros-Chapeau, le champignon géant', '', '🍄', '14', 11, 'Saut écrasant : 1D6', 'Il saute un tour sur deux : le tour d’après, il est en l’air et n’attaque pas. Spores toutes les 2 attaques : un héros tire un D6, sur 1 ou 2 il éclate de rire et passe son tour.', 'À 0 PV, il offre une poudre de spores (une fois : un ennemi éternue et perd son tour).'),
  mon('Chapitre 3', 'Chauves-Souris de Cristal', '×3', '🦇', '5 chacune', 12, 'Piqué : 1D4', 'Cri de verre : si deux crient ensemble, un héros ébloui perd son tour (D6 : 1 ou 2). Elles craignent la lumière (Lueur magique : +2 pour les toucher). Berceuse (Cœur, DD 11) : elles s’endorment.'),
  mon('Chapitre 3', 'Grognon, le troll enrhumé', '(si les héros l’attaquent)', '🧌', '8', 11, 'Gros coup de massue : 1D4', 'Il éternue toutes les 2 attaques et rate alors son coup. Chatouiller le nez (Malice, DD 9) : il passe un tour. On peut aussi lui rendre les armes.'),
  mon('Chapitre 4', 'Salamandres de Braise', '×3', '🦎', '6 chacune', 11, 'Boule de braise : 1D4', 'Elles attaquent toutes ensemble si elles sont plus de deux. Point faible : l’eau, une salamandre arrosée perd son prochain tour. Les rassurer (Cœur, DD 10) : elles s’écartent.'),
  mon('Chapitre 4', 'Le Golem Gardien', '', '🗿', '12', 12, 'Coup de poing de pierre : 1D6', 'Lent : il attaque un tour sur deux. Point faible : les joints d’épaule, couverts de mousse (Malice, DD 10).'),
];

const ecran = (
  <>
    <RuleCard theme={theme} tone="indigo" titre="🎲 Que fais-tu ? Le jet de dé">
      <p>Le MJ décrit la scène et demande à chaque joueur : « Que fais-tu ? ». Si c'est difficile, le joueur lance le <strong>D20</strong> et ajoute son talent. Si le total <strong>atteint le DD</strong>, c'est réussi.</p>
      <p className="mt-1.5">Dans cette aventure, les DD vont de <strong>9 à 11</strong>.</p>
      <p className="mt-1.5 italic">Exemple : sauter un ruisseau (DD 10). D20 : 7, +3 de Courage = 10. Réussi !</p>
    </RuleCard>
    <RuleCard theme={theme} tone="emerald" titre="🤝 Le coup de main">
      <p>Avant un jet, l'autre joueur dit comment il aide : le lanceur gagne <strong>+2</strong>. C'est la règle la plus importante : elle récompense l'entraide.</p>
      <p className="mt-1.5">Si un parent joue avec un enfant, il aide sans jamais prendre sa place.</p>
    </RuleCard>
    <RuleCard theme={theme} tone="rose" titre="⚔️ Le combat">
      <ol className="list-decimal pl-5 space-y-1">
        <li><strong>Initiative :</strong> chaque joueur lance un D20, le plus haut commence.</li>
        <li><strong>Un héros attaque :</strong> D20 + talent contre la <strong>CA</strong> du monstre ; s'il touche, dégâts avec un <strong>D6</strong>.</li>
        <li><strong>Le monstre attaque :</strong> le MJ lance un D20 ; à <strong>10 ou plus</strong> il touche, et le dé de dégâts est écrit sur sa carte.</li>
      </ol>
    </RuleCard>
    <RuleCard theme={theme} tone="amber" titre="❤️ PV, repos et soins">
      <p><strong>À 0 PV :</strong> on ne « meurt » jamais, on est <strong>trop fatigué</strong>. L'autre héros le relève, et il repart avec <strong>3 PV</strong>.</p>
      <p className="mt-1.5"><strong>Se soigner :</strong> chaque héros a 2 en-cas magiques (+3 PV chacun). Un court repos entre deux chapitres rend 2 PV.</p>
    </RuleCard>
    <RuleCard theme={theme} tone="orange" titre="🛡️ Le Chevalier : 12 PV" large>
      <p>Courage <strong>+3</strong>, Malice +1, Cœur +2. <strong>Coup d'épée</strong> : D20 + Courage, puis 1D6. <strong>Bouclier</strong> : une fois par chapitre, annule une attaque contre lui ou son ami.</p>
    </RuleCard>
    <RuleCard theme={theme} tone="violet" titre="🪄 L'Apprenti Magicien : 10 PV" large>
      <p>Malice <strong>+3</strong>, Courage +1, Cœur +2. <strong>Étincelle</strong> : D20 + Malice, puis 1D6. <strong>Lueur magique</strong> : une fois par chapitre, éclaire un lieu sombre ou donne un avantage à son ami (deux D20, on garde le meilleur).</p>
    </RuleCard>
    <RuleCard theme={theme} tone="sky" titre="🐉 Le secret de l'histoire" large>
      <p>Il n'y a pas de vrai méchant : <strong>Braisillon a juste peur de son propre feu.</strong> Les deux héros doivent être utiles à chaque chapitre. Ne dis jamais « mort » : dis « trop fatigué ».</p>
    </RuleCard>
  </>
);

const config: KitConfig = {
  titreCourt: 'Le Dragonneau Perdu',
  emoji: '🐉',
  titre: 'Le Dragonneau Perdu',
  sous: 'Livret du MJ · 1h30 à 2h · Difficulté 1/5 · 2 héros, dès 6 ans',
  theme,
  intro: "Tout ce qu'il faut pour jouer à deux, à imprimer avant la séance : livret du MJ, 2 fiches de héros, images à montrer, cartes d'objets et de monstres, écran du MJ et dés en papier.",
  resume: (
    <>
      <p>Une aventure d'<strong>initiation pour 2 joueurs</strong> (deux enfants, ou un enfant et un parent) qui n'ont jamais joué au jeu de rôle. En 4 chapitres, les deux héros retrouvent <strong>Braisillon</strong>, un bébé dragon qui s'est enfui la nuit de sa naissance, avant que la Grande Torche du village ne s'éteigne.</p>
      <p>Il n'y a <strong>pas de vrai méchant</strong> : Braisillon a juste peur de son propre feu. Chaque héros a son talent, et l'aventure est faite pour que <strong>les deux soient utiles à chaque chapitre</strong>.</p>
    </>
  ),
  materiel: [
    'Ce kit imprimé : 2 fiches (Chevalier et Apprenti Magicien), cartes, écran',
    'Des ciseaux pour découper les cartes',
    'Un dé à 20 faces (D20) et un dé à 6 faces (D6)',
    'Pas de dés ? Le bouton 🎲 de l’application les remplace. Le patron en papier (dernière page) est facultatif',
    'Des crayons pour dessiner son héros',
  ],
  jouer: [
    'Chaque joueur prend un héros et sa fiche (écrit son nom, dessine son portrait).',
    'Lis le prologue, puis avance chapitre par chapitre.',
    'Pour chaque scène, demande « Que fais-tu ? ».',
    'Rappelle le coup de main (+2) : c’est la règle clé.',
    'Montre les images (page 4) à l’arrivée dans chaque lieu.',
    'Pause possible entre deux chapitres.',
  ],
  chapitres: [
    { label: "Prologue : le début de l'histoire" },
    { label: "Chapitre 1 : L'Œuf Vide", combat: 'combat' },
    { label: 'Chapitre 2 : La Forêt des Champignons', combat: '2 combats' },
    { label: 'Chapitre 3 : Les Grottes de Cristal', combat: 'combat + troll facultatif' },
    { label: 'Chapitre 4 : Le Nid du Mont Braise', combat: '2 combats' },
    { label: 'Épilogue : La Fête des Flammes' },
  ],
  fiches: [chevalierSheet, magicienSheet],
  fichesNote: 'une par joueur',
  items,
  monstres,
  ecranSous: 'Les règles à deux, en un coup d’œil. Plie la page en deux et pose-la devant toi.',
  ecran,
};

export default function Kit() {
  return <KitAventure config={config} />;
}
