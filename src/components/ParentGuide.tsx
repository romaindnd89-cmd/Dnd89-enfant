import React from 'react';
import { ArrowLeft, BookOpen, Dice5, Heart, Shield, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';

export default function ParentGuide({ onBack }: { onBack: () => void }) {
  return (
    <div className="max-w-4xl mx-auto pb-24 relative">
      <div className="sticky top-0 z-40 bg-slate-50/90 backdrop-blur-md border-b border-slate-200 py-4 px-4 flex items-center mb-8">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-slate-500 hover:text-slate-800 font-bold transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          <span className="hidden sm:inline">Retour</span>
        </button>
      </div>

      <div className="px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-100 text-blue-600 rounded-full mb-6 shadow-sm border border-blue-200">
            <BookOpen className="w-10 h-10" />
          </div>
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-slate-800 mb-4">
            Guide du Parent Débutant
          </h1>
          <p className="text-xl text-slate-600 font-medium max-w-2xl mx-auto">
            Comment animer une aventure "Petits Dragons" pour vos enfants, même si vous n'avez jamais joué à un jeu de rôle !
          </p>
        </div>

        <div className="space-y-8">
          {/* Section 1: Le Concept */}
          <section className="bg-white p-8 rounded-3xl shadow-sm border border-slate-200">
            <h2 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-3">
              <Sparkles className="w-6 h-6 text-amber-500" />
              1. Le Concept : L'histoire dont ils sont les héros
            </h2>
            <div className="text-slate-700 leading-relaxed font-medium space-y-4">
              <p>
                Ici, vous ne jouez pas <em>contre</em> votre enfant, vous êtes le conteur : le <strong>Maître du Jeu (MJ)</strong>. 
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Vous lisez les textes descriptifs (les blocs narratifs).</li>
                <li>Vous jouez les gentils monstres et les personnages qu'il rencontre (n'hésitez pas à faire des voix rigolotes !).</li>
                <li>L'enfant, lui, joue le héros. Il vous écoute, puis <strong>décide</strong> de ce qu'il veut faire.</li>
              </ul>
            </div>
          </section>

          {/* Section 2: Les Dés */}
          <section className="bg-white p-8 rounded-3xl shadow-sm border border-slate-200">
            <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-3">
              <Dice5 className="w-6 h-6 text-indigo-500" />
              2. La Magie des Dés
            </h2>
            
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100 relative overflow-hidden">
                <div className="absolute -right-4 -top-4 text-blue-200 opacity-50 rotate-12">
                  <Dice5 className="w-32 h-32" />
                </div>
                <div className="relative z-10">
                  <h3 className="font-bold text-blue-800 text-xl mb-3">🎲 Le D20 (Dé à 20 faces) = L'Action</h3>
                  <p className="text-blue-900 font-medium mb-4">
                    C'est l'outil numéro 1 ! C'est l'enfant qui le lance presque tout le temps.
                    <strong>Quand l'utiliser ?</strong> Chaque fois que le héros fait quelque chose de difficile ou d'incertain (attaquer, sauter par-dessus un trou, convaincre quelqu'un...).
                  </p>
                  <div className="bg-white p-5 rounded-xl shadow-sm border border-blue-200">
                    <p className="font-bold text-slate-800 mb-2">Comment savoir si l'action réussit ?</p>
                    <ol className="list-decimal pl-5 text-slate-700 space-y-2 font-medium">
                      <li>Le joueur lance le <strong>D20</strong>.</li>
                      <li>Il y ajoute le bonus écrit sur sa fiche de personnage (ex: Attaque <em>+4</em>).</li>
                      <li>Si le total est égal ou supérieur à la "Difficulté" indiquée (ou à la CA du monstre), <strong>l'action est réussie !</strong></li>
                    </ol>
                  </div>
                </div>
              </div>

              <div className="bg-rose-50 p-6 rounded-2xl border border-rose-100">
                <h3 className="font-bold text-rose-800 text-xl mb-3">⚔️ Les Dés de Dégâts (D4, D6, D8...)</h3>
                <p className="text-rose-900 font-medium mb-4">
                  On ne lance ces dés que <strong>SI</strong> le D20 a réussi une attaque. Ils servent à savoir à quel point le coup faisait mal. Sur sa fiche de personnage, chaque attaque du héros précise quel dé de dégâts utiliser.
                </p>
                <div className="grid sm:grid-cols-3 gap-4">
                  <div className="bg-white p-4 rounded-xl border border-rose-200 text-center">
                    <span className="font-bold text-rose-600 block text-lg">D4</span>
                    <span className="text-sm text-slate-600">(4 faces)</span>
                    <p className="text-sm mt-2 text-slate-700">Petite dague, égratignure magique.</p>
                  </div>
                  <div className="bg-white p-4 rounded-xl border border-rose-200 text-center">
                    <span className="font-bold text-rose-600 block text-lg">D6</span>
                    <span className="text-sm text-slate-600">(6 faces)</span>
                    <p className="text-sm mt-2 text-slate-700">Le dé classique. Coup d'épée normal.</p>
                  </div>
                  <div className="bg-white p-4 rounded-xl border border-rose-200 text-center">
                    <span className="font-bold text-rose-600 block text-lg">D8</span>
                    <span className="text-sm text-slate-600">(8 faces)</span>
                    <p className="text-sm mt-2 text-slate-700">Grosse arme, Souffle de dragon !</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 3: Mots Clés */}
          <section className="bg-white p-8 rounded-3xl shadow-sm border border-slate-200">
            <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-3">
              <BookOpen className="w-6 h-6 text-emerald-500" />
              3. Le Jargon Super Simple
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="flex items-start gap-4 p-5 bg-slate-50 rounded-2xl border border-slate-100">
                <Heart className="w-8 h-8 text-rose-500 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-slate-800 text-lg">PV (Points de Vie)</h4>
                  <p className="text-slate-600 mt-1 font-medium">C'est la santé. Si les PV tombent à 0, le personnage s'enfuie ou est mis K.O. (On évite la mort pour nos petits héros !)</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-5 bg-slate-50 rounded-2xl border border-slate-100">
                <Shield className="w-8 h-8 text-indigo-500 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-slate-800 text-lg">CA (Classe d'Armure)</h4>
                  <p className="text-slate-600 mt-1 font-medium">C'est la défense. Pour toucher une cible, le score final du D20 de l'attaquant (+ son bonus) doit être ÉGAL ou SUPÉRIEUR à la CA.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 4: Conseil en Or */}
          <section className="bg-gradient-to-br from-amber-50 to-orange-50 p-8 rounded-3xl shadow-sm border-2 border-amber-200">
            <h2 className="text-2xl font-bold text-amber-900 mb-4 bg-white/50 inline-block px-4 py-2 rounded-xl">💡 Le Conseil en Or du MJ</h2>
            <p className="text-amber-800 leading-relaxed font-medium text-lg">
              Le but principal est de s'amuser et de stimuler l'imagination ! Si l'enfant propose une idée farfelue ("Je jette ma chaussure dans la bouche du monstre au lieu de frapper"), <strong>dites OUI !</strong> 
              Faites-lui lancer un D20. S'il réussit, le monstre tousse et s'enfuit. En jeu de rôle, la règle d'or est le plaisir partagé !
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
