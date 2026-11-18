import React from 'react';
import Prologue, { ProloguePage } from '../../components/Prologue';

const pages: ProloguePage[] = [
  {
    title: "Première page : Grisefeuille-la-Dorée",
    paragraphs: [
      "Il était une fois une forêt si belle qu'on l'appelait Grisefeuille-la-Dorée. À l'automne, quand le soleil descendait sur les collines, ses arbres s'allumaient un à un, comme si quelqu'un passait avec une torche : rouge sur les érables, orange sur les hêtres, jaune sur les bouleaux, et sur les chênes, ce roux profond qui sent le pain grillé et la mousse chaude. Le vent faisait danser les feuilles, et elles tombaient en tourbillons, comme une pluie de pièces d'or.",
      "L'air sentait les champignons, la fumée de bois et les pommes tombées. Les écureuils couraient sur les branches avec des noisettes plein les joues, les hérissons ronflaient sous les tas de feuilles, et le soir, quand la lune se levait, tous les animaux se retrouvaient autour de la grande clairière pour chanter, pour rire, pour se raconter la journée. Mais le vrai trésor de Grisefeuille n'était pas sa couleur. C'était sa mémoire.",
      "Au cœur de la forêt se dresse le Grand Chêne-Mémoire, le plus vieil arbre du monde. Il est si grand qu'il faut renverser la tête pour voir ses branches, et si large que dix renards en rond ne feraient pas le tour de son tronc. Dans ses racines profondes dorment trois petits gardiens de lumière, enfermés dans trois Glands d'Or : le Gland du Rire, qui garde tous les éclats de joie de la forêt ; le Gland de la Chanson, qui garde toutes les mélodies, des berceuses des hiboux aux chants des grenouilles ; et le Gland de l'Amitié, qui garde le nom de chacun et la douceur de savoir qu'on n'est jamais seul. Tant qu'ils brillent, les animaux se souviennent de ceux qu'ils aiment.",
    ],
  },
  {
    title: "Deuxième page : la nuit de la brume",
    paragraphs: [
      "Mais une nuit, sans un bruit, tout a basculé. Une brume grise est montée du fond des terriers, lentement, comme une marée silencieuse. Elle s'est glissée entre les troncs, sous les portes, dans les rêves. Là où elle passait, les couleurs s'éteignaient comme des bougies qu'on souffle. Les feuilles rouges sont devenues couleur de cendre, l'herbe est devenue molle comme du feutre, et le ciel lui-même a pris l'air d'un dessin au crayon qu'on aurait oublié de colorier.",
      "Au matin, le pire n'était pas le gris. C'était le silence. Les oiseaux ne chantaient plus : ils avaient oublié leurs chansons. Les écureuils tournaient en rond, les bras pleins de noisettes, sans savoir où les ranger. Des amis se croisaient sur le chemin en se disant poliment « bonjour, on s'est déjà rencontrés ? ». Et au pied du Grand Chêne, les trois petits creux où dormaient les Glands d'Or étaient vides. Quelqu'un les avait pris. Et si rien n'arrêtait la brume avant la première neige, la forêt oublierait tout, pour toujours.",
    ],
  },
  {
    title: "Troisième page : le petit renard qui n'a rien oublié",
    paragraphs: [
      "Cette nuit-là, tout au fond d'un terrier tapissé de racines, un petit renardeau dormait roulé en boule, la queue sur le museau. Dans sa patte, serrée si fort qu'elle y avait laissé son empreinte, il tenait une feuille dorée que sa grand-mère, Mémé Rouquine, lui avait offerte le soir même, en lui disant tout bas : « Garde-la contre ton cœur, mon tout-petit. Une feuille d'or, ça n'oublie jamais. » Et c'est peut-être pour ça que, ce matin-là, lui seul s'est réveillé avec tous ses souvenirs.",
      "Tu ouvres un œil. Puis l'autre. Il fait étrangement clair dans le terrier. Tu baisses les yeux vers ta fourrure, d'ordinaire d'un roux éclatant, et tu la découvres grise comme un vieux journal mouillé. La seule chose qui brille encore, c'est la feuille, chaude comme un petit soleil, au creux de ta patte. Tu sors sur le seuil, le cœur battant, et le monde entier n'a plus de couleurs. Pas un chant d'oiseau. Pas un bourdonnement. Juste le vent, tout mou, qui passe entre les arbres endormis.",
      "Et tout à coup, devant ton museau, une toute petite lumière dorée se met à voleter, hésitante, une minuscule luciole qui brille en plein jour, et une voix fluette chuchote : « Enfin ! Enfin quelqu'un qui se souvient de quelque chose ! » Voilà. L'aventure commence.",
    ],
  },
];

export default function StoryPrologue() {
  return <Prologue title="La forêt qui se souvenait de tout" pages={pages} />;
}
