import React, { useMemo } from 'react';
import { WorldKey } from '../theme/worlds';

type Kind = 'embers' | 'fireflies' | 'leaves' | 'confetti';

const KIND: Partial<Record<WorldKey, Kind>> = {
  volcan: 'embers',
  peaks: 'embers',
  renard: 'leaves',
  lutins: 'confetti',
  hub: 'fireflies',
};

const LEAF = ['#e2702f', '#f5a623', '#c2410c', '#fbbf24'];
const CONFETTI = ['#fbbf24', '#34d399', '#f472b6', '#60a5fa', '#a78bfa'];

/**
 * Petites particules qui animent le fond selon le monde :
 * braises qui montent, lucioles qui flânent, feuilles qui tombent, confettis.
 * Tout est en CSS (transform / opacity) pour rester léger sur téléphone.
 */
export default function AmbientParticles({ world }: { world: WorldKey }) {
  const kind: Kind = KIND[world] ?? 'fireflies';
  const items = useMemo(
    () =>
      Array.from({ length: 20 }).map((_, i) => ({
        left: (i * 37 + 11) % 100,
        top: (i * 53 + 7) % 100,
        size: 3 + (i % 4) * 2,
        dur: 9 + (i % 7) * 2.2,
        delay: -((i * 1.7) % 12),
        drift: (i % 2 ? 1 : -1) * (20 + (i % 5) * 12),
        color: i,
      })),
    []
  );

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none ambient-particles">
      {/* Nuages qui dérivent lentement */}
      {[0, 1, 2].map((c) => (
        <span
          key={`c${c}`}
          className="cloud-drift absolute rounded-full"
          style={{
            top: `${10 + c * 22}%`,
            width: 220 + c * 90,
            height: 46 + c * 14,
            animationDuration: `${70 + c * 28}s`,
            animationDelay: `${-c * 31}s`,
          }}
        />
      ))}
      {/* Étoiles filantes */}
      {[0, 1].map((c) => (
        <span
          key={`s${c}`}
          className="shooting-star absolute"
          style={{ top: `${8 + c * 14}%`, left: `${35 + c * 30}%`, animationDelay: `${c * 6 + 3}s`, animationDuration: `${12 + c * 5}s` }}
        />
      ))}
      {items.map((p, i) => {
        if (kind === 'embers') {
          return (
            <span
              key={i}
              className="particle-rise absolute rounded-full"
              style={{
                left: `${p.left}%`,
                bottom: '-4%',
                width: p.size,
                height: p.size,
                background: i % 3 ? '#fb923c' : '#fde047',
                boxShadow: '0 0 10px 3px rgba(251,146,60,0.75)',
                animationDuration: `${p.dur}s`,
                animationDelay: `${p.delay}s`,
                ['--drift' as string]: `${p.drift}px`,
              }}
            />
          );
        }
        if (kind === 'leaves') {
          return (
            <span
              key={i}
              className="particle-fall absolute"
              style={{
                left: `${p.left}%`,
                top: '-5%',
                width: p.size * 2.2,
                height: p.size * 1.5,
                background: LEAF[i % LEAF.length],
                borderRadius: '70% 0 70% 0',
                opacity: 0.85,
                animationDuration: `${p.dur + 6}s`,
                animationDelay: `${p.delay}s`,
                ['--drift' as string]: `${p.drift * 2}px`,
              }}
            />
          );
        }
        if (kind === 'confetti') {
          return (
            <span
              key={i}
              className="particle-fall absolute"
              style={{
                left: `${p.left}%`,
                top: '-5%',
                width: p.size * 1.4,
                height: p.size * 0.8,
                background: CONFETTI[i % CONFETTI.length],
                borderRadius: 2,
                opacity: 0.9,
                animationDuration: `${p.dur + 3}s`,
                animationDelay: `${p.delay}s`,
                ['--drift' as string]: `${p.drift * 1.5}px`,
              }}
            />
          );
        }
        return (
          <span
            key={i}
            className="particle-wander absolute rounded-full"
            style={{
              left: `${p.left}%`,
              top: `${p.top}%`,
              width: p.size,
              height: p.size,
              background: '#fef08a',
              boxShadow: '0 0 12px 4px rgba(253,224,71,0.7)',
              animationDuration: `${p.dur}s`,
              animationDelay: `${p.delay}s`,
              ['--drift' as string]: `${p.drift}px`,
            }}
          />
        );
      })}
    </div>
  );
}
