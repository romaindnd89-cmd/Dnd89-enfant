import React from 'react';
import WorldHero from '../components/WorldHero';
import CampaignShell, { ShellSection } from '../components/CampaignShell';
import Intro from './dragonneau/Intro';
import ProloguePage from './dragonneau/Prologue';
import Chapitre1 from './dragonneau/Chapitre1';
import Chapitre2 from './dragonneau/Chapitre2';
import Chapitre3 from './dragonneau/Chapitre3';
import Chapitre4 from './dragonneau/Chapitre4';
import Epilogue from './dragonneau/Epilogue';
import Galerie from './dragonneau/Galerie';
import FinishAdventure from '../components/FinishAdventure';

const sections: ShellSection[] = [
  { id: 'intro', label: 'Prologue, règles et fiches', className: 'hover:bg-slate-50 text-slate-700' },
  { id: 'prologue', label: '📖 Prologue : le début de l\'histoire', className: 'hover:bg-orange-50 text-orange-700' },
  { id: 'chap1', label: "Chapitre 1 : L'Œuf Vide", className: 'hover:bg-orange-50 text-orange-700' },
  { id: 'chap2', label: 'Chapitre 2 : La Forêt des Champignons', className: 'hover:bg-pink-50 text-pink-700' },
  { id: 'chap3', label: 'Chapitre 3 : Les Grottes de Cristal', className: 'hover:bg-sky-50 text-sky-700' },
  { id: 'chap4', label: 'Chapitre 4 : Le Nid du Mont Braise', className: 'hover:bg-rose-50 text-rose-700' },
  { id: 'epilogue', label: 'Épilogue : La Fête des Flammes', className: 'hover:bg-orange-50 text-orange-700' },
  { id: 'galerie', label: '🖼️ Galerie : lieux, personnages, objets', className: 'hover:bg-orange-50 text-orange-700' },
];

export default function DragonneauCampaign({ onBack }: { onBack: () => void }) {
  return (
    <CampaignShell
      onBack={onBack}
      sections={sections}
      menuButtonClass="text-orange-600 hover:text-orange-700 border-orange-200"
    >
      <WorldHero
        world="volcan"
        overline="Aventure d'initiation à deux"
        title="Le Dragonneau Perdu"
        subtitle="Un bébé dragon a peur de son propre feu. Deux apprentis partent le retrouver avant la nuit."
        badges={['1h30 – 2h', 'Difficulté 1/5', '2 héros, dès 6 ans']}
      />

      <div className="space-y-16">
        <Intro />
        <ProloguePage />
        <Chapitre1 />
        <Chapitre2 />
        <Chapitre3 />
        <Chapitre4 />
        <Epilogue />
        <Galerie />
        <FinishAdventure trophyId="dragonneau" />
      </div>
    </CampaignShell>
  );
}
