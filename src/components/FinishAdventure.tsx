import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PartyPopper } from 'lucide-react';
import { useTrophies } from '../hooks/useTrophies';
import { TROPHIES } from '../data/trophies';
import { bigCelebration } from '../lib/celebrate';
import TrophyModal from './TrophyModal';

/**
 * Bouton de fin d'aventure à placer à la toute fin d'une campagne.
 * Offre confettis + trophée quand l'enfant a terminé l'histoire.
 */
export default function FinishAdventure({ trophyId }: { trophyId: string }) {
  const { award } = useTrophies();
  const [open, setOpen] = useState(false);
  const def = TROPHIES[trophyId];
  if (!def) return null;

  const celebrate = () => {
    award(def.id);
    bigCelebration();
    setOpen(true);
  };

  return (
    <>
      <div className="my-12 text-center">
        <motion.img
          src="/art/dragon-hero.png"
          alt=""
          aria-hidden="true"
          className="dragon-hero mx-auto w-40 sm:w-52 mb-2 select-none"
          animate={{ y: [0, -12, 0], rotate: [-2, 2, -2] }}
          transition={{ duration: 3.4, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.button
          onClick={celebrate}
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.96 }}
          className={`inline-flex items-center gap-3 bg-gradient-to-r ${def.gradient} text-white font-display font-bold text-xl px-8 py-4 rounded-3xl shadow-xl`}
        >
          <PartyPopper className="w-7 h-7" />
          J'ai terminé l'aventure !
        </motion.button>
        <p className="text-slate-400 text-sm mt-3">Clique pour recevoir ta récompense 🏆</p>
      </div>

      <AnimatePresence>
        {open && <TrophyModal trophy={def} onClose={() => setOpen(false)} />}
      </AnimatePresence>
    </>
  );
}
