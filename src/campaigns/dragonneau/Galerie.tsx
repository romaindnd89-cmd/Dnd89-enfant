import React from 'react';
import StoryGallery, { GalleryItem } from '../../components/StoryGallery';

export const items: GalleryItem[] = [
  { kind: 'lieu', name: "Le village de Fumerolles", emoji: '🏘️', description: "Un village aux toits de tuiles rouges, qui sent la brioche chaude. Au centre, la Grande Torche attend le souffle du petit dragon." },
  { kind: 'lieu', name: "La Forêt des Champignons", emoji: '🍄', description: "Une forêt à l'envers, aux champignons géants roses et orange sur lesquels on rebondit, avec des gelées farceuses et un ruisseau de sirop bleu." },
  { kind: 'lieu', name: "Les Grottes de Cristal", emoji: '💎', description: "Des cristaux bleus, roses et verts sortent des murs comme des fleurs de glace. Une salle à leviers, des chauves-souris et un troll enrhumé." },
  { kind: 'lieu', name: "Le Nid du Mont Braise", emoji: '🌋', description: "Au sommet du volcan, un grand nid de branches et de braises tièdes, gardé par un golem de pierre." },
  { kind: 'personnage', name: "Braisillon, le bébé dragon", emoji: '🐲', description: "Un petit dragon orange qui a peur de son propre feu. Il veut surtout un ami.", image: '/art/dragon-front.png' },
  { kind: 'personnage', name: "Le Chevalier", emoji: '🛡️', description: "Le premier héros : costaud, courageux, son bouclier protège son ami.", image: '/art/knight.png' },
  { kind: 'personnage', name: "Grognon le troll", emoji: '🧌', description: "Énorme, moussu et enrhumé, il garde le pont. Il grogne beaucoup, mais un biscuit et un câlin l'adoucissent.", image: '/art/galerie/dragonneau-grognon-le-troll.webp' },
  { kind: 'personnage', name: "Mémé Tisane", emoji: '🍵', description: "La vieille gardienne du temple, qui connaît l'histoire de la Fête des Flammes et de la grande Cendrelle.", image: '/art/galerie/dragonneau-meme-tisane.webp' },
  { kind: 'objet', name: "L'écaille rouge", emoji: '🔴', description: "Une petite écaille encore chaude, trouvée dans le temple. Elle rougit quand on s'approche du bébé dragon.", effect: "Donne +2 pour rassurer Braisillon." },
  { kind: 'objet', name: "Le doudou lézard", emoji: '🦎', description: "Le doudou de la petite Lila, qu'elle prête avec son cœur.", effect: "Rassure Braisillon : +2 au jet de CŒUR." },
  { kind: 'objet', name: "Le cristal chantant", emoji: '🎶', description: "Un cristal qui chante une note douce quand on souffle dedans.", effect: "Rassure un animal effrayé : réussite automatique." },
  { kind: 'objet', name: "La bille de gelée", emoji: '🟢', description: "Une bille qui rebondit très haut, offerte par une gelée vaincue.", effect: "Sert à lancer un objet très loin, ou à coller un ennemi." },
];

export default function Galerie() {
  return (
    <StoryGallery
      title="Le Dragonneau Perdu"
      intro="⚠️ Les descriptions écrites peuvent dévoiler des secrets : lis-les toi-même, et montre seulement l'image à l'enfant. Montre ces images au fil de l'aventure, au moment où il arrive à l'endroit ou rencontre le personnage. Les cartes d'objets s'impriment et se découpent : on les pose sur la table quand l'enfant les trouve."
      gradient="from-orange-300 to-rose-500"
      items={items}
    />
  );
}
