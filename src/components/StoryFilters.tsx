import React from 'react';
import { User, Users, Sword, Zap, Clock, Hourglass, FilterX } from 'lucide-react';

/** Données de tri d'une aventure (indépendantes du texte affiché sur la carte). */
export interface StoryMeta {
  /** Nombre minimum et maximum de joueurs */
  players: [number, number];
  /** 1 = facile, 2 = moyen, 3 = costaud */
  level: 1 | 2 | 3;
  /** Durée typique en minutes : [courte, longue] */
  minutes: [number, number];
}

export interface Filters {
  players: 'all' | 1 | 2 | 3;
  level: 'all' | 1 | 2 | 3;
  time: 'all' | 'express' | 'court' | 'long';
}

export const NO_FILTER: Filters = { players: 'all', level: 'all', time: 'all' };

export function matchesFilters(m: StoryMeta, f: Filters): boolean {
  if (f.players !== 'all') {
    const ok = f.players === 3 ? m.players[1] >= 3 : m.players[0] <= f.players && f.players <= m.players[1];
    if (!ok) return false;
  }
  if (f.level !== 'all' && m.level !== f.level) return false;
  if (f.time !== 'all') {
    const mid = (m.minutes[0] + m.minutes[1]) / 2;
    const bucket = mid <= 45 ? 'express' : mid <= 120 ? 'court' : 'long';
    if (bucket !== f.time) return false;
  }
  return true;
}

function Chip({
  active,
  onClick,
  children,
  label,
}: {
  key?: string | number;
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
  label: string;
}) {
  return (
    <button
      onClick={onClick}
      aria-pressed={active}
      aria-label={label}
      className={`shrink-0 flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-sm font-bold transition-colors ${
        active
          ? 'border-amber-300 bg-amber-300/20 text-amber-100 shadow-[0_0_14px_-2px_rgba(251,191,36,0.6)]'
          : 'border-slate-500/40 bg-slate-900/40 text-slate-300 hover:border-amber-300/50'
      }`}
    >
      {children}
    </button>
  );
}

function Row({ icon, title, children }: { icon: React.ReactNode; title: string; children: React.ReactNode }) {
  return (
    <div>
      <div className="flex items-center gap-1.5 text-amber-200/80 text-xs font-display tracking-wider uppercase mb-1.5">
        {icon}
        {title}
      </div>
      <div className="flex flex-wrap gap-2">{children}</div>
    </div>
  );
}

/**
 * Filtres de l'accueil : nombre de joueurs, difficulté, durée.
 * Chaque puce est un bouton à bascule ; toucher la puce active remet « tous ».
 */
export default function StoryFilters({
  value,
  onChange,
  count,
  total,
}: {
  value: Filters;
  onChange: (f: Filters) => void;
  count: number;
  total: number;
}) {
  const set = <K extends keyof Filters>(k: K, v: Filters[K]) =>
    onChange({ ...value, [k]: value[k] === v ? 'all' : v });
  const active = value.players !== 'all' || value.level !== 'all' || value.time !== 'all';

  return (
    <div className="glass-dark backdrop-blur-md rounded-2xl p-3 sm:p-4 mb-6 space-y-3">
      <Row icon={<Users className="w-4 h-4" />} title="Joueurs">
        <Chip active={value.players === 1} onClick={() => set('players', 1)} label="1 joueur">
          <User className="w-4 h-4" /> 1
        </Chip>
        <Chip active={value.players === 2} onClick={() => set('players', 2)} label="2 joueurs">
          <Users className="w-4 h-4" /> 2
        </Chip>
        <Chip active={value.players === 3} onClick={() => set('players', 3)} label="3 joueurs ou plus">
          <Users className="w-4 h-4" /> 3+
        </Chip>
      </Row>

      <Row icon={<Sword className="w-4 h-4" />} title="Difficulté">
        {([1, 2, 3] as const).map((l) => (
          <Chip
            key={l}
            active={value.level === l}
            onClick={() => set('level', l)}
            label={['', 'Facile', 'Moyen', 'Costaud'][l]}
          >
            <span className="flex">
              {Array.from({ length: l }).map((_, i) => (
                <Sword key={i} className="w-4 h-4 -ml-0.5 first:ml-0" />
              ))}
            </span>
            {['', 'Facile', 'Moyen', 'Costaud'][l]}
          </Chip>
        ))}
      </Row>

      <Row icon={<Clock className="w-4 h-4" />} title="Durée">
        <Chip active={value.time === 'express'} onClick={() => set('time', 'express')} label="Express, moins de 45 minutes">
          <Zap className="w-4 h-4" /> Express
        </Chip>
        <Chip active={value.time === 'court'} onClick={() => set('time', 'court')} label="Court, de 1 à 2 heures">
          <Clock className="w-4 h-4" /> 1 à 2 h
        </Chip>
        <Chip active={value.time === 'long'} onClick={() => set('time', 'long')} label="Long, plus de 2 heures">
          <Hourglass className="w-4 h-4" /> 2 h et +
        </Chip>
      </Row>

      <div className="flex items-center justify-between pt-1 text-sm text-slate-300">
        <span>
          {count === total ? `${total} aventures` : `${count} aventure${count > 1 ? 's' : ''} sur ${total}`}
        </span>
        {active && (
          <button
            onClick={() => onChange(NO_FILTER)}
            className="flex items-center gap-1.5 text-amber-200 font-bold hover:text-amber-100"
          >
            <FilterX className="w-4 h-4" /> Tout afficher
          </button>
        )}
      </div>
    </div>
  );
}
