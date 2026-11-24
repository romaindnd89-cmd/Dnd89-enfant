import React from 'react';

/**
 * Patrons de dés à découper, plier et coller. Dessinés en SVG à taille réelle (en mm).
 * Les traits pleins se découpent, les pointillés se plient.
 * Chaque face porte un numéro différent : le dé est équitable quel que soit l'ordre.
 */

type Pt = [number, number];
type Face = { pts: Pt[]; label: string; pips?: number };

const key = (a: Pt, b: Pt) => {
  const f = (p: Pt) => `${p[0].toFixed(2)},${p[1].toFixed(2)}`;
  return [f(a), f(b)].sort().join('|');
};

/** Arêtes partagées par deux faces = plis (pointillés) ; les autres = découpe (trait plein). */
function edges(faces: Face[]) {
  const map = new Map<string, { a: Pt; b: Pt; n: number }>();
  faces.forEach(({ pts }) => {
    pts.forEach((p, i) => {
      const q = pts[(i + 1) % pts.length];
      const k = key(p, q);
      const e = map.get(k);
      if (e) e.n += 1;
      else map.set(k, { a: p, b: q, n: 1 });
    });
  });
  return Array.from(map.values());
}

const centroid = (pts: Pt[]): Pt => [
  pts.reduce((s, p) => s + p[0], 0) / pts.length,
  pts.reduce((s, p) => s + p[1], 0) / pts.length,
];

function Lines({ faces }: { faces: Face[] }) {
  return (
    <>
      {edges(faces).map((e, i) => (
        <line
          key={i}
          x1={e.a[0]}
          y1={e.a[1]}
          x2={e.b[0]}
          y2={e.b[1]}
          stroke={e.n > 1 ? '#94a3b8' : '#0f172a'}
          strokeWidth={e.n > 1 ? 0.35 : 0.6}
          strokeDasharray={e.n > 1 ? '1.6 1.2' : undefined}
        />
      ))}
    </>
  );
}

type Tab = { face: number; edge: number; letter: string };

/** Languette trapézoïdale collée sur une arête de découpe, vers l'extérieur de la face. */
function Tabs({ faces, tabs }: { faces: Face[]; tabs: Tab[] }) {
  const H = 6; // hauteur de la languette (mm)
  return (
    <>
      {tabs.map((t, i) => {
        const pts = faces[t.face].pts;
        const a = pts[t.edge];
        const b = pts[(t.edge + 1) % pts.length];
        const c = centroid(pts);
        const dx = b[0] - a[0];
        const dy = b[1] - a[1];
        const len = Math.hypot(dx, dy);
        let nx = -dy / len;
        let ny = dx / len;
        const mx = (a[0] + b[0]) / 2;
        const my = (a[1] + b[1]) / 2;
        if ((c[0] - mx) * nx + (c[1] - my) * ny > 0) {
          nx = -nx;
          ny = -ny;
        }
        const k = Math.min(0.28 * len, H * 1.2);
        const ux = dx / len;
        const uy = dy / len;
        const a2: Pt = [a[0] + ux * k + nx * H, a[1] + uy * k + ny * H];
        const b2: Pt = [b[0] - ux * k + nx * H, b[1] - uy * k + ny * H];
        return (
          <g key={i}>
            <polygon points={[a, a2, b2, b].map((q) => q.join(',')).join(' ')} fill="#fde68a" stroke="#0f172a" strokeWidth={0.5} />
            <text x={mx + nx * H * 0.55} y={my + ny * H * 0.55 + 1.3} textAnchor="middle" fontSize="3.6" fontWeight="700" fill="#92400e" fontFamily="sans-serif">
              {t.letter}
            </text>
          </g>
        );
      })}
    </>
  );
}

/** Lettre du bord sur lequel se colle la languette de même lettre. */
function EdgeLetters({ faces, marks }: { faces: Face[]; marks: Tab[] }) {
  return (
    <>
      {marks.map((t, i) => {
        const pts = faces[t.face].pts;
        const a = pts[t.edge];
        const b = pts[(t.edge + 1) % pts.length];
        const c = centroid(pts);
        const mx = (a[0] + b[0]) / 2;
        const my = (a[1] + b[1]) / 2;
        const d = Math.hypot(c[0] - mx, c[1] - my);
        const x = mx + ((c[0] - mx) / d) * 3.4;
        const y = my + ((c[1] - my) / d) * 3.4;
        return (
          <text key={i} x={x} y={y + 1.2} textAnchor="middle" fontSize="3.6" fontWeight="700" fill="#92400e" fontFamily="sans-serif">
            {t.letter}
          </text>
        );
      })}
    </>
  );
}

