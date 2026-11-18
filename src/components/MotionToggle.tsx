import React, { useState } from 'react';
import { Sparkles } from 'lucide-react';
import { setMotion, storedMotion, useMotionReduced } from '../lib/motion';

/**
 * Interrupteur des animations. Si le téléphone demande de les réduire
 * et que personne n'a encore choisi, une petite bulle explique comment les activer.
 */
export default function MotionToggle() {
  const reduced = useMotionReduced();
  const [hintSeen, setHintSeen] = useState(false);
  const showHint = reduced && storedMotion() === null && !hintSeen;

  return (
    <div className="relative">
      <button
        onClick={() => {
          setHintSeen(true);
          setMotion(reduced); // reduced -> on les active, sinon on les coupe
        }}
        aria-label={reduced ? 'Activer les animations' : 'Couper les animations'}
        aria-pressed={!reduced}
        title={reduced ? 'Activer les animations' : 'Couper les animations'}
        className={`w-11 h-11 rounded-full flex items-center justify-center border transition-colors ${
          reduced
            ? 'border-slate-500/50 bg-slate-900/60 text-slate-400'
            : 'border-amber-300/60 bg-amber-300/15 text-amber-200'
        }`}
      >
        <Sparkles className="w-5 h-5" />
        {reduced && <span className="absolute w-7 h-0.5 bg-slate-400 rotate-45 rounded" aria-hidden="true" />}
      </button>
      {showHint && (
        <div className="absolute right-0 top-14 w-60 rounded-2xl bg-white text-slate-700 text-sm p-3 shadow-xl border-2 border-amber-200 z-50">
          Les animations sont coupées par ton téléphone. Appuie sur ✨ pour les activer !
        </div>
      )}
    </div>
  );
}
