import React, { useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { WORLDS, WorldKey } from '../theme/worlds';
import FantasyScene from './FantasyScene';

/**
 * Fond plein écran : le décor illustré du monde courant, légèrement assombri
 * pour garder les textes lisibles, avec des poussières de lumière.
 * Le décor change en fondu quand on change de monde.
 */
export default function WorldBackdrop({ world }: { world: WorldKey }) {
  const motes = useMemo(
    () =>
      Array.from({ length: 18 }).map((_, i) => ({
        left: (i * 47) % 100,
        size: 2 + (i % 3),
        dur: 14 + (i % 7) * 3,
        delay: (i % 11) * 1.4,
        drift: i % 2 ? 40 : -40,
      })),
    []
  );

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none bg-slate-950" aria-hidden="true">
      <AnimatePresence>
        <motion.div
          key={world}
          className={`absolute inset-0 bg-gradient-to-b ${WORLDS[world].fallback}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2 }}
        >
          <FantasyScene world={world} className="absolute inset-0 w-full h-full" />
        </motion.div>
      </AnimatePresence>

      {/* Léger assombrissement pour la lisibilité + vignette */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/45 via-slate-950/20 to-slate-950/55" />
      <div
        className="absolute inset-0"
        style={{ background: 'radial-gradient(ellipse at 50% 40%, transparent 45%, rgba(2,6,23,0.6) 100%)' }}
      />

      {/* Poussières de lumière */}
      {motes.map((m, i) => (
        <motion.span
          key={i}
          className="absolute rounded-full bg-amber-100"
          style={{
            left: `${m.left}%`,
            bottom: '-3%',
            width: m.size,
            height: m.size,
            boxShadow: '0 0 8px 2px rgba(253,230,138,0.7)',
          }}
          animate={{ y: ['0vh', '-105vh'], x: [0, m.drift, 0], opacity: [0, 0.9, 0.9, 0] }}
          transition={{ duration: m.dur, delay: m.delay, repeat: Infinity, ease: 'linear' }}
        />
      ))}
    </div>
  );
}
