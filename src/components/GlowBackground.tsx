import React, { useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'motion/react';

/**
 * Fond lumineux animé et doux : des halos de couleur qui flottent
 * lentement derrière le contenu. Pensé pour rester discret et féérique,
 * sans gêner la lecture.
 */

interface Orb {
  color: string;
  size: number;
  top: string;
  left: string;
  duration: number;
  delay: number;
}

const defaultOrbs: Orb[] = [
  { color: 'bg-emerald-300', size: 420, top: '-6%', left: '-8%', duration: 18, delay: 0 },
  { color: 'bg-indigo-300', size: 380, top: '10%', left: '70%', duration: 22, delay: 1.5 },
  { color: 'bg-amber-200', size: 340, top: '55%', left: '-5%', duration: 20, delay: 0.8 },
  { color: 'bg-rose-200', size: 360, top: '65%', left: '65%', duration: 24, delay: 2.2 },
  { color: 'bg-sky-200', size: 300, top: '35%', left: '35%', duration: 26, delay: 1 },
];

export default function GlowBackground({ orbs = defaultOrbs }: { orbs?: Orb[] }) {
  // Halo lumineux qui suit la souris (adouci par un ressort)
  const mx = useMotionValue(-1000);
  const my = useMotionValue(-1000);
  const sx = useSpring(mx, { damping: 30, stiffness: 120 });
  const sy = useSpring(my, { damping: 30, stiffness: 120 });

  useEffect(() => {
    if (!window.matchMedia('(pointer: fine)').matches) return;
    const onMove = (e: MouseEvent) => {
      mx.set(e.clientX);
      my.set(e.clientY);
    };
    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, [mx, my]);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none" aria-hidden="true">
      {/* Voile dégradé de base */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-slate-50 to-emerald-50/40" />

      {/* Aurore mouvante */}
      <motion.div
        className="absolute -inset-1/4 opacity-40"
        style={{
          background:
            'conic-gradient(from 0deg at 50% 50%, #c7d2fe, #bbf7d0, #fde68a, #fbcfe8, #bae6fd, #c7d2fe)',
          filter: 'blur(90px)',
        }}
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
      />

      {/* Halo qui suit la souris */}
      <motion.div
        className="absolute w-[380px] h-[380px] rounded-full"
        style={{
          x: sx,
          y: sy,
          marginLeft: -190,
          marginTop: -190,
          background: 'radial-gradient(circle, rgba(255,255,255,0.55) 0%, transparent 70%)',
        }}
      />

      {orbs.map((orb, i) => (
        <motion.div
          key={i}
          className={`absolute rounded-full ${orb.color} blur-3xl`}
          style={{
            width: orb.size,
            height: orb.size,
            top: orb.top,
            left: orb.left,
            opacity: 0.35,
          }}
          animate={{
            x: [0, 40, -30, 0],
            y: [0, -35, 25, 0],
            scale: [1, 1.15, 0.95, 1],
            opacity: [0.28, 0.42, 0.3, 0.28],
          }}
          transition={{
            duration: orb.duration,
            delay: orb.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}

      {/* Fines étincelles scintillantes */}
      {Array.from({ length: 14 }).map((_, i) => {
        const left = (i * 37) % 100;
        const top = (i * 53) % 100;
        return (
          <motion.div
            key={`spark-${i}`}
            className="absolute w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_8px_2px_rgba(255,255,255,0.8)]"
            style={{ left: `${left}%`, top: `${top}%` }}
            animate={{ opacity: [0, 1, 0], scale: [0.5, 1.3, 0.5] }}
            transition={{
              duration: 2.5 + (i % 4),
              delay: (i % 7) * 0.6,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        );
      })}
    </div>
  );
}
