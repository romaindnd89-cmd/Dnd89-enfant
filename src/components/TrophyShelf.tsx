import React from 'react';
import { motion } from 'motion/react';
import { Lock, Trophy } from 'lucide-react';
import { useTrophies } from '../hooks/useTrophies';
import { TROPHIES, ALL_TROPHY_IDS } from '../data/trophies';

export default function TrophyShelf() {
  const { earned, has } = useTrophies();
  const count = earned.length;
  const total = ALL_TROPHY_IDS.length;

  return (
    <div className="mb-10 bg-white/70 backdrop-blur-sm rounded-3xl border-2 border-amber-100 p-5 sm:p-6 shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-2xl bg-amber-100 flex items-center justify-center">
            <Trophy className="w-5 h-5 text-amber-500" />
          </div>
          <div>
            <h3 className="font-display text-lg font-bold text-slate-800">Mes Trophées</h3>
            <p className="text-xs text-slate-500">Termine une aventure pour en gagner un !</p>
          </div>
        </div>
        <div className="font-display font-bold text-amber-500 text-lg tabular-nums">
          {count}/{total}
        </div>
      </div>

      <div className="grid grid-cols-5 gap-2 sm:gap-3">
        {ALL_TROPHY_IDS.map((id) => {
          const t = TROPHIES[id];
          const unlocked = has(id);
          return (
            <motion.div
              key={id}
              whileHover={unlocked ? { scale: 1.08, y: -3 } : {}}
              className="flex flex-col items-center text-center"
              title={unlocked ? `${t.title} — ${t.adventure}` : 'Trophée à débloquer'}
            >
              <div
                className={`w-full aspect-square rounded-2xl flex items-center justify-center text-3xl sm:text-4xl relative overflow-hidden ${
                  unlocked
                    ? `bg-gradient-to-br ${t.gradient} shadow-md`
                    : 'bg-slate-100 border-2 border-dashed border-slate-200'
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
                  <Lock className="w-5 h-5 text-slate-300" />
                )}
              </div>
              <span
                className={`mt-1.5 text-[10px] sm:text-xs font-bold leading-tight ${
                  unlocked ? 'text-slate-600' : 'text-slate-300'
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