/** D20 : bande de 10 triangles, 5 triangles au-dessus, 5 en dessous. */
export function D20Net() {
  const s = 30;
  const h = (s * Math.sqrt(3)) / 2;
  const M = 8;
  const ox = M;
  const oy = h + M;
  const faces: Face[] = [];
  const P = (x: number, y: number): Pt => [ox + x, oy + y];
  for (let m = 0; m < 5; m++) {
    faces.push({ pts: [P(m * s + s / 2, 0), P(m * s + 1.5 * s, 0), P(m * s + s, -h)], label: '' }); // dessus
    faces.push({ pts: [P(m * s, h), P((m + 1) * s, h), P(m * s + s / 2, 0)], label: '' }); // bande (haut)
    faces.push({ pts: [P(m * s + s / 2, 0), P(m * s + 1.5 * s, 0), P(m * s + s, h)], label: '' }); // bande (bas)
    faces.push({ pts: [P(m * s, h), P((m + 1) * s, h), P(m * s + s / 2, 2 * h)], label: '' }); // dessous
  }
  faces.forEach((f, i) => {
    const n = i + 1;
    f.label = n === 6 || n === 9 ? `${n}.` : `${n}`;
  });
  const L = 'ABCDEFGHIJK';
  const tabs: Tab[] = [];
  const marks: Tab[] = [];
  for (let m = 0; m < 5; m++) {
    tabs.push({ face: 4 * m, edge: 1, letter: L[m] }); // dessus : bord droit
    marks.push({ face: 4 * ((m + 1) % 5), edge: 2, letter: L[m] }); // reçu par le bord gauche du suivant
    tabs.push({ face: 4 * m + 3, edge: 1, letter: L[5 + m] }); // dessous : bord droit
    marks.push({ face: 4 * ((m + 1) % 5) + 3, edge: 2, letter: L[5 + m] });
  }
  tabs.push({ face: 1, edge: 2, letter: 'K' }); // bout gauche de la bande
  marks.push({ face: 4 * 4 + 2, edge: 1, letter: 'K' }); // bout droit de la bande
  const w = 5.5 * s + 2 * M;
  const hh = 3 * h + 2 * M;
  return (
    <svg width={`${w}mm`} height={`${hh}mm`} viewBox={`0 0 ${w} ${hh}`} role="img" aria-label="Patron de dé à 20 faces avec languettes">
      {faces.map((f, i) => (
        <polygon key={i} points={f.pts.map((p) => p.join(',')).join(' ')} fill="#fff7ed" />
      ))}
      <Tabs faces={faces} tabs={tabs} />
      <Lines faces={faces} />
      <EdgeLetters faces={faces} marks={marks} />
      {faces.map((f, i) => {
        const c = centroid(f.pts);
        return (
          <text key={i} x={c[0]} y={c[1] + 2.6} textAnchor="middle" fontSize="8" fontWeight="700" fill="#9a3412" fontFamily="sans-serif">
            {f.label}
          </text>
        );
      })}
    </svg>
  );
}

const PIPS: Record<number, Pt[]> = {
  1: [[0.5, 0.5]],
  2: [[0.28, 0.28], [0.72, 0.72]],
  3: [[0.28, 0.28], [0.5, 0.5], [0.72, 0.72]],
  4: [[0.28, 0.28], [0.72, 0.28], [0.28, 0.72], [0.72, 0.72]],
  5: [[0.28, 0.28], [0.72, 0.28], [0.5, 0.5], [0.28, 0.72], [0.72, 0.72]],
  6: [[0.28, 0.25], [0.72, 0.25], [0.28, 0.5], [0.72, 0.5], [0.28, 0.75], [0.72, 0.75]],
};

const d6Tabs: Tab[] = [
  { face: 0, edge: 0, letter: 'A' }, // 1 haut
  { face: 0, edge: 3, letter: 'B' }, // 1 gauche
  { face: 0, edge: 1, letter: 'C' }, // 1 droite
  { face: 3, edge: 3, letter: 'D' }, // 5 gauche
  { face: 3, edge: 1, letter: 'E' }, // 5 droite
  { face: 4, edge: 3, letter: 'F' }, // 3 gauche
];
const d6Marks: Tab[] = [
  { face: 3, edge: 2, letter: 'A' }, // bas du 5
  { face: 4, edge: 0, letter: 'B' }, // haut du 3
  { face: 5, edge: 0, letter: 'C' }, // haut du 4
  { face: 4, edge: 2, letter: 'D' }, // bas du 3
  { face: 5, edge: 2, letter: 'E' }, // bas du 4
  { face: 5, edge: 1, letter: 'F' }, // droite du 4
];

/** D6 : croix de 6 carrés. Faces opposées : 1-6, 2-5, 3-4. */
export function D6Net() {
  const s = 24;
  const ox = 8;
  const oy = 8;
  const cells: [number, number, number][] = [
    [1, 0, 0],
    [2, 0, 1],
    [6, 0, 2],
    [5, 0, 3],
    [3, -1, 1],
    [4, 1, 1],
  ].map(([n, cx, cy]) => [n, cx + 1, cy] as [number, number, number]);
  const faces: Face[] = cells.map(([n, cx, cy]) => ({
    label: String(n),
    pips: n,
    pts: [
      [ox + cx * s, oy + cy * s],
      [ox + (cx + 1) * s, oy + cy * s],
      [ox + (cx + 1) * s, oy + (cy + 1) * s],
      [ox + cx * s, oy + (cy + 1) * s],
    ],
  }));
  const w = 3 * s + 16;
  const hh = 4 * s + 16;
  return (
    <svg width={`${w}mm`} height={`${hh}mm`} viewBox={`0 0 ${w} ${hh}`} role="img" aria-label="Patron de dé à 6 faces">
      {faces.map((f, i) => (
        <polygon key={i} points={f.pts.map((p) => p.join(',')).join(' ')} fill="#fff7ed" />
      ))}
      <Tabs faces={faces} tabs={d6Tabs} />
      <Lines faces={faces} />
      <EdgeLetters faces={faces} marks={d6Marks} />
      {faces.map((f, i) => {
        const [x0, y0] = f.pts[0];
        return PIPS[f.pips!].map((p, j) => (
          <circle key={`${i}-${j}`} cx={x0 + p[0] * s} cy={y0 + p[1] * s} r={2.1} fill="#9a3412" />
        ));
      })}
    </svg>
  );
}
