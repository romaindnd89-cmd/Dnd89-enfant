import React from 'react';
import KitAventure, { KitConfig, KitMonstre, RuleCard } from '../../components/KitAventure';
import { items } from './Galerie';
import { renardSheet } from './sheet';

const theme = {
  bandeau: 'from-orange-400 to-amber-600',
  titre: 'text-orange-700 border-orange-200',
  button: 'bg-orange-600 hover:bg-orange-700',
  accent: 'text-orange-500',
};

const m = (chap: number, nom: string, nb: string, emoji: string, image: string, pv: string, ca: number, attaque: string, special: string): KitMonstre => ({
  chap: `Chapitre ${chap}`,
  nom,
  nb,
  emoji,
  image: `/art/monstres/${image}.webp`,
  chips: [`❤️ PV ${pv}`, `🛡️ CA ${ca}`],
  lignes: [
    <><strong>Attaque :</strong> {attaque}. Touche à 11 ou plus (D20 du MJ).</>,
    special,
  ],
});

/** Stats reprises des encadrés « Les Ennemis » de chaque chapitre. */
const monstres: KitMonstre[] = [
  m(2, 'Corbeaux de Suie', '×3', '🐦', 'corbeaux-de-suie', '5 (Cendrar : 6)', 11, 'Coup de bec : 1D4', "Un corbeau à 2 PV ou moins s'enfuit en piaillant."),
  m(3, 'Grenouilles Éclaboussantes', '×3', '🐸', 'grenouilles', '4', 10, "Jet d'eau : 1D4", 'Héros trempé : −1 au prochain jet d’Agilité.'),
  m(5, 'Ronces Griffeuses', '×3', '🌿', 'ronces-griffeuses', '5', 11, "Coup d'épine : 1D4", "Point faible : l'eau. Une ronce mouillée perd son tour."),
  m(6, "Filandre, l'Araignée de Brume", '×1', '🕷️', 'filandre', '14', 13, 'Fil collant : 1D6', "Héros collé : Agilité DD 10 pour se libérer. À 4 PV ou moins, elle supplie qu'on la laisse partir. Craint la lumière vive et la chaleur."),
  m(7, 'Échos Moqueurs', '×3', '👻', 'echos-moqueurs', '4', 12, "Griffes d'ombre : 1D4", "Si le héros répète le même geste, l'Écho le copie et l'esquive."),
  m(8, 'Mottes Grises', '×2', '🟤', 'mottes-grises', '6', 10, 'Coup de boue : 1D4', 'Lentes et maladroites. Combat seulement si le héros est repéré.'),
  m(9, "Racines d'Ombre", '', '🌱', 'racines-d-ombre', '18 au total', 12, 'Fouet de racine : 1D6', 'Elles veulent repousser, pas blesser. Combat facultatif : on peut choisir de se battre.'),
  m(10, 'Ombres de Neige', '×3', '❄️', 'ombres-de-neige', '6', 11, 'Souffle glacé : 1D4', 'Héros touché : −1 au prochain jet. Point faible : la lumière et la chaleur.'),
];

const ecran = (
  <>
    <RuleCard theme={theme} tone="indigo" titre="🎲 Le jet de dé">
      <p>L'enfant lance le <strong>D20</strong> et ajoute le talent qui convient. Si le total <strong>atteint ou dépasse le DD</strong>, c'est réussi.</p>
      <p className="mt-1.5"><strong>Repères de DD :</strong> 8 facile · 9 à 10 normal · 11 à 13 difficile.</p>
      <p className="mt-1.5 italic">Exemple : sauter une branche (DD 10). D20 : 7, plus Agilité (+4) = 11. C'est réussi !</p>
    </RuleCard>
    <RuleCard theme={theme} tone="emerald" titre="✌️ Avantage et désavantage">
      <p><strong>Avantage</strong> (un ami aide, un bon objet) : on lance deux D20 et on garde le <strong>meilleur</strong>.</p>
      <p className="mt-1.5"><strong>Désavantage</strong> (le noir, la peur) : on en lance deux et on garde le <strong>moins bon</strong>.</p>
      <p className="mt-1.5"><strong>Petit Malin :</strong> une fois par aventure, l'enfant relance un dé raté.</p>
    </RuleCard>
    <RuleCard theme={theme} tone="rose" titre="⚔️ Le combat">
      <ol className="list-decimal pl-5 space-y-1">
        <li><strong>Initiative :</strong> D20, à 10 ou plus le héros agit en premier.</li>
        <li><strong>Le héros attaque :</strong> D20 + Courage (+3) contre la CA du monstre ; dégâts avec un <strong>D6</strong>.</li>
        <li><strong>Le monstre attaque :</strong> le MJ lance un D20 ; à <strong>11 ou plus</strong> (la CA du renard), il touche.</li>
        <li><strong>Lumi</strong> peut gêner l'ennemi une fois par combat.</li>
      </ol>
    </RuleCard>
    <RuleCard theme={theme} tone="amber" titre="❤️ PV et repos">
      <p>Le renard a <strong>10 PV</strong>. Une noisette grillée rend <strong>3 PV</strong>. Un petit répit entre deux scènes en rend quelques-uns.</p>
      <p className="mt-1.5"><strong>À 0 PV, jamais de panique :</strong> le héros n'est pas éliminé, il est juste trop fatigué. Un ami vient l'aider et l'histoire continue.</p>
    </RuleCard>
    <RuleCard theme={theme} tone="violet" titre="🌀 Les états (ils durent un tour)" large>
      <p>Parfois le héros est <em>collé</em>, <em>ébloui</em>, <em>ralenti</em> ou <em>endormi</em>. L'encadré du chapitre dit comment s'en libérer : en général un petit jet au tour suivant.</p>
    </RuleCard>
    <RuleCard theme={theme} tone="orange" titre="🦊 Les talents du Renardeau" large>
      <p className="flex flex-wrap gap-x-5 gap-y-1">
        {renardSheet.stats.map((s) => (
          <span key={s.label}>{s.emoji} <strong>{s.label}</strong> {s.value}</span>
        ))}
      </p>
      <p className="mt-1.5"><strong>Piquillon</strong> (rencontré au chapitre 5) : une fois par combat, il se met en boule et l'ennemi qui l'attaque perd 2 PV.</p>
    </RuleCard>
  </>
);

