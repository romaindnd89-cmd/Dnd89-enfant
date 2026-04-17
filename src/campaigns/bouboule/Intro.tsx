import React from 'react';
import { ReadAloud, CombatBox, ActionBox, InfoBox } from '../../components/StoryBlocks';
import { BookOpen, Download, Printer } from 'lucide-react';

export default function Intro() {
  const imageUrl = "https://i.postimg.cc/xj5cVYT7/1775687426462.png";

  const handleDownload = async () => {
    try {
      const response = await fetch(imageUrl);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'Fiche_Personnage_Bouboule_Depart.png';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Erreur lors du téléchargement de l'image", error);
    }
  };

  const handlePrint = () => {
    const printWindow = window.open('', '_blank');
    if (printWindow) {
      printWindow.document.write(`
        <html>
          <head>
            <title>Fiche de Personnage (Départ) - Bouboule</title>
            <style>
              body { margin: 0; display: flex; justify-content: center; align-items: center; min-height: 100vh; }
              img { max-width: 100%; max-height: 100vh; object-fit: contain; }
            </style>
          </head>
          <body>
            <img src="${imageUrl}" onload="window.print();window.close()" />
          </body>
        </html>
      `);
      printWindow.document.close();
    }
  };

  return (
    <section id="intro">
      <h2 className="font-display text-3xl font-bold text-slate-800 mb-6 flex items-center gap-3">
        <BookOpen className="w-8 h-8 text-emerald-500" />
        MANUEL DU MAÎTRE : PANGÉA, L'ÈRE DE L'ÉVEIL
      </h2>
      
      <InfoBox title="INTRODUCTION : L'HISTOIRE DU MONDE">
        <p className="mb-4">Il y a de cela des millénaires, la Terre était dominée par les "Bipèdes Sans Poils" (les humains). Leurs cités de pierre et de métal touchaient les nuages, et leurs navires d'acier fendaient les abysses. Puis, un événement appelé <strong>Le Grand Départ</strong> s'est produit. Les humains ont quitté la planète dans des vaisseaux de feu pour rejoindre les étoiles, laissant derrière eux leurs créations.</p>
        
        <p className="mb-4">En traversant l'atmosphère, le carburant magique de leurs vaisseaux est retombé sur la Terre sous forme de <strong>Poussière d'Étoile</strong>. Cette pluie dorée a duré cent jours et cent nuits. Elle s'est infiltrée dans les océans, les forêts et les montagnes. La Poussière d'Étoile a offert le Don de l'Éveil aux animaux : la conscience, le langage, la bipédie pour certains, et des pouvoirs extraordinaires pour d'autres.</p>
        
        <p>Aujourd'hui, la Terre s'appelle <strong>Pangéa</strong>. Les anciennes métropoles humaines sont devenues des jungles luxuriantes habitées par des tribus de macaques érudits, et les épaves de sous-marins nucléaires sont les palais de corail des Rois des Océans. C'est une ère de paix relative, où la nature et la magie ont repris leurs droits.</p>
      </InfoBox>

      <InfoBox title="LE FLÉAU : LA MUE NOIRE ET LA BRUME GRISE">
        <p className="mb-4">La campagne tourne autour d'une menace grandissante : la Mue Noire. Ce n'est pas un monstre, mais une corruption magique causée par de vieilles machines humaines enfouies qui se sont remises en marche toutes seules.</p>
        
        <ul className="list-disc pl-5 space-y-4">
          <li><strong>Stade 1 - La Brume Grise :</strong> Une fumée épaisse qui vole les couleurs et la joie. Les créatures qui la respirent perdent leur motivation, deviennent extrêmement tristes, apathiques ou grognons.</li>
          <li><strong>Stade 2 - La Mue Noire :</strong> Si la brume se condense, elle devient un goudron magique. Les animaux touchés sont recouverts d'une armure d'obsidienne poisseuse. Ils perdent la raison et deviennent des bêtes féroces et agressives qui attaquent tout ce qui n'est pas corrompu.</li>
        </ul>
      </InfoBox>

      <div className="mt-12 bg-white p-6 rounded-3xl shadow-lg border border-slate-200 text-center">
        <h3 className="font-display text-2xl font-bold text-slate-800 mb-6">Fiche de Personnage (Départ)</h3>
        
        <div className="max-w-2xl mx-auto mb-8 rounded-xl overflow-hidden shadow-md border border-slate-200">
          <img 
            src={imageUrl} 
            alt="Fiche de Personnage de Bouboule (Départ)" 
            className="w-full h-auto object-contain"
            referrerPolicy="no-referrer"
          />
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          <button 
            onClick={handleDownload}
            className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-6 rounded-full transition-colors shadow-md"
          >
            <Download className="w-5 h-5" />
            Enregistrer l'image
          </button>
          
          <button 
            onClick={handlePrint}
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full transition-colors shadow-md"
          >
            <Printer className="w-5 h-5" />
            Imprimer
          </button>
        </div>
      </div>
    </section>
  );
}
