import React from 'react';
import WorldHero from '../components/WorldHero';
import CampaignLayout, { ChapterRef, LayoutTheme } from '../components/CampaignLayout';
import Intro from './renard/Intro';
import Part1 from './renard/Part1';
import Part2 from './renard/Part2';
import Part3 from './renard/Part3';
import Part4 from './renard/Part4';
import Epilogue from './renard/Epilogue';
import FinishAdventure from '../components/FinishAdventure';

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
      <WorldHero
        world="renard"
        overline="Aventure pour un héros"
        title="Le Renardeau et la Forêt qui Oublie"
        subtitle="Retrouve les 3 Glands d'Or et rends ses couleurs à Grisefeuille avant la première neige."
        badges={['2h – 3h', 'Difficulté 2/5', 'Dès 6 ans']}
      />

      <div className="space-y-12 px-1 sm:px-4">
        <Intro />
        <Part1 />
        <Part2 />
        <Part3 />
        <Part4 />
        <Epilogue />
        <FinishAdventure trophyId="renard" />
      </div>
    </CampaignLayout>
  );
}
