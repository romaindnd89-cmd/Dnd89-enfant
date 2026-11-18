import React, { useEffect, useId, useMemo, useRef, useState } from 'react';
import { prefersReduced } from '../lib/motion';
import { motion } from 'motion/react';
import { WORLDS, WorldKey, World } from '../theme/worlds';

/**
 * Décor illustré façon jeu fantastique, entièrement dessiné en SVG :
 * rochers à facettes, château sur son piton, canyon sous la lune, forêt
 * d'automne ou grotte aux cristaux, selon le monde choisi.
 *
 * - `animated` : nuages, dragon, cristaux qui pulsent, parallaxe à la souris.
 *   À désactiver pour les petites vignettes (couvertures de cartes).
 */

const W = 1600;
const H = 900;

// Pseudo-hasard déterministe (le décor est identique à chaque rendu)
const rnd = (i: number) => {
  const x = Math.sin(i * 12.9898) * 43758.5453;
  return x - Math.floor(x);
};

const pine = (x: number, base: number, h: number) =>
  `${x},${base - h} ${x - h * 0.2},${base - h * 0.5} ${x - h * 0.09},${base - h * 0.5} ${x - h * 0.3},${base} ${x + h * 0.3},${base} ${x + h * 0.09},${base - h * 0.5} ${x + h * 0.2},${base - h * 0.5}`;

function Layer({ depth, children }: { depth: number; children: React.ReactNode }) {
  return (
    <g
      style={{
        transform: `translate(calc(var(--px, 0) * ${depth}px), calc(var(--py, 0) * ${depth * 0.5}px))`,
        transition: 'transform 0.5s ease-out',
      }}
    >
      {children}
    </g>
  );
}

function Crystal({ x, y, s, color, delay, glowId }: { x: number; y: number; s: number; color: string; delay: number; glowId: string }) {
  return (
    <g className="scene-crystal" style={{ animationDelay: `${delay}s` }}>
      <polygon
        points={`${x},${y - s * 1.6} ${x + s * 0.7},${y - s * 0.3} ${x},${y + s} ${x - s * 0.7},${y - s * 0.3}`}
        fill={color}
        filter={`url(#${glowId})`}
        opacity="0.9"
      />
      <polygon
        points={`${x},${y - s * 1.6} ${x + s * 0.7},${y - s * 0.3} ${x},${y + s} ${x - s * 0.7},${y - s * 0.3}`}
        fill={color}
      />
      <polygon points={`${x},${y - s * 1.6} ${x},${y + s} ${x - s * 0.7},${y - s * 0.3}`} fill="#ffffff" opacity="0.35" />
    </g>
  );
}

/** Falaise à facettes du premier plan (côté gauche ; le côté droit est son miroir). */
function Cliff({ p, glowId, crystals }: { p: World['palette']; glowId: string; crystals: boolean }) {
  return (
    <g>
      <polygon
        points="0,900 0,120 70,90 120,170 165,160 210,260 185,350 250,430 225,540 290,620 265,720 345,810 320,900"
        fill={p.rock}
      />
      {/* Facettes éclairées */}
      <polygon points="120,170 165,160 210,260 150,255" fill={p.rockLight} />
      <polygon points="185,350 250,430 225,540 170,450" fill={p.rockLight} />
      <polygon points="265,720 345,810 320,900 250,900" fill={p.rockLight} opacity="0.8" />
      <polygon points="70,90 120,170 60,200 20,140" fill={p.rockLight} opacity="0.55" />
      {/* Ombres */}
      <polygon points="0,260 90,300 60,430 0,460" fill={p.rockDark} />
      <polygon points="0,560 130,600 100,760 0,800" fill={p.rockDark} />
      <polygon points="150,255 210,260 185,350 130,330" fill={p.rockDark} opacity="0.6" />
      {crystals && (
        <>
          <Crystal x={105} y={360} s={20} color={p.crystalA} delay={0} glowId={glowId} />
          <Crystal x={170} y={560} s={15} color={p.crystalB} delay={1.2} glowId={glowId} />
          <Crystal x={60} y={690} s={24} color={p.crystalA} delay={2.1} glowId={glowId} />
          <Crystal x={235} y={770} s={13} color={p.crystalB} delay={0.6} glowId={glowId} />
        </>
      )}
    </g>
  );
}

