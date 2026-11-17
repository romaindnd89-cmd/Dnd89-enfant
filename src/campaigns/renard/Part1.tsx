import React from 'react';
import { ReadAloud, CombatBox, ActionBox, InfoBox } from '../../components/StoryBlocks';
import { Chapter } from '../../components/CampaignLayout';
import { AmbianceBox, VictoryBox, SideQuestBox, LootBox } from '../../components/StoryExtras';

export default function Part1() {
  return (
    <div className="space-y-12">
      {/* ============================================================ */}
      {/* CHAPITRE 1 */}
      {/* ============================================================ */}
      <section>
        <Chapter id="chap1" emoji="🌫️" title="CHAPITRE 1 : LE RÉVEIL GRIS" />
        <p className="text-slate-500 font-medium mb-8 italic">
          Lieu : le terrier de la famille Renard, puis la clairière du Grand Saule.<br/>
          Ambiance : un matin d'automne qui aurait dû être flamboyant, et qui ne l'est plus.<br/>
          Durée de jeu conseillée : 10 à 15 minutes. C'est le chapitre d'ouverture : prenez le temps de bien poser l'ambiance, le reste de l'aventure en dépend.
        </p>

        <h3 className="font-display text-2xl font-bold text-slate-700 mt-8 mb-4">
          Scène d'ouverture : le terrier qui ne sent plus rien
        </h3>

        <ReadAloud title="La narration à voix haute :">
          "Tu ouvres un œil. Puis l'autre. Il fait étrangement clair dans le terrier, comme si le jour s'était levé trop vite, sans prévenir. Tu te redresses sur tes quatre pattes, et c'est là que tu remarques la première chose bizarre : ta fourrure, d'habitude d'un roux éclatant, a la couleur d'un vieux journal mouillé.<br/><br/>
          Tu baisses le museau vers la feuille dorée que t'a offerte Mémé Rouquine, celle que tu gardes toujours serrée contre toi quand tu dors. Elle brille. Elle, et seulement elle. Tout le reste — la terre du terrier, les racines au plafond, la petite couverture tricotée dans le coin — est devenu gris, comme un dessin au crayon qu'on aurait oublié de colorier.<br/><br/>
          Tu sors en trottinant, le cœur qui bat un peu trop vite. Dehors, le monde entier a changé de couleurs, ou plutôt : il n'en a plus. Les feuilles qui dansaient en rouge et en or hier soir pendent maintenant, ternes, comme fatiguées. Le ciel lui-même semble avoir pris un rhume. Et le pire, dans tout ça, ce n'est pas le gris. C'est le silence. Pas un chant d'oiseau. Pas un bourdonnement d'abeille attardée. Juste... rien."
        </ReadAloud>

        <AmbianceBox title="Comment jouer les animaux oublieux">
          <p>Parlez lentement, presque en chuchotant au début. Les animaux qui ont oublié répètent la même phrase en boucle, s'arrêtent au milieu d'un mot, sourient poliment sans reconnaître personne — même pas eux-mêmes.</p>
        </AmbianceBox>

        <h3 className="font-display text-2xl font-bold text-slate-700 mt-10 mb-4">
          La promenade : le chemin du Grand Saule
        </h3>
        <p className="mb-4 text-slate-700">
          Avant d'arriver jusqu'à Mémé Rouquine, laissez l'enfant trottiner à son rythme. Ce n'est pas une course : c'est l'occasion de simplement traverser la forêt, de regarder autour de soi, de sentir ce monde gris sans qu'il se passe forcément quelque chose à chaque pas. Lisez le texte ci-dessous d'une traite, lentement, puis laissez l'enfant dire ce qui l'intrigue.
        </p>

        <ReadAloud title="La narration à voix haute :">
          "Le chemin serpente entre les troncs, et tu prends ton temps. L'herbe, d'habitude verte et piquante sous tes coussinets, est devenue toute molle, comme de la cendre froide. Tu passes devant une toile d'araignée tissée entre deux branches basses : elle est intacte, parfaite, ornée de minuscules perles de rosée qui, elles, n'ont pas perdu une seule goutte de leur éclat — comme si la pluie, au moins, se souvenait encore comment briller.<br/><br/>
          Un peu plus loin, un vieux nid d'oiseau est tombé au milieu du chemin, vide depuis longtemps, tapissé de mousse grise et d'un unique fil de laine rouge — un fil qui vient peut-être d'une écharpe tricotée, ou d'un bonnet perdu, il y a bien longtemps. Tu renifles une odeur de champignon humide qui monte d'un tronc couché, couvert de petites pousses en forme d'éventail, toutes grises elles aussi, mais dont les bords, quand la lumière les frôle juste comme il faut, semblent presque vouloir redevenir orangés.<br/><br/>
          Rien ne te parle, rien ne te demande rien. C'est juste la forêt, telle qu'elle est devenue, et telle qu'elle était avant. Tu pourrais continuer tout droit. Ou tu pourrais t'arrêter, et regarder d'un peu plus près."
        </ReadAloud>

        <ActionBox title="Fouiller un peu (un vrai moment d'exploration)">
          <p className="mb-3">Ces trois trouvailles ne sont pas de la simple décoration : ce sont de <strong>vrais objets</strong> qui serviront plus loin dans l'aventure. Laissez l'enfant explorer et ramasser ce qu'il veut (il peut tout prendre). Chaque objet se note sur la fiche, dans le sac à dos.</p>
        </ActionBox>

        <LootBox item="Goutte de rosée (dans une coquille de gland)">
          <p className="italic mb-2">"Tu approches le museau de la toile : chaque perle de rosée te renvoie ton reflet, minuscule et renversé. Tu en recueilles délicatement une grosse goutte bien fraîche dans une coquille de gland vide."</p>
          <p><strong>Effet :</strong> une réserve d'eau pure. Au <strong>chapitre 5</strong>, la verser sur les ronces les assouplit : <strong>+3</strong> au jet pour traverser la Ronceraie sans se piquer. (Ou pour étancher une petite soif en chemin.)</p>
        </LootBox>

        <LootBox item="Fil de laine rouge">
          <p className="italic mb-2">"Au fond du vieux nid tombé, un unique fil de laine rouge est resté accroché — la même couleur, exactement, que l'écharpe de Mémé. Tu l'enroules autour de ta patte."</p>
          <p><strong>Effet :</strong> un petit bout de courage et de maison. Une fois dans l'aventure, le serrer contre soi donne <strong>+2 à un jet de Cœur</strong>. Il prend tout son sens au <strong>chapitre 9</strong>, face à Grisaille.</p>
        </LootBox>

        <LootBox item="Champignon-lanterne">
          <p className="italic mb-2">"Tu souffles sur les petits champignons en éventail : une poussière argentée s'envole, et l'un d'eux se met à luire d'une douce lumière bleutée. Tu le cueilles : il tient dans la patte comme une mini-lanterne."</p>
          <p><strong>Effet :</strong> une source de lumière. Au <strong>chapitre 8</strong>, dans le terrier sombre de Grisaille, le frotter l'allume une fois : <strong>+2</strong> à un jet d'infiltration pour voir où l'on met les pattes.</p>
        </LootBox>

        <ActionBox title="Sur le chemin : Monsieur Blaireau et les lunettes introuvables">
          <p className="mb-3">Près du vieux pommier, Monsieur Blaireau tourne en rond, le museau collé au sol, en marmonnant sans cesse la même phrase.</p>
          <p className="italic mb-3">"Je cherche... je cherche... mais je ne sais plus quoi je cherche ! Ah si : mes lunettes ! Je ne vois plus rien sans mes lunettes !"</p>
          <p className="mb-3">Ses lunettes rondes sont posées bien en évidence... sur son propre nez.</p>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Si l'enfant le lui dit directement :</strong> aucun jet nécessaire. Monsieur Blaireau est ravi pendant deux secondes pile, puis oublie aussitôt et recommence à chercher. C'est triste et un peu drôle en même temps : n'hésitez pas à le jouer avec tendresse plutôt qu'avec moquerie.</li>
            <li><strong>Si l'enfant tente de le convaincre avec un jet :</strong> <strong>1D20 + Cœur (+5)</strong>, réussite à 8. À la réussite, Monsieur Blaireau garde ses lunettes sur le nez pendant tout le reste de la scène, assez longtemps pour donner un indice utile : « Tiens, en parlant de choses qu'on perd... j'ai vu Mémé Rouquine filer vers le Grand Saule, toute seule, en fredonnant un air que je ne connaissais pas. »</li>
          </ul>
        </ActionBox>

        <ActionBox title="Un peu plus loin : les deux lapins qui ne se reconnaissent plus">
          <p className="mb-3">Sur le petit chemin de terre, deux lapins se font face, immobiles, le regard flou. Ce sont Frisette et Grisou, frère et sœur, inséparables depuis toujours. Aujourd'hui, ils se regardent comme deux inconnus.</p>
          <p className="italic mb-3">Frisette : « Pardon... je crois qu'on ne s'est jamais rencontrés ? » — Grisou : « Non, je ne pense pas, madame. Bonne journée. »</p>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Leur faire remarquer qu'ils ont la même tache blanche sur l'oreille gauche</strong> (jet de <strong>Flair, 1D20 + 5</strong>, réussite à 9) : les deux lapins se figent, puis éclatent de rire en même temps, le même rire exactement. « Grisou ?! » « FRISETTE ?! » Ils se sautent dessus pour un câlin. Ce souvenir retrouvé redonne une pointe de couleur rose à leurs oreilles pendant quelques secondes — la toute première preuve que l'oubli n'est pas forcément définitif.</li>
            <li><strong>Sans réussir le jet :</strong> les lapins restent polis et distants, mais remercient le renard d'avoir essayé, et l'un d'eux glisse : « Au fait... vous n'auriez pas vu une vieille dame renarde qui fredonnait tout bas ? Elle est passée par là, vers le grand arbre. »</li>
          </ul>
        </ActionBox>

        <ActionBox title="Avant le Grand Saule : le garde-manger que Papa Renard ne retrouve plus">
          <p className="italic mb-3">Un peu plus loin, Papa Renard (le propre père du héros, lui aussi touché par l'oubli) creuse n'importe où dans le jardin, sans méthode, en soufflant de la terre grise dans tous les sens. « J'avais caché nos provisions pour l'hiver... quelque part... sous quelque chose... mais quoi ? Et où ?! »</p>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Suivre son propre nez</strong> (le super-pouvoir du héros) : <strong>1D20 + Flair (+5)</strong>, réussite à 10. L'odeur discrète de noisette grillée mène tout droit à la bonne cachette, sous la troisième pierre plate près du pommier.</li>
            <li><strong>Aider en creusant ensemble</strong> (Courage, 1D20 + 3, réussite à 12) : plus long, mais ça marche aussi.</li>
          </ul>
        </ActionBox>

        <LootBox item="3 Noisettes grillées">
          <p className="italic mb-2">"Sous la pierre, tout un trésor de noisettes bien dorées ! Papa Renard, soulagé sans trop savoir pourquoi, t'ébouriffe la fourrure d'un geste tendre et mécanique, avant de repartir, déjà un peu perdu, vers une autre direction."</p>
          <p><strong>Effet :</strong> ce sont les 3 noisettes de la fiche de personnage. Chacune mangée pendant un repos ou un combat redonne <strong>3 PV</strong>.</p>
        </LootBox>

        <h3 className="font-display text-2xl font-bold text-slate-700 mt-10 mb-4">
          La rencontre principale : Mémé Rouquine au pied du Grand Saule
        </h3>
        <InfoBox title="Profil de Mémé Rouquine">
          <p className="mb-3">Au bout du chemin, sous les longues branches tombantes du Grand Saule, une silhouette familière est assise, immobile, le regard perdu dans le vide gris.</p>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Apparence :</strong> pelage terne comme de la cendre, mais son écharpe rouge tricotée reste légèrement colorée.</li>
            <li><strong>Voix :</strong> douce, lente, un peu flottante, comme à moitié endormie — jamais méchante.</li>
            <li><strong>À retenir :</strong> elle fredonne sans le savoir un air sans paroles (la future Chanson de Grisefeuille, chapitre 7), et a vu des ombres noires filer vers le <strong>nord</strong> avec quelque chose de brillant.</li>
          </ul>
        </InfoBox>

        <ReadAloud title="Ce que dit Mémé, d'une voix douce et lointaine :">
          "Oh... bonjour, petit... tu me rappelles quelqu'un, mais je ne sais plus qui..." Elle sourit, un sourire flou, comme à travers une vitre embuée. Elle regarde la feuille d'or que tu tiens serrée contre toi, et ses yeux s'y attardent une seconde de plus que sur le reste du monde, comme si cette petite lumière lui disait vaguement quelque chose, tout au fond, très loin."
        </ReadAloud>

        <ActionBox title="L'arbre de dialogue : réveiller un souvenir">
          <p className="mb-3">C'est le premier vrai choix de l'aventure, et il est pensé pour être tendre, pas pour faire peur. Laissez l'enfant proposer son idée avant de lui donner les options ci-dessous — n'importe quelle idée gentille mérite d'être récompensée.</p>
          <ul className="list-disc pl-5 space-y-4">
            <li><strong>Option 1 — Montrer l'écharpe rouge :</strong> le héros désigne doucement l'écharpe que Mémé porte encore. <em>Jet de Cœur (1D20 + 5), réussite à 8</em> (c'est facile exprès : c'est la toute première épreuve du jeu). À la réussite, Mémé referme sa patte sur le tissu rouge et son regard se stabilise un court instant.</li>
            <li><strong>Option 2 — Fredonner la petite mélodie avec elle :</strong> si l'enfant a remarqué que Mémé chantonnait, il peut l'imiter. <em>Jet de Flair ou de Cœur au choix, réussite à 10.</em> Cette option est la plus belle : elle relie directement à la Chanson de Grisefeuille du chapitre 7.</li>
            <li><strong>Option 3 — Lui tendre la feuille d'or :</strong> en sentant sa chaleur dorée contre sa truffe, Mémé peut, si le jet réussit (Cœur, réussite à 10), retrouver pendant un instant un vrai souvenir net.</li>
          </ul>
        </ActionBox>

        <VictoryBox title="Si Mémé se souvient (à lire à voix haute, quelle que soit l'option choisie)">
          <p className="italic mb-3">"Les yeux de Mémé Rouquine s'éclairent d'un coup, comme une lanterne qu'on rallume après une panne. « Mon tout-petit ! C'est toi ! » Elle te serre si fort contre elle que ton museau disparaît complètement dans son écharpe, qui sent encore, juste un peu, la lavande et le pain grillé. Pendant cet instant-là, une touche de roux revient sur sa fourrure, comme une aquarelle qu'on viendrait de retoucher. Puis, doucement, la brume reprend le dessus et son regard redevient flou — mais elle garde ta patte serrée dans la sienne, bien fort, bien réelle.<br/><br/>
          « Va, mon petit, » souffle-t-elle. « Je ne sais plus très bien pourquoi... mais je sais que je suis fière de toi. Les couleurs... je les ai vues partir, cette nuit. Des ombres noires, comme de la suie qui vole, elles ont filé vers le nord en emportant quelque chose qui brillait. Suis-les, mon cœur. Et reviens-moi vite. »"</p>
          <p><strong>Cadeau de Mémé :</strong> elle resserre le nœud de l'écharpe rouge autour du cou du héros et y dépose un baiser. Une fois dans l'aventure (une seule fois, à n'importe quel moment), l'enfant peut dire « je serre fort l'écharpe de Mémé » pour gagner <strong>+2 à un jet de Courage</strong> de son choix.</p>
        </VictoryBox>

        <InfoBox title="Si l'enfant rate tous ses jets (ne jamais bloquer l'histoire)">
          <p>Pas grave du tout : Mémé reste douce mais lointaine. Lumi la luciole, qui vient d'apparaître (voir plus bas), complète gentiment : « Elle ne se souvient plus, mais regarde — son écharpe est restée rouge. L'amour, parfois, résiste un peu plus longtemps que le reste à l'oubli. Et elle a dit un mot avant que tu n'arrives : nord. » L'aventure continue exactement pareil.</p>
        </InfoBox>

        <h3 className="font-display text-2xl font-bold text-slate-700 mt-10 mb-4">
          L'arrivée de Lumi la luciole
        </h3>
        <ReadAloud title="La narration à voix haute :">
          "Alors que tu regardes Mémé s'éloigner en fredonnant toujours son petit air sans paroles, une minuscule lumière dorée se détache de l'ombre du Grand Saule et vient voleter devant ton museau, hésitante. C'est une luciole — mais une luciole bien étrange, car en plein jour gris, sa petite lumière brille comme une bougie dans le noir.<br/><br/>
          « Enfin ! » chuchote-t-elle d'une voix fluette et pressée. « Enfin quelqu'un qui se souvient encore de quelque chose ! Je m'appelle Lumi. Je volette dans cette forêt depuis que la brume est tombée, et toi, petit renard... toi, tu brilles encore, un tout petit peu, comme ta feuille d'or. Il faut faire vite. La forêt tout entière est en train d'oublier, et si rien n'arrête ça avant la première neige, elle oubliera pour toujours. »"
        </ReadAloud>

        <InfoBox title="Note pour le MJ — ce que l'enfant doit retenir du chapitre 1">
          <p className="mb-2">À la fin de ce chapitre, l'enfant doit avoir compris trois choses, même sans les avoir comprises à 100% : (1) la forêt a perdu ses couleurs et sa mémoire cette nuit ; (2) des ombres noires sont parties vers le <strong>nord</strong> avec quelque chose de brillant ; (3) une luciole nommée <strong>Lumi</strong> l'accompagne maintenant. N'hésitez pas à résumer ces trois points à voix haute avant de passer au chapitre 2, surtout avec les plus jeunes.</p>
          <p>Rappelez aussi, une seule fois et sans insister, le nom du grand méchant de l'histoire sans le nommer directement : « Quelque chose, ou quelqu'un, a lancé cette brume cette nuit. On ne sait pas encore qui. » C'est une graine qu'on plante pour la révélation du chapitre 9.</p>
        </InfoBox>
      </section>

      {/* ============================================================ */}
      {/* CHAPITRE 2 */}
      {/* ============================================================ */}
      <section>
        <Chapter id="chap2" emoji="🪶" title="CHAPITRE 2 : LES CORBEAUX DE SUIE" />
        <p className="text-slate-500 font-medium mb-8 italic">
          Lieu : la clairière des épouvantails, à la lisière nord de la forêt.<br/>
          Ambiance : un décor de fête abandonné, entre inquiétant et carrément grotesque.<br/>
          Durée de jeu conseillée : 20 à 30 minutes. Premier vrai combat de l'aventure — gardez-le fun, pas effrayant.
        </p>

        <h3 className="font-display text-2xl font-bold text-slate-700 mt-8 mb-4">
          Scène d'ouverture : la clairière des épouvantails
        </h3>

        <ReadAloud title="La narration à voix haute :">
          "La clairière s'ouvre devant vous comme une immense pièce sans toit. De vieux épouvantails de paille montent une garde un peu penchée, leurs chapeaux troués laissant passer le vent avec un sifflement grêle. Entre eux, des citrouilles qui auraient dû être orange sont devenues grises comme des pierres, et certaines, fendues par le temps, laissent échapper un peu de paille humide.<br/><br/>
          Perchés tout en haut, sur les bras raides des épouvantails, trois grosses formes noires se chamaillent bruyamment. Ce sont des corbeaux — mais des corbeaux pas comme les autres : leurs plumes sont grasses et sales, comme trempées dans de la suie fraîche, et une légère fumée noire s'échappe de leur bec à chaque croassement.<br/><br/>
          Entre leurs serres, ils se disputent un véritable butin de pacotille : un dé à coudre rouillé, une vieille cuillère cabossée, et — ton cœur fait un bond — une plume dorée qui, de loin, ressemble étrangement à un morceau de carte déchirée. Lumi se pose sur ton oreille et chuchote : « Ce sont les Corbeaux de Suie. Ils servent quelqu'un, mais je ne sais pas encore qui. Fais attention : ils n'aiment pas ceux qui se souviennent. »"
        </ReadAloud>

        <InfoBox title="Profil des Corbeaux de Suie : Suie, Charbon et Cendrar">
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Qui ils sont :</strong> <em>Suie</em> (nerveux), <em>Charbon</em> (bête, facile à distraire) et <em>Cendrar</em> (le plus gros, se prend pour le chef).</li>
            <li><strong>Voix :</strong> nasillarde, phrases courtes qui finissent par un « CROÂ ! ». Ils se disputent entre eux même en combat — ça détend la tension.</li>
            <li><strong>Leur secret :</strong> une voix inconnue leur a ordonné de voler ce qui brille et de garder le passage vers le nord. Ils peuvent le confier si on les interroge gentiment après leur défaite.</li>
          </ul>
        </InfoBox>

        <h3 className="font-display text-2xl font-bold text-slate-700 mt-10 mb-4">
          Exploration avant le combat : trois façons d'aborder la clairière
        </h3>
        <ActionBox title="Approche A : l'approche discrète (se faufiler entre les épouvantails)">
          <p className="mb-3">Le combat n'est pas obligé d'éclater tout de suite. Laissez l'enfant observer la scène et proposer une approche — voici trois pistes selon ce qu'il choisit d'essayer.</p>
          <p className="mb-2">Le héros peut tenter de longer les épouvantails à couvert pour atteindre directement le tas d'objets volés sans se battre.</p>
          <p className="mb-2"><strong>Jet d'Agilité (1D20 + 4), réussite à 13</strong> (plus difficile que la moyenne : les corbeaux ont l'œil partout).</p>
          <ul className="list-disc pl-5 space-y-1">
            <li><em>Réussite :</em> le héros récupère discrètement la Plume-Carte dorée sans déclencher de combat ! Les corbeaux continuent de se disputer bruyamment, n'ayant rien remarqué. L'aventure peut directement sauter à la scène du butin plus bas.</li>
            <li><em>Échec :</em> une brindille craque sous une patte maladroite. Les trois corbeaux se retournent d'un coup. Le combat commence — mais avec un bonus : comme ils sont surpris en pleine dispute, ils ont <strong>-2</strong> à leur premier jet d'initiative.</li>
          </ul>
        </ActionBox>

        <ActionBox title="Approche B : la breloque trouvée dans l'herbe">
          <p className="mb-2">Avant toute chose, laissez l'enfant fouiner un peu dans l'herbe grise de la clairière : un jet de <strong>Flair (1D20 + 5), réussite à 9</strong>, fait découvrir une breloque de fête oubliée — un petit grelot de laiton, resté là depuis les moissons d'autrefois, encore étonnamment brillant.</p>
          <p>S'il la lance loin dans les buissons au début du combat, les corbeaux adorent ce qui brille plus que tout au monde : <strong>Charbon</strong> (le plus bête des trois) quitte aussitôt le combat pour foncer le récupérer, et ne revient plus. Un ennemi de moins pour la suite.</p>
        </ActionBox>

        <ActionBox title="Approche C : foncer tout droit (l'approche directe, toujours possible)">
          <p>Le héros s'avance simplement dans la clairière. C'est l'option la plus simple pour les plus jeunes, et elle mène tout droit au combat décrit ci-dessous, sans malus ni bonus particulier.</p>
        </ActionBox>

        <h3 className="font-display text-2xl font-bold text-slate-700 mt-10 mb-4">
          Le combat : les Corbeaux de Suie
        </h3>
        <ReadAloud title="La narration à voix haute (si le combat se déclenche) :">
          "Les trois corbeaux tournent la tête vers toi d'un seul mouvement, tous en même temps, comme actionnés par un même fil invisible. « Un renard qui se souvient ? CROÂ ! Interdit ! La patronne n'aime pas ça du tout ! » Dans un envol de plumes grasses et de petite fumée noire, ils s'élancent vers toi, leurs serres tendues en avant. Le vent de leurs ailes sent le feu de cheminée éteint depuis trop longtemps."
        </ReadAloud>

        <CombatBox title="Statistiques des ennemis (× 3)">
          <p className="font-bold mb-2">Suie, Charbon et Cendrar (chacun séparément)</p>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>PV :</strong> 5 chacun (Cendrar, un peu plus gros, en a 6).</li>
            <li><strong>Difficulté pour les toucher (CA) :</strong> 11 — il faut faire 11 ou plus pour toucher.</li>
            <li><strong>Attaque :</strong> coup de bec piquant (1D4 de dégâts). Ils attaquent chacun leur tour, jamais ensemble : c'est plus simple à gérer et ça laisse le temps de respirer entre deux jets.</li>
            <li><strong>Capacité spéciale — Envol moqueur :</strong> si un corbeau rate son attaque, il s'envole trop haut de surprise : impossible de le toucher au tour suivant, sauf avec un Bond du Renard réussi (1D20 + Agilité).</li>
            <li><strong>Leur point faible — la lumière de Lumi :</strong> si l'enfant demande à Lumi de briller de toutes ses forces, les trois corbeaux sont éblouis et subissent <strong>-2</strong> à toutes leurs actions pour ce tour-là. Utilisable une seule fois par combat.</li>
            <li><strong>Leur lâcheté :</strong> un corbeau tombé à 2 PV ou moins s'enfuit aussitôt en piaillant plutôt que de continuer à se battre — ce sont de vrais froussards sous leurs grands airs.</li>
          </ul>
        </CombatBox>

        <ActionBox title="Le déroulement du combat, tour par tour">
          <ol className="list-decimal pl-5 space-y-3 mb-4">
            <li><strong>Jet d'initiative :</strong> 1D20. À 10 ou plus, le héros agit avant les corbeaux.</li>
            <li><strong>Les actions possibles du héros, à choisir à chaque tour :</strong>
              <ul className="list-disc pl-5 mt-2 space-y-2">
                <li><em>Griffes et crocs :</em> 1D20 + Courage (+3) pour toucher. Dégâts : 1D6. <span className="italic">« Tes crocs se referment sur une plume grasse, et le corbeau pousse un croassement indigné. »</span></li>
                <li><em>Bond du Renard :</em> 1D20 + Agilité (+4), utile contre un corbeau qui vient de s'envoler trop haut après un échec. <span className="italic">« Tu bondis, museau en avant, et rattrapes le corbeau en plein vol — surpris, il dégringole. »</span></li>
                <li><em>Malice — renverser un épouvantail :</em> 1D20 + Malice (+3). En cas de réussite, l'épouvantail s'effondre sur un corbeau au choix, qui est « coincé » et rate automatiquement son prochain tour.</li>
              </ul>
            </li>
          </ol>
          <p className="italic text-slate-700">Si un corbeau touche le héros : « Le bec noir pique ta patte. Tes écailles de fourrure te protègent un peu, mais ça pique quand même un bon coup. »</p>
        </ActionBox>

        <VictoryBox title="La fin du combat (à lire à voix haute)">
          <p className="italic mb-3">"Vaincus les uns après les autres, les derniers corbeaux debout lâchent tout leur butin d'un coup et s'enfuient dans un grand vacarme de plumes et de croassements vexés. « CROÂ ! On dira rien à la patronne, promis ! » hurle l'un d'eux en disparaissant derrière les arbres. Le silence retombe sur la clairière, juste troublé par ton souffle un peu court et le bourdonnement satisfait de Lumi, qui tourne en petits cercles de joie autour de ta tête."</p>
          <p><strong>Si l'enfant est tombé à 0 PV pendant le combat :</strong> pas de panique, jamais. Les corbeaux, trop lâches pour achever un adversaire inconscient, se contentent de piquer un œil curieux puis s'envolent en se disputant sur qui aurait dû finir le travail. Lumi réveille le héros d'un petit coup de lumière chaude sur la truffe, et celui-ci se relève avec 3 PV, un peu groggy mais entier.</p>
        </VictoryBox>

        <ActionBox title="Le butin dans le tas des corbeaux">
          <p className="mb-3">En fouillant le tas d'objets volés, le héros trouve :</p>
          <ul className="list-disc pl-5 space-y-2 mb-3">
            <li>La <strong>Plume-Carte dorée</strong> : elle montre, dessiné en lignes qui brillent faiblement, le chemin jusqu'au ruisseau puis jusqu'au village des écureuils.</li>
            <li>Un <strong>dé à coudre</strong> rouillé : Lumi s'en fait aussitôt un petit casque et en est ridiculement fière pendant le reste de l'aventure.</li>
            <li>Une <strong>petite cuillère brillante</strong> qui sert de miroir de poche. Une fois dans l'aventure, elle peut renvoyer la lumière de Lumi en plein sur une créature de la brume pour lui donner <strong>-2</strong> à son prochain jet.</li>
            <li>Une <strong>noisette grillée</strong> de plus, qui rejoint le sac à dos (+3 PV si on la mange).</li>
          </ul>
        </ActionBox>

        <SideQuestBox title="Bringuebale, l'épouvantail qui a retrouvé sa langue">
          <p className="italic mb-3">"« Psst ! Par ici, petit ! » La voix grinçante vient du plus vieil épouvantail de la rangée, celui qui a un gros bouton de nacre à la place d'un œil. « Ces sacripants noirs m'ont volé mon chapeau pendant que je dormais debout. Sans lui, j'ai les idées qui s'envolent comme des moineaux, tu comprends ? »"</p>
          <p className="mb-3"><strong>Bringuebale</strong> (voix lente et pâteuse, il cherche longtemps ses mots avant chaque phrase) a son chapeau coincé tout en haut d'un bouleau voisin.</p>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li><strong>Grimper le récupérer :</strong> Bond du Renard, 1D20 + Agilité (+4), réussite à 10. En cas d'échec, le héros dégringole dans un gros tas de feuilles mortes (aucun dégât, juste un fou rire garanti) et peut retenter sa chance.</li>
          </ul>
          <p><strong>Récompense :</strong> une fois coiffé de son chapeau, Bringuebale retrouve d'un coup un vieux souvenir bien net. « Ah ! Ça me revient ! Le crapaud du ruisseau, là-bas... il adore les devinettes, mais il déteste par-dessus tout qu'on le fasse attendre. Si jamais tu sèches devant son énigme, dis-lui bien fort que tu réfléchis à voix haute : il ne pourra pas s'empêcher de t'aider, c'est plus fort que lui. » L'enfant gagne ainsi <strong>un indice gratuit garanti</strong> pour l'énigme du chapitre suivant.</p>
        </SideQuestBox>
      </section>

      {/* ============================================================ */}
      {/* CHAPITRE 3 */}
      {/* ============================================================ */}
      <section>
        <Chapter id="chap3" emoji="💧" title="CHAPITRE 3 : LE RUISSEAU BAVARD" />
        <p className="text-slate-500 font-medium mb-8 italic">
          Lieu : le gué du vieux crapaud, là où le sentier croise le ruisseau.<br/>
          Ambiance : calme et un peu magique, un moment pour souffler et réfléchir ensemble.<br/>
          Durée de jeu conseillée : 10 à 20 minutes selon l'envie de l'enfant d'explorer les rives.
        </p>

        <h3 className="font-display text-2xl font-bold text-slate-700 mt-8 mb-4">
          Scène d'ouverture : un ruisseau qui n'est pas tout à fait silencieux
        </h3>

        <ReadAloud title="La narration à voix haute :">
          "Le ruisseau murmure, glougloute et... oui, c'est bien ça : il parle ! Pas des mots très clairs, plutôt des bribes qui ressemblent à des conseils marmonnés entre deux clapotis : « par ici... non, pas par là... prudence, petit... »<br/><br/>
          Au milieu de l'eau, bien calé sur une large pierre plate, un vieux crapaud couleur de vase et de feuilles mortes te regarde arriver avec des yeux globuleux qui ne clignent presque jamais. Il ne bouge pas d'un centimètre, comme s'il faisait partie du paysage depuis la nuit des temps — ce qui, d'ailleurs, n'est pas totalement faux."
        </ReadAloud>

        <InfoBox title="Profil de Croâ, le vieux crapaud gardien du gué">
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Apparence :</strong> un crapaud énorme, peau grumeleuse couleur boue, yeux d'or qui ne cillent presque jamais.</li>
            <li><strong>Voix :</strong> très grave et très lente, caverneuse — gonflez les joues avant chaque réplique. Fier et bougon, mais ravi d'avoir enfin de la visite.</li>
            <li><strong>Ce qu'il sait :</strong> il a vu des écureuils affolés filer vers l'amont du ruisseau.</li>
          </ul>
        </InfoBox>

        <ReadAloud title="Ce que dit Croâ, d'une voix de basse tranquille :">
          "« Halte-là, petit roux ! » coasse le crapaud sans bouger un muscle. « Moi, Croâ, je garde ce gué depuis cent automnes, et la brume grise a beau m'avoir pris pas mal de souvenirs, elle n'a pas touché à mon goût pour les bonnes devinettes. Réponds-moi juste, et l'eau te laissera passer sans une éclaboussure. Réponds-moi faux... et tu auras les pattes bien mouillées, c'est tout, rien de grave. »"
        </ReadAloud>

        <ActionBox title="L'énigme : le test de sagesse">
          <p className="mb-4">Laissez vraiment l'enfant réfléchir, et laissez le silence s'installer un peu — c'est un des rares moments calmes de l'aventure. S'il sèche complètement, proposez un jet de <strong>1D20 + Flair (+5)</strong> : à 12 ou plus, Lumi lui souffle un indice discret à l'oreille.</p>
          <ul className="list-disc pl-5 space-y-3 mb-4">
            <li><strong>Croâ demande :</strong> <em>« Plus je sèche, plus je deviens grand. Plus je bois, plus je deviens tout petit. Qui suis-je ? »</em></li>
            <li><strong>Réponse attendue :</strong> le feu (une bougie, une flamme — toute réponse dans cet esprit est acceptée).</li>
            <li><strong>Énigme de secours, plus facile, pour les plus petits :</strong> <em>« Je suis plein de couleurs, mais je n'ai pas de crayon. J'apparais après la pluie, quand revient le beau rayon. »</em> → l'arc-en-ciel.</li>
          </ul>
          <p className="mb-2"><strong>Bonne réponse :</strong> « CROÂ ! Bravo, petit roux ! » Le crapaud tape du pied sur sa pierre, satisfait comme s'il venait de gagner un concours, et les galets du ruisseau s'alignent d'eux-mêmes pour former un petit pont bien stable.</p>
          <p><strong>Mauvaise réponse (aucun danger) :</strong> une petite vague toute douce vient éclabousser gentiment les pattes du héros (« SPLASH ! »), et Croâ, loin d'être vexé, offre carrément un deuxième indice : « Ça danse, ça réchauffe... et ça a très, très peur de mon ruisseau. » On peut retenter sa chance aussitôt après.</p>
        </ActionBox>

        <h3 className="font-display text-2xl font-bold text-slate-700 mt-10 mb-4">
          Exploration des rives : deux petites découvertes avant de traverser
        </h3>

        <ActionBox title="Les cailloux qui chantent (zone d'enquête, au choix)">
          <p className="mb-2">Le long de la rive, quelques galets plus clairs que les autres semblent vibrer légèrement quand on s'approche.</p>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>Les examiner de près</strong> (Flair, 1D20 + 5, réussite à 11) : en les reniflant, le héros découvre qu'ils sentent très légèrement le miel. Ce sont en réalité d'anciennes pierres à abeilles, abandonnées depuis qu'une ruche voisine a déserté l'endroit. Sans grand effet immédiat, mais un joli détail d'ambiance à raconter — et un indice discret que des abeilles vivent non loin, pour une aventure future.</li>
          </ul>
        </ActionBox>

        <VictoryBox title="La traversée (à lire à voix haute)">
          <p className="italic">"Une à une, les pierres plates remontent doucement du fond de l'eau, toutes luisantes de gouttelettes. Tu sautes de l'une à l'autre : plic, ploc, plic ! Sous tes petites pattes, le ruisseau chatouille et rit tout bas, comme s'il te félicitait à chaque bond. Arrivé sain et sauf sur l'autre rive, tu te retournes : le vieux Croâ agite sa grande patte palmée en guise d'au revoir. « Reviens me voir quand la forêt aura retrouvé ses couleurs, petit roux ! J'aurai inventé une devinette toute neuve, rien que pour toi ! »"</p>
        </VictoryBox>

        <SideQuestBox title="Les têtards de la flaque qui rétrécit">
          <p className="italic mb-3">"Juste après le gué, de toutes petites voix paniquées appellent à l'aide depuis une flaque d'eau qui n'arrête pas de rapetisser au soleil. Une dizaine de têtards minuscules tournent en rond, affolés, dans ce qui leur reste d'eau. « À l'aide ! À l'aide ! On a oublié le chemin du ruisseau, et notre flaque sèche à vue d'œil ! »"</p>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li><strong>Les porter un par un dans une grande feuille remplie d'eau :</strong> 1D20 + Agilité (+4), réussite à 10. En cas d'échec, la feuille penche dangereusement et il faut la rattraper au vol : on relance simplement le jet.</li>
            <li><strong>Creuser une petite rigole jusqu'au ruisseau :</strong> 1D20 + Courage (+3), réussite à 10. Plus physique, mais ça marche tout aussi bien, et d'un coup pour tous les têtards.</li>
          </ul>
          <p><strong>Récompense :</strong> leur maman grenouille, arrivée juste à temps et folle de soulagement, apprend au héros le <strong>Saut de Grenouille</strong> — une technique qui donne <strong>+2</strong> au prochain jet de Bond du Renard tenté dans l'aventure.</p>
        </SideQuestBox>

        <InfoBox title="Note pour le MJ — garder le rythme de l'aventure">
          <p>Après trois chapitres bien remplis (une rencontre douce, un combat, une énigme), c'est le moment idéal pour une vraie pause si vous jouez sur plusieurs séances. Cochez ensemble les chapitres terminés dans le sommaire, comptez les trésors trouvés, et reprenez la prochaine fois avec entrain — l'enfant adorera retrouver exactement où il en était.</p>
        </InfoBox>
      </section>
    </div>
  );
}
