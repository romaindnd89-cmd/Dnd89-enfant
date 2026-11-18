import React from 'react';
import { ReadAloud, ActionBox, InfoBox } from '../../components/StoryBlocks';

export default function Chapitre1() {
  return (
    <section id="chap1">
      <h2 className="font-display text-4xl font-bold text-orange-700 mb-6 border-b-4 border-orange-200 pb-2 mt-16">
        CHAPITRE 1 : LE RÉVEIL GRIS
      </h2>
      <p className="text-slate-500 font-medium mb-8">Niveau recommandé : 1<br/>Lieu : Le terrier de la famille Renard, puis la clairière du vieux pommier et le Grand Saule<br/>Ambiance : Un matin d'automne qui aurait dû être flamboyant, et qui ne l'est plus. Mystère, tendresse, premières découvertes.</p>

      <InfoBox title="Synopsis du Chapitre pour le Maître du Jeu">
        <p>Le petit renard se réveille dans un monde qui a perdu ses couleurs et sa mémoire. Prends le temps de poser l'ambiance, puis laisse l'enfant explorer la clairière dans l'ordre qu'il veut : trois personnages à croiser, des trouvailles à mériter au dé, et au bout du chemin Mémé Rouquine, qui donne l'indice essentiel (les ombres noires sont parties vers le <strong>nord</strong>). Ce chapitre se termine par l'arrivée de Lumi la luciole, qui accompagne le héros jusqu'à la fin.</p>
      </InfoBox>

      <h3 className="font-display text-2xl font-bold text-slate-700 mt-8 mb-4">SCÈNE 1 : LE RÉVEIL DANS LE TERRIER (Narration d'ouverture)</h3>
      <ReadAloud title="Texte à lire à voix haute">
        "Tu ouvres un œil. Puis l'autre. Il fait étrangement clair dans le terrier, comme si le jour s'était levé trop vite, sans prévenir. Tu te redresses sur tes quatre pattes, et c'est là que tu remarques la première chose bizarre : ta fourrure, d'habitude d'un roux éclatant, a la couleur d'un vieux journal mouillé."<br/><br/>
        "Tu baisses le museau vers la feuille dorée que t'a offerte Mémé Rouquine, celle que tu gardes toujours serrée contre toi quand tu dors. Elle brille. Elle, et seulement elle. Tout le reste — la terre du terrier, les racines au plafond, la petite couverture tricotée dans le coin — est devenu gris, comme un dessin au crayon qu'on aurait oublié de colorier."<br/><br/>
        "Tu sors en trottinant, le cœur qui bat un peu trop vite. Dehors, le monde entier a changé de couleurs, ou plutôt : il n'en a plus. Les feuilles qui dansaient en rouge et en or hier soir pendent maintenant, ternes, comme fatiguées. Le ciel lui-même semble avoir pris un rhume. Et le pire, dans tout ça, ce n'est pas le gris. C'est le silence. Pas un chant d'oiseau. Pas un bourdonnement d'abeille attardée. Juste... rien."
      </ReadAloud>

      <h3 className="font-display text-2xl font-bold text-slate-700 mt-8 mb-4">SCÈNE 2 : LE CARREFOUR DU VIEUX POMMIER (Exploration libre)</h3>
      <p className="mb-4"><strong>Contexte :</strong> Voici le premier vrai moment de liberté de l'aventure. Décris ce que le héros voit, puis demande à l'enfant ce qu'il veut faire. Il n'y a pas d'ordre imposé : il peut aller voir qui il veut, fouiller, ou filer droit au but. Les animaux touchés par l'oubli parlent lentement, répètent la même phrase en boucle et sourient poliment sans reconnaître personne.</p>

      <ReadAloud title="Texte à lire à voix haute">
        "Le chemin serpente entre les troncs, et tu prends ton temps. L'herbe, d'habitude verte et piquante sous tes coussinets, est devenue toute molle, comme de la cendre froide. Au bout du sentier, le chemin s'ouvre sur une petite clairière que tu connais bien : c'est le carrefour du vieux pommier, là où tout le monde se croise d'habitude."<br/><br/>
        "Mais ce matin, tout y est de travers. Près du pommier, sur ta gauche, un vieux blaireau tourne en rond, le museau collé au sol, en marmonnant tout seul. Au milieu du chemin, deux lapins se font face, immobiles, comme deux statues qui ne se voient pas. Un peu plus loin, dans le potager, une silhouette creuse la terre dans tous les sens en soufflant des nuages de poussière grise. Et dans l'herbe, çà et là, quelque chose accroche la lumière : des petits éclats, des gouttes, des reflets. Tout au fond, tu aperçois les longues branches tombantes du Grand Saule, là où Mémé Rouquine a l'habitude de s'asseoir. Que fais-tu ?"
      </ReadAloud>

      <ActionBox title="Options d'Exploration et Mécaniques (Bac à sable)">
        <p className="mb-4">Laisse l'enfant décider de son approche. Voici ce qu'il peut faire dans cette clairière, et ce qui se passe selon ses actions. Il peut tout faire, ou rien : quand il veut avancer, il rejoint le Grand Saule (Scène 3).</p>

        <h4 className="font-bold text-lg mb-2">1. Aller voir le vieux blaireau (Roleplay)</h4>
        <p className="mb-2">« Je cherche... je cherche... mais je ne sais plus quoi je cherche ! Ah si : mes lunettes ! Je ne vois plus rien sans mes lunettes ! » Ses lunettes rondes sont posées bien en évidence... sur son propre nez.</p>
        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li><strong>Si l'enfant le lui dit directement :</strong> aucun jet. Monsieur Blaireau est ravi pendant deux secondes pile, puis oublie aussitôt et recommence à chercher. Triste et drôle à la fois : joue-le avec tendresse.</li>
          <li><strong>Jet de CŒUR - DD 8 (pour le rassurer) :</strong>
            <ul className="list-circle pl-5 mt-1 space-y-1">
              <li><em>Réussite :</em> le blaireau garde ses lunettes sur le nez assez longtemps pour lâcher un indice : « Tiens, en parlant de choses qu'on perd... j'ai vu Mémé Rouquine filer vers le Grand Saule, toute seule, en fredonnant un air étrange. »</li>
              <li><em>Échec :</em> il se remet à chercher en marmonnant. Pas d'indice, mais aucun mal fait.</li>
            </ul>
          </li>
        </ul>

        <h4 className="font-bold text-lg mb-2">2. S'approcher des deux lapins (Test de FLAIR)</h4>
        <p className="mb-2">Ce sont Frisette et Grisou, frère et sœur, inséparables depuis toujours — mais aujourd'hui ils se regardent comme deux étrangers. « Pardon... on s'est déjà rencontrés ? » demande l'un. « Non, je ne crois pas, bonne journée », répond l'autre.</p>
        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li><strong>Jet de FLAIR - DD 9 (remarquer qu'ils ont la même tache blanche sur l'oreille) :</strong>
            <ul className="list-circle pl-5 mt-1 space-y-1">
              <li><em>Réussite :</em> ils se figent, puis éclatent du même rire. « Grisou ?! » « FRISETTE ?! » Câlin. Une pointe de rose revient sur leurs oreilles : la première preuve que l'oubli n'est pas définitif.</li>
              <li><em>Échec :</em> ils restent polis et distants, mais l'un glisse : « Au fait... une vieille dame renarde qui fredonnait est passée par là, vers le grand arbre. »</li>
            </ul>
          </li>
        </ul>

        <h4 className="font-bold text-lg mb-2">3. Rejoindre la silhouette qui creuse : Papa Renard (Test de FLAIR ou de COURAGE)</h4>
        <p className="mb-2">En t'approchant, le héros reconnaît son propre papa ! Mais lui ne le reconnaît pas. Il creuse partout, affolé : « J'avais caché nos provisions pour l'hiver... quelque part... sous quelque chose... mais quoi ? Et où ?! »</p>
        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li><strong>Jet de FLAIR - DD 10 (suivre son nez) :</strong> l'odeur de noisette grillée mène droit à la cachette, sous la troisième pierre plate.</li>
          <li><strong>Jet de COURAGE - DD 12 (creuser avec lui) :</strong> plus long, mais ça marche aussi.</li>
          <li><strong>Loot obtenu : 3 Noisettes grillées</strong> (ce sont celles de la fiche de personnage). Chacune mangée, au repos ou en combat, redonne <strong>3 PV</strong>. Papa Renard, soulagé sans savoir pourquoi, ébouriffe la fourrure de son petit, puis repart, déjà un peu perdu.</li>
        </ul>

        <h4 className="font-bold text-lg mb-2">4. Fouiller l'herbe et les buissons (3 trouvailles à mériter)</h4>
        <p className="mb-2">Trois choses brillent dans l'herbe grise, mais ce ne sont pas des cadeaux : chacune demande un jet. On ne gagne un objet qu'en cas de <strong>Réussite</strong>.</p>
        <ul className="list-disc pl-5 space-y-3 mb-6">
          <li><strong>La goutte de rosée</strong> est perchée tout en haut d'une toile d'araignée. <strong>Jet d'AGILITÉ - DD 10 :</strong>
            <ul className="list-circle pl-5 mt-1 space-y-1">
              <li><em>Réussite :</em> <strong>Loot : Goutte de rosée</strong> (dans une coquille de gland). Au <strong>chapitre 5</strong>, la verser sur les ronces les assouplit : +3 pour traverser la Ronceraie.</li>
              <li><em>Échec :</em> la toile cède, la goutte s'écrase au sol. Tant pis : il y a de l'eau au ruisseau du chapitre 3.</li>
            </ul>
          </li>
          <li><strong>Le fil de laine rouge</strong> est coincé au fond d'un buisson d'épines. <strong>Jet de MALICE - DD 9 :</strong>
            <ul className="list-circle pl-5 mt-1 space-y-1">
              <li><em>Réussite :</em> <strong>Loot : Fil de laine rouge</strong> (exactement la couleur de l'écharpe de Mémé). Une fois dans l'aventure, le serrer donne +2 à un jet de CŒUR, décisif au <strong>chapitre 9</strong>.</li>
              <li><em>Échec :</em> une épine pique (−1 PV) et le fil se déchire.</li>
            </ul>
          </li>
          <li><strong>Le champignon qui luit :</strong> parmi des dizaines de champignons gris, un seul brille vraiment. <strong>Jet de FLAIR - DD 10 :</strong>
            <ul className="list-circle pl-5 mt-1 space-y-1">
              <li><em>Réussite :</em> <strong>Loot : Champignon-lanterne</strong>. Au <strong>chapitre 8</strong>, dans le terrier sombre, le frotter une fois donne +2 à un jet d'infiltration.</li>
              <li><em>Échec :</em> un champignon tout ordinaire, qui refuse de s'allumer.</li>
            </ul>
          </li>
        </ul>

        <h4 className="font-bold text-lg mb-2">5. Filer tout droit vers le Grand Saule</h4>
        <p>Aucun jet : le héros passe directement à la Scène 3. C'est une option tout à fait valable : certains héros préfèrent avancer.</p>
      </ActionBox>

      <h3 className="font-display text-2xl font-bold text-slate-700 mt-8 mb-4">SCÈNE 3 : MÉMÉ ROUQUINE AU PIED DU GRAND SAULE (Rencontre et Roleplay)</h3>
      <p className="mb-4"><strong>Contexte :</strong> Au bout du chemin, sous les longues branches tombantes du Grand Saule, une silhouette familière est assise, immobile, le regard perdu dans le vide gris.</p>

      <InfoBox title="Profil du PNJ : Mémé Rouquine">
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Apparence :</strong> pelage terne comme de la cendre, mais son écharpe rouge tricotée reste légèrement colorée.</li>
          <li><strong>Voix :</strong> douce, lente, un peu flottante, comme à moitié endormie. Jamais méchante.</li>
          <li><strong>Ce qu'elle sait sans le savoir :</strong> elle fredonne un air sans paroles (la future Chanson de Grisefeuille, chapitre 7) et a vu des ombres noires filer vers le <strong>nord</strong> avec quelque chose de brillant.</li>
        </ul>
      </InfoBox>

      <ReadAloud title="Texte à lire à voix haute">
        "Oh... bonjour, petit... tu me rappelles quelqu'un, mais je ne sais plus qui..." Elle sourit, un sourire flou, comme à travers une vitre embuée. Elle regarde la feuille d'or que tu tiens serrée contre toi, et ses yeux s'y attardent une seconde de plus que sur le reste du monde, comme si cette petite lumière lui disait vaguement quelque chose, tout au fond, très loin. Que fais-tu ?"
      </ReadAloud>

      <ActionBox title="L'Arbre de Dialogue et les Résolutions">
        <p className="mb-4">C'est le premier vrai choix de l'aventure, pensé pour être tendre. Laisse l'enfant proposer son idée avant de lui donner ces options : toute idée gentille mérite d'être récompensée.</p>

        <h4 className="font-bold text-lg mb-2">Option A : Montrer l'écharpe rouge (Jet de CŒUR - DD 8)</h4>
        <p className="mb-2">Le héros désigne doucement l'écharpe que Mémé porte encore. C'est facile exprès : c'est la toute première épreuve du jeu.</p>
        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li><strong>Réussite :</strong> Mémé referme sa patte sur le tissu rouge et son regard se stabilise un court instant.</li>
        </ul>

        <h4 className="font-bold text-lg mb-2">Option B : Fredonner la mélodie avec elle (Jet de FLAIR ou de CŒUR - DD 10)</h4>
        <p className="mb-2">Si l'enfant a remarqué que Mémé chantonnait, il peut l'imiter. C'est la plus belle option : elle relie à la Chanson de Grisefeuille du chapitre 7.</p>
        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li><strong>Réussite :</strong> Mémé se met à chantonner avec lui, de plus en plus juste.</li>
        </ul>

        <h4 className="font-bold text-lg mb-2">Option C : Lui tendre la feuille d'or (Jet de CŒUR - DD 10)</h4>
        <p className="mb-2">En sentant sa chaleur dorée contre sa truffe, Mémé peut retrouver pendant un instant un vrai souvenir net.</p>
        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li><strong>Réussite :</strong> son regard s'éclaire.</li>
        </ul>

        <h4 className="font-bold text-lg mb-2">Récompense de la Scène 3 (Si une option est réussie)</h4>
        <p className="italic mb-2">"Les yeux de Mémé Rouquine s'éclairent d'un coup, comme une lanterne qu'on rallume après une panne. « Mon tout-petit ! C'est toi ! » Elle te serre si fort contre elle que ton museau disparaît dans son écharpe, qui sent encore, juste un peu, la lavande et le pain grillé. Une touche de roux revient sur sa fourrure, comme une aquarelle qu'on viendrait de retoucher. Puis la brume reprend le dessus, mais elle garde ta patte serrée dans la sienne. « Va, mon petit. Je ne sais plus très bien pourquoi... mais je sais que je suis fière de toi. Les couleurs, je les ai vues partir cette nuit : des ombres noires, comme de la suie qui vole, elles ont filé vers le nord en emportant quelque chose qui brillait. Suis-les, mon cœur. Et reviens-moi vite. »"</p>
        <p className="mb-2"><strong>Loot obtenu : l'Écharpe de Mémé.</strong> Elle resserre le nœud autour du cou du héros. Une seule fois dans l'aventure, l'enfant peut dire « je serre fort l'écharpe de Mémé » pour gagner +2 à un jet de COURAGE de son choix.</p>
        <p><strong>Si l'enfant rate tous ses jets :</strong> aucun problème. Mémé reste douce mais lointaine, et Lumi complète gentiment : « Elle ne se souvient plus, mais regarde, son écharpe est restée rouge. L'amour résiste un peu plus longtemps que le reste à l'oubli. Et elle a dit un mot avant que tu n'arrives : nord. » On ne bloque jamais l'histoire.</p>
      </ActionBox>

      <h3 className="font-display text-2xl font-bold text-slate-700 mt-8 mb-4">SCÈNE 4 : L'ARRIVÉE DE LUMI LA LUCIOLE (Rencontre et Compagnon)</h3>
      <ReadAloud title="Texte à lire à voix haute">
        "Alors que tu regardes Mémé s'éloigner en fredonnant toujours son petit air sans paroles, une minuscule lumière dorée se détache de l'ombre du Grand Saule et vient voleter devant ton museau, hésitante. C'est une luciole, mais une luciole bien étrange : en plein jour gris, sa petite lumière brille comme une bougie dans le noir."<br/><br/>
        "« Enfin ! » chuchote-t-elle d'une voix fluette et pressée. « Enfin quelqu'un qui se souvient encore de quelque chose ! Je m'appelle Lumi. Je volette dans cette forêt depuis que la brume est tombée, et toi, petit renard, tu brilles encore un tout petit peu, comme ta feuille d'or. Il faut faire vite. La forêt tout entière est en train d'oublier, et si rien n'arrête ça avant la première neige, elle oubliera pour toujours. »"
      </ReadAloud>

      <InfoBox title="Compagnon : Lumi la Luciole">
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Effet passif :</strong> elle éclaire les zones sombres.</li>
          <li><strong>Effet actif (une fois par combat) - "Lumière Éblouissante" :</strong> sur demande de l'enfant, Lumi brille de toutes ses forces : les créatures de la brume ont −2 à toutes leurs actions pendant un tour.</li>
          <li><strong>À retenir en fin de chapitre :</strong> (1) la forêt a perdu ses couleurs et sa mémoire cette nuit ; (2) des ombres noires sont parties vers le nord ; (3) Lumi accompagne le héros. Résume ces trois points à voix haute avant de passer au chapitre 2.</li>
        </ul>
      </InfoBox>
    </section>
  );
}
