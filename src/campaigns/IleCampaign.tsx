import React from 'react';
import WorldHero from '../components/WorldHero';
import CampaignShell, { ShellSection } from '../components/CampaignShell';
import Intro from './ile/Intro';
import ProloguePage from './ile/Prologue';
import Chapitre1 from './ile/Chapitre1';
import Chapitre2 from './ile/Chapitre2';
import Chapitre3 from './ile/Chapitre3';
import Epilogue from './ile/Epilogue';
import Galerie from './ile/Galerie';
import Kit from './ile/Kit';
import FinishAdventure from '../components/FinishAdventure';

const sections: ShellSection[] = [
  { id: 'kit', label: '🖨️ Kit imprimable (à imprimer avant de jouer)', className: 'hover:bg-cyan-50 text-cyan-700' },
  { id: 'intro', label: 'Prologue, chrono et fiche', className: 'hover:bg-slate-50 text-slate-700' },
  { id: 'prologue', label: '📖 Prologue : le début de l\'histoire', className: 'hover:bg-cyan-50 text-cyan-700' },
  { id: 'chap1', label: 'Acte 1 : Le Naufrage de Poche', className: 'hover:bg-cyan-50 text-cyan-700' },
  { id: 'chap2', label: 'Acte 2 : La Jungle qui Ronfle', className: 'hover:bg-emerald-50 text-emerald-700' },
  { id: 'chap3', label: 'Acte 3 : Le Trésor qui Respire', className: 'hover:bg-amber-50 text-amber-700' },
  { id: 'epilogue', label: 'Épilogue et médailles', className: 'hover:bg-cyan-50 text-cyan-700' },
  { id: 'galerie', label: '🖼️ Galerie : lieux, personnages, objets', className: 'hover:bg-cyan-50 text-cyan-700' },
];

export default function IleCampaign({ onBack }: { onBack: () => void }) {
  return (
    <CampaignShell
      onBack={onBack}
      sections={sections}
      menuButtonClass="text-cyan-600 hover:text-cyan-700 border-cyan-200"
    >
      <WorldHero
        world="ile"
        overline="Aventure express pour un héros"
        title="L'Île qui Bougeait"
        subtitle="Un mousse, un perroquet qui se prend pour le chef, une île qui ronfle... et un trésor qui respire."
        badges={['30 – 40 min', 'Difficulté 2/5', '1 héros, dès 6 ans']}
      />

      <div className="space-y-16">
        <Kit />
        <Intro />
        <ProloguePage />
        <Chapitre1 />
        <Chapitre2 />
        <Chapitre3 />
        <Epilogue />
        <Galerie />
        <FinishAdventure trophyId="ile" />
      </div>
    </CampaignShell>
  );
}