function Dragon({ colors }: { colors: NonNullable<World['dragon']> }) {
  const wing = 'M0,0 L-34,-92 L44,-78 Q30,-56 54,-46 Q32,-36 44,-18 Q22,-22 20,2 Z';
  return (
    <g>
      {/* Aile arrière */}
      <motion.path
        d={wing}
        fill={colors.wing}
        opacity="0.6"
        style={{ transformOrigin: '0px 0px', x: -6, y: 4 }}
        animate={{ rotate: [18, -22, 18] }}
        transition={{ duration: 1.1, repeat: Infinity, ease: 'easeInOut' }}
      />
      {/* Queue */}
      <path d="M-38,14 Q-92,2 -124,28 Q-138,38 -152,24 L-148,44 L-166,42 Q-142,60 -112,46 Q-84,30 -44,34 Z" fill={colors.body} />
      {/* Corps */}
      <ellipse cx="0" cy="20" rx="54" ry="24" fill={colors.body} />
      <ellipse cx="4" cy="30" rx="38" ry="10" fill={colors.belly} opacity="0.7" />
      {/* Pattes */}
      <path d="M-18,36 l-8,22 l11,2 l7,-20 z" fill={colors.body} />
      <path d="M22,36 l-5,22 l11,1 l6,-20 z" fill={colors.body} />
      {/* Cou et tête */}
      <path d="M32,6 Q58,-22 84,-30 L90,-48 L98,-32 L110,-46 L109,-29 Q132,-26 144,-12 L124,-9 L134,-2 Q112,7 96,-2 Q74,4 58,30 Z" fill={colors.body} />
      <circle cx="112" cy="-22" r="3.2" fill="#ffe66d" />
      {/* Aile avant */}
      <motion.path
        d={wing}
        fill={colors.wing}
        style={{ transformOrigin: '0px 0px', x: 6, y: 2 }}
        animate={{ rotate: [-20, 22, -20] }}
        transition={{ duration: 1.1, repeat: Infinity, ease: 'easeInOut' }}
      />
    </g>
  );
}

