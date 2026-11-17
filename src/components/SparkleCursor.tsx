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
 * Désactivée sur écrans tactiles (pas de souris) et si l'utilisateur
 * préfère les animations réduites.
 */
export default function SparkleCursor() {
  const [sparks, setSparks] = useState<Spark[]>([]);
  const lastRef = useRef(0);
  const idRef = useRef(0);

  useEffect(() => {
    const fine = window.matchMedia('(pointer: fine)').matches;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!fine || reduced) return;

    const onMove = (e: MouseEvent) => {
      const now = performance.now();
      if (now - lastRef.current < 45) return; // throttle
      lastRef.current = now;
      const id = idRef.current++;
      const spark: Spark = {
        id,
        x: e.clientX,
        y: e.clientY,
        hue: Math.floor(Math.random() * COLORS.length),
        size: 6 + Math.random() * 8,
      };
      setSparks((s) => [...s, spark]);
      setTimeout(() => {
        setSparks((s) => s.filter((sp) => sp.id !== id));
      }, 800);
    };

    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
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
