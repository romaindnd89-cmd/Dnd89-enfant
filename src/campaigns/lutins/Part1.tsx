import React from 'react';
import { ReadAloud, CombatBox, ActionBox, InfoBox } from '../../components/StoryBlocks';
import { Chapter } from '../../components/CampaignLayout';
import { AmbianceBox, VictoryBox, SideQuestBox } from '../../components/StoryExtras';

export default function Part1() {
  return (
    <div className="space-y-12">
      {/* SALLE 1 */}
      <section>
        <Chapter id="chap1" emoji="🚪" title="SALLE 1 : LA GRILLE QUI CHATOUILLE" />

        <h3 className="font-display text-2xl font-bold text-slate-700 mt-8 mb-4">
          La scène : l'entrée du château
        </h3>
        <p className="mb-4 text-slate-700">
          Une haute grille de fer forgé barre le chemin. Ses barreaux dessinent des visages qui tirent la langue. Au milieu, une énorme serrure en forme de bouche souriante. Dès qu'on la touche, la grille glousse et se met à chatouiller !
        </p>

        <AmbianceBox>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Ce qu'on voit :</strong> des murs couverts de lierre, des tours un peu penchées, des drapeaux à pois. Aux fenêtres, des bonnets à grelots apparaissent et disparaissent. Sur la grille, une pancarte : « Défense d'entrer sans rire ».</li>
            <li><strong>Ce qu'on entend :</strong> des grelots, des « chut ! » étouffés, des rires qu'on essaie de retenir.</li>
            <li><strong>Ce qu'on sent :</strong> le chocolat chaud et la barbe à papa.</li>
            <li><strong>Comment jouer Grelot,</strong> le lutin portier : petite voix pointue, il parle en rimes quand il y pense, et oublie d'en faire le reste du temps. Il est très fier de son poste et terriblement mauvais pour garder un secret.</li>
          </ul>
        </AmbianceBox>

        <ReadAloud title="La narration à voix haute :">
          "Un bonnet rouge surgit entre deux barreaux. Dessous, un lutin pas plus haut qu'une botte vous regarde de haut en bas. « Halte-là, les grands dadais ! Je suis Grelot, portier du château. Pour entrer, c'est facile comme tout : il faut trouver la clé… et la clé, c'est une réponse ! Si vous vous trompez, ma grille vous chatouille. Si vous trouvez… elle vous chatouille aussi, mais gentiment. Hi hi ! »"
        </ReadAloud>

        <ActionBox title="L'épreuve : la devinette de Grelot">
          <p className="mb-3">Toute l'équipe réfléchit ensemble. C'est le moment d'installer l'entraide : rappelez que chacun peut proposer une idée.</p>
          <ul className="list-disc pl-5 space-y-3 mb-3">
            <li><strong>Grelot demande :</strong> <em>« J'ai des dents mais je ne mange jamais. Je tourne sans avoir le tournis. Et sans moi, vous restez dehors. Qui suis-je ? »</em></li>
            <li><strong>Réponse :</strong> une clé.</li>
            <li><strong>Mauvaise réponse :</strong> la grille chatouille le héros le plus proche. L'équipe perd <strong>1 Rire</strong>, et Grelot donne un indice (« Ça se range dans une poche… ou sous un paillasson ! »).</li>
            <li><strong>S'ils sèchent :</strong> un jet de <strong>Malice</strong> (1D20, +3 pour le Magicien), réussite à 10 : Grelot laisse échapper la réponse sans faire exprès, puis se couvre la bouche.</li>
          </ul>
          <p><strong>Le piège caché :</strong> un seau de confettis est en équilibre au-dessus de la grille. L'<strong>Éclaireur</strong> peut le repérer avec son pouvoir. Sinon, le premier qui entre lance <strong>1D20 + Agilité</strong> (réussite à 10) pour l'esquiver. Raté : il ressemble à un gâteau d'anniversaire, et l'équipe perd 1 Rire… en riant.</p>
        </ActionBox>

        <VictoryBox>
          <p className="italic">"« Une clé ! Bravo ! » Grelot tape dans ses mains, et la grosse serrure éclate de rire. La grille s'ouvre toute seule en grinçant un petit air de fanfare. Grelot ôte son bonnet : deux pièces dorées en tombent. « C'est pour vous. Le roi a dit : une salle, des pièces. Mais chut… je ne vous ai pas dit qu'il y en avait six, de salles. Oh, zut. »"</p>
          <p><strong>Récompense :</strong> <strong>2 pièces en chocolat</strong> pour le trésor de l'équipe.</p>
        </VictoryBox>
      </section>

      {/* SALLE 2 */}
      <section>
        <Chapter id="chap2" emoji="🥧" title="SALLE 2 : LA CUISINE EN FOLIE" />

        <h3 className="font-display text-2xl font-bold text-slate-700 mt-8 mb-4">
          La scène : la bataille de farine
        </h3>
        <p className="mb-4 text-slate-700">
          La cuisine du château est immense : une cheminée où tiendrait un cheval, des casseroles de cuivre jusqu'au plafond. Sur la table trône un gâteau à trois étages. Tout autour, les <strong>lutins marmitons</strong> ont préparé leurs munitions : des boules de farine et des tartes à la crème.
        </p>

        <AmbianceBox>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Ce qu'on voit :</strong> un nuage de farine qui flotte dans la lumière, des traces de petits pieds blancs partout, des louches plantées comme des drapeaux. Les marmitons sont cachés derrière des barricades de sacs de sucre.</li>
            <li><strong>Ce qu'on entend :</strong> des casseroles qui s'entrechoquent, « Feu à volonté ! », le « pof » des boules de farine.</li>
            <li><strong>Ce qu'on sent :</strong> le caramel, la vanille et le pain chaud.</li>
            <li><strong>Comment jouer Dame Louche,</strong> la cheffe : grosse voix autoritaire, elle donne des ordres de général (« Marmitons ! Tartes en position ! »). Elle a un faible : elle ne résiste pas à un compliment sur sa cuisine.</li>
            <li><strong>Leur tactique :</strong> chaque lutin vise un enfant différent. Un lutin qui rit trop fort lâche ses munitions et quitte la bataille.</li>
          </ul>
        </AmbianceBox>

        <ReadAloud title="La narration à voix haute :">
          "Vous poussez la porte… POF ! Une boule de farine explose juste à côté. « Intrus dans ma cuisine ! » tonne une lutine coiffée d'une toque plus grande qu'elle. « Personne ne touche à mon gâteau sans passer par mes marmitons ! » Derrière les sacs de sucre, des petits bras se lèvent, une tarte à la crème dans chaque main."
        </ReadAloud>

        <CombatBox title="La bataille : les lutins marmitons">
          <p className="font-bold mb-2">Les Marmitons (un par enfant) et Dame Louche</p>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Pour mettre un marmiton hors jeu :</strong> il faut le toucher <strong>2 fois</strong> (Dame Louche : 3 fois). Chaque jet réussi à <strong>10 ou plus</strong> compte pour une touche.</li>
            <li><strong>Leur attaque :</strong> à la fin de chaque tour de table, le MJ lance <strong>1D6</strong>. Sur 1 ou 2, une tarte fait mouche : l'équipe perd <strong>1 Rire</strong>.</li>
          </ul>
          <p className="font-bold mt-3 mb-1">Ce que les héros peuvent faire :</p>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>Lancer une boule de farine</strong> (Agilité).</li>
            <li><strong>Avancer derrière un couvercle de marmite</strong> pour protéger un ami (Courage) : le prochain 1D6 du MJ est annulé.</li>
            <li><strong>Jouer un tour</strong> : faire glisser un marmiton sur du beurre, lui retourner sa propre tarte (Malice).</li>
            <li><strong>Le faire rire ou le complimenter</strong> (Cœur) : une réussite suffit, il sort de la bataille en gloussant.</li>
          </ul>
        </CombatBox>

        <VictoryBox>
          <p className="italic">"Le dernier marmiton s'assoit par terre, plié de rire, de la crème jusqu'aux oreilles. Dame Louche lève sa louche… puis la baisse, et sourit. « Bien joué, les terreurs. Ça faisait longtemps qu'on ne s'était pas autant amusés. » Elle coupe le grand gâteau en parts égales : une pour chaque héros, une pour chaque lutin. Et dans les parts, quelque chose brille."</p>
          <p><strong>Récompenses :</strong> <strong>3 pièces en chocolat</strong> cachées dans le gâteau, et l'équipe récupère <strong>2 Rires</strong>.</p>
          <p><strong>Si l'équipe tombe à 0 Rire :</strong> tout le monde est blanc de farine, lutins compris. Dame Louche déclare match nul, exige une grimace de groupe, et rend 3 Rires. Le gâteau est partagé quand même.</p>
        </VictoryBox>

        <SideQuestBox title="Monsieur Chaussette, le chat du château">
          <p className="italic">"Sur le rebord du four tiède, un gros chat gris dort en rond. Sous sa patte, on aperçoit un reflet doré."</p>
          <p><strong>Monsieur Chaussette</strong> ne parle pas : il bâille, s'étire et ronronne très fort. Pour récupérer la pièce sans le fâcher :</p>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>Le gratter derrière l'oreille</strong> jusqu'à ce qu'il se retourne (Cœur, réussite à 10). L'Ami des bêtes réussit automatiquement.</li>
            <li><strong>Glisser la main tout doucement</strong> (Agilité, réussite à 12).</li>
            <li><strong>L'attirer avec un bol de crème</strong> (Malice, réussite à 8).</li>
          </ul>
          <p><strong>Récompense :</strong> <strong>1 pièce en chocolat</strong> de plus. En cas d'échec, le chat s'en va dignement en emportant la pièce… puis la laisse tomber à la porte, parce qu'un chat ne mange pas de chocolat.</p>
        </SideQuestBox>
      </section>

      {/* SALLE 3 */}
      <section>
        <Chapter id="chap3" emoji="📚" title="SALLE 3 : LA BIBLIOTHÈQUE DES LIVRES VOLANTS" />

        <h3 className="font-display text-2xl font-bold text-slate-700 mt-8 mb-4">
          La scène : des livres qui battent des pages
        </h3>
        <p className="mb-4 text-slate-700">
          Dans la bibliothèque, les livres ne restent pas sur les étagères : ils volent comme des oiseaux, en battant des pages. Le plus gros de tous, le <strong>Grand Livre des Blagues</strong>, tourne en rond tout en haut, sous la coupole. Entre ses pages, deux pièces dorées servent de marque-pages.
        </p>

        <AmbianceBox>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Ce qu'on voit :</strong> des étagères hautes comme des arbres, des échelles à roulettes, de la poussière qui danse dans les rayons de lumière. Les petits livres volent en bandes, les dictionnaires planent lentement, lourds comme des oies.</li>
            <li><strong>Ce qu'on entend :</strong> un froissement d'ailes de papier, des « chuuut » venus de nulle part, parfois un livre qui éternue un nuage de poussière.</li>
            <li><strong>Ce qu'on sent :</strong> le vieux papier, la cire et l'encre.</li>
            <li><strong>Comment jouer Maître Parchemin,</strong> le lutin bibliothécaire : très vieux, barbe jusqu'aux pieds, sourd comme un pot. Il comprend tout de travers (« Un trésor ? Non merci, je n'ai pas soif ») et chuchote alors que c'est lui qui fait le plus de bruit.</li>
          </ul>
        </AmbianceBox>

        <ReadAloud title="La narration à voix haute :">
          "Un vieux lutin descend d'une échelle, un doigt sur la bouche. « CHUUUT ! » crie-t-il à tue-tête. « Ici, on ne fait pas de bruit ! Vous voulez le Grand Livre des Blagues ? Il est farouche. Il ne se pose que si on l'apprivoise. Et il ne s'ouvre que si on lui raconte quelque chose de drôle. Bonne chance, les jeunes gens. Comment ? Non, je n'ai pas dit bonne chasse ! »"
        </ReadAloud>

        <ActionBox title="L'épreuve d'équipe : attraper le Grand Livre">
          <p className="mb-3">C'est un défi collectif : l'équipe doit obtenir <strong>3 réussites avant 3 échecs</strong>. Chaque enfant propose une action différente, à tour de rôle. Réussite à 10.</p>
          <ul className="list-disc pl-5 space-y-2 mb-3">
            <li><strong>Faire la courte échelle</strong> ou porter un ami sur ses épaules (Courage).</li>
            <li><strong>Grimper aux étagères</strong> ou sauter d'une échelle à l'autre (Agilité).</li>
            <li><strong>Appâter le livre</strong> avec un beau marque-page, ou bricoler un filet avec un rideau (Malice).</li>
            <li><strong>Chanter une berceuse</strong> pour calmer les livres, ou leur parler gentiment (Cœur).</li>
          </ul>
          <p className="mb-3"><strong>À chaque échec :</strong> une nuée de petits livres vient chatouiller les héros avec leurs pages. L'équipe perd <strong>1 Rire</strong>.</p>
          <p><strong>Pour ouvrir le livre (pour de vrai !) :</strong> une fois le livre attrapé, chaque enfant doit raconter une blague, faire une grimace ou imiter un animal. Dès que quelqu'un autour de la table rit, le livre s'ouvre.</p>
        </ActionBox>

        <VictoryBox>
          <p className="italic">"Le Grand Livre des Blagues se pose enfin sur vos genoux, tout tiède, en ronronnant comme un chat. Il s'ouvre dans un éclat de rire, et les deux pièces dorées glissent entre ses pages. Sur la première, quelqu'un a écrit à la plume : « Qu'est-ce qui est jaune et qui attend ? » Maître Parchemin se penche : « Comment ? Un jongleur de dents ? » Et tous les livres de la bibliothèque se mettent à rire en même temps."</p>
          <p><strong>Récompense :</strong> <strong>2 pièces en chocolat</strong>. (La réponse de la blague : Jonathan. Les lutins la trouvent hilarante.)</p>
        </VictoryBox>

        <InfoBox title="Note pour le MJ — la pause de la mi-temps">
          <p>Vous êtes à la moitié. Si les enfants s'agitent, c'est le bon moment pour une vraie pause : comptez ensemble les pièces du trésor de l'équipe et cochez les salles terminées dans le sommaire.</p>
        </InfoBox>
      </section>
    </div>
  );
}
