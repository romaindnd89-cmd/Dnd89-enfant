import React from 'react';
import CampaignLayout, { ChapterRef, LayoutTheme } from '../components/CampaignLayout';
import WorldHero from '../components/WorldHero';
import Intro from './lutins/Intro';
import Part1 from './lutins/Part1';
import Part2 from './lutins/Part2';
import Epilogue from './lutins/Epilogue';
import FinishAdventure from '../components/FinishAdventure';

const chapters: ChapterRef[] = [
  { id: 'intro', label: 'Prologue, règles et fiches' },
  { id: 'chap1', label: 'Salle 1 : La Grille qui Chatouille' },
  { id: 'chap2', label: 'Salle 2 : La Cuisine en Folie' },
  { id: 'chap3', label: 'Salle 3 : La Bibliothèque des Livres Volants' },
  { id: 'chap4', label: 'Salle 4 : La Galerie des Armures' },
  { id: 'chap5', label: 'Salle 5 : La Salle des Miroirs' },
  { id: 'chap6', label: 'Salle 6 : Le Trésor du Roi Pirouette' },
  { id: 'epilogue', label: 'Épilogue : La Grande Fête' },
];

const theme: LayoutTheme = {
  chipBg: 'bg-emerald-100 text-emerald-800 hover:bg-emerald-200',
  menuHeader: 'bg-emerald-50 text-emerald-900',
  menuItem: 'hover:bg-emerald-50 text-emerald-800',
  barFill: 'bg-gradient-to-r from-emerald-400 to-teal-500',
  check: 'text-emerald-600',
};

export default function LutinsCampaign({ onBack }: { onBack: () => void }) {
  return (
    <CampaignLayout campaignId="lutins" chapters={chapters} theme={theme} onBack={onBack}>
      <WorldHero
        world="lutins"
        overline="Aventure d'équipe"
        title="Le Trésor des Lutins Farceurs"
        subtitle="Six salles, six farces, un coffre à trois serrures. Entrez ensemble, ressortez les poches pleines."
        badges={['45 min – 1h15', 'Difficulté 1,5/5', '3 à 6 héros, dès 5 ans']}
      />

      <div className="space-y-12 px-1 sm:px-4">
        <Intro />
        <Part1 />
        <Part2 />
        <Epilogue />
        <FinishAdventure trophyId="lutins" />
      </div>
    </CampaignLayout>
  );
}
