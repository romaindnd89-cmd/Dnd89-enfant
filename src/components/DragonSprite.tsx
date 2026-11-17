import React from 'react';

/** Teintes pour varier les couleurs d'un même dragon dessiné. */
export const DRAGON_TINTS = [
  'none',
  'hue-rotate(95deg) saturate(1.05)',
  'hue-rotate(190deg)',
  'hue-rotate(285deg) saturate(1.1)',
];

/**
 * Petit dragon dessiné (bande de 4 images : ailes en haut, mi-haut, en bas, mi-haut).
 * Les images défilent en boucle, ce qui fait battre les ailes.
 * Il regarde vers la droite ; le sens de vol est géré par le parent.
 */
export default function DragonSprite({
  size = 64,
  tint = 0,
  speed = 0.5,
}: {
  size?: number;
  tint?: number;
  speed?: number;
}) {
  return (
    <div
      aria-hidden="true"
      className="dragon-sprite"
      style={{
        width: size,
        height: size * (282 / 260),
        animationDuration: `${speed}s`,
        filter: DRAGON_TINTS[tint % DRAGON_TINTS.length],
      }}
    />
  );
}
