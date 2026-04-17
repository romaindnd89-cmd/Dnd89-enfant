import React from 'react';
import { InfoBox } from '../../components/StoryBlocks';

export default function Illustrations() {
  return (
    <section id="illustrations" className="mt-16">
      <h2 className="font-display text-4xl font-bold text-slate-800 mb-6 border-b-4 border-slate-200 pb-2">
        🖼️ Galerie d'Illustrations : Donjons & Chatons
      </h2>
      <p className="text-slate-600 mb-8">
        Voici la campagne visuelle, dans l'ordre de votre aventure. Ces images sont conçues pour être montrées à votre fille au fur et à mesure que vous progressez dans l'histoire, pour stimuler son imagination.
      </p>

      <div className="space-y-12">
        {/* Illustration 1 */}
        <div className="bg-white rounded-2xl shadow-md overflow-hidden border border-slate-200">
          <div className="p-6 bg-slate-50 border-b border-slate-200">
            <h3 className="font-bold text-xl text-slate-800 mb-2">Illustration 1 : Le Déclencheur - Le Vol de la Croquette</h3>
            <p className="text-slate-600">Cette image pose l'ambiance immédiate. La Place du Marché de Miaou-Ville est plongée dans l'obscurité. Sur le piédestal vide où reposait la Croquette Sacrée Géante, il n'y a plus qu'un minuscule shuriken en Babybel et quelques empreintes de petits pas boueux... L'aventure commence ici !</p>
          </div>
          <div className="p-4">
            <img src="https://i.postimg.cc/m261V3yW/1775684547380.png" alt="Le Vol de la Croquette" className="w-full h-auto rounded-xl" referrerPolicy="no-referrer" />
          </div>
        </div>

        {/* Illustration 2 */}
        <div className="bg-white rounded-2xl shadow-md overflow-hidden border border-slate-200">
          <div className="p-6 bg-slate-50 border-b border-slate-200">
            <h3 className="font-bold text-xl text-slate-800 mb-2">Illustration 2 : L'Héroïne - L'Aventurière Chatonne</h3>
            <p className="text-slate-600">Voici l'image pour définir son personnage. La Chatonne Héroïne est une petite chatonne orange très fluffy. Elle se tient droite sur un tas de livres dans sa chambre ensoleillée. Elle porte sa petite armure personnalisée et son épée en bois (l'arme de départ). Elle regarde au loin avec détermination, prête pour la mission.</p>
          </div>
          <div className="p-4">
            <img src="https://i.postimg.cc/3xBKk9mv/1775684547380.png" alt="L'Aventurière Chatonne" className="w-full h-auto rounded-xl" referrerPolicy="no-referrer" />
          </div>
        </div>

        {/* Illustration 3 */}
        <div className="bg-white rounded-2xl shadow-md overflow-hidden border border-slate-200">
          <div className="p-6 bg-slate-50 border-b border-slate-200">
            <h3 className="font-bold text-xl text-slate-800 mb-2">Illustration 3 : Le PNJ Informateur - Pipo le Pigeon</h3>
            <p className="text-slate-600">Voici l'image pour le Chapitre 1. Le Pigeon Pipo, avec son petit beret poussiéreux, perche nerveusement sur une vieille lanterne sur la Place du Marché. La Chatonne Héroïne (avec son épée en bois de l'illustration 1 visible) le regarde avec questions. C'est l'image pour vous aider dans vos narrations très détaillées.</p>
          </div>
          <div className="p-4">
            <img src="https://i.postimg.cc/m261V3yW/1775684547380.png" alt="Pipo le Pigeon" className="w-full h-auto rounded-xl" referrerPolicy="no-referrer" />
          </div>
        </div>

        {/* Illustration 4 */}
        <div className="bg-white rounded-2xl shadow-md overflow-hidden border border-slate-200">
          <div className="p-6 bg-slate-50 border-b border-slate-200">
            <h3 className="font-bold text-xl text-slate-800 mb-2">Illustration 4 : L'Obstacle Principal - Brutus le Bouledogue</h3>
            <p className="text-slate-600">Une scène pour le Chapitre 1, mettant en scène la tension rigolote. Le massive Bouledogue Brutus, avec son gros collier à pointes, dort profondément, bloquant l'accès à la "Grille du Vieux Chien." La Chatonne Héroïne (Image 1 armor visible) stands small and questioning. Pipo, from Image 2, watches nervously. C'est l'image pour le Chapitre 1's main challenge.</p>
          </div>
          <div className="p-4">
            <img src="https://i.postimg.cc/m261V3yW/1775684547380.png" alt="Brutus le Bouledogue" className="w-full h-auto rounded-xl" referrerPolicy="no-referrer" />
          </div>
        </div>

        {/* Illustration 5 */}
        <div className="bg-white rounded-2xl shadow-md overflow-hidden border border-slate-200">
          <div className="p-6 bg-slate-50 border-b border-slate-200">
            <h3 className="font-bold text-xl text-slate-800 mb-2">Illustration 5 : L'Environnement du Donjon - Les Abysses Scintillantes</h3>
            <p className="text-slate-600">C'est la transition pour le Chapitre 2 : Les Égouts Parfumés. Cette image montre un environnement unique, mystérieux mais non "dégoûtant." C'est une vaste caverne souterraine où de grands tuyaux violet et bleu courent le long de murs couverts de mousse de lavande. C'est l'image pour vous aider à décrire ce donjon.</p>
          </div>
          <div className="p-4">
            <img src="https://i.postimg.cc/m261V3yW/1775684547380.png" alt="Les Abysses Scintillantes" className="w-full h-auto rounded-xl" referrerPolicy="no-referrer" />
          </div>
        </div>

        {/* Illustration 6 */}
        <div className="bg-white rounded-2xl shadow-md overflow-hidden border border-slate-200">
          <div className="p-6 bg-slate-50 border-b border-slate-200">
            <h3 className="font-bold text-xl text-slate-800 mb-2">Illustration 6 : Le PNJ Marchand - Barnabé le Crapaud</h3>
            <p className="text-slate-600">Voici l'image pour le Chapitre 2. Barnabé, le Crapaud Géant avec son petit gilet vert et ses lunettes, stirre son pot de soupe avec un wooden spoon sur une pierre. C'est l'image pour le Chapitre 2's key NPC.</p>
          </div>
          <div className="p-4">
            <img src="https://i.postimg.cc/m261V3yW/1775684547380.png" alt="Barnabé le Crapaud" className="w-full h-auto rounded-xl" referrerPolicy="no-referrer" />
          </div>
        </div>

        {/* Illustration 7 */}
        <div className="bg-white rounded-2xl shadow-md overflow-hidden border border-slate-200">
          <div className="p-6 bg-slate-50 border-b border-slate-200">
            <h3 className="font-bold text-xl text-slate-800 mb-2">Illustration 7 : La Horde - Les Souris-Ninjas (Combat Scène)</h3>
            <p className="text-slate-600">C'est le Chapitre 3 : La Grande Bataille. Comme vous le souhaitez, voici une image pour illustrer le combat contre BEAUCOUP de monstres. Au moins 30 Souris-Ninjas (Horde visible) wear tiny black eye masks. The Chatonne Héroïne (Image 1 armor visible) is mid-action, surrounded. C'est l'image pour le Chapitre 3's combat scene.</p>
          </div>
          <div className="p-4">
            <img src="https://i.postimg.cc/m261V3yW/1775684547380.png" alt="Les Souris-Ninjas" className="w-full h-auto rounded-xl" referrerPolicy="no-referrer" />
          </div>
        </div>

        {/* Illustration 8 */}
        <div className="bg-white rounded-2xl shadow-md overflow-hidden border border-slate-200">
          <div className="p-6 bg-slate-50 border-b border-slate-200">
            <h3 className="font-bold text-xl text-slate-800 mb-2">Illustration 8 : Le Revirement - Le Hamster Géant (Boss Final)</h3>
            <p className="text-slate-600">Et enfin, le grand final de Chapitre 4 : Le Boss et le Secret de la Croquette. C'est l'image pour le Chapitre 4's Surprising Encounter. Le massive Hamster Géant, massive mais tearful and sad, not menacing, sitte on the Croquette Sacrée Géante, using it as a large table. Il wear rusted "boîtes de conserve" (tin cans) armor and holds his giant, fluffy cotton swab. C'est l'image pour le Chapitre 4's Surprise.</p>
          </div>
          <div className="p-4">
            <img src="https://i.postimg.cc/m261V3yW/1775684547380.png" alt="Le Hamster Géant" className="w-full h-auto rounded-xl" referrerPolicy="no-referrer" />
          </div>
        </div>
      </div>
    </section>
  );
}
