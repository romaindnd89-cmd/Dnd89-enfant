import { useEffect, useState } from 'react';

const KEY = 'dnd89:motion';

/** Choix enregistré par l'utilisateur : 'on', 'off', ou rien (on suit le téléphone). */
export function storedMotion(): 'on' | 'off' | null {
  try {
    const v = localStorage.getItem(KEY);
    return v === 'on' || v === 'off' ? v : null;
  } catch {
    return null;
  }
}

/** Vrai si les animations doivent être coupées. */
export function prefersReduced(): boolean {
  const v = storedMotion();
  if (v === 'on') return false;
  if (v === 'off') return true;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

export function applyMotion() {
  document.documentElement.dataset.motion = prefersReduced() ? 'off' : 'on';
}

export function setMotion(on: boolean) {
  try {
    localStorage.setItem(KEY, on ? 'on' : 'off');
  } catch {
    /* ignore */
  }
  applyMotion();
  window.dispatchEvent(new Event('dnd89-motion'));
}

if (typeof document !== 'undefined') applyMotion();

/** Pour les composants : se met à jour quand l'utilisateur change le réglage. */
export function useMotionReduced(): boolean {
  const [reduced, setReduced] = useState(prefersReduced);
  useEffect(() => {
    const f = () => setReduced(prefersReduced());
    window.addEventListener('dnd89-motion', f);
    return () => window.removeEventListener('dnd89-motion', f);
  }, []);
  return reduced;
}
