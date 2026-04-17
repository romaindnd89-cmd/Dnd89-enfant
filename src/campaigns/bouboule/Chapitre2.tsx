import React from 'react';
import { ReadAloud, CombatBox, ActionBox, InfoBox } from '../../components/StoryBlocks';

export default function Chapitre2() {
  return (
    <section id="chap2">
      <h2 className="font-display text-4xl font-bold text-amber-700 mb-6 border-b-4 border-amber-200 pb-2 mt-16">
        CHAPITRE 2 : LES ROYAUMES TERRESTRES
      </h2>
      
      <h3 className="font-display text-2xl font-bold text-slate-700 mt-8 mb-4">ZONE 1 : L'ESTUAIRE D'ÉMERAUDE ET LA PLAGE DES MURMURES</h3>
      <p className="text-slate-500 font-medium mb-8">Niveau de difficulté : 2<br/>Type d'environnement : Plage de sable fin, transition eau douce/eau salée, lisière de forêt dense.<br/>Conditions météorologiques : Grand soleil, vent léger soufflant de l'Est (apporte une odeur de sève et de fleurs).</p>

      <h4 className="font-bold text-lg mb-2">1. DESCRIPTION D'OUVERTURE</h4>
      <ReadAloud title="Texte à lire à voix haute">
        "Tu as vaincu la machine des abysses, Bouboule. Alors que tu nages vers la surface, l'eau devient de plus en plus chaude et lumineuse. Enfin, avec un immense SPLASH qui soulève des tonnes d'eau écumante, tu sors la tête hors de l'océan.<br/><br/>
        La vue est à couper le souffle. Pour la première fois de ta vie, tu n'as pas de plafond d'eau au-dessus de toi, mais un dôme infini d'un bleu éclatant : le ciel. L'air est d'une pureté incroyable, chargé de parfums inconnus : ça sent le bois chaud, le sable cuit par le soleil et le sucre des fruits sauvages.<br/><br/>
        Devant toi s'étend la Plage des Murmures. Le sable y est si fin qu'il ressemble à de la poudre d'or. Au loin, tu aperçois une forêt titanesque dont les arbres s'élèvent plus haut que les plus grands coraux que tu aies jamais vus. Leurs racines s'enfoncent directement dans la plage. Mais ici, sur le sable, tu remarques plusieurs choses : à ta gauche, des flaques d'eau de mer laissées par la marée scintillent d'une lumière étrange. Au centre, un gigantesque coquillage humain (un vieux bateau de pêche échoué et rouillé) repose sur le flanc. Et sur le mât de ce bateau, un gros oiseau avec un long bec t'observe attentivement."
      </ReadAloud>

      <ActionBox title="2. MÉCANIQUE MAJEURE : LE DÉPLACEMENT TERRESTRE">
        <p className="mb-4">C'est le premier grand obstacle mécanique du chapitre. Un cachalot s'échoue s'il va sur le sable. Bouboule doit apprendre le sort <strong>Bulle-Nuage</strong> pour lévitater.</p>
        
        <h4 className="font-bold text-lg mb-2">Le Test d'Apprentissage (MAGIE) :</h4>
        <p className="mb-2">La joueuse doit visualiser l'eau l'enveloppant pour la soulever.</p>
        <ul className="list-disc pl-5 space-y-4">
          <li><strong>Jet de MAGIE (d20) :</strong>
            <ul className="list-circle pl-5 mt-1 space-y-2">
              <li><strong>1 à 9 (Échec Critique ou simple échec) :</strong> La magie balbutie. Bouboule parvient à créer une bulle, mais elle est asymétrique. <strong>Conséquence :</strong> Elle se déplace lentement, et doit faire un test de VITESSE (DD 10) à chaque fois qu'elle veut "sauter" un obstacle, sous peine de rebondir lourdement sur le sable (perd 1 PV de maladresse).</li>
              <li><strong>10 à 15 (Réussite Standard) :</strong> La Bulle-Nuage est stable. Elle lévite à 1 mètre du sol et permet à Bouboule de se déplacer à vitesse normale.</li>
              <li><strong>16 à 20+ (Réussite Critique) :</strong> La bulle est un chef-d'œuvre de l'ingénierie magique. Non seulement elle vole, mais elle filtre l'air. <strong>Conséquence :</strong> Bouboule gagne un bonus de +2 à sa CA (Classe d'Armure) contre les attaques à distance tant qu'elle est dans cette bulle parfaite.</li>
            </ul>
          </li>
        </ul>
      </ActionBox>

      <ActionBox title="3. EXPLORATION DE L'ENVIRONNEMENT (Le Bac à Sable)">
        <p className="mb-4">Si Bouboule décide d'explorer la plage avant de parler à l'oiseau, voici les zones interactives et les tests associés :</p>
        
        <h4 className="font-bold text-lg mb-2">Zone A : Les Flaques Scintillantes (Enquête)</h4>
        <p className="mb-2">De grandes mares d'eau d'un mètre de profondeur.</p>
        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li><strong>Action : Fouiller l'eau (Test de PERCEPTION/CŒUR - DD 11).</strong> * Réussite : Elle découvre que le fond n'est pas fait de sable, mais de milliers de petites pièces de monnaie humaines (des euros et centimes rouillés) que les bernard-l'ermite locaux utilisent comme boucliers.</li>
          <li><strong>Interaction optionnelle :</strong> Si elle leur offre le "Biscuit Salé" du Chapitre 1, les petits crabes la remercient en lui offrant un <strong>Éclat de Verre Poli</strong> (Objet : permet de refléter la lumière du soleil pour aveugler un ennemi lors d'un prochain combat).</li>
        </ul>

        <h4 className="font-bold text-lg mb-2">Zone B : Le Tronc Pourri (Danger Mineur)</h4>
        <p className="mb-2">Un énorme tronc d'arbre noirci repose sur le sable, suintant une légère trace de Brume Grise résiduelle.</p>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Action : Détruire ou Nettoyer.</strong>
            <ul className="list-circle pl-5 mt-1 space-y-1">
              <li>Si elle utilise <strong>MUSCLE (DD 12)</strong> pour le briser : Le tronc explose, libérant un essaim de moustiques rendus grognons par la brume. Bouboule subit <strong>1d4 dégâts</strong> automatiques de piqûres avant qu'ils ne se dispersent.</li>
              <li>Si elle utilise <strong>MAGIE (DD 12)</strong> pour le nettoyer : La brume se dissipe, révélant un creux dans le tronc contenant <strong>2 Baies de Soin Sauvages</strong> (Loot : chaque baie rend 1d6 PV si consommée en action bonus pendant un combat).</li>
            </ul>
          </li>
        </ul>
      </ActionBox>

      <h3 className="font-display text-2xl font-bold text-slate-700 mt-8 mb-4">4. RENCONTRE SOCIALE MAJEURE : BARNABÉ LE PÉLICAN</h3>
      <p className="mb-4">L'oiseau perché sur le vieux chalutier humain est un personnage clé.</p>
      
      <InfoBox title="Profil de Barnabé">
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Apparence :</strong> Un pélican bedonnant, avec de petites lunettes d'aviateur coincées sur le front et un grand filet de pêche servant de sac en bandoulière.</li>
          <li><strong>Caractère :</strong> Bavard, un peu lâche, mais très cupide. Il adore les rumeurs et les objets brillants.</li>
          <li><strong>Ce qu'il sait :</strong> Il sait comment ouvrir l'accès à la Forêt des Arbres Géants, et il sait qu'une tribu de Singes-Savants est terrorisée par un monstre.</li>
        </ul>
      </InfoBox>

      <ActionBox title="L'Arbre de Dialogue (Roleplay)">
        <p className="mb-4">Barnabé s'envole et vient se poser au sommet de la Bulle-Nuage de Bouboule.</p>
        <p className="italic mb-6">"Cré nom d'une sardine en bois ! Un cachalot volant ! J'aurais tout vu. Moi c'est Barnabé. T'as l'air d'aller vers la Grande Forêt, ma grosse. Mauvaise idée. Depuis trois lunes, une odeur de goudron rend la faune complètement marteau. Même les Crabes-Cocotiers ont pété les plombs. Tu vas te faire pincer les nageoires !"</p>
        
        <ul className="list-disc pl-5 space-y-4">
          <li><strong>Option 1 : L'Intimider (Test de MUSCLE - DD 13) :</strong> Bouboule gronde et gonfle ses muscles.
            <ul className="list-circle pl-5 mt-1">
              <li><em>Réussite :</em> Barnabé claque du bec de terreur. "C'est bon, c'est bon ! Pas la peine de s'énerver ! Prends ça, c'est la Clé de Racine pour ouvrir le portail de la forêt, et laisse-moi tranquille !" (Bouboule obtient la clé, mais Barnabé s'enfuit et ne donnera plus d'indices).</li>
            </ul>
          </li>
          <li><strong>Option 2 : La Négociation amicale (Test de CŒUR - DD 11) :</strong> Bouboule est polie et lui demande son aide.
            <ul className="list-circle pl-5 mt-1">
              <li><em>Réussite :</em> Barnabé est flatté. "T'es bien élevée pour un monstre marin. Je veux bien te donner la Clé de Racine pour ouvrir la forêt. Mais en échange, tu vois ces Crabes-Cocotiers corrompus près du bateau ? Ils m'empêchent d'aller chercher mon trésor dans la cale. Débarrasse-m'en, et la clé est à toi !"</li>
            </ul>
          </li>
        </ul>
      </ActionBox>

      <h3 className="font-display text-2xl font-bold text-slate-700 mt-8 mb-4">5. L'ÉVÉNEMENT DE COMBAT TACTIQUE : LES CRABES-COCOTIERS</h3>
      <p className="mb-4">Si Bouboule accepte la mission de Barnabé (ou si elle s'approche trop près du chalutier échoué sans précaution), le combat s'enclenche.</p>
      
      <CombatBox title="Mise en place de la Scène">
        <p className="italic mb-6">"Autour de la coque rouillée du navire, trois énormes Crabes-Cocotiers (de la taille de gros chiens) dévorent des filets de pêche. Ils ont respiré la Mue Noire : leurs carapaces sont couvertes de plaques de goudron, et ils bavent une écume noire. En te voyant, ils lèvent leurs énormes pinces asymétriques et chargent vers ta bulle !"</p>
        
        <h4 className="font-bold text-lg mb-2">Statistiques des Ennemis (3 Crabes Corrompus) :</h4>
        <ul className="list-disc pl-5 space-y-1 mb-6">
          <li><strong>PV :</strong> 10 PV chacun.</li>
          <li><strong>Classe d'Armure (CA) :</strong> 13.</li>
          <li><strong>Mouvement :</strong> Rapides sur le sable, ils peuvent encercler Bouboule.</li>
        </ul>

        <h4 className="font-bold text-lg mb-2">Mécanique de Terrain (Règles Spéciales du MJ) :</h4>
        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li><strong>Le Sable Mouvant :</strong> Le sable autour du bateau est très mou. Si Bouboule fait un <em>Échec Critique</em> (1 sur le d20) lors d'une attaque de VITESSE ou de MUSCLE, sa bulle s'enlise temporairement. Elle aura un "Désavantage" sur sa prochaine attaque.</li>
          <li><strong>Le Filet de Pêche :</strong> Il y a un grand filet humain étendu sur le sol. Bouboule peut utiliser une action de MAGIE (DD 12) pour créer un courant d'eau qui soulève le filet et emprisonne un ou plusieurs crabes, les empêchant d'attaquer pendant 1 tour complet.</li>
        </ul>

        <h4 className="font-bold text-lg mb-2">Le Déroulement (Actions de la Joueuse) :</h4>
        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li><strong>Jet d'Initiative :</strong> (d20 + VITESSE). Les crabes ont 11.</li>
          <li><strong>Si Bouboule attaque au Corps à Corps (Coup de Bélier) :</strong> (d20 + MUSCLE vs CA 13). Dégâts : 1d8 + MUSCLE. <em>Description : "Ton énorme tête s'écrase sur la carapace du crabe, le projetant à trois mètres dans le sable dans un bruit de coquille brisée !"</em></li>
          <li><strong>Si Bouboule attaque à Distance (Bulle Acide) :</strong> (d20 + MAGIE vs CA 13). Dégâts : 1d6 + MAGIE. <em>Description : "Ta bulle d'eau sous pression éclate sur son armure de goudron, lavant la corruption et le brûlant en même temps."</em></li>
          <li><strong>Attaque des Crabes (Tour du MJ) :</strong> (d20 vs CA de Bouboule). S'ils touchent : "Le crabe bondit et referme sa lourde pince sur ta cape rouge, te tirant vers le bas ! Tu perds 1d4 + 2 PV."</li>
        </ul>

        <h4 className="font-bold text-lg mb-2">Résolution et Butin :</h4>
        <p className="mb-2">Une fois les PV des crabes à 0, la magie noire s'évapore et les crabes s'enfuient.</p>
        <p className="italic mb-4">Barnabé le pélican descend du mât. "T'es une vraie guerrière ! Chose promise, chose due."</p>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Loot de Quête :</strong> La Clé de Racine (Nécessaire pour ouvrir la porte géante à la lisière de la forêt).</li>
          <li><strong>Loot Aléatoire (Fouille du chalutier) :</strong> Lancer 1d20.
            <ul className="list-circle pl-5 mt-1">
              <li><em>Si 15+ :</em> Bouboule trouve une "Perle d'Aurore" cachée dans la cale. Cet objet magique permet de ressusciter un compagnon tombé à 0 PV ou de regagner 15 PV d'un coup.</li>
            </ul>
          </li>
        </ul>
      </CombatBox>

      <h3 className="font-display text-2xl font-bold text-slate-700 mt-12 mb-4">ZONE 2 : LE PORTAIL DES RACINES ET LA JUNGLE VERTICALE</h3>
      <p className="text-slate-500 font-medium mb-8">Niveau de difficulté : 2+<br/>Lieu : La lisière de la Forêt des Arbres Géants.<br/>Ambiance : Majestueuse, humide, sons de tambours lointains, végétation titanesque.</p>

      <InfoBox title="1. L'OBJET MAGIQUE : LA CLÉ DE RACINE (Améliorée)">
        <p className="mb-2">La Clé de Racine n'est pas un simple morceau de bois. C'est une petite racine vivante, de la taille d'une flûte, qui s'enroule autour de la nageoire de Bouboule.</p>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Propriété "Cœur de la Forêt" :</strong> La clé pulse d'une lumière verte quand elle s'approche d'un secret ou d'un danger caché dans la végétation.</li>
          <li><strong>Propriété "Langage des Bois" :</strong> Tant que Bouboule porte la clé, elle peut comprendre le murmure des arbres (ce qui donne un bonus de +2 aux tests de Sagesse/Perception dans la forêt).</li>
        </ul>
      </InfoBox>

      <h4 className="font-bold text-lg mt-8 mb-2">2. SCÈNE 1 : LE PORTAIL DU COLOSSE (Narration)</h4>
      <ReadAloud title="Texte à lire à voix haute">
        "Tu quittes le sable chaud de la plage pour t'enfoncer sous la canopée. La transition est brutale : la lumière devient verte et tamisée, filtrée par des feuilles larges comme des navires. Devant toi se dresse le Portail du Colosse. Ce n'est pas une porte fabriquée, mais deux arbres millénaires dont les troncs se sont entrelacés pour former une arche de cinquante mètres de haut."<br/><br/>
        "Le passage est scellé par un rideau de ronces noires et épineuses, épaisses comme des câbles d'acier. Au centre du rideau, une petite fente en forme de cœur attend la Clé de Racine. Mais attention, Bouboule : le sol devant le portail est jonché de vieux pièges de chasseurs humains (des filets et des fosses camouflées par des feuilles) et l'air est lourd d'un parfum trop sucré qui semble t'endormir..."
      </ReadAloud>

      <ActionBox title="3. MÉCANIQUE : LE TEST DE VIGILANCE (Pièges et Environnement)">
        <p className="mb-2">Avant d'utiliser la clé, Bouboule doit atteindre la serrure.</p>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Jet de PERCEPTION (Sagesse/Cœur) - DD 13 :</strong>
            <ul className="list-circle pl-5 mt-1 space-y-2">
              <li><em>Réussite :</em> Elle repère les fils invisibles tendus entre les fougères. Elle peut les éviter ou les brûler avec sa magie.</li>
              <li><em>Échec :</em> Elle déclenche un vieux mécanisme. Un filet chargé de pierres tombe du plafond !
                <ul className="list-square pl-5 mt-1">
                  <li><strong>Action de Réaction :</strong> Bouboule doit faire un <strong>Jet de VITESSE (DD 12)</strong> pour esquiver. Si elle échoue, elle est entravée (ne peut plus bouger) et perd <strong>1d4 PV</strong>. Elle devra utiliser son <strong>MUSCLE</strong> pour déchirer le filet.</li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
      </ActionBox>

      <h4 className="font-bold text-lg mt-8 mb-2">4. SCÈNE 2 : L'OUVERTURE ET LA RENCONTRE (Social / Choix)</h4>
      <p className="mb-4">Une fois la clé insérée, les ronces s'écartent avec un bruit de bois qui craque. Mais un gardien apparaît.</p>
      
      <InfoBox title="Le PNJ : Griffe-Douce, le Lynx Sentinelle">
        <p>Un lynx immense aux oreilles surmontées de longs pinceaux de poils noirs. Il porte une armure de cuir humain recyclé et une lance en bois d'ébène. Il est assis pile au milieu du passage.</p>
      </InfoBox>

      <ReadAloud title="Texte de Barnabé (le Pélican qui t'accompagne toujours)">
        "Houlà ! C'est Griffe-Douce. Il n'aime pas les touristes, surtout ceux qui volent dans des bulles d'eau. Il est très fier de son énigme. Si tu ne réponds pas bien, il ne te laissera pas passer, et il griffe fort !"
      </ReadAloud>

      <ActionBox title="L'Énigme de Griffe-Douce">
        <p className="italic font-bold text-xl mb-4">"Je n'ai pas de jambes mais je voyage partout. Je n'ai pas de voix mais je peux hurler. Je n'ai pas de mains mais je peux briser les arbres. Qui suis-je ?"</p>
        
        <h5 className="font-bold mb-2">Les Choix de la Joueuse :</h5>
        <ul className="list-disc pl-5 space-y-4">
          <li><strong>Répondre à l'énigme :</strong> La réponse est <strong>Le Vent</strong>. (Si elle trouve, Griffe-Douce s'incline : "Ton esprit est aussi vaste que l'horizon. Passe, Cachalot.")</li>
          <li><strong>Utiliser la Diplomatie (Test de CŒUR - DD 14) :</strong> Bouboule lui explique sa mission pour sauver la forêt de la Mue Noire.
            <ul className="list-circle pl-5 mt-1">
              <li><em>Réussite :</em> Griffe-Douce est touché par sa noblesse. Il lui offre une <strong>Épaulette de Gardien</strong> (Loot : +1 CA).</li>
            </ul>
          </li>
          <li><strong>Le Duel de Regard (Test de MUSCLE - DD 15) :</strong> Essayer d'impressionner le Lynx par sa taille.
            <ul className="list-circle pl-5 mt-1">
              <li><em>Réussite :</em> Le lynx recule, impressionné par la puissance de Bouboule.</li>
            </ul>
          </li>
          <li><strong>L'Échec social :</strong> Si la joueuse rate ses jets de dés lors de la discussion, Cornélius accepte quand même l'aide (il en a besoin), mais il sera grognon et refusera de l'aider en cas de danger pendant l'exploration.</li>
        </ul>
      </ActionBox>

      <h4 className="font-bold text-lg mt-8 mb-2">5. SCÈNE 3 : LE COMBAT DES SINGES-GOUDRON (Action Tactique)</h4>
      <p className="mb-4">Une fois le portail franchi, la forêt devient plus sombre. La Mue Noire est ici.</p>
      
      <ReadAloud title="Texte à lire à voix haute">
        "Tu t'enfonces dans la Jungle Verticale. Les arbres sont si hauts que tu ne vois plus le ciel. Soudain, des cris stridents résonnent dans les branches. Trois Singes-Hurleurs, corrompus par le goudron, sautent de branche en branche au-dessus de toi. Ils ne descendent pas au sol : ils t'attaquent en te lançant des noix de coco explosives remplies de goudron noir !"
      </ReadAloud>

      <CombatBox title="Statistiques des Ennemis (3 Singes Corrompus)">
        <ul className="list-disc pl-5 space-y-1 mb-6">
          <li><strong>PV :</strong> 12 chacun.</li>
          <li><strong>CA :</strong> 14 (Ils sont très agiles et difficiles à viser).</li>
          <li><strong>Attaque :</strong> Lancer de Noix de Goudron (Portée : 15 mètres). Dégâts : 1d6 + ralentissement (Vitesse -1 au prochain tour).</li>
        </ul>

        <h5 className="font-bold mb-2">Mécanique Spéciale : Le Combat Vertical</h5>
        <p className="mb-2">Bouboule est dans sa Bulle-Nuage, elle peut donc monter en hauteur !</p>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Action de MAGIE : "Onde de Choc Aquatique" :</strong> Bouboule peut faire exploser une partie de sa bulle pour créer une onde qui secoue les arbres.
            <ul className="list-circle pl-5 mt-1">
              <li><em>Jet de MAGIE (DD 13) :</em> Si réussi, les singes tombent de leurs branches. Une fois au sol, ils perdent leur bonus de Vitesse et Bouboule peut les charger avec son <strong>MUSCLE</strong> (Coup de bélier) avec un <strong>Avantage</strong> (lance 2 dés et garde le meilleur).</li>
            </ul>
          </li>
        </ul>
      </CombatBox>

      <h4 className="font-bold text-lg mt-8 mb-2">6. SCÈNE 4 : LE TEMPLE DES LIANES (Exploration et Récompense)</h4>
      <p className="mb-4">Après le combat, le chemin mène à une structure ancienne : une station météo humaine totalement recouverte de lianes fleuries.</p>
      
      <ActionBox title="L'Énigme des Boutons (Réflexion)">
        <p className="mb-2">À l'intérieur de la station, il y a trois gros boutons colorés qui clignotent encore. Un message vocal humain grésille dans un haut-parleur : <em>"Température... Humidité... Pression..."</em></p>
        <ol className="list-decimal pl-5 space-y-1 mb-4">
          <li>Le bouton <strong>Bleu</strong> fait tomber de la pluie dans la pièce.</li>
          <li>Le bouton <strong>Jaune</strong> crée une lumière intense.</li>
          <li>Le bouton <strong>Vert</strong> fait pousser des plantes instantanément.</li>
        </ol>
        
        <p className="mb-2"><strong>Le Défi :</strong> Une plante carnivore géante bloque le coffre au trésor au fond de la pièce. Elle a soif et elle a froid.</p>
        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li><strong>Solution :</strong> La joueuse doit appuyer sur le bouton <strong>Bleu</strong> (pluie) puis <strong>Jaune</strong> (soleil). La plante s'ouvre, rassasiée, et révèle le trésor.</li>
        </ul>

        <h5 className="font-bold mb-2">Loot du Temple :</h5>
        <ol className="list-decimal pl-5 space-y-2">
          <li><strong>La Diadème de la Jungle :</strong> Une couronne de fleurs qui ne fane jamais. Elle permet à Bouboule de parler aux plantes une fois par jour.</li>
          <li><strong>Le Fragment de Cristal Vert :</strong> C'est le deuxième morceau du Cristal de Rire ! (Il en faut 4).</li>
        </ol>
      </ActionBox>

      <h4 className="font-bold text-lg mt-8 mb-2">7. CONCLUSION DE LA ZONE</h4>
      <ReadAloud title="Texte à lire à voix haute">
        "Alors que tu récupères le fragment vert, la forêt semble respirer de nouveau. Les fleurs s'ouvrent, les oiseaux reprennent leur chant. Mais au loin, vers le sommet de la Montagne Fumante, tu vois un immense nuage noir s'élever. La source de la Mue Noire n'est plus très loin... Es-tu prête à grimper plus haut, là où l'air se fait rare ?"
      </ReadAloud>

      <h3 className="font-display text-2xl font-bold text-slate-700 mt-12 mb-4">ZONE 3 : LES PONTS DE SINGE ET LA CITÉ SUSPENDUE</h3>
      <p className="text-slate-500 font-medium mb-8">Niveau de difficulté : 2 à 3<br/>Lieu : La Canopée (le sommet des Arbres Géants).<br/>Ambiance : Vertigineuse, venteuse, bruits de cordages qui grincent, danger aérien.</p>

      <h4 className="font-bold text-lg mb-2">1. DESCRIPTION D'OUVERTURE</h4>
      <ReadAloud title="Texte à lire à voix haute">
        "Tu as laissé le sol de la jungle loin derrière toi. En utilisant ta Bulle-Nuage, tu t'es élevée le long d'un tronc si large qu'il ressemble à un mur de bois. Plus tu montes, plus le vent souffle fort, faisant vibrer ta cape rouge.<br/><br/>
        Soudain, tu débouches au-dessus des feuilles. La vue est incroyable : tu es à des centaines de mètres de haut ! Le soleil brille fort, et sous tes nageoires s'étend un océan de feuilles vertes. Devant toi se trouve la Cité Suspendue des Macaques : un réseau complexe de vieilles cabanes en bois humain, reliées entre elles par des dizaines de ponts de singe faits de cordes tressées et de lianes.<br/><br/>
        Mais l'ambiance n'est pas à la fête. Les ponts grincent dangereusement sous le vent. Des traces de Mue Noire tachent le bois des passerelles. Et surtout, tu entends un battement d'ailes lourd et menaçant qui s'approche à toute vitesse depuis les nuages..."
      </ReadAloud>

      <h4 className="font-bold text-lg mt-8 mb-2">2. SCÈNE 1 : L'EMBUSCADE EN PLEIN CIEL (Combat Aérien)</h4>
      <p className="mb-4">À peine Bouboule s'est-elle engagée sur le premier grand pont de singe qu'elle est attaquée. C'est un combat où le vide est un danger.</p>
      
      <ReadAloud title="Texte à lire à voix haute">
        "Le vent siffle ! Quatre ombres plongent sur toi depuis le ciel éblouissant. Ce sont des Chauves-Souris Géantes, corrompues par le goudron ! Leurs ailes sont poisseuses, leurs yeux brillent d'une lueur rouge, et elles poussent des cris perçants (Kriiiii !). Elles essaient de percer ta Bulle-Nuage avec leurs griffes !"
      </ReadAloud>

      <CombatBox title="Statistiques des Ennemis (4 Chauves-Souris de Goudron)">
        <ul className="list-disc pl-5 space-y-1 mb-6">
          <li><strong>PV :</strong> 6 PV chacune (Elles sont fragiles mais rapides).</li>
          <li><strong>CA :</strong> 14 (Difficiles à toucher car elles volent vite).</li>
          <li><strong>Attaque :</strong> <em>Morsure toxique.</em> +4 pour toucher, 1d4 dégâts.</li>
        </ul>

        <h5 className="font-bold mb-2">Mécanique Spéciale : Le Pont Instable (L'environnement)</h5>
        <p className="mb-2">Bouboule flotte au-dessus d'un pont qui se balance.</p>
        <ul className="list-disc pl-5 space-y-2">
          <li>Si Bouboule utilise son <strong>MUSCLE</strong> (Coup de Bélier), elle prend le risque de percuter le pont. Elle doit lancer un d20. Si elle fait 1 (Échec Critique), le pont tremble violemment : elle perd l'équilibre dans sa bulle et passe son prochain tour.</li>
          <li><strong>La Stratégie optimale :</strong> Utiliser la <strong>MAGIE</strong> (Tir de Bulle) pour les repousser dans le vide sans abîmer les cordages. <em>Description : "Ta bulle d'eau percute la chauve-souris en plein vol. Le choc la déséquilibre et elle tombe en tourbillonnant vers le bas de la forêt !"</em></li>
        </ul>
      </CombatBox>

      <h4 className="font-bold text-lg mt-8 mb-2">3. SCÈNE 2 : LE COFFRE PARACHUTÉ (Fouille et Butin Aléatoire)</h4>
      <p className="mb-4">Une fois le combat gagné, Bouboule avance sur le pont sécurisé.</p>
      
      <ReadAloud title="Texte à lire à voix haute">
        "Ouf, le ciel est dégagé ! En continuant d'avancer, tu remarques quelque chose de brillant coincé dans les branches d'un arbre voisin, juste à côté du pont. C'est une grosse caisse en métal humain, peinte en orange vif, attachée à un vieux parachute délavé. Le couvercle est à moitié ouvert. C'est un coffre aux trésors tombé du ciel il y a bien longtemps !"
      </ReadAloud>

      <ActionBox title="L'Action : Ouvrir le coffre">
        <p className="mb-4">Le métal est rouillé. Bouboule doit faire un jet de <strong>MUSCLE (DD 10)</strong> ou de <strong>MAGIE (DD 10)</strong> pour forcer le couvercle. Une fois ouvert, c'est l'heure du hasard !</p>
        
        <h5 className="font-bold mb-2">LA TABLE DE BUTIN ALÉATOIRE (Le MJ fait lancer 1d6 à la joueuse) :</h5>
        <ol className="list-decimal pl-5 space-y-2">
          <li><strong>Un vieux ressort humain.</strong> Ce n'est pas très utile pour l'instant, mais ça fait "Boing". (Objet rigolo sans effet).</li>
          <li><strong>3 Bonbons "Souffle de Dragon".</strong> Si Bouboule en mange un pendant un combat, sa prochaine bulle magique fera des dégâts de feu (+1d4 dégâts bonus).</li>
          <li><strong>Le Pendentif de l'Écaille Dure.</strong> Un bijou magique. Confère un bonus permanent de +1 aux Points de Vie Maximum (Bouboule gagne en robustesse).</li>
          <li><strong>Une Potion d'Eau Pure (Flacon de verre).</strong> Rend 2d8 + 2 PV quand on la boit. Un excellent soin d'urgence !</li>
          <li><strong>Le Sifflet des Vents.</strong> Un petit sifflet d'argent. S'il est utilisé (1 fois par aventure), il crée une bourrasque qui repousse tous les ennemis à 10 mètres.</li>
          <li><strong>[JACKPOT !] La Couronne des Nuages.</strong> Un objet légendaire ! Permet à la Bulle-Nuage de Bouboule de se déplacer deux fois plus vite, et lui donne +1 en CA pour esquiver les attaques.</li>
        </ol>
      </ActionBox>

      <h4 className="font-bold text-lg mt-8 mb-2">4. SCÈNE 3 : LE VILLAGE MACAQUE ET LE CHEF GROS-SOURCIL (Interaction)</h4>
      <p className="mb-4">Bouboule arrive enfin au bout des ponts et pénètre sur la place centrale de la Cité Suspendue.</p>
      
      <ReadAloud title="Texte à lire à voix haute">
        "La ville est construite sur d'immenses plateformes de bois. Normalement, ça devrait être très animé, mais tous les macaques sont cachés dans leurs tonneaux ou derrière les portes. Seul un vieux singe imposant, avec des sourcils blancs broussailleux qui lui tombent sur les yeux, t'attend, appuyé sur une canne. C'est le Chef Gros-Sourcil."
      </ReadAloud>

      <ActionBox title="L'Arbre de Dialogue (Roleplay)">
        <p className="italic mb-4">"Par la grande banane sacrée ! Un Cachalot dans les arbres ! J'ai cru que la Mue Noire m'avait donné des hallucinations," dit le chef en ajustant ses lunettes. "Si tu es ici pour grimper jusqu'à la Montagne Fumante, tu as un problème. L'Ascenseur Géant est bloqué."</p>
        
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>La Joueuse demande "Pourquoi ?" ou "Que se passe-t-il ?" :</strong>
            <ul className="list-circle pl-5 mt-1">
              <li><em>Réponse du Chef :</em> "L'ascenseur fonctionne grâce à une énorme roue en bois. Mais une Reine Termite a respiré la Mue Noire. Elle a muté, elle a grandi comme un rhinocéros, et elle s'est installée sur notre mécanisme ! Elle mange notre bois et crache de l'acide noir. Mes guerriers sont terrifiés. Chasse-la, et je t'ouvrirai la route de la montagne !"</li>
            </ul>
          </li>
        </ul>
      </ActionBox>

      <h4 className="font-bold text-lg mt-8 mb-2">5. SCÈNE 4 : LE BOSS DE LA CITÉ - LA REINE TERMITE (Grand Combat)</h4>
      <p className="mb-4">Le Chef guide Bouboule vers l'arrière de la ville, là où se trouve l'énorme rouage en bois qui fait monter la nacelle vers la montagne.</p>
      
      <ReadAloud title="Texte à lire à voix haute">
        "Le bruit de mastication est affreux : CRRR... CRRR... SCHLOUIP. Au centre du rouage, recouverte d'une épaisse armure de goudron, se trouve la Reine Termite Corrompue. Elle est grosse comme un camion, ses mandibules coupent le bois massif comme du beurre, et son abdomen gonflé pulse d'une lumière grise maladive. Elle te fixe de ses multiples yeux noirs, pousse un sifflement strident et crache un jet d'acide !"
      </ReadAloud>

      <CombatBox title="Statistiques du Boss : La Reine Termite Corrompue">
        <ul className="list-disc pl-5 space-y-1 mb-6">
          <li><strong>PV :</strong> 45 (Un combat d'endurance !).</li>
          <li><strong>CA :</strong> 15 (Armure très épaisse).</li>
          <li><strong>Résistance :</strong> Immunisée aux attaques de MUSCLE si la CA n'est pas dépassée de beaucoup.</li>
        </ul>

        <h5 className="font-bold mb-2">Actions de la Reine Termite (Le MJ joue le Boss) :</h5>
        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li><strong>Jet d'Acide Noir (Distance) :</strong> +5 pour toucher. Dégâts : 1d6 + 2, et la Bulle-Nuage de Bouboule devient floue (Bouboule a un malus de -1 à sa CA pour 1 tour).</li>
          <li><strong>Invocation (1 fois dans le combat quand elle tombe à 20 PV) :</strong> Elle tape du sol et invoque <strong>2 Petites Termites (PV: 5)</strong> qui viennent l'aider.</li>
        </ul>

        <h5 className="font-bold mb-2">Stratégies et Environnement pour Bouboule :</h5>
        <p className="mb-2">C'est le moment d'utiliser tout ce qu'elle a appris et looté !</p>
        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li>Si elle a gagné les "Bonbons Souffle de Dragon", c'est le moment idéal (le feu brûle bien les insectes).</li>
          <li>Elle peut attaquer les mandibules (MAGIE) pour laver le goudron.</li>
          <li><strong>Le Baril d'Eau de Pluie :</strong> À côté de la bête, il y a un grand tonneau. Si Bouboule fait une attaque de MUSCLE sur le tonneau, il explose et renverse une cascade d'eau pure sur la Reine. L'armure de goudron fond légèrement, baissant la CA du boss à <strong>13</strong> pour le reste du combat !</li>
        </ul>
        <p className="italic">Narre le combat de manière épique : la violence des chocs, le bois de l'ascenseur qui tremble, l'acide qui frôle la bulle de Bouboule !</p>
      </CombatBox>

      <h4 className="font-bold text-lg mt-8 mb-2">6. CONCLUSION DE LA ZONE</h4>
      <ReadAloud title="Texte à lire à voix haute">
        "Dans un dernier hurlement gorgé de bulles et de magie, la Reine Termite s'effondre. Son épaisse armure de goudron se brise en mille éclats comme du verre noir. Elle redevient une termite normale (quoique très grosse), s'excuse maladroitement et s'enfuit sous terre."<br/><br/>
        "Le Chef Gros-Sourcil et tous les macaques sortent de leurs cachettes en poussant des cris de joie. Ils t'acclament ! Le Chef tire le grand levier. Le mécanisme, débarrassé du monstre, se met à tourner. CLAC, CLAC, CLAC. L'immense plateforme de l'ascenseur se met à monter lentement."<br/><br/>
        "Tu montes sur la plateforme dans ta bulle. Tu dis au revoir aux singes. L'ascenseur t'emmène au-dessus des nuages. Devant toi se dresse enfin ton objectif final : la Montagne Fumante, aux pentes noires de cendres, d'où provient la source principale de la Brume Grise."
      </ReadAloud>

      <ActionBox title="🛡️ MÉCANISME 1 : Le 'Bouclier des Amis' (Si les PV tombent à 1)">
        <p className="mb-4">Ce mécanisme s'active juste avant qu'elle ne perde tout son courage. C'est idéal pour garder la tension sans la déception.</p>
        
        <h5 className="font-bold mb-2">Texte à lire à voix haute :</h5>
        <p className="italic mb-4">"Bouboule, tu te sens très faible. Tes nageoires sont lourdes et ta Bulle-Nuage commence à vaciller. La Reine Termite lève ses énormes mandibules pour un coup final... mais soudain, un sifflement strident déchire l'air !<br/><br/>
        C'est Barnabé le Pélican ! Il plonge du ciel et jette son grand filet de pêche sur la tête de la Reine, la ralentissant. Au même moment, une dizaine de petits macaques sortent de leurs cachettes et jettent des fruits magiques lumineux qui créent un écran de fumée autour de toi.<br/><br/>
        Le Chef Gros-Sourcil crie : 'Ne baisse pas les bras, Grand Cachalot ! La forêt a besoin de toi !'."</p>
        
        <h5 className="font-bold mb-2">Mécanique de jeu :</h5>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Le Don d'Amitié :</strong> Les animaux lui redonnent de l'espoir. Bouboule récupère instantanément <strong>10 PV</strong>.</li>
          <li><strong>L'Effet Tactique :</strong> Le Boss est "Entravé" par le filet pendant 1 tour (il ne peut pas attaquer).</li>
          <li><strong>Le Bonus :</strong> Pour le prochain tour, Bouboule a un <strong>Avantage</strong> (elle lance deux d20) pour son attaque car elle est encouragée par ses amis.</li>
        </ul>
      </ActionBox>

      <ActionBox title="✨ MÉCANISME 2 : L'Éveil de l'Étincelle d'Étoile (Si les PV tombent à 0)">
        <p className="mb-4">Si elle atteint 0 PV, c'est le moment de la transformation "Super Cachalot".</p>
        
        <h5 className="font-bold mb-2">Texte à lire à voix haute :</h5>
        <p className="italic mb-4">"Bouboule, tes yeux se ferment. Le goudron noir semble avoir gagné. Tu te sens glisser doucement vers le bas de l'ascenseur... Mais alors que tout devient noir, une chaleur intense monte de ton cœur. C'est le Fragment de Cristal Jaune que tu as trouvé dans le Chapitre 1 !<br/><br/>
        Il se met à briller d'une lumière si forte qu'elle traverse ta cape rouge. Tu te souviens de la Poussière d'Étoile des anciens humains. Tu ne te laisses pas abattre ! Dans une explosion de lumière dorée, ta Bulle-Nuage se transforme : elle devient dorée et plus solide que du diamant. Tes yeux s'ouvrent, ils pétillent d'énergie d'étoile !"</p>
        
        <h5 className="font-bold mb-2">Mécanique de jeu :</h5>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Résurrection Épique :</strong> Bouboule revient à la vie avec <strong>la moitié de ses PV Max</strong>.</li>
          <li><strong>Transformation temporaire :</strong> Pendant les 3 prochains tours, Bouboule est en mode "Éveillée" :
            <ul className="list-circle pl-5 mt-1">
              <li>Elle ajoute <strong>+1d6 de dégâts de lumière</strong> à toutes ses attaques.</li>
              <li>Sa CA (Classe d'Armure) augmente de <strong>+2</strong>.</li>
            </ul>
          </li>
          <li><strong>Coût :</strong> Une fois le combat fini, le cristal redevient terne et elle devra se reposer longtemps pour le recharger.</li>
        </ul>
      </ActionBox>

      <InfoBox title="🎁 L'OBJET DE SECOURS : 'L'Ambre de Vie'">
        <p className="mb-4">Si tu veux lui donner un objet "au cas où" avant le combat, voici sa fiche de manuel D&D.</p>
        <ul className="list-disc pl-5 space-y-2 mb-4">
          <li><strong>Type :</strong> Consommable (Usage unique).</li>
          <li><strong>Description :</strong> Une petite pierre d'ambre contenant une bulle d'air préhistorique.</li>
          <li><strong>Effet :</strong> Si Bouboule tombe à 0 PV, l'Ambre se brise automatiquement. Elle n'est pas assommée et récupère <strong>1d10 + 5 PV</strong>.</li>
          <li><strong>Note du MJ :</strong> "C'est un cadeau que le Lynx Griffe-Douce ou le Chef Gros-Sourcil peut lui donner discrètement avant le combat en lui disant : 'Prends ça, au cas où le vent tournerait...'"</li>
        </ul>
        
        <h5 className="font-bold mb-2">💡 Conseil pour le Papa MJ :</h5>
        <p>Si tu vois qu'elle commence à être triste parce qu'elle perd trop de vie, n'attends pas le 0 PV. Utilise le <strong>Mécanisme 1</strong>. Ça lui montrera que dans D&D, aider les autres (comme elle a aidé les singes et le pélican) permet d'être aidé en retour. C'est une belle leçon de coopération !</p>
      </InfoBox>
    </section>
  );
}
