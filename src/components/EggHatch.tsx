import React from 'react';

/**
 * Un œuf de dragon qui éclot en boucle : il tremble, se fendille,
 * laisse voir une petite tête, puis le dragonneau sort et salue.
 */
export default function EggHatch({ size = 180, className = '' }: { size?: number; className?: string }) {
  return (
    <div className={`egg-wobble mx-auto ${className}`} style={{ width: size }} aria-hidden="true">
      <div
        className="egg-hatch"
        style={{ width: size, height: size * (283 / 260) }}
      />
    </div>
  );
}
