import React from 'react';
import { ReadAloud } from '../../components/StoryBlocks';
import { Download, Printer } from 'lucide-react';

export default function Epilogue() {
  const imageUrl = "https://i.postimg.cc/fRHKTn2L/1775683865184.png";

  const handlePrint = () => {
    const printWindow = window.open('', '_blank');
    if (printWindow) {
      printWindow.document.write(`
        <html>
          <head>
            <title>Fiche Légendaire - Bouboule</title>
            <style>
              body { margin: 0; display: flex; justify-content: center; align-items: center; height: 100vh; background-color: white; }
              img { max-width: 100%; max-height: 100vh; object-fit: contain; }
            </style>
          </head>
          <body>
            <img src="${imageUrl}" onload="window.print(); window.close();" />
          </body>
        </html>
      `);
      printWindow.document.close();
    }
  };

  const handleDownload = async () => {
    try {
      const response = await fetch(imageUrl);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'Fiche_Bouboule_Legendaire.png';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      const a = document.createElement('a');
      a.href = imageUrl;
      a.download = 'Fiche_Bouboule_Legendaire.png';
      a.target = '_blank';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    }
  };

  return (
    <section id="epilogue">
      <h2 className="font-display text-4xl font-bold text-indigo-700 mb-6 border-b-4 border-indigo-200 pb-2 mt-16">
        👑 ÉPILOGUE : LE RETOUR DE LA LÉGENDE
      </h2>
      
      <ReadAloud title="Texte à lire à voix haute">
        *"Tu nages vers la surface, entourée de milliers de bulles d'oxygène pur. Quand tu sors la tête de l'eau, le soleil brille fort. Toute l'Armada de l'Espoir t'attend.<br/><br/>
        Gaspard le castor tape de la queue, le Duc Blizzard plane majestueusement dans le ciel sans sa glace noire, Lumina la méduse danse sur l'eau... Des centaines d'animaux crient ton nom : 'VIVE BOUBOULE ! VIVE LE CACHALOT MAGIQUE !'<br/><br/>
        Tu as réussi, Bouboule. Tu n'as pas seulement vaincu des monstres avec tes muscles ou ta magie, tu as sauvé un monde entier avec ton grand cœur. L'aventure est terminée... pour l'instant ! Quelle histoire merveilleuse tu as écrite aujourd'hui !"*
      </ReadAloud>

      <p className="mt-8 mb-6 text-slate-600 font-medium">Voici la Fiche de Personnage "Édition Légendaire", qui reflète toute l'évolution de Bouboule depuis la petite plage du Lagon de Cristal jusqu'à la sauvegarde du monde.</p>

      <div className="p-8 bg-gradient-to-br from-amber-100 to-orange-100 rounded-3xl border-4 border-amber-300 shadow-xl relative overflow-hidden">
        <div className="absolute top-0 right-0 p-4 opacity-20 text-8xl">🏆</div>
        <h3 className="font-display text-3xl font-bold text-amber-900 mb-6 text-center">🏆 FICHE DE PERSONNAGE FINALE : ÉDITION LÉGENDAIRE 🏆</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
          <div>
            <h4 className="font-bold text-amber-800 text-xl mb-3 border-b border-amber-200 pb-2 flex items-center gap-2">
              🐋 IDENTITÉ HÉROÏQUE
            </h4>
            <ul className="space-y-3 text-amber-900 font-medium">
              <li><strong>Nom de l'Héroïne :</strong> Bouboule</li>
              <li><strong>Espèce :</strong> Cachalot Magique</li>
              <li><strong>Titre Officiel :</strong> La Sauveuse de Pangéa, Gardienne des 4 Cristaux, et Amie des Bêtes.</li>
              <li><strong>Niveau Final :</strong> Niveau 5 (Héroïne Légendaire)</li>
            </ul>

            <h4 className="font-bold text-amber-800 text-xl mt-8 mb-3 border-b border-amber-200 pb-2 flex items-center gap-2">
              🎒 L'INVENTAIRE MYTHIQUE (Ses plus beaux trésors)
            </h4>
            <ul className="space-y-3 text-amber-900 text-sm">
              <li>👑 <strong>La Couronne des 4 Cristaux du Rire :</strong> Un diadème tressé de lianes sur lequel brillent les cristaux Jaune, Vert, Rouge et Bleu. Il dégage une lumière qui empêche la tristesse de s'approcher.</li>
              <li>🔱 <strong>Le Trident du Roi Pélagique :</strong> Une arme ancienne des profondeurs, qui crépite d'énergie pure.</li>
              <li>🧣 <strong>La Cape Rouge (ou Manteau d'Aurore) :</strong> Sa marque de fabrique, qui claque au vent lorsqu'elle flotte dans les airs.</li>
              <li>🎒 <strong>Le Sac-à-Merveilles :</strong> Contient un sifflet de pirate, de la soupe magique infinie, et des tas de petits souvenirs ramassés lors de l'aventure.</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-amber-800 text-xl mb-3 border-b border-amber-200 pb-2 flex items-center gap-2">
              📈 STATISTIQUES DE LÉGENDE
            </h4>
            <p className="text-sm text-amber-700 italic mb-4">(Grâce à ses entraînements, ses combats et la magie du monde, Bouboule est plus forte que jamais)</p>
            <ul className="space-y-3 text-amber-900 font-medium mb-6">
              <li><strong>Points de Vie (PV) Maximums :</strong> 65 PV (Une véritable forteresse des mers !)</li>
              <li><strong>Armure (Défense) Finale :</strong> 17 (Grâce à sa taille, sa magie et ses équipements d'élite).</li>
            </ul>

            <p className="font-bold text-amber-800 mb-2">Les 4 Caractéristiques Héroïques :</p>
            <ul className="space-y-3 text-amber-900 bg-white/40 p-4 rounded-xl">
              <li>💪 <strong>MUSCLE : +5</strong> (Capable de fracasser le goudron et l'acier d'un seul coup de queue).</li>
              <li>✨ <strong>MAGIE : +4</strong> (Maîtresse absolue des bulles d'eau, du givre et de la guérison).</li>
              <li>💖 <strong>CŒUR : +3</strong> (Une empathie légendaire qui transforme les monstres en amis).</li>
              <li>💨 <strong>VITESSE : +1</strong> (Aujourd'hui agile, même hors de l'eau, grâce à sa maîtrise de la lévitation).</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 relative z-10">
          <h4 className="font-bold text-amber-800 text-xl mb-3 border-b border-amber-200 pb-2 flex items-center gap-2">
            🤝 LE PANTHÉON DES AMIS (Son alliance)
          </h4>
          <p className="text-amber-900 mb-4">Bouboule ne se bat jamais seule. Elle peut désormais appeler à l'aide :</p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-amber-900 text-sm">
            <li>🦀 <strong>Pince-Mi le Crabe :</strong> Le maître bâtisseur de la plage.</li>
            <li>🦫 <strong>Gaspard le Castor :</strong> L'ingénieur des forêts.</li>
            <li>🐐 <strong>Cornélius le Bouquetin :</strong> Le guide intrépide des volcans.</li>
            <li>🐻‍❄️ <strong>Polaire l'Ours :</strong> Le cuisinier au grand cœur des Pics d'Argent.</li>
            <li>🐸 <strong>Ignis la Grenouille & Lumina la Méduse :</strong> Ses petits familiers magiques.</li>
            <li>🦉 <strong>Le Duc Blizzard & 🐢 Vulcain :</strong> Les anciens boss, devenus les sages protecteurs de Pangéa.</li>
          </ul>
        </div>

        <div className="mt-12 bg-white/60 p-6 rounded-2xl border-2 border-amber-400 border-dashed relative z-10 text-center">
          <h4 className="font-display text-2xl font-bold text-amber-900 mb-4">📜 CERTIFICAT D'HÉROÏSME</h4>
          <p className="text-amber-900 mb-6">Par la présente, le Conseil de Pangéa certifie que :</p>
          <p className="text-amber-900 mb-8 leading-relaxed">
            La joueuse ayant incarné <strong>Bouboule</strong> a fait preuve d'un courage exceptionnel, d'une grande intelligence pour résoudre les énigmes, et d'un cœur immense pour sauver ceux qui souffraient. Elle a vaincu la Mue Noire et ramené les couleurs sur notre monde.<br/><br/>
            <strong>Félicitations pour ta première victoire en Jeu de Rôle !</strong>
          </p>
          
          <div className="flex justify-between items-end mt-12 px-4 sm:px-12">
            <div className="text-left">
              <p className="text-amber-800 italic mb-1">Signature de l'Héroïne :</p>
              <div className="w-48 border-b-2 border-amber-800"></div>
            </div>
            <div className="text-right">
              <p className="text-amber-800 italic mb-1">Signature du Maître du Jeu (Papa) :</p>
              <div className="w-48 border-b-2 border-amber-800"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12 bg-white p-6 rounded-3xl shadow-lg border border-slate-200 text-center">
        <h3 className="font-display text-2xl font-bold text-slate-800 mb-6">Fiche de Personnage Officielle</h3>
        
        <div className="max-w-2xl mx-auto mb-8 rounded-xl overflow-hidden shadow-md border border-slate-200">
          <img 
            src={imageUrl} 
            alt="Fiche de Personnage de Bouboule" 
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

      <p className="mt-12 text-center text-slate-600 font-medium text-lg italic">
        Un grand bravo à ta fille pour ses excellentes idées, et à toi, Maître du Jeu, pour l'avoir guidée avec autant de patience et d'imagination dans cette magnifique épopée !
      </p>
    </section>
  );
}
