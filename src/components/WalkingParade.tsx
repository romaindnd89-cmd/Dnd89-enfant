import React from 'react';
import DragonSprite from './DragonSprite';
import { useMotionReduced } from '../lib/motion';

/**
 * Une petite troupe qui traverse le bas de l'écran : un dragon qui court,
 * un renardeau, un lutin, un chevalier, un magicien et une luciole.
 * Elle ne gêne jamais les clics. Les personnages sautillent en marchant.
 */
const WALKERS = [
  { id: 'run', delay: 0, dur: 100 },
  { id: 'fox', delay: 7, dur: 110 },
  { id: 'elf', delay: 16, dur: 110 },
  { id: 'knight', delay: 23, dur: 110 },
  { id: 'wizard', delay: 31, dur: 110 },
  { id: 'firefly', delay: 22, dur: 110 },
];

const SIZES: Record<string, number> = { fox: 52, elf: 62, knight: 64, wizard: 68, firefly: 38 };

export default function WalkingParade() {
  const reduced = useMotionReduced();
  if (reduced) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 h-24 z-[44] pointer-events-none overflow-hidden" aria-hidden="true">
      {WALKERS.map((w, i) => (
        <div
          key={w.id}
          className="parade-walker"
          style={{ animationDuration: `${w.dur}s`, animationDelay: `${w.delay}s` }}
        >
          {w.id === 'run' ? (
            <div className="parade-hop" style={{ animationDuration: '0.4s' }}>
              <DragonSprite size={74} src="/art/dragon-run.png" ratio={242 / 260} speed={0.45} />
            </div>
          ) : w.id === 'firefly' ? (
            <div className="parade-float" style={{ marginBottom: 46 }}>
              <img src="/art/firefly.png" alt="" draggable={false} style={{ width: SIZES.firefly }} />
            </div>
          ) : (
            <div className="parade-hop" style={{ animationDelay: `${i * 0.13}s` }}>
              <img src={`/art/${w.id}.png`} alt="" draggable={false} style={{ height: SIZES[w.id], width: 'auto' }} />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