export default function FantasyScene({
  world,
  animated = true,
  className = '',
}: {
  world: WorldKey;
  animated?: boolean;
  className?: string;
}) {
  const w: World = WORLDS[world];
  const p = w.palette;
  const uid = useId().replace(/[^a-zA-Z0-9]/g, '');
  const id = (name: string) => `${name}-${uid}`;
  const svgRef = useRef<SVGSVGElement>(null);

  // Parallaxe : on déplace légèrement les plans selon la position de la souris
  useEffect(() => {
    if (!animated) return;
    if (!window.matchMedia('(pointer: fine)').matches) return;
    if (prefersReduced()) return;
    const onMove = (e: MouseEvent) => {
      const el = svgRef.current;
      if (!el) return;
      el.style.setProperty('--px', String((e.clientX / window.innerWidth) * 2 - 1));
      el.style.setProperty('--py', String((e.clientY / window.innerHeight) * 2 - 1));
    };
    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, [animated]);

  // Sur un cadre étroit (téléphone en portrait), le décor est recadré au centre :
  // on mesure la partie visible pour ramener falaises, lune et château dans le champ.
  const [visW, setVisW] = useState(W);
  useEffect(() => {
    const el = svgRef.current;
    if (!el || typeof ResizeObserver === 'undefined') return;
    const measure = () => {
      const r = el.getBoundingClientRect();
      if (r.height > 0) setVisW(Math.min(W, Math.max(300, (H * r.width) / r.height)));
    };
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);
  const hidden = (W - visW) / 2;            // largeur masquée de chaque côté
  const narrow = Math.min(1, hidden / 600); // 0 = paysage large, 1 = portrait étroit
  const cliffShift = Math.max(0, hidden - 190);
  const toCenter = (x: number, k = 0.75) => (W / 2 - x) * narrow * k;

  const stars = useMemo(
    () => Array.from({ length: 40 }).map((_, i) => ({ x: rnd(i + 1) * W, y: rnd(i + 50) * H * 0.5, r: 1 + rnd(i + 90) * 1.6, d: rnd(i + 7) * 4 })),
    []
  );
  const farPines = useMemo(
    () => Array.from({ length: 46 }).map((_, i) => ({ x: (i / 45) * W + (rnd(i + 3) - 0.5) * 30, h: 70 + rnd(i + 11) * 70 })),
    []
  );
  const nearPines = useMemo(
    () => Array.from({ length: 26 }).map((_, i) => ({ x: (i / 25) * W + (rnd(i + 21) - 0.5) * 50, h: 120 + rnd(i + 31) * 110 })),
    []
  );
  const leafy = useMemo(
    () => Array.from({ length: 20 }).map((_, i) => ({ x: (i / 19) * W + (rnd(i + 41) - 0.5) * 60, r: 55 + rnd(i + 51) * 45, alt: rnd(i + 61) > 0.5 })),
    []
  );

  const isCave = w.variant === 'cave';
  const isCanyon = w.variant === 'canyon';
  const isForest = w.variant === 'forest';
  const isValley = w.variant === 'valley';

  return (
    <svg
      ref={svgRef}
      viewBox={`0 0 ${W} ${H}`}
      preserveAspectRatio="xMidYMid slice"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={id('sky')} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor={p.skyTop} />
          <stop offset="1" stopColor={p.skyBottom} />
        </linearGradient>
        <radialGradient id={id('glow')} cx="0.5" cy="0.5" r="0.5">
          <stop offset="0" stopColor={p.glow} stopOpacity="0.75" />
          <stop offset="1" stopColor={p.glow} stopOpacity="0" />
        </radialGradient>
        <radialGradient id={id('moon')} cx="0.5" cy="0.5" r="0.5">
          <stop offset="0" stopColor="#ffffff" stopOpacity="0.55" />
          <stop offset="1" stopColor="#ffffff" stopOpacity="0" />
        </radialGradient>
        <linearGradient id={id('mist')} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor={p.glow} stopOpacity="0" />
          <stop offset="0.6" stopColor={p.glow} stopOpacity="0.28" />
          <stop offset="1" stopColor={p.glow} stopOpacity="0" />
        </linearGradient>
        <filter id={id('blur')} x="-100%" y="-100%" width="300%" height="300%">
          <feGaussianBlur stdDeviation="9" />
        </filter>
      </defs>

      {/* ---------- Ciel (ou fond de grotte) ---------- */}
      <rect width={W} height={H} fill={`url(#${id('sky')})`} />

      {!isCave && (
        <Layer depth={4}>
          {stars.map((s, i) => (
            <circle key={i} cx={s.x} cy={s.y} r={s.r} fill="#fff" className={animated ? 'scene-star' : ''} style={{ animationDelay: `${s.d}s` }} opacity="0.8" />
          ))}
          {w.moon && (
            <g transform={`translate(${toCenter(isCanyon ? 560 : 1180, 0.6)} ${narrow * 40})`}>
              <circle cx={isCanyon ? 560 : 1180} cy={isCanyon ? 190 : 170} r="170" fill={`url(#${id('moon')})`} />
              <circle cx={isCanyon ? 560 : 1180} cy={isCanyon ? 190 : 170} r="78" fill="#f4f1ff" />
              <circle cx={isCanyon ? 535 : 1155} cy={isCanyon ? 170 : 150} r="14" fill="#d9d3f2" />
              <circle cx={isCanyon ? 590 : 1210} cy={isCanyon ? 215 : 195} r="9" fill="#d9d3f2" />
              <circle cx={isCanyon ? 548 : 1168} cy={isCanyon ? 225 : 205} r="6" fill="#d9d3f2" />
            </g>
          )}
        </Layer>
      )}

      {/* Lueur d'horizon (ou fond lumineux de la grotte) */}
      <ellipse cx={W / 2} cy={isCave ? 470 : 640} rx={isCave ? 520 : 900} ry={isCave ? 330 : 260} fill={`url(#${id('glow')})`} />

      {/* ---------- Nuages ---------- */}
      {!isCave && (
        <Layer depth={8}>
          {[
            { x: 180, y: 250, s: 1.2, dur: 90 },
            { x: 820, y: 180, s: 1.6, dur: 120 },
            { x: 1280, y: 330, s: 1.1, dur: 100 },
          ].map((c, i) => {
            const cloud = (
              <g transform={`translate(${c.x} ${c.y}) scale(${c.s})`} fill={p.cloud} opacity="0.28">
                <ellipse cx="0" cy="0" rx="120" ry="34" />
                <ellipse cx="-60" cy="-22" rx="60" ry="34" />
                <ellipse cx="20" cy="-36" rx="70" ry="42" />
                <ellipse cx="90" cy="-14" rx="56" ry="28" />
              </g>
            );
            return animated ? (
              <motion.g key={i} animate={{ x: [-60, 60, -60] }} transition={{ duration: c.dur, repeat: Infinity, ease: 'easeInOut' }}>
                {cloud}
              </motion.g>
            ) : (
              <g key={i}>{cloud}</g>
            );
          })}
        </Layer>
      )}

      {/* ---------- Montagnes lointaines ---------- */}
      {!isCave && (
        <Layer depth={12}>
          <polygon
            points="0,580 120,480 220,530 340,400 470,510 600,380 720,480 860,350 1000,490 1130,400 1260,510 1400,410 1500,490 1600,430 1600,900 0,900"
            fill={p.far}
          />
          <polygon points="340,400 300,480 370,540" fill={p.farLight} />
          <polygon points="600,380 555,460 630,520" fill={p.farLight} />
          <polygon points="860,350 815,440 890,500" fill={p.farLight} />
          <polygon points="1130,400 1085,480 1160,520" fill={p.farLight} />
          <polygon points="1400,410 1360,480 1430,510" fill={p.farLight} />
        </Layer>
      )}

      {/* ---------- Canyon : parois et rivière ---------- */}
      {isCanyon && (
        <Layer depth={18}>
          <polygon points="560,900 740,620 860,620 1040,900" fill={p.water} />
          <polygon points="700,900 770,680 830,680 900,900" fill="#ffffff" opacity="0.12" />
          <polygon points="250,900 250,400 380,360 480,430 560,400 640,520 615,620 690,700 670,900" fill={p.far} />
          <polygon points="480,430 560,400 640,520 560,520" fill={p.farLight} />
          <polygon points="615,620 690,700 670,900 600,900" fill={p.farLight} opacity="0.7" />
          <g transform={`translate(${W},0) scale(-1,1)`}>
            <polygon points="250,900 250,360 360,330 470,410 560,380 650,500 620,610 700,690 675,900" fill={p.far} />
            <polygon points="470,410 560,380 650,500 560,500" fill={p.farLight} />
            <polygon points="620,610 700,690 675,900 610,900" fill={p.farLight} opacity="0.7" />
          </g>
        </Layer>
      )}

      {/* ---------- Vallée : le château sur son piton ---------- */}
      {isValley && (
        <Layer depth={20}>
          <g transform={`translate(${toCenter(600, 1)} 0)`}>
          {/* Piton rocheux */}
          <polygon points="360,800 420,660 465,610 500,530 545,480 610,465 665,490 705,555 755,620 805,690 850,800" fill={p.rock} />
          <polygon points="500,530 545,480 570,560 525,620" fill={p.rockLight} />
          <polygon points="610,465 665,490 640,570 595,535" fill={p.rockLight} opacity="0.8" />
          <polygon points="665,490 705,555 755,620 715,665 650,585" fill={p.rockDark} />
          <polygon points="420,660 465,610 480,700 430,760" fill={p.rockDark} opacity="0.7" />
          {/* Château */}
          <g fill={p.castle}>
            <rect x="556" y="250" width="46" height="230" />
            <polygon points="548,250 579,140 610,250" />
            <rect x="514" y="335" width="32" height="145" />
            <polygon points="508,335 530,262 552,335" />
            <rect x="614" y="305" width="34" height="175" />
            <polygon points="608,305 631,222 654,305" />
            <rect x="656" y="385" width="26" height="100" />
            <polygon points="651,385 669,335 687,385" />
            <rect x="484" y="395" width="24" height="90" />
            <polygon points="479,395 496,348 513,395" />
            <rect x="500" y="430" width="170" height="55" />
          </g>
          {/* Fenêtres allumées */}
          <g fill={p.window} className={animated ? 'scene-window' : ''}>
            <rect x="573" y="285" width="9" height="18" rx="4" />
            <rect x="573" y="340" width="9" height="18" rx="4" />
            <rect x="586" y="395" width="8" height="15" rx="4" />
            <rect x="526" y="365" width="8" height="14" rx="4" />
            <rect x="626" y="335" width="8" height="16" rx="4" />
            <rect x="626" y="390" width="8" height="14" rx="4" />
            <rect x="665" y="405" width="7" height="12" rx="3" />
            <rect x="492" y="415" width="7" height="12" rx="3" />
            <rect x="560" y="448" width="14" height="30" rx="7" />
          </g>
          {/* Oriflammes */}
          <polygon points="579,140 579,118 604,126 579,134" fill={p.crystalB} />
          <polygon points="631,222 631,204 650,210 631,216" fill={p.crystalA} />
          </g>
        </Layer>
      )}

      {/* ---------- Forêts ---------- */}
      {(isValley || isForest) && (
        <Layer depth={26}>
          {farPines.map((t, i) => (
            <polygon key={i} points={pine(t.x, 800, t.h)} fill={p.forest} />
          ))}
          <rect x="0" y="790" width={W} height="110" fill={p.forest} />
        </Layer>
      )}

      {isForest && (
        <Layer depth={32}>
          {leafy.map((t, i) => (
            <g key={i}>
              <rect x={t.x - 7} y={690 - t.r * 0.2} width="14" height={150} fill={p.rockDark} />
              <circle cx={t.x} cy={690 - t.r} r={t.r} fill={t.alt ? p.leafA : p.leafB} />
              <circle cx={t.x - t.r * 0.55} cy={690 - t.r * 0.55} r={t.r * 0.7} fill={t.alt ? p.leafB : p.leafA} />
              <circle cx={t.x + t.r * 0.55} cy={690 - t.r * 0.6} r={t.r * 0.65} fill={t.alt ? p.leafA : p.leafB} opacity="0.9" />
              <circle cx={t.x - t.r * 0.2} cy={690 - t.r * 1.25} r={t.r * 0.35} fill="#ffffff" opacity="0.12" />
            </g>
          ))}
        </Layer>
      )}

      {/* Brume */}
      {!isCave && <rect x="0" y="560" width={W} height="300" fill={`url(#${id('mist')})`} />}

      {(isValley || isForest) && (
        <Layer depth={38}>
          {nearPines.map((t, i) => (
            <polygon key={i} points={pine(t.x, 880, t.h)} fill={p.forestNear} />
          ))}
        </Layer>
      )}

      {/* ---------- Grotte : voûte, sol et trésor ---------- */}
      {isCave && (
        <>
          <Layer depth={14}>
            <polygon
              points="0,0 1600,0 1600,230 1530,170 1480,280 1410,160 1340,225 1270,130 1190,250 1110,140 1020,205 940,120 860,215 780,130 700,225 610,140 530,235 450,150 370,255 290,160 210,245 130,170 60,265 0,210"
              fill={p.far}
            />
            <polygon points="1270,130 1190,250 1230,150" fill={p.farLight} />
            <polygon points="940,120 860,215 900,140" fill={p.farLight} />
            <polygon points="610,140 530,235 570,160" fill={p.farLight} />
            <polygon points="290,160 210,245 250,175" fill={p.farLight} />
            <polygon points="0,900 0,760 260,700 520,740 800,700 1080,745 1340,705 1600,750 1600,900" fill={p.far} />
          </Layer>
          <Layer depth={24}>
            {/* Tas d'or */}
            {(narrow > 0.5
              ? [{ x: 800, y: 835, s: 120 }] // écran étroit : un seul tas, au centre
              : [
                  { x: 430, y: 800, s: 130 },
                  { x: 1180, y: 810, s: 150 },
                  { x: 820, y: 830, s: 90 },
                ]
            ).map((g, i) => (
              <g key={i} transform={`translate(${toCenter(g.x, 0.7)} 0)`}>
                <path d={`M${g.x - g.s},${g.y} Q${g.x - g.s * 0.5},${g.y - g.s * 0.6} ${g.x},${g.y - g.s * 0.62} Q${g.x + g.s * 0.5},${g.y - g.s * 0.6} ${g.x + g.s},${g.y} Z`} fill="#e89a1c" />
                <path d={`M${g.x - g.s * 0.7},${g.y - g.s * 0.12} Q${g.x - g.s * 0.3},${g.y - g.s * 0.6} ${g.x},${g.y - g.s * 0.62} Q${g.x + g.s * 0.2},${g.y - g.s * 0.45} ${g.x + g.s * 0.3},${g.y - g.s * 0.2} Z`} fill="#ffc93c" />
                {[0, 1, 2, 3, 4].map((k) => (
                  <ellipse key={k} cx={g.x - g.s * 0.6 + k * g.s * 0.3} cy={g.y - 4 - (k % 2) * 8} rx={g.s * 0.09} ry={g.s * 0.035} fill="#ffe27a" />
                ))}
                <g className={animated ? 'scene-star' : ''} style={{ animationDelay: `${i * 0.9}s` }}>
                  <path d={`M${g.x - g.s * 0.2},${g.y - g.s * 0.5} l4,-14 l4,14 l14,4 l-14,4 l-4,14 l-4,-14 l-14,-4 z`} fill="#fff" />
                </g>
              </g>
            ))}
            <Crystal x={640} y={760} s={22} color={p.crystalB} delay={0.4} glowId={id('blur')} />
            <Crystal x={980} y={770} s={18} color={p.crystalA} delay={1.6} glowId={id('blur')} />
          </Layer>
        </>
      )}

      {/* ---------- Dragon ---------- */}
      {animated && w.dragon && (
        <motion.g
          initial={{ x: hidden - 320, y: 300 }}
          animate={{ x: [hidden - 320, W - hidden + 320], y: [300, 220, 320, 240] }}
          transition={{ x: { duration: 38, repeat: Infinity, ease: 'linear', repeatDelay: 6 }, y: { duration: 12, repeat: Infinity, ease: 'easeInOut' } }}
        >
          <g transform="scale(1.5)">
            <Dragon colors={w.dragon} />
          </g>
        </motion.g>
      )}

      {/* ---------- Sol et premier plan ---------- */}
      <Layer depth={46}>
        <polygon points="0,900 0,850 300,815 600,845 900,812 1300,848 1600,822 1600,900" fill={p.ground} />
        <g transform={`translate(${cliffShift} 0)`}>
          <rect x={-cliffShift - 2} y="0" width={cliffShift + 4} height={H} fill={p.rock} />
          <Cliff p={p} glowId={id('blur')} crystals />
        </g>
        <g transform={`translate(${W - cliffShift},0) scale(-1,1)`}>
          <rect x={-cliffShift - 2} y="0" width={cliffShift + 4} height={H} fill={p.rock} />
          <Cliff p={p} glowId={id('blur')} crystals={isCave || isValley} />
        </g>
      </Layer>
    </svg>
  );
}
