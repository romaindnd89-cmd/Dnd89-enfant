import React from 'react';
import Prologue, { ProloguePage } from '../../components/Prologue';

const pages: ProloguePage[] = [
  {
    title: "Première page : la Vallée des Mille Lanternes",
    paragraphs: [
      "Au creux des montagnes, là où les nuages d'hiver s'arrêtent pour se reposer, s'étend une vallée que les voyageurs appellent la Vallée des Mille Lanternes. Le soir, quand le soleil glisse derrière les sommets et que le froid pique le bout du nez, un petit miracle se produit : une à une, comme des étoiles qui descendraient sur terre, les lanternes s'allument. Sur les toits, au bord des chemins, aux fenêtres des maisons, accrochées aux branches des vieux pommiers. Des rouges, des dorées, des vertes, des bleues. Chacune a sa couleur, sa forme, sa petite flamme qui ne vacille jamais. Et tout le monde dans la vallée a la sienne : le boulanger, la sage-femme, le forgeron, les enfants, et jusqu'au plus vieux des chênes.",
      "Car ici, chaque habitant reçoit sa lanterne le jour de sa naissance. Elle est allumée à la grande Flamme-Source, tout au fond de la vallée, et elle brille aussi longtemps que son propriétaire est heureux, entouré, et qu'il se souvient de qui il est. On dit que dans la Vallée des Mille Lanternes, personne ne se sent jamais seul dans le noir. C'est une vallée de lumière. Les gens y marchent la nuit sans peur, les maisons ont des portes qu'on ne ferme pas, et les bébés s'endorment en regardant les petites flammes danser au plafond.",
    ],
  },
  {
    title: "Deuxième page : le Gardien",
    paragraphs: [
      "Pour que tout cela dure, il faut quelqu'un qui veille. Ce quelqu'un s'appelle Maître Bernardin. C'est un vieux blaireau au pelage gris comme une cendre tiède, aux lunettes rondes toujours posées de travers, et au manteau de laine rapiécé qui sent le feu de bois et la tisane. Depuis cinquante hivers, il est le Gardien des Lanternes. Il connaît chaque flamme par son nom, chaque habitant par son rire. Quand un bébé naît, c'est lui qui allume sa lanterne en chuchotant : « Bienvenue, petite lumière. » Quand un voyageur se perd, c'est lui qui sort dans la neige avec sa grande lanterne verte, pour le ramener.",
      "Et toi, tu es son apprenti. Il t'a recueilli quand tu étais petit, et depuis, tu as appris à ses côtés tout ce qu'un Gardien doit savoir : lire les vieux registres, tailler les mèches, deviner le temps à la couleur des flammes, et surtout, écouter. « Une lanterne, a-t-il coutume de dire, ça ne brille pas pour éclairer. Ça brille pour dire à quelqu'un : je suis là. » Il t'a aussi appris à rire, à te lever tôt, et à mettre trois cuillères de miel dans la tisane. Tu l'aimes comme on aime quelqu'un qui vous a tout appris. Il est ton maître, et un peu plus que ça.",
    ],
  },
  {
    title: "Troisième page : la nuit où la première s'est éteinte",
    paragraphs: [
      "Mais depuis une semaine, quelque chose ne va plus. Cela a commencé un soir, sans un bruit : tout au bout de la vallée, la lanterne verte de la vieille meunière s'est éteinte. Puis, le lendemain, celle du pont. Puis trois autres. Puis douze. Chaque nuit, à minuit passé, des lueurs disparaissent dans l'obscurité, comme si une main invisible les soufflait une à une. Les habitants sont inquiets. Les enfants dorment avec leur lanterne serrée contre eux. Les marchands parlent de voleurs. Les gardes parlent de sorcières. Et le froid, lui, descend chaque jour un peu plus bas dans la vallée.",
      "Ce matin, un grand silence règne sur le Hall des Lanternes. Tu t'es réveillé avant le soleil, le ventre noué, et tu as trouvé le Hall plus sombre que d'habitude. Maître Bernardin, assis dans son fauteuil près du poêle, la couverture jusqu'au menton, te sourit de ses yeux fatigués : « Ah, te voilà. Il y a du travail, mon petit. Beaucoup de travail. Je crois que c'est le moment de te confier ta première vraie enquête. » Il y a, dans sa voix, quelque chose que tu n'avais jamais entendu. Une douceur, peut-être. Ou un secret. Tu prends ta lanterne et ton bâton, et tu t'avances dans la lumière grise de l'hiver. L'enquête commence.",
    ],
  },
];

export default function StoryPrologue() {
  return <Prologue title="La Vallée des Mille Lanternes" pages={pages} />;
}
