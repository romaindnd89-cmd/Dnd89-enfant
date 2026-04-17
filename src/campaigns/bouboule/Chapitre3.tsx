import React from 'react';
import { ReadAloud, CombatBox, ActionBox, InfoBox } from '../../components/StoryBlocks';

export default function Chapitre3() {
  return (
    <section id="chap3">
      <h2 className="font-display text-4xl font-bold text-rose-700 mb-6 border-b-4 border-rose-200 pb-2 mt-16">
        CHAPITRE 3 : LA MONTAGNE FUMANTE
      </h2>
      
      <h3 className="font-display text-2xl font-bold text-slate-700 mt-8 mb-4">SECTION 1 : LES PENTES DE CENDRES ET LE BIVOUAC DU BOUQUETIN</h3>
      
      <InfoBox title="📚 HISTOIRE ET LORE POUR LE MAÎTRE DU JEU (Secret du MJ)">
        <p className="italic mb-4">Ne lis pas ceci à la joueuse. C'est pour t'aider à comprendre la zone.</p>
        <p className="mb-4">La Montagne Fumante n'est pas un volcan naturel. C'est "L'Installation Géothermique Alpha", une ancienne usine titanesque construite par les Bipèdes Sans Poils pour puiser l'énergie du centre de la Terre. Depuis le Grand Départ, la nature avait repris ses droits, et le cratère était devenu un havre de paix chaud pour les reptiles.</p>
        <p>Cependant, la Mue Noire a corrompu les vieux tuyaux de l'usine. Le goudron magique s'est mélangé au magma. Aujourd'hui, la montagne recrache une Brume Grise toxique et épaisse. La chaleur ici n'est pas une chaleur naturelle : c'est une chaleur magique étouffante qui assèche l'eau et rend les animaux paranoïaques.</p>
      </InfoBox>

      <ActionBox title="🌪️ RÈGLE D'ENVIRONNEMENT : LA CHALEUR ÉTOUFFANTE">
        <p className="mb-4">Tant que Bouboule est sur les Pentes de Cendres, elle subit les effets de l'environnement volcanique.</p>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>L'Évaporation de la Bulle-Nuage :</strong> La chaleur fait doucement évaporer la bulle d'eau de Bouboule. Toutes les 30 minutes de temps de jeu (ou après chaque combat/effort physique intense), Bouboule doit réussir un jet de <strong>MAGIE (DD 10)</strong> pour réhydrater sa bulle. Si elle échoue, sa Classe d'Armure (CA) baisse de -1 jusqu'à ce qu'elle trouve une source d'eau fraîche, car sa bulle devient trop fine pour la protéger.</li>
        </ul>
      </ActionBox>

      <h4 className="font-bold text-lg mt-8 mb-2">📍 ZONE 1-A : L'ARRIVÉE ET L'EXPLORATION DU DÉBARCADÈRE</h4>
      <ReadAloud title="Texte à lire à voix haute (Description d'ouverture - Prends ton temps)">
        "Le mécanisme géant de l'ascenseur en bois s'arrête dans un grincement assourdissant de cordages. Les lourdes portes s'ouvrent, et une vague de chaleur frappe immédiatement ta Bulle-Nuage. L'air humide et doux de la forêt a totalement disparu. Ici, l'air est sec, lourd, et sent fortement le soufre, comme une allumette qu'on vient de gratter.<br/><br/>
        Tu sors de l'ascenseur et tu découvres un paysage désolé mais majestueux. Le sol sous ta bulle n'est plus couvert d'herbe, mais d'une épaisse couche de cendres grises et de roches volcaniques noires, coupantes comme du verre. Le ciel est caché par un plafond de nuages sombres d'où tombent parfois de petites flocons de cendres, comme de la neige noire.<br/><br/>
        Tu te trouves sur une grande corniche rocheuse. À ta droite, le vide absolu mène vers la forêt tout en bas. Devant toi, le chemin monte en pente raide vers le sommet cracheur de fumée. Sur cette corniche, tu remarques trois choses que tu peux examiner de plus près :"
      </ReadAloud>

      <ActionBox title="L'Investigation (Bac à Sable)">
        <p className="mb-4">Laisse ta fille choisir où elle va.</p>
        <ol className="list-decimal pl-5 space-y-2 mb-6">
          <li>Un vieux panneau indicateur humain à moitié fondu.</li>
          <li>Une grande flaque de boue bouillonnante d'où s'échappent des bulles grises (Plop... Plop...).</li>
          <li>Un campement de fortune caché derrière un rocher noir, avec un petit feu de camp éteint et une tente faite de vieilles toiles de parachute.</li>
        </ol>

        <ul className="list-disc pl-5 space-y-4">
          <li><strong>Le Panneau Humain :</strong> Si elle s'approche, elle voit des symboles étranges.
            <ul className="list-circle pl-5 mt-1">
              <li><em>Jet de MAGIE (DD 12) pour déchiffrer :</em> Elle réussit à traduire l'ancien langage. Il est écrit : "DANGER. Zone Géothermique. Port du casque obligatoire. Température : 150°C". Cela lui fait comprendre que l'endroit est mortel sans sa bulle.</li>
            </ul>
          </li>
          <li><strong>La Mare de Boue :</strong> La boue bout violemment.
            <ul className="list-circle pl-5 mt-1">
              <li><em>Jet de PERCEPTION/CŒUR (DD 11) :</em> Elle repère, flottant à la surface de la boue brûlante, de grosses racines rouges. Ce sont des "Racines de Feu".</li>
              <li><em>Jet de VITESSE (DD 13) pour les attraper sans se brûler :</em> Si elle réussit, elle gagne <strong>2 Racines de Feu</strong> (Si elle les mange plus tard, cela lui donnera un bonus de +2 à ses attaques de MUSCLE pendant un combat, car elles donnent beaucoup d'énergie). Si elle rate, une éclaboussure touche sa bulle : l'eau s'évapore et elle perd 1 PV.</li>
            </ul>
          </li>
          <li><strong>Le Campement :</strong> Il y a des traces de sabots dans la cendre. Quelqu'un vit ici. En fouillant, elle trouve un vieux journal de bord avec des dessins de montagnes et une phrase griffonnée : "Les lézards noirs ont pris la corde. Je suis coincé."</li>
        </ul>
      </ActionBox>

      <h4 className="font-bold text-lg mt-8 mb-2">📍 ZONE 1-B : L'INTERROGATOIRE DU BOUQUETIN</h4>
      <ReadAloud title="Texte à lire à voix haute">
        "Alors que tu fouilles le campement, tu entends un bruit de cailloux qui roulent. Depuis le sommet d'un rocher en forme d'aiguille, à dix mètres au-dessus de toi, une créature saute et atterrit souplement devant ta bulle dans un nuage de cendres.<br/><br/>
        C'est un Bouquetin des Montagnes. Mais il est étrange : il porte de grosses lunettes aux verres noirs (des lunettes de soudeur humain) attachées par une lanière de cuir, et ses sabots sont recouverts de métal. Il croise ses pattes avant, te regarde de haut en bas, et crache un petit caillou qu'il mâchouillait."
      </ReadAloud>

      <ActionBox title="Le Roleplay : Cornélius le Têtu">
        <p className="mb-4">Cornélius est fier, bourru, mais au fond, il est désespéré. L'objectif de la joueuse est d'obtenir son aide pour traverser les geysers qui bloquent la suite du chemin.</p>
        <p className="italic mb-6">"Bêêêh... Un poisson volant. On aura tout vu," dit-il d'une voix rocailleuse. "Je suis Cornélius, Maître des Cimes. Ne va pas plus loin, la grosse. Le 'Chemin des Geysers' est devant. Des jets de vapeur toxique sortent du sol sans prévenir. Sans ma Corde Magique d'Alpiniste pour sécuriser le passage, même moi je n'y vais pas. Et des sales lézards couverts de goudron me l'ont volée cette nuit."</p>

        <h5 className="font-bold mb-2">Arbre de Résolution Sociale :</h5>
        <p className="mb-2">La joueuse doit choisir comment lui répondre.</p>
        <ul className="list-disc pl-5 space-y-4">
          <li><strong>La Pitié / Le Cœur (Jet de CŒUR - DD 13) :</strong> Bouboule essaie d'être douce et compréhensive. "Tu dois être très triste d'avoir perdu ton outil préféré. Laisse-moi t'aider."
            <ul className="list-circle pl-5 mt-1">
              <li><em>Réussite :</em> Cornélius est touché (bien qu'il essaie de le cacher). "Je ne suis pas triste, j'ai de la poussière dans l'œil ! Bon, écoute... Si tu récupères ma corde dans leur Nid de Verre Noir, je t'apprendrai à lire les signes sur le sol pour éviter que les geysers ne te fassent exploser ta bulle."</li>
            </ul>
          </li>
          <li><strong>Le Défi / Le Muscle (Jet de MUSCLE - DD 14) :</strong> Bouboule gonfle ses muscles. "Je n'ai pas peur des lézards ! Je vais écraser ces voleurs et te rapporter ta corde pour te montrer qui est la plus forte !"
            <ul className="list-circle pl-5 mt-1">
              <li><em>Réussite :</em> Cornélius rit. "Hahaha ! J'aime ton tempérament, le cachalot ! Si tu survis, je te donnerai en plus un secret sur le boss de la montagne."</li>
            </ul>
          </li>
          <li><strong>L'Échec social :</strong> Si la joueuse rate ses jets de dés lors de la discussion, Cornélius accepte quand même l'aide (il en a besoin), mais il sera grognon et refusera de l'aider en cas de danger pendant l'exploration.</li>
        </ul>
      </ActionBox>

      <h4 className="font-bold text-lg mt-8 mb-2">📍 ZONE 1-C : LE NID DE VERRE NOIR (Combat d'Environnement)</h4>
      <p className="mb-4">Cornélius indique une grotte sombre un peu plus haut. L'entrée est bordée de cristaux noirs coupants (du verre volcanique).</p>

      <InfoBox title="Analyse Tactique pour le MJ">
        <p>La grotte est grande, mesurant 20 mètres de large. Au centre, il y a une mare de magma (intouchable). Autour de la mare, deux immenses piliers de pierre. Les ennemis peuvent grimper sur les piliers pour attaquer de haut.</p>
      </InfoBox>

      <ReadAloud title="Texte à lire à voix haute">
        "Tu entres dans la grotte. L'air y est étouffant. Le sol craque sous la magie de ta bulle. Au milieu de la pièce, une fosse remplie de lave éclaire les murs d'une lueur orange et menaçante.<br/><br/>
        De l'autre côté de la fosse de lave, tu vois la fameuse Corde Magique étincelante. Mais elle est gardée. Deux Salamandres Géantes, longues comme des crocodiles, dorment sur les piliers de pierre. Elles ont respiré la Mue Noire : du goudron noir et visqueux coule de leurs écailles et s'enflamme en touchant le sol.<br/><br/>
        Soudain, ta bulle fait un petit bruit en heurtant un cristal. Les deux salamandres ouvrent leurs yeux jaunes reptiliens, poussent un sifflement qui glace le sang, et crachent des flammèches noires. L'Initiative commence !"
      </ReadAloud>

      <CombatBox title="⚔️ LE COMBAT (Règles Avancées)">
        <ul className="list-disc pl-5 space-y-1 mb-6">
          <li><strong>Jet d'Initiative :</strong> (d20 + VITESSE). Les Salamandres ont un score de <strong>13</strong>.</li>
        </ul>

        <h5 className="font-bold mb-2">Statistiques des Ennemis (2 Salamandres de Goudron) :</h5>
        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li><strong>PV :</strong> 18 chacune.</li>
          <li><strong>CA :</strong> 14 (Leur peau écailleuse est dure).</li>
          <li><strong>Compétence passive "Corps Brûlant" :</strong> Si Bouboule les attaque au corps-à-corps (Coup de Bélier) avec son MUSCLE, elle doit faire un test de <strong>MAGIE (DD 10)</strong> juste après pour empêcher l'eau de sa bulle de bouillir au contact. Si elle rate, elle perd 1 PV de brûlure.</li>
          <li><strong>Faiblesse "Créatures de Feu" :</strong> Toutes les attaques à base d'EAU (les bulles magiques de Bouboule) ont un <strong>Avantage</strong> sur le jet de toucher (elle lance 2 dés 20 et garde le meilleur).</li>
        </ul>

        <h5 className="font-bold mb-2">Les Actions des Salamandres (Le tour du MJ) :</h5>
        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li><strong>Action 1 (Distance) - Crachat de Goudron Igné :</strong> +5 pour toucher. Dégâts : 1d6. Si ça touche, Bouboule est aveuglée par la fumée noire et aura un malus de -2 à sa prochaine attaque.</li>
          <li><strong>Action 2 (Mouvement et Ruse) :</strong> Si une salamandre est très blessée (moins de 5 PV), elle plonge dans la lave pour se cacher. Bouboule devra utiliser sa MAGIE pour faire refroidir la lave et forcer le monstre à sortir.</li>
        </ul>

        <p className="italic"><strong>Résolution :</strong> Laisse ta fille décrire ses actions. Rappelle-lui d'utiliser le décor (peut-elle lancer une bulle d'eau sur le pilier de pierre pour le rendre glissant et faire tomber la salamandre dans la lave ?).</p>
      </CombatBox>

      <h4 className="font-bold text-lg mt-8 mb-2">📍 ZONE 1-D : L'EXAMEN DU BUTIN (Le Trésor de la Grotte)</h4>
      <p className="mb-4">Le combat est gagné. La Mue Noire se solidifie et les salamandres s'enfuient.<br/>
      Bouboule récupère la <strong>Corde Magique d'Alpiniste</strong> (qui bouge toute seule comme un serpent affectueux).<br/>
      Mais dans le nid des salamandres, il y a les restes d'anciens aventuriers.</p>

      <ActionBox title="Action de fouille : Jet de PERCEPTION (DD 12)">
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Si échec :</strong> Elle trouve juste de vieux os brûlés et 3 Pièces d'Or fondues.</li>
          <li><strong>Si réussite :</strong> Sous un rocher plat, elle trouve <strong>Les Gantelets de Frappe Sismique</strong>. (Un objet magique pour ses nageoires pectorales. Si elle fait un Coup de Bélier, elle peut frapper le sol pour créer un petit tremblement de terre. Tous les ennemis autour d'elle doivent faire un test d'équilibre ou tomber à terre).</li>
        </ul>
      </ActionBox>

      <h3 className="font-display text-2xl font-bold text-slate-700 mt-12 mb-4">SECTION 2 : LE LABYRINTHE DES GEYSERS ET LA PORTE DE FER</h3>

      <InfoBox title="📚 HISTOIRE ET LORE POUR LE MAÎTRE DU JEU (Secret du MJ)">
        <p className="italic mb-4">Ne lis pas ceci à la joueuse.</p>
        <p className="mb-4">Le "Champ des Geysers" n'est pas une formation géologique naturelle. Sous cette fine couche de roche se trouve l'immense réseau de tuyauterie de la station géothermique des humains. Ces "geysers" sont en réalité des valves de décompression.</p>
        <p>À cause de la Mue Noire, les tuyaux sont bouchés par le goudron. La pression est immense. Les jets qui s'échappent ne sont pas composés d'eau chaude, mais de vapeurs toxiques et de cendres brûlantes. Traverser ce champ demande de savoir "lire" la pression du sol avant que la roche n'explose.</p>
      </InfoBox>

      <h4 className="font-bold text-lg mt-8 mb-2">📍 ZONE 2-A : LA LEÇON DE CORNÉLIUS ET L'ATTACHE DE LA CORDE</h4>
      <ReadAloud title="Texte à lire à voix haute (Description d'ouverture)">
        "Tu redescends vers le campement avec la Corde Magique d'Alpiniste qui serpente joyeusement autour de ta nageoire. Cornélius le Bouquetin saute de joie sur ses sabots métalliques (Cling ! Clang !).<br/><br/>
        'Par les cornes de mes ancêtres, tu as réussi !' s'exclame-t-il. Il prend la corde dans ses dents et l'attache solidement autour de ta Bulle-Nuage avec un nœud très complexe. 'Cette corde est magique. Si le sol s'effondre, elle se tendra toute seule pour te retenir au rocher le plus proche.'<br/><br/>
        Il s'approche du bord du Labyrinthe des Geysers. C'est une immense étendue de rochers noirs percée de milliers de trous fumants. Le sol tremble en permanence (Vrrrr...). Cornélius te donne sa leçon : 'Écoute bien, Cachalot. Si le trou fume doucement, c'est sûr. Si le trou arrête de fumer et que la roche autour devient rouge... recule tout de suite ! Ça va exploser ! C'est parti, je passe devant !'"
      </ReadAloud>

      <ActionBox title="La Mécanique de la Corde Magique">
        <p>Tant que Bouboule est attachée à Cornélius, elle a un "Filet de Sécurité". Si elle rate un jet d'esquive dans cette zone et doit prendre des dégâts mortels ou tomber, la corde la rattrape, divisant tous les dégâts de chute ou d'explosion par deux.</p>
      </ActionBox>

      <h4 className="font-bold text-lg mt-8 mb-2">📍 ZONE 2-B : LA TRAVERSÉE DU LABYRINTHE (Défi de Survie)</h4>
      <p className="mb-4">Ce n'est pas un combat, mais un <strong>Défi de Compétences en 3 étapes</strong>. La joueuse doit réussir à guider sa bulle au-dessus des failles sans se faire rôtir.</p>

      <ActionBox title="Les 3 Étapes">
        <h5 className="font-bold mb-2">Étape 1 : Lire le terrain (Test de PERCEPTION/CŒUR)</h5>
        <p className="mb-2">Bouboule doit repérer les trous qui sont sur le point d'exploser.</p>
        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li><strong>Jet de CŒUR (DD 12) :</strong>
            <ul className="list-circle pl-5 mt-1">
              <li><em>Réussite :</em> Elle repère une zone où la roche rougeoie et prévient Cornélius juste à temps. Ils font un détour sécurisé.</li>
              <li><em>Échec :</em> Elle ne voit pas la roche rougir. Un geyser explose juste devant sa bulle ! Pschhh ! La vapeur noire assèche sa bulle (elle perd 1d4 PV de brûlure).</li>
            </ul>
          </li>
        </ul>

        <h5 className="font-bold mb-2">Étape 2 : Le Vent de Cendres (Test de MUSCLE)</h5>
        <p className="mb-2">Soudain, une violente bourrasque de vent volcanique s'abat sur eux, menaçant de pousser la Bulle-Nuage dans un cratère géant.</p>
        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li><strong>Jet de MUSCLE (DD 13) :</strong>
            <ul className="list-circle pl-5 mt-1">
              <li><em>Réussite :</em> Bouboule utilise son poids et sa magie pour nager à contre-courant dans l'air. La corde se tend, mais elle tient bon !</li>
              <li><em>Échec :</em> Le vent la pousse. La Corde Magique se tend violemment (Schlak !) et la rattrape in extremis, mais le choc l'étourdit un peu (-1 au prochain jet de dé).</li>
            </ul>
          </li>
        </ul>

        <h5 className="font-bold mb-2">Étape 3 : Le Piège de la Faille (Test de VITESSE)</h5>
        <p className="mb-2">Le sol s'effondre sous les sabots de Cornélius ! Le bouquetin glisse vers un trou de magma.</p>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Jet de VITESSE (DD 11) :</strong>
            <ul className="list-circle pl-5 mt-1">
              <li><em>Réussite :</em> Bouboule réagit au quart de tour. Elle tire sur la Corde Magique et utilise sa lévitation pour remonter Cornélius sur la roche ferme. Cornélius la remercie avec un sourire ému.</li>
              <li><em>Échec :</em> Elle tire trop tard. Cornélius se rattrape avec ses sabots de justesse, mais il se foule la patte. Il ne pourra pas l'aider lors du combat suivant.</li>
            </ul>
          </li>
        </ul>
      </ActionBox>

      <h4 className="font-bold text-lg mt-8 mb-2">📍 ZONE 2-C : LE SAUVETAGE DU TATOU (Choix Moral et Roleplay)</h4>
      <ReadAloud title="Texte à lire à voix haute">
        "Vous arrivez presque au bout du Labyrinthe. Mais soudain, vous entendez un bruit étrange provenant d'un geyser éteint : Toc, toc, aïe ! En regardant dans le trou, tu découvres un Tatou. Il est roulé en boule, avec une petite sacoche en cuir autour du cou, mais sa carapace est coincée comme un bouchon dans le cratère !<br/><br/>
        La roche autour de lui commence à devenir rouge. Le geyser va exploser d'une seconde à l'autre ! Le Tatou crie : 'A l'aide ! Je m'appelle Roulade, je suis le facteur de la montagne et je suis coincé !'"
      </ReadAloud>

      <ActionBox title="L'Action (Urgence Extrême)">
        <p className="mb-4">La joueuse a 1 seul tour (1 seul jet de dé) pour le sortir de là.</p>
        <ul className="list-disc pl-5 space-y-4 mb-6">
          <li><strong>Option A (Le Muscle - Coup de Bélier précis) - DD 14 :</strong> Elle frappe la roche à côté du tatou pour la fendre. Si réussi, le tatou saute. Si raté, le geyser explose sous lui (il survit grâce à sa carapace, mais est propulsé très loin).</li>
          <li><strong>Option B (La Magie - Huile ou Eau froide) - DD 12 :</strong> Elle crée une bulle d'eau très froide pour rétrécir la roche ou faire "glisser" le tatou. <em>C'est la solution la plus intelligente (baisse le DD).</em></li>
        </ul>

        <h5 className="font-bold mb-2">Récompense si le sauvetage réussit :</h5>
        <p className="mb-4">Roulade le Tatou s'extirpe juste avant qu'un jet de fumée noire de 10 mètres ne jaillisse !<br/><br/>
        "Fiouuu ! Merci la baleine ! Pour te remercier, je vais t'ouvrir ce courrier confisqué aux monstres !"</p>
        <p>Il fouille dans sa sacoche et lui donne un <strong>Plan de l'Usine</strong> (Bouboule aura un Avantage pour trouver son chemin dans le prochain donjon) et <strong>1 Potion de Peau de Pierre</strong> (Si elle la boit, elle gagne +2 d'Armure pour un combat entier).</p>
      </ActionBox>

      <h4 className="font-bold text-lg mt-8 mb-2">📍 ZONE 2-D : L'EMBUSCADE DES DIABLOTINS DE CENDRES (Combat Tactique)</h4>
      <ReadAloud title="Texte à lire à voix haute">
        "Vous arrivez enfin devant les portes gigantesques de l'Usine Géothermique. Elles sont en acier noir, hautes comme dix arbres. Mais l'explosion du geyser a réveillé les gardiens du seuil.<br/><br/>
        De la fumée noire se condense dans les airs pour former trois petites créatures humanoïdes avec des ailes de chauve-souris et des cornes enflammées : des Diablotins de Cendres ! Ils rient d'un rire aigu et mauvais. L'un d'eux tient une grosse clé à molette rouillée, les autres ont des griffes de braises. Ils plongent sur ta bulle !"
      </ReadAloud>

      <CombatBox title="⚔️ LE COMBAT (Environnement mortel)">
        <ul className="list-disc pl-5 space-y-1 mb-6">
          <li><strong>Jet d'Initiative :</strong> (d20 + VITESSE vs Diablotins : 14).</li>
        </ul>

        <h5 className="font-bold mb-2">Statistiques des Ennemis (3 Diablotins de Cendres) :</h5>
        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li><strong>PV :</strong> 12 chacun.</li>
          <li><strong>CA :</strong> 13.</li>
          <li><strong>Pouvoir Passif (Forme de Cendres) :</strong> Les attaques physiques (MUSCLE) ont un <em>Désavantage</em> car les diablotins sont en partie faits de fumée (le coup passe au travers).</li>
        </ul>

        <h5 className="font-bold mb-2">L'Arène de Combat :</h5>
        <p className="mb-2">Le sol est parsemé de petits cratères de geysers.</p>
        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li><em>L'astuce pour la joueuse :</em> Si Bouboule utilise sa <strong>MAGIE (Tir de Bulle)</strong>, l'eau transforme la cendre du diablotin en boue lourde ! Ses ailes collent, il tombe au sol, et perd son Pouvoir Passif pour le reste du combat (elle pourra ensuite l'écraser avec le Muscle !).</li>
          <li><em>L'astuce de l'environnement :</em> Si Bouboule pousse un ennemi sur un trou au sol (avec un Coup de Bélier), le MJ lance 1d4. Sur un résultat de 3 ou 4, un geyser explose sous le monstre et le désintègre instantanément !</li>
        </ul>

        <h5 className="font-bold mb-2">Le Tour du MJ (Attaques des Diablotins) :</h5>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Frappe Cendrée :</strong> +4 pour toucher. Dégâts : 1d4 + 1. S'ils touchent, la suie noircit la bulle de Bouboule, réduisant sa vision (-1 au toucher pour sa prochaine attaque).</li>
        </ul>
      </CombatBox>

      <h4 className="font-bold text-lg mt-8 mb-2">📍 ZONE 2-E : LA PORTE DE LA FORGE (L'énigme d'ouverture)</h4>
      <p className="mb-4">Le combat est terminé. Les diablotins retournent à l'état de tas de cendres inertes. Cornélius (et Roulade si sauvé) applaudissent la victoire de Bouboule.</p>

      <ReadAloud title="Texte à lire à voix haute">
        "Te voilà devant les doubles portes de l'Usine. Elles sont scellées par un mécanisme humain massif. Au centre, un grand cadran circulaire avec une aiguille coincée dans le rouge. Sous le cadran, une plaque de métal indique : 'SYSTÈME EN SURCHAUFFE. REFROIDISSEMENT MANUEL REQUIS POUR OUVERTURE.'<br/><br/>
        De chaque côté de la porte, il y a deux gros entonnoirs en fer."
      </ReadAloud>

      <ActionBox title="L'Énigme Finale de la Section">
        <p className="mb-4">La solution est dans le texte. La porte ne s'ouvrira pas avec de la force, elle est bloquée par la sécurité thermique.</p>
        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li><strong>L'Action :</strong> Bouboule doit utiliser sa <strong>MAGIE</strong> d'eau. Elle doit viser et remplir les deux entonnoirs avec des bulles d'eau très froides (ou de la glace si elle a des objets pour).</li>
          <li><strong>Jet de MAGIE (DD 11) :</strong>
            <ul className="list-circle pl-5 mt-1">
              <li><em>Réussite :</em> Elle souffle deux torrents d'eau magique dans les entonnoirs. La machine engloutit l'eau. Le métal rougeoyant de la porte redevient noir (Pschhhh !). L'aiguille du cadran redescend dans le vert.</li>
            </ul>
          </li>
        </ul>
        
        <h5 className="font-bold mb-2">Conclusion de la Zone :</h5>
        <p className="italic">"Un bruit assourdissant de rouages résonne dans toute la montagne. Les immenses portes de fer s'ouvrent lourdement vers l'intérieur, libérant une chaleur incroyable et le bruit assourdissant de marteaux géants qui frappent le métal.<br/><br/>
        Cornélius s'arrête sur le seuil. 'Mon voyage s'arrête ici, Cachalot. À l'intérieur, c'est le domaine du Maître-Forgeron. On raconte que c'est lui qui fabrique les armures de goudron pour tous les monstres du monde. Que l'océan te protège !'<br/><br/>
        Tu pénètres dans l'obscurité flamboyante de l'Usine. Tu es prête à détruire la source du Fléau."</p>
      </ActionBox>

      <h3 className="font-display text-2xl font-bold text-slate-700 mt-12 mb-4">SECTION 3 : LA FORGE ANTIQUE ET LA MER DE LAVE</h3>

      <InfoBox title="📚 HISTOIRE ET LORE POUR LE MAÎTRE DU JEU (Secret du MJ)">
        <p className="italic mb-4">Ne lis pas ceci à la joueuse.</p>
        <p>L'Usine Géothermique est un complexe automatisé des anciens Bipèdes Sans Poils. Son but originel était de transformer la chaleur du volcan en énergie propre. Mais la Mue Noire a piraté le système. Le "Maître-Forgeron" qui dirige cet endroit n'est pas une machine, mais un animal : Vulcain, une Tortue Géante des Galápagos très sage, qui a été capturée par la Brume Grise. La Mue Noire l'a recouvert d'une armure d'acier et l'oblige à forger sans relâche les carapaces noires qui rendent les autres animaux méchants. Libérer Vulcain de son emprise est le but ultime de ce donjon.</p>
      </InfoBox>

      <h4 className="font-bold text-lg mt-8 mb-2">📍 ZONE 3-A : L'ANTICHAMBRE ET LES TAPIS ROULANTS (Défi d'Agilité)</h4>
      <ReadAloud title="Texte à lire à voix haute (Description d'ouverture)">
        "Les immenses portes de fer se referment lourdement derrière toi dans un bruit sourd qui fait trembler ta Bulle-Nuage. Te voilà à l'intérieur de l'Usine. L'endroit est si vaste que tu ne vois pas le plafond, caché par une épaisse fumée orange.<br/><br/>
        Partout, ce n'est que métal, tuyaux hurlants, et engrenages géants. Le bruit est assourdissant : CLANG ! VROUUM ! PSSSH ! Devant toi se trouve une immense chaîne de montage. Trois longs tapis roulants en métal avancent à toute vitesse. Sur ces tapis, des blocs de pierre noire sont transportés vers d'énormes presses mécaniques qui s'abattent du plafond pour les écraser (BAM ! BAM ! BAM !).<br/><br/>
        La seule façon de traverser cette salle est de flotter au-dessus de ces tapis roulants, mais les presses mécaniques montent et descendent sans arrêt. Si l'une d'elles touche ta bulle, tu vas finir aplatie comme une crêpe !"
      </ReadAloud>

      <ActionBox title="Le Défi Environnemental (Le Parcours d'Obstacles)">
        <p className="mb-4">Bouboule doit traverser la chaîne de montage. Elle doit réussir <strong>deux tests</strong> pour passer en toute sécurité.</p>

        <h5 className="font-bold mb-2">1. Le Timing Parfait (Test de VITESSE - DD 13) :</h5>
        <p className="mb-2">Bouboule observe le rythme des pilons mécaniques et doit foncer au bon moment.</p>
        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li><strong>Réussite :</strong> Description : "1, 2, 3... Go ! Tu propulses ta bulle exactement au moment où le pilon remonte. Tu passes juste en dessous dans un souffle d'air chaud. Parfait !"</li>
          <li><strong>Échec :</strong> Elle part une seconde trop tard. Le pilon frôle sa bulle. Plaf ! La bulle est déformée, Bouboule est secouée et perd <strong>1d4 PV</strong>, mais elle parvient à passer de l'autre côté en roulé-boulé.</li>
        </ul>

        <h5 className="font-bold mb-2">2. La Chaleur du Tapis (Test de MAGIE - DD 12) :</h5>
        <p className="mb-2">Le dernier tapis roulant transporte du métal en fusion. La chaleur fait bouillir l'eau de la Bulle-Nuage !</p>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Réussite :</strong> Elle crée un bouclier de givre magique autour de sa bulle. La glace crépite mais tient bon jusqu'à la plateforme suivante.</li>
          <li><strong>Échec :</strong> L'eau devient brûlante. Bouboule a l'impression d'être dans une casserole ! Elle perd <strong>2 PV</strong> de brûlure et arrive de l'autre côté en haletant.</li>
        </ul>
      </ActionBox>

      <h4 className="font-bold text-lg mt-8 mb-2">📍 ZONE 3-B : L'OUVRIER PRISONNIER (Roleplay et Choix Moral)</h4>
      <ReadAloud title="Texte à lire à voix haute">
        "Tu atterris sur une grande passerelle métallique au-dessus d'une mer de lave rougeoyante. Sur cette passerelle, il y a une machine étrange : une grosse ampoule de verre humain, reliée à des tuyaux.<br/><br/>
        À l'intérieur de cette ampoule, il y a une petite Grenouille de Magma. Elle est rouge vif, avec des yeux tristes. Elle crache de petits jets de flammes qui alimentent toute l'usine, mais elle a l'air épuisée. Un tuyau de goudron noir est branché sur l'ampoule pour la forcer à travailler."
      </ReadAloud>

      <ActionBox title="L'Arbre de Résolution (Libérer Ignis)">
        <p className="mb-4">La grenouille tape contre le verre et mime le mot "À l'aide". Le verre est très épais.</p>
        <ul className="list-disc pl-5 space-y-4 mb-6">
          <li><strong>Option A : Briser le verre (Test de MUSCLE - DD 14) :</strong> Bouboule donne un Coup de Bélier.
            <ul className="list-circle pl-5 mt-1">
              <li><em>Si réussite :</em> Le verre se brise en mille morceaux. La grenouille est libre !</li>
              <li><em>Si échec :</em> Le coup fait trembler la machine. Le verre se fend, mais une alarme retentit (BIP ! BIP ! BIP !), ce qui alertera les ennemis de la prochaine salle (les monstres auront l'Initiative d'office). Elle doit retaper une 2ème fois sans jet pour l'ouvrir.</li>
            </ul>
          </li>
          <li><strong>Option B : Le Choc Thermique (Test de MAGIE - DD 12) :</strong> L'astuce physique ! Bouboule tire de l'eau glacée sur le verre brûlant.
            <ul className="list-circle pl-5 mt-1">
              <li><em>Réussite automatique du concept (Pas de dégâts collatéraux) :</em> Le changement de température fait exploser le verre silencieusement (Crack !). C'est la méthode la plus intelligente.</li>
            </ul>
          </li>
        </ul>

        <h5 className="font-bold mb-2">La Récompense :</h5>
        <p className="mb-4">La petite grenouille saute sur le nez de Bouboule.<br/><br/>
        "Croâ ! Je suis Ignis. Merci de m'avoir sorti de ce cauchemar, grand poisson d'eau douce ! Pour te remercier, je vais t'aider."</p>
        <p><strong>Loot : L'Étincelle d'Ignis.</strong> La grenouille accompagne Bouboule. Une fois dans cette aventure, la joueuse peut dire "J'utilise Ignis !". La grenouille crachera alors une boule de feu géante sur un ennemi, infligeant <strong>3d6 dégâts</strong> automatiquement (pas de jet d'attaque requis). C'est un joker ultra-puissant !</p>
      </ActionBox>

      <h4 className="font-bold text-lg mt-8 mb-2">📍 ZONE 3-C : L'ATELIER D'ASSEMBLAGE (Combat Tactique)</h4>
      <ReadAloud title="Texte à lire à voix haute">
        "Avec Ignis la grenouille sur ton épaule, tu continues sur la passerelle et tu entres dans l'Atelier d'Assemblage. C'est ici que les armures noires sont terminées.<br/><br/>
        La salle est remplie d'enclumes, d'outils rouillés et de cuves d'eau sale. Mais le travail ne se fait pas tout seul ! Trois Macaques-Forgerons corrompus par la Mue Noire travaillent ici. Ils portent des tabliers de cuir épais et tiennent des marteaux brûlants. En voyant ton intrusivité, ils hurlent, frappent leurs marteaux sur leurs enclumes pour t'intimider, et bondissent pour t'attaquer !"
      </ReadAloud>

      <CombatBox title="⚔️ LE COMBAT D'ATELIER">
        <ul className="list-disc pl-5 space-y-1 mb-6">
          <li><strong>Jet d'Initiative :</strong> (d20 + VITESSE). (Attention : Si l'alarme a sonné à la zone précédente, les macaques attaquent en premier ! Sinon, leur score d'initiative est de 12).</li>
        </ul>

        <h5 className="font-bold mb-2">Statistiques des Ennemis (3 Macaques-Forgerons) :</h5>
        <ul className="list-disc pl-5 space-y-1 mb-6">
          <li><strong>PV :</strong> 14 chacun.</li>
          <li><strong>CA :</strong> 13.</li>
          <li><strong>Mouvement :</strong> Très agiles, ils sautent sur les tuyaux au-dessus de Bouboule pour attaquer de haut.</li>
        </ul>

        <h5 className="font-bold mb-2">Les Actions des Ennemis (Tour du MJ) :</h5>
        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li><strong>Lancer de Rivet Rouge (Distance) :</strong> Un singe jette un boulon chauffé à blanc. (+4 pour toucher). Dégâts : 1d4 + 1 de feu.</li>
          <li><strong>Frappe du Marteau (Corps-à-corps) :</strong> Un singe saute sur la bulle et frappe avec son marteau lourd. (+3 pour toucher). Dégâts : 1d6.</li>
        </ul>

        <h5 className="font-bold mb-2">Environnement Tactique pour Bouboule (Astuces pour la joueuse) :</h5>
        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li><strong>Les Cuves de Refroidissement :</strong> Il y a de gros tonneaux d'eau sale dans la pièce. Si Bouboule utilise son <strong>MUSCLE</strong> pour renverser un tonneau sur un singe, ou sa <strong>MAGIE</strong> pour soulever cette eau, l'eau éteindra les marteaux des singes ! Leurs attaques feront 2 fois moins de dégâts pour le reste du combat.</li>
          <li><strong>Le Combat Vertical :</strong> Les singes grimpent sur les tuyaux. Bouboule peut utiliser sa Bulle-Nuage pour s'élever à leur niveau et les combattre en plein vol, ou leur tirer des bulles acides pour ronger les tuyaux et les faire tomber !</li>
        </ul>
        <p className="italic">Action typique de Bouboule : (Laisse-la rouler ! d20 + Muscle/Magie vs CA 13). Décris comment les armures noires des macaques se fissurent sous ses coups !</p>
      </CombatBox>

      <h4 className="font-bold text-lg mt-8 mb-2">📍 ZONE 3-D : LA FOUILLE DE L'ATELIER ET LA PORTE DE VULCAIN</h4>
      <p className="mb-4">Une fois les trois macaques vaincus, ils perdent leur goudron, redeviennent des singes normaux, clignent des yeux d'un air confus et s'enfuient vers la sortie de l'usine. La voie est libre.</p>

      <ActionBox title="La Fouille (Table de Butin de l'Atelier)">
        <p className="mb-4">Dans un coin de la pièce, il y a un vieux coffre à outils humain qui n'a pas été corrompu.</p>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Action :</strong> Bouboule ouvre la boîte. <strong>Le MJ fait lancer 1d6 à la joueuse.</strong></li>
          <li><strong>1 : Un tas d'écrous rouillés.</strong> Ça ne sert à rien, mais Bouboule peut jongler avec.</li>
          <li><strong>2 : Un Morceau de Charbon Magique.</strong> Si elle le frotte sur sa peau, sa prochaine attaque physique fera des dégâts de feu.</li>
          <li><strong>3 : Une Trousse de Premiers Secours Humaine.</strong> Contient des bandages bizarres. Rend <strong>2d6 PV</strong> hors combat.</li>
          <li><strong>4 : Les Lunettes de Protection du Bipède.</strong> Un objet qui se met sur le nez. Protège les yeux de Bouboule de la fumée : elle ne peut plus être aveuglée par les attaques ennemies.</li>
          <li><strong>5 : La Clé à Molette Tourbillon.</strong> Une arme/outil magique. Si elle l'utilise avec une bulle, elle crée un petit tourbillon qui repousse tous les ennemis au prochain combat.</li>
          <li><strong>6 (JACKPOT !) : Le Casque du Contremaître.</strong> Un casque jaune humain magique. Il donne à Bouboule un bonus permanent de <strong>+2 en Défense (CA)</strong> contre toutes les attaques qui viennent d'en haut !</li>
        </ul>
      </ActionBox>

      <h4 className="font-bold text-lg mt-8 mb-2">La Transition vers le Boss :</h4>
      <ReadAloud title="Texte à lire à voix haute">
        "Au bout de l'atelier, tu te trouves face à la porte la plus grande et la plus effrayante que tu aies jamais vue. Elle est en bronze massif, rouge de chaleur. Au-dessus de la porte, un grand panneau clignote : 'SÉCURITÉ MAXIMUM : CŒUR DU RÉACTEUR'.<br/><br/>
        Derrière cette porte, tu entends un souffle puissant, comme la respiration d'un dragon, et le raclement lourd d'une gigantesque carapace sur le métal. La source absolue de la Brume Grise se trouve de l'autre côté. Vulcain, le Maître-Forgeron corrompu, t'attend.<br/><br/>
        Prends le temps de te soigner, Bouboule. Regonfle ta bulle d'eau, prépare Ignis la grenouille, et vérifie tes objets magiques. Le combat pour l'âme de la montagne est sur le point de commencer."
      </ReadAloud>

      <InfoBox title="Pour le MJ">
        <p>C'est une excellente zone pour vérifier l'inventaire de ta fille avant le boss de fin de chapitre. Fais un récapitulatif avec elle de ses PV, de ses objets (a-t-elle encore la Glace à la Vanille du Chapitre 2 ? Des potions ?), et rappelle-lui l'existence de son coup ultime (Le Chant des Abysses).</p>
      </InfoBox>
    </section>
  );
}
