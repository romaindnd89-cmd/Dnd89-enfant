import React from 'react';
import { motion } from 'motion/react';
import { Lock, Trophy } from 'lucide-react';
import { useTrophies } from '../hooks/useTrophies';
import { TROPHIES, ALL_TROPHY_IDS } from '../data/trophies';

export default function TrophyShelf() {
  const { earned, has } = useTrophies();
  const total = ALL_TROPHY_IDS.length;
  const count = earned.filter((t) => ALL_TROPHY_IDS.includes(t.id)).length;

  return (
    <div className="glass-dark backdrop-blur-md rounded-2xl p-5 sm:p-6 mb-10">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full border border-amber-300/40 bg-amber-300/10 flex items-center justify-center">
            <Trophy className="w-5 h-5 text-amber-300" />
          </div>
          <div>
            <h3 className="font-display text-lg font-bold text-amber-100 tracking-wide">Salle des Trophées</h3>
            <p className="text-sm text-slate-400">Chaque aventure terminée en révèle un.</p>
          </div>
        </div>
        <div className="font-display font-bold text-amber-300 text-lg tabular-nums">
          {count}/{total}
        </div>
      </div>

      <div className="grid grid-cols-3 sm:grid-cols-6 gap-3">
        {ALL_TROPHY_IDS.map((id) => {
          const t = TROPHIES[id];
          const unlocked = has(id);
          return (
            <motion.div
              key={id}
              whileHover={unlocked ? { scale: 1.06, y: -3 } : {}}
              className="flex flex-col items-center text-center"
              title={unlocked ? `${t.title} — ${t.adventure}` : 'Trophée à débloquer'}
            >
              <div
                className={`w-full aspect-square rounded-xl flex items-center justify-center text-3xl sm:text-4xl relative overflow-hidden ${
                  unlocked
                    ? `bg-gradient-to-br ${t.gradient} shadow-[0_0_24px_-4px_rgba(251,191,36,0.6)] border border-amber-200/60`
                    : 'bg-slate-900/60 border border-dashed border-slate-600/60'
                }`}
              >
                {unlocked ? (
                  <>
                    <span className="drop-shadow">{t.emoji}</span>
                    <motion.div
                      className="absolute inset-0"
                      style={{
                        background:
                          'linear-gradient(110deg, transparent 30%, rgba(255,255,255,0.55) 50%, transparent 70%)',
                      }}
                      animate={{ x: ['-120%', '120%'] }}
                      transition={{ duration: 2.4, repeat: Infinity, repeatDelay: 2.5, ease: 'easeInOut' }}
                    />
                  </>
                ) : (
                  <Lock className="w-5 h-5 text-slate-600" />
                )}
              </div>
              <span
                className={`mt-1.5 text-[11px] sm:text-xs leading-tight ${
                  unlocked ? 'text-amber-100' : 'text-slate-600'
                }`}
              >
                {unlocked ? t.title : '???'}
              </span>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
