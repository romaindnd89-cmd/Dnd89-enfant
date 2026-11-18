import React, { useRef } from 'react';
import { Printer, MapPin, Users, Gem } from 'lucide-react';
import { printNodes } from '../lib/print';

export interface GalleryItem {
  kind: 'lieu' | 'personnage' | 'objet';
  name: string;
  emoji: string;
  description: string;
  /** Pour un objet : ce qu'il fait dans le jeu */
  effect?: string;
  /** Chemin d'une illustration (ex. /art/galerie/gaston.webp). Sans image : une vignette colorée. */
  image?: string;
}

const KINDS = [
  { kind: 'lieu' as const, title: 'Les lieux', icon: MapPin, hint: "À montrer à l'enfant quand vous arrivez à cet endroit." },
  { kind: 'personnage' as const, title: 'Les personnages', icon: Users, hint: "À montrer quand l'enfant rencontre le personnage." },
  { kind: 'objet' as const, title: 'Les objets à imprimer', icon: Gem, hint: 'Cartes à imprimer et à découper : on les pose sur la table quand l\'enfant les trouve.' },
];

/**
 * Galerie de fin d'histoire : lieux, personnages et objets, chacun avec sa
 * description écrite. Les objets s'impriment en cartes à découper.
 */
export default function StoryGallery({
  title,
  intro,
  gradient,
  items,
}: {
  title: string;
  intro: string;
  /** classes Tailwind littérales, ex. "from-orange-300 to-rose-400" */
  gradient: string;
  items: GalleryItem[];
}) {
  const root = useRef<HTMLDivElement>(null);

  const printAllObjects = () => {
    const nodes: HTMLElement[] = root.current ? Array.from(root.current.querySelectorAll<HTMLElement>('[data-objet]')) : [];
    printNodes(nodes);
  };
  const printOne = (el: HTMLElement | null) => el && printNodes([el]);

  return (
    <section id="galerie" className="mt-16">
      <h2 className="font-display text-4xl font-bold text-slate-800 mb-4 border-b-4 border-slate-200 pb-2">
        🖼️ Galerie : {title}
      </h2>
      <p className="text-slate-600 mb-8">{intro}</p>

      <div ref={root} className="space-y-12">
        {KINDS.map(({ kind, title: t, icon: Icon, hint }) => {
          const list = items.filter((i) => i.kind === kind);
          if (list.length === 0) return null;
          return (
            <div key={kind}>
              <div className="flex flex-wrap items-center justify-between gap-3 mb-2">
                <h3 className="font-display text-2xl font-bold text-slate-700 flex items-center gap-2">
                  <Icon className="w-6 h-6 text-slate-500" /> {t}
                </h3>
                {kind === 'objet' && (
                  <button
                    onClick={printAllObjects}
                    className="flex items-center gap-2 bg-slate-800 hover:bg-slate-900 text-white font-bold py-2 px-4 rounded-full text-sm"
                  >
                    <Printer className="w-4 h-4" /> Imprimer toutes les cartes
                  </button>
                )}
              </div>
              <p className="text-slate-500 text-sm mb-4">{hint}</p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {list.map((it) => (
                  <article
                    key={it.name}
                    {...(kind === 'objet' ? { 'data-objet': true } : {})}
                    className="print-card bg-white rounded-2xl border-2 border-slate-200 shadow-sm overflow-hidden flex flex-col"
                  >
                    <div className={`relative h-44 bg-gradient-to-br ${gradient} flex items-center justify-center overflow-hidden`}>
                      {it.image ? (
                        <img src={it.image} alt={it.name} className="w-full h-full object-cover" loading="lazy" />
                      ) : (
                        <span className="text-7xl drop-shadow-lg" aria-hidden="true">{it.emoji}</span>
                      )}
                    </div>
                    <div className="p-4 flex-1 flex flex-col">
                      <h4 className="font-display font-bold text-lg text-slate-800">{it.emoji} {it.name}</h4>
                      <p className="text-slate-600 mt-1 text-[15px] leading-relaxed">{it.description}</p>
                      {it.effect && (
                        <p className="mt-2 text-sm rounded-xl bg-amber-50 border border-amber-200 text-amber-900 px-3 py-2">
                          <strong>Dans le jeu :</strong> {it.effect}
                        </p>
                      )}
                      {kind === 'objet' && (
                        <button
                          onClick={(e) => printOne((e.currentTarget.closest('article') as HTMLElement) ?? null)}
                          className="print:hidden mt-3 self-start flex items-center gap-2 text-slate-600 hover:text-slate-900 text-sm font-bold"
                        >
                          <Printer className="w-4 h-4" /> Imprimer cette carte
                        </button>
                      )}
                    </div>
                  </article>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
