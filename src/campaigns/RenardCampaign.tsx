import React from 'react';
import WorldHero from '../components/WorldHero';
import CampaignShell, { ShellSection } from '../components/CampaignShell';
import Intro from './renard/Intro';
import Chapitre1 from './renard/Chapitre1';
import Chapitre2 from './renard/Chapitre2';
import Chapitre3 from './renard/Chapitre3';
import Chapitre4 from './renard/Chapitre4';
import Chapitre5 from './renard/Chapitre5';
import Chapitre6 from './renard/Chapitre6';
import Chapitre7 from './renard/Chapitre7';
import Chapitre8 from './renard/Chapitre8';
import Chapitre9 from './renard/Chapitre9';
import Chapitre10 from './renard/Chapitre10';
import Epilogue from './renard/Epilogue';
import FinishAdventure from '../components/FinishAdventure';

const sections: ShellSection[] = [
  { id: 'intro', label: 'Prologue : La Légende du Grand Chêne', className: 'hover:bg-slate-50 text-slate-700' },
  { id: 'chap1', label: 'Chapitre 1 : Le Réveil Gris', className: 'hover:bg-orange-50 text-orange-700' },
  { id: 'chap2', label: 'Chapitre 2 : Les Corbeaux de Suie', className: 'hover:bg-orange-50 text-orange-700' },
  { id: 'chap3', label: 'Chapitre 3 : Le Ruisseau Bavard', className: 'hover:bg-sky-50 text-sky-700' },
  { id: 'chap4', label: 'Chapitre 4 : Le Village des Écureuils', className: 'hover:bg-amber-50 text-amber-700' },
  { id: 'chap5', label: 'Chapitre 5 : La Ronceraie', className: 'hover:bg-rose-50 text-rose-700' },
  { id: 'chap6', label: "Chapitre 6 : L'Araignée de Brume", className: 'hover:bg-violet-50 text-violet-700' },
  { id: 'chap7', label: 'Chapitre 7 : La Grotte aux Échos', className: 'hover:bg-indigo-50 text-indigo-700' },
  { id: 'chap8', label: 'Chapitre 8 : Le Terrier de Grisaille', className: 'hover:bg-stone-50 text-stone-700' },
  { id: 'chap9', label: 'Chapitre 9 : Grisaille la Taupe-Sorcière', className: 'hover:bg-slate-50 text-slate-700' },
  { id: 'chap10', label: 'Chapitre 10 : Le Réveil du Grand Chêne', className: 'hover:bg-emerald-50 text-emerald-700' },
  { id: 'epilogue', label: 'Épilogue & Médailles', className: 'hover:bg-orange-50 text-orange-700' },
];

export default function RenardCampaign({ onBack }: { onBack: () => void }) {
  return (
    <CampaignShell
      onBack={onBack}
      sections={sections}
      menuButtonClass="text-orange-600 hover:text-orange-700 border-orange-200"
    >
      <WorldHero
        world="renard"
        overline="Aventure pour un héros"
        title="Le Renardeau et la Forêt qui Oublie"
        subtitle="Retrouve les 3 Glands d'Or et rends ses couleurs à Grisefeuille avant la première neige."
        badges={['2h – 3h', 'Difficulté 2/5', 'Dès 6 ans']}
      />

      <div className="space-y-16">
        <Intro />
        <Chapitre1 />
        <Chapitre2 />
        <Chapitre3 />
        <Chapitre4 />
        <Chapitre5 />
        <Chapitre6 />
        <Chapitre7 />
        <Chapitre8 />
        <Chapitre9 />
        <Chapitre10 />
        <Epilogue />
        <FinishAdventure trophyId="renard" />
      </div>
    </CampaignShell>
  );
}
