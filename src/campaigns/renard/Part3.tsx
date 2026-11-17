import React from 'react';
import { ReadAloud, CombatBox, ActionBox, InfoBox } from '../../components/StoryBlocks';
import { Chapter } from '../../components/CampaignLayout';
import { AmbianceBox, VictoryBox, SideQuestBox } from '../../components/StoryExtras';

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

        <AmbianceBox>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Ce qu'on voit :</strong> des stalactites alignées comme les tuyaux d'un orgue, des flaques lisses comme des miroirs, et trois gros cristaux (un bleu, un jaune, un rouge) : ce sont les seules couleurs de toute la grotte.</li>
            <li><strong>Ce qu'on entend :</strong> chaque bruit revient trois fois, de plus en plus doucement. Des gouttes tombent en rythme : ploc… ploc-ploc… ploc.</li>
            <li><strong>Ce qu'on sent :</strong> la pierre froide et l'eau pure.</li>
            <li><strong>Comment le jouer :</strong> répétez la fin de vos propres phrases en écho, de plus en plus bas (« Bienvenue… venue… nue… »). Invitez l'enfant à crier son nom pour entendre l'écho : c'est toujours un succès.</li>
            <li><strong>La voix de la grotte :</strong> douce et chantante. C'est l'écho de tous les animaux qui ont chanté ici autrefois.</li>
          </ul>
        </AmbianceBox>

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

        <VictoryBox title="Le Gland de la Chanson (à lire, ou à chanter !)">
          <p className="italic">"Les trois cristaux s'illuminent ensemble, et toute la grotte se met à chanter. Les stalactites tintent comme des clochettes, les gouttes battent la mesure. Tu reconnais l'air : c'est celui que Mémé Rouquine fredonnait ce matin ! Et cette fois, les paroles reviennent :"</p>
          <p className="italic text-center font-medium leading-relaxed">
            « Feuille d'or et feuille rousse,<br/>
            Le vent chante et la terre est douce.<br/>
            Qui se souvient n'est jamais seul,<br/>
            Sous le grand chêne et le tilleul. »
          </p>
          <p><strong>Récompenses :</strong> le <strong>Gland de la Chanson</strong> (2 sur 3). Le renard connaît maintenant la <strong>Chanson de Grisefeuille</strong> : une fois dans l'aventure, la chanter redonne <strong>4 PV</strong> à lui ou à un ami. Elle servira aussi devant Grisaille.</p>
        </VictoryBox>

        <SideQuestBox title="Mi-Bémol, la chauve-souris">
          <p className="italic">"Au plafond, la tête en bas, une petite chauve-souris chantonne : « Dors, mon petit, la nuit est… la nuit est… oh, zut ! » Elle recommence, et bute toujours au même endroit."</p>
          <p><strong>Mi-Bémol</strong> (voix aiguë, un peu endormie) a oublié la fin de la berceuse qu'elle chante à ses petits. L'enfant <strong>invente la suite</strong> : n'importe quelle fin convient, surtout si elle rime ou si elle est drôle. Pas de jet de dé.</p>
          <p><strong>Récompense :</strong> Mi-Bémol connaît toutes les galeries de la colline. Elle montre au renard une entrée secrète du terrier de Grisaille : <strong>+2 à tous les jets d'infiltration du chapitre 8</strong>.</p>
        </SideQuestBox>

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

        <AmbianceBox>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Ce qu'on voit :</strong> des tunnels ronds, des racines qui pendent du plafond, quelques champignons qui luisent d'une lumière pâle. Le long des murs, des étagères creusées dans la terre, remplies d'objets perdus : boutons, rubans, une moufle, des dessins d'enfants animaux.</li>
            <li><strong>Le détail qui compte :</strong> dans une petite pièce, une table est mise pour deux. L'une des tasses est propre. L'autre est couverte de poussière : personne n'est jamais venu. Laissez l'enfant le remarquer, sans l'expliquer.</li>
            <li><strong>Ce qu'on entend :</strong> des gouttes, les pas mous des Mottes Grises (« flotch… flotch… »), et au loin une voix qui parle toute seule.</li>
            <li><strong>Ce qu'on sent :</strong> la terre humide et le thé froid.</li>
            <li><strong>Comment le jouer :</strong> chuchotez. Demandez à l'enfant de chuchoter aussi : s'il parle fort, une Motte tourne la tête.</li>
            <li><strong>Les Mottes Grises :</strong> elles ne sont pas méchantes, juste obéissantes. Elles parlent peu et lentement (« Qui… va… là ? ») et se laissent facilement distraire.</li>
          </ul>
        </AmbianceBox>

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

        <VictoryBox title="Si les Mottes Grises sont vaincues (à lire à voix haute)">
          <p className="italic">"La dernière Motte vacille, fait « flotch », et s'étale en un petit tas de boue tout à fait ordinaire. Au sommet du tas, il reste un caillou en forme de cœur. C'est tout ce qui la faisait tenir debout. Le tunnel est libre."</p>
          <p><strong>Butin :</strong> le <strong>caillou-cœur</strong>. Il ne sert à rien en combat, mais c'est un joli cadeau à offrir à quelqu'un de très seul (voir chapitre 9).</p>
          <p><strong>Si le renard est tombé à 0 PV :</strong> les Mottes le portent jusqu'à la salle du trône et le déposent, tout crotté, aux pieds de Grisaille. L'histoire continue au chapitre 9, avec 3 PV.</p>
        </VictoryBox>

        <VictoryBox title="Si les écureuils arrivent en renfort (à lire à voix haute)">
          <p className="italic">"Tu souffles dans le sifflet en gland. D'abord, rien. Puis un grondement monte dans les tunnels : des dizaines de petites pattes ! Les écureuils de Noisette déboulent de partout en lançant des noisettes. « Par ici, les tas de boue ! Attrapez-nous si vous pouvez ! » Les Mottes Grises leur courent après, lentement, dans la mauvaise direction. Noisette te fait un clin d'œil : « File, petit renard. On s'occupe du reste ! »"</p>
        </VictoryBox>

        <SideQuestBox title="Monsieur Lombric et le journal de Grisaille">
          <p className="italic">"Derrière une petite porte ronde, tu découvres une bibliothèque minuscule. Un ver de terre à lunettes range des carnets, un par un. « Chut ! » dit-il. « On ne court pas dans les archives. »"</p>
          <p><strong>Monsieur Lombric</strong> (voix pincée, très poli) garde les carnets de Grisaille. Si le renard est aimable avec lui (1D20 + Cœur +5, réussite à 8) ou l'aide à ranger une pile, il lui laisse lire une page :</p>
          <p className="italic">« Cher journal. Aujourd'hui, c'était mon anniversaire. J'ai fait un gâteau aux racines et j'ai mis deux tasses. J'ai attendu jusqu'au soir. Personne n'est venu, parce que personne ne sait que j'existe. Demain, j'essaierai un nouveau sortilège. »</p>
          <p><strong>Récompense :</strong> l'enfant comprend pourquoi Grisaille a lancé la Brume d'Oubli. Au chapitre 9, il gagne <strong>+3 à ses jets de Cœur</strong> face à elle, et s'il lui souhaite un bon anniversaire, c'est une <strong>réussite automatique</strong>.</p>
        </SideQuestBox>

        <InfoBox title="Note pour le MJ — préparer le final">
          <p>Le chapitre 9 est le cœur de l'histoire. Rappelez-vous : <strong>Grisaille n'est pas une vraie méchante, juste une taupe très seule.</strong> Le combat est possible, mais la vraie victoire est de l'écouter et de lui offrir une amitié. Préparez-vous à jouer l'émotion plutôt que la bagarre.</p>
        </InfoBox>
      </section>
    </div>
  );
}
