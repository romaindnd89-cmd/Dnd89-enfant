import React from 'react';
import WorldHero from '../components/WorldHero';
import CampaignShell, { ShellSection } from '../components/CampaignShell';
import Intro from './couronne/Intro';
import Chapitre1 from './couronne/Chapitre1';
import Chapitre2 from './couronne/Chapitre2';
import Chapitre3 from './couronne/Chapitre3';
import Chapitre4 from './couronne/Chapitre4';
import Chapitre5 from './couronne/Chapitre5';
import Chapitre6 from './couronne/Chapitre6';
import Chapitre7 from './couronne/Chapitre7';
import Chapitre8 from './couronne/Chapitre8';
import Epilogue from './couronne/Epilogue';
import FinishAdventure from '../components/FinishAdventure';

const sections: ShellSection[] = [
  { id: 'intro', label: 'Prologue, règles et fiche', className: 'hover:bg-slate-50 text-slate-700' },
  { id: 'chap1', label: "Chapitre 1 : Une couronne, ça ne s'évapore pas", className: 'hover:bg-fuchsia-50 text-fuchsia-700' },
  { id: 'chap2', label: 'Chapitre 2 : La Forêt des Brigands Poètes', className: 'hover:bg-emerald-50 text-emerald-700' },
  { id: 'chap3', label: 'Chapitre 3 : La Mare des Canards Syndiqués', className: 'hover:bg-sky-50 text-sky-700' },
  { id: 'chap4', label: 'Chapitre 4 : Le Marché aux Menteurs', className: 'hover:bg-amber-50 text-amber-700' },
  { id: 'chap5', label: 'Chapitre 5 : Le Château du Baron Cornichon', className: 'hover:bg-rose-50 text-rose-700' },
  { id: 'chap6', label: 'Chapitre 6 : Les Cachots et la Grande Surprise', className: 'hover:bg-violet-50 text-violet-700' },
  { id: 'chap7', label: 'Chapitre 7 : La Course vers le Palais', className: 'hover:bg-orange-50 text-orange-700' },
  { id: 'chap8', label: 'Chapitre 8 : Le Grand Banquet', className: 'hover:bg-yellow-50 text-yellow-700' },
  { id: 'epilogue', label: 'Épilogue : Le Royaume qui Rit', className: 'hover:bg-fuchsia-50 text-fuchsia-700' },
];

export default function CouronneCampaign({ onBack }: { onBack: () => void }) {
  return (
    <CampaignShell
      onBack={onBack}
      sections={sections}
      menuButtonClass="text-fuchsia-600 hover:text-fuchsia-700 border-fuchsia-200"
    >
      <WorldHero
        world="royaume"
        overline="Enquête pour un héros"
        title="La Couronne du Rire"
        subtitle="Un vol, une trahison, un coupable inattendu et un royaume qui ne doit surtout pas arrêter de rire."
        badges={['3h – 4h30 (3 séances)', 'Difficulté 3/5', '1 héros, dès 8 ans']}
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
        <Epilogue />
        <FinishAdventure trophyId="couronne" />
      </div>
    </CampaignShell>
  );
}
