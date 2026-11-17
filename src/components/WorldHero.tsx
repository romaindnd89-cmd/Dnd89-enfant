import React from 'react';
import { WORLDS, WorldKey } from '../theme/worlds';
import FantasyScene from './FantasyScene';

/**
 * Bandeau d'ouverture d'une aventure : le décor illustré du monde,
 * avec le titre gravé par-dessus.
 */
export default function WorldHero({
  world,
  overline,
  title,
  subtitle,
  badges,
}: {
  world: WorldKey;
  overline: string;
  title: string;
  subtitle: string;
  badges: string[];
}) {
  const w = WORLDS[world];

  return (
    <div className={`relative mb-12 rounded-2xl overflow-hidden shadow-xl bg-gradient-to-br ${w.fallback}`}>
      <FantasyScene world={world} className="absolute inset-0 w-full h-full" />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/35 to-slate-950/20" />

      <div className="relative z-10 px-6 py-16 sm:py-24 text-center">
        <p className="font-display text-amber-200/90 tracking-[0.35em] text-xs uppercase mb-4">{overline}</p>
        <h1 className="font-display text-3xl sm:text-5xl font-bold text-amber-50 tracking-wide leading-tight mb-4 drop-shadow-[0_2px_14px_rgba(0,0,0,0.9)]">
          {title}
        </h1>
        <p className="text-lg text-slate-100/90 max-w-2xl mx-auto mb-6 drop-shadow">{subtitle}</p>
        <div className="flex flex-wrap justify-center gap-2">
          {badges.map((b) => (
            <span
              key={b}
              className="font-display text-xs tracking-[0.15em] uppercase text-amber-100 border border-amber-200/40 bg-black/35 px-3 py-1.5 rounded-full"
            >
              {b}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
