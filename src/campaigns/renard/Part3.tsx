import React from 'react';
import { ReadAloud, CombatBox, ActionBox, InfoBox } from '../../components/StoryBlocks';
import { Chapter } from '../../components/CampaignLayout';

export default function Part3() {
  return (
    <div className="space-y-12">
      {/* CHAPITRE 7 */}
      <section>
        <Chapter id="chap7" emoji="🎵" title="CHAPITRE 7 : LA GROTTE AUX ÉCHOS (Le Gland de la Chanson)" />

        <h3 className="font-display text-2xl font-bold text-slate-700 mt-8 mb-4">
          La Scène : La caverne qui répète tout
        </h3>
        <p className="mb-4 text-slate-700">
          À l'intérieur de la grotte, chaque son se répète : « bonjour… bonjour… bonjour… » Au fond, posé sur un rocher, le <strong>Gland de la Chanson</strong> scintille. Mais trois cristaux de couleur gardent le passage : pour avancer, il faut leur chanter la bonne mélodie, dans le bon ordre.
        </p>

        <ReadAloud title="La Narration à voix haute :">
          "Une voix douce résonne dans la pierre : « Bienvenue, petit renard. La brume a volé la chanson de la forêt. Pour prendre le Gland, tu dois la lui rendre. Écoute bien… et répète. » Les trois cristaux s'allument l'un après l'autre en faisant chacun une note : un <strong>bleu</strong>, un <strong>jaune</strong>, un <strong>rouge</strong>. À toi de les rallumer dans le même ordre en touchant chaque cristal."
        </ReadAloud>

        <ActionBox title="Le Jeu de Mémoire (le vrai, pour l'enfant !)">
          <p className="mb-4">Ce chapitre se joue <strong>pour de vrai</strong> : le MJ fait une petite séquence (couleurs, tapes dans les mains, ou notes) et l'enfant doit la répéter. On augmente la difficulté à chaque étape, comme dans le jeu « Jacques a dit ».</p>
          <ul className="list-disc pl-5 space-y-2 mb-4">
            <li><strong>Niveau 1 :</strong> Bleu – Jaune (2 notes).</li>
            <li><strong>Niveau 2 :</strong> Bleu – Jaune – Rouge (3 notes).</li>
            <li><strong>Niveau 3 :</strong> Rouge – Bleu – Jaune – Rouge (4 notes).</li>
          </ul>
          <p className="mb-2">Si l'enfant se trompe, pas de panique : Lumi re-chante la séquence et on recommence. Pour les plus grands, on peut remplacer par un jet de <strong>Flair (1D20 + 5)</strong> à chaque niveau.</p>
          <p className="italic text-slate-700">
            Quand les trois cristaux brillent ensemble, ils jouent la vraie <strong>Chanson de Grisefeuille</strong>, et le <strong>Gland de la Chanson</strong> roule jusqu'à tes pattes. 🎶 <strong>Deuxième Gland d'Or récupéré !</strong>
          </p>
        </ActionBox>

        <InfoBox title="2 Glands d'Or sur 3 !">
          <p>En sortant de la grotte, la Feuille d'Or brille maintenant très fort et pointe vers le nord, vers une colline pelée pleine de trous : le <strong>Terrier de Grisaille</strong>. Lumi tremble un peu : « C'est là… c'est là qu'elle garde le dernier Gland. Sois prudent, mon ami. »</p>
        </InfoBox>
      </section>

      {/* CHAPITRE 8 */}
      <section>
        <Chapter id="chap8" emoji="🕳️" title="CHAPITRE 8 : LE TERRIER DE GRISAILLE" />

        <h3 className="font-display text-2xl font-bold text-slate-700 mt-8 mb-4">
          La Scène : Dans les galeries sombres
        </h3>
        <p className="mb-4 text-slate-700">
          Le terrier de la taupe-sorcière est un labyrinthe de tunnels. Des <strong>racines d'ombre</strong> rampent sur les murs, et des petites créatures grises montent la garde. Ici, mieux vaut la <strong>discrétion</strong> que la bagarre. Lumi doit cacher sa lumière dans la fourrure du renard pour ne pas se faire repérer.
        </p>

        <ReadAloud title="La Narration à voix haute :">
          "L'air sent la terre humide et le vieux chagrin. Dans la pénombre, tu entends des pas lourds et une voix qui marmonne toute seule : « Personne ne se souvient… alors personne ne se souviendra… voilà, voilà… » Ce sont les gardiens de Grisaille : des <strong>Mottes Grises</strong>, de petits tas de boue animés. Si tu fais trop de bruit, ils donneront l'alerte."
        </ReadAloud>

        <ActionBox title="L'Infiltration : trois passages discrets">
          <p className="mb-4">Pour atteindre le cœur du terrier, l'enfant doit franchir trois obstacles en silence. À chaque fois, il choisit sa méthode.</p>
          <ul className="list-disc pl-5 space-y-2 mb-4">
            <li><strong>Le couloir qui craque :</strong> avancer sans faire de bruit. Lance <strong>1D20 + Agilité (+4)</strong>.</li>
            <li><strong>Les Mottes Grises endormies :</strong> les contourner, ou les distraire en roulant une noisette au loin (Malice, 1D20 + 3).</li>
            <li><strong>La porte de racines :</strong> trouver le bon passage grâce à l'odorat (Flair, 1D20 + 5).</li>
          </ul>
          <p className="mb-2"><strong>Si l'alerte est donnée</strong> (deux échecs), ce n'est pas perdu : le renard peut souffler dans le <strong>sifflet en gland</strong> ! Les écureuils de Noisette déboulent par les tunnels et font diversion. Place aux retrouvailles et au grand final.</p>
          <p className="italic text-slate-700">
            Au bout du dernier tunnel, une grande salle ronde s'ouvre. Au centre, sur un trône de racines, se tient <strong>Grisaille</strong>, la taupe-sorcière. Dans ses pattes brille le dernier Gland d'Or : celui de l'<strong>Amitié</strong>.
          </p>
        </ActionBox>

        <CombatBox title="Si vraiment ça tourne au combat (gardiens)">
          <p className="font-bold mb-2">Les Mottes Grises (× 2, seulement si repéré)</p>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>PV :</strong> 6 chacune. <strong>CA :</strong> 10.</li>
            <li><strong>Attaque :</strong> <em>Coup de boue</em> (1D4). Lentes et maladroites.</li>
            <li><strong>Point faible :</strong> elles se défont dès qu'on les asperge d'eau ou qu'on les fait rouler dans une pente.</li>
          </ul>
        </CombatBox>

        <InfoBox title="Note pour le MJ — préparer le final">
          <p>Le chapitre 9 est le cœur de l'histoire. Rappelez-vous : <strong>Grisaille n'est pas une vraie méchante, juste une taupe très seule.</strong> Le combat est possible, mais la vraie victoire est de l'écouter et de lui offrir une amitié. Préparez-vous à jouer l'émotion plutôt que la bagarre.</p>
        </InfoBox>
      </section>
    </div>
  );
}
