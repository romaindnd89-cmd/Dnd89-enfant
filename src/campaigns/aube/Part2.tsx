import React from 'react';
import { ReadAloud, CombatBox, ActionBox, InfoBox } from '../../components/StoryBlocks';

export default function Part2() {
  return (
    <div className="space-y-12">
      {/* CHAPITRE 4 */}
      <section id="chap4">
        <h2 className="font-display text-3xl font-bold text-slate-800 mb-6 border-b-2 border-slate-200 pb-2 mt-12 flex items-center gap-2">
          <span className="text-2xl">🌲</span> CHAPITRE 4 : LE VILLAGE DES MURMURES ET LES OMBRES ÉGARÉES
        </h2>

        <h3 className="font-display text-2xl font-bold text-slate-700 mt-8 mb-4">
          La Narration : L'entrée dans la Forêt
        </h3>
        <ReadAloud title="Texte à lire à voix haute :">
          "En posant tes pattes au sol après ta descente du pont, tu sens la terre ferme pour la première fois. Ici, l'air n'est plus pur et glacé, il est lourd et sent la mousse humide et le bois pourri. Tu pénètres dans la Forêt des Ombres Longues.<br/><br/>
          Les arbres ici sont immenses, leurs racines ressemblent à des doigts tordus qui sortent du sol. Mais quelque chose ne va pas. En arrivant à l'entrée d'un petit village de terriers, tu vois des lapins-sylvains et des hérissons-mousses qui courent dans tous les sens, paniqués. Ils ne te regardent même pas. Ils fixent le sol avec horreur. En regardant bien, tu comprends pourquoi : <strong>sous leurs pattes, il n'y a plus rien</strong>. Leurs ombres ont disparu, comme si elles avaient été découpées aux ciseaux."
        </ReadAloud>

        <h3 className="font-display text-2xl font-bold text-slate-700 mt-8 mb-4">
          L'Interaction : Le Chef des Hérissons
        </h3>
        <p className="mb-4 text-slate-700">
          Un vieux hérisson dont les épines sont couvertes de fleurs de jasmin s'approche de toi en tremblant. Il s'appelle <strong>Pic-Piquant</strong>.
        </p>
        <ReadAloud title="Texte à lire à voix haute :">
          "Noble dragonneau ! Quel malheur nous frappe ! Le voleur à la cape violette est passé par ici avec l'Éclat de Soleil. Mais la gemme est corrompue par sa magie noire. Partout où il passe, la lumière est si étrange que nos ombres s'effrayent et s'enfuient pour se cacher dans la forêt ! Sans nos ombres, nous allons nous affaiblir et disparaître... Aide-nous à les retrouver !"
        </ReadAloud>

        <ActionBox title="La Mécanique de Jeu (Investigation)">
          <ul className="list-disc pl-5 space-y-4">
            <li><strong>Objectif :</strong> Retrouver les ombres cachées dans les fourrés pour rassurer les villageois et obtenir des informations sur la direction prise par le voleur.</li>
            <li><strong>Jet de dé :</strong> Lance un <strong>D20 (Sagesse/Perception)</strong>.
              <ul className="list-circle pl-5 mt-2 space-y-2 text-sm">
                <li><strong>Réussite (12+) :</strong> Tu repères les ombres qui se cachent derrière les troncs bleus. Tu utilises tes écailles dorées pour briller doucement, ce qui rassure les ombres et les aide à revenir vers leurs propriétaires.</li>
                <li><strong>Échec (-12) :</strong> Tu marches sur une branche bruyante et les ombres s'enfoncent plus profondément dans les ronces. Tu devras les attirer avec une friandise ou une chanson de dragon.</li>
              </ul>
            </li>
          </ul>
        </ActionBox>
      </section>

      {/* CHAPITRE 5 */}
      <section id="chap5">
        <h2 className="font-display text-3xl font-bold text-slate-800 mb-6 border-b-2 border-slate-200 pb-2 mt-12 flex items-center gap-2">
          <span className="text-2xl">💧</span> CHAPITRE 5 : LE MARAIS DE LA MÉLASSE
        </h2>

        <h3 className="font-display text-2xl font-bold text-slate-700 mt-8 mb-4">
          La Narration : Un Terrain Piégeux
        </h3>
        <ReadAloud title="Texte à lire à voix haute :">
          "Grâce aux indications des villageois, tu atteins la lisière du Marais Noir. Ici, l'eau n'est pas claire, elle est épaisse et sombre comme de la mélasse liquide. Des bulles éclatent à la surface avec un bruit de succion : <em>Plop... Splotch...</em><br/><br/>
          Tu aperçois au milieu du marais une petite île de pierre où le voleur semble s'être arrêté pour se reposer. Mais entre lui et toi, le chemin est un véritable casse-tête. Des nénuphars géants flottent sur la mélasse, mais ils ne semblent pas très solides. Dans l'ombre des roseaux, tu vois des yeux jaunes qui t'observent. Ce sont les <strong>Crapauds-Gorgones</strong>, les gardiens du marais."
        </ReadAloud>

        <CombatBox title="Les Statistiques : Les Crapauds-Gorgones">
          <ul className="list-disc pl-5 space-y-2 mb-4">
            <li><strong>PV :</strong> 10 chacun.</li>
            <li><strong>CA :</strong> 11.</li>
            <li><strong>Attaque Spéciale (Langue Collante) :</strong> Ils lancent leur langue jusqu'à 3 mètres. Si tu es touché, tu es attiré dans la mélasse collante !</li>
            <li><strong>Malus de Mélasse :</strong> Si tu tombes dedans, ta vitesse est divisée par deux et tu ne peux plus t'envoler tant que tu ne t'es pas nettoyé les ailes.</li>
          </ul>
        </CombatBox>

        <h3 className="font-display text-2xl font-bold text-slate-700 mt-8 mb-4 flex items-center gap-2">
          <span className="text-2xl">🧩</span> SCÈNE DE JEU : LE SAUT DES NÉNUPHARS
        </h3>
        <p className="mb-4 text-slate-700">Le joueur doit décider comment traverser.</p>
        
        <ActionBox title="Options de Traversée">
          <ol className="list-decimal pl-5 space-y-4">
            <li><strong>La Voie Aérienne :</strong> Tenter de voler au-dessus. Mais attention, les bulles de gaz du marais peuvent exploser et te déséquilibrer. (Lance un <strong>D20 d'Acrobatie</strong>).</li>
            <li><strong>La Voie du Saut :</strong> Sauter de nénuphar en nénuphar. (Lance un <strong>D20 d'Athlétisme</strong>).</li>
            <li><strong>Le Combat :</strong> Utiliser ton souffle de lumière pour effrayer les crapauds et les forcer à te laisser passer sur les ponts de racines.</li>
          </ol>
        </ActionBox>

        <div className="mt-8 p-6 bg-slate-50 border-2 border-slate-200 rounded-2xl">
          <h3 className="font-display text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
            <span className="text-2xl">📖</span> RÉSUMÉ DE LA PROGRESSION
          </h3>
          <p className="text-slate-700 mb-4 italic">Description de l'évolution</p>
          <ul className="list-none space-y-4 text-slate-800">
            <li><strong>Niveau de Courage :</strong> ⭐⭐⭐ (Tu as aidé le village, ton cœur de dragon brille plus fort).</li>
            <li><strong>État des Écailles :</strong> Un peu boueuses, mais toujours solides.</li>
            <li><strong>Nouveauté :</strong> Tu as reçu une <strong>Baie de Jasmi-Lumière</strong> du vieux hérisson. Si tu la manges, tu récupères <strong>1d8 PV</strong>.</li>
          </ul>
        </div>
      </section>

      {/* CHAPITRE 6 */}
      <section id="chap6">
        <h2 className="font-display text-3xl font-bold text-slate-800 mb-6 border-b-2 border-slate-200 pb-2 mt-12 flex items-center gap-2">
          <span className="text-2xl">🏰</span> CHAPITRE 6 : LES RUINES DE L'ANCIENNE TOUR
        </h2>

        <h3 className="font-display text-2xl font-bold text-slate-700 mt-8 mb-4">
          La Narration : L'Ascension des Souvenirs
        </h3>
        <ReadAloud title="Texte à lire à voix haute :">
          "Le voleur, surpris par ton arrivée triomphale au milieu des nénuphars, s'est engouffré dans une structure qui s'élève comme une épine de pierre au-dessus de la canopée du marais : <strong>La Tour d'Ébène</strong>. C’est un vestige d’une époque où les dragons et les hommes bâtissaient ensemble. Aujourd'hui, les murs sont recouverts de lierre noir et les vitraux sont brisés.<br/><br/>
          En entrant, la porte de pierre se referme lourdement derrière toi, verrouillée par un mécanisme ancien. L'air est chargé de poussière d'étoiles. Le seul moyen de monter est un immense ascenseur central, une plateforme de cristal maintenue par des chaînes d'argent. Mais l'ascenseur est immobile. Au centre de la plateforme, trois réceptacles vides attendent des gemmes de couleur : une rouge, une bleue et une verte."
        </ReadAloud>

        <h3 className="font-display text-2xl font-bold text-slate-700 mt-8 mb-4 flex items-center gap-2">
          <span className="text-2xl">🧩</span> L'Énigme des Trois Lumières
        </h3>
        <p className="mb-4 text-slate-700">
          Pour activer l'ascenseur et poursuivre le voleur vers les sommets, tu dois retrouver les gemmes dissimulées dans les alcôves de la salle basse.
        </p>

        <ActionBox title="Les Trois Gemmes">
          <ul className="list-disc pl-5 space-y-4">
            <li><strong>La Gemme Rouge (Force) :</strong> Elle est gardée par un automate de fer rouillé. Tu dois prouver ta puissance en le faisant reculer.</li>
            <li><strong>La Gemme Bleue (Esprit) :</strong> Elle flotte au-dessus d'un bassin d'eau magique. Si tu touches l'eau, elle se transforme en glace. Tu dois trouver un moyen de la récupérer sans geler.</li>
            <li><strong>La Gemme Verte (Cœur) :</strong> Elle est cachée dans un buisson de ronces qui ne s'ouvrent que si tu leur murmures des mots gentils ou si tu partages un peu de ta chaleur.</li>
          </ul>
        </ActionBox>
      </section>
    </div>
  );
}
