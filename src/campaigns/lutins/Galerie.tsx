import React from 'react';
import StoryGallery, { GalleryItem } from '../../components/StoryGallery';

const items: GalleryItem[] = [
  { kind: 'lieu', name: "La Grille qui Chatouille", emoji: '🚪', description: "L'entrée du château de Chantefarce : une grille de fer dont les barreaux tirent la langue, avec une serrure en forme de bouche qui rigole." },
  { kind: 'lieu', name: "La Cuisine en Folie", emoji: '🥧', description: "De grandes cuisines pleines de farine, avec un gâteau géant à trois étages gardé par des lutins marmitons armés de tartes." },
  { kind: 'lieu', name: "La Salle des Miroirs", emoji: '🪞', description: "Une salle ronde tapissée de miroirs déformants, où tous les reflets se ressemblent... sauf un qui tire la langue." },
  { kind: 'lieu', name: "La Salle du Trésor", emoji: '👑', description: "La grande salle du trône, avec un coffre à trois serrures : RIRE, RUSE et PARTAGE." },
  { kind: 'personnage', name: "Grelot, le lutin portier", emoji: '🔔', description: "Pas plus haut qu'une botte, avec un énorme bonnet rouge à pompon. Il adore parler et ne sait pas garder un secret.", image: '/art/elf.png' },
  { kind: 'personnage', name: "Dame Louche", emoji: '👩‍🍳', description: "La cheffe cuisinière, imposante, une toque géante et une louche brandie comme une épée. Un compliment sur sa cuisine l'adoucit tout de suite." },
  { kind: 'personnage', name: "Maître Parchemin", emoji: '📚', description: "Le vieux bibliothécaire, sourd comme un pot et obsédé par le silence, alors qu'il est le plus bruyant du château." },
  { kind: 'personnage', name: "Le roi Pirouette Iᵉʳ", emoji: '🤴', description: "Un roi minuscule qui joue au grand sérieux, et craque en éclat de rire après dix secondes. Il adore ceux qui s'entraident." },
  { kind: 'objet', name: "Les pièces en chocolat", emoji: '🍫', description: "Le vrai trésor : des pièces dorées en chocolat, que l'équipe gagne salle après salle et range dans un bol commun.", effect: "Il faut partager le tas à la fin pour ouvrir le coffre." },
  { kind: 'objet', name: "Le trèfle à quatre feuilles", emoji: '🍀', description: "Un porte-bonheur caché dans l'herbe de la colline, très rare.", effect: "Une fois : relance un dé raté (le sien ou celui d'un ami)." },
  { kind: 'objet', name: "Le plumeau géant", emoji: '🪶', description: "L'arme du chevalier Trois-Lutins, offerte en cadeau après sa défaite.", effect: "Une fois : réussite automatique à un jet de CŒUR." },
  { kind: 'objet', name: "Le pot de confiture", emoji: '🍯', description: "Un pot très collant, trouvé sur une étagère haute de la cuisine.", effect: "Une fois en combat : un marmiton ne peut plus attaquer pendant un tour." },
];

export default function Galerie() {
  return (
    <StoryGallery
      title="Le Trésor des Lutins Farceurs"
      intro="⚠️ Les descriptions écrites peuvent dévoiler des secrets : lis-les toi-même, et montre seulement l'image à l'enfant. Montre ces images au fil de l'aventure, au moment où il arrive à l'endroit ou rencontre le personnage. Les cartes d'objets s'impriment et se découpent : on les pose sur la table quand l'enfant les trouve."
      gradient="from-emerald-300 to-teal-500"
      items={items}
    />
  );
}
