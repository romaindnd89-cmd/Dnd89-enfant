import React from 'react';
import { ReadAloud, InfoBox } from '../../components/StoryBlocks';
import { Download, Printer } from 'lucide-react';

export default function Epilogue() {
  const certUrl = "https://i.postimg.cc/x8zcD2Bx/1775768031431.png";

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
            <title>Certificat d'Héroïsme</title>
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
    <div className="space-y-12">
      {/* CHAPITRE 10 */}
      <section id="chap10">
        <h2 className="font-display text-3xl font-bold text-slate-800 mb-6 border-b-2 border-slate-200 pb-2 mt-12">
          CHAPITRE 10 : LE RETOUR DE LA LÉGENDE (ÉPILOGUE)
        </h2>
        <div className="mb-6 text-slate-700">
          <p><strong>Ambiance :</strong> Aurores boréales, célébration, adieux touchants et renouveau.</p>
        </div>

        <h3 className="font-display text-2xl font-bold text-slate-700 mt-8 mb-4">
          SCÈNE 1 : LE RÉVEIL DU MONDE
        </h3>
        <ReadAloud title="Texte à lire à voix haute (D'une voix douce et apaisée) :">
          "Le rugissement de la machine s'est arrêté, remplacé par une mélodie cristalline. L'eau noire et poisseuse qui remplissait la Faille s'est transformée en un bleu lagon étincelant. Partout sur Pangéa, de la plage aux forêts, des volcans aux glaciers, la Mue Noire s'évapore comme un mauvais rêve au soleil du matin.<br/><br/>
          Vous nagez vers la surface, entourés de millions de bulles d'oxygène pur. Lorsque vous sortez la tête de l'eau, toute l'Armada de l'Espoir vous attend. Pince-Mi le crabe fait claquer sa pince de joie, le Duc Blizzard plane majestueusement sans son armure de glace, et Vulcain fait retentir sa corne de brume en signe de salut. Des centaines d'animaux crient vos noms : 'VIVE LES GARDIENS ! VIVE LES HÉROS D'ÉON !'"
        </ReadAloud>

        <h3 className="font-display text-2xl font-bold text-slate-700 mt-8 mb-4">
          SCÈNE 2 : L'ASCENSION D'ÉON (Le Dernier Adieu)
        </h3>
        <ReadAloud title="Texte à lire à voix haute :">
          "L'Étoile Éon sort doucement de sa sacoche de soie. Elle n'est plus cette petite boule de lumière blessée ; elle brille désormais d'un éclat si pur qu'elle semble faite de diamants fondus. Elle s'élève lentement dans le ciel de Pangéa, laissant derrière elle une traînée de poussière d'or.<br/><br/>
          Avant de rejoindre son perchoir dans la constellation des Veilleurs, elle s'arrête un instant devant vous. Elle dépose une étincelle de chaleur sur votre front — un cadeau pour que vous n'ayez plus jamais peur du noir. Puis, dans un éclat éblouissant, elle rejoint le firmament. Là-haut, une nouvelle étoile brille, plus forte que toutes les autres : l'Étoile de l'Amitié."
        </ReadAloud>

        <div className="mt-12 p-8 bg-gradient-to-br from-indigo-50 to-purple-50 border-2 border-indigo-200 rounded-3xl">
          <h3 className="font-display text-2xl font-bold text-indigo-900 mb-6 text-center">
            🛡️ FICHES DE PERSONNAGES : ÉDITION LÉGENDAIRE
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* AURA */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-indigo-100">
              <h4 className="font-display text-xl font-bold text-indigo-800 mb-2">🕯️ AURA : LA SOUVERAINE DE L'AUBE</h4>
              <p className="text-indigo-600 italic mb-4">Titre : Grande Guérisseuse de Pangéa et Gardienne de la Paix.</p>
              <ul className="list-disc pl-5 space-y-2 text-slate-700">
                <li><strong>Niveau Final :</strong> 5 (Héroïne Légendaire).</li>
                <li><strong>Points de Vie (PV) :</strong> 55 (Augmentés par l'Amulette des Vents).</li>
                <li><strong>Armure (CA) :</strong> 18 (Grâce au Casque du Contremaître et aux bénédictions).</li>
                <li><strong>Attributs de Légende :</strong>
                  <ul className="list-circle pl-5 mt-1 text-sm">
                    <li><strong>MAGIE :</strong> +6 (Maîtresse absolue de la lumière et de la purification).</li>
                    <li><strong>CŒUR :</strong> +5 (Capable de guérir les cœurs les plus sombres).</li>
                  </ul>
                </li>
                <li><strong>Inventaire Mythique :</strong> La Couronne des 4 Cristaux (Jaune, Vert, Rouge, Bleu) qui empêche toute tristesse d'approcher.</li>
              </ul>
            </div>

            {/* KAEL */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-indigo-100">
              <h4 className="font-display text-xl font-bold text-indigo-800 mb-2">🗡️ KAEL : LE SEIGNEUR DU CRÉPUSCULE</h4>
              <p className="text-indigo-600 italic mb-4">Titre : Briseur de Chaînes et Protecteur du Firmament.</p>
              <ul className="list-disc pl-5 space-y-2 text-slate-700">
                <li><strong>Niveau Final :</strong> 5 (Héroïne Légendaire).</li>
                <li><strong>Points de Vie (PV) :</strong> 65 (Le rempart inébranlable du groupe).</li>
                <li><strong>Armure (CA) :</strong> 17 (Grâce à la Carapace du Bâtisseur et aux lunettes de vision).</li>
                <li><strong>Attributs de Légende :</strong>
                  <ul className="list-circle pl-5 mt-1 text-sm">
                    <li><strong>MUSCLE :</strong> +6 (Fracasse l'acier corrompu d'un seul coup).</li>
                    <li><strong>VITESSE :</strong> +4 (Agile comme une ombre dans la nuit).</li>
                  </ul>
                </li>
                <li><strong>Inventaire Mythique :</strong> Le Trident du Roi Pélagique (Weapon +2, 1d10+2 dégâts).</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <h3 className="font-display text-3xl font-bold text-slate-800 mb-8">
            📜 CERTIFICAT D'HÉROÏSME
          </h3>
          
          <div className="max-w-2xl mx-auto bg-white p-4 rounded-3xl shadow-xl border border-slate-200 mb-8">
            <img 
              src={certUrl} 
              alt="Certificat d'Héroïsme" 
              className="w-full h-auto rounded-2xl"
              referrerPolicy="no-referrer"
            />
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <button 
              onClick={() => handleDownload(certUrl, 'Certificat_Heroisme.png')}
              className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-6 rounded-full transition-colors shadow-md text-lg"
            >
              <Download className="w-5 h-5" />
              Télécharger le Certificat
            </button>
            <button 
              onClick={() => handlePrint(certUrl)}
              className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full transition-colors shadow-md text-lg"
            >
              <Printer className="w-5 h-5" />
              Imprimer le Certificat
            </button>
          </div>
          
          <div className="mt-8 text-slate-600 italic max-w-2xl mx-auto">
            <p>Par la présente, le Conseil de Pangéa certifie que les deux héros ayant sauvé l'Étoile Éon ont fait preuve d'un courage exceptionnel, d'une grande intelligence pour résoudre les énigmes, et d'un cœur immense pour sauver ceux qui souffraient. Ils ont vaincu la Mue Noire et ramené les couleurs sur notre monde.</p>
            <p className="mt-4 font-bold text-slate-800">Félicitations pour votre première victoire en Jeu de Rôle !</p>
          </div>
        </div>
      </section>
    </div>
  );
}
