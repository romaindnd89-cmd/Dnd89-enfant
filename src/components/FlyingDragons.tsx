import React, { useEffect, useMemo, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import DragonSprite from './DragonSprite';
import { useMotionReduced } from '../lib/motion';

interface Flyer {
  top: number;     // % de la hauteur
  size: number;    // px
  dur: number;     // secondes pour traverser l'écran
  delay: number;
  ltr: boolean;    // sens de vol
  skin: number;
}

interface Burst {
  id: number;
  x: number;
  y: number;
}

const FLYERS: Flyer[] = [
  { top: 16, size: 72, dur: 26, delay: 2, ltr: true, skin: 0 },
  { top: 48, size: 56, dur: 34, delay: 12, ltr: false, skin: 1 },
  { top: 72, size: 64, dur: 30, delay: 22, ltr: true, skin: 2 },
  { top: 30, size: 48, dur: 40, delay: 30, ltr: false, skin: 3 },
];

/**
 * Une petite escadrille de dragons qui traverse l'écran en permanence.
 * Ils ne bloquent jamais les clics : un toucher posé sur l'un d'eux déclenche
 * simplement un « Rooar ! » et une gerbe d'étincelles.
 */
export default function FlyingDragons() {
  const refs = useRef<(HTMLDivElement | null)[]>([]);
  const [bursts, setBursts] = useState<Burst[]>([]);
  const idRef = useRef(0);
  const reduced = useMotionReduced();

  useEffect(() => {
    const onDown = (e: PointerEvent) => {
      refs.current.forEach((el) => {
        if (!el) return;
        const r = el.getBoundingClientRect();
        const pad = 14;
        if (
          e.clientX >= r.left - pad &&
          e.clientX <= r.right + pad &&
          e.clientY >= r.top - pad &&
          e.clientY <= r.bottom + pad
        ) {
          const id = idRef.current++;
          setBursts((b) => [...b, { id, x: r.left + r.width / 2, y: r.top + r.height / 2 }]);
          el.classList.remove('dragon-loop');
          void el.offsetWidth; // relance l'animation
          el.classList.add('dragon-loop');
          setTimeout(() => setBursts((b) => b.filter((x) => x.id !== id)), 1100);
        }
      });
    };
    window.addEventListener('pointerdown', onDown);
    return () => window.removeEventListener('pointerdown', onDown);
  }, []);

  const flyers = useMemo(() => FLYERS, []);
  if (reduced) return null;

  return (
    <div className="fixed inset-0 z-[45] pointer-events-none overflow-hidden" aria-hidden="true">
      {flyers.map((f, i) => (
        <div
          key={i}
          className={f.ltr ? 'dragon-flight-ltr' : 'dragon-flight-rtl'}
          style={{ top: `${f.top}%`, animationDuration: `${f.dur}s`, animationDelay: `${f.delay}s` }}
        >
          <div className="dragon-bob" style={{ animationDelay: `${i * 0.7}s` }}>
            <div
              ref={(el) => {
                refs.current[i] = el;
              }}
              style={{ transform: f.ltr ? undefined : 'scaleX(-1)' }}
            >
              <div className="dragon-inner">
                <DragonSprite size={f.size} tint={f.skin} speed={0.45 + (i % 3) * 0.08} />
              </div>
            </div>
          </div>
        </div>
      ))}

      <AnimatePresence>
        {bursts.map((b) => (
          <div key={b.id} className="absolute" style={{ left: b.x, top: b.y }}>
            {['✨', '🔥', '⭐', '✨', '🔥', '💫'].map((s, k) => (
              <motion.span
                key={k}
                className="absolute text-lg"
                initial={{ opacity: 1, x: 0, y: 0, scale: 0.6 }}
                animate={{
                  opacity: 0,
                  x: Math.cos((k / 6) * Math.PI * 2) * 54,
                  y: Math.sin((k / 6) * Math.PI * 2) * 54,
                  scale: 1.3,
                }}
                transition={{ duration: 0.9, ease: 'easeOut' }}
              >
                {s}
              </motion.span>
            ))}
            <motion.span
              className="absolute -top-10 -left-8 font-display font-bold text-amber-200 text-xl whitespace-nowrap drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)]"
              initial={{ opacity: 0, y: 6, scale: 0.6 }}
              animate={{ opacity: [0, 1, 1, 0], y: -14, scale: 1.1 }}
              transition={{ duration: 1, ease: 'easeOut' }}
            >
              Rooar !
            </motion.span>
          </div>
        ))}
      </AnimatePresence>
    </div>
  );
}
