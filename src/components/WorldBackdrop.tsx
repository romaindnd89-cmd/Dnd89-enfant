import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { WORLDS, WorldKey } from '../theme/worlds';
import FantasyScene from './FantasyScene';
import AmbientParticles from './AmbientParticles';
import ParallaxForest from './ParallaxForest';

/**
 * Fond plein écran : le décor illustré du monde courant, légèrement assombri
 * pour garder les textes lisibles, avec des poussières de lumière.
 * Le décor change en fondu quand on change de monde.
 */
export default function WorldBackdrop({ world }: { world: WorldKey }) {
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

      {/* Forêt à étages au premier plan */}
      <ParallaxForest world={world} />

      {/* Particules du monde (braises, lucioles, feuilles, confettis) */}
      <AmbientParticles world={world} />
    </div>
  );
}
