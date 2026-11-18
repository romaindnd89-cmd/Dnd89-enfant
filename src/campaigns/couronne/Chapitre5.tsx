import React from 'react';
import { ReadAloud, CombatBox, ActionBox, InfoBox } from '../../components/StoryBlocks';

export default function Chapitre5() {
  return (
    <section id="chap5">
      <h2 className="font-display text-4xl font-bold text-violet-700 mb-6 border-b-4 border-violet-200 pb-2 mt-16">
        CHAPITRE 5 : LES CACHOTS ET LA GRANDE SURPRISE
      </h2>
      <p className="text-slate-500 font-medium mb-8">Niveau recommandé : 3<br/>Lieu : Les cachots du château du Baron Cornichon<br/>Ambiance : Humour de cellule et émotion : le héros est au plus bas, puis tout se retourne. C'est le rebondissement central.</p>

      <InfoBox title="Synopsis du Chapitre pour le Maître du Jeu">
        <p>Le héros est dans une cellule, avec deux prisonniers farfelus. Le Baron vient l'interroger : <strong>il n'est pas le voleur</strong>. Il a lui-même été accusé par une lettre anonyme, et il a tendu un piège pour attraper le vrai coupable. Il montre une <strong>lettre signée « G. »</strong>, avec une tache d'encre violette. Le héros comprend <strong>que le Chancelier Gribouille, qui lui a confié l'enquête, est le vrai voleur</strong>. Il faut s'évader, avec ou sans le Baron, avant le Grand Banquet (dans quelques heures).</p>
      </InfoBox>

      <h3 className="font-display text-2xl font-bold text-slate-700 mt-8 mb-4">SCÈNE 1 : LA CELLULE (Exploration et Roleplay)</h3>
      <ReadAloud title="Texte à lire à voix haute">
        "Il fait noir, froid et ça sent le chou. Au fond de la cellule, deux silhouettes te regardent. « Un nouveau ! » dit une voix grinçante. Une lueur apparaît : un petit homme tout ridé, au visage couvert de moisissure verte, allume une bougie sur sa propre barbe. « Je suis Monsieur Moisi, voleur retraité. Depuis trente ans ici, je connais tous les murs. » À côté de lui, un énorme troll en tablier, la tête dans les mains, pleure doucement. « Je m'appelle Boudin. Je suis le cuisinier. J'ai brûlé la tarte du Baron. »"<br/><br/>
        "Tu regardes autour de toi : la porte de fer est solide, un petit soupirail laisse passer la lumière de la lune, et dans un coin, des ossements de poulet forment un dessin bizarre. Une pierre du mur semble branler un peu. Que fais-tu ?"
      </ReadAloud>

      <InfoBox title="Profil des prisonniers">
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Monsieur Moisi :</strong> très vieux voleur, toujours à moitié endormi. Il connaît le plan des cachots par cœur, mais se perd à chaque phrase. Il parle en parenthèses.</li>
          <li><strong>Boudin le troll cuisinier :</strong> immense, sensible, fond en larmes à tout propos. Il peut forcer la porte, mais seulement s'il se sent aimé.</li>
        </ul>
      </InfoBox>

      <ActionBox title="Options d'Exploration et Mécaniques (Bac à sable)">
        <h4 className="font-bold text-lg mb-2">1. Parler à Monsieur Moisi (Test de CHARME - DD 12)</h4>
        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li><strong>Réussite :</strong> il donne l'itinéraire : « Il y a un passage derrière la pierre branlante, qui mène aux cuisines. De là, l'escalier central. (Moi, je ne le prends plus, mes genoux...). »</li>
          <li><strong>Échec :</strong> il se perd dans son histoire et s'endort.</li>
        </ul>

        <h4 className="font-bold text-lg mb-2">2. Consoler Boudin (Test de CHARME - DD 11)</h4>
        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li><strong>Réussite :</strong> Boudin sèche ses larmes, et se propose de défoncer la porte quand le héros sera prêt. Il devient un allié pour le prochain combat (+2 aux attaques du héros ce soir-là).</li>
          <li><strong>Échec :</strong> il pleure encore plus fort, mais le héros gagne un point de Panache pour sa gentillesse.</li>
        </ul>

        <h4 className="font-bold text-lg mb-2">3. Fouiller la cellule (Test de MALICE - DD 13)</h4>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Réussite : Loot : un Crochet de serrurier</strong> caché dans les ossements, qui donne +3 pour crocheter la porte.</li>
          <li><strong>Échec :</strong> il ne trouve que des os de poulet. (Il gagne l'envie de manger du poulet.)</li>
        </ul>
      </ActionBox>

      <h3 className="font-display text-2xl font-bold text-slate-700 mt-8 mb-4">SCÈNE 2 : LE BARON TOMBE DES NUES (Rencontre et Rebondissement)</h3>
      <ReadAloud title="Texte à lire à voix haute">
        "La porte s'ouvre dans un grincement. Le Baron Cornichon entre, tout seul, sans garde, sa cape violette repliée sur le bras. Il s'assoit sur un tabouret en face de toi, soupire, et sort de sa poche un papier froissé. « Détective. Je dois vous avouer quelque chose : je me suis trompé. Votre oie m'a livré le détective du Chancelier, et j'ai cru tenir le voleur. Mais en vous regardant... vous ne ressemblez pas à un voleur. Vous ressemblez à quelqu'un qui a été manipulé. Comme moi. »"<br/><br/>
        "Il te tend le papier. C'est une lettre, écrite d'une main soignée : « Baron Cornichon, le roi vous soupçonne de vouloir la Couronne. Pour vous défendre, préparez un piège dans votre château. Un voleur viendra. Signé : G. » Au bas du papier, une petite tache d'encre violette. Tu reconnais la tache. Tu reconnais l'écriture. Tu regardes le Baron, qui hoche la tête. « C'est la même que celle de la lettre que j'ai reçue le lendemain du vol. Gribouille. Le Chancelier. Il nous a manipulés, vous et moi. »"
      </ReadAloud>

      <InfoBox title="Le rebondissement : ce que le héros apprend">
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Le Baron est innocent.</strong> Il a reçu une lettre anonyme lui conseillant de piéger « le voleur », et croit que le héros est ce voleur. En réalité, il a été manipulé par le Chancelier, pour qu'il soit accusé le soir du banquet.</li>
          <li><strong>Le Chancelier Gribouille est le vrai voleur.</strong> Il a volé la Couronne, puis l'a cachée. Il a envoyé le héros enquêter sur le Baron pour qu'il apporte les « preuves » au roi, juste à temps pour le banquet.</li>
          <li><strong>Pourquoi ?</strong> Le Chancelier déteste les blagues. S'il met la main sur la Couronne en public, il pourra l'utiliser pour interdire le rire dans le royaume, et régner sur un pays sérieux. Il compte la mettre sur sa propre tête lors du Grand Banquet.</li>
          <li><strong>Relie les 4 indices :</strong> si le héros en a trouvé 2 ou 3, il réalise tout seul. Sinon, le Baron les énumère. Dans les deux cas, <strong>gagne un point de Panache</strong> si le héros devine tout seul avant le Baron.</li>
        </ul>
      </InfoBox>

      <ActionBox title="L'Arbre de Dialogue et les Résolutions">
        <h4 className="font-bold text-lg mb-2">Option A : Faire confiance au Baron (Test de CHARME - DD 13)</h4>
        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li><strong>Réussite :</strong> le Baron libère le héros, lui rend son sac, et propose de l'accompagner. Il devient un <strong>allié</strong> pour le chapitre 6 (il apporte la fausse couronne et une cape de rechange).</li>
          <li><strong>Échec :</strong> il hésite : « Je dois être certain. » Il libère le héros, mais ne l'accompagne qu'à distance, et fait surveiller la sortie.</li>
        </ul>

        <h4 className="font-bold text-lg mb-2">Option B : S'évader sans lui (Test de MALICE - DD 14, +3 avec le crochet)</h4>
        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li><strong>Réussite :</strong> la serrure cède. Monsieur Moisi guide le héros dans les tunnels.</li>
          <li><strong>Échec :</strong> la serrure se bloque, et un garde arrive. Combat possible (voir plus bas).</li>
        </ul>

        <h4 className="font-bold text-lg mb-2">Option C : Poser une question sur Gaston (Roleplay)</h4>
        <p>Le Baron avoue : « Votre oie était très fière de vous. Elle n'a pas arrêté de dire que vous étiez le meilleur détective de sa carrière. Elle m'a dit : "Faites attention, il est trop gentil pour votre prison." Puis elle a pleuré dans un mouchoir en soie. » Il soupire : « Elle a refusé le maïs, finalement. Elle l'a jeté dans les douves. Mais trop tard. »</p>
      </ActionBox>

      <h3 className="font-display text-2xl font-bold text-slate-700 mt-8 mb-4">SCÈNE 3 : L'ÉVASION (Combat)</h3>
      <ReadAloud title="Texte à lire à voix haute">
        "Vous remontez l'escalier des cuisines, le Baron et son sac de rechange en tête, Boudin qui ferme la marche en essuyant ses larmes. Au sommet, devant la grande porte, un homme énorme, cuirassé jusqu'aux oreilles, surgit : le Garde-Chef Pâté, flanqué de deux soldats. « Halte ! Le Baron, je vous arrête... Euh... vous êtes le Baron. Mince. Qu'est-ce que je dis ? » Il consulte un petit carnet. « Ah oui : vous êtes tous arrêtés ! »"
      </ReadAloud>

      <CombatBox title="Mécaniques de Combat (Garde-Chef Pâté et deux soldats)">
        <h4 className="font-bold text-lg mb-2">Les Ennemis : Garde-Chef Pâté et 2 Soldats</h4>
        <ul className="list-disc pl-5 space-y-1 mb-6">
          <li><strong>Garde-Chef Pâté :</strong> 14 PV, CA 14. Attaque à +4, 1D8 de dégâts. Il lit son carnet un tour sur deux et rate alors son attaque.</li>
          <li><strong>Soldats (× 2) :</strong> 8 PV chacun, CA 12. Attaque à +2, 1D6 de dégâts.</li>
        </ul>

        <h4 className="font-bold text-lg mb-2">Tactique et Environnement (Le rôle du MJ) :</h4>
        <ul className="list-disc pl-5 space-y-3 mb-4">
          <li><strong>Option A - Attaque classique :</strong> D20 + COURAGE (+2), 1D6 +1. Contre le Garde-Chef, c'est plus dur.</li>
          <li><strong>Option B - Boudin (si le héros l'a consolé) :</strong> il soulève un soldat et le jette contre la porte (le soldat est hors-jeu). Une fois par combat.</li>
          <li><strong>Option C - Le carnet (MALICE - DD 13) :</strong> le héros fait tomber le carnet de Pâté dans la marmite : le garde-chef passe un tour à le chercher.</li>
          <li><strong>Option D - Le Baron (si allié) :</strong> il attaque à +3, 1D6 de dégâts, et lance parfois une blague qui déstabilise un soldat.</li>
          <li><strong>Option E - Baratin (CHARME - DD 14) :</strong> le héros persuade les soldats qu'une fête a lieu dans la cave. Ils partent en courant, laissant le garde-chef seul.</li>
        </ul>
        <p className="italic">Après le combat, une trappe donne sur un tunnel qui débouche, à l'aube, sur la route du palais.</p>
      </CombatBox>

      <ReadAloud title="Texte à lire à voix haute (la sortie)">
        "Vous émergez dans l'herbe humide, juste avant l'aube. Au loin, la silhouette du palais de Pétaouchnok brille sous la lune. Les cloches du banquet commencent à sonner. Le Baron te serre la main. « Je me rappellerai de ce jour. Allons démasquer ce vilain. » Le ciel rosit, et au même moment, très haut, tu entends un cri : « COUAC ! » Une grande tache blanche descend du ciel en piquet. C'est une oie, un peu essoufflée, avec un chapeau de travers."
      </ReadAloud>

      <InfoBox title="Récompenses et Note pour le MJ">
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Loot :</strong> le héros récupère son sac à gadgets, <strong>une Fausse Couronne</strong> (si le Baron est allié) et peut dépenser 1 Panache pour une dernière potion.</li>
          <li><strong>Panache :</strong> donne un point au héros pour la gentillesse envers Boudin ou Moisi, et un autre s'il a deviné tout seul le coupable.</li>
          <li><strong>Gaston revient (fin de chapitre).</strong> Joue-le avec émotion : il est essoufflé, honteux, et n'ose pas se poser. C'est le héros qui décide de ce qu'il lui répond (voir chapitre 6).</li>
        </ul>
      </InfoBox>
    </section>
  );
}
