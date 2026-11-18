import React from 'react';
import WorldHero from '../components/WorldHero';
import CampaignShell, { ShellSection } from '../components/CampaignShell';
import Intro from './lutins/Intro';
import ProloguePage from './lutins/Prologue';
import Chapitre1 from './lutins/Chapitre1';
import Chapitre2 from './lutins/Chapitre2';
import Chapitre3 from './lutins/Chapitre3';
import Chapitre4 from './lutins/Chapitre4';
import Chapitre5 from './lutins/Chapitre5';
import Chapitre6 from './lutins/Chapitre6';
import Epilogue from './lutins/Epilogue';
import Galerie from './lutins/Galerie';
import FinishAdventure from '../components/FinishAdventure';

const sections: ShellSection[] = [
  { id: 'intro', label: 'Prologue, règles et fiches', className: 'hover:bg-slate-50 text-slate-700' },
  { id: 'prologue', label: '📖 Prologue : le début de l\'histoire', className: 'hover:bg-emerald-50 text-emerald-700' },
  { id: 'chap1', label: 'Salle 1 : La Grille qui Chatouille', className: 'hover:bg-emerald-50 text-emerald-700' },
  { id: 'chap2', label: 'Salle 2 : La Cuisine en Folie', className: 'hover:bg-amber-50 text-amber-700' },
  { id: 'chap3', label: 'Salle 3 : La Bibliothèque des Livres Volants', className: 'hover:bg-sky-50 text-sky-700' },
  { id: 'chap4', label: 'Salle 4 : La Galerie des Armures', className: 'hover:bg-rose-50 text-rose-700' },
  { id: 'chap5', label: 'Salle 5 : La Salle des Miroirs', className: 'hover:bg-violet-50 text-violet-700' },
  { id: 'chap6', label: 'Salle 6 : Le Trésor du Roi Pirouette', className: 'hover:bg-yellow-50 text-yellow-700' },
  { id: 'epilogue', label: 'Épilogue : La Grande Fête', className: 'hover:bg-emerald-50 text-emerald-700' },
  { id: 'galerie', label: '🖼️ Galerie : lieux, personnages, objets', className: 'hover:bg-emerald-50 text-emerald-700' },
];

export default function LutinsCampaign({ onBack }: { onBack: () => void }) {
  return (
    <CampaignShell
      onBack={onBack}
      sections={sections}
      menuButtonClass="text-emerald-600 hover:text-emerald-700 border-emerald-200"
    >
      <WorldHero
        world="lutins"
        overline="Aventure d'équipe"
        title="Le Trésor des Lutins Farceurs"
        subtitle="Six salles, six farces, un coffre à trois serrures. Entrez ensemble, ressortez les poches pleines."
        badges={['1h15 – 1h45', 'Difficulté 1,5/5', '3 à 6 héros, dès 5 ans']}
      />

      <div className="space-y-16">
        <Intro />
        <ProloguePage />
        <Chapitre1 />
        <Chapitre2 />
        <Chapitre3 />
        <Chapitre4 />
        <Chapitre5 />
        <Chapitre6 />
        <Epilogue />
        <Galerie />
        <FinishAdventure trophyId="lutins" />
      </div>
    </CampaignShell>
  );
}
