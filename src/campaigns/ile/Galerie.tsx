import React from 'react';
import StoryGallery, { GalleryItem } from '../../components/StoryGallery';

const items: GalleryItem[] = [
  { kind: 'lieu', name: "La plage qui ronfle", emoji: '🏖️', description: "Du sable doré chaud comme du pain, des cocotiers penchés et, au loin, une montagne verte si ronde qu'on dirait un dos." },
  { kind: 'lieu', name: "La jungle qui ronfle", emoji: '🌴', description: "Des fleurs géantes, des lianes qui se balancent toutes ensemble, et un sol qui vibre tous les dix pas." },
  { kind: 'lieu', name: "La grotte au cœur de l'île", emoji: '🕳️', description: "Une grotte tiède qui sent la vanille. Au fond, sur un nid de mousse, un trésor qui bat comme un cœur." },
  { kind: 'personnage', name: "Le Mousse Pirate", emoji: '🏴‍☠️', description: "Le héros : malin, courageux, avec un sabre en bois renforcé, un grappin et une longue-vue." },
  { kind: 'personnage', name: "Capitaine Miette", emoji: '🦜', description: "Un perroquet vert qui s'est nommé capitaine parce qu'il parle plus fort que tout le monde. Il hurle des conseils et ne bouge jamais." },
  { kind: 'personnage', name: "Mademoiselle Barbe-Rose", emoji: '🎀', description: "Une capitaine rivale très susceptible, avec un grand chapeau rose et une fausse barbe en papier qui se décolle quand elle s'énerve." },
  { kind: 'personnage', name: "La Grande Tortue Écaille", emoji: '🐢', description: "L'île elle-même : une tortue géante de mille ans, douce et lente, qui cherche son œuf depuis cent ans." },
  { kind: 'objet', name: "La carte au trésor", emoji: '🗺️', description: "Deux moitiés déchirées, qu'on assemble : une île, un chemin pointillé, un grand X et une phrase : « Le trésor dort. Ne le secouez pas. »", effect: "Donne +2 au premier jet de l'acte 2." },
  { kind: 'objet', name: "L'œuf géant", emoji: '🥚', description: "Un œuf couleur de perle, grand comme un tonneau, qui bat doucement. Le vrai trésor de l'île.", effect: "À rendre à la Grande Tortue." },
  { kind: 'objet', name: "La Perle de Marée", emoji: '🔮', description: "Une perle grosse comme une orange qui brille de mille couleurs, offerte par la tortue.", effect: "Une fois : annule tous les dégâts d'une attaque." },
  { kind: 'objet', name: "Le grappin", emoji: '🪝', description: "Un grappin de pirate, solide, qui franchit un tronc ou un ravin.", effect: "Grappin Express : une fois par acte, franchit un obstacle sans jet." },
];

export default function Galerie() {
  return (
    <StoryGallery
      title="L'Île qui Bougeait"
      intro="⚠️ Les descriptions écrites peuvent dévoiler des secrets : lis-les toi-même, et montre seulement l'image à l'enfant. Montre ces images au fil de l'aventure, au moment où il arrive à l'endroit ou rencontre le personnage. Les cartes d'objets s'impriment et se découpent : on les pose sur la table quand l'enfant les trouve."
      gradient="from-cyan-300 to-emerald-500"
      items={items}
    />
  );
}
