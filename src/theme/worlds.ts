/**
 * Les "mondes" derrière le portail : des décors illustrés dessinés en SVG
 * (voir components/FantasyScene.tsx). Chaque monde a un type de paysage et
 * une palette. Pour créer un nouveau monde, il suffit d'ajouter une entrée ici.
 */

export type SceneVariant = 'valley' | 'canyon' | 'forest' | 'cave';

export interface Palette {
  skyTop: string;
  skyBottom: string;
  glow: string;        // lueur à l'horizon ou au fond de la grotte
  cloud: string;
  far: string;         // montagnes lointaines
  farLight: string;
  forest: string;      // rangée d'arbres lointaine
  forestNear: string;  // rangée d'arbres proche
  leafA: string;       // feuillages (monde "forest")
  leafB: string;
  rock: string;        // rochers du premier plan
  rockLight: string;
  rockDark: string;
  ground: string;
  castle: string;
  window: string;
  water: string;
  crystalA: string;
  crystalB: string;
}

export interface DragonColors {
  body: string;
  belly: string;
  wing: string;
}

export interface World {
  variant: SceneVariant;
  palette: Palette;
  moon: boolean;
  dragon: DragonColors | null;
  /** Dégradé Tailwind (classes littérales) utilisé derrière le décor pendant son chargement */
  fallback: string;
}

export const WORLDS = {
  /** Écran d'entrée : la grotte aux cristaux et au trésor */
  gate: {
    variant: 'cave',
    moon: false,
    dragon: null,
    fallback: 'from-indigo-950 via-purple-950 to-slate-950',
    palette: {
      skyTop: '#120a26', skyBottom: '#3a2466', glow: '#8b5cf6', cloud: '#a78bfa',
      far: '#2a1a4a', farLight: '#3d2a66', forest: '#1d1236', forestNear: '#150c2a',
      leafA: '#7c3aed', leafB: '#a78bfa',
      rock: '#2b1b47', rockLight: '#4a3475', rockDark: '#1a1030', ground: '#1c1233',
      castle: '#1a1030', window: '#ffb347', water: '#3b5bdb',
      crystalA: '#5ee7ff', crystalB: '#b794ff',
    },
  },
  /** Accueil : la vallée du château noir */
  hub: {
    variant: 'valley',
    moon: true,
    dragon: { body: '#5b2a6e', belly: '#c08adf', wing: '#8a3fa0' },
    fallback: 'from-teal-900 via-cyan-950 to-slate-950',
    palette: {
      skyTop: '#0c3542', skyBottom: '#3aa79b', glow: '#7ff0d8', cloud: '#a5f3e0',
      far: '#1c5a66', farLight: '#2c7a84', forest: '#134750', forestNear: '#0c2f38',
      leafA: '#1f7a6b', leafB: '#2fa08a',
      rock: '#3a2a52', rockLight: '#5b4680', rockDark: '#241838', ground: '#1a1230',
      castle: '#231633', window: '#ffb347', water: '#2f7fb8',
      crystalA: '#5ee7ff', crystalB: '#b794ff',
    },
  },
  /** Aventures de dragons : le canyon sous la lune */
  peaks: {
    variant: 'canyon',
    moon: true,
    dragon: { body: '#4f8f3a', belly: '#d8d36a', wing: '#d1404a' },
    fallback: 'from-indigo-900 via-violet-950 to-slate-950',
    palette: {
      skyTop: '#16104f', skyBottom: '#4433a8', glow: '#8ea2ff', cloud: '#8f8be0',
      far: '#3b2f86', farLight: '#5747ad', forest: '#2c2270', forestNear: '#1f1757',
      leafA: '#3b2f86', leafB: '#5747ad',
      rock: '#3f3170', rockLight: '#6a5aa8', rockDark: '#241a4a', ground: '#1b133d',
      castle: '#1b133d', window: '#ffd27a', water: '#3a57d6',
      crystalA: '#7fd4ff', crystalB: '#c4a1ff',
    },
  },
  /** Le Renardeau : la forêt d'automne au crépuscule */
  renard: {
    variant: 'forest',
    moon: false,
    dragon: null,
    fallback: 'from-purple-950 via-orange-900 to-slate-950',
    palette: {
      skyTop: '#2a1740', skyBottom: '#e8833a', glow: '#ffd27a', cloud: '#ffb787',
      far: '#5a2a4f', farLight: '#7d3b5c', forest: '#43203f', forestNear: '#2a1430',
      leafA: '#e2702f', leafB: '#f5a623',
      rock: '#3a1f3a', rockLight: '#5e3350', rockDark: '#231226', ground: '#1f1024',
      castle: '#231226', window: '#ffd27a', water: '#c8683a',
      crystalA: '#ffd27a', crystalB: '#ff9d5c',
    },
  },
  /** Les Lutins : le château de Chantefarce */
  lutins: {
    variant: 'valley',
    moon: false,
    dragon: null,
    fallback: 'from-emerald-900 via-teal-950 to-slate-950',
    palette: {
      skyTop: '#0d3a3c', skyBottom: '#59c08d', glow: '#d9ffb0', cloud: '#c9f7d0',
      far: '#1e6a5a', farLight: '#2f8a72', forest: '#14503f', forestNear: '#0c3329',
      leafA: '#2f8a52', leafB: '#7ccf5a',
      rock: '#2a3f4a', rockLight: '#46667a', rockDark: '#17262e', ground: '#10202a',
      castle: '#2b2148', window: '#ffe07a', water: '#2fa0a8',
      crystalA: '#8dffb0', crystalB: '#ffe07a',
    },
  },
  /** Le Dragonneau Perdu : village au pied d'un volcan, au coucher du soleil */
  volcan: {
    variant: 'canyon',
    moon: false,
    dragon: { body: '#c2410c', belly: '#fcd34d', wing: '#7f1d1d' },
    fallback: 'from-rose-950 via-orange-900 to-slate-950',
    palette: {
      skyTop: '#3b0f2a', skyBottom: '#f97316', glow: '#fde68a', cloud: '#fdba74',
      far: '#7f2a3a', farLight: '#a8433b', forest: '#5a1f2b', forestNear: '#3a121f',
      leafA: '#c2410c', leafB: '#f59e0b',
      rock: '#4a2230', rockLight: '#7b3a45', rockDark: '#2a1220', ground: '#220f1a',
      castle: '#2a1220', window: '#ffd27a', water: '#e0663a',
      crystalA: '#ffd27a', crystalB: '#ff7a45',
    },
  },
} as const satisfies Record<string, World>;

export type WorldKey = keyof typeof WORLDS;
