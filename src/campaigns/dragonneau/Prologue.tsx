import React from 'react';
import Prologue, { ProloguePage } from '../../components/Prologue';

const pages: ProloguePage[] = [
  {
    title: "Première page : Fumerolles",
    paragraphs: [
      "Au pied du Mont Braise, un volcan si vieux qu'il a oublié comment se mettre en colère et qui ronfle doucement depuis mille ans, se niche le village de Fumerolles. Ses toits sont de tuiles rouges, ses ruelles sentent la brioche chaude et la cannelle, et ses habitants ont une habitude très particulière : ils vivent avec un dragon.",
      "Pas un dragon féroce, comme dans les vieux livres. Un dragon-gardien, gentil, poli, un peu fatigué, qui s'appelle Cendrelle. Chaque année, le soir de la Fête des Flammes, elle descend de la montagne, se pose au milieu de la place, et souffle une longue flamme dorée sur la Grande Torche. Alors tout le village s'illumine : les lanternes, les fenêtres, les yeux des enfants. Et on danse jusqu'à ce que la lune soit lasse de regarder.",
    ],
  },
  {
    title: "Deuxième page : un œuf, un secret",
    paragraphs: [
      "Mais cette année, tout est différent. Cendrelle est très vieille. Trop fatiguée pour redescendre. Depuis des semaines, tout là-haut, elle couve son dernier œuf, couleur de miel, tacheté d'orange et de turquoise. Et tout le village sait que si l'œuf éclôt à temps, c'est le tout petit dragon qui allumera la torche, pour la première fois de sa vie.",
      "Il a éclos cette nuit. Mais personne ne l'a vu naître.",
    ],
  },
  {
    title: "Troisième page : la cloche",
    paragraphs: [
      "Vous êtes deux apprentis du village, les meilleurs amis du monde. Vous dormiez à poings fermés quand la cloche du temple s'est mise à sonner, de plus en plus fort, de plus en plus vite : dang-dang-dang-dang ! Vous avez sauté du lit, enfilé vos bottes de travers, et couru dans les rues pavées, pendant que les villageois sortaient en chemise de nuit, leurs bonnets de travers sur la tête.",
      "Au temple, un silence étrange. L'œuf est posé sur son coussin de velours rouge, ouvert, la coquille brisée de l'intérieur en mille petits éclats brillants. Et dedans, il n'y a personne. Sur le sol, une traînée de suie noire, une trace de patte grosse comme une pomme, et une petite écaille rouge, encore tiède. Dans un coin, la vieille Mémé Tisane se tord les mains, les yeux rouges : « Il est parti. Notre petit dragon est parti dans la nuit, tout seul... »",
      "Il vous reste jusqu'au coucher du soleil pour le retrouver. Après cela, pour la première fois depuis cent ans, la Grande Torche restera éteinte.",
    ],
  },
];

export default function StoryPrologue() {
  return <Prologue title="Le dernier œuf de Cendrelle" pages={pages} />;
}
