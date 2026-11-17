import React, { useEffect, useMemo } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';

/**
 * Décor enchanté et vivant, en profondeur :
 *  - ciel crépusculaire + aurore mouvante
 *  - étoiles qui scintillent + étoiles filantes
 *  - silhouettes de forêt sur plusieurs plans (parallaxe à la souris)
 *  - brume qui dérive + lucioles qui montent
 * Reste derrière le contenu ; le panneau "parchemin" garde les textes lisibles.
 */
export default function EnchantedBackground() {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { damping: 40, stiffness: 80 });
  const sy = useSpring(my, { damping: 40, stiffness: 80 });

  // Chaque plan bouge d'une amplitude différente (parallaxe)
  const farX = useTransform(sx, [-1, 1], [-8, 8]);
  const farY = useTransform(sy, [-1, 1], [-5, 5]);
  const midX = useTransform(sx, [-1, 1], [-22, 22]);
  const midY = useTransform(sy, [-1, 1], [-10, 10]);
  const nearX = useTransform(sx, [-1, 1], [-40, 40]);
  const nearY = useTransform(sy, [-1, 1], [-16, 16]);

  useEffect(() => {
    if (!window.matchMedia('(pointer: fine)').matches) return;
    const onMove = (e: MouseEvent) => {
      mx.set((e.clientX / window.innerWidth) * 2 - 1);
      my.set((e.clientY / window.innerHeight) * 2 - 1);
    };
    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, [mx, my]);

  const stars = useMemo(
    () =>
      Array.from({ length: 46 }).map((_, i) => ({
        left: (i * 97) % 100,
        top: (i * 53) % 62, // surtout en haut du ciel
        size: 1 + (i % 3),
        dur: 2.4 + (i % 5) * 0.7,
        delay: (i % 7) * 0.4,
      })),
    []
  );

  const fireflies = useMemo(
    () =>
      Array.from({ length: 18 }).map((_, i) => ({
        left: (i * 61) % 100,
        delay: (i % 9) * 1.3,
        dur: 10 + (i % 6) * 2,
        drift: i % 2 ? 30 : -30,
        color: ['#fde68a', '#86efac', '#a5b4fc'][i % 3],
        size: 3 + (i % 3),
      })),
    []
  );

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none" aria-hidden="true">
      {/* Ciel crépusculaire */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(180deg, #0b1026 0%, #141a3a 28%, #27224f 50%, #3a2a5e 66%, #4a3360 80%, #5b3a5a 100%)',
        }}
      />

      {/* Aurore mouvante */}
      <motion.div
        className="absolute -inset-1/4 opacity-30"
        style={{
          background:
            'conic-gradient(from 90deg at 50% 40%, #6d28d9, #0ea5e9, #10b981, #f59e0b, #db2777, #6d28d9)',
          filter: 'blur(110px)',
        }}
        animate={{ rotate: 360 }}
        transition={{ duration: 80, repeat: Infinity, ease: 'linear' }}
      />

      {/* Lueur chaude à l'horizon */}
      <div
        className="absolute bottom-0 left-0 right-0 h-1/2"
        style={{ background: 'radial-gradient(60% 90% at 50% 100%, rgba(245,158,11,0.28), transparent 70%)' }}
      />

      {/* Étoiles */}
      <motion.div className="absolute inset-0" style={{ x: farX, y: farY }}>
        {stars.map((s, i) => (
          <span
            key={i}
            className="star"
            style={{
              left: `${s.left}%`,
              top: `${s.top}%`,
              width: s.size,
              height: s.size,
              ['--dur' as string]: `${s.dur}s`,
              animationDelay: `${s.delay}s`,
            }}
          />
        ))}
        {/* Étoiles filantes */}
        <span className="shooting-star" style={{ left: '12%', top: '10%', ['--dur' as string]: '11s', ['--delay' as string]: '2s' }} />
        <span className="shooting-star" style={{ left: '62%', top: '6%', ['--dur' as string]: '15s', ['--delay' as string]: '8s' }} />
      </motion.div>

      {/* Grosse lune lumineuse */}
      <motion.div className="absolute" style={{ x: farX, y: farY, top: '8%', right: '12%' }}>
        <div
          className="w-24 h-24 rounded-full"
          style={{
            background: 'radial-gradient(circle at 35% 35%, #fff7e6, #fde68a 55%, #fbbf24 100%)',
            boxShadow: '0 0 60px 20px rgba(251,191,36,0.35)',
          }}
        />
      </motion.div>

      {/* Forêt - plan lointain (collines) */}
      <motion.svg
        className="absolute bottom-0 w-full"
        style={{ x: midX, y: midY, height: '38%' }}
        viewBox="0 0 1440 400"
        preserveAspectRatio="none"
      >
        <path d="M0 400 L0 230 Q 360 150 720 220 T 1440 210 L1440 400 Z" fill="#1e1b4b" opacity="0.85" />
      </motion.svg>

      {/* Forêt - plan proche (sapins) */}
      <motion.svg
        className="absolute bottom-0 w-full"
        style={{ x: nearX, y: nearY, height: '30%' }}
        viewBox="0 0 1440 300"
        preserveAspectRatio="none"
      >
        <path
          d="M0 300 L0 210
             L60 210 L95 150 L130 210 L175 130 L220 210 L270 160 L320 210
             L380 120 L440 210 L500 165 L560 210 L630 125 L700 210 L760 170
             L820 210 L890 130 L960 210 L1020 160 L1080 210 L1150 125 L1220 210
             L1290 165 L1360 210 L1410 150 L1440 210 L1440 300 Z"
          fill="#0f1830"
        />
      </motion.svg>

      {/* Brume qui dérive */}
      <motion.div
        className="absolute bottom-[12%] left-0 right-0 h-32 opacity-40"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(226,232,240,0.5), transparent)', filter: 'blur(26px)' }}
        animate={{ x: ['-25%', '25%', '-25%'] }}
        transition={{ duration: 26, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-[4%] left-0 right-0 h-24 opacity-30"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(226,232,240,0.45), transparent)', filter: 'blur(22px)' }}
        animate={{ x: ['20%', '-20%', '20%'] }}
        transition={{ duration: 32, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Lucioles qui montent */}
      {fireflies.map((f, i) => (
        <motion.span
          key={i}
          className="absolute rounded-full"
          style={{
            left: `${f.left}%`,
            bottom: '-5%',
            width: f.size,
            height: f.size,
            background: f.color,
            boxShadow: `0 0 8px 2px ${f.color}`,
          }}
          animate={{ y: ['0vh', '-95vh'], x: [0, f.drift, 0], opacity: [0, 1, 1, 0] }}
          transition={{ duration: f.dur, delay: f.delay, repeat: Infinity, ease: 'easeInOut' }}
        />
      ))}
    </div>
  );
}
