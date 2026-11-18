import React from 'react';
import WorldHero from '../components/WorldHero';
import CampaignShell, { ShellSection } from '../components/CampaignShell';
import Intro from './lanterne/Intro';
import StoryPrologue from './lanterne/Prologue';
import Chapitre1 from './lanterne/Chapitre1';
import Chapitre2 from './lanterne/Chapitre2';
import Chapitre3 from './lanterne/Chapitre3';
import Chapitre4 from './lanterne/Chapitre4';
import Chapitre5 from './lanterne/Chapitre5';
import Chapitre6 from './lanterne/Chapitre6';
import Chapitre7 from './lanterne/Chapitre7';
import Epilogue from './lanterne/Epilogue';
import Galerie from './lanterne/Galerie';
import FinishAdventure from '../components/FinishAdventure';

const sections: ShellSection[] = [
  { id: 'intro', label: 'Avant de jouer, règles et fiche', className: 'hover:bg-slate-50 text-slate-700' },
  { id: 'prologue', label: '📖 Prologue : le début de l\'histoire', className: 'hover:bg-amber-50 text-amber-700' },
  { id: 'chap1', label: 'Chapitre 1 : Les lanternes qui s\'éteignent', className: 'hover:bg-amber-50 text-amber-700' },
  { id: 'chap2', label: 'Chapitre 2 : La Tour des Archives', className: 'hover:bg-indigo-50 text-indigo-700' },
  { id: 'chap3', label: 'Chapitre 3 : Le chemin du Marais', className: 'hover:bg-emerald-50 text-emerald-700' },
  { id: 'chap4', label: 'Chapitre 4 : Ce que la brume cachait', className: 'hover:bg-sky-50 text-sky-700' },
  { id: 'chap5', label: 'Chapitre 5 : Le Puits Oublié', className: 'hover:bg-indigo-50 text-indigo-700' },
  { id: 'chap6', label: 'Chapitre 6 : Toutes les lumières', className: 'hover:bg-rose-50 text-rose-700' },
  { id: 'chap7', label: 'Chapitre 7 : L\'aube des lanternes', className: 'hover:bg-amber-50 text-amber-700' },
  { id: 'epilogue', label: 'Épilogue, morales et médailles', className: 'hover:bg-amber-50 text-amber-700' },
  { id: 'galerie', label: '🖼️ Galerie : lieux, personnages, objets', className: 'hover:bg-amber-50 text-amber-700' },
];

export default function LanterneCampaign({ onBack }: { onBack: () => void }) {
  return (
    <CampaignShell
      onBack={onBack}
      sections={sections}
      menuButtonClass="text-amber-600 hover:text-amber-700 border-amber-200"
    >
      <WorldHero
        world="lanternes"
        overline="Une aventure d'enquête, émouvante et lumineuse"
        title="La Dernière Lanterne"
        subtitle="Les lanternes de la Vallée s'éteignent une à une. Un apprenti, un vieux maître qui cache quelque chose, et une lumière à partager."
        badges={['≈ 2 h (2 séances possibles)', 'Difficulté 2,5/5', '1 héros, dès 8 ans']}
      />

      <div className="space-y-16">
        <Intro />
        <StoryPrologue />
        <Chapitre1 />
        <Chapitre2 />
        <Chapitre3 />
        <Chapitre4 />
        <Chapitre5 />
        <Chapitre6 />
        <Chapitre7 />
        <Epilogue />
        <Galerie />
        <FinishAdventure trophyId="lanterne" />
      </div>
    </CampaignShell>
  );
}
