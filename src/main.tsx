import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);

/**
 * Les illustrations hébergées sur postimg.cc ont expiré. Plutôt qu'une image cassée,
 * on remplace seulement l'adresse de l'image (jamais la structure de la page, pour ne
 * pas gêner React) par un petit encadré qui dit clairement qu'il faut la remettre.
 */
window.addEventListener(
  'error',
  (e) => {
    const t = e.target;
    if (!(t instanceof HTMLImageElement) || !t.src.includes('postimg.cc') || t.dataset.fallback) return;
    t.dataset.fallback = '1';
    const label = ('Illustration à remettre : ' + (t.alt || 'image')).replace(/[<>&"]/g, ' ');
    const svg =
      '<svg xmlns="http://www.w3.org/2000/svg" width="800" height="300" viewBox="0 0 800 300">' +
      '<rect x="6" y="6" width="788" height="288" rx="24" fill="#f8fafc" stroke="#cbd5e1" stroke-width="4" stroke-dasharray="14 10"/>' +
      '<text x="400" y="140" text-anchor="middle" font-size="64">🖼️</text>' +
      '<text x="400" y="205" text-anchor="middle" font-family="sans-serif" font-size="26" fill="#94a3b8">' +
      label +
      '</text></svg>';
    t.removeAttribute('srcset');
    t.src = 'data:image/svg+xml;utf8,' + encodeURIComponent(svg);
  },
  true
);
