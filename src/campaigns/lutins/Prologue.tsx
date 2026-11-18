import React from 'react';
import Prologue, { ProloguePage } from '../../components/Prologue';

const pages: ProloguePage[] = [
  {
    title: "Première page : la colline de Chantefarce",
    paragraphs: [
      "Sur la colline de Trèfle-les-Mille, là où l'herbe est si verte qu'elle en est presque jaune, se dresse un château qui n'a jamais été sérieux. Ses tourelles penchent comme des chapeaux mis de travers. Sa grille tire la langue. Ses fenêtres sont trop petites pour les murs, ses escaliers trop longs pour les marches, et ses cheminées fument en faisant des ronds parfaits, comme si quelqu'un, à l'intérieur, fumait la pipe en bulles de savon. C'est le château de Chantefarce, et personne, dans tout le pays, n'a jamais réussi à s'en approcher sans éclater de rire.",
      "Il y a bien longtemps, un roi vivait ici : un grand roi barbu, très digne, qui détestait le bruit. Un matin, il en a eu assez de tous ces rires qui venaient de partout, alors il a fait ses valises et il est parti s'installer dans une grotte très silencieuse, au fond d'une forêt. Le château est resté vide... en apparence. Car dans les murs, sous les marches, derrière les rideaux et dans les théières, des centaines de petits bonshommes, hauts comme trois pommes et coiffés de bonnets à grelots, ont pris leurs aises. Ce sont les lutins farceurs.",
    ],
  },
  {
    title: "Deuxième page : le roi Pirouette et son trésor",
    paragraphs: [
      "Leur roi s'appelle Pirouette Iᵉʳ. Il est le plus petit de tous, le plus malin, le plus joueur, et il règne sur le château depuis un trône de coussins dépareillés. Il possède un trésor fabuleux : un coffre immense, rempli à ras bord de pièces d'or... en chocolat. Mais Pirouette a une théorie : un trésor que personne ne cherche, c'est ennuyeux comme une soupe sans sel.",
      "Alors, depuis une semaine, les lutins ont couru dans tout le château. Ils ont caché des pièces sous les tapis, dans les puddings, derrière les miroirs. Ils ont posé des pièges rigolos dans chaque salle : seaux de confettis, sols glissants, livres qui volent. Et ils ont envoyé, à tous les enfants du pays, une invitation. Pas à n'importe lesquels : aux plus courageux, aux plus malins, à ceux qui savent rire, ruser, et surtout s'entraider. Car le coffre de Pirouette a un secret, et il n'ouvre qu'à une équipe.",
    ],
  },
  {
    title: "Troisième page : l'invitation",
    paragraphs: [
      "Ce matin, au réveil, chacun de vous a trouvé sous son oreiller une minuscule enveloppe verte, fermée par un grelot qui tintait tout seul. Dedans, une carte écrite en lettres tordues : « Avis aux courageux ! Le trésor de Chantefarce attend ceux qui sauront rire, ruser et s'entraider. Venez nombreux. Venez ensemble. Signé : le roi Pirouette. P.-S. : Attention où vous mettez les pieds. Hi hi hi ! »",
      "Alors vous avez traversé les prés, escaladé la colline, et vous voilà tous réunis devant la grande grille, le cœur qui bat, les mains un peu moites, les yeux grands ouverts. Au-dessus de vous, les créneaux sont vides. Mais quelque part, derrière une fenêtre, un petit rire s'échappe... puis un autre... puis cent. Le jeu commence.",
    ],
  },
];

export default function StoryPrologue() {
  return <Prologue title="Le château qui n'a jamais été sérieux" pages={pages} />;
}
