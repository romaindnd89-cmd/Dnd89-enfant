import { useCallback, useEffect, useState } from 'react';

const KEY = 'dnd89:trophies';

export interface EarnedTrophy {
  id: string;
  date: string; // ISO
}

function read(): EarnedTrophy[] {
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function write(list: EarnedTrophy[]) {
  try {
    localStorage.setItem(KEY, JSON.stringify(list));
  } catch {
    /* ignore */
  }
}

export function useTrophies() {
  const [earned, setEarned] = useState<EarnedTrophy[]>([]);

  useEffect(() => {
    setEarned(read());
  }, []);

  const has = useCallback((id: string) => earned.some((t) => t.id === id), [earned]);

  const award = useCallback((id: string): boolean => {
    const current = read();
    if (current.some((t) => t.id === id)) return false; // déjà gagné
    const next = [...current, { id, date: new Date().toISOString() }];
    write(next);
    setEarned(next);
    return true; // nouvellement gagné
  }, []);

  return { earned, has, award };
}

/** Lecture simple sans réactivité. */
export function readEarnedTrophyIds(): string[] {
  return read().map((t) => t.id);
}

export function hasTrophy(id: string): boolean {
  return read().some((t) => t.id === id);
}
