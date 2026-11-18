import React from 'react';
import { ReadAloud, CombatBox, ActionBox, InfoBox } from '../../components/StoryBlocks';

export default function Chapitre4() {
  return (
    <section id="chap5">
      <h2 className="font-display text-4xl font-bold text-rose-700 mb-6 border-b-4 border-rose-200 pb-2 mt-16">
        CHAPITRE 5 : LE CHÂTEAU DU BARON CORNICHON
      </h2>
      <p className="text-slate-500 font-medium mb-8">Niveau recommandé : 3<br/>Lieu : Le château du Baron Cornichon, sur la colline<br/>Ambiance : Infiltration comique, pièges absurdes, puis un coup de théâtre : la trahison.</p>

      <InfoBox title="Synopsis du Chapitre pour le Maître du Jeu">
        <p>Le héros s'introduit dans le château par le fossé, la cour ou la cuisine. Il y croise des gardes ridicules et un chien qui se prend pour un lion, puis trouve, dans la salle du trésor, une <strong>couronne sous verre</strong>. C'est un piège : <strong>Gaston le trahit</strong> en échange d'un sac de maïs doré, et le Baron fait prisonnier le héros. <strong>Prépare cette scène avec soin :</strong> joue-la avec humour mais laisse un vrai moment de silence quand l'oie parle.</p>
      </InfoBox>

      <h3 className="font-display text-2xl font-bold text-slate-700 mt-8 mb-4">SCÈNE 1 : L'ENTRÉE DANS LE CHÂTEAU (Exploration)</h3>
      <ReadAloud title="Texte à lire à voix haute">
        "Le château du Baron Cornichon ressemble à une pile de crêpes qu'un géant aurait posées de travers. Les tourelles penchent, les fenêtres sont trop petites, et un drapeau en forme de cornichon flotte au sommet. Un fossé vert l'entoure, rempli d'une eau trouble, où l'on aperçoit parfois une grosse carpe bouger. Un pont-levis est levé, mais derrière la haie, tu entends un garde chanter : « Je suis le garde, je garde, je garde... »"<br/><br/>
        "Tu vois trois options : une petite porte de cuisine entrouverte, dont sort une odeur de soupe au chou ; un mur recouvert de lierre qui monte jusqu'à une fenêtre ouverte ; et un tuyau d'évacuation assez large pour qu'on s'y glisse. Gaston, lui, regarde ailleurs en lissant ses plumes, un peu trop calme. Que fais-tu ?"
      </ReadAloud>

      <InfoBox title="Profil des gardes et du chien du Baron">
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Les gardes du château :</strong> ils croient que « garder » veut dire « parler tout seul pour rester éveillé ». Ils racontent leurs vacances à voix haute et ne voient rien.</li>
          <li><strong>Brutus le chien :</strong> un minuscule chihuahua à collier clouté, qui aboie comme un lion, mais qui a peur de tout ce qui est plus gros que lui, y compris l'oie Gaston.</li>
        </ul>
      </InfoBox>

      <ActionBox title="Options d'Exploration et Mécaniques (Bac à sable)">
        <h4 className="font-bold text-lg mb-2">1. Entrer par la cuisine (Test de CHARME - DD 12)</h4>
        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li>Un cuisinier surveille sa soupe : « Je suis occupé, mais si tu m'aides, je ne te dénonce pas ! »</li>
          <li><strong>Réussite :</strong> le héros goûte la soupe (« Délicieuse ! ») et entre sans histoire. Il rejoint l'escalier central sans être vu.</li>
          <li><strong>Échec :</strong> la soupe est affreuse. Le héros fait la grimace, le cuisinier crie : un garde arrive. Le héros peut l'éviter (COURAGE, DD 12) ou le combattre.</li>
        </ul>

        <h4 className="font-bold text-lg mb-2">2. Escalader le lierre (Test de COURAGE - DD 13, +2 avec le grappin renforcé)</h4>
        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li><strong>Réussite :</strong> il atteint la fenêtre et entre dans une chambre qui sent le fromage. Il peut fouiller discrètement (<strong>Loot : une Clé de Cave</strong>).</li>
          <li><strong>Échec :</strong> le lierre cède, le héros chute dans le fossé (−2 PV, et la carpe lui mordille la botte). Il peut réessayer ou changer de route.</li>
        </ul>

        <h4 className="font-bold text-lg mb-2">3. Se glisser par le tuyau (Test de MALICE - DD 12)</h4>
        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li><strong>Réussite :</strong> il rampe sans bruit jusqu'à une salle d'armes, pleine d'épées rouillées et d'une armure qui lui fait un coucou.</li>
          <li><strong>Échec :</strong> il se coince. Gaston doit le tirer, en râlant. Le héros perd un tour et 1 PV.</li>
        </ul>

        <h4 className="font-bold text-lg mb-2">4. Remarquer que Gaston est bizarre (Test de MALICE - DD 13, si ce n'est pas déjà fait)</h4>
        <p>Si le héros a déjà remarqué le maïs sur le bec de Gaston au chapitre 4, il a un <strong>avantage</strong> ici (il lance deux D20 et garde le meilleur). <strong>Réussite :</strong> il comprend que Gaston cache quelque chose. S'il lui pose la question, l'oie jure sur sa vanité qu'elle est « un modèle de loyauté ». (Le héros peut alors garder sa potion de pomme en réserve pour la trahison.)</p>
      </ActionBox>

      <h3 className="font-display text-2xl font-bold text-slate-700 mt-8 mb-4">SCÈNE 2 : LA GALERIE DES ANCÊTRES PARLANTS (Exploration et Roleplay)</h3>
      <ReadAloud title="Texte à lire à voix haute">
        "Tu pousses une porte et tu te retrouves dans une longue galerie éclairée de bougies. Sur les murs, des dizaines de portraits d'hommes et de femmes à moustaches, à nez crochus, à chapeaux ridicules, te regardent de leurs yeux peints. Tu fais trois pas. Un portrait tousse. Un autre murmure : « Chut, il y a quelqu'un. » « Où ça ? » « Là, le petit avec l'oie. » Une grosse voix s'élève : « Un intrus ! Un intrus dans la galerie des Cornichon ! » Aussitôt, tous les portraits se mettent à parler en même temps, dans un joyeux brouhaha. Gaston sursaute : « Je n'ai rien fait ! J'ai juste... marché. »"
      </ReadAloud>

      <InfoBox title="Profil des Ancêtres Parlants">
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Qui ils sont :</strong> les portraits des ancêtres du Baron, enchantés par un sort ancien. Ils se disputent, se coupent la parole et ont tous un avis sur tout.</li>
          <li><strong>Sir Cornichon le Vieux :</strong> le plus ancien, moustache en guidon, voix de tonnerre. Il croit que tout est une invasion.</li>
          <li><strong>Dame Cornichonne :</strong> élégante, un peu snob, pleine de ragots.</li>
          <li><strong>Le petit Cornichon-Junior :</strong> un enfant en collerette qui répète tout ce que dit son grand-père.</li>
          <li><strong>Ce qu'ils savent :</strong> ils ont vu tout ce qui s'est passé dans le château depuis trois siècles, y compris les visites du Chancelier Gribouille, qui vient « discuter de la Couronne » tard le soir.</li>
        </ul>
      </InfoBox>

      <ActionBox title="Options d'Exploration et Mécaniques (Bac à sable)">
        <h4 className="font-bold text-lg mb-2">1. Calmer les portraits (Test de CHARME - DD 12)</h4>
        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li><strong>Réussite :</strong> le héros fait un compliment à chacun. Les portraits se calment, flattés, et se mettent à raconter l'histoire de la famille.</li>
          <li><strong>Échec :</strong> ils crient « Alerte ! » en chœur. Un garde arrive au bout du couloir (voir la Scène 4).</li>
        </ul>

        <h4 className="font-bold text-lg mb-2">2. Écouter les ragots de Dame Cornichonne (Test de MALICE - DD 12)</h4>
        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li><strong>Réussite :</strong> elle murmure : « Le Baron ? Il est incapable de voler une pomme. Il pleure quand il écrase une fourmi. Ce sont les gens en gris qui sont louches. » <strong>Indice :</strong> les portraits savent que le Baron est un brave homme. Le héros peut avoir un doute sur l'accusation.</li>
          <li><strong>Échec :</strong> elle parle de la mode du siècle dernier.</li>
        </ul>

        <h4 className="font-bold text-lg mb-2">3. Demander à Sir Cornichon le Vieux de l'aider (Test de CHARME - DD 13)</h4>
        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li><strong>Réussite :</strong> il ordonne à tous les portraits de se taire pendant quelques minutes, ce qui permet au héros de traverser la galerie sans alerter les gardes. <strong>Gagne +2 à tous les jets de discrétion de la Scène 4.</strong></li>
          <li><strong>Échec :</strong> il hurle « À L'ASSAUT ! » et tous les portraits applaudissent. Le héros doit courir.</li>
        </ul>

        <h4 className="font-bold text-lg mb-2">4. Fouiller derrière les cadres (Test de MALICE - DD 13)</h4>
        <p>Derrière un portrait se cache un petit passage secret. <strong>Réussite : Loot : une Clé de Cave</strong> (permet d'ouvrir la porte du couloir des cachots au chapitre 6, sans crocheter la serrure) et <strong>un Message Gris</strong> froissé : « Baron, vous serez bientôt accusé. Gardez le silence. G. » (Preuve supplémentaire à garder pour le procès.)</p>
      </ActionBox>

            <h3 className="font-display text-2xl font-bold text-slate-700 mt-8 mb-4">SCÈNE 3 : LA BIBLIOTHÈQUE DES LIVRES QUI MORDENT (Énigme et Piège)</h3>
      <ReadAloud title="Texte à lire à voix haute">
        "Au bout de la galerie, une grande porte de bois sculpté donne sur une salle ronde, tapissée d'étagères pleines de livres. Dès que tu entres, tu entends un grognement. Un gros dictionnaire, posé sur une table, ouvre ses pages comme une gueule. « GRRR ! » Un autre livre, plus petit, saute de son étagère et te mord la manche. « Aïe ! » Des dizaines de volumes se mettent à claquer des couvertures, à grogner, à battre des pages. Au centre, sur un pupitre, un livre est ouvert à une page particulière : une énigme gravée en lettres dorées."
      </ReadAloud>

      <ActionBox title="L'énigme de la bibliothèque (Épreuve d'énigme et de combat léger)">
        <p className="mb-4">Les livres qui mordent protègent un coffre caché derrière la bibliothèque. Pour les apaiser, il faut résoudre l'énigme du pupitre, ou les calmer un à un.</p>
        <p className="italic mb-4">« J'ai des pages, mais pas de pattes. J'ai un dos, mais pas de tête. J'ai des histoires plein le ventre, mais pas de bouche pour les raconter. Et pourtant, aujourd'hui, je mords. Qui suis-je ? » <em>(Réponse : un livre. Si l'enfant sèche, le MJ peut montrer du doigt un livre qui mord : c'est une aide gratuite.)</em></p>

        <h4 className="font-bold text-lg mb-2">Option A : Résoudre l'énigme (Test de MALICE - DD 13)</h4>
        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li><strong>Réussite :</strong> les livres se referment doucement, et un panneau secret s'ouvre : <strong>Loot : un Livre d'Astuces</strong> (permet de relancer un jet de MALICE, une fois).</li>
          <li><strong>Échec :</strong> les livres mordent : −2 PV et la perte d'un tour.</li>
        </ul>

        <h4 className="font-bold text-lg mb-2">Option B : Calmer les livres (Test de CHARME - DD 12)</h4>
        <p className="mb-6">Chanter une berceuse, raconter une histoire, ou lire un livre à voix haute (les livres adorent qu'on les lise). <strong>Réussite :</strong> ils s'endorment. <strong>Gagne un Panache</strong> si le héros invente une histoire drôle.</p>

        <h4 className="font-bold text-lg mb-2">Option C : Fuir (Test de COURAGE - DD 11)</h4>
        <p>Le héros ressort en courant, couvert de morsures de papier (−1 PV). Gaston, elle, a perdu un bout de plume.</p>
      </ActionBox>

      <h3 className="font-display text-2xl font-bold text-slate-700 mt-8 mb-4">SCÈNE 4 : LES COULOIRS ET LE CHIEN BRUTUS (Combat facultatif)</h3>
      <ReadAloud title="Texte à lire à voix haute">
        "Les couloirs du château sont tapissés de portraits du Baron, tous avec la même moue. Au détour d'un escalier, une boule de poils aboie de toutes ses forces. « GRRR ! GRRR ! » Brutus, le chihuahua, te fonce dessus en montrant ses dents minuscules. Il aboie si fort que deux gardes viennent voir : « Qu'y a-t-il, Brutus ? » « GRRR ! » « Ah, d'accord, c'est un intrus. Euh... où ça ? »"
      </ReadAloud>

      <CombatBox title="Mécaniques de Combat (Brutus et deux gardes distraits)">
        <h4 className="font-bold text-lg mb-2">Les Ennemis : Brutus et deux Gardes du Château</h4>
        <ul className="list-disc pl-5 space-y-1 mb-6">
          <li><strong>Brutus :</strong> 6 PV, CA 13. Attaque à +3, 1D4 de dégâts. Si Gaston s'approche, il s'enfuit en jappant.</li>
          <li><strong>Garde du château (× 2) :</strong> 10 PV chacun, CA 12. Attaque à +3, 1D6 de dégâts. Ils attaquent un tour sur deux (ils oublient pourquoi ils sont là).</li>
        </ul>

        <h4 className="font-bold text-lg mb-2">Tactique et Environnement (Le rôle du MJ) :</h4>
        <ul className="list-disc pl-5 space-y-3 mb-4">
          <li><strong>Option A - Attaque classique :</strong> D20 + COURAGE (+3), 1D6 +1.</li>
          <li><strong>Option B - Les portraits (MALICE - DD 12) :</strong> le héros décroche un grand portrait qui tombe sur un garde : il perd son tour et 1D6 PV.</li>
          <li><strong>Option C - Gaston contre Brutus :</strong> si le héros lui demande, Gaston fait peur au chien (il siffle fort). Brutus s'enfuit.</li>
          <li><strong>Option D - Baratin (CHARME - DD 13) :</strong> le héros convainc les gardes qu'il est un cousin du Baron, venu pour la fête. Ils le saluent et s'en vont chercher un goûter.</li>
        </ul>
        <p className="italic">Si le héros n'arrive pas à les éviter et tombe à 0 PV, le KO comique est « réveillé par un seau d'eau, 5 PV, un Panache en moins », et on passe directement à la scène 3 (le Baron le trouve).</p>
      </CombatBox>

      <h3 className="font-display text-2xl font-bold text-slate-700 mt-8 mb-4">SCÈNE 5 : LA SALLE DU TRÉSOR ET LA TRAHISON (Roleplay)</h3>
      <ReadAloud title="Texte à lire à voix haute">
        "Au bout d'un long couloir, une grande porte est entrouverte. Au centre d'une salle ronde, sous une cloche de verre, brille la Couronne du Rire. Elle est dorée, elle scintille, elle est exactement comme sur les tableaux. Gaston s'approche, bouche bée. « Mon Dieu... Mon enquête est terminée. » Tu t'approches de la cloche, la main tendue, le cœur battant."<br/><br/>
        "Et là, derrière toi, un déclic. Tu te retournes : la porte vient de se refermer. Gaston est en train de reculer, lentement, vers un coin de la salle, les yeux baissés. Un homme grand, en cape violette, sort de l'ombre en battant des mains. « Bravo, bravo ! Je vous attendais ! » Le Baron Cornichon sourit. Dans une main, il tient un grand sac de toile. Tu entends le tintement de grains. « Gaston ? Les dix kilos de maïs doré, comme promis. » L'oie baisse la tête. « Désolé, détective. Dix kilos. Tu comprends. Dix kilos. »"
      </ReadAloud>

      <InfoBox title="Profil du Baron Cornichon et de la trahison">
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Le Baron Cornichon :</strong> grand, élégant, cape violette, rire communicatif, mais très vexé d'être soupçonné par le roi. Il a tendu un piège pour attraper « le voleur » qui s'en prend à son château (en réalité, il pense que c'est le héros).</li>
          <li><strong>La trahison de Gaston :</strong> pendant le chapitre 4, le Baron l'a payée en promesse de maïs doré pour qu'il l'avertisse de l'arrivée du « détective du Chancelier ». L'oie ne pensait pas que ça irait si loin. <strong>Joue-la mal à l'aise : elle ment mal, hésite, et finit par craquer.</strong></li>
          <li><strong>La couronne sous verre :</strong> c'est une fausse couronne, en fromage doré et colorant. C'est le piège du Baron pour attirer le voleur.</li>
        </ul>
      </InfoBox>

      <ActionBox title="La trahison : les réactions du héros">
        <p className="mb-4">Laisse d'abord le temps à l'enfant de réagir (colère, tristesse, rire...). Voici les actions possibles, mais il peut aussi improviser.</p>

        <h4 className="font-bold text-lg mb-2">Option A : S'enfuir par la fenêtre (Test de COURAGE - DD 15, ou avec Panache)</h4>
        <p className="mb-6"><strong>Réussite :</strong> il saute dans les douves, échappe à deux gardes... et se fait attraper à la sortie par une dizaine de lanciers. De toute façon, il sera capturé : mais il garde son sac et ses objets. <strong>Échec :</strong> il est capturé et confisque son sac à gadgets (il le retrouvera au chapitre 5).</p>

        <h4 className="font-bold text-lg mb-2">Option B : Parler au Baron et plaider son innocence (Test de CHARME - DD 14)</h4>
        <p className="mb-6"><strong>Réussite :</strong> le Baron hésite, mais ses gardes entrent déjà. Il dit : « Je vous écouterai, je le promets, mais dans une cellule. » Le héros est conduit au cachot <strong>sans ses menottes</strong> et garde ses objets. <strong>Échec :</strong> « Tous les voleurs disent ça ! » Il est menotté et fouillé.</p>

        <h4 className="font-bold text-lg mb-2">Option C : Parler à Gaston (Roleplay)</h4>
        <p className="mb-2">C'est la scène émotionnelle du chapitre. Laisse l'enfant dire ce qu'il pense. Gaston murmure : « Dix kilos de maïs... j'ai pas pu résister. Tu es un bon détective. Je suis un mauvais oiseau. » Si le héros est vraiment touchant, l'oie a les larmes aux yeux.</p>
        <p><strong>Gagne un point de Panache</strong> pour avoir osé parler à celui qui l'a trahi.</p>
      </ActionBox>

      <ReadAloud title="Texte à lire à voix haute (la capture)">
        "Un garde ouvre une trappe sous tes pieds, et tu tombes dans un toboggan de pierre, qui t'amène dans le noir, entre deux rires, dans un grand « SPLOUCH ». Au-dessus de toi, la trappe se referme. Tu entends encore, très faiblement, la voix de Gaston : « ...je suis désolé... » Puis le silence. Tu es dans les cachots du château, dans une cellule sale, sans aucune idée de la suite. Mais en regardant bien dans le noir, tu aperçois que tu n'es pas seul."
      </ReadAloud>
    </section>
  );
}
