import { useCallback, useEffect, useState } from 'react';

/**
 * Suivi de progression d'une aventure, mémorisé dans le navigateur.
 * On stocke la liste des chapitres terminés par aventure.
 */

const KEY = (campaignId: string) => `dnd89:progress:${campaignId}`;

function read(campaignId: string): string[] {
  try {
    const raw = localStorage.getItem(KEY(campaignId));
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export function useProgress(campaignId: string) {
  const [done, setDone] = useState<string[]>([]);

  useEffect(() => {
    setDone(read(campaignId));
  }, [campaignId]);

  const persist = useCallback(
    (next: string[]) => {
      setDone(next);
      try {
        localStorage.setItem(KEY(campaignId), JSON.stringify(next));
      } catch {
        /* ignore (navigation privée, quota, etc.) */
      }
    },
    [campaignId]
  );

  const toggle = useCallback(
    (chapterId: string) => {
      const next = done.includes(chapterId)
        ? done.filter((id) => id !== chapterId)
        : [...done, chapterId];
      persist(next);
    },
    [done, persist]
  );

  const reset = useCallback(() => persist([]), [persist]);

  const isDone = useCallback((chapterId: string) => done.includes(chapterId), [done]);

  return { done, toggle, reset, isDone };
}

/** Lecture simple (sans réactivité) pour afficher l'avancement sur une carte. */
export function readProgressCount(campaignId: string): number {
  return read(campaignId).length;
}
