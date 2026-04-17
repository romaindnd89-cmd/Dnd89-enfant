import React, { useState } from 'react';
import { ArrowLeft, List, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import Intro from './bouboule/Intro';
import Chapitre1 from './bouboule/Chapitre1';
import Chapitre2 from './bouboule/Chapitre2';
import Chapitre3 from './bouboule/Chapitre3';
import Chapitre4 from './bouboule/Chapitre4';
import Chapitre5 from './bouboule/Chapitre5';
import Epilogue from './bouboule/Epilogue';

export default function BouboulePangea({ onBack }: { onBack: () => void }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="max-w-4xl mx-auto pb-24 relative">
      {/* Navigation flottante */}
      <div className="sticky top-24 z-40 flex justify-between items-center mb-8 bg-slate-50/90 backdrop-blur-sm py-2">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-slate-500 hover:text-slate-800 font-bold transition-colors bg-white px-4 py-2 rounded-full shadow-sm border border-slate-200"
        >
          <ArrowLeft className="w-5 h-5" />
          <span className="hidden sm:inline">Retour aux aventures</span>
        </button>

        <button 
          onClick={() => setIsMenuOpen(true)}
          className="flex items-center gap-2 text-emerald-600 hover:text-emerald-700 font-bold transition-colors bg-white px-4 py-2 rounded-full shadow-sm border border-emerald-200"
        >
          <List className="w-5 h-5" />
          <span className="hidden sm:inline">Chapitres</span>
        </button>
      </div>

      {/* Menu des chapitres (Overlay) */}
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
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 100 }}
              className="fixed right-0 top-0 bottom-0 w-full sm:w-96 bg-white z-50 shadow-2xl overflow-y-auto"
            >
              <div className="p-6">
                <div className="flex justify-between items-center mb-8">
                  <h2 className="font-display text-2xl font-bold text-slate-800">Sommaire</h2>
                  <button onClick={() => setIsMenuOpen(false)} className="p-2 bg-slate-100 rounded-full text-slate-500 hover:text-slate-800">
                    <X className="w-6 h-6" />
                  </button>
                </div>
                <div className="space-y-3">
                  <button onClick={() => scrollToSection('intro')} className="w-full text-left p-3 rounded-xl hover:bg-slate-50 font-bold text-slate-700">Introduction : L'Histoire du Monde</button>
                  <button onClick={() => scrollToSection('chap1')} className="w-full text-left p-3 rounded-xl hover:bg-emerald-50 font-bold text-emerald-700">Chapitre 1 : L'Ombre sur le Lagon</button>
                  <button onClick={() => scrollToSection('chap2')} className="w-full text-left p-3 rounded-xl hover:bg-amber-50 font-bold text-amber-700">Chapitre 2 : Les Royaumes Terrestres</button>
                  <button onClick={() => scrollToSection('chap3')} className="w-full text-left p-3 rounded-xl hover:bg-rose-50 font-bold text-rose-700">Chapitre 3 : La Montagne Fumante</button>
                  <button onClick={() => scrollToSection('chap4')} className="w-full text-left p-3 rounded-xl hover:bg-blue-50 font-bold text-blue-700">Chapitre 4 : Les Pics d'Argent</button>
                  <button onClick={() => scrollToSection('chap5')} className="w-full text-left p-3 rounded-xl hover:bg-purple-50 font-bold text-purple-700">Chapitre 5 : La Faille du Monde</button>
                  <button onClick={() => scrollToSection('epilogue')} className="w-full text-left p-3 rounded-xl hover:bg-indigo-50 font-bold text-indigo-700">Épilogue & Fiche Finale</button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <div className="text-center mb-12">
        <img 
          src="https://i.postimg.cc/wTSzSbJ3/1775687694137.png" 
          alt="Affiche Bouboule et le Secret de Pangéa" 
          className="w-full max-w-2xl mx-auto mb-8 rounded-3xl shadow-xl object-cover border-4 border-white"
          referrerPolicy="no-referrer"
        />
        <h1 className="font-display text-4xl sm:text-5xl font-bold text-slate-800 mb-4">
          Bouboule et le Secret de Pangéa
        </h1>
        <p className="text-xl text-slate-600 font-medium max-w-2xl mx-auto">
          La Quête des 4 Cristaux
        </p>
      </div>

      <div className="space-y-16">
        <Intro />
        <Chapitre1 />
        <Chapitre2 />
        <Chapitre3 />
        <Chapitre4 />
        <Chapitre5 />
        <Epilogue />
      </div>
    </div>
  );
}
