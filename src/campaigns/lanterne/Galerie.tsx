import React from 'react';
import StoryGallery, { GalleryItem } from '../../components/StoryGallery';

const items: GalleryItem[] = [
  { kind: 'lieu', name: 'La Vallée des Mille Lanternes', emoji: '🏘️', description: "Un village blotti dans la neige, où chaque maison, chaque pont et chaque chemin est éclairé par une lanterne vivante. La nuit, la Vallée ressemble à un ciel retourné." },
  { kind: 'lieu', name: 'La Tour des Archives', emoji: '📚', description: "Une grande tour penchée sur la colline, pleine de livres, de rouleaux et de cartes. Elle sent le papier, la poussière et la bougie." },
  { kind: 'lieu', name: 'Le Marais de Brume', emoji: '🌫️', description: "Une brume épaisse, des planches pourries sur des mares noires, et des lumières bleues qui dansent. Les gobelins y vivent, cachés." },
  { kind: 'lieu', name: 'Le Puits Oublié', emoji: '🕳️', description: "Un grand escalier en colimaçon gelé qui s'enfonce sous le marais, couvert des noms de tous les Gardiens. Tout au fond brûle la Flamme-Source." },
  { kind: 'personnage', name: "L'Apprenti Gardien", emoji: '🏮', description: "Le héros : un apprenti courageux et curieux, avec une lanterne d'apprenti et un bâton." },
  { kind: 'personnage', name: 'Maître Bernardin', emoji: '🦡', description: "Un vieux blaireau tendre, avec des lunettes de travers, un plaid sur les genoux et une toux qu'il cache. Il appelle le héros « mon petit »." },
  { kind: 'personnage', name: 'Pip (Pimprenelle)', emoji: '🐭', description: "Une jeune souris, allumeuse de lanternes depuis un mois. Très gentille, très nerveuse : elle ment mal et aide les gobelins en secret." },
  { kind: 'personnage', name: 'Madame Ronce', emoji: '🦔', description: "Une hérissonne herboriste grincheuse au grand cœur. Elle râle sur tout, mais soigne tout le monde." },
  { kind: 'personnage', name: 'Brigadier Tonnerre', emoji: '🐗', description: "Un énorme sanglier en cuirasse de cuivre, très sûr de lui, qui accuse sans réfléchir. Il apprend à demander pardon." },
  { kind: 'personnage', name: 'Hulotte', emoji: '🦉', description: "Une petite chouette archiviste, trois paires de lunettes sur le bec, qui chuchote très fort et ne se trompe jamais sur le fond." },
  { kind: 'personnage', name: 'Gribouille et Mousse', emoji: '🧌', description: "Des gobelins du Marais : Gribouille garde le camp, Mousse, la vieille gobeline, offre sa soupe à ceux qui n'ont rien demandé. Ils ont peur de tout, mais ils ont un grand cœur." },
  { kind: 'personnage', name: 'Le Dévoreur de Lumière', emoji: '🌑', description: "Une grande ombre au fond du Puits, née d'une flamme qu'on a gardée trop seule. Il n'est pas méchant : il a faim, et il a froid." },
  { kind: 'objet', name: 'La lanterne d\'apprenti', emoji: '🏮', description: "Petite lanterne en cuivre, au verre un peu rayé, avec un bâton qui sert aussi à attaquer.", effect: "Bâton-Lanterne : D20 + Courage, 1D6 de dégâts." },
  { kind: 'objet', name: 'La moufle rouge', emoji: '🧤', description: "Une toute petite moufle en laine rouge, tricotée la nuit pour un bébé gobelin.", effect: "Preuve de la bonté de Pip." },
  { kind: 'objet', name: 'La boîte de tisane', emoji: '🫖', description: "Une boîte en fer-blanc, étiquette de Madame Ronce : « Pour B. Bernardin, deux fois par jour, contre la toux. »", effect: "Indice 11." },
  { kind: 'objet', name: 'La Lanterne partagée', emoji: '✨', description: "Une lanterne offerte par tout le village : chaque famille y a mis un petit bout de verre coloré. Elle brille même quand l'huile est vide.", effect: "Une fois par chapitre : +3 sur un jet, sans dépenser de Lueur." },
  { kind: 'objet', name: 'La luciole', emoji: '🪲', description: "Une toute petite lueur dorée qui vient se poser sur l'épaule du héros, ancienne boule d'ombre réchauffée.", effect: "Une fois : relance un jet de dé raté." },
];

export default function Galerie() {
  return (
    <StoryGallery
      title="La Dernière Lanterne"
      intro="⚠️ Les descriptions écrites peuvent dévoiler des secrets (notamment Maître Bernardin et le Dévoreur) : lis-les toi-même, et montre seulement l'image à l'enfant. Montre ces images au fil de l'aventure. Les cartes d'objets s'impriment et se découpent : on les pose sur la table quand le héros les trouve."
      gradient="from-amber-300 to-indigo-600"
      items={items}
    />
  );
}
