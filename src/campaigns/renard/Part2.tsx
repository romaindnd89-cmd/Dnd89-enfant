import React from 'react';
import { ReadAloud, CombatBox, ActionBox, InfoBox } from '../../components/StoryBlocks';
import { Chapter } from '../../components/CampaignLayout';
import { AmbianceBox, VictoryBox, SideQuestBox } from '../../components/StoryExtras';

export default function Part2() {
  return (
    <div className="space-y-12">
      {/* ============================================================ */}
      {/* CHAPITRE 4 */}
      {/* ============================================================ */}
      <section>
        <Chapter id="chap4" emoji="🐿️" title="CHAPITRE 4 : LE VILLAGE DES ÉCUREUILS" />
        <p className="text-slate-500 font-medium mb-8 italic">
          Lieu : le village suspendu dans les branches du grand hêtre.<br/>
          Ambiance : la panique joyeuse et un peu maladroite d'un village entier en plein chaos.<br/>
          Durée de jeu conseillée : 20 à 30 minutes. Chapitre d'entraide pure, sans aucun combat : l'occasion de souffler.
        </p>

        <h3 className="font-display text-2xl font-bold text-slate-700 mt-8 mb-4">
          Scène d'ouverture : un village sens dessus dessous
        </h3>
        <p className="mb-4 text-slate-700">
          En haut d'un hêtre si vieux que son tronc pourrait contenir une maison entière, les écureuils de la forêt ont bâti, au fil des générations, un vrai petit village : des maisonnettes creusées dans l'écorce, reliées par des ponts de corde tressée et des toboggans d'écorce lisse. Normalement, c'est l'endroit le plus joyeux et le plus bruyant de toute la forêt. Aujourd'hui, c'est surtout le plus bruyant.
        </p>

        <ReadAloud title="La narration à voix haute :">
          "Dès que tu poses la patte sur la première plateforme de bois, une véritable nuée d'écureuils affolés déboule de toutes les maisonnettes à la fois, en couinant si fort que tu dois reculer d'un pas. « Un visiteur ! Au secours ! On a tout oublié ! On va avoir froid ! On va avoir faim tout l'hiver ! » Les petites boules de poils grises tournent en rond, se cognent les unes dans les autres, laissent tomber des brindilles qu'elles ramassaient on ne sait pour quoi faire.<br/><br/>
          Au milieu de ce joyeux désordre, une vieille écureuil au pelage un peu plus clair que les autres tape dans ses deux petites pattes avec une autorité surprenante pour sa taille. « DU CALME ! » Le silence retombe aussitôt, interrompu seulement par quelques hoquets de panique encore mal maîtrisés. Elle se tourne vers toi, te regarde droit dans les yeux, et son regard, contrairement à celui des autres, est parfaitement net. « Toi... tes yeux brillent encore. Tu te souviens, n'est-ce pas, petit ? Alors aide-nous, et je te dirai où j'ai vu briller, hier encore, quelque chose qui ressemblait à un gros gland tout doré. »"
        </ReadAloud>

        <InfoBox title="Profil de Noisette, la cheffe du village">
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Apparence :</strong> une écureuil âgée, au pelage grisonnant mais encore vif, avec une petite cicatrice sur l'oreille gauche qu'elle porte comme une médaille.</li>
            <li><strong>Caractère :</strong> organisée, bienveillante, un rien autoritaire — le genre de grand-mère qui mène tout son monde à la baguette, mais avec le cœur sur la main.</li>
            <li><strong>Ce qu'elle a vu :</strong> juste avant que la brume ne tombe sur le village, elle a aperçu une lueur dorée disparaître dans la grande Ronceraie, au sud. Elle en est presque certaine, même si sa mémoire vacille comme celle des autres.</li>
            <li><strong>Ce qu'elle veut vraiment :</strong> sauver son village avant tout. Elle n'aidera le héros qu'une fois les siens en sécurité pour l'hiver — c'est tout le sens de ce chapitre.</li>
          </ul>
        </InfoBox>

        <h3 className="font-display text-2xl font-bold text-slate-700 mt-10 mb-4">
          Les personnages du village (pour donner vie à la foule)
        </h3>
        <AmbianceBox title="Qui peupler dans la panique générale">
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Pignon</strong>, un jeune écureuil très bavard qui pose mille questions sans attendre les réponses : « C'est vrai que tu te souviens de TOUT ? Même de ce que tu as mangé il y a trois jours ? Moi j'ai oublié mon propre nom pendant cinq minutes ce matin, c'était rigolo et horrible en même temps ! »</li>
            <li><strong>Cric, Crac et Croc</strong>, trois triplés identiques qui finissent toujours les phrases les uns des autres et ne sont jamais, mais alors jamais, d'accord sur l'emplacement exact d'une cachette de noisettes.</li>
            <li><strong>Grand-Père Chaton</strong> (un vieil écureuil qui, lui, a complètement oublié même son propre prénom et répond désormais à n'importe quel nom qu'on lui donne, avec le même enthousiasme à chaque fois).</li>
          </ul>
          <p className="mt-2">N'hésitez pas à faire parler deux ou trois de ces personnages en même temps, en vous coupant la parole à vous-même façon chœur de dessin animé — les enfants trouvent souvent ça très drôle.</p>
        </AmbianceBox>

        <h3 className="font-display text-2xl font-bold text-slate-700 mt-10 mb-4">
          La grande mission d'entraide : retrouver les provisions d'hiver
        </h3>
        <p className="mb-4 text-slate-700">
          Les écureuils ont caché leurs réserves de noisettes, glands et pommes de pin un peu partout dans et sous le village, comme chaque année. Sauf que cette année, à cause de la brume, plus personne ne se souvient de rien. Sans ces provisions, le village entier passera un hiver affamé.
        </p>

        <ActionBox title="Trois façons d'aider, à combiner ou à choisir">
          <p className="mb-4">Ce chapitre fonctionne comme une petite enquête collective : chaque méthode permet de retrouver une partie des provisions. Plus l'enfant en essaie, plus la fête finale sera belle — mais une seule suffit pour avancer dans l'histoire.</p>
          <ul className="list-disc pl-5 space-y-3 mb-4">
            <li><strong>Suivre son nez</strong> (le vrai super-pouvoir du renard) : le héros renifle méthodiquement le sol du village à la recherche de l'odeur discrète des noisettes enterrées. <em>1D20 + Flair (+5), réussite à 10.</em> En cas de réussite, il déterre d'un coup trois cachettes complètes, sous les cris de joie des petits écureuils qui le suivent comme une procession.</li>
            <li><strong>Grimper tout en haut du hêtre</strong> pour repérer, depuis la cime, les zones de terre fraîchement remuée : <em>1D20 + Agilité (+4), réussite à 10.</em> Vue imprenable garantie sur toute la forêt grise, et une bonne occasion de décrire le paysage d'en haut.</li>
            <li><strong>Consoler les bébés écureuils qui pleurent</strong> dans un coin, trop paniqués pour aider : <em>1D20 + Cœur (+5), réussite à 10.</em> Une fois calmés, l'un des petits se souvient soudain d'une cachette secrète que même les grands ignoraient.</li>
          </ul>
          <p className="italic text-slate-700">Chaque réussite peut être décrite comme une mini-scène à part : un trou dans une souche, une cachette sous une pierre plate, un creux dans une branche morte. N'hésitez pas à en inventer une ou deux de plus si l'enfant s'amuse bien à chercher.</p>
        </ActionBox>

        <VictoryBox title="Les provisions sont retrouvées ! (à lire à voix haute)">
          <p className="italic mb-3">"Une cachette, puis deux, puis dix ! À chaque trou que tu découvres, un écureuil pousse un cri de joie suraigu et fait littéralement la roue sur place, ce qui n'est pas très prudent sur une branche aussi étroite. Bientôt, tout le village forme une longue chaîne de petites pattes poilues pour faire remonter noisettes, glands et pommes de pin jusqu'aux greniers d'écorce, dans un joyeux désordre de « Attention, ça glisse ! » et de « Non, pas par là, PAR LÀ ! »<br/><br/>
          Les triplés Cric, Crac et Croc tentent de te porter en triomphe sur leurs épaules minuscules — tu es, bien sûr, beaucoup trop lourd pour eux, et tout le monde s'écroule dans un grand éclat de rire collectif. Pour la première fois depuis ce matin gris, un vrai rire résonne dans la forêt, net et chaud, comme s'il avait toujours été là, caché sous la brume."</p>
          <p><strong>Récompenses :</strong> le <strong>sifflet en gland</strong> de Noisette (un petit sifflet sculpté qu'elle porte toujours autour du cou), et un vrai goûter de fête : le héros récupère <strong>tous ses PV</strong> d'un coup, requinqué par la bonne humeur générale et quelques noisettes grillées sur le pouce.</p>
        </VictoryBox>

        <InfoBox title="Note pour le MJ — le sifflet, un allié pour bien plus tard">
          <p className="mb-2">Le <strong>sifflet en gland</strong> est un objet important pour la suite : au chapitre 8, dans le terrier de Grisaille, l'enfant pourra souffler dedans pour appeler les écureuils à la rescousse en cas de pépin. Pensez à le lui rappeler discrètement le moment venu, sans forcément insister dessus maintenant — c'est plus satisfaisant comme découverte surprise.</p>
          <p>Noisette tient aussi sa promesse et révèle son indice : « Le premier Gland d'Or, celui du <strong>Rire</strong>, j'en suis presque sûre, est tombé dans la <strong>Ronceraie</strong>, le grand buisson d'épines au sud du village. Mes petits-enfants disent qu'on entend quelqu'un y pleurer, la nuit. Pauvre créature, qui que ce soit... »</p>
        </InfoBox>

        <SideQuestBox title="Le grand concours de saut de Pignon">
          <p className="italic mb-3">"« Dis, dis, dis ! » Pignon te tire par la queue sans relâche. « Chez nous, les invités qui passent font toujours le grand concours de saut, c'est la tradition ! Trois branches, de plus en plus loin les unes des autres. Personne, mais alors personne, n'a jamais réussi la troisième. Enfin... je crois. J'ai complètement oublié, en fait, mais ça doit être vrai, sinon pourquoi on en parlerait tout le temps ? »"</p>
          <p className="mb-3">Trois sauts d'affilée, trois jets de <strong>Bond du Renard (1D20 + Agilité +4)</strong> :</p>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li><strong>Branche du Débutant :</strong> réussite à 8.</li>
            <li><strong>Branche du Casse-Cou :</strong> réussite à 11.</li>
            <li><strong>Branche de la Légende :</strong> réussite à 14.</li>
          </ul>
          <p className="mb-3">Un saut raté n'est absolument pas dangereux : les écureuils, prévoyants malgré leur tête en l'air, ont tendu depuis des générations un grand filet de toiles et de feuilles sous les branches du concours. Le héros rebondit dedans dans un grand éclat de rire, et peut retenter sa chance sans limite.</p>
          <p><strong>Récompense</strong> (dès que deux sauts sur trois sont réussis) : un <strong>bouclier d'écorce</strong> tressé spécialement pour l'occasion. Une fois utilisé dans l'aventure, il <strong>annule tous les dégâts d'une seule attaque</strong> avant de se briser en mille éclats, son rôle accompli.</p>
        </SideQuestBox>
      </section>

      {/* ============================================================ */}
      {/* CHAPITRE 5 */}
      {/* ============================================================ */}
      <section>
        <Chapter id="chap5" emoji="🌹" title="CHAPITRE 5 : LA RONCERAIE (Le Gland du Rire)" />
        <p className="text-slate-500 font-medium mb-8 italic">
          Lieu : la Ronceraie, un immense buisson d'épines au sud du village.<br/>
          Ambiance : d'abord inquiétante, puis de plus en plus tendre à mesure qu'on approche du cœur du problème.<br/>
          Durée de jeu conseillée : 15 à 25 minutes.
        </p>

        <h3 className="font-display text-2xl font-bold text-slate-700 mt-8 mb-4">
          Scène d'ouverture : le labyrinthe d'épines
        </h3>
        <p className="mb-4 text-slate-700">
          La Ronceraie n'est pas un simple buisson : c'est un véritable labyrinthe végétal, fait de ronces entremêlées aussi hautes qu'un adulte, aux épines longues comme des aiguilles à tricoter. Peu d'animaux osent s'y aventurer, même en période normale.
        </p>

        <ReadAloud title="La narration à voix haute :">
          "Tu t'arrêtes devant un mur de ronces si dense qu'on dirait une barrière tissée exprès pour décourager les curieux. Au loin, tout au centre de ce labyrinthe épineux, une petite lueur dorée pulse doucement, comme un cœur qui bat au ralenti — c'est sans doute le Gland du Rire dont parlait Noisette.<br/><br/>
          Mais ce n'est pas la seule chose qu'on entend. Portés par le vent entre les branches piquantes, de petits sanglots étouffés parviennent jusqu'à toi, hoquetants, désespérés. Quelqu'un, quelque part là-dedans, pleure depuis longtemps, et personne n'est jamais venu voir pourquoi."
        </ReadAloud>

        <AmbianceBox title="Pour planter le décor de la Ronceraie">
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Ce qu'on voit :</strong> des tunnels sombres creusés dans les ronces, des mûres grises qui pendent partout comme de petites billes ternes, des gouttes de rosée qui brillent sur les épines comme de minuscules perles de verre.</li>
            <li><strong>Ce qu'on entend :</strong> des grattements de petites pattes, le sifflement du vent entre les épines, et ces sanglots étouffés, de plus en plus proches à mesure qu'on avance vers le centre.</li>
            <li><strong>Ce qu'on sent :</strong> la mûre trop mûre, presque fermentée, et la terre humide sous les ronces.</li>
          </ul>
        </AmbianceBox>

        <ActionBox title="Traverser les ronces : deux approches possibles">
          <ul className="list-disc pl-5 space-y-3">
            <li><strong>Se faufiler avec agilité</strong> entre les épines, en se tortillant comme une couleuvre : <em>1D20 + Agilité (+4), réussite à 10.</em> En cas d'échec, une épine particulièrement traîtresse griffe le flanc du héros (<strong>-2 PV</strong>), mais on continue sans problème.</li>
            <li><strong>Mouiller les ronces</strong> avec un peu d'eau du ruisseau (si le héros a pensé à en garder dans ses pattes ou dans une feuille creuse) : les épines humides deviennent bien plus souples. <em>Bonus de +3 au jet d'Agilité</em> si cette idée est proposée par l'enfant lui-même — récompensez toujours l'ingéniosité.</li>
          </ul>
        </ActionBox>

        <h3 className="font-display text-2xl font-bold text-slate-700 mt-10 mb-4">
          La rencontre : Piquillon, coincé dans ses propres épines
        </h3>
        <ReadAloud title="La narration à voix haute :">
          "Au cœur du labyrinthe, tu découvres enfin la source des sanglots : un tout petit hérisson, pas plus gros que ton museau, complètement empêtré dans les ronces. Ses propres piquants se sont accrochés de partout, dans les branches, dans les feuilles, dans tout ce qui passait à leur portée, et plus il se débat, plus il s'enfonce. Juste à côté de lui, posé sur un lit de feuilles, le Gland du Rire brille doucement — mais chaque fois que le petit hérisson renifle de chagrin, sa lumière vacille et faiblit un peu plus."
        </ReadAloud>

        <InfoBox title="Profil de Piquillon">
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Apparence :</strong> un tout jeune hérisson, minuscule, aux piquants encore mous et emmêlés de brindilles et de feuilles mortes.</li>
            <li><strong>Caractère :</strong> craintif et très dur sur lui-même. Il a honte de s'être laissé piéger et a peur qu'on se moque de lui — ce qui, bien sûr, n'arrivera jamais ici.</li>
            <li><strong>Comment le jouer :</strong> toute petite voix, il renifle entre chaque phrase et commence presque toujours par un « Je... je... » hésitant.</li>
            <li><strong>Ce qu'il voulait faire :</strong> il avait repéré le Gland du Rire tout seul et voulait, courageusement mais maladroitement, le ramener au Grand Chêne pour se faire bien voir des grands. Résultat : coincé depuis des heures, et de plus en plus triste.</li>
          </ul>
        </InfoBox>

        <ReadAloud title="Ce que dit Piquillon, entre deux sanglots :">
          "« Je... je voulais l'attraper pour le ramener au Grand Chêne, » renifle-t-il, les yeux brillants de larmes. « Je voulais être utile, pour une fois. Mais je me suis coincé, et maintenant j'ai tout oublié, même comment on fait pour sourire... Je crois que je vais rester ici pour toujours. »"
        </ReadAloud>

        <ActionBox title="Première étape : décoincer Piquillon">
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Démêler les piquants tout doucement</strong>, un par un, sans le blesser : <em>1D20 + Malice (+3), réussite à 10.</em></li>
            <li><strong>Astuce bonus :</strong> si le héros a gardé un peu d'eau sur lui (du ruisseau, ou grâce à la pelote de fil d'argent du chapitre 6 s'il l'a déjà), les ronces mouillées glissent bien mieux : <strong>+3</strong> au jet.</li>
          </ul>
        </ActionBox>

        <ActionBox title="Deuxième étape, la vraie épreuve : faire sourire Piquillon">
          <p className="mb-3">Voici le secret de ce chapitre, et il ne se résout pas avec un simple jet de dé : le Gland du Rire ne retrouvera son éclat que si Piquillon <strong>rit vraiment</strong>, pour de bon, pas juste par politesse.</p>
          <p className="mb-3">Encouragez l'enfant à trouver lui-même comment faire rire le petit hérisson : une grimace, une blague toute bête, une petite danse ridicule, une galipette un peu ratée exprès, un bruit rigolo avec la bouche. Récompensez systématiquement toute idée, aussi simple soit-elle, par une réussite automatique — c'est le cœur émotionnel du chapitre, pas un test de compétence.</p>
          <p className="italic text-slate-700">Si l'enfant ne sait pas quoi faire, Lumi peut suggérer : « Et si tu lui racontais la fois où tu as couru après ta propre queue en pensant qu'elle t'attaquait ? » (improvisez un souvenir rigolo du héros, ou laissez l'enfant en inventer un).</p>
        </ActionBox>

        <VictoryBox title="Le Gland du Rire (à lire à voix haute)">
          <p className="italic mb-3">"Piquillon pouffe d'abord timidement, se retient de toutes ses forces... puis n'y tient plus et éclate d'un rire si clair, si pur, qu'il rebondit littéralement sur toutes les épines autour de vous, comme un écho joyeux qui refuse de s'arrêter. Le Gland d'Or s'allume d'un coup, aussi brillant qu'un petit soleil de poche ! Autour de vous, les mûres reprennent leurs couleurs les unes après les autres : noir, violet profond, rouge sombre. Une vague de chaleur douce te traverse tout entier, des moustaches jusqu'au bout de la queue.<br/><br/>
          Et quelque part, très loin dans la forêt, sans que tu puisses savoir où exactement, quelqu'un d'autre se met soudain à rire sans trop savoir pourquoi, comme si ce rire venait de se répandre, par vagues invisibles, à travers tous les arbres."</p>
          <p><strong>Récompenses :</strong> le <strong>Gland du Rire</strong> (1 sur 3 !), une bonne poignée de mûres fraîches et de nouveau colorées (le héros récupère <strong>3 PV</strong>), et surtout un nouvel ami : <strong>Piquillon</strong> décide de suivre le héros pour le reste de l'aventure. Une fois par combat, il peut se mettre en boule juste devant lui : l'ennemi qui l'attaque se pique douloureusement et perd <strong>2 PV</strong>.</p>
        </VictoryBox>

        <SideQuestBox title="Dame Lente-Lune, l'escargot philosophe">
          <p className="italic mb-3">"Au milieu d'un des tunnels de ronces, une énorme coquille en spirale bouche complètement le passage. Deux antennes se tournent lentement vers toi, sans la moindre précipitation. « Bonjour... jeune... renard. Je passe mon chemin... Ce sera... l'affaire... d'une petite heure... tout au plus. »"</p>
          <p className="mb-3"><strong>Dame Lente-Lune</strong> (voix très, très lente, avec de longues, longues pauses entre chaque mot) n'est pas pressée le moins du monde, mais elle s'ennuie profondément depuis que la brume est tombée. Elle se pousse volontiers du passage en échange d'une <strong>histoire drôle</strong> inventée sur le moment, ou d'une <strong>petite chanson</strong> improvisée par l'enfant. Toute tentative sincère réussit automatiquement : elle rit en trois temps bien détachés (« Ha... Ha... Ha... »), comme tout ce qu'elle fait.</p>
          <p><strong>Récompense :</strong> elle a tout le temps de tout observer, même si elle avance lentement. « L'araignée du vallon, plus loin... n'aime pas... la lumière vive. Et sa toile... craint... la chaleur. Retiens bien ça, petit... ça pourrait... te servir. » L'enfant connaît désormais à l'avance les deux points faibles de Filandre, qu'il affrontera au chapitre suivant.</p>
        </SideQuestBox>
      </section>

      {/* ============================================================ */}
      {/* CHAPITRE 6 */}
      {/* ============================================================ */}
      <section>
        <Chapter id="chap6" emoji="🕸️" title="CHAPITRE 6 : L'ARAIGNÉE DE BRUME" />
        <p className="text-slate-500 font-medium mb-8 italic">
          Lieu : le vallon embrumé, entre la Ronceraie et la Grotte aux Échos.<br/>
          Ambiance : mystérieuse et un peu inquiétante, mais jamais terrifiante — Filandre n'est pas une vraie méchante.<br/>
          Durée de jeu conseillée : 20 à 30 minutes.
        </p>

        <h3 className="font-display text-2xl font-bold text-slate-700 mt-8 mb-4">
          Scène d'ouverture : la brume qui monte jusqu'aux genoux
        </h3>
        <p className="mb-4 text-slate-700">
          Pour atteindre la Grotte aux Échos et le deuxième Gland d'Or, il faut traverser un vallon encaissé, encore plus embrumé que le reste de la forêt — comme si la brume elle-même avait décidé de s'y installer pour de bon.
        </p>

        <ReadAloud title="La narration à voix haute :">
          "Le sentier plonge entre deux parois rocheuses couvertes de mousse grise, et aussitôt, une brume épaisse comme du coton monte jusqu'à tes genoux, puis jusqu'à ton ventre. Tu n'y vois plus qu'à trois pas devant toi, sauf dans le halo doux que projette Lumi, posée sur ton épaule comme un petit phare tremblant.<br/><br/>
          Entre deux arbres morts, tordus comme de vieilles mains griffues, une toile gigantesque barre tout le passage. Elle est couverte de gouttelettes qui scintillent faiblement malgré le gris ambiant — c'est presque beau, en fait, dans un genre un peu inquiétant. Une forme descend lentement le long d'un fil, patte après patte : huit yeux brillent dans la pénombre, et une voix sifflante s'élève, étirant chaque syllabe comme un long fil de soie."
        </ReadAloud>

        <InfoBox title="Profil de Filandre, l'Araignée de Brume">
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Apparence :</strong> une grande araignée grise, presque translucide dans la brume, aux pattes fines et élégantes et aux huit yeux d'un bleu pâle, comme de la glace.</li>
            <li><strong>Caractère :</strong> plus vaniteuse que méchante. Elle est fière, terriblement fière de sa toile, qu'elle considère comme une véritable œuvre d'art. Elle se vexe facilement si on la critique, et fond littéralement sous les compliments.</li>
            <li><strong>Comment la jouer :</strong> voix sifflante, elle étire démesurément tous les « s » de ses phrases. Elle aime parler d'elle-même à la troisième personne quand elle se sent flattée.</li>
            <li><strong>Pourquoi elle garde le passage :</strong> une voix qu'elle n'a jamais vue lui a promis, en échange de sa surveillance, qu'on ne détruirait jamais sa précieuse toile. Elle ne sait rien d'autre sur son commanditaire, et le regrette presque un peu si on prend le temps de lui parler gentiment après le combat.</li>
          </ul>
        </InfoBox>

        <ReadAloud title="Ce que dit Filandre, de sa voix sifflante :">
          "« Ssssalut, petit renard, » siffle-t-elle en descendant encore d'un cran. « Grisssaille m'a dit de n'laisssser passssser personne qui ssse ssouvient encore. Mais tu peux toujours essssayer de passsser, ssi le cœur t'en dit... » Elle se tait un instant, puis ajoute, presque fière malgré elle : « Tu as remarqué ma toile, j'esssspère ? C'est du travail de maître, ssi je puis dire. »"
        </ReadAloud>

        <h3 className="font-display text-2xl font-bold text-slate-700 mt-10 mb-4">
          Trois façons de franchir le passage
        </h3>

        <ActionBox title="Voie 1 : la diplomatie (flatter Filandre sur sa toile)">
          <p className="mb-2">Si l'enfant pense à complimenter sincèrement la toile de Filandre avant toute chose, tentez un <strong>jet de Cœur (1D20 + 5), réussite à 12.</strong></p>
          <p><em>Réussite :</em> Filandre, totalement conquise, rougirait presque si les araignées pouvaient rougir. « Oh... ssstop, tu vas me faire fondre ! D'accord, d'accord, passsse, petit flatteur. Mais fais ATTENTION à ne rien abîmer en passant, hein ! » Elle ouvre elle-même un passage soigné sur le côté de sa toile, sans aucun combat.</p>
        </ActionBox>

        <ActionBox title="Voie 2 : la ruse (brûler un coin de la toile avec la Feuille d'Or)">
          <p>En approchant la Feuille d'Or chauffée de sa patte, le héros peut tenter de faire fondre un petit passage discret dans un coin de la toile, pendant que Filandre a le dos tourné à fanfaronner. <strong>1D20 + Malice (+3), réussite à 11.</strong> En cas de réussite, un passage s'ouvre juste assez grand pour se faufiler en courant avant que l'araignée furieuse ne réagisse (jet d'Agilité, réussite à 8, pour filer sans se faire rattraper).</p>
        </ActionBox>

        <ActionBox title="Voie 3 : le combat (si les deux premières options échouent, ou si l'enfant préfère se battre)">
          <p>Filandre, vexée ou simplement butée, descend complètement de sa toile et se met en position d'attaque, prête à défendre son œuvre d'art.</p>
        </ActionBox>

        <CombatBox title="Statistiques du monstre : Filandre, l'Araignée de Brume">
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>PV :</strong> 14.</li>
            <li><strong>Difficulté pour la toucher (CA) :</strong> 13.</li>
            <li><strong>Attaque — fil collant :</strong> 1D6 de dégâts. Si elle touche, le héros est collé : au tour suivant, il doit se libérer avec un jet d'<strong>Agilité (1D20 + 4, réussite à 10)</strong> avant de pouvoir agir normalement.</li>
            <li><strong>Point faible n°1 — la lumière :</strong> si Lumi brille de toutes ses forces directement sur Filandre, celle-ci est éblouie et perd <strong>-3</strong> à sa difficulté à toucher (plus facile de la toucher en retour) pendant 2 tours. Utilisable une fois par combat.</li>
            <li><strong>Point faible n°2 — la chaleur :</strong> approcher la Feuille d'Or chaude de sa toile la fait reculer d'instinct, par peur de voir son chef-d'œuvre brûler : elle rate automatiquement son action suivante si cette idée est tentée (jet d'Agilité du héros pour s'approcher assez près, réussite à 10).</li>
            <li><strong>Sa lâcheté cachée :</strong> dès qu'elle tombe à 4 PV ou moins, elle arrête immédiatement le combat et supplie qu'on la laisse partir — elle n'a jamais été vraiment courageuse, juste très attachée à sa réputation.</li>
          </ul>
        </CombatBox>

        <ActionBox title="Le déroulement du combat">
          <ol className="list-decimal pl-5 space-y-2 mb-3">
            <li><strong>Initiative :</strong> 1D20, à 10 ou plus le héros commence.</li>
            <li><strong>Options du héros, à chaque tour :</strong>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li><em>Attaque de crocs :</em> 1D20 + Courage (+3), dégâts 1D6.</li>
                <li><em>Éblouir avec Lumi</em>, puis frapper juste après (combo redoutablement efficace).</li>
                <li><em>Approcher la Feuille d'Or</em> pour la faire reculer, puis en profiter pour avancer vers la sortie plutôt que de se battre.</li>
              </ul>
            </li>
          </ol>
        </ActionBox>

        <VictoryBox title="Si Filandre est vaincue ou cède">
          <p className="italic mb-3">"« Asssez ! Asssez ! » Filandre remonte précipitamment le long de son fil en agitant ses huit pattes avec une dignité qui en prend un sacré coup. « Passse, petit roux, passse ! Tu es bien trop remuant pour une pauvre araignée comme moi. » Elle se réfugie tout en haut d'un arbre mort et boude ostensiblement, le dos tourné, pendant que la grande toile se déchire lentement, laissant enfin filtrer un rayon de lumière grise dans le vallon."</p>
          <p><strong>Butin :</strong> dans les débris de la toile, le héros trouve une <strong>pelote de fil d'argent</strong>, fine mais incroyablement solide. Elle sert de corde improvisée : <strong>+2</strong> au prochain jet d'Agilité de son choix, pour grimper, descendre ou franchir un passage délicat.</p>
          <p><strong>Si le héros est tombé à 0 PV pendant le combat :</strong> il se réveille emmailloté comme un petit saucisson dans de la soie, pendu la tête en bas. Piquillon, hérissé de fureur protectrice, découpe patiemment les fils avec ses piquants pendant que Lumi éblouit Filandre pour la tenir à distance. Le héros repart avec 3 PV, un peu vexé mais entier.</p>
        </VictoryBox>

        <SideQuestBox title="Velours, le papillon de nuit englué">
          <p className="italic mb-3">"Dans un coin de la toile déchirée, quelque chose se débat encore faiblement : un gros papillon de nuit aux ailes couleur de velours gris poussiéreux. « Oh, quelle sotte je fais, » soupire-t-il d'une voix feutrée. « J'ai vu une jolie petite lumière danser dans le noir, et me voilà collé comme une mouche depuis trois bonnes heures. »"</p>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li><strong>Le décoller sans abîmer ses ailes fragiles :</strong> 1D20 + Malice (+3), réussite à 10. Avec un peu d'eau, ou l'aide prudente des piquants de Piquillon : <strong>+3</strong> au jet.</li>
          </ul>
          <p><strong>Récompense :</strong> reconnaissant, Velours secoue délicatement ses ailes juste au-dessus de Lumi et la saupoudre d'une fine <strong>poussière de lune</strong> argentée. Une fois dans l'aventure, Lumi peut briller deux fois plus fort qu'à l'accoutumée : toutes les créatures de la brume présentes au combat subissent alors <strong>-2</strong> à toutes leurs actions pour le tour entier, et non plus seulement à une seule.</p>
        </SideQuestBox>

        <div className="mt-8 p-6 bg-emerald-50 border-2 border-emerald-200 rounded-2xl">
          <h3 className="font-display text-xl font-bold text-emerald-800 mb-3 flex items-center gap-2">
            <span className="text-2xl">🌿</span> Petit répit, avant la suite
          </h3>
          <p className="italic text-emerald-900">
            "La brume se déchire enfin, lambeau par lambeau, comme un vieux rideau qu'on tire. Tu reprends ton souffle, Piquillon serré bien fort contre ton flanc, Lumi dansant juste au-dessus de ta tête, un peu essoufflée elle aussi. Devant vous, nichée entre deux rochers moussus, une grotte respire doucement, par intermittence, comme si elle chantonnait tout bas, pour elle-même, une mélodie qu'elle aurait depuis longtemps oubliée…"
          </p>
        </div>
      </section>
    </div>
  );
}
