import React from 'react';
import { ReadAloud } from './StoryBlocks';

export interface ProloguePage {
  title: string;
  paragraphs: string[];
}

/**
 * Ouverture de l'histoire, à lire à voix haute juste avant le chapitre 1,
 * comme les premières pages d'un roman. Chaque « page » est un encadré à lire
 * d'une traite, avec une pause entre deux.
 */
export default function Prologue({ title, pages }: { title: string; pages: ProloguePage[] }) {
  return (
    <section id="prologue" className="mt-4">
      <h2 className="font-display text-4xl font-bold text-slate-800 mb-3 border-b-4 border-amber-300 pb-2">
        📖 Prologue : {title}
      </h2>
      <p className="text-slate-600 mb-2 rounded-xl bg-amber-50 border border-amber-200 px-4 py-3 text-[15px]">
        <strong>C'est ici que l'histoire commence.</strong> Installe tout le monde, prends ta plus belle voix de
        conteur et lis ces pages à voix haute, avec une petite pause entre chacune. Le chapitre 1 suit juste après.
      </p>
      {pages.map((page) => (
      <React.Fragment key={page.title}>
        <ReadAloud title={page.title}>
          {page.paragraphs.map((t, i) => (
            <p key={i} className={i === 0 ? '' : 'mt-4'}>
              {t}
            </p>
          ))}
        </ReadAloud>
      </React.Fragment>
      ))}
    </section>
  );
}
