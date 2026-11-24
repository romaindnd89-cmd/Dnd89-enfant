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

/** D20 : bande de 10 triangles, 5 triangles au-dessus, 5 en dessous. */
export function D20Net() {
  const s = 32;
  const h = (s * Math.sqrt(3)) / 2;
  const ox = 2;
  const oy = h + 2;
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
  const w = 5.5 * s + 4;
  const hh = 3 * h + 4;
  return (
    <svg width={`${w}mm`} height={`${hh}mm`} viewBox={`0 0 ${w} ${hh}`} role="img" aria-label="Patron de dé à 20 faces">
      {faces.map((f, i) => (
        <polygon key={i} points={f.pts.map((p) => p.join(',')).join(' ')} fill="#fff7ed" />
      ))}
      <Lines faces={faces} />
      {faces.map((f, i) => {
        const c = centroid(f.pts);
        return (
          <text key={i} x={c[0]} y={c[1] + 3} textAnchor="middle" fontSize="9" fontWeight="700" fill="#9a3412" fontFamily="sans-serif">
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

/** D6 : croix de 6 carrés. Faces opposées : 1-6, 2-5, 3-4. */
export function D6Net() {
  const s = 26;
  const ox = 2;
  const oy = 2;
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
  const w = 3 * s + 4;
  const hh = 4 * s + 4;
  return (
    <svg width={`${w}mm`} height={`${hh}mm`} viewBox={`0 0 ${w} ${hh}`} role="img" aria-label="Patron de dé à 6 faces">
      {faces.map((f, i) => (
        <polygon key={i} points={f.pts.map((p) => p.join(',')).join(' ')} fill="#fff7ed" />
      ))}
      <Lines faces={faces} />
      {faces.map((f, i) => {
        const [x0, y0] = f.pts[0];
        return PIPS[f.pips!].map((p, j) => (
          <circle key={`${i}-${j}`} cx={x0 + p[0] * s} cy={y0 + p[1] * s} r={2.1} fill="#9a3412" />
        ));
      })}
    </svg>
  );
}
