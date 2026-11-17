import React, { useEffect, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Dice5, Copy, Check, Wand2 } from 'lucide-react';
import DragonMascot from './DragonMascot';
import { NARRATIVE_IDEAS, DRAGON_TIPS, IdeaCategory } from '../data/narrativeIdeas';

function randomOf<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

export default function DragonHelper() {
  const [open, setOpen] = useState(false);
  const [category, setCategory] = useState<IdeaCategory | null>(null);
  const [phrase, setPhrase] = useState<string>('');
  const [copied, setCopied] = useState(false);
  const [bubble, setBubble] = useState<string | null>(null);

  // Bulle de dialogue qui apparaît de temps en temps (le dragon est "vivant")
  useEffect(() => {
    if (open) {
      setBubble(null);
      return;
    }
    let hideTimer: ReturnType<typeof setTimeout>;
    const showTimer = setInterval(() => {
      setBubble(randomOf(DRAGON_TIPS));
      hideTimer = setTimeout(() => setBubble(null), 6000);
    }, 60000);
    // première apparition après 4s
    const first = setTimeout(() => {
      setBubble(randomOf(DRAGON_TIPS));
      hideTimer = setTimeout(() => setBubble(null), 6000);
    }, 4000);
    return () => {
      clearInterval(showTimer);
      clearTimeout(first);
      clearTimeout(hideTimer);
    };
  }, [open]);

  const pickPhrase = useCallback((cat: IdeaCategory) => {
    setCategory(cat);
    setPhrase(randomOf(cat.phrases));
    setCopied(false);
  }, []);

  const surprise = useCallback(() => {
    const cat = randomOf(NARRATIVE_IDEAS);
    pickPhrase(cat);
  }, [pickPhrase]);

  const copyPhrase = async () => {
    try {
      await navigator.clipboard.writeText(phrase);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      /* ignore */
    }
  };

  return (
    <>
      {/* Bouton mascotte flottant (bas gauche) */}
      <div className="fixed bottom-5 left-5 z-[60] flex flex-col items-start gap-2">
        <AnimatePresence>
          {bubble && !open && (
            <motion.button
              initial={{ opacity: 0, y: 10, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              onClick={() => setOpen(true)}
              className="max-w-[220px] text-left bg-white rounded-2xl rounded-bl-sm shadow-lg border-2 border-emerald-100 px-4 py-2.5 text-sm font-medium text-slate-700"
            >
              {bubble}
            </motion.button>
          )}
        </AnimatePresence>

        <motion.button
          onClick={() => setOpen(true)}
          aria-label="Ouvrir l'aide de Flammèche le dragon"
          className="relative w-16 h-16 rounded-2xl bg-gradient-to-br from-lime-100 to-emerald-200 shadow-xl flex items-center justify-center border-2 border-white"
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.92 }}
          animate={{
            boxShadow: [
              '0 10px 25px -5px rgba(132,204,22,0.4)',
              '0 10px 38px -2px rgba(132,204,22,0.7)',
              '0 10px 25px -5px rgba(132,204,22,0.4)',
            ],
          }}
          transition={{ duration: 2.6, repeat: Infinity, ease: 'easeInOut' }}
        >
          <DragonMascot size={54} />
        </motion.button>
      </div>

      {/* Panneau d'aide */}
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
              className="fixed bottom-4 left-4 right-4 sm:right-auto sm:w-[420px] max-h-[80vh] z-[80] bg-white rounded-3xl shadow-2xl border-2 border-emerald-100 overflow-hidden flex flex-col"
            >
              <div className="flex items-center justify-between px-5 py-3 bg-gradient-to-r from-lime-500 to-emerald-600 text-white shrink-0">
                <div className="flex items-center gap-2">
                  <div className="w-9 h-9 bg-white/20 rounded-full flex items-center justify-center">
                    <DragonMascot size={30} />
                  </div>
                  <div>
                    <div className="font-display font-bold text-lg leading-tight">Flammèche t'aide</div>
                    <div className="text-xs text-white/80">Des idées de phrases pour le MJ</div>
                  </div>
                </div>
                <button
                  onClick={() => setOpen(false)}
                  className="p-1.5 hover:bg-white/20 rounded-full transition-colors"
                  aria-label="Fermer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="p-5 overflow-y-auto">
                <p className="text-sm text-slate-500 mb-4">
                  Tu ne sais pas quoi dire ? Choisis un moment, je te souffle une jolie phrase à lire à l'enfant. 🐉
                </p>

                {/* Bouton Surprends-moi */}
                <button
                  onClick={surprise}
                  className="w-full mb-4 py-3 rounded-2xl bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white font-display font-bold shadow-md hover:shadow-lg active:scale-95 transition-all flex items-center justify-center gap-2"
                >
                  <Wand2 className="w-5 h-5" />
                  Surprends-moi !
                </button>

                {/* Catégories */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {NARRATIVE_IDEAS.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => pickPhrase(cat)}
                      className={`text-sm font-bold px-3 py-1.5 rounded-full transition-all ${cat.color} ${
                        category?.id === cat.id ? 'ring-2 ring-offset-1 ring-slate-300 scale-105' : 'hover:scale-105'
                      }`}
                    >
                      {cat.emoji} {cat.label}
                    </button>
                  ))}
                </div>

                {/* Phrase proposée */}
                <AnimatePresence mode="wait">
                  {category && phrase ? (
                    <motion.div
                      key={phrase}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.2 }}
                      className="rounded-2xl bg-emerald-50 border-2 border-emerald-200 p-4"
                    >
                      <p className="text-emerald-900 text-lg leading-relaxed italic font-medium mb-3">
                        « {phrase} »
                      </p>
                      <div className="flex gap-2">
                        <button
                          onClick={() => pickPhrase(category)}
                          className="flex-1 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm flex items-center justify-center gap-2 transition-colors"
                        >
                          <Dice5 className="w-4 h-4" />
                          Une autre idée
                        </button>
                        <button
                          onClick={copyPhrase}
                          className="px-4 py-2.5 rounded-xl bg-white border-2 border-emerald-200 text-emerald-700 font-bold text-sm flex items-center justify-center gap-2 transition-colors hover:bg-emerald-50"
                        >
                          {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                          {copied ? 'Copié !' : 'Copier'}
                        </button>
                      </div>
                    </motion.div>
                  ) : (
                    <div className="rounded-2xl bg-slate-50 border-2 border-dashed border-slate-200 p-6 text-center text-slate-400 text-sm">
                      Choisis un moment de l'histoire ci-dessus ✨
                    </div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
