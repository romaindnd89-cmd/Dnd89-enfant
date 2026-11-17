import React from 'react';
import { motion } from 'motion/react';
import CampaignLayout, { ChapterRef, LayoutTheme } from '../components/CampaignLayout';
import Intro from './renard/Intro';
import Part1 from './renard/Part1';
import Part2 from './renard/Part2';
import Part3 from './renard/Part3';
import Part4 from './renard/Part4';
import Epilogue from './renard/Epilogue';

const chapters: ChapterRef[] = [
  { id: 'intro', label: '📖 Prologue & Fiche' },
  { id: 'chap1', label: '🌫️ Chap. 1 : Le Réveil Gris' },
  { id: 'chap2', label: '🪶 Chap. 2 : Les Corbeaux de Suie' },
  { id: 'chap3', label: '💧 Chap. 3 : Le Ruisseau Bavard' },
  { id: 'chap4', label: '🐿️ Chap. 4 : Le Village des Écureuils' },
  { id: 'chap5', label: '🌹 Chap. 5 : La Ronceraie' },
  { id: 'chap6', label: '🕸️ Chap. 6 : L’Araignée de Brume' },
  { id: 'chap7', label: '🎵 Chap. 7 : La Grotte aux Échos' },
  { id: 'chap8', label: '🕳️ Chap. 8 : Le Terrier de Grisaille' },
  { id: 'chap9', label: '🌑 Chap. 9 : Grisaille la Taupe-Sorcière' },
  { id: 'chap10', label: '🌳 Chap. 10 : Le Réveil du Grand Chêne' },
  { id: 'epilogue', label: '🎲 Épilogue' },
];

const theme: LayoutTheme = {
  chipBg: 'bg-orange-100 text-orange-700 hover:bg-orange-200',
  menuHeader: 'bg-orange-50 text-orange-800',
  menuItem: 'hover:bg-orange-50 text-orange-700',
  barFill: 'bg-gradient-to-r from-orange-400 to-amber-500',
  check: 'text-orange-500',
};

export default function RenardCampaign({ onBack }: { onBack: () => void }) {
  return (
    <CampaignLayout campaignId="renard" chapters={chapters} theme={theme} onBack={onBack}>
      {/* Bannière animée (sans image externe) */}
      <div className="relative mb-12 rounded-3xl overflow-hidden border-4 border-white shadow-xl">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-200 via-orange-300 to-rose-300" />

        {/* Soleil lumineux qui pulse */}
        <motion.div
          className="absolute top-6 right-8 w-24 h-24 rounded-full bg-yellow-200 blur-xl"
          animate={{ scale: [1, 1.25, 1], opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        />

        {/* Feuilles qui tombent */}
        {['🍂', '🍁', '🍂', '🍁', '🍃', '🍂'].map((leaf, i) => (
          <motion.div
            key={i}
            className="absolute text-2xl sm:text-3xl"
            style={{ left: `${8 + i * 16}%`, top: '-10%' }}
            animate={{ y: ['0%', '520%'], x: [0, i % 2 ? 30 : -30, 0], rotate: [0, 360] }}
            transition={{ duration: 7 + i, repeat: Infinity, delay: i * 1.1, ease: 'easeIn' }}
          >
            {leaf}
          </motion.div>
        ))}

        <div className="relative z-10 py-14 px-6 text-center">
          <motion.div
            className="text-7xl sm:text-8xl mb-4 inline-block drop-shadow-lg"
            animate={{ y: [0, -8, 0], rotate: [0, 3, -3, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
          >
            🦊
          </motion.div>
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-white drop-shadow-md mb-3">
            Le Renardeau et la Forêt qui Oublie
          </h1>
          <p className="text-lg sm:text-xl text-white/90 font-medium max-w-2xl mx-auto drop-shadow">
            Retrouve les 3 Glands d'Or et rends ses couleurs à Grisefeuille avant la première neige.
          </p>
          <div className="flex flex-wrap justify-center gap-2 mt-5">
            <Badge>🕐 2h – 3h</Badge>
            <Badge>⭐ Difficulté 2/5</Badge>
            <Badge>🦊 Dès 6 ans</Badge>
          </div>
        </div>
      </div>

      <div className="space-y-12 px-1 sm:px-4">
        <Intro />
        <Part1 />
        <Part2 />
        <Part3 />
        <Part4 />
        <Epilogue />
      </div>
    </CampaignLayout>
  );
}

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="bg-white/80 backdrop-blur-sm text-orange-700 font-bold text-sm px-3 py-1.5 rounded-full shadow-sm">
      {children}
    </span>
  );
}
