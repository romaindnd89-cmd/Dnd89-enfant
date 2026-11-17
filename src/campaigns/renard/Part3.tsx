import React from 'react';
import { ReadAloud, CombatBox, ActionBox, InfoBox } from '../../components/StoryBlocks';
import { Chapter } from '../../components/CampaignLayout';
import { AmbianceBox, VictoryBox, SideQuestBox } from '../../components/StoryExtras';

export default function Part3() {
  return (
    <div className="space-y-12">
      {/* ============================================================ */}
      {/* CHAPITRE 7 */}
      {/* ============================================================ */}
      <section>
        <Chapter id="chap7" emoji="🎵" title="CHAPITRE 7 : LA GROTTE AUX ÉCHOS (Le Gland de la Chanson)" />
        <p className="text-slate-500 font-medium mb-8 italic">
          Lieu : la Grotte aux Échos, nichée entre deux rochers moussus au fond du vallon.<br/>
          Ambiance : magique et sonore, un peu solennelle — c'est le chapitre de la musique retrouvée.<br/>
          Durée de jeu conseillée : 20 à 30 minutes, selon le temps passé sur le jeu de mémoire.
        </p>

        <h3 className="font-display text-2xl font-bold text-slate-700 mt-8 mb-4">
          Scène d'ouverture : la caverne qui répète tout ce qu'on lui dit
        </h3>
        <p className="mb-4 text-slate-700">
          À l'intérieur de la grotte, chaque son se répète, encore et encore, de plus en plus doucement, comme si la pierre elle-même n'arrivait pas à se décider à laisser partir les bruits une bonne fois pour toutes.
        </p>

        <ReadAloud title="La narration à voix haute :">
          "Tu avances de quelques pas et dis « bonjour » presque pour tester l'endroit. La grotte te répond aussitôt : « bonjour... bonjour... bonjour... » de plus en plus bas, comme une vague de voix qui s'éloigne dans le noir. Lumi glousse de surprise et laisse échapper un petit « hiii ! » que la caverne lui renvoie aussitôt en cascade, ce qui la fait rire encore plus fort.<br/><br/>
          Les parois sont couvertes de stalactites alignées, hautes et fines comme les tuyaux d'un gigantesque orgue de pierre. Des flaques d'eau parfaitement immobiles reflètent la faible lumière de Lumi comme de petits miroirs noirs. Et là, tout au fond, trois énormes cristaux colorés — un bleu profond, un jaune éclatant, un rouge sombre — sont les seules vraies couleurs de toute la grotte, peut-être même de toute la forêt à cet instant précis.<br/><br/>
          Entre eux, posé sur un rocher plat comme sur un petit piédestal, le Gland de la Chanson scintille doucement, presque timidement, comme s'il attendait patiemment qu'on vienne le chercher depuis des années."
        </ReadAloud>

        <AmbianceBox title="Pour planter le décor de la grotte">
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Ce qu'on voit :</strong> des stalactites alignées comme les tuyaux d'un orgue, des flaques lisses comme des miroirs, et les trois cristaux, seules couleurs de toute la grotte.</li>
            <li><strong>Ce qu'on entend :</strong> chaque bruit revient en écho, trois fois, de plus en plus doucement. Des gouttes tombent en rythme : ploc… ploc-ploc… ploc, comme une horloge un peu détraquée.</li>
            <li><strong>Ce qu'on sent :</strong> la pierre froide et l'eau pure, sans aucune autre odeur — c'est presque étrange après tout ce qu'on a senti dans la forêt.</li>
            <li><strong>Comment le jouer :</strong> répétez systématiquement la fin de vos propres phrases en écho, de plus en plus bas (« Bienvenue… venue… nue… »). Invitez l'enfant à crier son propre nom pour entendre l'écho lui répondre : c'est presque toujours un grand moment de la partie, laissez-lui le temps d'essayer plusieurs fois.</li>
          </ul>
        </AmbianceBox>

        <InfoBox title="La voix de la grotte elle-même">
          <p>Une voix douce et chantante, sans corps visible, semble venir des parois elles-mêmes. C'est, en quelque sorte, l'écho de tous les animaux qui ont chanté ici depuis toujours — un gardien immatériel plutôt qu'un vrai personnage, à jouer d'une voix calme et un peu éthérée, presque comme un murmure qui emplirait toute la pièce.</p>
        </InfoBox>

        <ReadAloud title="Ce que dit la voix de la grotte :">
          "« Bienvenue, petit renard. » La phrase résonne de partout à la fois, douce comme une berceuse. « La brume grise a volé la chanson de toute la forêt, note après note, jusqu'à ce qu'il n'en reste presque plus rien. Pour prendre le Gland qui dort ici, tu dois d'abord la lui rendre, cette chanson. Écoute bien… et répète, exactement comme tu l'entends. » Les trois cristaux s'allument l'un après l'autre en faisant chacun résonner une note claire et pure : un <strong>bleu</strong>, un <strong>jaune</strong>, un <strong>rouge</strong>. À toi de les faire briller à nouveau, dans le bon ordre, en les touchant un par un."
        </ReadAloud>

        <ActionBox title="Le jeu de mémoire (à jouer vraiment, pas juste avec des dés !)">
          <p className="mb-4">Ce chapitre se joue <strong>pour de vrai</strong>, comme au jeu « Jacques a dit » : le MJ invente une petite séquence (des couleurs à nommer, des tapes dans les mains, des notes chantonnées) et l'enfant doit la répéter fidèlement. On augmente la difficulté à chaque manche.</p>
          <ul className="list-disc pl-5 space-y-2 mb-4">
            <li><strong>Niveau 1 :</strong> Bleu – Jaune (2 éléments).</li>
            <li><strong>Niveau 2 :</strong> Bleu – Jaune – Rouge (3 éléments).</li>
            <li><strong>Niveau 3 :</strong> Rouge – Bleu – Jaune – Rouge (4 éléments).</li>
          </ul>
          <p className="mb-2">Si l'enfant se trompe, aucune pénalité : Lumi re-chante gentiment toute la séquence depuis le début, et on recommence calmement, sans stress ni compte à rebours.</p>
          <p>Pour les enfants qui préfèrent les dés plutôt que le jeu de mémoire en vrai, on peut remplacer chaque niveau par un simple jet de <strong>Flair (1D20 + 5)</strong>, réussite à 8, 11 puis 14.</p>
        </ActionBox>

        <VictoryBox title="Le Gland de la Chanson (à lire, ou mieux encore, à chanter !)">
          <p className="italic mb-3">"Quand les trois cristaux brillent enfin ensemble, d'une seule et même lumière, ils se mettent à jouer la véritable <strong>Chanson de Grisefeuille</strong> — et tu la reconnais aussitôt, le cœur serré : c'est exactement l'air que fredonnait Mémé Rouquine, ce matin-là, sans même s'en rendre compte. Cette fois, les paroles reviennent, portées par l'écho de toute la grotte :"</p>
          <p className="italic text-center font-medium leading-relaxed mb-3">
            « Feuille d'or et feuille rousse,<br/>
            Le vent chante et la terre est douce.<br/>
            Qui se souvient n'est jamais seul,<br/>
            Sous le grand chêne et le tilleul. »
          </p>
          <p><strong>Récompenses :</strong> le <strong>Gland de la Chanson</strong> (2 sur 3 !) roule jusque dans les pattes du héros. Il connaît désormais, par cœur, la <strong>Chanson de Grisefeuille</strong> tout entière : une fois dans l'aventure, la chanter à voix haute redonne <strong>4 PV</strong> au héros ou à un ami blessé. Elle servira aussi, plus tard, devant Grisaille elle-même — retenez bien ce détail.</p>
        </VictoryBox>

        <SideQuestBox title="Mi-Bémol, la chauve-souris qui a perdu la fin de sa berceuse">
          <p className="italic mb-3">"Tout en haut, accrochée la tête en bas au plafond de la grotte, une toute petite chauve-souris chantonne inlassablement : « Dors, mon petit, la nuit est… la nuit est… oh, zut, encore raté ! » Elle recommence depuis le début, bute exactement au même endroit, recommence encore."</p>
          <p className="mb-3"><strong>Mi-Bémol</strong> (voix aiguë et un peu endormie, comme si elle n'était jamais tout à fait réveillée) a oublié la toute fin de la berceuse qu'elle chante chaque soir à ses petits, blottis quelque part plus haut dans les failles de la grotte.</p>
          <p className="mb-3">L'enfant <strong>invente lui-même la suite</strong> de la berceuse : n'importe quelle fin convient parfaitement, surtout si elle rime un peu ou fait sourire. Aucun jet de dé n'est nécessaire ici, seulement de l'imagination.</p>
          <p><strong>Récompense :</strong> ravie, Mi-Bémol explique qu'elle connaît par cœur toutes les galeries creusées sous la colline voisine — y compris certaines que même les habitants du coin ignorent. Elle montre discrètement au héros une entrée secrète menant tout droit vers le terrier de Grisaille : <strong>+2</strong> à tous les jets d'infiltration tentés au chapitre suivant.</p>
        </SideQuestBox>

        <InfoBox title="Note pour le MJ — 2 Glands d'Or sur 3 !">
          <p>En sortant de la grotte, la Feuille d'Or du héros brille maintenant beaucoup plus fort qu'au début de l'aventure, et pointe sans équivoque vers le nord, vers une colline pelée, trouée de partout comme un gigantesque fromage : le <strong>Terrier de Grisaille</strong>. Lumi tremble légèrement en la voyant au loin : « C'est là… c'est bien là-dedans qu'elle garde le dernier Gland. Sois prudent, mon ami. Et surtout, souviens-toi : on ne sait pas encore pourquoi elle fait tout ça. »</p>
        </InfoBox>
      </section>

      {/* ============================================================ */}
      {/* CHAPITRE 8 */}
      {/* ============================================================ */}
      <section>
        <Chapter id="chap8" emoji="🕳️" title="CHAPITRE 8 : LE TERRIER DE GRISAILLE" />
        <p className="text-slate-500 font-medium mb-8 italic">
          Lieu : le labyrinthe de galeries sous la colline pelée, au nord de la forêt.<br/>
          Ambiance : feutrée, un peu oppressante, mais jamais vraiment effrayante — on sent déjà, sans le dire, qu'il y a une tristesse cachée là-dessous.<br/>
          Durée de jeu conseillée : 25 à 35 minutes. C'est le chapitre d'infiltration, le plus long avant le grand final.
        </p>

        <h3 className="font-display text-2xl font-bold text-slate-700 mt-8 mb-4">
          Scène d'ouverture : des tunnels qui respirent doucement
        </h3>
        <p className="mb-4 text-slate-700">
          Le terrier de la vieille taupe-sorcière n'est pas un simple trou dans le sol : c'est tout un labyrinthe de galeries rondes, creusées avec une patience infinie au fil des décennies, qui s'enfoncent profondément sous la colline.
        </p>

        <ReadAloud title="La narration à voix haute :">
          "L'entrée du terrier ressemble à une bouche sombre et ronde, bordée de racines qui pendent comme de longs cheveux emmêlés. L'air qui en sort sent la terre humide et, étrangement, le thé froid — comme si quelqu'un, en bas, buvait sans cesse une tasse qu'il oubliait aussitôt sur une table.<br/><br/>
          Tu descends prudemment, Lumi cachée tout contre ta fourrure pour ne pas trahir ta présence par sa lumière. Les tunnels sont ronds, tapissés de racines qui pendouillent du plafond bas, et de-ci de-là, quelques champignons phosphorescents diffusent une lueur pâle et fantomatique qui suffit tout juste à distinguer le chemin.<br/><br/>
          Le long des parois, de petites étagères creusées à même la terre s'alignent, remplies de toutes sortes d'objets trouvés et perdus : boutons dépareillés, rubans décolorés, une seule moufle sans sa paire, et même des dessins d'enfants animaux, griffonnés à la craie sur de l'écorce. On dirait presque un petit musée bricolé, triste et tendre à la fois."
        </ReadAloud>

        <AmbianceBox title="Un détail important à glisser, sans l'expliquer">
          <p className="mb-2">Dans une petite pièce latérale, à mi-chemin, une table toute simple est mise pour deux. L'une des deux tasses posées dessus est propre et semble avoir servi récemment. L'autre est entièrement recouverte d'une fine couche de poussière grise : visiblement, personne ne s'en est jamais servi, pas une seule fois.</p>
          <p>Laissez l'enfant le remarquer par lui-même s'il explore cette pièce, sans jamais l'expliquer directement. C'est un indice silencieux sur la solitude de Grisaille, qui prendra tout son sens au chapitre 9.</p>
        </AmbianceBox>

        <ActionBox title="Exploration optionnelle : la petite bibliothèque de Monsieur Lombric">
          <p className="mb-3">Derrière une toute petite porte ronde, presque invisible dans la pénombre, se cache une minuscule bibliothèque souterraine. Un vieux ver de terre, portant d'étonnantes petites lunettes rondes, range méticuleusement des carnets les uns après les autres. « Chut ! » glisse-t-il sans même lever les yeux. « On ne court pas dans les archives, jeune renard, et on ne parle pas trop fort non plus. »</p>
          <p className="mb-3"><strong>Monsieur Lombric</strong> (voix pincée, extrêmement poli, presque cérémonieux) garde précieusement les carnets personnels de Grisaille. Si le héros se montre aimable avec lui (<em>1D20 + Cœur +5, réussite à 8</em>) ou prend le temps de l'aider à ranger une pile de carnets qui menace de s'effondrer, il accepte, à contrecœur mais avec émotion, de lui laisser lire une seule page :</p>
          <p className="italic mb-3 pl-4 border-l-4 border-slate-300">« Cher journal. Aujourd'hui, c'était mon anniversaire. J'ai préparé un gâteau aux racines, tout spécialement, avec la recette de ma propre mère. J'ai même mis deux tasses sur la table, comme chaque année, au cas où. J'ai attendu jusqu'au soir, sans bouger. Personne n'est venu, bien sûr, parce que personne ne sait seulement que j'existe, ici, sous cette colline. Demain, j'essaierai un nouveau sortilège. Peut-être que celui-là marchera mieux. »</p>
          <p><strong>Récompense :</strong> en lisant ces mots, l'enfant comprend d'un coup, sans qu'on ait besoin de le lui expliquer, pourquoi Grisaille a pu en arriver à lancer la Brume d'Oubli. Au chapitre 9, il gagne <strong>+3</strong> à tous ses jets de Cœur face à elle, et s'il pense à lui souhaiter un bon anniversaire en retard, c'est une <strong>réussite automatique</strong>, quelle que soit l'épreuve en cours à ce moment-là.</p>
        </ActionBox>

        <h3 className="font-display text-2xl font-bold text-slate-700 mt-10 mb-4">
          L'infiltration : trois passages à franchir en silence
        </h3>
        <p className="mb-4 text-slate-700">
          Plus on s'enfonce, plus on entend une voix qui marmonne sans cesse, toute seule, dans les profondeurs du terrier. Ce sont les <strong>Mottes Grises</strong>, de petits tas de boue animés que Grisaille a chargés de monter la garde, qui patrouillent lentement dans les derniers couloirs avant la grande salle du trône.
        </p>

        <InfoBox title="Profil des Mottes Grises (gardiennes obéissantes)">
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Apparence :</strong> de petits tas de terre et de boue grise, à peu près de la taille d'un gros chien, sans visage distinct, juste deux trous sombres qui font office d'yeux.</li>
            <li><strong>Caractère :</strong> pas méchantes du tout, simplement obéissantes jusqu'à l'absurde. Elles parlent peu, très lentement, et se laissent facilement distraire par absolument n'importe quoi.</li>
            <li><strong>Leur mission :</strong> empêcher quiconque d'atteindre la salle du trône sans prévenir Grisaille — rien de plus, rien de moins.</li>
          </ul>
        </InfoBox>

        <ActionBox title="Passage 1 : le couloir qui craque">
          <p>Un long couloir au sol instable, jonché de petites pierres qui roulent sous la moindre patte posée de travers. <strong>1D20 + Agilité (+4), réussite à 10</strong> pour avancer sans faire de bruit.</p>
        </ActionBox>

        <ActionBox title="Passage 2 : les Mottes Grises endormies">
          <p className="mb-2">Deux Mottes somnolent, à moitié affalées contre une paroi, la garde visiblement très relâchée.</p>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>Les contourner en silence :</strong> 1D20 + Agilité (+4), réussite à 11.</li>
            <li><strong>Les distraire</strong> en faisant rouler une noisette au loin dans un couloir voisin : 1D20 + Malice (+3), réussite à 9. Une méthode plus fiable et plus amusante à décrire.</li>
          </ul>
        </ActionBox>

        <ActionBox title="Passage 3 : la porte de racines">
          <p>Un enchevêtrement de racines pendantes dissimule plusieurs passages possibles, dont un seul mène vraiment vers la salle du trône. <strong>1D20 + Flair (+5), réussite à 10</strong> pour repérer, à l'odeur, le bon chemin — celui qui sent vaguement le thé froid et la cire de bougie.</p>
        </ActionBox>

        <InfoBox title="Si l'alerte est donnée (deux échecs ou plus)">
          <p className="mb-2">Rien n'est perdu pour autant : le héros peut souffler dans le <strong>sifflet en gland</strong> obtenu au chapitre 4 ! Un grondement sourd parcourt aussitôt les tunnels : les écureuils de Noisette, répondant à l'appel à travers tout le réseau de galeries, déboulent par dizaines et font une diversion mémorable, chargeant les Mottes Grises à grand renfort de noisettes lancées et de cris de guerre suraigus.</p>
          <p>Place alors directement à la grande salle, sans combat supplémentaire nécessaire.</p>
        </InfoBox>

        <CombatBox title="Si vraiment ça tourne au combat (gardiens repérés)">
          <p className="font-bold mb-2">Les Mottes Grises (× 2, uniquement si le héros est repéré)</p>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>PV :</strong> 6 chacune. <strong>Difficulté pour les toucher :</strong> 10.</li>
            <li><strong>Attaque — coup de boue :</strong> 1D4 de dégâts. Lentes et maladroites, elles ratent souvent.</li>
            <li><strong>Point faible :</strong> elles se défont littéralement en pataugeoire dès qu'on les asperge d'eau ou qu'on les fait rouler dans une pente — un bon jet de Malice (réussite à 9) suffit à les neutraliser d'un coup, sans dégâts des deux côtés.</li>
          </ul>
        </CombatBox>

        <ReadAloud title="L'arrivée dans la grande salle (à lire pour conclure le chapitre) :">
          "Au bout du dernier tunnel, enfin, une vaste salle ronde s'ouvre devant toi, bien plus grande que tout ce que tu as traversé jusqu'ici. Au centre, sur un trône entièrement tressé de racines noueuses, une silhouette toute ronde se tient immobile, le dos tourné. Dans ses petites pattes, serré contre elle comme un trésor ou peut-être comme un doudou, brille faiblement — très faiblement — le dernier Gland d'Or : celui de l'<strong>Amitié</strong>."
        </ReadAloud>

        <InfoBox title="Note pour le MJ — préparer le grand final du chapitre 9">
          <p>Rappelez-vous bien ceci avant d'attaquer le prochain chapitre : <strong>Grisaille n'est pas une vraie méchante, juste une taupe terriblement seule.</strong> Le combat reste possible si l'enfant le souhaite, mais la vraie victoire — celle que l'histoire récompense le mieux — consiste à l'écouter et à lui offrir une véritable amitié. Préparez-vous à jouer l'émotion avant tout, bien plus que la bagarre.</p>
        </InfoBox>
      </section>
    </div>
  );
}