const config: KitConfig = {
  titreCourt: 'Le Renardeau',
  emoji: '🦊',
  titre: 'Le Renardeau et la Forêt qui Oublie',
  sous: 'Livret du MJ · 2h15 à 3h (plusieurs séances possibles) · Difficulté 2/5 · Dès 6 ans',
  theme,
  intro: "Tout ce qu'il faut pour jouer en famille, à imprimer avant la séance : livret du MJ, fiche de personnage, images à montrer, cartes d'objets et de monstres, écran du MJ et dés en papier.",
  resume: (
    <>
      <p>
        Le petit renard est le seul à avoir gardé ses souvenirs. Sa mission : retrouver les <strong>3 Glands d'Or</strong> cachés dans la forêt et les rapporter au Grand Chêne-Mémoire <strong>avant la première neige</strong>, sinon l'oubli deviendra définitif.
      </p>
      <p>
        La coupable est <strong>Grisaille</strong>, une vieille taupe-sorcière très seule : elle a lancé la Brume d'Oubli parce que plus personne ne se souvenait d'elle. Le secret : <strong>on ne la vainc pas en se battant, mais en lui rendant une amie.</strong>
      </p>
    </>
  ),
  materiel: [
    'Ce kit imprimé (fiche, cartes, écran du MJ)',
    'Des ciseaux pour découper les cartes',
    'Un dé à 20 faces (D20) et un dé à 6 faces (D6)',
    'Pas de dés ? Le bouton 🎲 de l’application les remplace. Le patron en papier (dernière page) est facultatif',
    'Des crayons de couleur pour le portrait du héros',
  ],
  jouer: [
    'Découpe les cartes et pose-les près de toi.',
    "Donne la fiche à l'enfant : il écrit son nom et dessine son portrait.",
    'Lis le prologue, puis avance chapitre par chapitre.',
    'Lis à voix haute les textes prévus pour ça ; les règles sont pour toi.',
    'Montre les images (page 3) quand le héros arrive ou rencontre.',
    'Une pause entre deux chapitres convient très bien.',
  ],
  compagnon: {
    titre: '🧭 Ton compagnon : Lumi la Luciole',
    texte: <>Une petite luciole dorée vole aux côtés de l'enfant. Sa lumière <strong>fait peur aux créatures de la brume</strong> et se ravive chaque fois qu'on approche d'un Gland d'Or. Elle est toute petite : elle a besoin du courage du héros.</>,
  },
  chapitres: [
    { label: 'Prologue : La Légende du Grand Chêne' },
    { label: "Prologue : le début de l'histoire" },
    { label: 'Chapitre 1 : Le Réveil Gris' },
    { label: 'Chapitre 2 : Les Corbeaux de Suie', combat: 'combat' },
    { label: 'Chapitre 3 : Le Ruisseau Bavard', combat: 'combat' },
    { label: 'Chapitre 4 : Le Village des Écureuils' },
    { label: 'Chapitre 5 : La Ronceraie', combat: 'combat' },
    { label: "Chapitre 6 : L'Araignée de Brume", combat: 'combat' },
    { label: 'Chapitre 7 : La Grotte aux Échos', combat: 'combat' },
    { label: 'Chapitre 8 : Le Terrier de Grisaille', combat: 'combat si le héros est repéré' },
    { label: 'Chapitre 9 : Grisaille la Taupe-Sorcière', combat: 'combat facultatif' },
    { label: 'Chapitre 10 : Le Réveil du Grand Chêne', combat: 'combat' },
    { label: 'Épilogue & Médailles' },
  ],
  fiches: [renardSheet],
  items,
  monstres,
  ecran,
};

export default function Kit() {
  return <KitAventure config={config} />;
}
