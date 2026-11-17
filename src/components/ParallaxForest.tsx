import React, { useEffect, useRef } from 'react';
import { WorldKey } from '../theme/worlds';

const TINT: Partial<Record<WorldKey, string>> = {
  renard: 'hue-rotate(-55deg) saturate(1.25)',
  lutins: 'hue-rotate(75deg) saturate(1.1)',
  volcan: 'hue-rotate(-100deg) saturate(1.3)',
  peaks: 'hue-rotate(30deg)',
};

/**
 * Trois couches de forêt enchantée en bas de l'écran. Elles glissent à des
 * vitesses différentes et bougent un peu quand on fait défiler la page,
 * pour donner de la profondeur. La teinte change selon le monde.
 */
export default function ParallaxForest({ world }: { world: WorldKey }) {
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let raf = 0;
    const update = () => {
      raf = 0;
      root.current?.style.setProperty('--sy', String(window.scrollY));
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      ref={root}
      className="parallax-forest absolute inset-x-0 bottom-0 h-[44vh] pointer-events-none"
      style={{ filter: TINT[world] ?? 'none' }}
    >
      <div className="pf-layer pf-far" />
      <div className="pf-layer pf-mid" />
      <div className="pf-layer pf-near" />
    </div>
  );
}
