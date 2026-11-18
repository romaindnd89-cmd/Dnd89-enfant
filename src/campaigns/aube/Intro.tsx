import React from 'react';
import { ReadAloud, InfoBox } from '../../components/StoryBlocks';
import { BookOpen, Download, Printer } from 'lucide-react';

export default function Intro() {
  const charUrl = "https://i.postimg.cc/KjFtQz1v/1775862600448.png";

  const handleDownload = async (url: string, filename: string) => {
    try {
      const response = await fetch(url);
      const blob = await response.blob();
      const objectUrl = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = objectUrl;
      link.download = filename;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(objectUrl);
    } catch (error) {
      console.error("Erreur lors du téléchargement de l'image", error);
    }
  };

  const handlePrint = (url: string) => {
    const printWindow = window.open('', '_blank');
    if (printWindow) {
      printWindow.document.write(`
        <html>
          <head>
            <title>Fiche de Personnage</title>
            <style>
              body { margin: 0; display: flex; justify-content: center; align-items: center; min-height: 100vh; }
              img { max-width: 100%; max-height: 100vh; object-fit: contain; }
            </style>
          </head>
          <body>
            <img src="${url}" onload="window.print();window.close()" />
          </body>
        </html>
      `);
      printWindow.document.close();
    }
  };

  return (
    <section id="intro">
      <h2 className="font-display text-3xl font-bold text-slate-800 mb-6 flex items-center gap-3">
        <BookOpen className="w-8 h-8 text-amber-500" />
        LIVRE D'AVENTURE : L'HÉRITIER DE L'AUBE
      </h2>

      <h3 className="font-display text-2xl font-bold text-slate-700 mt-8 mb-4 flex items-center gap-2">
        <span className="text-blue-500">💠</span> Prologue : La Légende du Cristal de Vie
      </h3>
      <p className="mb-4 text-slate-700">
        Depuis le premier souffle du monde, l'équilibre des saisons repose sur un secret jalousement gardé par les dragons des cimes : <strong>l'Éclat de Soleil</strong>. Ce n'est pas une simple pierre précieuse, c'est un morceau de l'étoile du jour, tombé sur terre pour offrir la chaleur à ceux qui n'ont pas d'écailles pour se protéger du froid.
      </p>
      <p className="mb-4 text-slate-700">
        Pendant des siècles, la lignée des Dragons d'Argent a veillé sur lui dans la <strong>Citadelle de Cristal</strong>, une forteresse sculptée directement dans le flanc d'une montagne si haute qu'elle semble griffonner le ciel. Mais la paix est fragile. Dans les profondeurs de la Terre, là où la lumière ne pénètre jamais, les <strong>Ombrages</strong> — des créatures nées de la poussière et du regret — convoitent cette lumière pour l'éteindre à jamais et transformer le monde en un immense palais de glace éternelle.
      </p>

      <div className="mt-12 bg-white p-6 rounded-3xl shadow-lg border border-slate-200 text-center">
        <h3 className="font-display text-2xl font-bold text-slate-800 mb-6">Fiche de Personnage</h3>
        
        <div className="max-w-2xl mx-auto mb-8 rounded-xl overflow-hidden shadow-md border border-slate-200">
          <img 
            src={charUrl} 
            alt="Fiche de Personnage" 
            className="w-full h-auto object-contain"
            referrerPolicy="no-referrer"
          />
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          <button 
            onClick={() => handleDownload(charUrl, 'Fiche_Heritier_Aube.png')}
            className="flex items-center gap-2 bg-amber-600 hover:bg-amber-700 text-white font-bold py-3 px-6 rounded-full transition-colors shadow-md"
          >
            <Download className="w-5 h-5" />
            Enregistrer l'image
          </button>
          
          <button 
            onClick={() => handlePrint(charUrl)}
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
