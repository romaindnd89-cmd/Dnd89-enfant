import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface Spark {
  id: number;
  x: number;
  y: number;
  hue: number;
  size: number;
}

const COLORS = ['#fbbf24', '#34d399', '#818cf8', '#f472b6', '#38bdf8'];

/**
 * Traînée d'étincelles magiques qui suit le curseur.
 * Sur téléphone, chaque toucher lâche une petite gerbe d'étincelles.
 * Désactivée si l'utilisateur préfère les animations réduites.
 */
export default function SparkleCursor() {
  const [sparks, setSparks] = useState<Spark[]>([]);
  const lastRef = useRef(0);
  const idRef = useRef(0);

  useEffect(() => {
    const fine = window.matchMedia('(pointer: fine)').matches;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) return;

    const spawn = (x: number, y: number, size: number) => {
      const id = idRef.current++;
      const spark: Spark = { id, x, y, hue: Math.floor(Math.random() * COLORS.length), size };
      setSparks((s) => [...s, spark]);
      setTimeout(() => {
        setSparks((s) => s.filter((sp) => sp.id !== id));
      }, 800);
    };

    const onMove = (e: MouseEvent) => {
      const now = performance.now();
      if (now - lastRef.current < 45) return; // throttle
      lastRef.current = now;
      spawn(e.clientX, e.clientY, 6 + Math.random() * 8);
    };

    // Un toucher (ou un clic) lâche une petite gerbe d'étincelles
    const onDown = (e: PointerEvent) => {
      for (let k = 0; k < 7; k++) {
        const ang = (k / 7) * Math.PI * 2 + Math.random();
        const r = 10 + Math.random() * 26;
        spawn(e.clientX + Math.cos(ang) * r, e.clientY + Math.sin(ang) * r, 5 + Math.random() * 7);
      }
    };

    if (fine) window.addEventListener('mousemove', onMove);
    window.addEventListener('pointerdown', onDown);
    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('pointerdown', onDown);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-[55]" aria-hidden="true">
      <AnimatePresence>
        {sparks.map((s) => (
          <motion.div
            key={s.id}
            initial={{ opacity: 0.9, scale: 1 }}
            animate={{ opacity: 0, scale: 0.2, y: s.y + 18 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            style={{
              position: 'absolute',
              left: s.x,
              top: s.y,
              width: s.size,
              height: s.size,
              marginLeft: -s.size / 2,
              marginTop: -s.size / 2,
              borderRadius: '9999px',
              background: COLORS[s.hue],
              boxShadow: `0 0 10px 2px ${COLORS[s.hue]}`,
            }}
          />
        ))}
      </AnimatePresence>
    </div>
  );
}
