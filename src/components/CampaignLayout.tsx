import React, { createContext, useContext, useEffect, useRef, useState } from 'react';
import { ArrowLeft, List, X, Check, CheckCircle2, Circle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useProgress } from '../hooks/useProgress';
import { useTrophies } from '../hooks/useTrophies';
import { TROPHIES, TrophyDef } from '../data/trophies';
import { bigCelebration } from '../lib/celebrate';
import TrophyModal from './TrophyModal';

export interface ChapterRef {
  id: string;
  label: string;
}

export interface LayoutTheme {
  chipBg: string;      // ex: 'bg-orange-100 text-orange-700 hover:bg-orange-200'
  menuHeader: string;  // ex: 'bg-orange-50 text-orange-800'
  menuItem: string;    // ex: 'hover:bg-orange-50 text-orange-700'
  barFill: string;     // ex: 'bg-gradient-to-r from-orange-400 to-amber-500'
  check: string;       // ex: 'text-orange-500'
}

interface ProgressCtx {
  isDone: (id: string) => boolean;
  toggle: (id: string) => void;
  theme: LayoutTheme;
}

const Ctx = createContext<ProgressCtx | null>(null);

export function useChapterCtx() {
  const c = useContext(Ctx);
  if (!c) throw new Error('useChapterCtx must be used within CampaignLayout');
  return c;
}

interface CampaignLayoutProps {
  campaignId: string;
  chapters: ChapterRef[];
  theme: LayoutTheme;
  onBack: () => void;
  children: React.ReactNode;
}

export default function CampaignLayout({
  campaignId,
  chapters,
  theme,
  onBack,
  children,
}: CampaignLayoutProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isDone, toggle, done, reset } = useProgress(campaignId);
  const { award } = useTrophies();
  const [trophy, setTrophy] = useState<TrophyDef | null>(null);
  const celebratedRef = useRef(false);

  const total = chapters.length;
  const completed = chapters.filter((c) => done.includes(c.id)).length;
  const pct = total > 0 ? Math.round((completed / total) * 100) : 0;

  // Fin d'aventure : tous les chapitres cochés → confettis + trophée
  useEffect(() => {
    if (total > 0 && completed === total && !celebratedRef.current) {
      celebratedRef.current = true;
      const def = TROPHIES[campaignId];
      if (def && award(def.id)) {
        bigCelebration();
        setTrophy(def);
      }
    }
    // si on décoche, on réarme la célébration pour la prochaine fois
    if (completed < total) {
      celebratedRef.current = false;
    }
  }, [completed, total, campaignId, award]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <Ctx.Provider value={{ isDone, toggle, theme }}>
      <div className="max-w-4xl mx-auto pb-24 relative">
        {/* Header fixe */}
        <div className="sticky top-[88px] z-40 bg-white/90 backdrop-blur-md border border-slate-200 rounded-2xl shadow-md py-3 px-4 flex items-center gap-4 mb-8">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-slate-500 hover:text-slate-800 font-bold transition-colors shrink-0"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="hidden sm:inline">Retour</span>
          </button>

          {/* Barre de progression */}
          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between mb-1">
              <span className="text-xs font-bold text-slate-400">Progression</span>
              <span className="text-xs font-bold text-slate-500 tabular-nums">
                {completed}/{total}
              </span>
            </div>
            <div className="h-2.5 rounded-full bg-slate-100 overflow-hidden">
              <motion.div
                className={`h-full rounded-full ${theme.barFill}`}
                initial={{ width: 0 }}
                animate={{ width: `${pct}%` }}
                transition={{ type: 'spring', damping: 20, stiffness: 120 }}
              />
            </div>
          </div>

          <button
            onClick={() => setIsMenuOpen(true)}
            className={`flex items-center gap-2 ${theme.chipBg} px-3 sm:px-4 py-2 rounded-full font-bold transition-colors shrink-0`}
          >
            <List className="w-5 h-5" />
            <span className="hidden sm:inline">Chapitres</span>
          </button>
        </div>

        {/* Menu de navigation */}
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
                className="fixed top-0 right-0 bottom-0 w-full sm:w-96 bg-white z-50 shadow-2xl flex flex-col"
              >
                <div className={`p-4 border-b border-slate-100 flex justify-between items-center ${theme.menuHeader}`}>
                  <div>
                    <h3 className="font-display font-bold text-lg">Sommaire</h3>
                    <p className="text-xs opacity-70">{completed} chapitre{completed > 1 ? 's' : ''} terminé{completed > 1 ? 's' : ''} sur {total}</p>
                  </div>
                  <button
                    onClick={() => setIsMenuOpen(false)}
                    className="p-2 hover:bg-black/5 rounded-full transition-colors"
                    aria-label="Fermer"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
                <div className="flex-1 overflow-y-auto p-3">
                  <nav className="flex flex-col gap-1">
                    {chapters.map((c) => {
                      const d = isDone(c.id);
                      return (
                        <div
                          key={c.id}
                          className={`flex items-center gap-2 rounded-xl ${theme.menuItem} transition-colors`}
                        >
                          <button
                            onClick={() => toggle(c.id)}
                            className="pl-3 py-3 shrink-0"
                            aria-label={d ? 'Marquer non terminé' : 'Marquer terminé'}
                          >
                            {d ? (
                              <CheckCircle2 className={`w-5 h-5 ${theme.check}`} />
                            ) : (
                              <Circle className="w-5 h-5 text-slate-300" />
                            )}
                          </button>
                          <button
                            onClick={() => scrollToSection(c.id)}
                            className={`flex-1 text-left pr-3 py-3 font-medium ${d ? 'line-through opacity-50' : ''}`}
                          >
                            {c.label}
                          </button>
                        </div>
                      );
                    })}
                  </nav>

                  {completed > 0 && (
                    <button
                      onClick={reset}
                      className="mt-4 w-full text-center text-sm font-bold text-slate-400 hover:text-slate-600 py-2"
                    >
                      Réinitialiser ma progression
                    </button>
                  )}
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>

        {children}
      </div>

      <AnimatePresence>
        {trophy && <TrophyModal trophy={trophy} onClose={() => setTrophy(null)} />}
      </AnimatePresence>
    </Ctx.Provider>
  );
}

/**
 * Titre de chapitre avec case à cocher intégrée.
 * À utiliser à la place d'un <h2 id> brut dans les nouvelles aventures.
 */
export function Chapter({
  id,
  emoji,
  title,
}: {
  id: string;
  emoji: string;
  title: string;
}) {
  const { isDone, toggle, theme } = useChapterCtx();
  const d = isDone(id);
  return (
    <div id={id} className="scroll-mt-44 flex items-start gap-3 mb-6 mt-12 border-b-2 border-slate-200 pb-2">
      <button
        onClick={() => toggle(id)}
        className={`mt-1.5 shrink-0 w-8 h-8 rounded-full border-2 flex items-center justify-center transition-all ${
          d ? `${theme.check} border-current` : 'border-slate-300 text-transparent hover:border-slate-400'
        }`}
        aria-label={d ? 'Chapitre terminé' : 'Marquer ce chapitre comme terminé'}
        title={d ? 'Chapitre terminé' : 'Marquer comme terminé'}
      >
        <Check className="w-5 h-5" strokeWidth={3} />
      </button>
      <h2 className="font-display text-2xl sm:text-3xl font-bold text-slate-800 flex items-center gap-2">
        <span className="text-2xl">{emoji}</span> {title}
      </h2>
    </div>
  );
}
