import React from 'react';
import { ReadAloud, CombatBox, ActionBox, InfoBox } from '../../components/StoryBlocks';

export default function Chapitre3() {
  return (
    <section id="chap3">
      <h2 className="font-display text-4xl font-bold text-sky-700 mb-6 border-b-4 border-sky-200 pb-2 mt-16">
        CHAPITRE 3 : LA MARE DES CANARDS SYNDIQUÉS
      </h2>
      <p className="text-slate-500 font-medium mb-8">Niveau recommandé : 3<br/>Lieu : La Rivière Clapotis et son vieux pont, entre la forêt et le Marché aux Menteurs<br/>Ambiance : Une grève de canards, des négociations absurdes et une traversée en équilibre sur des nénuphars. Chapitre de négociation, avec un combat possible mais évitable.</p>

      <InfoBox title="Synopsis du Chapitre pour le Maître du Jeu">
        <p>Le seul pont qui mène au Marché aux Menteurs est bloqué par un <strong>piquet de grève de canards</strong>. Pour passer, le héros peut négocier avec le syndicat, trouver une autre route, ou se battre contre les « casseurs de grève ». Une affiche officielle clouée sur le pont montre que <strong>c'est le Chancelier lui-même qui a provoqué la grève</strong> avec un décret absurde : c'est un <strong>nouvel indice</strong> (n°2 bis) qui pointe vers lui. Ce chapitre est plus calme que le précédent : laisse l'enfant respirer, rire et choisir.</p>
      </InfoBox>

      <h3 className="font-display text-2xl font-bold text-slate-700 mt-8 mb-4">SCÈNE 1 : LE PONT BLOQUÉ (Exploration)</h3>
      <ReadAloud title="Texte à lire à voix haute">
        "Après la forêt, le sentier descend doucement vers une large rivière, calme et brillante comme un ruban de satin. Un vieux pont de bois la traverse, couvert de pancartes peintes à la main. Au bord de l'eau, une foule de canards en gilets jaunes marche en cercle en brandissant des panneaux : « PLUS DE PAIN ! », « QUAK ÉGALITÉ ! », « NOS PATTES, NOS DROITS ! » Un petit canard avec un mégaphone en forme de coquillage hurle : « Nous ne céderons pas ! Pas un pas de plus tant que le Chancelier n'aura pas retiré son décret ! »"<br/><br/>
        "Gaston s'arrête net. Elle lisse ses plumes, hautaine : « Des canards. Syndiqués. Quelle vulgarité. » Plus loin, à gauche, une barque est attachée à un piquet, à moitié coulée. À droite, de gros nénuphars flottent d'une rive à l'autre. Au centre du pont, une grande affiche grise est clouée sur un poteau. Que fais-tu ?"
      </ReadAloud>

      <InfoBox title="Profil des canards et de leurs alliés">
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Cancan Delarue :</strong> le chef du syndicat, un petit colvert au mégaphone. Très sérieux, il termine toutes ses phrases par « et c'est un droit ! ». Il parle comme un tribun, mais fond devant un compliment.</li>
          <li><strong>Madame Plume-Longue :</strong> vieille cane experte en négociation, lunettes en demi-lune. Elle pose les vraies questions.</li>
          <li><strong>Les Canetons Casse-Cou :</strong> une bande de quatre petits canards turbulents qui veulent surtout se battre. Ils ont des casques de bol à soupe.</li>
          <li><strong>Colonel Colvert :</strong> un canard énorme et vaniteux, chef de la « garde du pont ». Il a été engagé par une personne anonyme pour « maintenir l'ordre ».</li>
        </ul>
      </InfoBox>

      <ActionBox title="Options d'Exploration et Mécaniques (Bac à sable)">
        <h4 className="font-bold text-lg mb-2">1. Lire l'affiche grise (Test de MALICE - DD 11)</h4>
        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li><strong>Réussite :</strong> l'affiche est un <strong>Décret Royal</strong> : « Article 1 : Les canards ne peuvent plus cancaner après 20 heures. Article 2 : Il est interdit de rire à la mare. Article 3 : Le pain doit être servi sans beurre. » Il est signé « <strong>G.</strong> » avec de l'encre violette. <strong>Indice supplémentaire :</strong> le Chancelier s'attaque à tout ce qui fait rire.</li>
          <li><strong>Réussite par 4 ou plus (DD 15) :</strong> le héros remarque que le décret a été écrit <em>avant</em> la disparition de la Couronne. <strong>Le Chancelier avait préparé son plan à l'avance.</strong> Gagne un point de Panache.</li>
          <li><strong>Échec :</strong> il lit « Article 3 : pain sans beurre », et comprend la colère des canards.</li>
        </ul>

        <h4 className="font-bold text-lg mb-2">2. Parler à Cancan Delarue (Roleplay)</h4>
        <p className="mb-6">Il refuse d'abord : « Nous ne parlons pas aux détectives ! Et c'est un droit ! » Mais il écoute si le héros lui fait un compliment sincère ou propose de lire les revendications. Passe à la Scène 2.</p>

        <h4 className="font-bold text-lg mb-2">3. Réparer la barque (Test de COURAGE ou de MALICE - DD 12)</h4>
        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li>Un trou dans la coque, un seul aviron. Il faut de la corde, de la poix et de l'astuce.</li>
          <li><strong>Réussite :</strong> la barque flotte, mais elle prend l'eau : il faut pagayer vite. Passe directement à la <strong>Scène 4 (la traversée)</strong> avec un bonus de +2.</li>
          <li><strong>Échec :</strong> la barque se remplit, le héros tombe à l'eau (−1 PV, une botte perdue). Il peut retenter ou choisir une autre voie.</li>
        </ul>

        <h4 className="font-bold text-lg mb-2">4. Traverser sur les nénuphars (Test de COURAGE - DD 13)</h4>
        <p className="mb-6">Voir la Scène 4. C'est l'option la plus risquée, mais aussi la plus drôle.</p>

        <h4 className="font-bold text-lg mb-2">5. Discuter avec Gaston (Roleplay)</h4>
        <p>Gaston a un avis sur tout : « Moi, j'aurais négocié une augmentation de maïs. » Elle propose, si le héros lui fait un compliment, de <strong>faire diversion</strong> en cancanant plus fort que les canards (+2 au prochain jet de CHARME). C'est aussi l'occasion de voir à quel point elle adore le maïs : <strong>elle en parle trois fois dans la minute</strong>.</p>
      </ActionBox>

      <h3 className="font-display text-2xl font-bold text-slate-700 mt-8 mb-4">SCÈNE 2 : LA TABLE DE NÉGOCIATION (Roleplay)</h3>
      <ReadAloud title="Texte à lire à voix haute">
        "Cancan Delarue vous installe sur un tonneau, avec une grande solennité, à côté d'une table recouverte d'une nappe de papier. Madame Plume-Longue pose ses lunettes sur la table et sort un carnet minuscule. « Alors, détective, vous voulez traverser ? Voici nos conditions. Un : du pain avec du beurre. Deux : le droit de cancaner après vingt heures. Trois : un chapeau pour chaque canard. Quatre : des excuses officielles du Chancelier. » Un jeune caneton lève une patte : « Et une glace ! » « Et une glace ! » répètent tous les canards en chœur. Cancan se tourne vers toi : « Que proposez-vous ? »"
      </ReadAloud>

      <ActionBox title="L'Arbre de Dialogue et les Résolutions : le jeu de la négociation">
        <p className="mb-4">C'est une <strong>épreuve en trois manches</strong>. Le héros doit réussir <strong>2 manches sur 3</strong> pour convaincre le syndicat. À chaque manche, l'enfant propose son argument, puis lance le dé.</p>

        <h4 className="font-bold text-lg mb-2">Manche 1 : le pain et le beurre (Test de CHARME - DD 12)</h4>
        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li>Le héros peut <strong>offrir du pain</strong> de sa propre réserve (+2), promettre de parler au roi (+1), ou faire un discours.</li>
          <li><strong>Réussite :</strong> les canards sourient, Cancan note « Pain avec beurre : accordé ».</li>
          <li><strong>Échec :</strong> « Du pain, du pain ! Tout le monde veut du pain ! Il faut du beurre ! »</li>
        </ul>

        <h4 className="font-bold text-lg mb-2">Manche 2 : le droit de cancaner (Test de MALICE - DD 13)</h4>
        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li>Le héros doit trouver un <strong>argument juridique</strong> : l'affiche est un décret grisé, donc pas du roi (+2 si le héros a lu l'affiche), ou un compromis : cancaner jusqu'à 22 heures.</li>
          <li><strong>Réussite :</strong> Madame Plume-Longue hoche la tête : « Un argument recevable. »</li>
          <li><strong>Échec :</strong> « Impossible ! Le décret est le décret ! »</li>
        </ul>

        <h4 className="font-bold text-lg mb-2">Manche 3 : la grande glace (Test de CHARME - DD 12, avec un baratin drôle : +3)</h4>
        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li>Le plus petit caneton veut une glace. Le héros peut lui promettre une glace, en inventer une (« la glace au pain beurré ! »), ou en offrir une avec la tarte miracle.</li>
          <li><strong>Réussite :</strong> les canetons applaudissent et dansent. L'ambiance se détend.</li>
          <li><strong>Échec :</strong> un caneton pleure, les autres s'énervent.</li>
        </ul>

        <h4 className="font-bold text-lg mb-2">Résultat de la négociation</h4>
        <p><strong>2 réussites ou plus :</strong> le syndicat accepte de laisser passer le héros, et lui offre un cadeau : <strong>Loot : une Plume de Canard Magique</strong> (une fois, elle permet de lancer une Réplique Cinglante sans dépenser de Panache). <strong>Gagne un point de Panache</strong> pour avoir évité la bagarre. <strong>0 ou 1 réussite :</strong> les Canetons Casse-Cou sautent sur le héros. Passe à la Scène 3.</p>
      </ActionBox>

      <h3 className="font-display text-2xl font-bold text-slate-700 mt-8 mb-4">SCÈNE 3 : LES CANETONS CASSE-COU (Combat)</h3>
      <ReadAloud title="Texte à lire à voix haute (si la négociation échoue)">
        "Cancan lève son mégaphone et hurle : « Assez de bavardage ! Aux armes, camarades ! » Un caneton jette son casque en l'air, un autre dégaine une cuillère à soupe en guise d'épée. Le Colonel Colvert se redresse de toute sa hauteur, gonfle sa poitrine et lâche un « COUAC ! » si puissant que les feuilles tremblent. « Garde du pont, à vos postes ! » Quatre canetons, un colonel et un pont qui vibre : l'ambiance est électrique. Gaston, elle, s'éloigne discrètement vers un buisson."
      </ReadAloud>

      <CombatBox title="Mécaniques de Combat (quatre canetons et le Colonel Colvert)">
        <p className="mb-4">Combat drôle, plus bruyant que dangereux. Initiative : D20 + Courage pour le héros, D20 pour le Colonel.</p>

        <h4 className="font-bold text-lg mb-2">Les Ennemis : 4 Canetons Casse-Cou et le Colonel Colvert</h4>
        <ul className="list-disc pl-5 space-y-1 mb-6">
          <li><strong>Canetons Casse-Cou (× 4) :</strong> 4 PV chacun, CA 12. Attaque à +2, 1D4 de dégâts (coup de cuillère). Ils attaquent <strong>en bande</strong> : si deux sont à côté, ils ajoutent +1 à leur attaque.</li>
          <li><strong>Colonel Colvert :</strong> 12 PV, CA 13. Attaque à +4, 1D6 de dégâts (coup de bec). Il lance parfois « Ordre de quacker ! » : les canetons gagnent +1 à leur prochaine attaque.</li>
        </ul>

        <h4 className="font-bold text-lg mb-2">Tactique et Environnement (Le rôle du MJ) :</h4>
        <ul className="list-disc pl-5 space-y-4 mb-4">
          <li><strong>Option A - Coup d'épée :</strong> D20 + COURAGE (+3), 1D6 +1. Un caneton tombe en un seul coup.</li>
          <li><strong>Option B - Le sifflet à canard (sac à gadgets) :</strong> le héros souffle : tous les canards s'arrêtent, hypnotisés, pendant un tour (ils croient que c'est leur maman).</li>
          <li><strong>Option C - Pousser les canetons à l'eau (COURAGE - DD 12) :</strong> un caneton tombe dans la rivière et part en flottant, sans dégâts, mais hors du combat.</li>
          <li><strong>Option D - Réplique Cinglante (1 Panache) :</strong> « Colonel, votre chapeau est mal mis. » Le Colonel perd son tour à vérifier.</li>
          <li><strong>Option E - Gaston (si elle est rassurée par un compliment) :</strong> elle revient en courant et cancane si fort que les canetons s'enfuient. Elle s'approprie la victoire.</li>
          <li><strong>Option F - Rendre les armes :</strong> à tout moment, le héros peut proposer de négocier de nouveau (CHARME - DD 14). Cancan, un peu honteux, accepte.</li>
        </ul>
        <p className="italic">Si le héros tombe à 0 PV, KO comique : il atterrit dans la rivière, sauvé par Madame Plume-Longue qui le pêche avec une épuisette. 5 PV, un Panache en moins, et une petite leçon sur « le dialogue social ».</p>
      </CombatBox>

      <h3 className="font-display text-2xl font-bold text-slate-700 mt-8 mb-4">SCÈNE 4 : LA TRAVERSÉE (Épreuve d'équilibre)</h3>
      <ReadAloud title="Texte à lire à voix haute">
        "Que ce soit en barque, à pied, ou à la nage, il faut maintenant traverser. La rivière, calme et brillante, cache des courants et des nénuphars gluants. À mi-chemin, une énorme carpe dorée vous observe en silence, de ses grands yeux ronds. « Qui traverse ma rivière ? » demande-t-elle d'une voix grave et très lente. « C'est l'heure de ma sieste. Alors soyez silencieux. Ou je vous lance une question. »"
      </ReadAloud>

      <ActionBox title="La traversée en trois étapes (Épreuve à 3 jets)">
        <p className="mb-4">Le héros doit réussir <strong>2 des 3 étapes</strong> pour arriver sur l'autre rive sans encombre. S'il choisit la barque réparée, il a +2 à tous les jets.</p>

        <h4 className="font-bold text-lg mb-2">Étape 1 : les nénuphars glissants (Test de COURAGE - DD 12)</h4>
        <p className="mb-4"><strong>Échec :</strong> le héros glisse, tombe à l'eau (−1 PV) et perd un objet léger (au choix du MJ : un grappin, une cuillère, un croissant).</p>

        <h4 className="font-bold text-lg mb-2">Étape 2 : la carpe dorée (Test de CHARME - DD 13)</h4>
        <p className="mb-4">La carpe pose une devinette : <em>« Je tombe sans me faire mal. Je fais le tour du monde sans bouger. Je ne suis pas un oiseau, mais j'ai des ailes. Qui suis-je ? »</em> <strong>Réponse :</strong> la pluie... ou le vent, ou la feuille d'automne (accepte toute réponse poétique). <strong>Échec :</strong> elle éclabousse le héros et rit.</p>

        <h4 className="font-bold text-lg mb-2">Étape 3 : le courant fort (Test de MALICE ou COURAGE - DD 12)</h4>
        <p className="mb-4">Un tourbillon entraîne la barque ou le héros. Il faut trouver la bonne direction, ou utiliser le grappin pour s'accrocher à une souche. <strong>Échec :</strong> il perd du temps, le soleil monte dans le ciel (le temps passe).</p>

        <p><strong>Résultat :</strong> si le héros réussit 2 étapes ou plus, il arrive sur l'autre rive trempé mais content. Sinon, il arrive aussi, mais mouillé, fatigué (−2 PV) et avec une botte en moins. Dans tous les cas, <strong>gagne un point de Panache</strong> s'il a fait rire quelqu'un pendant la traversée.</p>
      </ActionBox>

      <h3 className="font-display text-2xl font-bold text-slate-700 mt-8 mb-4">SCÈNE 5 : MADAME TORTUE, LA FACTRICE (Rencontre et Quête annexe)</h3>
      <ReadAloud title="Texte à lire à voix haute">
        "Sur l'autre rive, assise sur une pierre plate, une vieille tortue en casquette de postière trie des lettres en soupirant. « Quatre-vingt-dix-neuf lettres à distribuer, et je n'ai fait que trois mètres depuis hier. » Elle te voit, relève ses lunettes. « Toi, tu as l'air pressé. Moi, jamais. Un détective ? Parfait. Il y a un colis pour le Marché aux Menteurs, pour un certain Moustache. Je te donne trois écus si tu le portes à ma place. » Elle te tend un petit paquet, très lourd, qui sent fort le poisson."
      </ReadAloud>

      <ActionBox title="L'Arbre de Dialogue et les Résolutions">
        <h4 className="font-bold text-lg mb-2">Option A : Accepter le colis (aucun jet)</h4>
        <p className="mb-6">Le héros gagne 3 écus et un lien avec Moustache le poissonnier (chapitre 4) : <strong>+2 au premier jet de CHARME avec lui</strong>. Le colis contient un énorme poisson en plastique, cadeau d'anniversaire (il rit quand on le chatouille).</p>

        <h4 className="font-bold text-lg mb-2">Option B : Demander des nouvelles du Marché (Test de CHARME - DD 11)</h4>
        <p className="mb-6"><strong>Réussite :</strong> Madame Tortue murmure : « Cette semaine, un monsieur très sérieux a commandé cent faux témoignages au marché. Il a payé en pièces grises. » (Écho de l'indice des brigands.) <strong>Échec :</strong> elle parle de sa nièce pendant dix minutes.</p>

        <h4 className="font-bold text-lg mb-2">Option C : La faire rire (Roleplay)</h4>
        <p>Si le héros lui raconte une blague, elle rit si fort que sa casquette s'envole. En remerciement, elle lui offre une <strong>Lettre à Entrée Libre</strong> : un laissez-passer qui permet d'entrer dans n'importe quel bâtiment postal (utile au chapitre 7). <strong>Gagne un point de Panache.</strong></p>
      </ActionBox>

      <ReadAloud title="Texte à lire à voix haute (fin du chapitre)">
        "Au loin, sur la colline, tu aperçois les toits colorés du Marché aux Menteurs et le drapeau en forme de poisson qui flotte au-dessus. Derrière toi, les canards reprennent leur piquet de grève en chantant. Gaston, trempée, ébouriffée, secoue ses plumes : « Je tiens à préciser que je n'ai participé à aucune de ces humiliations. » Elle te regarde du coin de l'œil. « Mais le sandwich de la tortue... il avait l'air délicieux. »"
      </ReadAloud>

      <InfoBox title="Note pour le MJ : le temps qui passe">
        <p>Depuis le début de l'enquête, <strong>un tiers de la journée</strong> s'est écoulé. Si tu veux ajouter de la pression, annonce l'heure à voix haute (« il est dix heures, le banquet est à vingt heures ») et note-la. Ce n'est pas obligatoire : ne l'utilise que si l'enfant aime la tension.</p>
      </InfoBox>
    </section>
  );
}
