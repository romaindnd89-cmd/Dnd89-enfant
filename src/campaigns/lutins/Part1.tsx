import React from 'react';
import { ReadAloud, CombatBox, ActionBox, InfoBox } from '../../components/StoryBlocks';
import { Chapter } from '../../components/CampaignLayout';
import { AmbianceBox, VictoryBox, SideQuestBox } from '../../components/StoryExtras';

export default function Part1() {
  return (
    <div className="space-y-12">
      {/* ============================================================ */}
      {/* SALLE 1 */}
      {/* ============================================================ */}
      <section>
        <Chapter id="chap1" emoji="🚪" title="SALLE 1 : LA GRILLE QUI CHATOUILLE" />
        <p className="text-slate-500 font-medium mb-8 italic">
          Lieu : l'entrée fortifiée du château de Chantefarce.<br/>
          Ambiance : fête foraine un peu décatie, pleine de bonne humeur cachée derrière des airs de mystère.<br/>
          Durée de jeu conseillée : 10 à 15 minutes. C'est la salle d'ouverture : installez bien le ton léger de toute l'aventure.
        </p>

        <h3 className="font-display text-2xl font-bold text-slate-700 mt-8 mb-4">
          Scène d'ouverture : l'entrée du château
        </h3>

        <ReadAloud title="La narration à voix haute :">
          "Vous voilà tous réunis devant l'immense grille du château, celle-là même dont parlait l'invitation en lettres tordues. Ses barreaux de fer forgé dessinent des visages grimaçants qui vous tirent la langue chaque fois que le vent souffle un peu plus fort, comme animés d'une vie propre. Au milieu, trônant fièrement, une énorme serrure a été sculptée en forme de grande bouche souriante, toutes dents dehors.<br/><br/>
          Dès que l'un d'entre vous ose s'approcher pour la toucher, la grille entière se met soudain à frémir, puis à glousser, et enfin à carrément pouffer de rire, dans un grand bruit métallique de ferraille secouée. Elle vous chatouille littéralement, rien qu'en vous voyant approcher ! Au-dessus de vos têtes, perchés dans les douves et sur les créneaux, de petits bonnets rouges à grelots apparaissent furtivement entre les pierres, puis disparaissent aussitôt dans un concert discret de rires étouffés et de « chut, chut, ils vont nous voir ! »."
        </ReadAloud>

        <AmbianceBox title="Comment jouer Grelot">
          <p>Petite voix pointue et joyeuse, il parle en rimes quand il y pense, et oublie complètement d'en faire le reste du temps, sans aucune logique apparente.</p>
        </AmbianceBox>

        <InfoBox title="Profil de Grelot, le lutin portier">
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Apparence :</strong> pas plus haut qu'une botte, énorme bonnet rouge à pompon.</li>
            <li><strong>Caractère :</strong> terriblement fier de son poste, et incapable de garder le moindre secret — il adore trop parler.</li>
            <li><strong>Son faible :</strong> un compliment sur son sens de l'accueil, et il devient totalement complaisant.</li>
          </ul>
        </InfoBox>

        <ReadAloud title="Ce que dit Grelot, en surgissant entre deux barreaux :">
          "Un bonnet rouge surgit brusquement entre deux barreaux, suivi d'un visage tout rond aux joues roses. « Halte-là, les grands dadais ! » lance le petit lutin avec un sérieux tout à fait théâtral. « Je suis Grelot, portier officiel et incontesté de ce château depuis — attendez, je compte — depuis très, très longtemps ! Pour entrer, c'est facile comme tout, foi de lutin : il faut trouver la clé, et la clé, figurez-vous, c'est une réponse ! Si vous vous trompez, ma grille vous chatouille un bon coup. Si vous trouvez juste... elle vous chatouille quand même, hein, mais gentiment cette fois. Hi hi ! »"
        </ReadAloud>

        <ActionBox title="L'épreuve collective : la devinette de Grelot">
          <p className="mb-3">Toute l'équipe réfléchit ensemble, à voix haute, en se coupant la parole si besoin — c'est exactement le moment d'installer l'esprit d'entraide qui va porter toute l'aventure. Rappelez bien que chaque enfant peut proposer une idée, même la plus farfelue.</p>
          <ul className="list-disc pl-5 space-y-3 mb-3">
            <li><strong>Grelot demande, en se grattant pensivement le menton :</strong> <em>« J'ai des dents mais je ne mange jamais de gâteau. J'ai un trou mais je ne pleure jamais. Je tourne sans avoir le tournis. Et sans moi, vous restez tous dehors, bien fait pour vous ! Qui suis-je ? »</em></li>
            <li><strong>Réponse attendue :</strong> une clé.</li>
            <li><strong>Mauvaise réponse :</strong> la grille chatouille joyeusement le héros le plus proche. L'équipe perd <strong>1 Rire</strong> commun, et Grelot, loin d'être méchant, donne aussitôt un indice tout bête : « Ça se range dans une poche... ou carrément sous un paillasson, si on est tête en l'air ! »</li>
            <li><strong>S'ils sèchent complètement :</strong> un jet de <strong>Malice</strong> (1D20, +3 pour le Magicien), réussite à 10 : Grelot, trop content de parler, laisse carrément échapper la réponse sans s'en rendre compte, puis se couvre précipitamment la bouche des deux mains.</li>
          </ul>
        </ActionBox>

        <ActionBox title="Le piège caché du seau de confettis">
          <p className="mb-2">Un gros seau rempli de confettis multicolores est en équilibre précaire tout en haut de la grille, suspendu par une ficelle usée, bien visible si on lève le nez au bon moment.</p>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Le repérer à temps</strong> (l'Éclaireur peut utiliser son pouvoir Œil de Lynx pour une réussite automatique, sinon jet de Malice ou de Flair collectif, réussite à 10) : le groupe esquive le piège en riant d'avance.</li>
            <li><strong>Si personne ne le repère, ou si on préfère foncer sans réfléchir :</strong> le premier enfant qui pousse la grille déclenche le mécanisme. <em>1D20 + Agilité</em> (réussite à 10) pour esquiver d'un bond de côté. En cas d'échec, celui ou celle qui est touché ressemble soudain à un gâteau d'anniversaire ambulant, couvert de confettis des pieds à la tête — l'équipe perd <strong>1 Rire</strong>, mais tout le monde, y compris la victime, finit généralement par éclater de rire malgré elle.</li>
          </ul>
        </ActionBox>

        <VictoryBox title="La grille s'ouvre ! (à lire à voix haute)">
          <p className="italic mb-3">"« Une clé ! Bravo, bravo, bien joué ! » Grelot tape des deux mains avec un enthousiasme débordant, et la grosse serrure en forme de bouche éclate elle-même de rire, montrant toutes ses dents sculptées dans un grand concert de grincements joyeux. La grille s'ouvre toute seule, lentement, en grinçant un petit air de fanfare bancale, comme si elle jouait exprès une musique d'entrée triomphale, juste pour vous.<br/><br/>
          Grelot ôte précipitamment son énorme bonnet pour saluer — et deux pièces dorées en tombent directement à vos pieds avec un petit tintement. « C'est pour vous, cadeau de la maison ! Le roi a dit : une salle, des pièces, c'est la règle. Mais chut, surtout, ne répétez à personne qu'il y en a six, des salles, hein... Oh, zut, je viens de le dire moi-même. Doublement zut. »"</p>
          <p><strong>Récompense :</strong> <strong>2 pièces en chocolat</strong> pour le trésor commun de l'équipe, à déposer tout de suite dans le bol prévu à cet effet.</p>
        </VictoryBox>

        <SideQuestBox title="Le chat de garde qui dort sur l'interrupteur des douves">
          <p className="italic mb-3">"Juste à côté de la grille, à moitié caché dans une niche de pierre, un gros matou roux ronfle paisiblement, une patte posée mollement sur un étrange levier en bois sculpté en forme de poisson. Une petite plaque, à moitié effacée, indique : « Pont-levis des douves — NE PAS actionner sans la permission du roi. »"</p>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Il n'y a en réalité rien d'obligatoire ici : c'est un détail d'ambiance amusant pour les enfants curieux. S'ils insistent pour actionner le levier malgré l'avertissement (<em>Malice, réussite à 12</em>), le pont-levis s'abaisse dans un grand fracas... sur des douves complètement vides et sèches depuis des années, remplies seulement de pâquerettes. Le chat se réveille en sursaut, bâille longuement, puis se rendort aussitôt, parfaitement indifférent.</li>
          </ul>
        </SideQuestBox>
      </section>

      {/* ============================================================ */}
      {/* SALLE 2 */}
      {/* ============================================================ */}
      <section>
        <Chapter id="chap2" emoji="🥧" title="SALLE 2 : LA CUISINE EN FOLIE" />
        <p className="text-slate-500 font-medium mb-8 italic">
          Lieu : les grandes cuisines du château, en pleine effervescence.<br/>
          Ambiance : bataille de farine joyeuse et bruyante, à jouer comme une vraie scène de film comique.<br/>
          Durée de jeu conseillée : 20 à 30 minutes. Premier vrai affrontement de l'aventure, pensé pour être chaotique et drôle.
        </p>

        <h3 className="font-display text-2xl font-bold text-slate-700 mt-8 mb-4">
          Scène d'ouverture : la bataille de farine
        </h3>

        <ReadAloud title="La narration à voix haute :">
          "Au centre de la pièce trône un gâteau à trois étages, absolument gigantesque, décoré de bougies multicolores qui n'ont jamais été allumées. Tout autour, retranchés derrière de véritables barricades de sacs de sucre et de farine, les lutins marmitons ont préparé leurs munitions avec un sérieux militaire parfaitement comique : des boules de farine bien compactées, et des tartes à la crème entières, prêtes à voler.<br/><br/>
          Un nuage de farine flotte en permanence dans la lumière poussiéreuse des fenêtres, et le sol est constellé de petites empreintes de pieds blancs qui vont dans tous les sens, preuve d'une agitation sans fin. Au-dessus de chaque barricade, de petites louches en bois dépassent comme des drapeaux de guerre miniatures. Tout au fond, une lutine à la toque gigantesque, bien plus grande que les autres marmitons réunis, surveille le champ de bataille d'un œil d'aigle."
        </ReadAloud>

        <InfoBox title="Profil de Dame Louche, cheffe cuisinière du château">
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Apparence :</strong> imposante, toque blanche géante, énorme louche brandie comme une épée.</li>
            <li><strong>Voix :</strong> grosse voix autoritaire de général en chef — un sérieux comiquement disproportionné pour une bataille de farine.</li>
            <li><strong>Son point faible :</strong> un compliment sincère sur sa cuisine, et toute son attitude change instantanément.</li>
          </ul>
        </InfoBox>

        <ReadAloud title="Ce que dit Dame Louche, en surgissant d'une barricade :">
          "« Intrus dans MA cuisine ! » tonne la lutine en se redressant de toute sa hauteur. « Personne, mais alors personne, ne touche à mon gâteau sans d'abord passer par mes valeureux marmitons ! Marmitons ! Tartes en position de tir ! » Derrière les sacs de sucre, une dizaine de petits bras se lèvent d'un même mouvement bien entraîné, une tarte à la crème brandie dans chaque main, prêts à faire feu à son signal."
        </ReadAloud>

        <h3 className="font-display text-2xl font-bold text-slate-700 mt-10 mb-4">
          Exploration avant la bataille : la réserve secrète
        </h3>
        <ActionBox title="Repérer la réserve de munitions de secours (optionnel)">
          <p className="mb-2">Avant que la bataille ne s'engage pour de bon, un enfant attentif peut remarquer, sur une étagère haute, un pot de confiture particulièrement collant.</p>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>L'attraper discrètement</strong> (Agilité, réussite à 11) : l'équipe dispose désormais d'une « arme spéciale » pour la bataille : un lancer de confiture collante peut, une fois pendant le combat, empêcher complètement un marmiton d'attaquer pendant un tour entier (il est trop occupé à essayer de se décoller les doigts).</li>
          </ul>
        </ActionBox>

        <CombatBox title="La bataille de farine : les lutins marmitons et Dame Louche">
          <p className="font-bold mb-2">Les Marmitons (un par enfant présent à la table) et Dame Louche</p>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Pour mettre un marmiton hors jeu :</strong> il faut le toucher <strong>2 fois</strong> (Dame Louche, elle, en demande <strong>3</strong>). Chaque jet réussi à <strong>10 ou plus</strong> compte pour une touche.</li>
            <li><strong>Leur attaque, en fin de chaque tour de table :</strong> le MJ lance <strong>1D6</strong>. Sur un résultat de 1 ou 2, une tarte fait mouche sur un héros au hasard : l'équipe perd <strong>1 Rire</strong> commun.</li>
            <li><strong>Règle spéciale du terrain — le sol glissant :</strong> toute la cuisine est recouverte de farine renversée. Un enfant qui rate un jet d'Agilité (pas seulement d'attaque) glisse comiquement et atterrit sur les fesses, sans aucun dégât, mais sans pouvoir agir ce tour-ci.</li>
          </ul>
          <p className="font-bold mt-3 mb-1">Ce que les héros peuvent faire, au choix, à chaque tour :</p>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>Lancer une boule de farine</strong> (Agilité).</li>
            <li><strong>S'abriter derrière un couvercle de marmite géant</strong> pour protéger un ami (Courage) : le prochain 1D6 du MJ est entièrement annulé.</li>
            <li><strong>Jouer un bon tour</strong> : faire glisser un marmiton sur une flaque de beurre fondu, ou lui retourner sa propre tarte sur la tête (Malice).</li>
            <li><strong>Le complimenter ou le faire rire</strong> (Cœur) : une seule réussite suffit à le faire sortir de la bataille, écroulé de rire, totalement inoffensif.</li>
          </ul>
        </CombatBox>

        <VictoryBox title="La fin de la bataille (à lire à voix haute)">
          <p className="italic mb-3">"Le dernier marmiton encore debout finit par s'asseoir par terre, complètement plié de rire, de la crème jusqu'aux oreilles et de la farine jusque dans les sourcils. Dame Louche lève solennellement sa grande louche pour un dernier coup théâtral... puis, finalement, la baisse lentement, et un large sourire fend son visage encore crispé de bataille. « Bien joué, les terreurs. Ça faisait des lunes qu'on ne s'était pas autant amusés, par ici. » Elle découpe alors le grand gâteau en parts parfaitement égales : une pour chaque héros, une pour chaque marmiton fatigué. Et dans certaines parts, quelque chose brille étrangement au milieu de la crème."</p>
          <p><strong>Récompenses :</strong> <strong>3 pièces en chocolat</strong> cachées astucieusement dans le gâteau, et l'équipe entière récupère <strong>2 Rires</strong> grâce à cette joyeuse réconciliation sucrée.</p>
          <p><strong>Si l'équipe tombe à 0 Rire pendant la bataille :</strong> tout le monde se retrouve blanc de farine des pieds à la tête, marmitons compris, ce qui est en soi assez drôle pour que Dame Louche déclare spontanément un match nul de bon cœur. Elle exige simplement une grimace de groupe collective avant de rendre généreusement <strong>3 Rires</strong> à l'équipe. Le gâteau est partagé exactement pareil.</p>
        </VictoryBox>

        <SideQuestBox title="Monsieur Chaussette, le gros chat endormi sur le four">
          <p className="italic mb-3">"Sur le rebord encore tiède du grand four, un gros chat gris dort paisiblement, roulé en boule parfaite. Sous l'une de ses pattes repliées, on devine, en regardant bien, le reflet discret d'une pièce dorée."</p>
          <p className="mb-3"><strong>Monsieur Chaussette</strong> ne parle évidemment pas — c'est un chat, après tout — mais il bâille longuement, s'étire avec une lenteur royale, et ronronne très fort dès qu'on s'adresse à lui avec douceur. Pour récupérer discrètement la pièce sans le fâcher ni le réveiller tout à fait :</p>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li><strong>Le gratter délicatement derrière l'oreille</strong> jusqu'à ce qu'il se retourne de lui-même (Cœur, réussite à 10). L'Ami des bêtes réussit ici automatiquement, quel que soit le jet.</li>
            <li><strong>Glisser la patte tout doucement</strong> sous sa patte à lui, millimètre par millimètre (Agilité, réussite à 12).</li>
            <li><strong>L'attirer plus loin avec un petit bol de crème</strong> chipée discrètement sur le gâteau (Malice, réussite à 8).</li>
          </ul>
          <p><strong>Récompense :</strong> <strong>1 pièce en chocolat</strong> de plus pour le trésor commun. En cas d'échec, le chat s'en va dignement, sans se presser, en emportant la pièce entre ses dents... avant de la laisser tomber sans façon juste devant la porte, parce qu'un chat, aussi malicieux soit-il, ne mange décidément pas de chocolat.</p>
        </SideQuestBox>
      </section>

      {/* ============================================================ */}
      {/* SALLE 3 */}
      {/* ============================================================ */}
      <section>
        <Chapter id="chap3" emoji="📚" title="SALLE 3 : LA BIBLIOTHÈQUE DES LIVRES VOLANTS" />
        <p className="text-slate-500 font-medium mb-8 italic">
          Lieu : la grande bibliothèque ronde du château, sous une coupole de verre.<br/>
          Ambiance : feutrée et un peu magique, avec juste ce qu'il faut de loufoquerie pour contrebalancer le calme.<br/>
          Durée de jeu conseillée : 15 à 25 minutes, selon l'énergie comique déployée par les enfants.
        </p>

        <h3 className="font-display text-2xl font-bold text-slate-700 mt-8 mb-4">
          Scène d'ouverture : des livres qui battent vraiment des ailes
        </h3>

        <ReadAloud title="La narration à voix haute :">
          "Vous poussez la grande porte sculptée de la bibliothèque, et un froissement général s'élève aussitôt dans la pièce : des dizaines de petits livres de poche s'envolent en escadrille désordonnée, comme un nuage d'oiseaux de papier affolés par votre arrivée. Au-dessus, les gros dictionnaires, bien plus lourds, planent beaucoup plus lentement, avec une majesté un peu pataude, comme de grosses oies un peu fatiguées.<br/><br/>
          Tout en haut, juste sous la coupole de verre qui laisse entrer une lumière poussiéreuse et dorée, le plus imposant de tous les ouvrages de la bibliothèque tourne en rond sans jamais se poser : c'est le Grand Livre des Blagues en personne, reconnaissable entre mille à sa reliure dorée gravée de petits personnages hilares. Entre ses pages entrouvertes qui battent doucement l'air, on devine deux pièces dorées qui servent, visiblement, de marque-pages depuis des années."
        </ReadAloud>

        <InfoBox title="Profil de Maître Parchemin, le vieux bibliothécaire">
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Apparence :</strong> très âgé, barbe si longue qu'elle traîne au sol.</li>
            <li><strong>Caractère :</strong> sourd comme un pot, obsédé par le silence — alors qu'il est lui-même le plus bruyant du château.</li>
            <li><strong>Ses quiproquos :</strong> il comprend tout de travers (« un trésor ? » il propose de l'eau) — improvisez-en librement.</li>
          </ul>
        </InfoBox>

        <ReadAloud title="Ce que dit Maître Parchemin, un doigt sur la bouche :">
          "Un vieux lutin descend lentement d'une échelle à roulettes, un doigt levé sur ses lèvres ridées. « CHUUUT ! » crie-t-il à tue-tête, de toutes ses forces, apparemment incapable de voir la contradiction. « Ici, on ne fait pas de bruit, jeunes gens ! Vous voulez le Grand Livre des Blagues, c'est bien ça ? Il est farouche comme un chat sauvage, celui-là. Il ne se pose jamais que si on l'apprivoise correctement. Et il ne s'ouvre que si on lui raconte quelque chose de véritablement drôle. Bonne chance, les jeunes gens. Comment ? Non, je n'ai pas dit bonne chasse, voyons, quelle drôle d'idée ! »"
        </ReadAloud>

        <ActionBox title="L'épreuve d'équipe : attraper le Grand Livre des Blagues">
          <p className="mb-3">C'est un défi collectif qui se joue en plusieurs manches : l'équipe doit obtenir <strong>3 réussites avant d'accumuler 3 échecs</strong>. Chaque enfant propose une action différente, à tour de rôle, réussite à 10.</p>
          <ul className="list-disc pl-5 space-y-2 mb-3">
            <li><strong>Faire la courte échelle</strong> à un ami, ou porter quelqu'un sur ses épaules pour atteindre plus haut (Courage).</li>
            <li><strong>Grimper agilement aux étagères</strong> ou sauter d'une échelle roulante à l'autre en plein mouvement (Agilité).</li>
            <li><strong>Appâter le livre</strong> avec un très beau marque-page tout neuf, ou bricoler un filet improvisé avec un vieux rideau poussiéreux (Malice).</li>
            <li><strong>Chanter une berceuse</strong> pour apaiser les livres affolés, ou simplement leur parler très gentiment, comme à de vrais êtres vivants (Cœur).</li>
          </ul>
          <p className="mb-3"><strong>À chaque échec de la manche :</strong> une petite nuée de livres facétieux vient chatouiller les héros avec leurs pages en plein vol. L'équipe perd <strong>1 Rire</strong> commun à chaque fois, mais rien de plus grave.</p>
          <p><strong>Pour ouvrir le livre une fois attrapé (pour de vrai, cette fois !) :</strong> chaque enfant, à tour de rôle, doit raconter une vraie blague, faire une grimace mémorable ou imiter un animal de son choix. Dès que quelqu'un autour de la table éclate de rire — n'importe qui, même un adulte qui regarde — le livre s'ouvre tout seul dans un grand frisson de pages.</p>
        </ActionBox>

        <SideQuestBox title="La petite souris bibliothécaire et son dictionnaire perdu">
          <p className="italic mb-3">"Tout en bas d'une étagère, une minuscule souris grise, des lunettes de lecture sur le bout du nez, tourne en rond d'un air affolé parmi des piles de livres éparpillés. « Mon dictionnaire des synonymes ! Il s'est envolé avec les autres, et sans lui, je ne sais plus du tout comment dire autrement 'catastrophe' ! »"</p>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li><strong>Retrouver le bon livre</strong> parmi la nuée qui vole encore dans la pièce (Flair, réussite à 11, en reniflant l'encre particulière de ce dictionnaire précis).</li>
          </ul>
          <p><strong>Récompense :</strong> ravie, la petite souris griffonne sur un bout de papier une information précieuse glanée dans de vieux almanachs du château : « Au fond de la Galerie des Armures, méfiez-vous du grand escalier. Il n'aime pas qu'on le descende sans prévenir, si vous voyez ce que je veux dire. » L'équipe gagne ainsi un indice utile et un petit <strong>bonus de +2</strong> au prochain jet d'Agilité tenté dans la salle suivante.</p>
        </SideQuestBox>

        <VictoryBox title="Le livre s'ouvre enfin ! (à lire à voix haute)">
          <p className="italic mb-3">"Le Grand Livre des Blagues se pose enfin, tout doucement, sur les genoux tendus de l'équipe, encore tiède d'avoir tant volé, et se met à ronronner comme un gros chat satisfait. Il s'ouvre d'un coup dans un grand éclat de rire sonore qui semble venir du papier lui-même, et les deux pièces dorées glissent gentiment entre ses pages pour tomber dans vos mains. Sur la toute première page, quelqu'un a écrit autrefois, à la plume et d'une écriture tremblante : « Qu'est-ce qui est jaune et qui attend patiemment ? » Maître Parchemin, qui vous a suivis sans se presser, se penche par-dessus votre épaule : « Comment ? Un jongleur de dents, dites-vous ? Quelle drôle d'idée, vraiment ! » Et tous les autres livres de la bibliothèque, comme pris d'un fou rire collectif et irrépressible, se mettent à rire en chœur avec vous."</p>
          <p><strong>Récompense :</strong> <strong>2 pièces en chocolat</strong> pour le trésor commun. (La vraie réponse de la blague, pour ceux qui se posent la question : Jonathan. Les lutins la trouvent absolument hilarante, sans qu'on sache vraiment pourquoi.)</p>
        </VictoryBox>

        <InfoBox title="Note pour le MJ — la pause de la mi-temps">
          <p>Vous êtes exactement à la moitié de l'aventure. Si les enfants commencent à s'agiter ou à fatiguer un peu, c'est le moment idéal pour une vraie pause : comptez ensemble, à voix haute, les pièces déjà réunies dans le trésor de l'équipe, et cochez les salles terminées dans le sommaire pour marquer le coup avant de repartir à l'assaut des trois dernières salles.</p>
        </InfoBox>
      </section>
    </div>
  );
}
