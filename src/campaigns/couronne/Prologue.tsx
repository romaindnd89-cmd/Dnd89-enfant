import React from 'react';
import Prologue, { ProloguePage } from '../../components/Prologue';

const pages: ProloguePage[] = [
  {
    title: "Première page : Pétaouchnok-sur-Mer",
    paragraphs: [
      "Le royaume de Pétaouchnok-sur-Mer est le royaume le plus drôle du monde. Ses habitants se saluent avec des grimaces. Ses soldats défilent en chaussons. Ses boulangers font des baguettes en forme de moustaches, et ses facteurs distribuent le courrier en chantant. On dit que la mer elle-même y glousse quand le vent la chatouille, et que les mouettes y volent à l'envers les jours de fête.",
      "Son roi, Gaspard le Gourmand, est rond comme une brioche, rose comme un bonbon et heureux comme un poisson dans l'eau, ce qui est normal, puisqu'il règle les affaires de l'État depuis sa baignoire à roulettes, dans la salle du trône. Il ne sait pas dire non à un gâteau. Il ne sait pas non plus dire non à un jeu de mots. Et pourtant, malgré cela, le royaume tient debout. Il y a une raison, et elle est posée chaque soir sur un coussin de velours rouge.",
    ],
  },
  {
    title: "Deuxième page : la Couronne du Rire",
    paragraphs: [
      "Cette raison s'appelle la Couronne du Rire. Elle est en or, avec de petites pierres de toutes les couleurs, et elle est très ancienne : les premiers rois de Pétaouchnok l'ont reçue d'une fée farceuse qui avait trouvé le pays si joyeux qu'elle avait voulu le protéger. La Couronne a un pouvoir étrange : elle brille et elle veille sur le royaume tant que quelqu'un, quelque part, rigole. Un éclat de rire dans une cuisine, un gloussement dans une classe, un fou rire sous un lit, et la Couronne s'illumine comme un petit soleil.",
      "Mais sans rire, elle s'éteint. Et alors, tout devient gris, grincheux et sérieux : les gâteaux s'affaissent, les moustaches pendent, les chansons s'arrêtent au milieu. C'est pourquoi, chaque année, le Grand Banquet du royaume est le moment le plus important de tous : on y mange, on y chante, on y rit à pleins poumons, pour recharger la Couronne.",
    ],
  },
  {
    title: "Troisième page : le matin où tout a disparu",
    paragraphs: [
      "Ce matin, le roi a voulu remettre sa Couronne sur sa tête pour répéter son discours du Banquet de demain soir. Il a plongé la main dans le coussin de velours. Il n'a trouvé qu'une miette de fromage, une plume blanche, et un petit trou en forme de couronne. Alors il a poussé un cri si aigu que les vitres du château ont chanté.",
      "Toi, tu es un jeune détective-aventurier. Tu as ouvert ton agence la semaine dernière, au-dessus de la boulangerie de Madame Tartine, avec une pancarte un peu penchée et un seul client à ton actif : un hamster. Jusqu'ici, ton plus gros mystère, c'était trois chaussettes perdues. Ce matin, à sept heures, un messager en chaussons a défoncé ta porte en criant « URGENCE ROYALE ! » avant de s'excuser pour la porte.",
      "Il reste une journée et demie pour retrouver la Couronne. Sinon, au Banquet, personne n'aura le cœur à rire, et le royaume tout entier deviendra gris. Tu attrapes ton manteau, ta loupe, un croissant, et tu cours vers le château. L'enquête de ta vie commence.",
    ],
  },
];

export default function StoryPrologue() {
  return <Prologue title="Le royaume où l'on ne cesse jamais de rire" pages={pages} />;
}
