import React from 'react';

/** Teintes pour varier les couleurs d'un même dragon dessiné. */
export const DRAGON_TINTS = [
  'none',
  'hue-rotate(95deg) saturate(1.05)',
  'hue-rotate(190deg)',
  'hue-rotate(285deg) saturate(1.1)',
];

/**
 * Animation image par image : une bande de 4 images qui défile en boucle.
 * Par défaut : le dragon qui vole (ailes en haut, mi-haut, en bas, mi-haut).
 * Les images regardent vers la droite ; le sens est géré par le parent.
 */
export default function DragonSprite({
  size = 64,
  tint = 0,
  speed = 0.5,
  src = '/art/dragon-fly.png',
  ratio = 282 / 260,
}: {
  size?: number;
  tint?: number;
  speed?: number;
  src?: string;
  ratio?: number;
}) {
  return (
    <div
      aria-hidden="true"
      className="dragon-sprite"
      style={{
        width: size,
        height: size * ratio,
        backgroundImage: `url('${src}')`,
        animationDuration: `${speed}s`,
        filter: DRAGON_TINTS[tint % DRAGON_TINTS.length],
      }}
    />
  );
}
