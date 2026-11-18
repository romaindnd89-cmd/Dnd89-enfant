import React from 'react';
import { ReadAloud, ActionBox, InfoBox } from '../../components/StoryBlocks';

export default function Chapitre3() {
  return (
    <section id="chap4">
      <h2 className="font-display text-4xl font-bold text-amber-700 mb-6 border-b-4 border-amber-200 pb-2 mt-16">
        CHAPITRE 4 : LE MARCHÉ AUX MENTEURS
      </h2>
      <p className="text-slate-500 font-medium mb-8">Niveau recommandé : 3<br/>Lieu : Le Marché aux Menteurs, à la sortie de la forêt<br/>Ambiance : Un marché coloré où tout le monde ment, joyeusement. Chapitre d'enquête et de bagout, sans combat obligatoire.</p>

      <InfoBox title="Synopsis du Chapitre pour le Maître du Jeu">
        <p>Au marché, <strong>tous les marchands mentent par métier</strong>. Le héros doit démêler le vrai du faux pour apprendre où est caché le butin du Baron Cornichon. Un pickpocket lui vole un objet, qu'il faut récupérer. <strong>Préparation de la trahison :</strong> pendant ce chapitre, Gaston disparaît quelques minutes et revient avec des miettes de maïs doré sur le bec : un inconnu lui a promis un sac de grain doré. Le héros peut le remarquer (MALICE, DD 13).</p>
      </InfoBox>

      <h3 className="font-display text-2xl font-bold text-slate-700 mt-8 mb-4">SCÈNE 1 : LES MARCHANDS MENTEURS (Exploration et Roleplay)</h3>
      <ReadAloud title="Texte à lire à voix haute">
        "Le Marché aux Menteurs est une explosion de couleurs, de cris et de mensonges. Un marchand te propose « des pommes bleues, cueillies sur la Lune ». Un autre t'assure que ses chaussures sont « magiques, ou en tout cas, ils sentent magique ». Une vieille dame brandit une pancarte : « TOUT CE QUE JE DIS EST FAUX. » Elle t'interpelle : « Bonjour, détective, je m'appelle Madame Pivoine, et ceci est une pancarte parfaitement honnête. » Gaston se penche vers toi : « Elle ment. Ou elle dit la vérité. Je renonce. »"<br/><br/>
        "Au bout de l'allée, trois étals attirent ton regard : celui du poissonnier Moustache, celui de la fleuriste Madame Pivoine, et celui d'un vendeur de chapeaux, Maître Cloche. Tous les trois affirment avoir vu le Baron Cornichon la veille, mais ils donnent trois versions différentes. Plus loin, un petit homme discret se glisse entre les passants, les mains dans ses poches pleines. Que fais-tu ?"
      </ReadAloud>

      <InfoBox title="Profil des marchands et du pickpocket">
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Moustache le poissonnier :</strong> immense moustache de crevette, ment toujours avec un grand sourire, mais jamais sur le prix.</li>
          <li><strong>Madame Pivoine :</strong> vieille dame, ment sur tout sauf sur ce qui lui fait mal.</li>
          <li><strong>Maître Cloche :</strong> chapeaux ridicules, ment par réflexe mais très mal : il se touche l'oreille quand il ment.</li>
          <li><strong>Doigts-de-Fée :</strong> le pickpocket, petit, rapide, un peu honteux. Il vole par habitude, rend si on le surprend, et adore les blagues.</li>
        </ul>
      </InfoBox>

      <ActionBox title="Options d'Exploration et Mécaniques (Bac à sable)">
        <h4 className="font-bold text-lg mb-2">1. Jouer au jeu « Vrai ou Menteur » : interroger les trois marchands (Test de MALICE - DD 13, un jet par marchand)</h4>
        <p className="mb-2">Chaque marchand dit une phrase. Au héros de deviner celle qui est vraie. Lis-les à voix haute, puis laisse l'enfant réfléchir et choisir avant de lancer le dé.</p>
        <ul className="list-disc pl-5 space-y-2 mb-4">
          <li><strong>Moustache :</strong> « Le Baron a acheté dix kilos de poisson. » <em>(Faux : il a acheté 10 kilos de fromage.)</em></li>
          <li><strong>Madame Pivoine :</strong> « Le Baron a acheté un masque et trois mètres de corde. » <em>(Vrai.)</em></li>
          <li><strong>Maître Cloche :</strong> « Le Baron a offert un chapeau au roi hier. » <em>(Faux, et il se touche l'oreille.)</em></li>
        </ul>
        <p className="mb-6"><strong>Réussite :</strong> le héros démasque les mensonges. Il comprend que le Baron prépare quelque chose avec un masque et de la corde, et qu'il a acheté beaucoup de fromage (le fromage de la miette !). <strong>Échec :</strong> il a des doutes, mais un marchand gagne sa confiance : il perd 5 écus en achetant des « pommes bleues ».</p>

        <h4 className="font-bold text-lg mb-2">2. Remarquer que Gaston a disparu un moment (Test de MALICE - DD 13)</h4>
        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li><strong>Réussite :</strong> le héros voit Gaston revenir d'une ruelle, avec des <strong>miettes de maïs doré sur le bec</strong>. « Une collation. Mes affaires. » Le héros peut lui poser la question (CHARME, DD 12) : « Un monsieur voulait mes conseils d'expert. » (Préparation de la trahison : si le héros a remarqué ça, il gagnera un avantage au chapitre 5.)</li>
          <li><strong>Échec :</strong> il ne remarque rien.</li>
        </ul>

        <h4 className="font-bold text-lg mb-2">3. Rattraper Doigts-de-Fée, le pickpocket (Test de COURAGE - DD 12, puis CHARME)</h4>
        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li>Le pickpocket a volé <strong>la loupe</strong> du héros pendant qu'il discutait. Le héros peut poursuivre la course, fonçant entre les étals de fruits et de chapeaux.</li>
          <li><strong>Réussite :</strong> il rattrape Doigts-de-Fée au milieu d'une pyramide de melons. Un baratin réussi (CHARME, DD 12) le fait rire, et il rend la loupe, plus un cadeau : <strong>Loot : une Fausse Moustache</strong> (utile au chapitre 4 : +2 pour passer pour un autre).</li>
          <li><strong>Échec :</strong> le héros glisse sur un melon (−1 PV) et perd la loupe pour le moment. Il la retrouve plus tard dans un étal du marché.</li>
        </ul>

        <h4 className="font-bold text-lg mb-2">4. Faire des achats (aucun jet)</h4>
        <p>Le héros peut dépenser ses écus : <strong>Potion de Panache</strong> (15 écus, rend 1 Panache), <strong>Potion de pomme</strong> (5 écus, rend 5 PV), <strong>Grappin renforcé</strong> (10 écus, +2 pour escalader). Chaque marchand ment sur ses prix : lance un jet de CHARME (DD 11) pour avoir le vrai prix.</p>
      </ActionBox>

      <h3 className="font-display text-2xl font-bold text-slate-700 mt-8 mb-4">SCÈNE 2 : LE CONCOURS DE MENSONGES (Épreuve de bagout)</h3>
      <ReadAloud title="Texte à lire à voix haute">
        "Au centre du marché, sur une estrade décorée de guirlandes, un homme en redingote violette agite une cloche. « Mesdames et messieurs, c'est l'heure du célèbre Concours de Mensonges ! Le gagnant remporte un panier de fruits, un diplôme et le titre envié de Grand Menteur du Marché ! » La foule applaudit. Trois concurrents montent sur l'estrade : un grand moustachu qui prétend avoir dompté un dragon, une vieille dame qui jure avoir été reine des mers, et un petit enfant qui dit avoir inventé le sommeil. Le présentateur te cherche du regard : « Un volontaire dans le public ? Vous, détective ! »"
      </ReadAloud>

      <ActionBox title="Le concours (Épreuve en trois manches)">
        <p className="mb-4">Le héros peut participer, refuser, ou envoyer Gaston (ce qui est drôle). S'il participe, c'est un <strong>concours de baratin en trois manches</strong> : l'enfant invente un mensonge de plus en plus énorme, puis lance le dé.</p>

        <h4 className="font-bold text-lg mb-2">Manche 1 : le petit mensonge (Test de CHARME - DD 11)</h4>
        <p className="mb-4">« Je suis détective depuis 200 ans. » Un mensonge court, simple, à dire avec aplomb. <strong>Réussite :</strong> la foule applaudit poliment.</p>

        <h4 className="font-bold text-lg mb-2">Manche 2 : le mensonge détaillé (Test de CHARME - DD 12)</h4>
        <p className="mb-4">Le héros doit inventer une histoire fantaisiste avec trois détails absurdes. <strong>+3 si l'histoire fait vraiment rire le MJ.</strong> <strong>Réussite :</strong> la foule rit.</p>

        <h4 className="font-bold text-lg mb-2">Manche 3 : le mensonge incroyable (Test de CHARME - DD 13)</h4>
        <p className="mb-4">Le grand final : le mensonge le plus fou possible. <strong>Réussite :</strong> la foule se lève et acclame le héros.</p>

        <p><strong>Résultat :</strong> 3 réussites : <strong>Grand Menteur du Marché</strong> (Loot : un Diplôme, qui donne +2 à tous les jets de bagout au marché, et <strong>2 Panache</strong>). 2 réussites : <strong>deuxième place</strong> (un panier de fruits, +1 Panache). 0 ou 1 réussite : la foule siffle gentiment, mais Gaston explique que « c'était un mensonge de génie, en fait ». Dans tous les cas, <strong>gagne un Panache</strong> pour avoir osé monter sur scène.</p>
      </ActionBox>

            <h3 className="font-display text-2xl font-bold text-slate-700 mt-8 mb-4">SCÈNE 3 : MADAME ZUT, LA VOYANTE (Rencontre et Prophétie)</h3>
      <ReadAloud title="Texte à lire à voix haute">
        "Dans un coin du marché, à l'écart des étals, une petite tente violette est décorée d'étoiles dorées et d'un panneau : « MADAME ZUT, VOYANTE (SATISFAITE OU REMBOURSÉE, SAUF SI VRAI) ». Une femme à turban, entourée de plumes, te fait signe d'entrer. L'intérieur sent l'encens et la barbe à papa. Au centre, sur une table ronde, une boule de cristal tourne toute seule. « Assieds-toi, détective. Je t'attendais. Ou plutôt, j'attendais ton oie. Je vois... je vois... une plume blanche. »"
      </ReadAloud>

      <InfoBox title="Profil de Madame Zut">
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Apparence :</strong> grand turban à franges, bagues sur tous les doigts, sourire de comédienne.</li>
          <li><strong>Caractère :</strong> théâtrale, mystérieuse, très drôle. Elle improvise la moitié de ses prédictions, mais l'autre moitié est <strong>étonnamment vraie</strong>.</li>
          <li><strong>Son secret :</strong> elle est la tante de Doigts-de-Fée, et sait <em>vraiment</em> deviner certaines choses. Elle joue la voyante pour s'amuser, mais ce soir, elle est sérieuse.</li>
        </ul>
      </InfoBox>

      <ActionBox title="L'Arbre de Dialogue et les Résolutions">
        <p className="mb-4">Lis la prophétie lentement, avec une voix mystérieuse. Elle annonce, sans le dire, <strong>la trahison de Gaston</strong>, et sa <strong>rédemption</strong>.</p>
        <p className="italic mb-4">« Je vois une plume blanche, qui te trahira... et une plume blanche, qui te sauvera. Je vois un homme en gris, qui sourit trop peu. Je vois un grand banquet, une couronne, et un éclat de rire qui brise les chaînes. Attention, détective : la première plume n'est pas celle que tu crois. Et la deuxième, tu la tiens déjà. »</p>

        <h4 className="font-bold text-lg mb-2">Option A : Prendre la prophétie au sérieux (Test de MALICE - DD 12)</h4>
        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li><strong>Réussite :</strong> le héros comprend qu'elle parle de son entourage. Il peut garder Gaston à l'œil (avantage pour remarquer sa trahison au chapitre 5). Mais il ne saura pas laquelle des « plumes blanches » est la traîtresse. <strong>Gagne un point de Panache.</strong></li>
          <li><strong>Échec :</strong> il trouve ça trop vague.</li>
        </ul>

        <h4 className="font-bold text-lg mb-2">Option B : Poser une question précise (Test de CHARME - DD 13)</h4>
        <p className="mb-6"><strong>Réussite :</strong> Madame Zut avoue : « Ton oie sera tentée. Ce sera de ma faute si tu ne l'arrêtes pas : je n'ai pas le droit de te dire plus. » Elle tend au héros une <strong>amulette en maïs doré</strong> en plastique, sans valeur... sauf qu'elle apaise l'oie (+2 pour parler à Gaston avant la trahison).</p>

        <h4 className="font-bold text-lg mb-2">Option C : Se moquer de la prophétie (aucun jet)</h4>
        <p>Madame Zut sourit : « Tu verras. » Elle ne se vexe pas. Le héros n'a pas d'avantage, mais la prophétie reste dans un coin de sa tête. (Si le héros fait une blague, <strong>+1 Panache</strong> : Madame Zut adore ça.)</p>
      </ActionBox>

      <h3 className="font-display text-2xl font-bold text-slate-700 mt-8 mb-4">SCÈNE 4 : LE VRAI RENSEIGNEMENT (Rencontre et Roleplay)</h3>
      <ReadAloud title="Texte à lire à voix haute">
        "Madame Pivoine te fait signe de venir. Elle baisse la voix. « Détective, je vais te dire une vérité, la seule de ma vie. Le Baron Cornichon n'est pas du tout celui que l'on croit. Il vit dans un château sur la colline, il aime les chapeaux, il a toujours une cape violette. Et... » Elle regarde autour d'elle. « ...quelqu'un a payé tout le marché hier pour qu'on te raconte que le voleur, c'est lui. Je ne sais pas qui. Un monsieur sérieux, il ne rigolait pas, il m'a fait peur. » Elle reprend sa pancarte. « Évidemment, je mens. »"
      </ReadAloud>

      <ActionBox title="L'Arbre de Dialogue et les Résolutions">
        <h4 className="font-bold text-lg mb-2">Option A : Croire Madame Pivoine (Test de MALICE - DD 12)</h4>
        <p className="mb-6"><strong>Réussite :</strong> le héros comprend qu'elle a dit la vérité, qu'on a acheté tout le marché pour accuser le Baron. <strong>Indice n°4 :</strong> quelqu'un a payé pour détourner l'enquête vers le Baron. Le héros garde le doute, tout en suivant la piste du château.</p>

        <h4 className="font-bold text-lg mb-2">Option B : Ne pas la croire (aucun jet)</h4>
        <p className="mb-6">Le héros suit simplement la piste du Baron comme prévu. Il ne perd rien, mais il passera à côté d'un indice (et la révélation du chapitre 6 sera plus surprenante).</p>

        <h4 className="font-bold text-lg mb-2">Option C : Lui demander qui a payé (Test de CHARME - DD 14)</h4>
        <p>Elle hésite, puis souffle : « Il avait des gants gris, et il sentait l'encre. Mais je mens. » C'est la même description que celle des brigands : <strong>deux témoignages indépendants pointent vers la même personne</strong>. Gagne un point de Panache pour avoir recoupé les indices.</p>
      </ActionBox>

      <h3 className="font-display text-2xl font-bold text-slate-700 mt-8 mb-4">SCÈNE 5 : LA TAVERNE DU HÉRISSON QUI RIT (Repos et Roleplay)</h3>
      <ReadAloud title="Texte à lire à voix haute">
        "Le soleil descend lentement quand vous arrivez à une grande auberge au bord du marché : « AU HÉRISSON QUI RIT », annonce une enseigne représentant un hérisson hilare. À l'intérieur, une salle chaleureuse, pleine de monde, de chansons, de fumée et d'odeurs de soupe. Au fond, un barde à moustache joue de la guitare en chantant : « Il était un petit détective, qui cherchait, qui cherchait, qui cherchait... » Une aubergiste ronde et souriante te tend un bol : « Pour le courage, mon petit. C'est offert. » Tu t'assois, les pieds fatigués, le cœur un peu plus léger. Gaston s'installe à côté de toi, étrangement silencieuse."
      </ReadAloud>

      <ActionBox title="Options d'Exploration et Mécaniques (Repos et rencontres)">
        <h4 className="font-bold text-lg mb-2">1. Se reposer (aucun jet)</h4>
        <p className="mb-6">Le héros peut manger, boire et se reposer : <strong>il regagne 6 PV</strong> et <strong>1 Panache</strong>. Il peut aussi acheter une potion ou un objet.</p>

        <h4 className="font-bold text-lg mb-2">2. Écouter le barde (Test de CHARME - DD 11)</h4>
        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li>Le barde, Maître Lyre, chante une chanson sur le détective, et invite le héros à improviser un couplet.</li>
          <li><strong>Réussite :</strong> la salle applaudit, et le barde offre au héros <strong>Loot : une Chanson de Courage</strong> (utilisable une fois : +3 à un jet de COURAGE).</li>
          <li><strong>Échec :</strong> la salle rit, mais gentiment. Le héros gagne +1 Panache pour son audace.</li>
        </ul>

        <h4 className="font-bold text-lg mb-2">3. Parler à l'aubergiste (Test de MALICE ou CHARME - DD 12)</h4>
        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li>L'aubergiste, Madame Bouillon, connaît les secrets de la région. Elle murmure : « Le Baron Cornichon ? Un brave homme. Il vient ici chaque semaine pour rire avec nous. Les gens disent que le Chancelier le déteste, parce qu'il rit trop. »</li>
          <li><strong>Réussite :</strong> elle ajoute : « Ces derniers jours, le Chancelier a envoyé des hommes en gris poser des questions. Ils sont partis sans rien boire. » (Indice supplémentaire sur le Chancelier.)</li>
          <li><strong>Échec :</strong> elle propose simplement une deuxième soupe.</li>
        </ul>

        <h4 className="font-bold text-lg mb-2">4. Parler à Gaston en tête-à-tête (Roleplay)</h4>
        <p>Gaston picore ses légumes, l'air triste. Si le héros lui demande ce qui ne va pas (CHARME - DD 11), elle répond sans le regarder : « Rien. J'ai juste un peu faim. J'ai... envie de maïs. » Elle sourit tristement. <strong>Scène clé pour le MJ :</strong> c'est la dernière occasion de renforcer le lien avant la trahison. Si le héros lui parle avec sincérité, <strong>gagne un point de Panache</strong>. Si le héros a déjà remarqué le maïs sur son bec, il peut lui poser la question directe : elle ment mal, rougit, et change de sujet.</p>
      </ActionBox>

      <ReadAloud title="Texte à lire à voix haute (fin du chapitre)">
        "Au soir, le marché ferme, les marchands comptent leurs mensonges, et le soleil se couche sur les collines. Là-haut, sur la plus haute, se dresse le château du Baron Cornichon : des tourelles tordues, un fossé rempli d'eau verte, et une lumière allumée dans une seule fenêtre. Gaston renifle. « Un château... mal décoré. Je suggère qu'on y entre, évidemment, avec le meilleur détective : moi. » Tu soupires. Il reste un peu plus d'une journée pour retrouver la Couronne."
      </ReadAloud>

      <InfoBox title="Note pour le MJ : le récapitulatif des indices">
        <p>À ce stade, le héros peut avoir collecté jusqu'à quatre indices sur le Chancelier (tache d'encre, doigts tachés d'encre, brigands payés par un homme en gris, marché payé par un homme sérieux). <strong>Ne les relie pas à sa place.</strong> Si l'enfant en parle, accueille sa théorie avec un grand sourire, mais ne la confirme pas : il y a encore la trahison et le chapitre 5 pour que tout s'éclaire.</p>
      </InfoBox>
    </section>
  );
}
