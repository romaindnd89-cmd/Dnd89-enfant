import React, { useState } from 'react';
import { ArrowLeft, List, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

import Intro from './aube/Intro';
import Part1 from './aube/Part1';
import Part2 from './aube/Part2';
import Part3 from './aube/Part3';
import Part4 from './aube/Part4';

export default function AubeCampaign({ onBack }: { onBack: () => void }) {
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
          className="flex items-center gap-2 bg-amber-100 text-amber-700 hover:bg-amber-200 px-4 py-2 rounded-full font-bold transition-colors"
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
              <div className="p-4 border-b border-slate-100 flex justify-between items-center bg-amber-50">
                <h3 className="font-display font-bold text-amber-800 text-lg">Sommaire</h3>
                <button 
                  onClick={() => setIsMenuOpen(false)}
                  className="p-2 text-amber-600 hover:bg-amber-100 rounded-full transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="flex-1 overflow-y-auto p-4">
                <nav className="flex flex-col gap-2">
                  <button onClick={() => scrollToSection('intro')} className="text-left px-4 py-3 rounded-xl hover:bg-slate-50 font-medium text-slate-700 transition-colors">
                    📖 Prologue & Fiche
                  </button>
                  <button onClick={() => scrollToSection('chap1')} className="text-left px-4 py-3 rounded-xl hover:bg-amber-50 font-medium text-amber-700 transition-colors">
                    🏔️ Chapitre 1 : Le Silence
                  </button>
                  <button onClick={() => scrollToSection('chap2')} className="text-left px-4 py-3 rounded-xl hover:bg-amber-50 font-medium text-amber-700 transition-colors">
                    ❄️ Chapitre 2 : La Descente
                  </button>
                  <button onClick={() => scrollToSection('chap3')} className="text-left px-4 py-3 rounded-xl hover:bg-amber-50 font-medium text-amber-700 transition-colors">
                    🌉 Chapitre 3 : Le Pont
                  </button>
                  <button onClick={() => scrollToSection('chap4')} className="text-left px-4 py-3 rounded-xl hover:bg-amber-50 font-medium text-amber-700 transition-colors">
                    🌲 Chapitre 4 : Le Village
                  </button>
                  <button onClick={() => scrollToSection('chap5')} className="text-left px-4 py-3 rounded-xl hover:bg-amber-50 font-medium text-amber-700 transition-colors">
                    💧 Chapitre 5 : Le Marais
                  </button>
                  <button onClick={() => scrollToSection('chap6')} className="text-left px-4 py-3 rounded-xl hover:bg-amber-50 font-medium text-amber-700 transition-colors">
                    🏰 Chapitre 6 : Les Ruines
                  </button>
                  <button onClick={() => scrollToSection('chap7')} className="text-left px-4 py-3 rounded-xl hover:bg-amber-50 font-medium text-amber-700 transition-colors">
                    🦅 Chapitre 7 : Le Vol
                  </button>
                  <button onClick={() => scrollToSection('chap8')} className="text-left px-4 py-3 rounded-xl hover:bg-amber-50 font-medium text-amber-700 transition-colors">
                    🏰 Chapitre 8 : L'Infiltration
                  </button>
                  <button onClick={() => scrollToSection('chap9')} className="text-left px-4 py-3 rounded-xl hover:bg-amber-50 font-medium text-amber-700 transition-colors">
                    🌑 Chapitre 9 : Le Duel
                  </button>
                  <button onClick={() => scrollToSection('chap10')} className="text-left px-4 py-3 rounded-xl hover:bg-amber-50 font-medium text-amber-700 transition-colors">
                    🌅 Chapitre 10 : Le Retour
                  </button>
                  <button onClick={() => scrollToSection('epilogue')} className="text-left px-4 py-3 rounded-xl hover:bg-amber-50 font-medium text-amber-700 transition-colors">
                    🎲 Épilogue
                  </button>
                </nav>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <div className="text-center mb-12 px-4">
        <img 
          src="https://i.postimg.cc/W43W65Qn/1775862986933.png" 
          alt="Affiche L'Héritier de l'Aube" 
          className="w-full max-w-2xl mx-auto mb-8 rounded-3xl shadow-xl object-cover border-4 border-white"
          referrerPolicy="no-referrer"
        />
        <h1 className="font-display text-4xl sm:text-5xl font-bold text-slate-800 mb-4">
          L'Héritier de l'Aube
        </h1>
        <p className="text-xl text-slate-600 font-medium max-w-2xl mx-auto">
          Une aventure épique pour un petit dragonneau courageux.
        </p>
      </div>

      <div className="space-y-12 px-4">
        <Intro />
        <Part1 />
        <Part2 />
        <Part3 />
        <Part4 />
      </div>
    </div>
  );
}
