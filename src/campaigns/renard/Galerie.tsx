import React from 'react';
import StoryGallery, { GalleryItem } from '../../components/StoryGallery';

export const items: GalleryItem[] = [
  { kind: 'lieu', name: "Le terrier de la famille Renard", emoji: '🏡', description: "Un terrier chaleureux sous les racines d'un vieux chêne, avec une couverture tricotée dans un coin. Le matin de l'histoire, tout y est devenu gris.", image: '/art/galerie/renard-le-terrier-de-la-famille-renard.webp' },
  { kind: 'lieu', name: "Le village des écureuils", emoji: '🌳', description: "De petites maisons de bois suspendues dans les branches d'un grand hêtre, reliées par des ponts de corde. Le village entier a oublié où il a caché ses noisettes.", image: '/art/galerie/renard-le-village-des-ecureuils.webp' },
  { kind: 'lieu', name: "La Grotte aux Échos", emoji: '🎵', description: "Une grotte aux stalactites en tuyaux d'orgue, qui répète tout ce qu'on lui dit. Trois cristaux de couleur gardent la chanson perdue de la forêt.", image: '/art/galerie/renard-la-grotte-aux-echos.webp' },
  { kind: 'personnage', name: "Le Renardeau", emoji: '🦊', description: "Le héros : le seul à avoir gardé ses souvenirs, grâce à la feuille dorée de sa grand-mère. Il est agile, malin, et il a un flair extraordinaire.", image: '/art/fox.png' },
  { kind: 'personnage', name: "Lumi la luciole", emoji: '✨', description: "Une minuscule luciole dorée, pressée et bavarde, qui accompagne le héros. Sa lumière fait peur aux créatures de la brume.", image: '/art/firefly.png' },
  { kind: 'personnage', name: "Grisaille la taupe-sorcière", emoji: '🕶️', description: "Une vieille taupe ronde aux grosses lunettes, qui a lancé la Brume d'Oubli parce que personne ne se souvenait d'elle. Elle est surtout très seule.", image: '/art/galerie/renard-grisaille-la-taupe-sorciere.webp' },
  { kind: 'personnage', name: "Mémé Rouquine", emoji: '🧣', description: "La grand-mère du héros, avec son écharpe rouge. Elle fredonne un air sans paroles qui deviendra la Chanson de Grisefeuille.", image: '/art/galerie/renard-meme-rouquine.webp' },
  { kind: 'objet', name: "La Feuille d'Or", emoji: '🍂', description: "Un cadeau de Mémé Rouquine : une feuille dorée, chaude comme un petit soleil. Elle brille plus fort quand un souvenir est tout près.", effect: "Sert de boussole, et fait fondre la toile de Filandre.", image: '/art/galerie/renard-la-feuille-d-or.webp' },
  { kind: 'objet', name: "Les trois Glands d'Or", emoji: '🌰', description: "Le Gland du Rire, le Gland de la Chanson et le Gland de l'Amitié : les trois souvenirs de la forêt, à replanter au pied du Grand Chêne.", effect: "Il faut les trois pour réveiller le Grand Chêne.", image: '/art/galerie/renard-les-trois-glands-d-or.webp' },
  { kind: 'objet', name: "L'écharpe de Mémé", emoji: '🧶', description: "Une écharpe rouge tricotée à la main, qui sent la lavande et le pain grillé.", effect: "Une fois dans l'aventure : +2 à un jet de COURAGE.", image: '/art/galerie/renard-l-echarpe-de-meme.webp' },
  { kind: 'objet', name: "Le sifflet en gland", emoji: '📯', description: "Un petit sifflet sculpté, offert par Noisette la cheffe des écureuils.", effect: "Au chapitre 8, il appelle les écureuils à la rescousse.", image: '/art/galerie/renard-le-sifflet-en-gland.webp' },
];

export default function Galerie() {
  return (
    <StoryGallery
      title="Le Renardeau et la Forêt qui Oublie"
      intro="⚠️ Les descriptions écrites peuvent dévoiler des secrets : lis-les toi-même, et montre seulement l'image à l'enfant. Montre ces images au fil de l'aventure, au moment où il arrive à l'endroit ou rencontre le personnage. Les cartes d'objets s'impriment et se découpent : on les pose sur la table quand l'enfant les trouve."
      gradient="from-orange-300 to-amber-500"
      items={items}
    />
  );
}
