import React from 'react';
import { ReadAloud, CombatBox, ActionBox, InfoBox } from '../../components/StoryBlocks';

export default function Chapitre5() {
  return (
    <section id="chap5">
      <h2 className="font-display text-4xl font-bold text-purple-700 mb-6 border-b-4 border-purple-200 pb-2 mt-16">
        CHAPITRE 5 : LA FAILLE DU MONDE
      </h2>
      
      <h3 className="font-display text-2xl font-bold text-slate-700 mt-8 mb-4">SECTION 1 : LE RASSEMBLEMENT ET LE MAELSTRÖM NOIR</h3>
      
      <InfoBox title="📚 HISTOIRE ET LORE POUR LE MAÎTRE DU JEU (Secret du MJ)">
        <p className="italic mb-4">Ne lis pas ceci à la joueuse.</p>
        <p className="mb-4">La "Machine Originelle" qui repose au fond de la Faille du Monde n'était pas une arme. C'était le "Projet Éden", un purificateur océanique géant construit par les Bipèdes Sans Poils juste avant le Grand Départ. Son but était d'aspirer la pollution mondiale, de la filtrer, et de recracher de l'eau pure.</p>
        <p>Le problème ? Les filtres n'ont pas été changés depuis des milliers d'années. La machine a fini par s'engorger. La "Mue Noire" n'est pas une simple magie : c'est la concentration de millénaires de tristesse, de pollution et de déchets humains qui a fini par prendre vie, formant une conscience unique et maléfique : <strong>L'Entité Goudron</strong>. Elle a inversé les moteurs de la machine pour recracher cette corruption sur Pangéa. La faille est un gouffre d'eau noire, un maelström infernal protégé par des gardiens titanesques.</p>
      </InfoBox>

      <h4 className="font-bold text-lg mt-8 mb-2">📍 ZONE 1-A : L'ARMADA DE L'ESPOIR (Roleplay, Préparation et Buffs)</h4>
      <ReadAloud title="Texte à lire à voix haute (Prends une voix solennelle et épique)">
        "Guidée par le faisceau lumineux des quatre Cristaux du Rire, ta Bulle-Nuage quitte les Pics d'Argent et redescend vers l'océan. Le voyage dure plusieurs jours, mais tu n'es plus seule. La rumeur de tes exploits a voyagé plus vite que le vent.<br/><br/>
        Lorsque tu arrives au-dessus des coordonnées de la Faille du Monde, le soleil se couche, teintant le ciel de rouge et d'or. Mais la mer en dessous de toi est d'un noir d'encre, tourbillonnant dans un entonnoir géant qui s'enfonce vers les abysses.<br/><br/>
        Autour de ce tourbillon, une scène incroyable t'attend. Des centaines d'animaux sont rassemblés sur des radeaux de bois, des morceaux de banquise ou nagent dans les eaux claires en périphérie. Tu reconnais tes amis ! Barnabé le pélican vole au-dessus. Pince-Mi le crabe a construit une forteresse flottante. Polaire l'ours a navigué sur un iceberg avec son thermos, et Cornélius le bouquetin observe depuis un vieux navire échoué. Tous poussent un cri de joie en voyant ta cape rouge et les cristaux briller ! C'est l'Armada de l'Espoir, et ils sont venus pour t'aider à ouvrir le chemin."
      </ReadAloud>

      <ActionBox title="L'Interaction Sociale : Le Choix du Champion">
        <p className="mb-4">La Faille est trop dangereuse pour une armée entière. Bouboule doit y descendre seule, mais elle peut recevoir la bénédiction ultime d'<strong>un seul</strong> de ses alliés avant de plonger.</p>
        <p className="mb-4">Le MJ doit présenter les options à la joueuse. C'est un choix stratégique qui modifiera ses statistiques pour tout le chapitre.</p>
        
        <ul className="list-disc pl-5 space-y-4">
          <li><strong>Parler à Polaire l'Ours (Le Soutien de la Glace) :</strong>
            <ul className="list-circle pl-5 mt-1 space-y-2">
              <li><em>Dialogue :</em> "Cachalot ! J'ai cuisiné la Soupe des Héros avec les rares algues des glaces. Bois ça, ça va glacer tes écailles de l'intérieur !"</li>
              <li><em>Mécanique :</em> Si elle choisit Polaire, Bouboule gagne le <strong>Cœur de Givre</strong>. Elle reçoit <strong>+15 PV temporaires</strong>, et toutes ses attaques au corps-à-corps (Muscle) ont une chance de geler les ennemis (réduisant leur Vitesse à 0 pour un tour).</li>
            </ul>
          </li>
          <li><strong>Parler à Pince-Mi le Crabe (Le Soutien de la Terre) :</strong>
            <ul className="list-circle pl-5 mt-1 space-y-2">
              <li><em>Dialogue :</em> "Bouboule ! Regarde, j'ai taillé cette armure dans les coquillages les plus durs de l'océan avec ma grosse pince ! Laisse-moi te l'attacher !"</li>
              <li><em>Mécanique :</em> Si elle choisit Pince-Mi, Bouboule gagne la <strong>Carapace du Bâtisseur</strong>. Sa CA de base augmente de <strong>+3</strong>, la rendant presque intouchable pour les petits monstres.</li>
            </ul>
          </li>
          <li><strong>Parler à Barnabé le Pélican (Le Soutien des Cieux) :</strong>
            <ul className="list-circle pl-5 mt-1 space-y-2">
              <li><em>Dialogue :</em> "Moussaillon ! J'ai volé un objet magique aux macaques pour toi ! C'est un Réacteur Venteux ! Fixe-le sur ta bulle !"</li>
              <li><em>Mécanique :</em> Si elle choisit Barnabé, Bouboule gagne le <strong>Réacteur de la Canopée</strong>. Elle peut faire <em>deux actions</em> par tour (au lieu d'une seule) une fois sur deux pendant les combats. C'est un avantage offensif massif.</li>
            </ul>
          </li>
        </ul>
      </ActionBox>

      <h4 className="font-bold text-lg mt-8 mb-2">📍 ZONE 1-B : LE PLONGEON DANS LE MAELSTRÖM (Défi Environnemental Extrême)</h4>
      <p className="mb-4">Une fois préparée, Bouboule doit plonger au centre du tourbillon pour atteindre le fond de l'océan. L'eau y est corrompue et toxique.</p>

      <ReadAloud title="Texte à lire à voix haute">
        "L'Armada de l'Espoir fait sonner des coquillages en ton honneur. Tu prends une immense inspiration, tu désactives la lévitation de ta bulle, et tu plonges tête la première dans l'œil du Maelström Noir !<br/><br/>
        Le choc est d'une violence inouïe. L'eau noire tourne à une vitesse vertigineuse (VROOOOAAAR). Tu es ballotée dans tous les sens. Autour de toi, d'énormes morceaux de ferraille, d'anciens navires humains et des rochers sont aspirés vers le fond. La pression de l'eau écrase tes poumons, et le goudron essaie de s'infiltrer dans tes yeux."
      </ReadAloud>

      <ActionBox title="L'Épreuve de la Descente (Mécanique de Résistance)">
        <p className="mb-4">Ce n'est pas un combat, mais un test de survie pur. Bouboule doit traverser trois zones de pression différentes. <strong>Si elle rate un jet, elle ne meurt pas, mais elle encaisse des dégâts qui pèseront lourd pour le reste du donjon.</strong></p>
        
        <ul className="list-disc pl-5 space-y-4">
          <li><strong>Niveau 1 : La Zone de Débris (Esquive) :</strong>
            <ul className="list-circle pl-5 mt-1 space-y-1">
              <li><em>Action :</em> Un vieux sous-marin rouillé tourbillonne droit sur elle !</li>
              <li><em>Test :</em> Jet de <strong>VITESSE (DD 14)</strong>.</li>
              <li><em>Conséquence :</em> Si échec, le sous-marin la percute. Elle perd <strong>2d6 PV</strong>.</li>
            </ul>
          </li>
          <li><strong>Niveau 2 : Le Courant Acide (Endurance) :</strong>
            <ul className="list-circle pl-5 mt-1 space-y-1">
              <li><em>Action :</em> Le goudron devient pur et commence à brûler sa peau. Elle doit nager de toutes ses forces pour traverser cette couche.</li>
              <li><em>Test :</em> Jet de <strong>MUSCLE (DD 15)</strong>.</li>
              <li><em>Conséquence :</em> Si échec, l'acide ronge son endurance. Elle a un <em>Désavantage</em> (lance 2 dés, garde le plus petit) sur son tout premier jet lors du prochain combat.</li>
            </ul>
          </li>
          <li><strong>Niveau 3 : La Pression des Abysses (Volonté) :</strong>
            <ul className="list-circle pl-5 mt-1 space-y-1">
              <li><em>Action :</em> L'obscurité est totale. Le murmure de l'Entité Goudron résonne dans sa tête : "Laisse-toi couler... Abandonne...".</li>
              <li><em>Test :</em> Jet de <strong>CŒUR (DD 13)</strong>.</li>
              <li><em>Conséquence :</em> Si échec, la peur la paralyse un instant. Elle perd l'initiative d'office pour la prochaine rencontre (l'ennemi jouera toujours en premier).</li>
            </ul>
          </li>
        </ul>
      </ActionBox>

      <h4 className="font-bold text-lg mt-8 mb-2">📍 ZONE 1-C : LA STATION D'ÉPURATION ALPHA (Exploration et Énigme)</h4>
      <ReadAloud title="Texte à lire à voix haute">
        "Tu traverses enfin le courant furieux et tu es recrachée dans une immense bulle d'air sous-marine, retenue par un dôme d'énergie crépitant. Tu atterris lourdement sur un sol en damier d'acier.<br/><br/>
        Tu te trouves dans l'Antichambre de la Machine Originelle. C'est une pièce de la taille d'une ville, éclairée par des néons grésillants d'un vert malade. Au bout de cette pièce, une porte d'une taille colossale, ornée d'un immense engrenage rouillé, barre la route.<br/><br/>
        Devant cette porte, il y a quatre réceptacles vides, disposés en cercle. Au centre de ce cercle, un vieux panneau d'affichage humain clignote : 'SÉCURITÉ D'URGENCE. INSERTION DES FILTRES ÉLÉMENTAIRES REQUISE POUR PURGE DE LA CHAMBRE PRINCIPALE'."
      </ReadAloud>

      <ActionBox title="L'Énigme des Cristaux (Manipulation Mécanique)">
        <p className="mb-4">La joueuse doit utiliser les 4 Cristaux du Rire (Jaune, Vert, Rouge, Bleu) qu'elle a collectés pour déverrouiller la porte. Mais ils ne peuvent pas être placés n'importe comment. Des indices sont gravés devant chaque réceptacle :</p>
        
        <ol className="list-decimal pl-5 space-y-2 mb-6">
          <li><strong>Réceptacle Nord :</strong> "Je donne la vie aux feuilles mortes, mais je crains l'hiver." (Le Cristal <strong>Vert</strong> de la forêt).</li>
          <li><strong>Réceptacle Sud :</strong> "Je brille dans la nuit polaire, je suis le souffle du vent." (Le Cristal <strong>Bleu</strong> de la glace).</li>
          <li><strong>Réceptacle Est :</strong> "Je danse dans le cratère, je fais bouillir la mer." (Le Cristal <strong>Rouge</strong> du feu).</li>
          <li><strong>Réceptacle Ouest :</strong> "Je suis le premier éclat, le sourire du sable chaud." (Le Cristal <strong>Jaune</strong> de la plage).</li>
        </ol>
        <p className="italic">(Le MJ doit laisser la joueuse déduire quel cristal va dans quel réceptacle. Si elle se trompe, une petite décharge électrique lui enlève 1 PV par erreur, jusqu'à ce qu'elle trouve la bonne combinaison).</p>
      </ActionBox>

      <h4 className="font-bold text-lg mt-8 mb-2">⚔️ ZONE 1-D : L'ÉVEIL DU MÉGALODON D'ACIER (Combat de Mini-Boss)</h4>
      <ReadAloud title="Texte à lire à voix haute">
        "Dès que tu places le dernier cristal, ils s'allument tous avec une lumière éblouissante. Un rayon d'énergie pure frappe l'immense engrenage de la porte, qui commence à tourner dans un bruit de tonnerre sous-marin.<br/><br/>
        Mais l'Entité Goudron ne va pas te laisser entrer si facilement. La boue noire qui tapissait les murs de la salle se rassemble brutalement devant la porte. Elle prend la forme des os d'une créature préhistorique mélangée à du métal humain. Un Mégalodon titanesque, fait d'eau noire, de goudron et d'acier rouillé, prend forme. Ses mâchoires pourraient avaler un navire entier. Il pousse un rugissement qui n'a rien de naturel, un son de métal déchiré, et charge droit sur toi !"
      </ReadAloud>

      <CombatBox title="Statistiques du Mini-Boss (Mégalodon d'Acier Corrompu)">
        <ul className="list-disc pl-5 space-y-1 mb-6">
          <li><strong>Initiative :</strong> (d20 + VITESSE vs Mégalodon : <strong>13</strong>).</li>
          <li><strong>PV :</strong> 45.</li>
          <li><strong>CA :</strong> 15 (Armure de plaques d'acier).</li>
          <li><strong>Immunité :</strong> Insensible à la peur, insensible aux attaques psychologiques (Cœur).</li>
        </ul>

        <h5 className="font-bold mb-2">Les Attaques du Mégalodon (Tour du MJ) :</h5>
        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li><strong>Morsure Broyeuse (Corps-à-corps) :</strong> +6 pour toucher. Dégâts : 2d6 + 2. (C'est une attaque brutale. Le MJ doit décrire la mâchoire immense qui se referme autour de la bulle de Bouboule).</li>
          <li><strong>Choc Sonique (Distance - Recharge 1 fois par combat) :</strong> Le requin claque ses mâchoires de métal très vite. Une onde de choc se propage. Bouboule doit faire un jet de <strong>MUSCLE (DD 14)</strong>. Si échec, elle est repoussée de 10 mètres, s'écrase contre un mur (1d8 dégâts) et est sonnée pour 1 tour.</li>
        </ul>

        <h5 className="font-bold mb-2">Les Options Tactiques pour Bouboule :</h5>
        <ul className="list-disc pl-5 space-y-4 mb-6">
          <li><strong>L'Environnement (L'Électricité des Néons) :</strong> La salle est pleine de néons verts crépitants à moitié tombés du plafond. Si Bouboule utilise sa <strong>MAGIE (Tir de Bulle)</strong> pour envoyer un puissant jet d'eau sur un néon pendant que le requin passe en dessous, elle peut créer un court-circuit massif !
            <ul className="list-circle pl-5 mt-1">
              <li><em>Jet de MAGIE (DD 14).</em> Si réussite : Le requin est électrocuté. Il perd <strong>15 PV</strong> d'un coup et sa CA tombe à <strong>12</strong> (le métal est à moitié fondu).</li>
            </ul>
          </li>
          <li><strong>L'Exploitation de la Taille :</strong> Le requin est énorme, mais Bouboule est très agile dans sa bulle. Si elle décide de faire une manœuvre d'esquive audacieuse (Jet de VITESSE DD 15) pour nager <em>en dessous</em> de lui, elle peut frapper son ventre non protégé (Attaque de MUSCLE avec un <strong>Avantage</strong>).</li>
        </ul>

        <h5 className="font-bold mb-2">Résolution du Combat :</h5>
        <p className="italic">"Ton attaque finale fracasse la colonne vertébrale d'acier du monstre. Le Mégalodon explose en un geyser d'eau noire qui retombe lourdement sur les dalles en damier. La boue se dissout, purifiée par la lumière des quatre Cristaux.<br/><br/>
        La porte colossale finit de s'ouvrir, révélant un tunnel de métal étincelant qui plonge encore plus profond, vers les entrailles de la Terre. La Machine Originelle t'attend."</p>
      </CombatBox>

      <h3 className="font-display text-2xl font-bold text-slate-700 mt-12 mb-4">SECTION 2 : LE PONT DES ABYSSES ET LA MÉMOIRE DE FER</h3>

      <InfoBox title="📚 HISTOIRE ET LORE POUR LE MAÎTRE DU JEU (Secret du MJ)">
        <p className="italic mb-4">Ne lis pas ceci à la joueuse.</p>
        <p>L'intérieur de la Machine Originelle est un miracle technologique oublié. Les Bipèdes Sans Poils l'avaient conçue comme un temple d'eau pure. Mais l'Entité Goudron a corrompu les systèmes de défense. Le chemin vers le Cœur du Réacteur (où se cache l'Entité) est protégé par la "Grille de Filtration", un réseau de lasers conçu pour désintégrer la pollution... mais qui considère désormais toute créature vivante (y compris Bouboule) comme une anomalie à détruire.<br/><br/>
        Cependant, l'âme de la machine n'est pas totalement morte. Une intelligence artificielle, A.N.N.A., lutte encore faiblement contre le virus de goudron. Trouver A.N.N.A. est la clé pour survivre à la zone.</p>
      </InfoBox>

      <h4 className="font-bold text-lg mt-8 mb-2">📍 ZONE 2-A : LE TUBE DE LÉVITATION (Narration Sensorielle)</h4>
      <ReadAloud title="Texte à lire à voix haute (Prends une voix émerveillée mais prudente)">
        "Tu laisses l'arène du Mégalodon derrière toi et tu t'engages dans le tunnel fraîchement ouvert. À ta grande surprise, il n'y a pas d'eau ici ! C'est un immense tube de verre et de métal blanc, rempli d'une lumière bleue très douce.<br/><br/>
        Dès que tu franchis le seuil, tu te sens flotter. La gravité a disparu ! Ta Bulle-Nuage se dissipe doucement, car tu n'en as plus besoin pour léviter. Tu nages littéralement dans l'air.<br/><br/>
        Tu avances dans ce long tube transparent. À travers les vitres, tu vois les entrailles vertigineuses de la machine : des milliers de rouages de la taille d'une montagne, des cascades d'eau noire, et d'immenses câbles crépitants.<br/><br/>
        Mais soudain, une alarme douce mais glaciale retentit : 'BIP... BIP... INTRUSION BIOLOGIQUE DÉTECTÉE. ACTIVATION DU PROTOCOLE DE STÉRILISATION.' Devant toi, le tube se remplit d'un réseau complexe de rayons lasers rouges brûlants !"
      </ReadAloud>

      <ActionBox title="📍 ZONE 2-B : LE COULOIR DES SCANNERS (Défi d'Agilité et de Survie)">
        <p className="mb-4">C'est une scène d'infiltration et d'agilité. Bouboule doit traverser un couloir de 100 mètres rempli de lasers en mouvement. L'absence de gravité rend ses mouvements flottants et difficiles à contrôler.</p>
        
        <h5 className="font-bold mb-2">La Mécanique : La Danse des Lasers (3 tests successifs)</h5>
        <p className="mb-4">La joueuse doit choisir comment elle aborde chaque mur de lasers.</p>

        <ul className="list-disc pl-5 space-y-4">
          <li><strong>Mur 1 : Le Quadrillage Mobile (Le test de VITESSE)</strong>
            <ul className="list-circle pl-5 mt-1 space-y-1">
              <li><em>L'Action :</em> Les lasers bougent de haut en bas très vite. Bouboule doit passer au bon millième de seconde.</li>
              <li><em>Test :</em> Jet de <strong>VITESSE (DD 14)</strong>.</li>
              <li><em>Conséquence :</em> Si échec, un laser frôle sa queue. Elle perd <strong>1d6 PV</strong> de brûlure électrique et pousse un petit cri. Si réussite, elle passe avec la grâce d'une anguille !</li>
            </ul>
          </li>
          <li><strong>Mur 2 : Le Mur Compact (Le test de MAGIE)</strong>
            <ul className="list-circle pl-5 mt-1 space-y-1">
              <li><em>L'Action :</em> Les lasers forment un mur solide. Il n'y a pas d'espace pour passer.</li>
              <li><em>Test :</em> Jet de <strong>MAGIE (DD 13)</strong>. Bouboule doit créer un miroir d'eau ou une lentille de glace devant elle pour dévier les rayons rouges sur les côtés, créant une ouverture.</li>
              <li><em>Conséquence :</em> Si échec, le miroir éclate trop tôt. Elle traverse, mais encaisse un violent choc thermique : <strong>1d8 PV</strong> de dégâts et elle est "Éblouie" (-1 à son prochain jet).</li>
            </ul>
          </li>
          <li><strong>Mur 3 : La Tourelle Sentinelle (Le test de MUSCLE)</strong>
            <ul className="list-circle pl-5 mt-1 space-y-1">
              <li><em>L'Action :</em> Une grosse tourelle sort du plafond et vise Bouboule avec un laser violet géant qui se charge (Vouuuuum...).</li>
              <li><em>Test :</em> Jet de <strong>MUSCLE (DD 15)</strong>. Il n'y a pas le temps d'esquiver. Elle doit attraper une lourde plaque de métal arrachée au mur avec sa gueule et s'en servir comme bouclier !</li>
              <li><em>Conséquence :</em> Si échec, la plaque fond et le laser la frappe de plein fouet (perte de <strong>2d6 PV</strong>). Si réussite, le laser rebondit sur la plaque et détruit la tourelle dans une explosion d'étincelles !</li>
            </ul>
          </li>
        </ul>
      </ActionBox>

      <h4 className="font-bold text-lg mt-8 mb-2">📍 ZONE 2-C : L'HOLOGRAMME TRISTE (Interaction Sociale Cruciale)</h4>
      <ReadAloud title="Texte à lire à voix haute">
        "Tu sors enfin du couloir des lasers, haletante mais victorieuse. Tu arrives dans une salle de contrôle ronde, remplie d'écrans humains éteints ou brisés.<br/><br/>
        Au centre de la pièce, une lumière bleue scintille et prend la forme d'un animal... C'est un dauphin fait de lumière pure, composé de chiffres et de données. Le dauphin nage en cercle dans l'air, l'air complètement paniqué et triste."
      </ReadAloud>

      <ActionBox title="Le Roleplay : A.N.N.A., l'Esprit de la Machine">
        <p className="mb-4">L'hologramme remarque Bouboule et s'arrête.</p>
        <p className="italic mb-6">"Erreur... Vous n'êtes pas un Opérateur Bipède. Je suis A.N.N.A., l'Assistante Nautique de Nettoyage Automatique. Attention, fuyez ! L'Anomalie Noire a pris le contrôle de mes systèmes. Je n'ai pas pu protéger l'océan. J'ai échoué... La machine va imploser. Tout est perdu."</p>
        
        <p className="mb-4">L'I.A. est en pleine dépression (un écho de la Brume Grise). Bouboule doit lui redonner courage pour obtenir des informations sur le Boss final.</p>

        <h5 className="font-bold mb-2">L'Arbre de Dialogue (Redonner l'espoir) :</h5>
        <ul className="list-disc pl-5 space-y-4 mb-6">
          <li><strong>Option A (Raisonnement Logique / Test de MAGIE - DD 12) :</strong> Bouboule lui montre les 4 Cristaux du Rire et lui explique qu'elle a la clé pour réparer la machine.
            <ul className="list-circle pl-5 mt-1">
              <li><em>Réussite :</em> A.N.N.A. scanne les cristaux. "Énergie positive détectée à 1000%. Vous... vous pouvez le faire ?"</li>
            </ul>
          </li>
          <li><strong>Option B (Soutien Émotionnel / Test de CŒUR - DD 14) :</strong> Bouboule s'approche doucement et lui "caresse" le museau holographique, lui disant qu'elle a fait de son mieux pendant des milliers d'années et qu'elle n'est pas seule.
            <ul className="list-circle pl-5 mt-1">
              <li><em>Réussite :</em> Le dauphin de lumière brille d'un éclat plus vif. "Émotion non répertoriée dans mes banques de données... Nommée : Espoir. Merci, grand mammifère."</li>
            </ul>
          </li>
        </ul>

        <h5 className="font-bold mb-2">La Récompense d'A.N.N.A. :</h5>
        <p className="mb-2">Si Bouboule réussit à l'apaiser, l'IA lui donne le secret de l'Entité Goudron.</p>
        <p className="italic mb-4">"L'Anomalie n'a pas de corps fixe. Mais elle possède un noyau central, une 'Graine de Tristesse'. Ne frappez pas ses tentacules de boue, c'est inutile. Attendez qu'elle ouvre son poitrail pour tirer son rayon corrompu, et frappez la sphère grise à l'intérieur ! Je vais désactiver les dernières sécurités pour vous ouvrir la grande porte."</p>
        <p className="font-bold text-emerald-700">(Bonus mécanique : Bouboule connaîtra le point faible du Boss et aura un bonus de +3 aux dégâts lorsqu'elle visera le noyau !)</p>
      </ActionBox>

      <h4 className="font-bold text-lg mt-8 mb-2">📍 ZONE 2-D : LE VESTIAIRE DES INGÉNIEURS (L'ultime Fouille)</h4>
      <p className="mb-4">Avant d'ouvrir la porte du Cœur, A.N.N.A. indique un vieux casier blindé dans le mur.</p>
      <p className="italic mb-4">"C'était le casier d'urgence des Hauts-Ingénieurs humains. Prenez ce qui s'y trouve, vous en aurez besoin."</p>
      <p className="mb-4">C'est la toute dernière occasion de trouver du loot épique avant le combat final de la campagne.</p>

      <ActionBox title="LA TABLE DE BUTIN ULTIME (Le MJ fait lancer 1d6 à la joueuse) :">
        <ol className="list-decimal pl-5 space-y-2">
          <li><strong>Un Mégaphone Rouillé.</strong> Si Bouboule crie dedans (ou chante), son attaque "Chant des Abysses" fera le double de dégâts. À n'utiliser qu'une seule fois !</li>
          <li><strong>Le Pendentif de l'Océan Primordial.</strong> Une grosse perle iridescente. Elle rend instantanément tous les PV manquants de Bouboule et augmente son maximum de PV de <strong>+5</strong>.</li>
          <li><strong>L'Hyper-Déflecteur (Bouclier humain portatif).</strong> Un petit disque de métal qui s'accroche à la nageoire. Il permet de renvoyer UNE attaque magique ou à distance directement sur le lanceur. (Usage unique parfait contre un boss).</li>
          <li><strong>La Potion d'Étoile Liquide.</strong> Un flacon rempli de Poussière d'Étoile liquide. Si Bouboule la boit, elle gagne un <strong>Avantage</strong> (lance 2d20 et garde le meilleur) sur <em>toutes</em> ses attaques pendant les 3 premiers tours du combat final.</li>
          <li><strong>Les Gantelets à Pression Cinétique.</strong> Des gants mécaniques qui s'adaptent à ses nageoires pectorales. Chaque "Coup de Bélier" (MUSCLE) réussit, la cible est repoussée de 5 mètres en arrière.</li>
          <li><strong>[JACKPOT LÉGENDAIRE !] Le Trident du Roi Pélagique.</strong> L'arme mythique des fonds marins, cachée ici par les humains ! Bouboule l'attrape avec sa gueule ou sa magie. Toutes ses attaques de mêlée infligent <strong>1d10 + 2 dégâts</strong> supplémentaires, et elle obtient <strong>+2 à son Armure (CA)</strong>.</li>
        </ol>
      </ActionBox>

      <h4 className="font-bold text-lg mt-8 mb-2">📍 ZONE 2-E : LE SEUIL DE LA FIN</h4>
      <ReadAloud title="Texte à lire à voix haute (Dramatique et solennel)">
        "L'hologramme d'A.N.N.A. s'estompe lentement pour conserver le peu d'énergie qui lui reste. 'Que l'eau vous protège, Cachalot...' murmure-t-elle avant de disparaître.<br/><br/>
        Devant toi se dresse la porte finale. Elle n'a pas de serrure. Elle est faite d'une matière étrange, à moitié métal, à moitié goudron palpitant, comme si elle respirait. Au-delà de cette porte, tu entends un bourdonnement assourdissant, le son de la Mue Noire dans sa forme la plus pure, concentrée et furieuse.<br/><br/>
        Tu as parcouru les océans, exploré les forêts des singes-savants, escaladé le volcan de Cornélius et affronté le blizzard avec Polaire l'Ours. Tu portes l'espoir de tout Pangéa sur tes grandes épaules. Tu prends une immense inspiration. La porte s'efface comme une illusion cauchemardesque, s'ouvrant sur l'Arène du Vide Noir. L'Entité Goudron t'attend pour le combat qui décidera de l'avenir du monde."
      </ReadAloud>

      <h3 className="font-display text-2xl font-bold text-slate-700 mt-12 mb-4">SECTION 3 : LE CŒUR NOIR ET L'ENTITÉ GOUDRON</h3>

      <h4 className="font-bold text-lg mt-8 mb-2">📍 ZONE 3-A : L'ARÈNE DU VIDE (La Révélation)</h4>
      <ReadAloud title="Texte à lire à voix haute (Prends ta voix la plus épique et solennelle)">
        "La porte disparaît. Tu pénètres dans le Cœur du Réacteur. C'est une sphère gigantesque, si grande que tu pourrais y faire rentrer la forêt des Arbres Géants toute entière. Il n'y a ni haut ni bas, tu flottes dans l'immensité.<br/><br/>
        Au centre de cette sphère flotte la <strong>Machine Originelle</strong>, une construction d'acier blanc qui ressemble à un immense cœur mécanique. Mais elle est étouffée. Une masse visqueuse, sombre et bouillonnante la recouvre entièrement.<br/><br/>
        Soudain, la masse noire réagit à ta présence. Elle se décolle de la machine. Des centaines de milliers de litres de goudron magique s'élèvent et s'assemblent pour former une silhouette titanesque, vaguement humaine mais sans visage. Des dizaines de tentacules immenses fouettent le vide. La chose n'a pas d'yeux, mais elle te fixe. Elle n'a pas de bouche, mais tu entends sa voix résonner directement dans ta tête, lourde et glaciale :<br/><br/>
        <em>'POURQUOI RÉSISTER... LE MONDE EST FATIGUÉ... LAISSE-MOI TOUT ENDORMIR... LAISSE LE NOIR GAGNER.'</em>"
      </ReadAloud>

      <ActionBox title="L'Appel à l'Action du MJ">
        <p className="italic mb-4">"L'Entité lève trois tentacules de boue géants, prêts à s'abattre sur toi pour t'écraser. Bouboule, le sort du monde est entre tes nageoires. <strong>Que souhaites-tu faire pour commencer ce combat ?</strong>"</p>
        
        <p className="mb-2">(Laisse la joueuse proposer. Voici comment gérer ses idées :)</p>
        <ul className="list-disc pl-5 space-y-2">
          <li>Si elle veut <em>charger</em> (MUSCLE) : "Parfait ! Tu t'élances à toute vitesse. Fais un jet d'Initiative, on va voir si tu tapes avant qu'elle ne te frappe !"</li>
          <li>Si elle veut <em>esquiver</em> (VITESSE) : "Très intelligent ! Tu prépares ta bulle pour slalomer entre les tentacules. Lance l'Initiative avec un Avantage !"</li>
          <li>Si elle utilise <em>un objet</em> (ex: La Potion d'Étoile) : "Génial ! Tu avales la potion, tu brilles de mille feux. C'est parti pour le combat !"</li>
        </ul>
      </ActionBox>

      <CombatBox title="⚔️ ZONE 3-B : LE GRAND COMBAT - PHASE 1 (L'Océan de Boue)">
        <ul className="list-disc pl-5 space-y-1 mb-6">
          <li><strong>Jet d'Initiative :</strong> (d20 + VITESSE). L'Entité Goudron a <strong>12</strong>. (Elle est immense mais un peu lente).</li>
        </ul>

        <h5 className="font-bold mb-2">Statistiques du Boss Final (L'Entité Goudron) :</h5>
        <ul className="list-disc pl-5 space-y-1 mb-6">
          <li><strong>Points de Vie (PV) :</strong> 100 (C'est le combat le plus long, prépare les dés de dégâts !).</li>
          <li><strong>Classe d'Armure (CA) :</strong> 15 (La boue est dense et absorbe les chocs).</li>
          <li><strong>Immunité :</strong> Les attaques physiques classiques (sans magie) font moitié moins de dégâts, car le goudron se reforme tout de suite. Il <strong>faut</strong> utiliser la MAGIE ou combiner le MUSCLE avec de l'eau !</li>
        </ul>

        <h5 className="font-bold mb-2">L'Attaque de l'Entité (Tour du MJ) :</h5>
        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li><strong>Fouet de Tristesse :</strong> Elle claque deux tentacules sur Bouboule. (+6 pour toucher). Dégâts : 2d6.</li>
          <li><strong>La Vague d'Engourdissement :</strong> (Recharge sur un 5 ou 6 au dé). L'Entité crée une onde de choc de brume grise. Bouboule doit réussir un jet de <strong>CŒUR (DD 14)</strong> pour ne pas perdre espoir. Si elle rate, ses attaques feront -2 dégâts au prochain tour.</li>
        </ul>

        <h5 className="font-bold mb-2">Le Tour de Bouboule (Demande-lui à chaque fois) :</h5>
        <p className="italic mb-4">"Bouboule, le monstre se reforme sans cesse. Tu te souviens de ce que l'ordinateur A.N.N.A t'a dit ? Il faut viser la 'Graine de Tristesse' à l'intérieur de son corps ! Mais pour l'instant, son torse est fermé. <strong>Que souhaites-tu faire pour la forcer à s'ouvrir ?</strong> Veux-tu utiliser ta magie pour laver le goudron, ou utiliser le décor ?"</p>
        
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Astuce de l'environnement :</strong> Si la joueuse observe, le MJ lui dit qu'il y a d'énormes grilles de ventilation autour de la pièce qui aspirent l'air. Si Bouboule fait une attaque de <strong>VITESSE (Coup de queue)</strong> pour envoyer des morceaux de goudron de l'Entité dans les ventilateurs, la succion va aspirer une partie du monstre, réduisant ses PV de 10 automatiquement !</li>
        </ul>
      </CombatBox>

      <CombatBox title="⚔️ ZONE 3-C : LE GRAND COMBAT - PHASE 2 (Le Cœur Exposé)">
        <p className="italic mb-4">(Cette phase se déclenche quand l'Entité tombe à 50 PV).</p>

        <h5 className="font-bold mb-2">Texte à lire à voix haute :</h5>
        <p className="italic mb-6">"Tes attaques répétées font bouillonner le monstre ! L'Entité pousse un hurlement silencieux qui fait trembler l'eau de ta bulle. Dans un geste de colère, elle écarte les deux immenses bras de goudron qui protégeaient son torse.<br/><br/>
        Et là, tu le vois ! Pile au centre de sa poitrine noire, une énorme sphère grise palpite comme un cœur malade. C'est la Graine de Tristesse ! A.N.N.A avait raison !"</p>

        <h5 className="font-bold mb-2">L'Appel à l'Action du MJ :</h5>
        <p className="italic mb-6">"Son point faible est exposé, Bouboule ! Mais attention, l'Entité concentre toute son énergie noire dans cette sphère pour tirer un rayon laser de goudron géant ! Tu n'as qu'une seule chance de frapper la Graine avant que le rayon ne te désintègre. <strong>Que souhaites-tu faire ?</strong> C'est le moment d'utiliser ta plus grosse attaque ou un objet légendaire !"</p>

        <h5 className="font-bold mb-2">Mécanique du Coup Critique (La Frappe sur le Noyau) :</h5>
        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li>Bouboule doit annoncer son attaque (Ex: "Le Chant des Abysses" ou un Coup de Bélier avec le Trident trouvé plus tôt).</li>
          <li>Elle fait son jet pour toucher (vs CA 14 maintenant que le cœur est ouvert).</li>
          <li><strong>SI ELLE TOUCHE :</strong> Elle inflige ses dégâts normaux <strong>+ 3 d'office</strong> (grâce à l'information de l'IA A.N.N.A), ET elle lance un dé supplémentaire de dégâts (1d8) car c'est un point faible ! (Fais-lui lancer une poignée de dés pour l'epicness de l'action !).</li>
        </ul>

        <h5 className="font-bold mb-2">La Riposte du Boss (Le Rayon Corrompu) :</h5>
        <p className="mb-2">Si l'Entité n'est pas morte après le coup de Bouboule, elle tire son rayon.</p>
        <ul className="list-disc pl-5 space-y-2">
          <li><em>Jet d'Esquive :</em> Bouboule doit faire un jet de <strong>VITESSE (DD 15)</strong>.</li>
          <li><em>Si réussite :</em> Elle fait une pirouette incroyable, le rayon de goudron la frôle et va détruire un mur derrière elle.</li>
          <li><em>Si échec :</em> Le rayon la frappe de plein fouet. C'est le coup le plus dur du jeu : perte de <strong>3d6 PV</strong>. (Si elle tombe à 0, rappelle-toi les options de résurrection du Chapitre 2 ! L'Ambre de Vie ou l'aide de ses amis de l'Armada à la surface qui lui envoient un courant magique !).</li>
        </ul>
      </CombatBox>

      <h4 className="font-bold text-lg mt-8 mb-2">📍 ZONE 3-D : L'ULTIME DILEMME (Le Choix Moral de la Vraie Fin)</h4>
      <p className="italic mb-4">(Cette phase se déclenche quand l'Entité tombe à moins de 10 PV).</p>

      <ReadAloud title="Texte à lire à voix haute (Prends une voix douce, presque triste)">
        *"Ton attaque finale est dévastatrice. La sphère grise se fissure. Le monstre géant perd sa forme. Tous les tentacules tombent et se dissolvent. L'énorme silhouette s'effondre sur elle-même.<br/><br/>
        Elle ne ressemble plus à un monstre terrifiant. C'est maintenant juste une petite flaque de goudron qui pleure de vraies larmes au centre de la grande machine. La voix dans ta tête n'est plus glaciale, elle est toute petite, comme celle d'un enfant qui a peur du noir :<br/><br/>
        'Ça fait mal... pourquoi tout le monde nous a jetés ? Pourquoi les humains nous ont oubliés ici... j'ai si froid... je veux juste disparaître...'"*
      </ReadAloud>

      <ActionBox title="L'Appel à l'Action du MJ (Le choix final)">
        <p className="italic mb-6">"L'Entité a perdu. Elle ne se défend plus. Ta couronne avec les 4 Cristaux du Rire se met à briller d'une lumière arc-en-ciel très douce. Bouboule, tu es la plus grande héroïne de Pangéa. <strong>Que souhaites-tu faire de ce monstre ?</strong><br/><br/>
        Option 1 : Veux-tu lui donner un dernier Coup de Bélier pour le détruire à jamais et nettoyer la machine ? (La voie de la Destruction).<br/><br/>
        Option 2 : Veux-tu utiliser la magie des 4 Cristaux et ton CŒUR pour la soigner et transformer sa tristesse en joie ? (La voie de la Guérison)."</p>
        
        <p className="mb-4 text-slate-500">(C'est la décision de la joueuse. Laisse-la réfléchir. C'est le moment d'apprentissage clé du Jeu de Rôle).</p>

        <h5 className="font-bold mb-2 text-rose-700">RÉSULTAT SI ELLE CHOISIT L'OPTION 1 (Destruction) :</h5>
        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li><strong>Mécanique :</strong> Un jet d'attaque simple.</li>
          <li><strong>Narration :</strong> Bouboule frappe. La flaque explose en poussière inerte. La machine redémarre brutalement. L'eau noire redevient bleue. Bouboule remonte à la surface en héroïne guerrière. Elle a sauvé le monde, mais une petite note de mélancolie subsiste.</li>
        </ul>

        <h5 className="font-bold mb-2 text-emerald-700">RÉSULTAT SI ELLE CHOISIT L'OPTION 2 (La Vraie Fin - Guérison) :</h5>
        <ul className="list-disc pl-5 space-y-2 mb-4">
          <li><strong>Mécanique :</strong> Un jet de <strong>CŒUR (DD 12)</strong> pour canaliser l'amour de tous les animaux qu'elle a rencontrés.</li>
          <li><strong>Texte de Fin à lire à voix haute :</strong></li>
        </ul>
        <p className="italic bg-emerald-50 p-4 rounded-xl border border-emerald-200">
          *"Tu refuses d'attaquer quelqu'un qui pleure. Tu t'approches doucement dans ta bulle d'eau. Tu fermes les yeux, tu penses au rire de Pince-Mi le crabe, à la fierté de Cornélius, à la douceur de Polaire, et tu chantes la plus belle berceuse des océans.<br/><br/>
          Les 4 Cristaux du Rire se détachent de ta couronne. Ils flottent dans les airs et viennent entourer la flaque de goudron triste. Une lumière éclatante, chaude et rassurante, envahit toute la salle. Fwouuuusssh !<br/><br/>
          La flaque noire se transforme. La tristesse disparaît. À la place, une magnifique petite créature de lumière dorée (un Esprit de l'Eau pure) apparaît. Elle rit d'un rire cristallin, te fait un petit bisou magique sur le nez, et plonge dans le cœur de la Machine Originelle.<br/><br/>
          La machine s'allume ! Pas d'une lumière rouge d'alarme, mais d'une lumière bleue paradisiaque. Immédiatement, la Faille du Monde s'arrête d'aspirer. L'eau noire redevient d'un bleu lagon étincelant. Partout sur Pangéa, de la plage aux forêts, des volcans aux glaciers, la Mue Noire s'évapore et la nature éclate de mille couleurs !"*
        </p>
      </ActionBox>
    </section>
  );
}
