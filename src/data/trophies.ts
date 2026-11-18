export interface TrophyDef {
  id: string;        // identifiant stable (= progressId de l'aventure)
  title: string;     // nom du trophée
  adventure: string; // nom de l'aventure
  emoji: string;
  gradient: string;  // classes Tailwind littérales
  message: string;   // phrase de félicitations pour l'enfant
}

export const TROPHIES: Record<string, TrophyDef> = {
  renard: {
    id: 'renard',
    title: 'Sauveur de Grisefeuille',
    adventure: 'Le Renardeau et la Forêt qui Oublie',
    emoji: '🦊',
    gradient: 'from-amber-400 to-orange-600',
    message: "Tu as rapporté les 3 Glands d'Or et rendu ses couleurs à la forêt. Quel héros !",
  },
  lutins: {
    id: 'lutins',
    title: 'Rois de la Farce',
    adventure: 'Le Trésor des Lutins Farceurs',
    emoji: '🍫',
    gradient: 'from-emerald-400 to-teal-600',
    message: 'Vous avez déjoué tous les pièges des lutins, et surtout, vous avez partagé le trésor. Bravo à toute l\'équipe !',
  },
  moustaches: {
    id: 'moustaches',
    title: 'Héros de Miaou-Ville',
    adventure: 'Le Royaume des Moustaches',
    emoji: '🐱',
    gradient: 'from-rose-400 to-pink-600',
    message: 'Tu as retrouvé la Croquette Sacrée et sauvé tout le royaume des chats !',
  },
  bouboule: {
    id: 'bouboule',
    title: "Gardien de l'Océan",
    adventure: 'Bouboule et le Secret de Pangéa',
    emoji: '🐋',
    gradient: 'from-sky-400 to-blue-600',
    message: 'Tu as réuni les 4 Cristaux et vaincu la Mue Noire. Les océans te disent merci !',
  },
  etoile: {
    id: 'etoile',
    title: 'Ami des Étoiles',
    adventure: "L'Étoile Filante Perdue",
    emoji: '⭐',
    gradient: 'from-indigo-400 to-violet-600',
    message: 'Tu as raccompagné la petite étoile tout là-haut dans le ciel. Bravo !',
  },
  dragonneau: {
    id: 'dragonneau',
    title: 'Amis du Dragonneau',
    adventure: 'Le Dragonneau Perdu',
    emoji: '🥚',
    gradient: 'from-orange-400 to-rose-600',
    message: "Vous avez retrouvé Braisillon et allumé la Grande Torche ensemble. Quelle équipe formidable !",
  },
  couronne: {
    id: 'couronne',
    title: 'Détective Royal',
    adventure: 'La Couronne du Rire',
    emoji: '👑',
    gradient: 'from-yellow-400 to-fuchsia-600',
    message: "Tu as démasqué le vrai coupable, sauvé la Couronne et fait rire tout un royaume. Quel flair de détective !",
  },
  ile: {
    id: 'ile',
    title: "Capitaine de l'Île",
    adventure: "L'Île qui Bougeait",
    emoji: '🐢',
    gradient: 'from-cyan-400 to-emerald-600',
    message: "Tu as rendu son œuf à la Grande Tortue et sauvé l'île qui bougeait. Un vrai capitaine !",
  },
  aube: {
    id: 'aube',
    title: "Chevalier de l'Aube",
    adventure: "L'Héritier de l'Aube",
    emoji: '🐉',
    gradient: 'from-amber-300 to-yellow-600',
    message: "Tu as récupéré l'Éclat de Soleil et sauvé la Citadelle de Cristal !",
  },
};

export const ALL_TROPHY_IDS = Object.keys(TROPHIES);
