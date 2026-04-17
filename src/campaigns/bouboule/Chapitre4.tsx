import React from 'react';
import { ReadAloud, CombatBox, ActionBox, InfoBox } from '../../components/StoryBlocks';

export default function Chapitre4() {
  return (
    <section id="chap4">
      <h2 className="font-display text-4xl font-bold text-blue-700 mb-6 border-b-4 border-blue-200 pb-2 mt-16">
        CHAPITRE 4 : LES PICS D'ARGENT
      </h2>
      
      <h3 className="font-display text-2xl font-bold text-slate-700 mt-8 mb-4">SECTION 1 : LA BANQUISE SUSPENDUE ET L'OURS EN DOUDOUNE</h3>
      
      <InfoBox title="📚 HISTOIRE ET LORE POUR LE MAÎTRE DU JEU (Secret du MJ)">
        <p className="italic mb-4">Ne lis pas ceci à la joueuse.</p>
        <p>Les Pics d'Argent étaient autrefois une gigantesque station de ski et un observatoire météorologique pour les humains. Aujourd'hui, c'est le Royaume du Froid Éternel. La Mue Noire a ici une forme différente : le froid fige le goudron pour créer de la "Glace Noire". Contrairement au feu qui rend les animaux furieux, la Glace Noire les rend froids, calculateurs et sans émotion. Le Maître de ces lieux est le Duc Blizzard, un immense Harfang des Neiges (une chouette polaire) qui a gelé le cœur de la montagne pour empêcher quiconque de trouver le dernier Cristal.</p>
      </InfoBox>

      <ActionBox title="❄️ RÈGLE D'ENVIRONNEMENT : LE GEL MAGIQUE">
        <p className="mb-4">La température est extrêmement basse. La Bulle-Nuage de Bouboule, faite d'eau, risque de geler !</p>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>La Glaciation :</strong> À chaque fois que Bouboule rate un jet de VITESSE ou de MUSCLE dans cette zone, une fine couche de glace se forme sur sa bulle. Au bout de 3 échecs, la bulle gèle complètement : Bouboule ne peut plus avancer et doit passer un tour complet à utiliser sa MAGIE (ou le Morceau de Charbon Magique gagné au Chapitre 3) pour faire fondre la glace de l'intérieur.</li>
        </ul>
      </ActionBox>

      <h4 className="font-bold text-lg mt-8 mb-2">📍 ZONE 1-A : L'ARRIVÉE DANS LE BLIZZARD (Narration Immersive)</h4>
      <ReadAloud title="Texte à lire à voix haute (Prends une voix qui grelotte un peu)">
        "Tu laisses la chaleur du volcan derrière toi. Un vent glacial s'engouffre dans ta Bulle-Nuage. Devant toi, le paysage est d'une beauté à couper le souffle, mais aussi terrifiant : des montagnes pointues recouvertes de neige étincelante s'étendent à perte de vue. Le ciel est d'un bleu très pâle, presque blanc.<br/><br/>
        La neige tombe à gros flocons, recouvrant ta cape rouge d'un manteau blanc. Mais en regardant bien, tu remarques que certains pics rocheux sont recouverts d'une étrange glace complètement noire et opaque. Ça ne reflète pas la lumière du soleil, ça semble l'avaler.<br/><br/>
        Tu te trouves sur la Banquise Suspendue, une immense plateforme de glace au-dessus du vide. Le vent hurle (WOOOOSH). Devant toi, un pont de glace naturel relie ta plateforme à la montagne principale. Au milieu du pont, tu aperçois une grosse boule blanche et jaune fluo qui grelotte."
      </ReadAloud>

      <h4 className="font-bold text-lg mt-8 mb-2">📍 ZONE 1-B : LA RENCONTRE AVEC POLAIRE (Roleplay et Solution)</h4>
      <p className="mb-4">En s'approchant, Bouboule découvre que la "boule" est un personnage très particulier.</p>
      
      <ReadAloud title="Texte à lire à voix haute">
        "La forme fluo est un immense Ours Polaire ! Il est assis sur le pont de glace. Étrangement, il porte une énorme doudoune humaine jaune vif, beaucoup trop grande pour lui, avec la capuche rabattue sur les oreilles. Il frotte ses grosses pattes l'une contre l'autre en soufflant de la fumée de froid."
      </ReadAloud>

      <ActionBox title="L'Arbre de Dialogue avec Polaire l'Ours">
        <p className="italic mb-6">"B-b-bonjour, l-l-le poisson... B-brrr !" claque des dents l'ours. "Je m'appelle Polaire. Je sais, un ours polaire qui a froid, c'est un comble ! Mais la Glace Noire a fait chuter les températures. J'allais apporter mon Thermos de Soupe Magique au village des Pingouins-Surfeurs, mais je me suis fait attaquer. Les Loups de Givre-Noir ont volé mon Thermos ! Sans lui, ma doudoune ne suffit plus."</p>
        
        <h5 className="font-bold mb-2">L'Action de la Joueuse :</h5>
        <p className="mb-2">Bouboule doit proposer son aide.</p>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Le Réconfort (Jet de CŒUR - DD 11) :</strong> Bouboule peut utiliser la chaleur du cristal de feu qu'elle a gagné (ou la grenouille Ignis) pour réchauffer l'ours temporairement.
            <ul className="list-circle pl-5 mt-1">
              <li><em>Réussite :</em> L'ours arrête de grelotter. "Oh, merci ! Ta présence est comme un bon feu de cheminée. Écoute, les loups se cachent juste de l'autre côté du pont, dans le Labyrinthe des Sapins de Cristal. Si tu récupères mon Thermos, je te donnerai le secret pour empêcher ta bulle d'eau de geler complètement !"</li>
            </ul>
          </li>
        </ul>
      </ActionBox>

      <h4 className="font-bold text-lg mt-8 mb-2">📍 ZONE 1-C : LE PONT DE CRISTAL (Le Défi d'Équilibre)</h4>
      <p className="mb-4">Pour atteindre les loups, Bouboule doit traverser le pont de glace. Mais la glace est extrêmement glissante et le vent souffle en rafales.</p>
      
      <ActionBox title="Le Test de Vitesse">
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Jet de VITESSE (DD 13) :</strong>
            <ul className="list-circle pl-5 mt-1 space-y-2">
              <li><em>Réussite :</em> Description : "Tu utilises des petits jets d'eau magique pour faire 'patiner' ta bulle sur la glace. Tu glisses avec une grâce incroyable, faisant une magnifique pirouette avant d'atterrir de l'autre côté."</li>
              <li><em>Échec :</em> Description : "Une bourrasque de vent te pousse ! Ta bulle dérape, tu perds le contrôle et tu tourbillonnes sur toi-même ! Tu arrives de l'autre côté, mais tu as la tête qui tourne (Désavantage sur le premier jet de ton prochain combat) et ta bulle commence à geler."</li>
            </ul>
          </li>
        </ul>
      </ActionBox>

      <h4 className="font-bold text-lg mt-8 mb-2">📍 ZONE 1-D : L'EMBUSCADE DANS LES SAPINS (Combat Tactique Glissant)</h4>
      <ReadAloud title="Texte à lire à voix haute">
        "Tu entres dans un bois où les sapins ne sont pas faits de bois et d'épines, mais de cristaux de glace pointus. La lumière y est magnifique, mais l'ambiance est lourde.<br/><br/>
        Soudain, trois ombres sortent de derrière les troncs de cristal. Ce sont les Loups de Givre-Noir ! Leur fourrure est hérissée de stalactites de glace noire. Ils ne grognent pas, ils sont parfaitement silencieux. Leurs yeux bleus te fixent froidement. L'un d'eux a le Thermos rouge de Polaire coincé dans la gueule. Ils encerclent ta bulle en glissant sur la neige. Prépare-toi !"
      </ReadAloud>

      <CombatBox title="⚔️ LE COMBAT (La Mécanique du Terrain Glissant)">
        <ul className="list-disc pl-5 space-y-1 mb-6">
          <li><strong>Jet d'Initiative :</strong> (d20 + VITESSE). Les loups ont <strong>14</strong> (ils sont très rapides sur la glace).</li>
        </ul>

        <h5 className="font-bold mb-2">Statistiques des Ennemis (3 Loups de Givre-Noir) :</h5>
        <ul className="list-disc pl-5 space-y-1 mb-6">
          <li><strong>PV :</strong> 15 chacun.</li>
          <li><strong>CA :</strong> 14 (Leur fourrure gelée fait office d'armure).</li>
          <li><strong>Immunité :</strong> Résistent au froid (la magie d'eau froide de Bouboule leur fera moitié moins de dégâts).</li>
        </ul>

        <h5 className="font-bold mb-2">Le Terrain Glissant (Règle Tactique) :</h5>
        <p className="mb-2">Le sol est comme une patinoire.</p>
        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li><em>Astuce pour Bouboule :</em> Si elle utilise un <strong>Coup de Bélier (MUSCLE)</strong>, la force de la glissade lui donne +2 aux dégâts ! Cependant, si son coup rate (elle fait moins de 14), elle glisse trop loin et percute un sapin de cristal, subissant 1d4 dégâts d'épines de glace.</li>
          <li><em>Astuce Magique :</em> Si elle utilise un objet de chaleur (Morceau de Charbon) ou la grenouille Ignis, la fourrure des loups fond instantanément (Leur CA tombe à 11).</li>
        </ul>

        <h5 className="font-bold mb-2">Les Actions des Loups (Tour du MJ) :</h5>
        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li><strong>Morsure Gelée (Corps-à-corps) :</strong> +4 pour toucher. Dégâts : 1d6. Si un loup touche Bouboule, le froid ralentit le cachalot (elle ne peut faire qu'une seule action à son prochain tour, pas de déplacement bonus).</li>
          <li><strong>Hurlement Brisant :</strong> Un loup hurle à une fréquence aiguë qui fait trembler les sapins de cristal. Bouboule doit réussir un jet de <strong>CŒUR (DD 12)</strong> pour ne pas être effrayée par ce son fantomatique.</li>
        </ul>
        <p className="italic">(Laisse la joueuse décrire ses dérapages, ses tirs magiques en plein saut, et les bruits de glace qui se brise sous ses attaques colossales !)</p>
      </CombatBox>

      <h4 className="font-bold text-lg mt-8 mb-2">📍 ZONE 1-E : LE THERMOS MAGIQUE ET LE BUTIN DE LA TOUNDRA</h4>
      <p className="mb-4">Une fois les trois loups vaincus, la Glace Noire sur leur dos fond pour devenir de l'eau claire. Libérés, les loups (qui sont de beaux loups blancs normaux) remuent la queue, lâchent le Thermos et partent en courant jouer dans la neige.</p>

      <ActionBox title="La Fouille de la Zone (Table de Butin des Neiges)">
        <p className="mb-4">Bouboule ramasse le Thermos. Sous le sapin où se cachaient les loups, elle trouve un sac à dos abandonné par un ancien explorateur humain. Elle l'ouvre.</p>
        
        <h5 className="font-bold mb-2">Le MJ fait lancer 1d6 à la joueuse.</h5>
        <ol className="list-decimal pl-5 space-y-2 mb-6">
          <li><strong>Des chaussettes en laine trouées.</strong> Inutiles mais elles sentent fort le fromage vieux de mille ans.</li>
          <li><strong>Une Bâton Lumineux Humain (Cyallume).</strong> En le craquant, il brille en vert. (Pratique pour éclairer une caverne sombre plus tard).</li>
          <li><strong>Des Patins à Glace pour Animaux.</strong> Si Bouboule les attache sous sa Bulle-Nuage, elle gagne +2 en VITESSE tant qu'elle est sur la glace !</li>
          <li><strong>Potion de Sang-Chaud.</strong> Si bue, Bouboule est immunisée contre tous les effets de gel ou de ralentissement pendant 1 heure.</li>
          <li><strong>La Clochette du Froid.</strong> Un petit objet magique. Si elle la fait tinter, elle fige une petite étendue d'eau pour créer un pont solide de 5 mètres.</li>
          <li><strong>[JACKPOT !] Le Manteau de l'Aurore Boréale.</strong> Une magnifique couverture tissée avec la lumière du nord. Remplace sa cape rouge. Donne <strong>+1 CA</strong>, et une fois par jour, Bouboule peut devenir complètement invisible pendant 1 tour en s'enveloppant dedans !</li>
        </ol>

        <h5 className="font-bold mb-2">Conclusion de la Zone (Le retour vers Polaire) :</h5>
        <p className="italic mb-4">"Tu ramènes le Thermos de Soupe Magique à Polaire l'Ours. Il l'ouvre avec bonheur et boit une grande gorgée. Une délicieuse odeur de potiron et de noisettes envahit l'air glacé. L'ours arrête instantanément de grelotter.<br/><br/>
        'Aaaah... ça fait du bien !' dit-il en s'étirant. 'Comme promis, Cachalot, voici mon secret. Plonge l'une de tes nageoires dans ce Thermos. La soupe est infusée de magie de la Terre.'<br/><br/>
        Tu trempes ta nageoire. Soudain, ta Bulle-Nuage change de couleur et prend une jolie teinte ambrée. L'eau devient délicieusement tiède à l'intérieur. 'Te voilà protégée contre le Gel Magique de la montagne,' sourit Polaire. 'Tu peux maintenant affronter les pistes glacées qui mènent au Palais du Duc Blizzard. Fais attention aux Bonhommes de Neige en chemin... ils ne sont pas toujours très amicaux !'"</p>
      </ActionBox>

      <h3 className="font-display text-2xl font-bold text-slate-700 mt-12 mb-4">SECTION 2 : LES PISTES OUBLIÉES ET L'ASCENSEUR DES NUAGES</h3>

      <InfoBox title="📚 HISTOIRE ET LORE POUR LE MAÎTRE DU JEU (Secret du MJ)">
        <p>Cette zone était autrefois le "Domaine des Neiges", une station où les humains glissaient sur des planches de bois pour s'amuser. Les grandes structures métalliques que Bouboule va croiser sont des remonte-pentes. La Mue Noire a corrompu l'intelligence artificielle de la station, transformant les canons à neige en armes de siège qui tirent de la Glace Noire. Le but ici est d'atteindre le sommet de la crête pour accéder au Palais du Blizzard.</p>
      </InfoBox>

      <h4 className="font-bold text-lg mt-8 mb-2">📍 ZONE 2-A : LE DÉFILÉ DES CANONS FOUS (Narration & Immersion)</h4>
      <ReadAloud title="Texte à lire à voix haute">
        "Tu quittes la forêt de sapins de cristal pour arriver sur une immense étendue blanche et dégagée. C'est une pente vertigineuse qui monte vers les nuages. Sur les côtés, tu vois d'étranges machines humaines : de gros tubes en métal montés sur roues, pointés vers le ciel. D'habitude, ils servent à fabriquer de la neige poudreuse pour les jeux, mais ceux-là ont l'air malades.<br/><br/>
        Ils crachent des jets de vapeur noire et des blocs de glace sombre. Le vent hurle entre les pylônes de fer rouillés. Pour monter, tu dois suivre le chemin des vieux câbles d'acier qui pendent dans le vide. Le silence de la montagne est brisé par le bruit mécanique des canons qui pivotent vers toi... Ils t'ont repérée !"
      </ReadAloud>

      <ActionBox title="Mécanique : La Traversée sous le Feu (Esquive)">
        <p className="mb-2">Bouboule doit remonter la pente tout en évitant les tirs. C'est un test de mouvement stratégique.</p>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Jet de VITESSE ou MAGIE (DD 14) :</strong>
            <ul className="list-circle pl-5 mt-1 space-y-2">
              <li><em>Réussite :</em> Bouboule utilise les courants d'air pour slalomer entre les blocs de glace. Elle arrive en haut de la pente sans une égratignure.</li>
              <li><em>Échec :</em> Un bloc de glace percute la bulle ! CRACK ! Bouboule perd <strong>1d8 PV</strong>. Elle est projetée dans une congère de neige profonde et perd du temps à se dégager.</li>
            </ul>
          </li>
        </ul>
      </ActionBox>

      <h4 className="font-bold text-lg mt-8 mb-2">📍 ZONE 2-B : LE COMBAT DES BONSHOMMES DE GOUDRON (Action Tactique)</h4>
      <ReadAloud title="Texte à lire à voix haute">
        "Alors que tu atteignes un replat de la montagne, la neige devant toi commence à s'agiter. Elle s'empile toute seule pour former trois silhouettes rondes et imposantes. Ce sont des Golems de Neige Noire. Ils ont des bras faits de branches de sapin gelées et des yeux en charbon qui brillent d'une lueur violette. Ils n'ont pas l'air de vouloir faire un câlin ! Ils ramassent des rochers de glace et s'apprêtent à les lancer sur ta Bulle-Nuage."
      </ReadAloud>

      <CombatBox title="⚔️ LE COMBAT (Règles de Donjons & Dragons)">
        <ul className="list-disc pl-5 space-y-1 mb-6">
          <li><strong>Initiative :</strong> Lance ton <strong>d20 + VITESSE</strong>. Les Golems ont une initiative de <strong>9</strong> (ils sont lents et lourds).</li>
        </ul>

        <h5 className="font-bold mb-2">Statistiques des Ennemis (3 Golems de Neige Noire) :</h5>
        <ul className="list-disc pl-5 space-y-1 mb-6">
          <li><strong>Points de Vie (PV) :</strong> 20 chacun.</li>
          <li><strong>Classe d'Armure (CA) :</strong> 12 (Ils sont mous, donc faciles à toucher).</li>
          <li><strong>Attaque (Lancer de boule de goudron) :</strong> +3 pour toucher. Dégâts : <strong>1d6 + 2</strong>. Si Bouboule est touchée, la neige collante réduit sa Vitesse de -2 au prochain tour.</li>
        </ul>

        <h5 className="font-bold mb-2">Interactions Spéciales pour Bouboule :</h5>
        <ol className="list-decimal pl-5 space-y-2">
          <li><strong>L'astuce de la Chaleur :</strong> Si Bouboule utilise son <strong>Fragment de Cristal Rouge</strong> ou la grenouille <strong>Ignis</strong>, elle inflige des dégâts critiques. <em>"Le feu fait fondre la neige noire ! Le golem perd sa forme et s'écroule en une flaque de boue."</em></li>
          <li><strong>Le Coup de Bélier (MUSCLE) :</strong> Si elle charge, elle peut traverser le golem. C'est efficace, mais elle devient "Trempée" (elle subit un malus de -1 à ses tests de MAGIE pendant 2 tours à cause du froid humide).</li>
        </ol>
      </CombatBox>

      <h4 className="font-bold text-lg mt-8 mb-2">📍 ZONE 2-C : LE COFFRE DU TÉLÉSIÈGE (Butin Aléatoire)</h4>
      <p className="mb-4">Après le combat, les golems ont fondu, laissant derrière eux des morceaux de charbon et de vieilles écharpes. Bouboule remarque une cabine de téléphérique suspendue à un câble, juste à un mètre du sol. Elle semble contenir un coffre.</p>

      <ActionBox title="L'Action : Ouvrir la cabine">
        <p className="mb-4">La porte est gelée. Bouboule doit faire un jet de <strong>MUSCLE (DD 12)</strong> pour forcer la porte ou utiliser <strong>MAGIE (DD 11)</strong> pour faire fondre la serrure.</p>
        
        <h5 className="font-bold mb-2">TABLE DE BUTIN ALÉATOIRE (Lance 1d6) :</h5>
        <ol className="list-decimal pl-5 space-y-2">
          <li><strong>Une paire de skis cassés.</strong> C'est du bois solide. Peut servir de bois de chauffage ou de levier plus tard.</li>
          <li><strong>Une Barre Énergétique humaine.</strong> Emballée dans un papier brillant. Elle est encore bonne ! (Rend <strong>2d4 PV</strong> instantanément).</li>
          <li><strong>Le Bonnet de Laine Magique.</strong> Un grand bonnet bleu à pompon. Si Bouboule le pose sur sa tête (au-dessus de son diadème), elle gagne <strong>Résistance au Froid</strong> (tous les dégâts de glace sont divisés par 2 pour le reste du chapitre).</li>
          <li><strong>Des Lunettes de Ski Miroir.</strong> Des lunettes qui reflètent tout. Elles donnent un bonus de <strong>+2 en PERCEPTION</strong> et empêchent d'être éblouie par la réfraction du soleil sur la neige.</li>
          <li><strong>La Cloche de Brume.</strong> Une clochette en argent. Une fois par jour, Bouboule peut la faire sonner pour créer un brouillard épais qui la rend invisible aux yeux des ennemis pendant 2 tours.</li>
          <li><strong>[TRÉSOR ÉPIQUE] L'Étoile de Cristal.</strong> Un petit éclat du premier météore magique. Si elle l'attache à sa cape, sa Bulle-Nuage devient étincelante. Elle gagne <strong>+1 à toutes ses caractéristiques</strong> (Muscle, Vitesse, Magie, Cœur) !</li>
        </ol>
      </ActionBox>

      <h4 className="font-bold text-lg mt-8 mb-2">📍 ZONE 2-D : L'ÉNIGME DU POSTE D'OBSERVATION (Réflexion)</h4>
      <ReadAloud title="Texte à lire à voix haute">
        "Tu arrives devant un dôme de métal et de verre posé sur le sommet de la falaise : l'Observatoire. C'est ici que les humains regardaient les étoiles. La grande porte ronde est verrouillée par un clavier avec trois boutons de couleurs : <strong>Rouge, Jaune et Vert</strong>.<br/><br/>
        Une voix métallique grésille dans un haut-parleur : 'Alerte météo. Pour entrer, reproduisez les couleurs des saisons dans l'ordre : Automne, Été, Printemps'."
      </ReadAloud>

      <ActionBox title="L'Énigme">
        <p className="mb-4">Ta fille doit associer les couleurs aux saisons demandées pour déverrouiller la porte.</p>
        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li><strong>Automne :</strong> ? (La joueuse doit choisir le bouton <strong>Rouge</strong> pour les feuilles mortes).</li>
          <li><strong>Été :</strong> ? (La joueuse doit choisir le bouton <strong>Jaune</strong> pour le soleil).</li>
          <li><strong>Printemps :</strong> ? (La joueuse doit choisir le bouton <strong>Vert</strong> pour l'herbe).</li>
        </ul>
        <p><strong>Si elle réussit :</strong> "Un son de cloche joyeux retentit. La porte coulisse en silence. À l'intérieur, c'est calme et il fait bon. Tu es à l'abri du blizzard pour un moment."</p>
      </ActionBox>

      <h4 className="font-bold text-lg mt-8 mb-2">📍 ZONE 2-E : LA RENCONTRE AVEC "YÉTI-MINI" (Social)</h4>
      <p className="mb-4">À l'intérieur de l'observatoire, parmi les télescopes et les cartes du ciel, se cache une petite créature.</p>

      <ReadAloud title="Texte à lire à voix haute">
        "Dans un coin, entouré de vieux livres, tu vois une petite créature toute poilue, blanche comme neige, avec de grandes mains et des pieds minuscules. C'est un <strong>Yéti-Mini</strong>. Il porte un petit gilet de laine et range des livres.<br/><br/>
        'Oh ! Une visiteuse !' dit-il d'une voix flûtée. 'Je m'appelle Gribouille. Je suis le bibliothécaire des étoiles. Ne restez pas trop longtemps, le Duc Blizzard surveille l'observatoire avec ses yeux-miroirs ! Si vous voulez monter au Palais, vous devez emprunter le Grand Toboggan d'Argent, mais il est gardé par le Sergent Frisson... un oiseau mécanique très méchant !'"
      </ReadAloud>

      <ActionBox title="L'Interaction">
        <p className="mb-4">Gribouille propose d'améliorer la carte de Bouboule.</p>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Test de CŒUR (DD 12) :</strong> Si Bouboule est gentille et partage une histoire de ses voyages, Gribouille lui dessine un passage secret sur sa carte qui lui permettra de contourner les gardes à l'entrée du Palais du Duc.</li>
        </ul>
      </ActionBox>

      <h4 className="font-bold text-lg mt-8 mb-2">📍 ZONE 2-F : CONCLUSION DE LA ZONE</h4>
      <ReadAloud title="Texte à lire à voix haute">
        "Gribouille t'ouvre une trappe à l'arrière de l'observatoire. 'Bonne chance, Bouboule ! Utilise la pente pour prendre de la vitesse !'<br/><br/>
        Tu t'élances sur une piste de glace lisse qui serpente entre les pics rocheux. Le vent siffle contre ta bulle alors que tu glisses à toute allure vers la dernière étape : le pont suspendu qui mène aux portes de cristal du Palais du Duc Blizzard."
      </ReadAloud>

      <h3 className="font-display text-2xl font-bold text-slate-700 mt-12 mb-4">SECTION 3 : LE GRAND TOBOGGAN D'ARGENT ET LE SERGENT FRISSON</h3>

      <InfoBox title="📚 HISTOIRE ET LORE POUR LE MAÎTRE DU JEU (Secret du MJ)">
        <p className="italic mb-4">Ne lis pas ceci à la joueuse.</p>
        <p className="mb-4">Le "Grand Toboggan d'Argent" est en réalité une ancienne piste de bobsleigh olympique construite par les Bipèdes Sans Poils. C'est un demi-tube de glace pure qui serpente à flanc de montagne, suspendu au-dessus des nuages. Au bout de cette piste se trouve le Grand Pont de Cristal menant au Palais.</p>
        <p>Le "Sergent Frisson", qui garde ce pont, n'est pas un animal. C'était un "drone météorologique" humain (une machine volante). La Mue Noire l'a corrompu, recouvrant son squelette d'acier de plumes de Glace Noire. Il obéit aveuglément au Duc Blizzard et attaque tout ce qui approche.</p>
      </InfoBox>

      <h4 className="font-bold text-lg mt-8 mb-2">📍 ZONE 3-A : LA DESCENTE INFERNALE (Course d'Obstacles à Grande Vitesse)</h4>
      <ReadAloud title="Texte à lire à voix haute (Prends un rythme rapide, plein d'adrénaline)">
        "Tu t'engages dans la trappe secrète de Gribouille. Devant toi, une piste de glace en forme de demi-tuyau plonge presque à la verticale le long de la falaise ! Ta Bulle-Nuage s'élance, et en deux secondes, tu prends une vitesse fulgurante. SWOOOOOSH ! Le vent hurle dans tes oreilles, le paysage défile si vite qu'il devient flou !<br/><br/>
        C'est le Grand Toboggan d'Argent ! Tu glisses à toute allure, mais la piste n'est pas entretenue. Tu vas devoir faire preuve d'énormément de réflexes pour ne pas exploser ta bulle contre les murs de glace ! Accroche-toi !"
      </ReadAloud>

      <ActionBox title="Le Défi de Vitesse (3 Jets enchaînés)">
        <p className="mb-4">C'est une scène d'action pure. Bouboule doit réussir au moins 2 jets sur 3 pour passer sans encombre.</p>
        <ul className="list-disc pl-5 space-y-4">
          <li><strong>Obstacle 1 : Les Stalagmites Géantes (Jet de VITESSE - DD 13)</strong>
            <ul className="list-circle pl-5 mt-1 space-y-1">
              <li><em>Description :</em> "Des pics de glace pointent au beau milieu de la piste !"</li>
              <li><em>Réussite :</em> Tu donnes un coup de nageoire sec, ta bulle remonte sur la paroi verticale de la piste et évite les pics de justesse !</li>
              <li><em>Échec :</em> Scriiiiiitch ! Les pics rayent ta bulle. Tu es secouée et tu perds <strong>1d4 PV</strong>.</li>
            </ul>
          </li>
          <li><strong>Obstacle 2 : Le Virage en Épingle (Jet de MUSCLE - DD 12)</strong>
            <ul className="list-circle pl-5 mt-1 space-y-1">
              <li><em>Description :</em> "La piste tourne brutalement à 90 degrés au-dessus du vide ! Tu vas trop vite, tu vas être éjectée de la piste !"</li>
              <li><em>Réussite :</em> Tu te jettes de tout ton poids (de cachalot !) vers l'intérieur du virage. La force centrifuge te plaque au sol, mais tu restes sur la piste !</li>
              <li><em>Échec :</em> Tu dérapes ! Ta bulle percute violemment le bord extérieur. BAM ! Tu perds <strong>1d6 PV</strong>.</li>
            </ul>
          </li>
          <li><strong>Obstacle 3 : Le Gouffre (Jet de MAGIE - DD 12)</strong>
            <ul className="list-circle pl-5 mt-1 space-y-1">
              <li><em>Description :</em> "Catastrophe ! La piste est brisée sur dix mètres ! Il y a un trou béant menant directement dans les nuages !"</li>
              <li><em>Réussite :</em> Tu canalises ta magie, l'eau de ta bulle se gonfle à l'arrière comme un réacteur. Tu décolles comme une fusée d'eau et atterris élégamment de l'autre côté !</li>
            </ul>
          </li>
        </ul>
      </ActionBox>

      <h4 className="font-bold text-lg mt-8 mb-2">📍 ZONE 3-B : LE PONT DE CRISTAL ET L'OISEAU DE FER (Combat de Mini-Boss)</h4>
      <ReadAloud title="Texte à lire à voix haute">
        "La piste de bobsleigh ralentit et se termine sur une immense plateforme circulaire. Devant toi s'étend le Grand Pont de Cristal. Ses arches sont magnifiques, transparentes comme du verre, et relient la montagne à une île flottante où se dresse le terrifiant Palais du Duc Blizzard.<br/><br/>
        Mais alors que tu t'avances sur le pont, un cri métallique et strident déchire le ciel (KRIIII-KLANG). Un aigle gigantesque plonge des nuages gris. Mais ce n'est pas un oiseau normal : son corps est en métal rouillé, et ses plumes sont de longues lames de Glace Noire tranchantes. Ses yeux sont deux lumières rouges clignotantes. C'est le Sergent Frisson ! Il se pose lourdement sur le pont, bloquant l'accès au Palais. Il déploie ses ailes de métal et te fixe d'un air glacial."
      </ReadAloud>

      <CombatBox title="⚔️ LE COMBAT AÉRIEN (Règles Tactiques)">
        <ul className="list-disc pl-5 space-y-1 mb-6">
          <li><strong>Initiative :</strong> (d20 + VITESSE). Le Sergent Frisson a <strong>15</strong>. Il est extrêmement rapide.</li>
        </ul>

        <h5 className="font-bold mb-2">Statistiques du Mini-Boss (Sergent Frisson) :</h5>
        <ul className="list-disc pl-5 space-y-1 mb-6">
          <li><strong>PV :</strong> 30 (Il est robuste mais ses articulations gèlent facilement).</li>
          <li><strong>CA :</strong> 15 (Armure de métal et de Glace Noire).</li>
          <li><strong>Immunité :</strong> Résistant aux attaques magiques classiques (l'eau gèle sur son armure).<br/><strong>Faiblesse : MUSCLE.</strong> La force brute cabosse son métal !</li>
        </ul>

        <h5 className="font-bold mb-2">Les Actions de l'Ennemi (Tour du MJ) :</h5>
        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li><strong>Plumes-Torpilles (Distance) :</strong> Il bat des ailes et projette trois lames de glace. (+4 pour toucher). Dégâts : 1d6 + 1.</li>
          <li><strong>Serres d'Acier (Corps-à-corps) :</strong> S'il plonge sur la bulle. (+5 pour toucher). Dégâts : 1d8.</li>
        </ul>

        <h5 className="font-bold mb-2">Interaction d'Environnement (Astuce pour la joueuse) :</h5>
        <p className="mb-2">Le pont est en cristal très fragile.</p>
        <ul className="list-disc pl-5 space-y-2">
          <li><em>"Bouboule, remarque comment le pont vibre sous son poids. S'il te fonce dessus, tu peux essayer de l'esquiver au dernier moment (Jet de VITESSE DD 14). S'il te rate, ses lourdes serres d'acier se planteront profondément dans le pont de cristal. Il sera 'Coincé' pendant un tour ! Sa CA descendra à 10 et tu pourras le frapper de toutes tes forces !"</em></li>
        </ul>
      </CombatBox>

      <h4 className="font-bold text-lg mt-8 mb-2">📍 ZONE 3-C : LE BUTIN DU NID MÉCANIQUE</h4>
      <p className="mb-4">Une fois que les PV du Sergent Frisson tombent à 0 :</p>
      
      <ReadAloud title="Texte à lire à voix haute">
        "Ton dernier Coup de Bélier fracasse son aile de métal ! L'aigle mécanique pousse un grésillement pathétique, ses yeux rouges s'éteignent (Bzzzt... pop), et il s'effondre en un tas de ferraille et de glace brisée. Le pont est libre."<br/><br/>
        "En fouillant les restes du Sergent, tu remarques qu'il protégeait un petit coffre-fort incrusté dans la glace du pont."
      </ReadAloud>

      <ActionBox title="L'Action : Ouvrir le coffre">
        <p className="mb-4">(Pas de jet nécessaire, le choc du combat l'a entrouvert).</p>
        
        <h5 className="font-bold mb-2">TABLE DE BUTIN DU GARDIEN (Lance 1d6) :</h5>
        <ol className="list-decimal pl-5 space-y-2">
          <li><strong>Un Écrou Géant.</strong> Un très gros bout de métal. Ça pèse lourd, c'est marrant.</li>
          <li><strong>Une Plume de Glace Parfaite.</strong> Une arme de jet à usage unique. Si Bouboule la lance avec sa magie, elle fait <strong>2d6 dégâts</strong> de glace sur le prochain monstre.</li>
          <li><strong>Le Spray Dégivrant des Humains.</strong> Une bombe aérosol avec une flamme dessinée dessus. Si Bouboule la pschitt, elle annule immédiatement n'importe quel effet de gel sur elle. (3 utilisations).</li>
          <li><strong>La Potion de Courant d'Air (Flacon bleu).</strong> Si bue, Bouboule se sent légère comme une plume. Elle peut esquiver automatiquement la prochaine attaque physique (Même celle d'un Boss !).</li>
          <li><strong>Le Cristal de Batterie (Loot d'artisanat).</strong> Un cœur d'énergie crépitant. Si elle l'attache à sa cape, elle gagne <strong>+2 dégâts</strong> sur toutes ses attaques Magiques qui contiennent de l'électricité ou du feu.</li>
          <li><strong>[JACKPOT !] L'Œil du Sergent.</strong> Une gemme rouge clignotante. C'est un scanner ! Le MJ devra révéler exactement le nombre de PV restants et la CA de tous les monstres à la joueuse jusqu'à la fin du chapitre.</li>
        </ol>
      </ActionBox>

      <h4 className="font-bold text-lg mt-8 mb-2">📍 ZONE 3-D : LES PORTES DU PALAIS ET L'ENTRÉE SECRÈTE</h4>
      <ReadAloud title="Texte à lire à voix haute">
        "Tu laisses les restes de l'oiseau de fer derrière toi et tu traverses le majestueux pont de cristal. De l'autre côté se dresse enfin ton objectif : le Palais du Duc Blizzard. C'est une immense cathédrale de glace bleue, étincelante et glaciale.<br/><br/>
        L'entrée principale est constituée de deux portes gigantesques, gardées par des statues de loups hurlants. Mais rappelle-toi... Gribouille, le petit Yéti-Mini de l'observatoire, t'avait dessiné un chemin caché sur ta carte !"
      </ReadAloud>

      <ActionBox title="Le Choix d'Approche (L'importance du Roleplay précédent)">
        <ul className="list-disc pl-5 space-y-4 mb-6">
          <li><strong>Si elle n'avait pas eu la carte de Gribouille :</strong> Bouboule doit s'approcher des grandes portes. Malheureusement, c'est un piège ! Les statues de loups crachent une tempête de neige, la forçant à faire un combat surprise contre 2 Golems de Glace avant même d'entrer.</li>
          <li><strong>Si elle a la carte de Gribouille (Et elle devrait l'avoir si elle a été gentille !) :</strong> "Tu sors la carte de Gribouille. Le dessin indique de contourner la façade par la gauche. Tu t'y glisses discrètement. Tu trouves une petite grille d'aération humaine recouverte de neige. Un jet de magie d'eau fond la neige, et un coup de nageoire fait sauter la grille. Tu pénètres dans le Palais du Duc Blizzard en toute discrétion, évitant les pièges de l'entrée principale ! C'est l'avantage d'avoir un grand cœur."</li>
        </ul>
        <p className="italic">"Tu sors la carte de Gribouille. Le dessin indique de contourner la façade par la gauche. Tu t'y glisses discrètement. Tu trouves une petite grille d'aération humaine recouverte de neige. Un jet de magie d'eau fond la neige, et un coup de nageoire fait sauter la grille. Tu pénètres dans le Palais du Duc Blizzard en toute discrétion, évitant les pièges de l'entrée principale ! C'est l'avantage d'avoir un grand cœur."</p>
      </ActionBox>

      <h4 className="font-bold text-lg mt-8 mb-2">📍 CONCLUSION DE LA ZONE</h4>
      <ReadAloud title="Texte à lire à voix haute">
        "Tu te glisses dans les sombres couloirs de glace du Palais. Le sol est poli comme un miroir, tes reflets dansent sur les murs. L'air y est si froid que ta respiration forme de gros nuages blancs. Au bout du couloir, tu entends le vent souffler dans l'immense Salle du Trône.<br/><br/>
        Le Duc Blizzard t'attend. Le Quatrième Cristal de Rire est à portée de nageoire.<br/><br/>
        Prépare tes sorts, Cachalot, car cette chouette ne compte pas te laisser ramener la chaleur sur Pangéa !"
      </ReadAloud>

      <h3 className="font-display text-2xl font-bold text-slate-700 mt-12 mb-4">SECTION 4 : LA SALLE DU TRÔNE GLACÉ ET L'ÂME DU BLIZZARD</h3>

      <InfoBox title="📚 HISTOIRE ET LORE POUR LE MAÎTRE DU JEU (Secret du MJ)">
        <p className="italic mb-4">Ne lis pas ceci à la joueuse.</p>
        <p>Le Duc Blizzard n'est pas un monstre créé par la Mue Noire. C'est un majestueux Harfang des Neiges (une chouette polaire géante) qui a trouvé le 4ème Cristal du Rire il y a très longtemps. Quand la Brume Grise a commencé à polluer le monde, le Duc a eu si peur qu'on lui vole le Cristal pour faire le mal qu'il a avalé la magie de la Glace Noire volontairement. Son but : geler la montagne tout entière pour que personne ne puisse s'approcher. Il n'est pas "méchant", il est terrifié et paranoïaque. La Glace Noire lui a persuadé que toute chaleur, même l'amour ou l'amitié, est un danger.</p>
      </InfoBox>

      <h4 className="font-bold text-lg mt-8 mb-2">📍 ZONE 4-A : LE COULOIR DES REFLETS TROMPEURS (Ambiance et Tension)</h4>
      <ReadAloud title="Texte à lire à voix haute (D'une voix mystérieuse et murmurée)">
        "Tu te glisses dans le Palais. L'air est si froid que l'eau de ta Bulle-Nuage crépite doucement, protégée par la magie de la soupe de Polaire. Tu arrives dans une longue galerie. Les murs ne sont pas faits de pierre, mais de miroirs de glace parfaits.<br/><br/>
        En avançant, tu regardes ton reflet. Mais quelque chose cloche. Ton reflet ne fait pas les mêmes mouvements que toi. Dans la glace, ton reflet a l'air triste, fâché, recouvert de goudron noir ! Les miroirs murmurent avec une voix de vent glacé : 'Tu es trop lourde... tu vas échouer... tu ne sauveras personne... retourne dans ton lagon...'"
      </ReadAloud>

      <ActionBox title="La Mécanique : Le Test de Volonté (Illusion)">
        <p className="mb-4">C'est un piège psychologique créé par le Palais pour briser le moral des intrus.</p>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Jet de CŒUR (DD 14) :</strong>
            <ul className="list-circle pl-5 mt-1 space-y-2">
              <li><em>Réussite :</em> Description : "Tu fermes les yeux et tu penses à tes amis : le crabe Pince-Mi, la grenouille Ignis, le castor Gaspard... Tu gonfles tes poumons et tu pousses un petit chant joyeux. Crrrac ! Les reflets méchants se fissurent et disparaissent. Tu sais que tu es une héroïne !" (Bouboule gagne un <strong>Avantage</strong> pour son premier jet dans la salle du boss).</li>
              <li><em>Échec :</em> Description : "Les voix glacées te font douter de toi. Tu baisses un peu la tête, ta bulle rétrécit légèrement." Bouboule est "Démoralisée". Elle aura un malus de -1 à sa CA lors du premier tour du combat.</li>
            </ul>
          </li>
        </ul>
      </ActionBox>

      <h4 className="font-bold text-lg mt-8 mb-2">📍 ZONE 4-B : L'AUDIENCE DU DUC (Le Choix Moral avant le combat)</h4>
      <ReadAloud title="Texte à lire à voix haute">
        *"Au bout du couloir, tu entres dans la Salle du Trône. C'est une pièce circulaire immense, sans toit, ouverte sur le ciel étoilé. Au centre s'élève un trône taillé dans un seul bloc de Glace Noire.<br/><br/>
        Sur ce trône perche le Duc Blizzard. C'est un Harfang des Neiges titanesque, dont les plumes blanches sont recouvertes d'une armure de givre noir aux reflets violets. Au centre de sa poitrine, incrusté sous la glace, tu vois briller une lumière bleue magnifique : le 4ème Cristal !<br/><br/>
        Le Duc tourne lentement la tête vers toi. Ses yeux jaunes sont immenses, froids, vides de toute émotion. Il déploie ses ailes, immenses, et parle d'une voix qui résonne comme une tempête :<br/><br/>
        'Encore une créature de chaleur. Vous venez détruire le silence. Vous venez voler la dernière étincelle. Mais le froid fige tout. Le froid protège. Repars, Cachalot, ou sois gelée pour l'éternité.'"*
      </ReadAloud>

      <ActionBox title="L'Arbre de Dialogue (Essayer de le sauver)">
        <p className="mb-4">Bouboule peut ressentir (avec un test de Sagesse/Cœur sans lancer de dés si elle pose la question) que l'oiseau tremble légèrement. Il souffre.</p>
        <ul className="list-disc pl-5 space-y-4">
          <li><strong>Option A - L'Attaque directe :</strong> Si Bouboule charge sans parler, le Duc crie : "La violence ! Comme toujours !" Le combat commence immédiatement, et le Duc gagne +2 à son jet d'Initiative.</li>
          <li><strong>Option B - La Raison et l'Empathie (Jet de CŒUR - DD 15) :</strong> Bouboule tente de lui expliquer qu'elle ne vient pas piller, mais guérir le monde de la Mue Noire.
            <ul className="list-circle pl-5 mt-1">
              <li><em>Réussite :</em> Le Duc hésite. Ses serres lâchent le trône. "Guérir... ? Non, c'est un mensonge de la Brume !" crie-t-il, confondu. Il va attaquer, mais son doute le rend plus faible. <strong>Sa CA passe de 16 à 14</strong> pour toute la durée du combat !</li>
            </ul>
          </li>
        </ul>
      </ActionBox>

      <h4 className="font-bold text-lg mt-8 mb-2">📍 ZONE 4-C : LE COMBAT DU BLIZZARD (Action Tactique et Environnement)</h4>
      
      <CombatBox title="⚔️ Statistiques du Boss : Le Duc Blizzard">
        <ul className="list-disc pl-5 space-y-1 mb-6">
          <li><strong>Initiative :</strong> (d20 + VITESSE vs Duc Blizzard : <strong>14</strong>).</li>
          <li><strong>PV :</strong> 50.</li>
          <li><strong>CA :</strong> 16 (ou 14 si l'interaction sociale a réussi).</li>
          <li><strong>Mouvement :</strong> Il vole au-dessus de la salle. Il est impossible de l'attaquer avec un Coup de Bélier classique s'il n'est pas forcé à se poser au sol !</li>
        </ul>

        <h5 className="font-bold mb-2 text-blue-600">🌀 Phase 1 : La Tempête en Piqué (PV 50 à 25)</h5>
        <p className="mb-2">Le Duc vole haut et plonge pour frapper.</p>
        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li><strong>L'Attaque du Boss :</strong> <em>Serres du Blizzard</em>. Il plonge en piqué (+5 pour toucher). Dégâts : 1d8.</li>
          <li><strong>L'Astuce pour la joueuse (Utiliser les piliers) :</strong> Il y a de grands piliers de glace dans la salle. Si Bouboule se cache derrière un pilier au lieu d'attaquer directement, le Duc percutera le pilier ! (Il tombe au sol et sera vulnérable aux attaques de <strong>MUSCLE</strong> au tour suivant avec un Avantage).</li>
          <li><strong>L'Astuce Magique :</strong> Si Bouboule tire des bulles magiques, elle peut viser ses grandes ailes pour alourdir ses plumes avec de l'eau, le forçant à voler plus bas.</li>
        </ul>

        <h5 className="font-bold mb-2 text-cyan-600">❄️ Phase 2 : Le Souffle de Glace Noire (PV 25 à 10)</h5>
        <p className="mb-2">Le Duc atterrit sur son trône, furieux et blessé.</p>
        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li><strong>L'Attaque du Boss :</strong> <em>Rayon Congelant</em>. Il ouvre le bec et crache un large rayon de vent noir. Bouboule doit réussir un jet de <strong>VITESSE (DD 14)</strong> pour l'esquiver. Si elle rate, sa Bulle-Nuage gèle instantanément. Elle perd son prochain tour à la dégivrer !</li>
          <li><strong>L'Astuce pour la joueuse (Les miroirs) :</strong> La salle est entourée des fameux miroirs de glace. Si Bouboule utilise sa <strong>MAGIE (DD 13)</strong> pour incliner un grand miroir, elle peut réfléchir le Rayon Congelant directement dans la figure du Duc ! Le Boss se gèle lui-même ses propres ailes (-10 PV d'un coup !).</li>
        </ul>
      </CombatBox>

      <h4 className="font-bold text-lg mt-8 mb-2">📍 ZONE 4-D : LE DILEMME FINAL (Le Choix Crucial)</h4>
      <p className="mb-4">Le Boss n'a plus que 10 PV. Il est tombé au sol. Une de ses ailes de glace est brisée. Il respire difficilement. L'armure de Glace Noire sur sa poitrine, là où se trouve le Cristal, est fissurée.</p>

      <ReadAloud title="Texte à lire à voix haute (Baisse le ton, crée du suspense)">
        "Le grand chouette polaire s'effondre sur le sol gelé. Il ne peut plus voler. La magie de la Glace Noire le ronge de l'intérieur. Ses grands yeux jaunes te regardent avec une infinie tristesse.<br/><br/>
        'Tu as gagné... Prends le cristal... laisse-moi m'endormir dans le froid,' murmure-t-il.<br/><br/>
        Tu t'approches. Tu vois le goudron gelé qui enserre son cœur. Tu as un choix à faire, Bouboule."
      </ReadAloud>

      <ActionBox title="Le Complexe Choix Moral">
        <p className="mb-4">Explique bien les options à ta fille. C'est le moment de jouer à la vraie héroïne.</p>
        <ul className="list-disc pl-5 space-y-4 mb-6">
          <li><strong>Option 1 : La Force Brute (La solution facile).</strong> Bouboule donne un dernier gros Coup de Bélier pour pulvériser l'armure.
            <ul className="list-circle pl-5 mt-1">
              <li><em>Conséquence :</em> La glace éclate, libérant le cristal. Mais le choc est trop violent. Le Duc s'endort pour toujours. Bouboule gagne, mais à un prix triste.</li>
            </ul>
          </li>
          <li><strong>Option 2 : La Fonte Douce (La solution difficile et héroïque).</strong> Bouboule utilise sa magie et tout son Cœur pour réchauffer lentement le goudron glacé sans blesser l'oiseau, pour purifier son corps.
            <ul className="list-circle pl-5 mt-1">
              <li><em>Mécanique :</em> C'est un jet de <strong>MAGIE pure (DD 15)</strong>. C'est difficile !</li>
              <li><em>Si elle a des objets de feu (Charbon, Soupe, Grenouille Ignis) :</em> Elle peut les utiliser pour baisser la difficulté à <strong>DD 11</strong>.</li>
            </ul>
          </li>
        </ul>

        <h5 className="font-bold mb-2">La Résolution de l'Option 2 (Si elle réussit, ce qui est l'issue souhaitée) :</h5>
        <p className="italic mb-4">"Tu enveloppes le Duc Blizzard dans une douce bulle d'eau tiède. Tu y mets tout ton cœur et la chaleur des amis que tu as rencontrés. Pschhh... Lentement, la Glace Noire fond. L'armure se transforme en eau claire.<br/><br/>
        Le Duc pousse un grand soupir, comme s'il se réveillait d'un long cauchemar. Ses plumes retrouvent leur blancheur éclatante. Il se redresse doucement. 'J'avais oublié... j'avais oublié à quel point la chaleur était douce,' dit-il en frottant sa tête contre ta bulle.<br/><br/>
        Il ouvre lui-même son poitrail (une petite cachette dans ses plumes) et te tend le <strong>Quatrième et Dernier Cristal du Rire</strong>, le Cristal Azur."</p>
      </ActionBox>

      <h4 className="font-bold text-lg mt-8 mb-2">🎁 ZONE 4-E : LE BUTIN DU PALAIS ET LA FIN DU CHAPITRE</h4>
      <p className="mb-4">Le ciel noir au-dessus des Pics d'Argent se déchire, laissant apparaître de magnifiques aurores boréales (vertes, roses, violettes). Le froid devient sec et agréable.</p>

      <ActionBox title="La Récompense">
        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li>Le Duc s'incline : "Je te confie ma plus belle création. Elle t'aidera pour le grand final." Il lui offre <strong>l'Amulette des Vents du Nord</strong>. (Objet Légendaire : Permet à Bouboule de s'envoler à volonté sans jet de magie, et lui donne <strong>+3 PV max</strong>).</li>
          <li><strong>Niveau Supérieur :</strong> Bouboule est maintenant Niveau 4 ! Elle est une légende vivante de Pangéa !</li>
        </ul>

        <h5 className="font-bold mb-2">Le Grand Final Approche (Texte de transition) :</h5>
        <p className="italic">"Bouboule, regarde ta couronne de lianes. Les quatre Cristaux y sont désormais accrochés : Le Jaune de la joie, le Vert de l'espoir, le Rouge de la passion, et le Bleu de la paix.<br/><br/>
        Ensemble, ils commencent à briller d'une lumière si intense qu'elle perce les nuages. Ils se mettent à tourner, et projettent un faisceau de lumière droit vers le ciel, indiquant un lieu précis.<br/><br/>
        Le Duc Blizzard s'approche : 'La lumière pointe vers la Faille du Monde, au centre de l'océan. C'est là que dort la Machine Originelle, la toute première usine des Bipèdes Sans Poils. C'est elle qui crée la Brume Grise. Avec les 4 Cristaux, tu peux l'éteindre pour toujours... mais son gardien est le cauchemar absolu.'<br/><br/>
        Tu ajustes tes lunettes de soleil, tu secoues ta cape rouge ou ton manteau d'aurore. Tu es Bouboule, le Cachalot Magique, et tu es prête à sauver le monde."</p>
      </ActionBox>
    </section>
  );
}
