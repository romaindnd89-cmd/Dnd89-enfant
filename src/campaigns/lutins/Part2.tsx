import React from 'react';
import { ReadAloud, CombatBox, ActionBox, InfoBox } from '../../components/StoryBlocks';
import { Chapter } from '../../components/CampaignLayout';
import { AmbianceBox, VictoryBox, SideQuestBox } from '../../components/StoryExtras';

export default function Part2() {
  return (
    <div className="space-y-12">
      {/* ============================================================ */}
      {/* SALLE 4 */}
      {/* ============================================================ */}
      <section>
        <Chapter id="chap4" emoji="🛡️" title="SALLE 4 : LA GALERIE DES ARMURES" />
        <p className="text-slate-500 font-medium mb-8 italic">
          Lieu : le grand escalier et la longue galerie d'armures du premier étage.<br/>
          Ambiance : grandiloquente et un peu bancale, comme un vrai théâtre de chevalerie monté par des enfants.<br/>
          Durée de jeu conseillée : 20 à 30 minutes.
        </p>

        <h3 className="font-display text-2xl font-bold text-slate-700 mt-8 mb-4">
          Scène d'ouverture : l'escalier farceur
        </h3>

        <ReadAloud title="La narration à voix haute :">
          "Vous vous engagez tous sur le grand escalier, un peu impressionnés par sa hauteur et par les portraits qui vous fixent de chaque côté. Puis, exactement au milieu de la montée, sans le moindre avertissement, les marches s'aplatissent brusquement dans un grand « FLOP ! » sonore. L'escalier tout entier devient, en un clin d'œil, un long toboggan de pierre parfaitement lisse !<br/><br/>
          Tout en haut de la galerie, dressées de chaque côté comme des sentinelles immobiles, d'imposantes armures vides montent une garde qui n'a, a priori, jamais été dérangée. L'une d'elles, pourtant, bien plus grande et bien plus bancale que les autres, tient fermement un énorme plumeau à la place d'une épée traditionnelle. Et à y regarder de plus près... cette armure-là semble bel et bien respirer."
        </ReadAloud>

        <AmbianceBox title="Comment jouer l'armure du chevalier Trois-Lutins">
          <p>Une grosse voix caverneuse et solennelle, qui change constamment de ton et de rythme parce que trois lutins différents parlent chacun leur tour sans jamais se coordonner. Elle marche systématiquement en zigzag : celui qui est tout en bas, dans les jambes, ne voit strictement rien de ce qui se passe.</p>
        </AmbianceBox>

        <ActionBox title="D'abord : franchir l'escalier devenu toboggan">
          <p className="mb-2">Avant même d'atteindre l'armure, il faut d'abord redescendre — ou plutôt, glisser jusqu'en bas en gardant un minimum de contrôle.</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Chaque héros lance <strong>1D20 + Agilité</strong> (réussite à 10) pour s'accrocher fermement à la rampe de pierre lisse. L'<strong>Acrobate</strong> peut évidemment utiliser son pouvoir Galipette pour une réussite garantie.</li>
            <li>Un enfant qui a déjà réussi son jet peut tendre la main à un ami en difficulté : celui-ci relance alors son propre dé avec un généreux <strong>+2</strong> de bonus.</li>
            <li>Ceux qui finissent par glisser atterrissent sans mal dans un grand tas de coussins moelleux soigneusement disposés en bas (visiblement prévu par les lutins pour ce genre de mésaventure). L'équipe perd <strong>1 seul Rire au total</strong> pour tout le groupe, pas un par enfant, et tout le monde remonte sans problème par un escalier de secours.</li>
          </ul>
        </ActionBox>

        <InfoBox title="Profil du chevalier Trois-Lutins">
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Apparence :</strong> une vieille armure rouillée, plus haute et plus bancale que les autres, qui titube à chaque pas.</li>
            <li><strong>Le secret :</strong> trois petits lutins empilés à l'intérieur (casque, torse, jambes) jouent les gardiens redoutables.</li>
            <li><strong>Caractère :</strong> théâtral et grandiloquent, vite trahi par des petites voix qui se chamaillent à l'intérieur.</li>
          </ul>
        </InfoBox>

        <ReadAloud title="Ce que dit le chevalier Trois-Lutins, d'une voix terrible et chevrotante :">
          "En haut de l'escalier, la grande armure fait un pas lourd en avant. CLANG. « HALTE ! » dit-elle d'une voix qui se veut terrifiante. « Je suis le chevalier... euh... » Une petite voix souffle précipitamment de l'intérieur : « Trois-Lutins ! » « ...le chevalier Trois-Lutins, voilà, c'est bien ça ! Nul ne passe sans d'abord goûter à mon redoutable PLUMEAU ! » Et elle brandit fièrement son arme à plumes, en titubant dangereusement sur le côté."
        </ReadAloud>

        <CombatBox title="Le combat : le chevalier Trois-Lutins">
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Résistance totale :</strong> il faut <strong>6 touches</strong> pour le faire tomber complètement (seulement <strong>5 touches</strong> si l'équipe ne compte que trois enfants). Un jet réussi à <strong>11 ou plus</strong> compte pour une touche.</li>
            <li><strong>Son attaque, en fin de chaque tour de table :</strong> le plumeau chatouille quelqu'un au hasard. Le MJ lance <strong>1D6</strong>, et sur un 1, 2 ou 3, l'équipe perd <strong>1 Rire</strong> commun.</li>
            <li><strong>Point faible n°1 — les genoux :</strong> un héros qui réussit à passer entre les jambes de l'armure (Agilité, réussite à 10) lui fait perdre totalement l'équilibre : la touche obtenue ce tour-là compte alors <strong>double</strong>.</li>
            <li><strong>Point faible n°2 — la visière :</strong> lui souffler délicatement de la poussière ou du poivre tout près du visage (Malice, réussite à 9) fait éternuer les trois lutins en même temps à l'intérieur : l'armure entière <strong>n'attaque pas</strong> au tour suivant, trop occupée à éternuer.</li>
            <li><strong>Résolution sans combat :</strong> parler directement et gentiment aux lutins cachés dedans (Cœur, réussite à 12) : celui du bas finit toujours par avouer, un peu gêné, qu'il en a franchement assez de porter les deux autres sur son dos depuis des heures. L'armure s'assoit alors d'un coup, dans un grand soupir métallique collectif.</li>
          </ul>
        </CombatBox>

        <VictoryBox title="La chute du chevalier (à lire à voix haute)">
          <p className="italic mb-3">"L'armure vacille dangereusement... penche nettement à gauche... se redresse un instant... penche encore plus fort à droite... et finit par s'écrouler dans un vacarme assourdissant de casseroles et de ferraille entrechoquée. Le casque, détaché sous le choc, roule tranquillement jusqu'à vos pieds dans un dernier tintement. Trois lutins complètement étourdis finissent par sortir, l'un après l'autre, des différents morceaux : l'un du plastron, l'autre d'une jambière, le troisième d'un gant complètement froissé. « On t'avait bien dit que c'était MON tour d'être en haut, cette fois-ci ! » râle l'un des trois en se dépoussiérant. Ils se regardent, vous regardent à leur tour, et finissent tous par éclater de rire ensemble. Au fond du casque renversé, deux pièces dorées tintent joyeusement."</p>
          <p><strong>Récompenses :</strong> <strong>2 pièces en chocolat</strong>. Les trois lutins, finalement très bons joueurs malgré la défaite, offrent généreusement leur fameux <strong>plumeau géant</strong> à l'équipe : utilisé une seule fois dans l'aventure, il permet de chatouiller un obstacle ou un lutin récalcitrant pour réussir automatiquement un jet de <strong>Cœur</strong>, sans avoir besoin de lancer le moindre dé.</p>
        </VictoryBox>

        <SideQuestBox title="Le portrait du roi Pirouette qui cligne de l'œil">
          <p className="italic mb-3">"Sur le mur du fond de la galerie, un grand portrait un peu poussiéreux représente un tout petit roi coiffé d'une couronne beaucoup trop grande pour lui. Si on l'observe attentivement, on jurerait parfois qu'il fait un clin d'œil, puis reprend aussitôt sa pose officielle, parfaitement figée."</p>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li><strong>Lui faire un clin d'œil en retour</strong> (aucun jet nécessaire, juste un geste proposé par un enfant) : le portrait, amusé, se met soudain à glousser silencieusement derrière le cadre, bouche fermée, les épaules secouées de rire.</li>
          </ul>
          <p><strong>Récompense :</strong> ce petit moment, purement gratuit et sans conséquence mécanique, prépare discrètement l'enfant à l'idée que le vrai roi Pirouette, rencontré à la salle 6, sera probablement tout aussi facétieux que son portrait.</p>
        </SideQuestBox>
      </section>

      {/* ============================================================ */}
      {/* SALLE 5 */}
      {/* ============================================================ */}
      <section>
        <Chapter id="chap5" emoji="🪞" title="SALLE 5 : LA SALLE DES MIROIRS" />
        <p className="text-slate-500 font-medium mb-8 italic">
          Lieu : la salle ronde entièrement tapissée de miroirs déformants.<br/>
          Ambiance : étrange et hypnotique, un vrai moment de jeu physique en vrai, debout, tous ensemble.<br/>
          Durée de jeu conseillée : 15 à 25 minutes.
        </p>

        <h3 className="font-display text-2xl font-bold text-slate-700 mt-8 mb-4">
          Scène d'ouverture : le labyrinthe des reflets
        </h3>

        <ReadAloud title="La narration à voix haute :">
          "Vous entrez tous ensemble dans cette curieuse salle ronde, et aussitôt, des centaines de reflets de vous-mêmes vous entourent de partout à la fois, chacun déformé d'une façon différente et plus ridicule que la précédente. La porte de sortie, celle par laquelle vous devriez logiquement continuer votre chemin, se reflète elle aussi, encore et encore, dans tous les miroirs environnants — mais laquelle, parmi toutes ces portes identiques, est la vraie ?<br/><br/>
          Dans un coin, entre deux grands cadres dorés, de superbes chandeliers d'argent se répètent à l'infini dans un jeu de reflets vertigineux. Et puis, soudain, du fond d'un troisième miroir, quelque chose attire votre attention : un petit bonnet à grelot apparaît furtivement, alors qu'aucun de vous n'en porte un pareil."
        </ReadAloud>

        <InfoBox title="Profil de Reflet, le lutin des miroirs">
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Apparence :</strong> un reflet décalé de celui qui lui parle, avec un bonnet à grelot en plus.</li>
            <li><strong>Caractère :</strong> farceur, il répète les gestes des visiteurs avec un léger retard malicieux.</li>
            <li><strong>Sa règle :</strong> il ne révèle le secret de la vraie porte qu'à ceux qui ont joué le jeu jusqu'au bout avec lui.</li>
          </ul>
        </InfoBox>

        <ReadAloud title="Ce que dit Reflet, avec votre propre voix légèrement décalée :">
          "Vous faites tous un pas en avant : dans les miroirs, une centaine d'enfants font exactement un pas en avant, en même temps. Vous levez la main, par curiosité : une centaine de mains se lèvent à l'unisson. Sauf une. Dans le troisième miroir en partant de la gauche, votre propre reflet vous tire soudain la langue, bien que personne n'ait rien fait de tel dans la vraie salle ! Une voix qui ressemble étrangement à la vôtre ricane doucement : « Sauf une... sauf une... Si vous voulez retrouver la vraie porte, faites exactement comme moi. Vraiment exactement. Hi hi ! »"
        </ReadAloud>

        <ActionBox title="Le jeu du miroir (à jouer vraiment, debout, en vrai !)">
          <p className="mb-3">Cette épreuve se joue debout, tous ensemble, pas uniquement avec des dés. Le MJ incarne Reflet et enchaîne <strong>trois gestes de suite</strong> (toucher son nez, tourner sur soi-même, lever un pied, faire une grimace...). Les enfants doivent tous les reproduire ensemble, dans le bon ordre, comme un seul reflet collectif.</p>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li><strong>Manche 1 :</strong> trois gestes, bien lents pour commencer.</li>
            <li><strong>Manche 2 :</strong> quatre gestes, un peu plus rapides.</li>
            <li><strong>Manche 3 :</strong> cette fois, c'est un enfant qui invente la séquence, et c'est Reflet (le MJ) qui doit la reproduire fidèlement. Trompez-vous volontairement de temps en temps : les enfants adorent toujours corriger les adultes qui se trompent.</li>
          </ul>
          <p className="mb-3">Une manche ratée coûte simplement <strong>1 Rire</strong> à l'équipe et se rejoue aussitôt, sans conséquence plus grave. Pour les enfants qui préfèrent nettement les dés aux jeux physiques, chaque manche peut être remplacée par un jet d'<strong>Agilité</strong> collectif, réussite à 10.</p>
          <p><strong>Trouver enfin la vraie porte :</strong> une fois Reflet convaincu par le jeu, il donne volontiers l'indice promis : « La vraie porte est la seule, parmi toutes, qui n'aime pas vraiment qu'on lui souffle dessus. » En soufflant collectivement sur chaque miroir, tous se couvrent aussitôt d'une fine buée... sauf la vraie porte, qui reste parfaitement sèche puisqu'elle est en bois véritable. Un simple jet de <strong>Malice</strong> (réussite à 10) permet aussi de le deviner directement, sans même avoir besoin de l'indice de Reflet.</p>
        </ActionBox>

        <VictoryBox title="La vraie porte apparaît ! (à lire à voix haute)">
          <p className="italic mb-3">"Vous soufflez tous ensemble, un grand coup collectif. Les miroirs se voilent de buée les uns après les autres, comme autant de petites fenêtres embuées par un matin d'hiver. Tous, sauf un seul. La vraie porte est bien là, toute simple au milieu de ce décor étincelant, avec sa poignée discrète en forme de grelot. Dans la buée de l'un des miroirs tout proches, un petit doigt invisible trace soigneusement un bonhomme qui sourit, puis deux pièces bien rondes juste à côté. Et, comme par magie, ces mêmes pièces tombent alors du miroir, pour de bon, directement à vos pieds."</p>
          <p><strong>Récompense :</strong> <strong>2 pièces en chocolat</strong> pour le trésor commun.</p>
        </VictoryBox>

        <SideQuestBox title="Petit Pois, le lutin perdu dans son propre jeu de cache-cache">
          <p className="italic mb-3">"Derrière l'un des plus grands miroirs de la salle, on entend soudain renifler discrètement. En regardant de plus près, vous découvrez un tout jeune lutin, le bonnet complètement de travers, assis par terre, visiblement perdu. « Je... je jouais à cache-cache avec les autres. Mais je me suis tellement bien caché, cette fois, que je ne me retrouve même plus moi-même. »"</p>
          <p className="mb-3"><strong>Petit Pois</strong> (toute petite voix, prise d'un hoquet nerveux dès qu'il a un peu peur) n'ose plus bouger d'un centimètre : tous ses propres reflets, multipliés à l'infini autour de lui, lui font visiblement très peur.</p>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li><strong>Le rassurer avec douceur</strong> (Cœur, réussite à 8) ou simplement lui tendre la main pour traverser ensemble la salle.</li>
            <li><strong>Lui montrer que les reflets peuvent être rigolos</strong> en faisant soi-même des grimaces devant les miroirs déformants (réussite automatique garantie si les enfants le font vraiment, pour de vrai, devant la table).</li>
          </ul>
          <p><strong>Récompense :</strong> rassuré, Petit Pois décide de suivre l'équipe jusqu'à la salle du trésor, et confie un secret en chemin, d'un ton presque solennel pour son petit âge : « Le roi dit toujours, toujours, que le trésor, c'est exactement comme un fou rire : ça ne vaut absolument rien si on le garde tout pour soi. » Retenez bien cette phrase précieuse pour la toute dernière salle : c'est la véritable clé de l'énigme finale.</p>
        </SideQuestBox>
      </section>

      {/* ============================================================ */}
      {/* SALLE 6 */}
      {/* ============================================================ */}
      <section>
        <Chapter id="chap6" emoji="👑" title="SALLE 6 : LE TRÉSOR DU ROI PIROUETTE" />
        <p className="text-slate-500 font-medium mb-8 italic">
          Lieu : la grande salle du trône, bondée de lutins en liesse.<br/>
          Ambiance : le climax joyeux de toute l'aventure, mêlant spectacle, réflexion et émotion.<br/>
          Durée de jeu conseillée : 20 à 30 minutes. C'est le moment où tout ce que l'équipe a appris et récolté prend tout son sens.
        </p>

        <h3 className="font-display text-2xl font-bold text-slate-700 mt-8 mb-4">
          Scène d'ouverture : la salle du trône
        </h3>

        <ReadAloud title="La narration à voix haute :">
          "À vos pieds, posé juste devant le trône royal, un coffre absolument gigantesque attend, cerclé de bandes dorées et fermé par trois énormes serrures parfaitement alignées. Sur chacune d'elles, un mot a été gravé avec soin : <strong>RIRE</strong>, <strong>RUSE</strong>, <strong>PARTAGE</strong>. L'air sent délicieusement le chocolat, très fort, beaucoup plus fort que partout ailleurs dans le château — ça vient visiblement du coffre lui-même.<br/><br/>
          Un brouhaha joyeux et continu emplissait la salle tout entière, fait de rires, d'applaudissements anticipés et de bavardages excités... mais tout s'arrête net, d'un seul coup, dès que vous franchissez le seuil de la salle. Il ne reste alors qu'un seul petit bruit, celui d'un unique grelot : celui, minuscule, accroché à la couronne du roi lui-même."
        </ReadAloud>

        <InfoBox title="Profil du roi Pirouette Iᵉʳ">
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Apparence :</strong> minuscule même pour un lutin, voix de théâtre et gestes totalement disproportionnés.</li>
            <li><strong>Caractère :</strong> il joue au roi sérieux et solennel, et craque en sourire après dix secondes à peine.</li>
            <li><strong>Son vrai secret :</strong> il aime sincèrement les enfants qui savent s'entraider, bien plus que ceux qui veulent seulement gagner.</li>
          </ul>
        </InfoBox>

        <AmbianceBox title="Comment jouer les lutins du public">
          <p>Ils applaudissent avec enthousiasme, poussent des « Oooh ! » et des « Aaah ! » bien sentis à chaque étape, et parfois, de façon complètement malicieuse, soufflent exprès des réponses fausses pour embrouiller gentiment tout le monde — jouez-les avec beaucoup d'énergie et de théâtralité.</p>
        </AmbianceBox>

        <ReadAloud title="Ce que dit le roi Pirouette, debout sur son trône de coussins :">
          "Le petit roi se lève d'un bond sur son trône, manque de perdre l'équilibre sur les coussins moelleux, se rattrape de justesse à la dernière seconde. « Chasseurs de trésor ! Vous avez franchi ma grille, survécu à ma cuisine en folie, apprivoisé mes livres volants, renversé mon chevalier et trompé mes miroirs les plus retors. Bravo, vraiment, bravo ! Mais mon coffre a trois serrures, et figurez-vous qu'aucune clé au monde, même la plus magique, ne peut les ouvrir. Il faut, pour chacune, trouver trois choses qu'on ne peut absolument pas mettre dans sa poche. Êtes-vous prêts, mes braves ? » Tous les lutins du public, à l'unisson parfait, retiennent leur souffle d'un même mouvement théâtral."
        </ReadAloud>

        <ActionBox title="Première serrure : RIRE">
          <p className="mb-2">Il faut faire rire le roi lui-même, alors qu'il se retient de toutes ses forces, le visage volontairement fermé. Chaque enfant tente sa chance à tour de rôle devant le public conquis d'avance : une grimace, une blague, une petite danse improvisée, une imitation farfelue.</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Si l'enfant le fait <strong>pour de vrai</strong>, devant tout le monde, c'est toujours considéré comme réussi d'office, sans aucun jet nécessaire. Sinon : jet de <strong>Cœur</strong>, réussite à 10.</li>
            <li>La serrure s'ouvre dès que <strong>la moitié de l'équipe</strong> a réussi sa tentative. Le plumeau géant, s'il reste disponible, compte automatiquement pour une réussite garantie.</li>
          </ul>
        </ActionBox>

        <ActionBox title="Deuxième serrure : RUSE">
          <ul className="list-disc pl-5 space-y-3">
            <li><strong>Le roi demande, un sourire malicieux au coin des lèvres :</strong> <em>« Plus on m'en donne, plus j'en ai encore. Plus je le garde jalousement pour moi tout seul, moins j'en ai au final. Les lutins en ont toujours plein les joues, croyez-moi. Qu'est-ce que c'est donc, à votre avis ? »</em></li>
            <li><strong>Réponse attendue :</strong> le rire (on accepte volontiers aussi la joie, le bonheur, les sourires, l'amitié, et toute réponse qui tourne autour de cette idée).</li>
            <li><strong>Si l'équipe sèche complètement :</strong> un jet de <strong>Malice</strong> collectif, réussite à 10, ou alors Petit Pois, s'il a été secouru dans la salle précédente, souffle discrètement la réponse en faisant semblant de tousser bruyamment.</li>
          </ul>
        </ActionBox>

        <ActionBox title="Troisième serrure : PARTAGE">
          <p className="mb-3">Le roi désigne solennellement, d'un geste large, le petit bol où l'équipe a soigneusement rangé toutes ses pièces en chocolat gagnées jusqu'ici. Lisez ce passage lentement, en laissant le silence s'installer un peu avant la question finale :</p>
          <p className="italic mb-3">"« Dernière serrure, la plus importante de toutes. Vous avez gagné de bien belles pièces en chocolat tout au long de votre parcours dans ce château. Elles sont à vous, et vous les avez amplement méritées, croyez-moi. Mais regardez bien mes lutins, tout autour de vous : ils en ont caché partout dans ce château, pour vous, et il ne leur en reste aujourd'hui plus une seule pour eux-mêmes. Alors voici ma toute dernière question, et c'est à vous d'y répondre, tous ensemble : ce trésor que vous avez amassé... le gardez-vous jalousement pour vous, ou choisissez-vous de le partager ? »"</p>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Laissez vraiment les enfants en discuter librement entre eux.</strong> N'intervenez surtout pas tout de suite, même si la discussion prend un peu de temps : c'est, de loin, le plus beau moment de toute la partie.</li>
            <li><strong>S'ils choisissent de partager</strong> (même symboliquement, avec une seule pièce) : la troisième serrure s'ouvre alors d'elle-même, dans un grand déclic satisfait. Passez directement à la scène de victoire ci-dessous.</li>
            <li><strong>S'ils préfèrent, dans un premier temps, tout garder pour eux :</strong> rien de bien grave ne se produit. La serrure reste simplement fermée, et tous les lutins du public font « Oooh... » d'un même souffle un peu déçu, sans aucun reproche appuyé. Petit Pois (ou Grelot, selon qui est présent) tire gentiment un héros par la manche et répète, mot pour mot, la phrase du roi : « Un trésor, c'est comme un fou rire, tu sais : ça ne vaut rien du tout si on le garde pour soi tout seul. » Laissez-leur alors, sans forcer, une toute seconde chance de reconsidérer la question.</li>
          </ul>
        </ActionBox>

        <VictoryBox title="Le coffre s'ouvre enfin ! (à lire à voix haute, lentement)">
          <p className="italic mb-3">"CLAC. CLAC. CLAC. Les trois grosses serrures tombent l'une après l'autre dans un bruit mat et définitif. Le couvercle du coffre se soulève tout seul dans un grand souffle, et une lumière chaude et dorée inonde instantanément toute la salle du trône. Le coffre est rempli à ras bord de pièces en chocolat, plus qu'aucun d'entre vous n'en a jamais vu de toute sa vie ! Et voici le plus beau tour de magie de tous les lutins du château : chaque fois que quelqu'un, dans la salle, en offre généreusement une à quelqu'un d'autre, deux nouvelles apparaissent aussitôt à la place, comme par enchantement.<br/><br/>
          Les lutins bondissent tous en même temps de leurs gradins, lancent leurs bonnets à grelots bien haut dans les airs, tentent même de vous hisser sur leurs épaules — enfin, ils essaient très courageusement, sans vraiment y parvenir, ce qui déclenche un fou rire général absolument irrésistible. Le roi Pirouette, radieux, descend solennellement de son trône et vient poser délicatement sa propre couronne à grelot sur la tête du plus jeune membre de l'équipe. « Vous êtes venus chercher un trésor, mes braves, » dit-il d'une voix soudain beaucoup plus douce que son habituel ton théâtral, « et vous repartez avec cent nouveaux amis. C'est, sans l'ombre d'un doute, la meilleure farce que j'aie jamais eu la chance de voir réussir dans ce château. »"</p>
          <p><strong>Récompense finale :</strong> le MJ sort généreusement toutes les pièces en chocolat restantes du sac de jeu. L'équipe les <strong>partage équitablement en parts égales</strong>, et met d'un commun accord une petite part de côté « pour les lutins » — c'est-à-dire, en pratique, pour le MJ qui a animé toute la partie.</p>
        </VictoryBox>

        <InfoBox title="Le cœur de l'histoire — à dire simplement, sans trop insister">
          <p>La leçon tient en une seule phrase, et les enfants la trouvent le plus souvent tout seuls, sans qu'on ait besoin de l'expliquer longuement : <strong>un trésor grandit vraiment quand on choisit de le partager.</strong> Félicitez chaleureusement l'équipe tout entière plutôt qu'un seul héros en particulier — c'est tout le sens de cette dernière épreuve.</p>
        </InfoBox>
      </section>
    </div>
  );
}
