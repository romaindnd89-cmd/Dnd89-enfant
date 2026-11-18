import React, { useRef } from 'react';
import { Printer } from 'lucide-react';
import { printNodes } from '../lib/print';

/**
 * Carnet d'enquête à imprimer : des lignes pour noter les indices, les suspects
 * et les déductions au fil de l'histoire.
 */
export default function InvestigationNotebook({
  title,
  clueCount = 12,
  questions,
}: {
  title: string;
  clueCount?: number;
  questions: string[];
}) {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <div className="mt-10">
      <div ref={ref} className="print-card bg-white rounded-3xl border-2 border-slate-300 shadow-md overflow-hidden">
        <div className="bg-gradient-to-r from-amber-500 to-orange-600 text-white p-5 text-center">
          <div className="text-4xl mb-1">🔎</div>
          <h3 className="font-display text-2xl font-bold">Mon carnet d'enquête</h3>
          <p className="text-white/85 text-sm">{title}</p>
        </div>
        <div className="p-5 space-y-6">
          <div>
            <p className="text-xs font-bold text-slate-400 uppercase tracking-wide mb-2">Mes indices (j'écris ce que je trouve)</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
              {Array.from({ length: clueCount }).map((_, i) => (
                <div key={i} className="flex items-end gap-2">
                  <span className="font-display font-bold text-amber-600 w-6">{i + 1}.</span>
                  <span className="flex-1 border-b-2 border-slate-300 h-6" />
                </div>
              ))}
            </div>
          </div>
          <div>
            <p className="text-xs font-bold text-slate-400 uppercase tracking-wide mb-2">Mes questions et mes déductions</p>
            <div className="space-y-4">
              {questions.map((q) => (
                <div key={q}>
                  <p className="font-bold text-slate-700 text-sm">{q}</p>
                  <div className="border-b-2 border-slate-300 h-6" />
                  <div className="border-b-2 border-slate-300 h-6" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="text-center mt-4">
        <button
          onClick={() => ref.current && printNodes([ref.current])}
          className="inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-700 text-white font-bold py-3 px-6 rounded-full shadow-md"
        >
          <Printer className="w-5 h-5" /> Imprimer le carnet d'enquête
        </button>
      </div>
    </div>
  );
}
