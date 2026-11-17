import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Dices, X, Minus, Plus, RotateCcw } from 'lucide-react';

type DieType = 4 | 6 | 8 | 10 | 12 | 20;

const DICE: { type: DieType; label: string; color: string }[] = [
  { type: 4, label: 'D4', color: 'from-rose-400 to-rose-600' },
  { type: 6, label: 'D6', color: 'from-amber-400 to-amber-600' },
  { type: 8, label: 'D8', color: 'from-emerald-400 to-emerald-600' },
  { type: 10, label: 'D10', color: 'from-sky-400 to-sky-600' },
  { type: 12, label: 'D12', color: 'from-indigo-400 to-indigo-600' },
  { type: 20, label: 'D20', color: 'from-purple-400 to-purple-600' },
];

interface RollEntry {
  id: number;
  die: DieType;
  raw: number;
  bonus: number;
  total: number;
}

export default function DiceRoller() {
  const [open, setOpen] = useState(false);
  const [die, setDie] = useState<DieType>(20);
  const [bonus, setBonus] = useState(0);
  const [rolling, setRolling] = useState(false);
  const [current, setCurrent] = useState<RollEntry | null>(null);
  const [display, setDisplay] = useState<number>(20);
  const [history, setHistory] = useState<RollEntry[]>([]);

  const activeColor = DICE.find((d) => d.type === die)!.color;

  const roll = () => {
    if (rolling) return;
    setRolling(true);
    const final = Math.floor(Math.random() * die) + 1;

    // Petite animation : on fait défiler des chiffres au hasard
    let ticks = 0;
    const maxTicks = 14;
    const interval = setInterval(() => {
      ticks++;
      setDisplay(Math.floor(Math.random() * die) + 1);
      if (ticks >= maxTicks) {
        clearInterval(interval);
        setDisplay(final);
        const entry: RollEntry = {
          id: Date.now(),
          die,
          raw: final,
          bonus,
          total: final + bonus,
        };
        setCurrent(entry);
        setHistory((h) => [entry, ...h].slice(0, 6));
        setRolling(false);
      }
    }, 55);
  };

  const isCrit = current && !rolling && current.die === 20 && current.raw === 20;
  const isFail = current && !rolling && current.die === 20 && current.raw === 1;

  return (
    <>
      {/* Bouton flottant */}
      <motion.button
        onClick={() => setOpen(true)}
        aria-label="Ouvrir le lanceur de dés"
        className="dice-wobble fixed bottom-5 right-5 z-[60] w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white shadow-xl flex items-center justify-center"
        whileHover={{ scale: 1.08, rotate: 8 }}
        whileTap={{ scale: 0.92 }}
        animate={{
          boxShadow: [
            '0 10px 25px -5px rgba(16,185,129,0.5)',
            '0 10px 40px -2px rgba(16,185,129,0.85)',
            '0 10px 25px -5px rgba(16,185,129,0.5)',
          ],
        }}
        transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
      >
        <Dices className="w-8 h-8" />
      </motion.button>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-[70]"
            />
            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 40, scale: 0.95 }}
              transition={{ type: 'spring', damping: 22, stiffness: 240 }}
              className="fixed bottom-4 right-4 left-4 sm:left-auto sm:w-96 z-[80] bg-white rounded-3xl shadow-2xl border-2 border-emerald-100 overflow-hidden"
            >
              <div className="flex items-center justify-between px-5 py-3 bg-gradient-to-r from-emerald-500 to-teal-600 text-white">
                <div className="flex items-center gap-2 font-display font-bold text-lg">
                  <Dices className="w-5 h-5" /> Lanceur de dés
                </div>
                <button
                  onClick={() => setOpen(false)}
                  className="p-1.5 hover:bg-white/20 rounded-full transition-colors"
                  aria-label="Fermer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="p-5">
                {/* Résultat */}
                <div className="flex justify-center mb-5">
                  <motion.div
                    key={current?.id ?? 'start'}
                    animate={
                      isCrit
                        ? { scale: [1, 1.15, 1], rotate: [0, -4, 4, 0] }
                        : { scale: 1 }
                    }
                    transition={{ duration: 0.5 }}
                    className={`relative w-32 h-32 rounded-3xl bg-gradient-to-br ${activeColor} flex items-center justify-center shadow-lg`}
                  >
                    <motion.span
                      className="font-display font-bold text-white text-6xl tabular-nums drop-shadow-md"
                      animate={rolling ? { y: [0, -6, 0] } : {}}
                      transition={{ duration: 0.12, repeat: rolling ? Infinity : 0 }}
                    >
                      {display}
                    </motion.span>
                    {isCrit && (
                      <motion.div
                        className="absolute inset-0 rounded-3xl ring-4 ring-amber-300"
                        animate={{ opacity: [0.4, 1, 0.4] }}
                        transition={{ duration: 1, repeat: Infinity }}
                      />
                    )}
                  </motion.div>
                </div>

                {/* Message crit / échec + total avec bonus */}
                <div className="h-7 text-center mb-3">
                  {isCrit && (
                    <span className="font-display font-bold text-amber-500">★ Réussite éclatante ! ★</span>
                  )}
                  {isFail && (
                    <span className="font-display font-bold text-rose-500">Oups, échec total…</span>
                  )}
                  {!rolling && current && !isCrit && !isFail && bonus !== 0 && (
                    <span className="font-bold text-slate-500 text-sm">
                      {current.raw} {bonus > 0 ? '+' : '−'} {Math.abs(bonus)} ={' '}
                      <span className="text-emerald-600 text-base">{current.total}</span>
                    </span>
                  )}
                </div>

                {/* Choix du dé */}
                <div className="grid grid-cols-6 gap-1.5 mb-4">
                  {DICE.map((d) => (
                    <button
                      key={d.type}
                      onClick={() => setDie(d.type)}
                      className={`py-2 rounded-xl font-display font-bold text-sm transition-all ${
                        die === d.type
                          ? `bg-gradient-to-br ${d.color} text-white shadow-md scale-105`
                          : 'bg-slate-100 text-slate-500 hover:bg-slate-200'
                      }`}
                    >
                      {d.label}
                    </button>
                  ))}
                </div>

                {/* Bonus */}
                <div className="flex items-center justify-center gap-3 mb-4">
                  <span className="text-sm font-bold text-slate-500">Bonus</span>
                  <button
                    onClick={() => setBonus((b) => Math.max(-5, b - 1))}
                    className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-600"
                    aria-label="Diminuer le bonus"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="w-10 text-center font-display font-bold text-lg text-slate-700 tabular-nums">
                    {bonus >= 0 ? `+${bonus}` : bonus}
                  </span>
                  <button
                    onClick={() => setBonus((b) => Math.min(10, b + 1))}
                    className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-600"
                    aria-label="Augmenter le bonus"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>

                <button
                  onClick={roll}
                  disabled={rolling}
                  className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-display font-bold text-lg shadow-md hover:shadow-lg active:scale-95 transition-all disabled:opacity-70"
                >
                  {rolling ? 'Ça roule…' : `Lancer le ${DICE.find((d) => d.type === die)!.label} !`}
                </button>

                {/* Historique */}
                {history.length > 0 && (
                  <div className="mt-4 pt-3 border-t border-slate-100">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-bold text-slate-400 uppercase tracking-wide">Derniers jets</span>
                      <button
                        onClick={() => {
                          setHistory([]);
                          setCurrent(null);
                        }}
                        className="text-slate-400 hover:text-slate-600"
                        aria-label="Effacer l'historique"
                      >
                        <RotateCcw className="w-3.5 h-3.5" />
                      </button>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {history.map((h) => (
                        <span
                          key={h.id}
                          className="text-xs font-bold bg-slate-100 text-slate-600 rounded-lg px-2 py-1"
                        >
                          D{h.die}: {h.raw}
                          {h.bonus !== 0 && <span className="text-emerald-600"> → {h.total}</span>}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
