import React from 'react';
import { motion } from 'motion/react';
import { TrophyDef } from '../data/trophies';

export default function TrophyModal({ trophy, onClose }: { trophy: TrophyDef; onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[90] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.6, y: 40, opacity: 0 }}
        animate={{ scale: 1, y: 0, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        transition={{ type: 'spring', damping: 14, stiffness: 200 }}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-md bg-white rounded-3xl shadow-2xl overflow-hidden text-center"
      >
        {/* Bandeau coloré avec rayons */}
        <div className={`relative bg-gradient-to-br ${trophy.gradient} pt-10 pb-16 px-6 overflow-hidden`}>
          {/* Rayons qui tournent */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            animate={{ rotate: 360 }}
            transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
          >
            <div
              className="w-[600px] h-[600px] opacity-20"
              style={{
                background:
                  'repeating-conic-gradient(from 0deg, rgba(255,255,255,0.9) 0deg 10deg, transparent 10deg 20deg)',
              }}
            />
          </motion.div>

          <div className="relative z-10">
            <p className="text-white/90 font-display font-bold tracking-wide uppercase text-sm mb-2">
              Aventure terminée !
            </p>
            <motion.div
              className="text-8xl drop-shadow-lg inline-block"
              animate={{ scale: [1, 1.15, 1], rotate: [0, -6, 6, 0] }}
              transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
            >
              {trophy.emoji}
            </motion.div>
          </div>
        </div>

        {/* Médaille / contenu */}
        <div className="px-6 pb-7 -mt-8 relative z-10">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.25, type: 'spring', damping: 12, stiffness: 220 }}
            className="w-20 h-20 mx-auto rounded-full bg-white shadow-lg border-4 border-amber-200 flex items-center justify-center text-4xl mb-4"
          >
            🏆
          </motion.div>

          <h2 className="font-display text-2xl font-bold text-slate-800 mb-1">Trophée débloqué</h2>
          <p className={`font-display text-xl font-bold bg-gradient-to-r ${trophy.gradient} bg-clip-text text-transparent mb-3`}>
            {trophy.title}
          </p>
          <p className="text-slate-600 mb-6">{trophy.message}</p>

          <button
            onClick={onClose}
            className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-amber-400 to-orange-500 text-white font-display font-bold text-lg shadow-md hover:shadow-lg active:scale-95 transition-all"
          >
            Youpi ! 🎉
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}
