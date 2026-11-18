import React from 'react';
import { ReadAloud, CombatBox, ActionBox, InfoBox, FirstRound } from '../../components/StoryBlocks';

export default function Chapitre3() {
  return (
    <section id="chap3">
      <h2 className="font-display text-4xl font-bold text-emerald-700 mb-6 border-b-4 border-emerald-200 pb-2 mt-16">
        CHAPITRE 3 : LE CHEMIN DU MARAIS
      </h2>
      <p className="text-slate-500 font-medium mb-8">Niveau recommandé : 2<br/>Lieu : La nuit, le long du Marais de Brume, jusqu'au camp des gobelins<br/>Ambiance : Froide, brumeuse, tendue. Un premier vrai combat, puis une confession qui change tout.</p>

      <InfoBox title="Synopsis du Chapitre pour le Maître du Jeu">
        <p className="mb-2">Pip avoue : elle donne de l'huile aux gobelins en cachette, parce que leurs bébés grelottent de fièvre et que personne au village ne les a aidés. Elle guide le héros à travers le Marais. En chemin, des <strong>Lutins de Brume</strong> (ombres à lanterne trompeuse) tentent de les égarer, puis des <strong>Gobelins éclaireurs</strong> les attaquent par peur. Le héros peut se battre, ou calmer la situation. <strong>Indices à collecter : 9 et 10.</strong></p>
        <p><strong>Secret à garder :</strong> les gobelins ne volent que 4 tonneaux, c'est tout. Ils ne sont pas responsables des lanternes qui s'éteignent. Mais ils ont vu quelqu'un descendre au Puits chaque nuit : « une silhouette avec une lanterne qui tremble ». <strong>À retenir :</strong> (1) les gobelins sont innocents du plus grave ; (2) un témoin a vu une silhouette.</p>
      </InfoBox>

      <h3 className="font-display text-2xl font-bold text-slate-700 mt-8 mb-4">SCÈNE 1 : LA CONFESSION DE PIP (Roleplay)</h3>
      <ReadAloud title="Texte à lire à voix haute">
        "Pip te prend par la manche et t'entraîne à l'écart, derrière le mur de la Tour, là où la neige est encore vierge. Elle tremble, et ce n'est pas seulement de froid. « J'ai menti, » dit-elle d'une toute petite voix. « Je n'ai pas volé l'huile pour moi. Je... je l'ai donnée. Il y a un mois, en rentrant d'une tournée, j'ai entendu pleurer dans le Marais. C'étaient des bébés gobelins, malades, tout bleus de froid. Leurs parents n'ont ni bois, ni huile, ni couvertures. J'ai frappé à toutes les portes du village pour demander de l'aide. Personne n'a ouvert. Alors j'ai pris un peu d'huile, un petit peu, au début. Puis plus. Les empreintes dans la cave, c'est eux, ils sont venus en chercher quand j'ai eu trop peur de leur en apporter. Et la moufle... »<br/>Elle sort de sa poche une deuxième moufle rouge, identique à celle que tu as trouvée. « ...c'est pour le plus petit. Je l'ai tricotée de nuit. »"
      </ReadAloud>

      <ActionBox title="Comment réagir ? (Roleplay, pas de bon ou de mauvais choix)">
        <ul className="list-disc pl-5 space-y-3">
          <li><strong>La consoler (CŒUR - DD 10) :</strong> Pip pleure de soulagement. <strong>Gagne un point de Lueur</strong> pour avoir écouté avant de juger. Elle devient ta compagne fidèle (+2 à un jet de Discrétion par chapitre).</li>
          <li><strong>La gronder gentiment :</strong> « Tu aurais dû m'en parler. » Elle baisse les oreilles, mais accepte de guider quand même.</li>
          <li><strong>Refuser de la croire :</strong> Pip, vexée, part seule vers le Marais. Le héros doit la rattraper (Discrétion - DD 11) : tu peux le jouer comme une petite poursuite dans la neige.</li>
        </ul>
        <p className="mt-3"><strong>Bonne occasion de poser une question à l'enfant, sans insister :</strong> « Et toi, qu'aurais-tu fait à la place de Pip ? »</p>
      </ActionBox>

      <h3 className="font-display text-2xl font-bold text-slate-700 mt-8 mb-4">SCÈNE 2 : LES FEUX FOLLETS DE BRUME (Exploration)</h3>
      <ReadAloud title="Texte à lire à voix haute">
        "Le Marais de Brume commence là où finit le chemin. La brume est si épaisse qu'on dirait du lait, et elle étouffe tous les bruits : ta voix, tes pas, même le crépitement de ta lanterne. Des planches pourries font un chemin étroit entre deux mares noires. Un peu plus loin, trois petites lumières bleues dansent à hauteur d'épaule. « Ne les suis pas ! » souffle Pip. « Ce sont des Lutins de Brume. Ils imitent les lanternes pour t'attirer dans l'eau ! »"
      </ReadAloud>

      <ActionBox title="Options (Bac à sable)">
        <h4 className="font-bold text-lg mb-2">1. Reconnaître les vraies lumières des fausses (Test de SAVOIR - DD 12)</h4>
        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li><strong>Réussite :</strong> une vraie lanterne tremble au rythme d'une flamme ; les fausses restent parfaitement immobiles. Le héros guide Pip sur le bon chemin. <strong>Gagne un point de Lueur.</strong></li>
          <li><strong>Échec :</strong> le héros suit une fausse lumière et patauge dans la mare. Perd 2 PV et sa tisane est tiède pour de bon.</li>
        </ul>
        <h4 className="font-bold text-lg mb-2">2. Suivre les empreintes de pieds nus (Test de DISCRÉTION - DD 11)</h4>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Réussite :</strong> elles mènent droit à un petit campement caché derrière des roseaux.</li>
          <li><strong>Échec :</strong> les empreintes se brouillent dans la boue. Pip, rougissante : « Je connais un chemin. »</li>
        </ul>
      </ActionBox>

      <h3 className="font-display text-2xl font-bold text-slate-700 mt-8 mb-4">SCÈNE 3 : LES ÉCLAIREURS GOBELINS (Combat ou Parlementer)</h3>
      <ReadAloud title="Texte à lire à voix haute">
        "Un cri aigu déchire la brume. « Des gardiens ! Ils viennent nous prendre ! » Trois silhouettes vertes, minces comme des roseaux, surgissent des herbes hautes, armées de fourches en bois et de couvercles de casserole. Ils ont peur. Tu le vois à leurs mains qui tremblent, à leurs yeux grands ouverts. Mais la peur rend dangereux, et la fourche de devant s'abat déjà sur toi."
      </ReadAloud>

      <InfoBox title="Profils des Gobelins éclaireurs">
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Apparence :</strong> maigres, vêtus de couvertures trouées, pieds nus malgré la neige.</li>
          <li><strong>Chef :</strong> Gribouille, un grand gobelin au regard fatigué, qui garde l'entrée du camp depuis trois nuits.</li>
          <li><strong>Joue-les terrifiés, pas méchants.</strong> Un enfant qui dépose son bâton les surprend toujours.</li>
        </ul>
      </InfoBox>

      <CombatBox title="Mécaniques de Combat (Les Gobelins éclaireurs)">
        <FirstRound>
          <p><strong>Ton héros attaque un Gobelin :</strong> il lance le D20 et fait <strong>10</strong>. Il ajoute +3 (Courage) : <strong>13</strong>. La CA du Gobelin est 11 : <strong>touché !</strong> Il lance le D6 : <strong>3</strong> dégâts. Le Gobelin (6 PV) en a 3 de moins.</p>
          <p><strong>Tour des Gobelins :</strong> le MJ lance un D20 pour le premier : <strong>6</strong>, +2 = 8. Il fallait 12 ou plus : <strong>raté</strong>. Le deuxième : <strong>12</strong>, +2 = 14 : <strong>touché !</strong> Le MJ lance 1D4 : <strong>2</strong>. Le héros passe de 14 à 12 PV.</p>
        </FirstRound>
        <h4 className="font-bold text-lg mb-2">Les Ennemis : 3 Gobelins éclaireurs</h4>
        <ul className="list-disc pl-5 space-y-1 mb-6">
          <li><strong>Points de Vie (PV) :</strong> 6 chacun. <strong>Classe d'Armure (CA) :</strong> 11.</li>
          <li><strong>Attaque (Fourche de roseau) :</strong> D20 +2 pour toucher (CA du héros : 12), 1D4 de dégâts.</li>
          <li><strong>Peur :</strong> si un Gobelin tombe à 2 PV ou moins, il laisse tomber sa fourche et recule en tremblant (il ne peut plus attaquer).</li>
        </ul>
        <h4 className="font-bold text-lg mb-2">Tactique et Environnement (Le rôle du MJ) :</h4>
        <ul className="list-disc pl-5 space-y-3 mb-4">
          <li><strong>Option A - Coup de Bâton-Lanterne :</strong> D20 + COURAGE (+3), 1D6 de dégâts.</li>
          <li><strong>Option B - Éclat de Lanterne (1 Lueur) :</strong> un Gobelin, ébloui, perd son tour.</li>
          <li><strong>Option C - Poser son bâton et parler (CŒUR - DD 13) :</strong> <strong>le combat s'arrête</strong>. Gribouille baisse sa fourche : « Vous... vous n'êtes pas venus nous chasser ? » Le héros gagne <strong>2 points de Lueur</strong> et un indice.</li>
          <li><strong>Option D - Pip s'interpose (si elle est là) :</strong> elle crie : « C'est moi qui vous ai envoyé l'huile ! » Les Gobelins s'arrêtent net.</li>
        </ul>
        <p className="italic">Un Gobelin vaincu ne se relève pas : il s'assoit dans la boue, la tête dans ses mains, et pleure doucement. Joue ce moment lentement : l'enfant doit voir que la peur, pas la méchanceté, guidait ces gobelins.</p>
      </CombatBox>

      <ReadAloud title="Texte à lire à voix haute (la paix)">
        "Gribouille s'agenouille et ramasse sa fourche, qu'il pose par terre, loin de lui. « Pardon. Nous avons peur de tout. Dans le village, ils disent que nous volons, que nous sommes sales, que nous apportons le mauvais sort. Alors nous nous cachons. Nous n'avons pris que quatre tonneaux, la petite souris nous les a donnés, et nous ne voulions pas plus. » Il regarde la brume derrière toi. « Mais cette nuit... je dois te dire ce que nous avons vu. »"
      </ReadAloud>

      <ActionBox title="Ce que les Gobelins racontent (Indices 9 et 10)">
        <ul className="list-disc pl-5 space-y-3">
          <li><strong>Indice 9 (automatique si on a parlé avec Gribouille) :</strong> « Chaque nuit, vers minuit, une silhouette passe sur le sentier. Elle porte une lanterne qui <strong>tremble</strong>. Elle va vers le Puits Oublié. Elle revient avant l'aube, plus <strong>lentement</strong> chaque fois. Un soir, elle s'est assise sur une pierre pour tousser pendant un long moment. »</li>
          <li><strong>Indice 10 (CŒUR - DD 11 ou SAVOIR - DD 12) :</strong> Gribouille se souvient de la forme du chapeau : « un bonnet à pompon un peu usé, et des lunettes qui brillent dans le noir. » Il hésite : « Je ne l'ai jamais vu de près. Il ne nous a jamais fait de mal. »</li>
        </ul>
        <p className="mt-3"><strong>Prends ton temps.</strong> L'enfant va peut-être déjà comprendre qui c'est. Ne le dis pas à sa place : la déduction a lieu au chapitre suivant.</p>
      </ActionBox>

      <InfoBox title="À jouer avec soin : les bébés gobelins">
        <p className="mb-2">Gribouille invite le héros au camp. Au fond d'une cabane de planches, trois petits gobelins grelottent sous une couverture. Si le héros les aide (donner une tisane, un bonnet, ou simplement leur sourire), tu peux lui donner un <strong>point de Lueur de Cœur</strong>. C'est la première fois depuis longtemps que quelqu'un leur sourit.</p>
        <p><strong>Si l'enfant demande « on peut les aider ? » :</strong> oui, mais pas tout seul : « Il faudra que tout le village comprenne. Garde cette idée pour plus tard. » C'est le fil du dernier chapitre.</p>
      </InfoBox>
    </section>
  );
}
