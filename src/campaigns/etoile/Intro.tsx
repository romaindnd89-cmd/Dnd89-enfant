import React from 'react';
import { BookOpen, Download, Printer } from 'lucide-react';

export default function Intro() {
  const char1Url = "https://i.postimg.cc/PvHqKC4Y/1775768001882.png";
  const char2Url = "https://i.postimg.cc/K3bYQ1NL/1775770030176.png";

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
        <BookOpen className="w-8 h-8 text-emerald-500" />
        FICHES DE PERSONNAGES (DÉPART)
      </h2>
      
      <p className="text-lg text-slate-600 mb-8">
        Avant de commencer l'aventure, voici les fiches de vos deux héros : Aura et Kael. Vous pouvez les télécharger et les imprimer pour jouer !
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Personnage 1 */}
        <div className="bg-white p-6 rounded-3xl shadow-lg border border-slate-200 text-center">
          <h3 className="font-display text-xl font-bold text-slate-800 mb-4">Aura</h3>
          <div className="mb-6 rounded-xl overflow-hidden shadow-md border border-slate-200 bg-slate-50">
            <img 
              src={char1Url} 
              alt="Fiche de Personnage Aura" 
              className="w-full h-auto object-contain"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            <button 
              onClick={() => handleDownload(char1Url, 'Fiche_Aura.png')}
              className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-2 px-4 rounded-full transition-colors shadow-sm text-sm"
            >
              <Download className="w-4 h-4" />
              Enregistrer
            </button>
            <button 
              onClick={() => handlePrint(char1Url)}
              className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full transition-colors shadow-sm text-sm"
            >
              <Printer className="w-4 h-4" />
              Imprimer
            </button>
          </div>
        </div>

        {/* Personnage 2 */}
        <div className="bg-white p-6 rounded-3xl shadow-lg border border-slate-200 text-center">
          <h3 className="font-display text-xl font-bold text-slate-800 mb-4">Kael</h3>
          <div className="mb-6 rounded-xl overflow-hidden shadow-md border border-slate-200 bg-slate-50">
            <img 
              src={char2Url} 
              alt="Fiche de Personnage Kael" 
              className="w-full h-auto object-contain"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            <button 
              onClick={() => handleDownload(char2Url, 'Fiche_Kael.png')}
              className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-2 px-4 rounded-full transition-colors shadow-sm text-sm"
            >
              <Download className="w-4 h-4" />
              Enregistrer
            </button>
            <button 
              onClick={() => handlePrint(char2Url)}
              className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full transition-colors shadow-sm text-sm"
            >
              <Printer className="w-4 h-4" />
              Imprimer
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
