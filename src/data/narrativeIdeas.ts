/**
 * Banque de phrases narratives pour aider le Maître du Jeu (MJ) qui manque
 * d'inspiration. Flammèche, le petit dragon, pioche dedans au hasard.
 * Les phrases sont volontairement génériques pour marcher dans toutes les aventures.
 */

export interface IdeaCategory {
  id: string;
  label: string;
  emoji: string;
  color: string; // classes littérales Tailwind (bg + text) pour la puce
  phrases: string[];
}

export const NARRATIVE_IDEAS: IdeaCategory[] = [
  {
    id: 'attaque',
    label: 'Le héros attaque',
    emoji: '⚔️',
    color: 'bg-rose-100 text-rose-700',
    phrases: [
      "Tes griffes fendent l'air dans un éclair doré et frappent de plein fouet !",
      "D'un bond vif comme l'éclair, tu te jettes sur ton ennemi en poussant un cri de guerre !",
      "Tu prends ton élan, le cœur battant, et tu frappes de toutes tes petites forces !",
      "Rapide comme le vent, tu esquives puis tu contre-attaques avec panache !",
      "Un grand coup, droit au but ! Ton adversaire n'a rien vu venir.",
      "Tu serres les dents, tu vises bien… et tu bondis comme un vrai petit héros !",
      "Avec malice, tu feintes à gauche, puis tu attaques à droite. Quelle ruse !",
      "Tu rassembles tout ton courage et tu fonces, intrépide et déterminé !",
    ],
  },
  {
    id: 'coup',
    label: 'Le héros reçoit un coup',
    emoji: '💥',
    color: 'bg-amber-100 text-amber-700',
    phrases: [
      "Le choc te fait reculer de deux pas… mais tu tiens bon, vaillant petit héros !",
      "Aïe ! Ça pique un peu, mais ton courage est bien plus grand que ta douleur.",
      "Tu roules sur le côté, un peu sonné, puis tu te relèves, plus décidé que jamais.",
      "Le coup te surprend ! Tu titubes… et tu reprends vite ton souffle.",
      "Ouille ! Tu sens que ça va laisser une marque, mais un héros ne se plaint jamais.",
      "Tu encaisses bravement. Tes amis te regardent : ils croient en toi !",
      "Un petit « ouf » t'échappe, mais déjà tu serres les poings pour continuer.",
      "Tu chancelles… puis tu respires un grand coup. Tu es encore là, debout !",
    ],
  },
  {
    id: 'reussite',
    label: 'Une belle réussite',
    emoji: '⭐',
    color: 'bg-emerald-100 text-emerald-700',
    phrases: [
      "BRAVO ! Ton geste est parfait, exactement comme tu l'avais imaginé !",
      "Incroyable ! Tout le monde te regarde, bouche bée. Tu as réussi haut la patte !",
      "Un vrai coup de maître ! Même toi, tu es surpris d'avoir aussi bien visé.",
      "Magnifique ! La chance et le courage étaient de ton côté aujourd'hui.",
      "Réussite éclatante ! Une petite lumière de fierté brille dans tes yeux.",
      "Tu y es arrivé ! Tes amis poussent un cri de joie autour de toi.",
    ],
  },
  {
    id: 'echec',
    label: 'Un petit échec (tout doux)',
    emoji: '🍃',
    color: 'bg-sky-100 text-sky-700',
    phrases: [
      "Oups ! Ça n'a pas marché cette fois… mais un vrai héros n'abandonne jamais.",
      "Raté de peu ! Ce n'est pas grave : chaque erreur apprend quelque chose.",
      "Hop, tu glisses un peu ! Tu te relèves en souriant, prêt à réessayer.",
      "Pas tout à fait ! L'aventure continue, et une nouvelle chance t'attend déjà.",
      "Ce coup-ci n'était pas le bon… mais ton courage, lui, n'a pas bougé d'un poil.",
      "Zut alors ! Respire un grand coup : le prochain essai sera le bon.",
    ],
  },
  {
    id: 'lieu',
    label: 'Décrire un nouveau lieu',
    emoji: '🏞️',
    color: 'bg-teal-100 text-teal-700',
    phrases: [
      "Devant toi s'ouvre un endroit comme tu n'en as jamais vu : tout y semble vivant.",
      "L'air sent bon la mousse et l'aventure. Une douce lumière danse sur les murs.",
      "Un grand silence t'entoure, juste troublé par le bruit lointain de l'eau qui coule.",
      "Des ombres étranges s'étirent sur le sol, mais au loin brille une lueur rassurante.",
      "Le vent te caresse les oreilles et t'apporte mille odeurs nouvelles et mystérieuses.",
      "Tout scintille autour de toi, comme si l'endroit gardait un secret bien caché.",
      "Le sol craque doucement sous tes pas. Chaque recoin semble raconter une histoire.",
    ],
  },
  {
    id: 'indice',
    label: 'Donner un indice / énigme',
    emoji: '🧩',
    color: 'bg-indigo-100 text-indigo-700',
    phrases: [
      "Ferme les yeux et écoute bien : la réponse se cache peut-être dans un petit bruit.",
      "Observe autour de toi… quelque chose brille, juste là, qui pourrait t'aider.",
      "Et si tu utilisais ton flair ? Ton petit nez sent souvent ce que les yeux ne voient pas.",
      "Un indice se cache tout près. Regarde par terre, puis en l'air : on oublie souvent le ciel !",
      "Réfléchis à ce que tu as déjà croisé aujourd'hui : un objet pourrait resservir.",
      "Chuchote la question tout haut… parfois, s'entendre parler aide à trouver la solution.",
    ],
  },
  {
    id: 'rencontre',
    label: "L'arrivée d'un personnage",
    emoji: '👋',
    color: 'bg-purple-100 text-purple-700',
    phrases: [
      "Une petite silhouette s'approche timidement, les yeux remplis d'espoir.",
      "Soudain, une voix amicale t'appelle : « Hé, toi ! J'ai justement besoin d'aide ! »",
      "Une créature toute douce sort de sa cachette et te fait un petit signe de la patte.",
      "Quelqu'un arrive en courant, tout essoufflé : « Vite, vite, il faut que tu voies ça ! »",
      "Un vieux personnage sage s'avance lentement, un sourire malicieux sur le visage.",
      "Un drôle de compagnon surgit : il a l'air un peu perdu, mais très gentil.",
    ],
  },
  {
    id: 'encouragement',
    label: "Relancer / encourager l'enfant",
    emoji: '💛',
    color: 'bg-yellow-100 text-yellow-700',
    phrases: [
      "Et toi, mon brave petit héros, que décides-tu de faire maintenant ?",
      "Prends ton temps… Qu'est-ce que ton cœur te dit de tenter ?",
      "Tu es plus courageux que tu ne le crois. Alors, quelle sera ta prochaine idée ?",
      "Respire un grand coup. Tout est possible dans cette histoire : à toi de choisir !",
      "Tes amis comptent sur toi. Quelle merveilleuse idée vas-tu avoir ?",
      "Il n'y a pas de mauvaise réponse ici : invente, imagine, amuse-toi !",
    ],
  },
  {
    id: 'recompense',
    label: 'Une petite victoire',
    emoji: '🎉',
    color: 'bg-pink-100 text-pink-700',
    phrases: [
      "Une chaude lumière dorée t'enveloppe : tu sens que tu viens d'accomplir un exploit !",
      "Tout le monde t'acclame ! Tu as le cœur gonflé de fierté, et c'est bien mérité.",
      "Un trésor de courage vient de grandir dans ta poitrine. Quelle belle victoire !",
      "Les oiseaux chantent plus fort, comme pour te féliciter. Bravo, petit champion !",
      "Tu ranges précieusement ta récompense : elle te rappellera toujours ta bravoure.",
      "Un sourire illumine ton visage : tu as réussi, et personne ne pourra te l'enlever.",
    ],
  },
];

export const DRAGON_TIPS: string[] = [
  "Psst… je suis là si tu manques d'idées ! Clique sur moi. 🐉",
  "Un conseil de dragon : laisse l'enfant inventer, même des choses rigolotes !",
  "Besoin d'une phrase pour décrire un combat ? Je t'en souffle une !",
  "N'oublie pas : à 0 point de vie, on se repose, on ne perd jamais !",
  "Fais des voix rigolotes pour les personnages : les enfants adorent ça !",
];
