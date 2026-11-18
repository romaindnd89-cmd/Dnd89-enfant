import React, { useMemo } from 'react';

/**
 * Bandeau de bébés dragons dans une forêt lumineuse. L'image glisse très
 * lentement de gauche à droite, des lucioles dansent par-dessus, et les bords
 * se fondent dans le décor.
 */
export default function DragonForestBanner({ className = '', hero = false, children }: { className?: string; hero?: boolean; children?: React.ReactNode }) {
  const flies = useMemo(
    () =>
      Array.from({ length: 9 }).map((_, i) => ({
        left: 6 + ((i * 29) % 88),
        top: 12 + ((i * 41) % 68),
        size: 3 + (i % 3),
        dur: 5 + (i % 4) * 1.6,
        delay: -((i * 1.3) % 6),
        drift: (i % 2 ? 1 : -1) * (14 + (i % 3) * 10),
      })),
    []
  );

  return (
    <div className={`${hero ? 'dragon-banner-hero rounded-2xl' : 'dragon-banner'} relative w-full overflow-hidden ${hero ? 'min-h-[17rem] sm:min-h-[20rem]' : 'h-44 sm:h-56 pointer-events-none'} ${className}`} aria-hidden={hero ? undefined : true}>
      <div className="dragon-banner-img absolute inset-0 pointer-events-none" />
      {hero && <div className="absolute inset-0 bg-gradient-to-b from-slate-950/55 via-slate-950/35 to-slate-950/70 pointer-events-none" />}
      {flies.map((f, i) => (
        <span
          key={i}
          className="particle-wander absolute rounded-full"
          style={{
            left: `${f.left}%`,
            top: `${f.top}%`,
            width: f.size,
            height: f.size,
            background: '#fef08a',
            boxShadow: '0 0 10px 3px rgba(253,224,71,0.8)',
            animationDuration: `${f.dur}s`,
            animationDelay: `${f.delay}s`,
            ['--drift' as string]: `${f.drift}px`,
          }}
        />
      ))}
      {children}
    </div>
  );
}
