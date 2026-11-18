import React from 'react';
import Prologue, { ProloguePage } from '../../components/Prologue';

const pages: ProloguePage[] = [
  {
    title: "Première page : l'Albatros Rigolo",
    paragraphs: [
      "Il y a des mers sérieuses, avec des vagues bien rangées et des navires qui ne rient jamais. Et puis il y a la mer où navigue l'Albatros Rigolo, le navire le plus drôle des sept océans. Sa voile est rapiécée avec des chaussettes. Son drapeau est un canard en caleçon. Et sur sa proue, une sirène en bois tire la langue, sculptée par un charpentier qui avait très envie de rire ce jour-là.",
      "Toi, tu es le mousse. Tu es le plus petit de l'équipage, mais tu as un talent rare : tu sais lire les cartes à l'envers, ce qui, dans cette mer-là, est très utile. Ton capitaine, c'est Capitaine Miette, un perroquet vert à voix de trompette, qui s'est nommé chef un matin parce qu'il parlait plus fort que tout le monde. Il ne barre pas, il ne manœuvre pas, il crie des ordres que personne ne comprend. Mais tout le monde l'aime bien.",
    ],
  },
  {
    title: "Deuxième page : la tempête",
    paragraphs: [
      "Ce matin-là, le ciel a viré au vert pomme. Les nuages se sont mis à ricaner. Un éclair a éternué. Et la tempête la plus ridicule de l'histoire a éclaté : des vagues qui font « splash », un vent qui postillonne, une pluie de bulles de savon. Le navire a tourné trois fois sur lui-même, comme une toupie, et toi, tu as été catapulté dans les airs, puis tu as atterri la tête la première dans un tonneau, Miette accroché à ton épaule en hurlant : « ON COULE ! JE SUIS LE CAPITAINE ! ON COULE ! »",
      "Puis, aussi vite qu'elle était venue, la tempête s'est calmée. Le soleil est revenu. Et ton tonneau, tout seul, a commencé à filer sur les vagues, droit vers une île que personne n'avait jamais vue sur aucune carte : une île verte et ronde, bordée de sable doré, où, très loin, quelque chose ronflait doucement.",
    ],
  },
];

export default function StoryPrologue() {
  return <Prologue title="Le mousse et la tempête ridicule" pages={pages} />;
}
