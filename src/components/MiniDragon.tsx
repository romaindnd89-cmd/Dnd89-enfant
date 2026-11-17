import React from 'react';

export interface DragonSkin {
  body: string;
  belly: string;
  wing: string;
  horn: string;
}

export const DRAGON_SKINS: DragonSkin[] = [
  { body: '#22c55e', belly: '#bbf7d0', wing: '#7c3aed', horn: '#f59e0b' },
  { body: '#f97316', belly: '#fde68a', wing: '#be123c', horn: '#fef3c7' },
  { body: '#38bdf8', belly: '#e0f2fe', wing: '#6366f1', horn: '#fde68a' },
  { body: '#e879f9', belly: '#fae8ff', wing: '#7e22ce', horn: '#fde68a' },
];

/**
 * Petit dragon vu de profil, dessiné en SVG. Il regarde vers la droite.
 * Les ailes battent (classes CSS `dragon-wing`), et un petit souffle
 * de feu apparaît de temps en temps au bout du museau.
 */
export default function MiniDragon({
  size = 56,
  skin = DRAGON_SKINS[0],
  fire = true,
  fireDelay = 0,
  flapSpeed = 0.38,
}: {
  size?: number;
  skin?: DragonSkin;
  fire?: boolean;
  fireDelay?: number;
  flapSpeed?: number;
}) {
  return (
    <svg
      width={size}
      height={size * 0.64}
      viewBox="0 0 100 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      style={{ overflow: 'visible' }}
    >
      {/* Aile du fond */}
      <path
        className="dragon-wing"
        d="M40 30 C34 8 54 2 64 12 C56 14 50 20 48 30 Z"
        fill={skin.wing}
        opacity="0.65"
        style={{ animationDuration: `${flapSpeed}s`, animationDelay: `${flapSpeed / 2}s` }}
      />
      {/* Queue */}
      <path d="M26 40 C12 44 6 36 12 28 C14 33 20 35 28 34 Z" fill={skin.body} />
      <path d="M12 28 L6 25 L11 33 Z" fill={skin.horn} />
      {/* Pattes */}
      <path d="M36 46 L34 56 L41 56 L43 46 Z" fill={skin.body} />
      <path d="M52 46 L51 56 L58 56 L58 46 Z" fill={skin.body} />
      {/* Corps */}
      <ellipse cx="46" cy="38" rx="22" ry="13" fill={skin.body} />
      <ellipse cx="48" cy="43" rx="15" ry="8" fill={skin.belly} />
      {/* Cou et tête */}
      <path d="M58 34 C66 28 68 22 70 20 L78 28 C74 34 68 40 62 44 Z" fill={skin.body} />
      <circle cx="72" cy="24" r="11" fill={skin.body} />
      <ellipse cx="82" cy="28" rx="9" ry="6" fill={skin.body} />
      <ellipse cx="83" cy="31" rx="7" ry="3.2" fill={skin.belly} />
      {/* Cornes */}
      <path d="M66 16 L64 6 L71 14 Z" fill={skin.horn} />
      <path d="M73 14 L75 5 L79 15 Z" fill={skin.horn} />
      {/* Œil */}
      <circle cx="75" cy="22" r="3.2" fill="white" />
      <circle cx="76" cy="22.5" r="1.7" fill="#1f2937" />
      <circle cx="76.6" cy="21.8" r="0.6" fill="white" />
      {/* Narine et joue */}
      <circle cx="86" cy="26" r="1" fill="#14532d" opacity="0.7" />
      <circle cx="69" cy="28" r="2.6" fill="#fca5a5" opacity="0.7" />
      {/* Aile du devant */}
      <path
        className="dragon-wing"
        d="M44 30 C36 4 60 -2 70 10 C60 12 54 20 52 30 Z"
        fill={skin.wing}
        style={{ animationDuration: `${flapSpeed}s` }}
      />
      {/* Souffle de feu */}
      {fire && (
        <g className="dragon-fire" style={{ animationDelay: `${fireDelay}s` }}>
          <ellipse cx="96" cy="29" rx="6" ry="3.4" fill="#fb923c" />
          <ellipse cx="94" cy="29" rx="3.6" ry="2" fill="#fde047" />
        </g>
      )}
    </svg>
  );
}
