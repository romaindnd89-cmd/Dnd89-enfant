import React, { useState } from 'react';
import { ArrowLeft, List, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

import Intro from './etoile/Intro';
import Part1 from './etoile/Part1';
import Part2 from './etoile/Part2';
import Part3 from './etoile/Part3';
import Part4 from './etoile/Part4';
import Epilogue from './etoile/Epilogue';

export default function EtoileCampaign({ onBack }: { onBack: () => void }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto pb-24 relative">
      {/* Header fixe avec navigation */}
      <div className="sticky top-0 z-40 bg-slate-50/90 backdrop-blur-md border-b border-slate-200 py-4 px-4 flex justify-between items-center mb-8">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-slate-500 hover:text-slate-800 font-bold transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          <span className="hidden sm:inline">Retour</span>
        </button>
        
        <button
          onClick={() => setIsMenuOpen(true)}
          className="flex items-center gap-2 bg-indigo-100 text-indigo-700 hover:bg-indigo-200 px-4 py-2 rounded-full font-bold transition-colors"
        >
          <List className="w-5 h-5" />
          Chapitres
        </button>
      </div>

      {/* Menu de navigation (Overlay) */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
              className="fixed inset-0 bg-slate-900/50 z-50 backdrop-blur-sm"
            />
            <motion.div 
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-full sm:w-80 bg-white z-50 shadow-2xl flex flex-col"
            >
              <div className="p-4 border-b border-slate-100 flex justify-between items-center bg-indigo-50">
                <h3 className="font-display font-bold text-indigo-800 text-lg">Sommaire</h3>
                <button 
                  onClick={() => setIsMenuOpen(false)}
                  className="p-2 text-indigo-600 hover:bg-indigo-100 rounded-full transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="flex-1 overflow-y-auto p-4">
                <nav className="flex flex-col gap-2">
                  <button onClick={() => scrollToSection('intro')} className="text-left px-4 py-3 rounded-xl hover:bg-slate-50 font-medium text-slate-700 transition-colors">
                    📖 Fiches de Personnages
                  </button>
                  <button onClick={() => scrollToSection('chap1')} className="text-left px-4 py-3 rounded-xl hover:bg-indigo-50 font-medium text-indigo-700 transition-colors">
                    ☄️ Chapitre 1 : L'Impact du Ciel
                  </button>
                  <button onClick={() => scrollToSection('chap2')} className="text-left px-4 py-3 rounded-xl hover:bg-indigo-50 font-medium text-indigo-700 transition-colors">
                    🌫️ Chapitre 2 : Les Sentiers de l'Oubli
                  </button>
                  <button onClick={() => scrollToSection('chap3')} className="text-left px-4 py-3 rounded-xl hover:bg-indigo-50 font-medium text-indigo-700 transition-colors">
                    ⚙️ Chapitre 3 : Les Entrailles du Géant
                  </button>
                  <button onClick={() => scrollToSection('chap5')} className="text-left px-4 py-3 rounded-xl hover:bg-indigo-50 font-medium text-indigo-700 transition-colors">
                    🏔️ Chapitre 5 : Les Pics d'Argent
                  </button>
                  <button onClick={() => scrollToSection('chap6')} className="text-left px-4 py-3 rounded-xl hover:bg-indigo-50 font-medium text-indigo-700 transition-colors">
                    🛷 Chapitre 6 : La Descente Infernale
                  </button>
                  <button onClick={() => scrollToSection('chap7')} className="text-left px-4 py-3 rounded-xl hover:bg-indigo-50 font-medium text-indigo-700 transition-colors">
                    ❄️ Chapitre 7 : La Salle du Trône Glacé
                  </button>
                  <button onClick={() => scrollToSection('chap8')} className="text-left px-4 py-3 rounded-xl hover:bg-indigo-50 font-medium text-indigo-700 transition-colors">
                    🌊 Chapitre 8 : La Faille du Monde
                  </button>
                  <button onClick={() => scrollToSection('chap9')} className="text-left px-4 py-3 rounded-xl hover:bg-indigo-50 font-medium text-indigo-700 transition-colors">
                    🖤 Chapitre 9 : Le Cœur du Réacteur
                  </button>
                  <button onClick={() => scrollToSection('chap10')} className="text-left px-4 py-3 rounded-xl hover:bg-indigo-50 font-medium text-indigo-700 transition-colors">
                    ✨ Chapitre 10 : Épilogue & Certificat
                  </button>
                </nav>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <div className="text-center mb-12 px-4">
        <img 
          src="https://i.postimg.cc/FRFy47x8/1775769956993.png" 
          alt="Affiche L'Étoile Filante Perdue" 
          className="w-full max-w-2xl mx-auto mb-8 rounded-3xl shadow-xl object-cover border-4 border-white"
          referrerPolicy="no-referrer"
        />
        <h1 className="font-display text-4xl sm:text-5xl font-bold text-slate-800 mb-4">
          L'Étoile Filante Perdue
        </h1>
        <p className="text-xl text-slate-600 font-medium max-w-2xl mx-auto">
          Une aventure épique pour deux héros (Aura & Kael) et un Maître du Jeu.
        </p>
      </div>

      <div className="space-y-12 px-4">
        <Intro />
        <Part1 />
        <Part2 />
        <Part3 />
        <Part4 />
        <Epilogue />
      </div>
    </div>
  );
}
