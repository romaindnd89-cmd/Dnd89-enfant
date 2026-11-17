import React from 'react';
import { ReadAloud, CombatBox, ActionBox, InfoBox } from '../../components/StoryBlocks';
import { Chapter } from '../../components/CampaignLayout';
import { AmbianceBox, VictoryBox, SideQuestBox } from '../../components/StoryExtras';

export default function Part4() {
  return (
    <div className="space-y-12">
      {/* ============================================================ */}
      {/* CHAPITRE 9 */}
      {/* ============================================================ */}
      <section>
        <Chapter id="chap9" emoji="🌑" title="CHAPITRE 9 : GRISAILLE, LA TAUPE-SORCIÈRE" />
        <p className="text-slate-500 font-medium mb-8 italic">
          Lieu : la salle du trône, au cœur du terrier.<br/>
          Ambiance : le climax émotionnel de toute l'aventure. Prenez votre temps, baissez la voix, laissez le silence faire son travail.<br/>
          Durée de jeu conseillée : 20 à 30 minutes. C'est le chapitre le plus important de toute l'histoire.
        </p>

        <h3 className="font-display text-2xl font-bold text-slate-700 mt-8 mb-4">
          Scène d'ouverture : la salle du trône de racines
        </h3>

        <ReadAloud title="La narration à voix haute :">
          "Grisaille est une vieille taupe toute ronde, enveloppée dans une cape de brume qui semble faite du même gris que tout ce qu'elle a volé à la forêt. De grosses lunettes rondes, bien trop grandes pour son petit museau, glissent sans cesse sur son nez. Quand elle te voit enfin bien en face, elle se redresse d'un coup sur son trône, et autour d'elle, de fines racines sombres se dressent comme des tentacules menaçants, prêtes à réagir au moindre geste brusque.<br/><br/>
          « Encore un qui vient me prendre quelque chose ! » grince-t-elle d'une voix qui se veut dure, mais qui tremble légèrement sur la fin. « Vas-y, prends-le, ce Gland, si tu y tiens tant que ça ! De toute façon, personne ne se souvient jamais de moi, alors pourquoi est-ce que je me donnerais la peine de le garder ? »<br/><br/>
          Sa voix se brise un peu plus à chaque mot, et tu sens, derrière cette colère de façade, une tristesse immense, presque palpable, comme un brouillard bien plus épais que toute la brume qu'elle a répandue sur la forêt. Les racines d'ombre s'approchent lentement de toi, hésitantes, presque comme si elles-mêmes n'étaient pas vraiment convaincues de ce qu'elles font. Grisaille, elle, a les yeux pleins de larmes grises qui n'arrivent même pas à couler."
        </ReadAloud>

        <InfoBox title="Profil de Grisaille, la taupe-sorcière">
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Apparence :</strong> une vieille taupe toute ronde, grosses lunettes qu'elle remonte sans cesse d'un geste nerveux.</li>
            <li><strong>Sous la colère de façade :</strong> immensément seule depuis toujours. Pas cruelle par nature — elle s'est juste convaincue que, puisque personne ne se souvient d'elle, autant que plus personne ne se souvienne de rien.</li>
            <li><strong>Ce qui peut l'atteindre :</strong> demander son nom avec sincérité, lui chanter la Chanson de Grisefeuille, lui offrir quelque chose, s'asseoir à sa table devant la deuxième tasse, ou lui souhaiter un joyeux anniversaire en retard.</li>
          </ul>
        </InfoBox>

        <AmbianceBox title="Comment jouer Grisaille">
          <ul className="list-disc pl-5 space-y-2">
            <li>Commencez par une grosse voix qui se veut intimidante, qui parle fort pour masquer la peur. Dès que quelqu'un se montre gentil avec elle, laissez la voix devenir toute petite et hésitante, presque enfantine.</li>
            <li><strong>Si l'enfant hésite sur quoi faire :</strong> Lumi peut chuchoter doucement à l'oreille du héros : « Regarde bien ses yeux, derrière ses lunettes... tu crois vraiment qu'elle est en colère ? Ou plutôt qu'elle a très, très peur ? »</li>
          </ul>
        </AmbianceBox>

        <h3 className="font-display text-2xl font-bold text-slate-700 mt-10 mb-4">
          Le vrai chemin de l'aventure : offrir son amitié à Grisaille
        </h3>
        <ActionBox title="Les gestes qui peuvent tout changer (l'enfant peut en tenter plusieurs)">
          <p className="mb-3">C'est ici que se révèle tout le secret de l'histoire. Le héros n'a nul besoin de se battre : il doit simplement montrer à Grisaille qu'on peut se souvenir d'elle, pour de vrai, sans qu'elle ait besoin de jeter le moindre sortilège pour qu'on la remarque. Encouragez vivement l'enfant à trouver, par lui-même, un geste gentil parmi ceux qui suivent — ou à en inventer un autre tout seul, encore mieux.</p>
          <ul className="list-disc pl-5 space-y-3">
            <li><strong>Lui parler doucement et lui demander son nom</strong> comme si c'était la chose la plus naturelle du monde : <em>1D20 + Cœur (+5), réussite à 10.</em></li>
            <li><strong>Lui offrir un objet trouvé en chemin :</strong> l'écharpe rouge de Mémé, une noisette grillée, le caillou-cœur des Mottes Grises, ou même le Gland du Rire pour tenter de la faire sourire une seule fois. Aucun jet n'est nécessaire si l'enfant propose sincèrement ce geste.</li>
            <li><strong>Lui chanter la Chanson de Grisefeuille</strong> apprise dans la Grotte aux Échos, en entier, même un peu faux : réussite automatique, c'est le geste le plus fort de tous.</li>
            <li><strong>S'asseoir à sa table</strong>, devant la deuxième tasse poussiéreuse remarquée au chapitre précédent, et lui proposer de la remplir enfin : <em>1D20 + Cœur (+5), réussite à 8</em> (très facile exprès, car c'est un geste immense).</li>
            <li><strong>Lui souhaiter un bon anniversaire en retard</strong>, si l'enfant a lu le journal de Grisaille chez Monsieur Lombric : <strong>réussite automatique garantie</strong>, quel que soit l'état de la situation à ce moment-là.</li>
          </ul>
        </ActionBox>

        <VictoryBox title="Quand Grisaille devient une amie (à lire lentement, à voix haute)">
          <p className="italic mb-3">"Dès que Grisaille comprend, pour de bon, qu'on veut vraiment être son ami — et pas seulement lui reprendre quelque chose — un frisson la traverse tout entière. Les racines d'ombre qui dressaient leurs pointes autour d'elle se changent lentement en lierre fleuri, tige après tige, comme si elles n'avaient jamais voulu faire de mal. Le Gland de l'Amitié, entre ses pattes, s'illumine tout seul d'une lumière chaude et dorée, et la brume grise tout autour se dissipe en quelques secondes, comme un mauvais rêve dont on vient enfin de se réveiller.<br/><br/>
          « Mon... mon nom, » murmure-t-elle, la voix tremblante, en essuyant ses lunettes embuées du dos de sa patte. « C'est Grisaille. Et toi, petit renard... tu es le tout premier, depuis tellement, tellement longtemps, à me le demander pour de vrai. » Elle te tend le <strong>Gland de l'Amitié</strong>, avec des gestes presque maladroits, comme si elle n'avait plus l'habitude de donner quoi que ce soit sans y être forcée."</p>
          <p><strong>Récompenses :</strong> le <strong>Gland de l'Amitié</strong> (3 sur 3 !). Une nouvelle amie, aussi : Grisaille rejoint le groupe pour le dénouement de l'aventure, et connaît justement un tunnel secret qui mène directement au pied du Grand Chêne — un raccourci précieux pour la course du chapitre 10.</p>
        </VictoryBox>

        <CombatBox title="Si l'enfant choisit quand même de se battre (c'est permis)">
          <p className="mb-3">Certains enfants préféreront tester leurs talents de combattant malgré tout, et c'est tout à fait permis — faites simplement en sorte que la bagarre mène, elle aussi, finalement, vers la compréhension : les racines défendent avant tout une taupe qui pleure en silence derrière elles.</p>
          <p className="font-bold mb-2">Les Racines d'Ombre (protègent Grisaille, pas un vrai monstre)</p>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>PV :</strong> 18 au total (réparties sur plusieurs racines qui attaquent chacune leur tour). <strong>Difficulté pour les toucher :</strong> 12.</li>
            <li><strong>Attaque — fouet de racine :</strong> 1D6. Elles cherchent clairement à repousser et à impressionner, jamais vraiment à blesser gravement.</li>
            <li><strong>Point faible — la lumière des Glands déjà obtenus :</strong> chaque Gland d'Or déjà en possession du héros, brandi bien haut, inflige <strong>-4 PV</strong> automatiques aux racines et calme visiblement Grisaille d'un cran, l'air un peu plus triste et un peu moins en colère à chaque fois.</li>
            <li><strong>Fin inévitable et prévue :</strong> quand les racines finissent par tomber toutes ensemble, Grisaille s'effondre en pleurant pour de bon sur son trône, sans plus aucune force de résistance — et l'histoire revient naturellement au vrai chemin : celui de l'amitié, décrit juste au-dessus.</li>
          </ul>
        </CombatBox>

        <InfoBox title="Le cœur de l'histoire — à ne pas manquer de dire à l'enfant">
          <p>Quelle que soit la méthode choisie pour y arriver, la leçon finale reste exactement la même, et elle mérite d'être dite à voix haute, simplement, sans trop insister non plus : <strong>personne ne mérite jamais d'être complètement oublié.</strong> Grisaille devient une véritable amie et accompagne le groupe pour la toute dernière ligne droite de l'aventure.</p>
        </InfoBox>
      </section>

      {/* ============================================================ */}
      {/* CHAPITRE 10 */}
      {/* ============================================================ */}
      <section>
        <Chapter id="chap10" emoji="🌳" title="CHAPITRE 10 : LE RÉVEIL DU GRAND CHÊNE" />
        <p className="text-slate-500 font-medium mb-8 italic">
          Lieu : la grande clairière du Grand Chêne-Mémoire, au cœur de la forêt.<br/>
          Ambiance : une course joyeuse et un peu tendue contre la première neige, qui se termine en vraie fête.<br/>
          Durée de jeu conseillée : 20 à 30 minutes. C'est le dernier chapitre avant l'épilogue : mettez-y toute l'énergie qu'il mérite.
        </p>

        <h3 className="font-display text-2xl font-bold text-slate-700 mt-8 mb-4">
          Scène d'ouverture : la course contre les premiers flocons
        </h3>

        <ReadAloud title="La narration à voix haute :">
          "Tu jaillis hors du terrier dans un grand bond, les trois Glands d'Or serrés précieusement contre toi, Lumi en éclaireuse juste devant ton museau, Piquillon roulé en boule bien calé sur ton dos, et Grisaille qui trottine courageusement sur tes talons malgré ses petites pattes de taupe peu habituées à la course en plein air. La forêt est encore grise tout autour de vous, et de gros flocons blancs tombent de plus en plus vite, de plus en plus serrés.<br/><br/>
          Devant toi se dresse enfin le Grand Chêne, immense, majestueux, endormi depuis cette fameuse nuit où tout a basculé. Ses branches nues, sans la moindre feuille, se tendent vers le ciel comme pour implorer de l'aide. À ses pieds, entre ses plus grosses racines, trois petits creux parfaitement ronds attendent patiemment leurs trois Glands d'Or depuis des siècles, peut-être même depuis la toute première fois que la forêt a eu besoin de se souvenir de quelque chose."
        </ReadAloud>

        <AmbianceBox title="Comment jouer cette course">
          <p>Accélérez clairement le rythme de votre voix ! Phrases courtes, ton pressé. Comptez les flocons à voix haute pour accentuer la tension (« La neige arrive déjà aux chevilles… maintenant aux genoux… »). Puis, une fois le troisième Gland enfin planté, marquez un grand silence, et reprenez votre lecture très, très lentement pour le moment final.</p>
        </AmbianceBox>

        <ActionBox title="La course contre la neige : trois obstacles à franchir vite">
          <p className="mb-3">Avant d'atteindre le pied du Grand Chêne, trois obstacles se dressent sur le chemin. Un échec ne bloque jamais la course : un ami aide aussitôt, mais la neige, elle, continue de monter inexorablement d'un cran, ce qui ajoute un peu de tension sans jamais créer de vrai danger.</p>
          <ul className="list-disc pl-5 space-y-3">
            <li><strong>Le tronc couché</strong> en travers du sentier, renversé par une récente tempête : sauter par-dessus d'un bond franc. <em>1D20 + Agilité (+4), réussite à 10.</em> En cas d'échec, Piquillon roule habilement dessous et montre un passage dérobé juste à temps.</li>
            <li><strong>La congère</strong>, un mur de neige grise déjà formé en travers du passage : foncer dedans de toutes ses forces. <em>1D20 + Courage (+3), réussite à 10.</em> En cas d'échec, Grisaille, dont on redécouvre à cette occasion les talents de taupe, creuse un tunnel en deux coups de pattes bien exercées.</li>
            <li><strong>Lumi a froid</strong> et sa petite lumière commence sérieusement à faiblir dans l'air glacé : la réchauffer contre son cœur, ou lui chanter un bout de la Chanson de Grisefeuille pour la réconforter. <em>1D20 + Cœur (+5), réussite à 8.</em> En cas d'échec, c'est la chaleur de la Feuille d'Or elle-même qui vient la réchauffer à la place.</li>
          </ul>
        </ActionBox>

        <SideQuestBox title="Le retour inattendu des Corbeaux de Suie">
          <p className="italic mb-3">"Trois ombres noires familières tournent soudain au-dessus de vous dans le ciel chargé de neige. Suie, Charbon et le gros Cendrar viennent se poser maladroitement sur une branche basse, la tête penchée, visiblement bien moins fiers qu'au chapitre 2. « Euh... CROÂ. La patronne ne nous donne plus aucun ordre depuis un moment. Et puis on a froid. Et puis, en fait... on se souvient même plus très bien pourquoi on était censés être méchants avec toi. »"</p>
          <p className="mb-3">Le héros peut leur <strong>pardonner</strong> sans réfléchir (aucun jet nécessaire, il suffit de le décider et de le dire) ou leur demander, d'abord, de s'excuser proprement pour la clairière.</p>
          <p><strong>Récompense :</strong> touchés par cette seconde chance inespérée, les trois corbeaux soulèvent le héros par le col de son écharpe rouge et le portent en volant jusqu'au-dessus de la cime des arbres. <strong>Un des obstacles de la course est automatiquement réussi</strong> grâce à ce petit coup de pouce aérien, et l'enfant a la chance d'apercevoir, d'en haut, toute la forêt grise juste avant qu'elle ne commence à retrouver ses couleurs.</p>
        </SideQuestBox>

        <h3 className="font-display text-2xl font-bold text-slate-700 mt-10 mb-4">
          L'arrivée au pied du Grand Chêne
        </h3>
        <ReadAloud title="La narration à voix haute :">
          "Essoufflés, les flocons plein la fourrure, vous arrivez enfin tous ensemble au pied du Grand Chêne-Mémoire. Ses racines immenses, larges comme des ponts, s'enfoncent profondément dans la terre grise. Entre elles, les trois petits creux attendent, parfaitement silencieux, comme s'ils retenaient leur souffle depuis le tout début de cette aventure."
        </ReadAloud>

        <ActionBox title="La dernière épreuve : replanter les trois souvenirs">
          <p className="mb-4">Un dernier grand élan, tous ensemble. Le héros place chaque Gland d'Or dans son creux l'un après l'autre. Pour chacun, proposez un petit jet au choix de l'enfant — ou laissez carrément une réussite automatique si le groupe préfère simplement savourer pleinement ce moment sans jet de dé :</p>
          <ul className="list-disc pl-5 space-y-2 mb-4">
            <li><strong>Le Gland du Rire</strong> en premier : le Grand Chêne frémit tout entier, et un rire d'enfant résonne soudain dans toute la forêt, comme si mille échos s'étaient réveillés d'un coup.</li>
            <li><strong>Le Gland de la Chanson</strong> ensuite : les oiseaux, qui s'étaient tus depuis le tout premier chapitre, se remettent d'un coup à chanter, tous en même temps, comme un orchestre qui rattraperait le temps perdu.</li>
            <li><strong>Le Gland de l'Amitié</strong> en dernier : c'est Grisaille elle-même, les pattes tremblantes d'émotion, qui insiste pour le planter de ses propres pattes. L'arbre entier s'illumine d'un coup, de la racine jusqu'à la toute dernière branche.</li>
          </ul>
        </ActionBox>

        <VictoryBox title="LE GRAND RÉVEIL (à lire lentement, à voix haute)">
          <p className="italic">"Alors, dans un immense souffle doré qui part du tronc et se répand dans toutes les directions à la fois, <strong>les couleurs reviennent</strong>. Le rouge, l'orange, le jaune éclaboussent la forêt comme un feu d'artifice silencieux et magnifique. La neige qui continuait de tomber devient brillante et presque joyeuse, comme de minuscules confettis blancs sur fond de couleurs retrouvées. Tous les animaux de la forêt se réveillent d'un coup, les uns après les autres, et se souviennent, enfin, pour de bon.<br/><br/>
          Mémé Rouquine arrive en courant, sans même reprendre son souffle, et crie ton nom — ton vrai nom, net et clair, pas un simple « petit » hésitant. Elle te serre dans ses pattes comme si elle avait eu peur de ne jamais plus pouvoir le faire. Vous avez sauvé Grisefeuille, tous ensemble !"</p>
        </VictoryBox>

        <div className="mt-8 p-6 bg-amber-50 border-2 border-amber-200 rounded-2xl">
          <h3 className="font-display text-xl font-bold text-amber-800 mb-3 flex items-center gap-2">
            <span className="text-2xl">🎉</span> VICTOIRE !
          </h3>
          <p className="italic text-amber-900">
            "Ce soir-là, une grande fête s'improvise spontanément au pied du Grand Chêne. On allume de petites lanternes accrochées dans les branches, désormais toutes dorées par les couleurs de l'automne retrouvé. Grisaille, assise timidement entre deux jeunes écureuils qui ne la lâchent plus d'une semelle, apprend peu à peu à rire pour de bon, sans retenue. Piquillon enchaîne les galipettes devant un public conquis d'avance. Les Corbeaux de Suie, invités malgré tout, chipent discrètement quelques gâteaux sur le buffet sans que personne ne leur en veuille vraiment.<br/><br/>
            Et toi, petit renard, tu t'endors enfin, heureux et épuisé, ta feuille d'or bien calée contre ton cœur — en sachant, avec une certitude toute neuve, que grâce à toi, la forêt n'oubliera plus jamais, au grand jamais, ceux qu'elle aime."
          </p>
        </div>
      </section>
    </div>
  );
}
