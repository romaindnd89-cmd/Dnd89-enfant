import React from 'react';
import StoryGallery, { GalleryItem } from '../../components/StoryGallery';

const items: GalleryItem[] = [
  { kind: 'lieu', name: "Le château de Pétaouchnok", emoji: '🏰', description: "Le palais du roi Gaspard, où les trombones jouent des marches funèbres un peu trop gaies et où le roi règne depuis sa baignoire à roulettes." },
  { kind: 'lieu', name: "Le Marché aux Menteurs", emoji: '🛍️', description: "Un marché coloré où tout le monde ment par métier. On y vend des pommes bleues cueillies sur la Lune." },
  { kind: 'lieu', name: "Le château du Baron Cornichon", emoji: '🥒', description: "Une pile de crêpes de pierre posées de travers, avec une galerie de portraits qui parlent et une bibliothèque dont les livres mordent." },
  { kind: 'lieu', name: "Les cachots", emoji: '⛓️', description: "Des cellules froides qui sentent le chou, avec un passage secret et des rats-ninjas dans les tunnels." },
  { kind: 'personnage', name: "Gaston l'oie détective", emoji: '🪿', description: "Une grande oie blanche en chapeau melon, très fière et très gourmande. Elle trahit le héros pour du maïs doré, puis le regrette." },
  { kind: 'personnage', name: "Le Chancelier Gribouille", emoji: '🖋️', description: "Grand, maigre, tout en gris, avec les doigts tachés d'encre violette. Il déteste les blagues et rêve d'un royaume sérieux." },
  { kind: 'personnage', name: "Le Baron Cornichon", emoji: '🎩', description: "Élégant, cape violette, rire communicatif. Soupçonné à tort, il devient l'ami du héros." },
  { kind: 'personnage', name: "Madame Zut, la voyante", emoji: '🔮', description: "Théâtrale et mystérieuse, elle improvise la moitié de ses prédictions, mais l'autre moitié est étonnamment vraie." },
  { kind: 'objet', name: "La Couronne du Rire", emoji: '👑', description: "La couronne magique du royaume : elle brille et protège le pays tant que quelqu'un, quelque part, rigole.", effect: "C'est l'objet de toute l'enquête." },
  { kind: 'objet', name: "Le carnet de détective", emoji: '📔', description: "Le carnet où le héros note ses indices : la miette, la plume, le cheveu gris, la tache d'encre violette.", effect: "Aide à relier les indices pour le procès." },
  { kind: 'objet', name: "Le Carnet Gris", emoji: '🩶', description: "Un carnet pris à une Cravate Grise, avec la liste des personnes à surveiller et l'emplacement de la Couronne.", effect: "+1 preuve au procès du banquet." },
  { kind: 'objet', name: "La Plume de Canard Magique", emoji: '🪶', description: "Un cadeau des canards syndiqués.", effect: "Une fois : lance une Réplique Cinglante sans dépenser de Panache." },
  { kind: 'objet', name: "La médaille du Détective Royal", emoji: '🏅', description: "Offerte par le roi à la fin de l'enquête, avec 100 écus.", effect: "Récompense finale." },
];

export default function Galerie() {
  return (
    <StoryGallery
      title="La Couronne du Rire"
      intro="⚠️ Les descriptions écrites peuvent dévoiler des secrets : lis-les toi-même, et montre seulement l'image à l'enfant. Montre ces images au fil de l'aventure, au moment où il arrive à l'endroit ou rencontre le personnage. Les cartes d'objets s'impriment et se découpent : on les pose sur la table quand l'enfant les trouve."
      gradient="from-yellow-300 to-fuchsia-500"
      items={items}
    />
  );
}
