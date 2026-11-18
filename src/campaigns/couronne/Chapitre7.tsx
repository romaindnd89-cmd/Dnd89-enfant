import React from 'react';
import { ReadAloud, CombatBox, ActionBox, InfoBox, FirstRound } from '../../components/StoryBlocks';

export default function Chapitre7() {
  return (
    <section id="chap7">
      <h2 className="font-display text-4xl font-bold text-orange-700 mb-6 border-b-4 border-orange-200 pb-2 mt-16">
        CHAPITRE 7 : LA COURSE VERS LE PALAIS
      </h2>
      <p className="text-slate-500 font-medium mb-8">Niveau recommandé : 3<br/>Lieu : La route de la colline au palais de Pétaouchnok, puis les jardins royaux<br/>Ambiance : Une course contre la montre pleine de péages absurdes, une embuscade de Cravates Grises, et une entrée discrète au banquet. Le rythme accélère.</p>

      <InfoBox title="Synopsis du Chapitre pour le Maître du Jeu">
        <p>Le héros sort des cachots à l'aube, retrouve Gaston, puis doit être au palais <strong>avant vingt heures</strong>. Au programme : le retour de Gaston (le héros choisit de lui pardonner ou non), un conseil de guerre avec le Baron pour choisir un plan, une <strong>course en quatre obstacles</strong> sur la route, une <strong>embuscade des Cravates Grises</strong> (les sbires silencieux du Chancelier), et enfin un déguisement pour entrer au banquet. Les choix du héros (plan, déguisement, ordre des obstacles) auront un effet sur le chapitre 8. C'est aussi un chapitre de <strong>respiration émotionnelle</strong> : le Baron et le héros deviennent amis.</p>
      </InfoBox>

      <h3 className="font-display text-2xl font-bold text-slate-700 mt-8 mb-4">SCÈNE 1 : LE RETOUR DE GASTON (Rencontre et Roleplay)</h3>
      <ReadAloud title="Texte à lire à voix haute">
        "Gaston se pose maladroitement dans l'herbe, trébuche, se relève. Son chapeau melon est de travers, plus que d'habitude. Elle n'ose pas te regarder. « Je... je voulais te dire. J'ai jeté le maïs. Je l'ai jeté dans les douves. Après. Pas avant. Je sais que ça ne change rien. » Elle renifle. « Je suis un mauvais oiseau. Un très mauvais détective. Mais... j'ai suivi le Chancelier cette nuit. J'ai entendu des choses. » Elle relève enfin la tête. « Je sais où est la Couronne. »"
      </ReadAloud>

      <InfoBox title="Ce que sait Gaston">
        <ul className="list-disc pl-5 space-y-2">
          <li>Pendant que le héros était au cachot, Gaston a espionné le palais. Il a vu le Chancelier <strong>cacher la Couronne dans le fond de la grande soupière du banquet</strong>, sous un couvercle en forme de fromage.</li>
          <li>Il a aussi entendu le plan : <strong>le Chancelier accusera le Baron en public, puis posera la Couronne sur sa propre tête « pour protéger le royaume »</strong>.</li>
          <li>Il est sincèrement désolé. <strong>C'est au héros de décider de la suite.</strong></li>
        </ul>
      </InfoBox>

      <ActionBox title="L'Arbre de Dialogue et les Résolutions">
        <h4 className="font-bold text-lg mb-2">Option A : Pardonner à Gaston (aucun jet)</h4>
        <p className="mb-6">Gaston éclate en sanglots et se jette dans les bras du héros. <strong>Gagne un point de Panache</strong> et <strong>le bonus de loyauté :</strong> pendant le combat final, Gaston peut intervenir (une fois) pour attirer l'attention du Chancelier et donner +3 au héros.</p>

        <h4 className="font-bold text-lg mb-2">Option B : Pardonner, mais pas tout de suite (Test de CHARME - DD 11)</h4>
        <p className="mb-6">« D'accord, mais tu me dois une grosse faveur. » Gaston accepte, soulagé. Il aidera à moitié (+2 au héros, une fois, pendant le combat final).</p>

        <h4 className="font-bold text-lg mb-2">Option C : Ne pas lui pardonner (aucun jet)</h4>
        <p>Gaston baisse la tête, serre son chapeau. « Je comprends. » Il disparaît dans la foule. <strong>Le héros n'aura pas son aide.</strong> (Il pourra changer d'avis pendant le combat final : l'oie interviendra alors toute seule, et ça compte quand même.)</p>
      </ActionBox>

      <h3 className="font-display text-2xl font-bold text-slate-700 mt-8 mb-4">SCÈNE 2 : LE CONSEIL DE GUERRE (Roleplay)</h3>
      <ReadAloud title="Texte à lire à voix haute">
        "Le soleil se lève sur la colline, et vous vous asseyez tous, à bout de souffle, sur un tronc d'arbre renversé : le héros, le Baron Cornichon, Monsieur Moisi qui ronfle déjà, et Boudin qui tient son tablier dans ses mains. Le Baron sort un papier froissé et le déplie sur ses genoux. « Nous avons jusqu'à vingt heures. Si nous arrivons en retard, le Chancelier aura pris la Couronne. Il nous faut un plan. » Il tapote la carte. « J'en ai trois en tête. À toi de décider, détective. C'est toi, la tête pensante de l'équipe. »"
      </ReadAloud>

      <InfoBox title="Les trois plans (le choix du héros)">
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Plan A, le Procès Public :</strong> arriver en pleine fête, interrompre le Chancelier, et présenter les preuves devant tout le monde. <em>Risqué, mais spectaculaire.</em> Effet au chapitre 8 : le héros commence le procès avec <strong>+2 au jet</strong>, mais le Chancelier sait qu'il arrive.</li>
          <li><strong>Plan B, la Soupière Piégée :</strong> entrer par les cuisines (avec l'aide de Madame Soufflé), récupérer la Couronne cachée avant le banquet. <em>Discret, mais difficile.</em> Effet : si le héros réussit une infiltration (chapitre 7, scène 4), il <strong>peut prendre la Couronne avant le procès</strong> (le Chancelier devra chercher un plan B).</li>
          <li><strong>Plan C, le Cheval de Troie :</strong> entrer déguisé en invité, avec le Baron, et attendre le bon moment. <em>Équilibré.</em> Effet : le héros gagne <strong>un point de Panache</strong> au début du chapitre 8, et le Baron sera à ses côtés.</li>
        </ul>
      </InfoBox>

      <ActionBox title="L'Arbre de Dialogue et les Résolutions">
        <h4 className="font-bold text-lg mb-2">Option A : Choisir un plan (aucun jet)</h4>
        <p className="mb-6">Laisse l'enfant discuter avec le Baron. Chaque plan a ses avantages : aide-le à choisir en lui posant des questions (« Qui voudrais-tu surprendre ? », « Tu préfères te cacher ou entrer en fanfare ? »).</p>

        <h4 className="font-bold text-lg mb-2">Option B : Parler au Baron de son passé (Test de CHARME - DD 11)</h4>
        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li><strong>Réussite :</strong> le Baron avoue qu'il a toujours été jaloux du roi parce qu'il n'a jamais osé être aussi drôle que lui. « Je ris tout le temps, mais seulement quand personne ne me regarde. » Cela renforce leur amitié (+1 Panache).</li>
          <li><strong>Échec :</strong> il change de sujet en toussant.</li>
        </ul>

        <h4 className="font-bold text-lg mb-2">Option C : Se reposer un peu (aucun jet, 10 minutes)</h4>
        <p>Madame Soufflé, qui les a rejoints en secret, apporte des tartes. Chaque tarte rend <strong>3 PV</strong>. Le héros regagne aussi un point de Panache s'il remercie tout le monde.</p>
      </ActionBox>

      <h3 className="font-display text-2xl font-bold text-slate-700 mt-8 mb-4">SCÈNE 3 : LA ROUTE DES PÉAGES ABSURDES (Épreuve à 4 obstacles)</h3>
      <ReadAloud title="Texte à lire à voix haute">
        "La route du palais descend à travers des prairies, des vergers et des champs de tournesols. Le soleil est haut, il fait chaud, et chaque kilomètre semble plus long que le précédent. Un panneau en bois annonce : « Pétaouchnok : 12 lieues. Bienvenue. Merci de ne pas courir. » Gaston lève les yeux au ciel. « Évidemment. » Au premier virage, tu aperçois un poteau avec une cloche, un homme en uniforme assis sur un tabouret, et un panneau qui dit : « PÉAGE. »"
      </ReadAloud>

      <ActionBox title="Les quatre obstacles (dans l'ordre que tu veux)">
        <p className="mb-4">Pour arriver à l'heure, le héros doit franchir <strong>quatre obstacles</strong>. Chaque obstacle réussi fait gagner du temps. Compte les <strong>réussites</strong> : 4 réussites = arrivée à 18 h 30 ; 3 = 19 h ; 2 = 19 h 30 ; 1 = 19 h 55 ; 0 = après le début du banquet (chapitre 8 plus difficile, voir ci-dessous).</p>

        <h4 className="font-bold text-lg mb-2">Obstacle 1 : le péage absurde (Test de CHARME - DD 12)</h4>
        <p className="mb-2">Le percepteur, Monsieur Dîme, demande un paiement en blagues : « Une blague pour passer, deux blagues pour la charrette, trois blagues pour le chien. » Il a l'air très sérieux, mais il note chaque blague sur un carnet.</p>
        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li><strong>Réussite :</strong> il rit malgré lui, rend un reçu et lève la barrière. <strong>+1 Panache</strong> si la blague est vraiment drôle.</li>
          <li><strong>Échec :</strong> il demande une blague en plus, en lisant l'article 14 du règlement. Le temps passe.</li>
        </ul>

        <h4 className="font-bold text-lg mb-2">Obstacle 2 : le troupeau de moutons-nuages (Test de COURAGE ou MALICE - DD 13)</h4>
        <p className="mb-2">Des centaines de moutons blancs, ronds comme des nuages, occupent la route entière. Ils broutent lentement, ne bougent pas, et regardent le héros avec indifférence. Un berger endormi ronfle sous un arbre.</p>
        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li><strong>Réussite :</strong> le héros les fait avancer (avec le sifflet à canard, un chant, ou en les contournant par les tournesols).</li>
          <li><strong>Échec :</strong> il traverse en sautant de dos en dos (−1 PV), un mouton le traite de « goujat ».</li>
        </ul>

        <h4 className="font-bold text-lg mb-2">Obstacle 3 : le pont qui s'effondre (Test de COURAGE - DD 12, +2 avec le grappin)</h4>
        <p className="mb-2">Un vieux pont de pierre est coupé en son milieu : il manque trois planches. En dessous, un ravin plein d'épines.</p>
        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li><strong>Réussite :</strong> il saute, ou utilise le grappin pour se balancer, ou lance les planches du Baron pour les combler.</li>
          <li><strong>Échec :</strong> il tombe dans les épines (−2 PV) et remonte avec des feuilles dans les cheveux.</li>
        </ul>

        <h4 className="font-bold text-lg mb-2">Obstacle 4 : l'auberge du Bœuf Qui Louche (Test de MALICE - DD 12)</h4>
        <p className="mb-2">L'enseigne représente un bœuf qui louche. La route passe devant l'auberge, et l'aubergiste, un rouquin à tablier, tend un plateau : « Un petit rafraîchissement ? » Tout le monde est tenté.</p>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Réussite :</strong> le héros résiste, et le plateau contient en fait un piège : le gobelet est enduit de potion de sommeil (<strong>indice supplémentaire :</strong> les Cravates Grises sont déjà passées).</li>
          <li><strong>Échec :</strong> il boit une gorgée, s'endort quelques minutes, et le Baron le réveille en lui soufflant dans l'oreille. Le temps passe.</li>
        </ul>
      </ActionBox>

      <h3 className="font-display text-2xl font-bold text-slate-700 mt-8 mb-4">SCÈNE 4 : L'EMBUSCADE DES CRAVATES GRISES (Combat)</h3>
      <ReadAloud title="Texte à lire à voix haute">
        "À la sortie de l'auberge, la route s'enfonce dans un petit bois sombre. Tout est calme, trop calme. Les oiseaux se sont tus, le vent aussi. Gaston se colle contre toi : « Je n'aime pas cette ambiance. Elle manque de vulgarité. » Soudain, trois silhouettes sortent de derrière les arbres, vêtues de gris des pieds à la tête, avec de longues cravates grises qui flottent derrière elles. Elles ne disent rien. L'une d'elles sort un papier. « Au nom du Chancelier, » lit-elle d'une voix sans émotion. « Vous êtes arrêtés. Sans rire. »"
      </ReadAloud>

      <InfoBox title="Profil des Cravates Grises">
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Qui ils sont :</strong> les gardes personnels du Chancelier, des silhouettes sévères, silencieuses, qui ne rient jamais. Ils attaquent en ligne, sans bruit.</li>
          <li><strong>Leur faiblesse :</strong> ils ne supportent pas le <strong>rire</strong>. Chaque fois que quelqu'un rit près d'eux, ils perdent leur tour (ils se tiennent les oreilles).</li>
          <li><strong>Comment les jouer :</strong> voix monocorde, aucun geste inutile, une longue pause avant chaque phrase. Si le héros fait une blague, ils s'arrêtent, froncent les sourcils, et notent quelque chose dans un carnet.</li>
        </ul>
      </InfoBox>

      <CombatBox title="Mécaniques de Combat (trois Cravates Grises)">
        <FirstRound>
        <p><strong>Le détective</strong> attaque une Cravate Grise (9 PV, CA 13). Il lance le D20 et fait <strong>11</strong>. Il ajoute son Courage (+3) : 11 + 3 = <strong>14</strong>. 14 atteint la CA 13 : <strong>touché !</strong> Il lance le D6 pour les dégâts : <strong>4</strong> +1 = 5. Une Cravate Grise avait 9 PV : il lui en reste <strong>4</strong>.</p>
        <p>Au tour d'une Cravate Grise, le MJ lance un D20 : <strong>6</strong>, +3 = <strong>9</strong>. Il faut <strong>13</strong> ou plus pour toucher le détective : c'est moins : <strong>raté !</strong> La cravate fouette l'air. (Avec 13 ou plus, le détective aurait perdu 1D6 PV.)</p>
        </FirstRound>
        <h4 className="font-bold text-lg mb-2">Les Ennemis : 3 Cravates Grises</h4>
        <ul className="list-disc pl-5 space-y-1 mb-6">
          <li><strong>Cravate Grise (× 3) :</strong> 9 PV chacune, CA 13. Attaque à +3, 1D6 de dégâts. Elles attaquent en ligne : si deux sont alignées, la deuxième ajoute +1.</li>
          <li><strong>Silence :</strong> pendant le combat, aucun personnage ne peut crier ou chanter, sauf le héros (qui dépense un Panache). C'est une règle pour jouer : si le MJ parle trop fort, il perd un tour. (Joue-le pour de rire.)</li>
        </ul>

        <h4 className="font-bold text-lg mb-2">Tactique et Environnement (Le rôle du MJ) :</h4>
        <ul className="list-disc pl-5 space-y-4 mb-4">
          <li><strong>Option A - Coup d'épée :</strong> D20 + COURAGE (+3), 1D6 +1.</li>
          <li><strong>Option B - Faire rire (CHARME - DD 12) :</strong> si l'enfant propose une blague, même simple, une Cravate Grise perd son tour en se bouchant les oreilles. Si la blague est vraiment bonne, elle tombe à genoux.</li>
          <li><strong>Option C - Le Baron (si allié) :</strong> il attaque à +4, 1D6 de dégâts, et glisse une blague au passage. À chaque blague du Baron, une Cravate Grise perd son tour.</li>
          <li><strong>Option D - Boudin (s'il est resté avec le groupe) :</strong> il attrape deux Cravates et les cogne l'une contre l'autre (2 PV de dégâts chacune).</li>
          <li><strong>Option E - Les cravates (MALICE - DD 13) :</strong> le héros noue deux cravates ensemble : les deux ennemis se retrouvent attachés et perdent leur tour.</li>
          <li><strong>Option F - Gaston :</strong> elle peut mordre une cheville (+2, 1D4) si le héros lui demande gentiment. (Si elle a été pardonnée, elle le fait avec enthousiasme.)</li>
        </ul>
        <p className="italic">Si le héros tombe à 0 PV, KO comique : il est ficelé avec une cravate, puis libéré par Madame Soufflé qui sort d'un buisson avec une louche. 5 PV, un Panache en moins.</p>
      </CombatBox>

      <ReadAloud title="Texte à lire à voix haute (après le combat)">
        "La dernière Cravate Grise s'effondre avec un soupir silencieux. Dans sa poche, tu trouves un petit carnet gris, où chaque page est couverte d'une écriture serrée : la liste des « personnes à surveiller ». Ton nom est en haut. Celui du Baron aussi. Puis, tout en bas, une ligne : « Soupière : fond, sous le couvercle. Ne rien dire. Signé : G. » Le Baron prend le carnet, silencieux. « Voilà notre preuve. » Il te tend la main. « Merci, détective. Pour tout. »"
      </ReadAloud>

      <InfoBox title="Récompenses et Indice">
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Loot : le Carnet Gris.</strong> Preuve supplémentaire pour le procès (+1 au jet final, chapitre 8) et révélation de l'emplacement de la Couronne (la soupière).</li>
          <li><strong>Loot : une Cravate Grise.</strong> Elle donne +2 à un jet de MALICE pour imiter un garde du Chancelier (utile pour la scène 4).</li>
          <li><strong>Panache :</strong> +1 si le héros a épargné les Cravates ou si le combat s'est fini par un fou rire.</li>
        </ul>
      </InfoBox>

      <h3 className="font-display text-2xl font-bold text-slate-700 mt-8 mb-4">SCÈNE 5 : L'ENTRÉE AU PALAIS (Infiltration)</h3>
      <ReadAloud title="Texte à lire à voix haute">
        "Le soleil descend, la lumière devient orange. Au loin, le palais de Pétaouchnok brille de mille lumières : ses tours rondes, ses drapeaux colorés, ses jardins illuminés de lanternes. Des carrosses défilent devant la grande porte, remplis d'invités en habit de gala : des dames avec des chapeaux immenses, des messieurs avec des moustaches extraordinaires, des enfants déguisés en légumes. Dans l'air, la musique commence : un orchestre de trombones joue « Joyeux Anniversaire du Royaume » avec trois fausses notes. Il est dix-neuf heures quarante. Il faut maintenant entrer. Que fais-tu ?"
      </ReadAloud>

      <ActionBox title="Options d'Exploration et Mécaniques (Bac à sable)">
        <h4 className="font-bold text-lg mb-2">1. Entrer déguisé en invité (Test de CHARME - DD 12, +2 avec la fausse moustache)</h4>
        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li>Le Baron propose un costume : le héros peut être un <strong>légume géant</strong>, un <strong>cousin lointain d'une comtesse</strong>, ou un <strong>serviteur de bal</strong>.</li>
          <li><strong>Réussite :</strong> le héros entre dans la salle sans éveiller de soupçons. Il peut observer le Chancelier de loin (avantage au premier jet du chapitre 8).</li>
          <li><strong>Échec :</strong> un garde le reconnaît, il doit improviser (CHARME - DD 13) ou fuir.</li>
        </ul>

        <h4 className="font-bold text-lg mb-2">2. Passer par les cuisines (Plan B) (Test de MALICE - DD 13)</h4>
        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li>Madame Soufflé les attend à la porte de service avec un plateau de tartes et des tabliers.</li>
          <li><strong>Réussite :</strong> le héros atteint la grande soupière avant le début du banquet. La Couronne est là, sous le couvercle en forme de fromage. S'il la prend, le Chancelier n'aura plus rien à montrer (mais il aura un plan B).</li>
          <li><strong>Échec :</strong> un marmiton le repère. Il doit improviser un baratin (« Je livre des radis ! »).</li>
        </ul>

        <h4 className="font-bold text-lg mb-2">3. Entrer en fanfare (Plan A) (aucun jet)</h4>
        <p className="mb-6">Le héros pousse les grandes portes, le Baron à ses côtés, et toute la salle se retourne. Le Chancelier lève un sourcil. <strong>Gagne un point de Panache</strong> pour l'audace, mais le Chancelier saura que le héros est là.</p>
      </ActionBox>

      <ReadAloud title="Texte à lire à voix haute (la grande salle)">
        "Les portes s'ouvrent sur un spectacle éblouissant. La grande salle de banquet est immense : des lustres en cristal pendent du plafond, des centaines de bougies éclairent des tables couvertes de gâteaux, de tartes, de fromages et de plats fumants. Au fond, sur une estrade, le roi Gaspard est assis sur son trône (hors de son bain, pour une fois), avec un coussin vide à côté de lui. Debout à sa droite, grand, maigre, tout en gris, le Chancelier Gribouille lève un verre de jus de légumes. « Mes amis, » dit-il d'une voix froide, « ce soir, nous allons faire une annonce importante. »"
      </ReadAloud>
    </section>
  );
}
