import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { Printer } from 'lucide-react';

/**
 * Kit imprimable d'une aventure : plusieurs pages A4 (livret du MJ, fiche, cartes, écran, dés...).
 *
 * Les pages ne sont montées qu'au moment d'imprimer, dans #kit-print-root (sous <body>) : le CSS
 * d'impression cache tout le reste. On attend que les images soient décodées, puis window.print()
 * ouvre la boîte d'impression : « Enregistrer au format PDF » donne le PDF, ou on imprime directement.
 */
export default function KitImprimable({
  id = 'kit',
  title,
  intro,
  contents,
  buttonClass,
  accentClass,
  pages,
}: {
  id?: string;
  title: string;
  intro: string;
  /** Contenu du kit, en une ligne par page : [emoji, libellé] */
  contents: [string, string][];
  /** Classes Tailwind LITTÉRALES du bouton, ex. "bg-orange-600 hover:bg-orange-700" */
  buttonClass: string;
  /** Classes Tailwind LITTÉRALES de l'accent, ex. "text-orange-600" */
  accentClass: string;
  pages: React.ReactNode;
}) {
  const [printing, setPrinting] = useState(false);
  const [root, setRoot] = useState<HTMLElement | null>(null);

  const start = () => {
    // Un éventuel #print-root laissé par l'impression d'une carte ou d'une fiche masquerait le kit.
    document.getElementById('print-root')?.replaceChildren();
    let el = document.getElementById('kit-print-root');
    if (!el) {
      el = document.createElement('div');
      el.id = 'kit-print-root';
      document.body.appendChild(el);
    }
    setRoot(el);
    setPrinting(true);
  };

  useEffect(() => {
    if (!printing || !root) return;
    let cancelled = false;
    const done = () => setPrinting(false);
    window.addEventListener('afterprint', done, { once: true });
    (async () => {
      await new Promise<void>((r) => requestAnimationFrame(() => requestAnimationFrame(() => r())));
      const waits: Promise<unknown>[] = [];
      const imgs = root.getElementsByTagName('img');
      for (let n = 0; n < imgs.length; n++) {
        const img = imgs[n];
        waits.push(img.decode ? img.decode().catch(() => undefined) : Promise.resolve());
      }
      await Promise.all(waits);
      if (!cancelled) window.print();
    })();
    return () => {
      cancelled = true;
      window.removeEventListener('afterprint', done);
    };
  }, [printing, root]);

  return (
    <section id={id}>
      <h2 className="font-display text-3xl font-bold text-slate-800 mb-4 flex items-center gap-3">
        <Printer className={`w-8 h-8 ${accentClass}`} />
        Kit imprimable : {title}
      </h2>
      <p className="text-slate-600 mb-5">{intro}</p>
      <ul className="grid sm:grid-cols-2 gap-2 mb-6">
        {contents.map(([emoji, label]) => (
          <li key={label} className="flex items-center gap-3 rounded-xl bg-white border-2 border-slate-200 px-4 py-2.5 text-slate-700">
            <span className="text-2xl" aria-hidden="true">{emoji}</span>
            <span className="font-medium">{label}</span>
          </li>
        ))}
      </ul>
      <div className="flex flex-wrap items-center gap-4">
        <button
          onClick={start}
          className={`flex items-center gap-2 ${buttonClass} text-white font-bold py-3 px-6 rounded-full transition-colors shadow-md`}
        >
          <Printer className="w-5 h-5" />
          Imprimer le kit ({contents.length} pages)
        </button>
        <span className="text-sm text-slate-500">Dans la fenêtre d'impression, choisis « Enregistrer au format PDF » pour garder le fichier.</span>
      </div>
      {printing && root && createPortal(<div className="kit-pages">{pages}</div>, root)}
    </section>
  );
}
