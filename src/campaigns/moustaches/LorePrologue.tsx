import React from 'react';
import { ReadAloud, InfoBox } from '../../components/StoryBlocks';
import { BookOpen, Download, Printer } from 'lucide-react';

export default function LorePrologue() {
  const imageUrl = "https://i.postimg.cc/KzZ3tY8r/1775688655398.png";

  const handleDownload = async () => {
    try {
      const response = await fetch(imageUrl);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'Fiche_Personnage_Moustaches.png';
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
            <title>Fiche de Personnage - Le Royaume des Moustaches</title>
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
    <section id="lore">
      <h2 className="font-display text-3xl font-bold text-slate-800 mb-6 flex items-center gap-3">
        <BookOpen className="w-8 h-8 text-emerald-500" />
        LE LORE : LE ROYAUME DE MIAOU-VILLE
      </h2>
      <InfoBox title="Pour le Maître du Jeu">
        <p className="italic mb-4">(Cette partie est pour toi, le Maître du Jeu, pour bien comprendre le monde, mais tu peux aussi lui résumer l'histoire avant de commencer à jouer).</p>
        <p className="mb-4">Le monde d'Aïlouros est un monde pacifique où les animaux marchent sur deux pattes, parlent, et vivent comme des humains au Moyen-Âge, mais avec la magie en plus.</p>
        <p className="mb-4">Au cœur de la Forêt des Arbres à Chat géants se trouve <strong>Miaou-Ville</strong>, la capitale des félins. Les rues sont pavées de galets doux pour les coussinets, les toits sont de grands coussins colorés, et des rivières de lait frais traversent la cité.</p>
        <p className="mb-4"><strong>Le pouvoir de la ville repose sur un artefact magique : La Croquette Sacrée.</strong></p>
        <p className="mb-4">C'est une relique dorée, grosse comme un ballon de football. Elle repose sur la Place du Marché. Elle dégage une aura magique qui protège la ville des maladies, donne un goût délicieux à toute la nourriture, et surtout... elle éloigne les créatures nuisibles des souterrains. Sans elle, la magie de la ville s'éteint, le lait tourne au vinaigre, et les ombres s'allongent.</p>
        <p>Ta fille incarne une <strong>Aventurière</strong>. Elle est la seule de la ville à savoir se battre. Elle possède <strong>20 Points de Vie (PV)</strong>, une <strong>Classe d'Armure (CA) de 14</strong> (les monstres doivent faire 14 ou plus au D20 pour la toucher), et elle est équipée de l'arme de son choix.</p>
      </InfoBox>

      <h2 className="font-display text-3xl font-bold text-slate-800 mb-6 mt-12">
        🎬 LE PROLOGUE (À lire avant de lancer les dés)
      </h2>
      <ReadAloud title="À lire à voix haute avec une voix de conteur épique">
        "Il y a des centaines d'années, les anciens chats ont forgé la Croquette Sacrée pour apporter la paix. Depuis ce jour, Miaou-Ville est un paradis. Tu es l'Héroïne de cette ville. Tu as été entraînée par les plus grands maîtres-chats pour protéger les habitants. Mais cette nuit, pendant que tu dormais profondément, un événement terrible s'est produit. L'alarme de la ville, la Grande Cloche d'Airain, s'est mise à sonner à toute volée : GONG ! GONG ! GONG ! La magie vient de s'éteindre. L'aventure commence... maintenant !"
      </ReadAloud>

      <div className="mt-12 bg-white p-6 rounded-3xl shadow-lg border border-slate-200 text-center">
        <h3 className="font-display text-2xl font-bold text-slate-800 mb-6">Fiche de Personnage Officielle</h3>
        
        <div className="max-w-2xl mx-auto mb-8 rounded-xl overflow-hidden shadow-md border border-slate-200">
          <img 
            src={imageUrl} 
            alt="Fiche de Personnage du Royaume des Moustaches" 
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
