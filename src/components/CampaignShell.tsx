import React, { useEffect, useRef, useState } from 'react';
import { ArrowLeft, List, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import DragonSprite from './DragonSprite';
import DragonForestBanner from './DragonForestBanner';

export interface ShellSection {
  id: string;
  label: string;
  /** classes Tailwind littérales, ex. "hover:bg-orange-50 text-orange-700" */
  className: string;
}

/**
 * Montage commun des aventures « Bouboule » : barre collante
 * (Retour / Chapitres), sommaire en panneau latéral, puis le contenu.
 */
export default function CampaignShell({
  onBack,
  sections,
  menuButtonClass = 'text-emerald-600 hover:text-emerald-700 border-emerald-200',
  children,
}: {
  onBack: () => void;
  sections: ShellSection[];
  menuButtonClass?: string;
  children: React.ReactNode;
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const dragonRef = useRef<HTMLDivElement>(null);
  const trailRef = useRef<HTMLDivElement>(null);

  // Le petit dragon de la barre avance au fil de la lecture
  useEffect(() => {
    let raf = 0;
    const update = () => {
      raf = 0;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const pct = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;
      if (dragonRef.current) dragonRef.current.style.left = `${pct * 100}%`;
      if (trailRef.current) trailRef.current.style.width = `${pct * 100}%`;
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

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
      <div className="sticky top-24 z-40 flex justify-between items-center mb-10 bg-slate-50/90 backdrop-blur-sm py-2 relative">
        <button
          onClick={onBack}
          aria-label="Retour aux aventures"
          className="flex items-center gap-2 text-slate-500 hover:text-slate-800 font-bold transition-colors bg-white px-4 py-2 rounded-full shadow-sm border border-slate-200"
        >
          <ArrowLeft className="w-5 h-5" />
          <span className="hidden sm:inline">Retour aux aventures</span>
        </button>

        <button
          onClick={() => setIsMenuOpen(true)}
          aria-label="Chapitres"
          className={`flex items-center gap-2 font-bold transition-colors bg-white px-4 py-2 rounded-full shadow-sm border ${menuButtonClass}`}
        >
          <List className="w-5 h-5" />
          <span className="hidden sm:inline">Chapitres</span>
        </button>

        {/* Piste du petit dragon : il suit la lecture */}
        <div className="absolute left-3 right-3 -bottom-3 h-6 pointer-events-none" aria-hidden="true">
          <div className="absolute left-0 right-0 top-1/2 h-px bg-amber-300/30" />
          <div
            ref={trailRef}
            className="absolute left-0 top-1/2 h-[3px] -mt-px progress-dragon-trail rounded-full"
            style={{ width: '0%' }}
          />
          <div ref={dragonRef} className="absolute top-0 -ml-6" style={{ left: '0%' }}>
            <div className="dragon-bob">
              <DragonSprite size={46} tint={1} speed={0.5} />
            </div>
          </div>
        </div>
      </div>

      {/* Menu des chapitres (Overlay) */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              key="shell-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
              className="fixed inset-0 bg-slate-900/50 z-50 backdrop-blur-sm"
            />
            <motion.div
              key="shell-panel"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 100 }}
              className="fixed right-0 top-0 bottom-0 w-full sm:w-96 bg-white z-50 shadow-2xl overflow-y-auto"
            >
              <div className="p-6">
                <div className="flex justify-between items-center mb-8">
                  <h2 className="font-display text-2xl font-bold text-slate-800">Sommaire</h2>
                  <button
                    onClick={() => setIsMenuOpen(false)}
                    className="p-2 bg-slate-100 rounded-full text-slate-500 hover:text-slate-800"
                    aria-label="Fermer le sommaire"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>
                <div className="space-y-3">
                  {sections.map((s) => (
                    <button
                      key={s.id}
                      onClick={() => scrollToSection(s.id)}
                      className={`w-full text-left p-3 rounded-xl font-bold ${s.className}`}
                    >
                      {s.label}
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {children}

      <DragonForestBanner className="mt-4" />
    </div>
  );
}
