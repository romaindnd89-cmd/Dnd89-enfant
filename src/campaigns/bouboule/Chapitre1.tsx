import React from 'react';
import { ReadAloud, CombatBox, ActionBox, InfoBox } from '../../components/StoryBlocks';

export default function Chapitre1() {
  return (
    <section id="chap1">
      <h2 className="font-display text-4xl font-bold text-emerald-700 mb-6 border-b-4 border-emerald-200 pb-2 mt-16">
        CHAPITRE 1 : L'OMBRE SUR LE LAGON DE CRISTAL
      </h2>
      <p className="text-slate-500 font-medium mb-8">Niveau recommandé : 1<br/>Lieu : L'Archipel des Eaux Douces (Juridiction de l'Empire Pélagique)<br/>Ambiance : Mystère, découverte, transition de la joie à l'inquiétude.</p>
      
      <InfoBox title="Synopsis du Chapitre pour le Maître du Jeu">
        <p>Dans ce premier chapitre, Bouboule le Cachalot se réveille dans sa zone de confort (le Lagon). Le MJ doit prendre le temps de décrire la beauté de ce lieu pour créer un contraste fort avec l'arrivée de la Brume Grise. La joueuse devra enquêter sur l'origine de cette pollution en interagissant avec l'écosystème, interroger des PNJs complexes, et résoudre des énigmes environnementales avant même de penser à combattre.</p>
      </InfoBox>

      <h3 className="font-display text-2xl font-bold text-slate-700 mt-8 mb-4">SCÈNE 1 : LE RÉVEIL ET L'ENQUÊTE SENSORIELLE</h3>
      <ReadAloud title="Texte à lire à voix haute (Encadré Narratif)">
        "Le soleil se lève doucement sur l'Archipel des Eaux Douces. Tu es Bouboule, le grand Cachalot Magique. Tu te réveilles en flottant paisiblement près de la surface du Lagon de Cristal. D'habitude, cet endroit porte bien son nom : l'eau y est si transparente que tu peux voir les étoiles de mer danser sur le sable blanc à cent mètres de profondeur. L'eau est tiède, presque caressante, et sent bon le sel et le corail frais. Ta cape rouge flotte doucement autour de toi."<br/><br/>
        "Cependant, ce matin, quelque chose te dérange. Le chant habituel des dauphins au loin est remplacé par un silence lourd. En ouvrant les yeux, tu remarques que la lumière du soleil a du mal à percer l'eau. Une étrange substance, semblable à de la poussière grise suspendue, flotte autour de toi. Ça pique un peu les yeux, et cela dégage une odeur très désagréable, comme celle d'une vieille algue pourrie laissée au soleil. Tu es seule pour le moment. Que fais-tu ?"
      </ReadAloud>

      <ActionBox title="Options d'Exploration et Mécaniques (Bac à sable)">
        <p className="mb-4">Laisse la joueuse décider de son approche. Voici les éléments qu'elle peut examiner dans cette zone de départ, et les informations que tu lui donnes en fonction de ses actions.</p>
        
        <h4 className="font-bold text-lg mb-2">1. Analyser l'eau grise (Test de MAGIE)</h4>
        <p className="mb-2">Si Bouboule veut utiliser son affinité magique pour comprendre ce qu'est cette poussière :</p>
        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li><strong>Jet de MAGIE - DD (Degré de Difficulté) 10 :</strong>
            <ul className="list-circle pl-5 mt-1 space-y-1">
              <li><em>Échec (1 à 9) :</em> La magie de Bouboule réagit mal à la poussière. Elle éternue un énorme nuage de bulles, ce qui trouble encore plus l'eau. Elle ressent juste une grande tristesse sans en comprendre l'origine.</li>
              <li><em>Réussite (10 à 14) :</em> Bouboule sent que cette substance n'est pas naturelle. C'est une magie ancienne, chargée de colère et de tristesse. Elle comprend que la source de cette poussière vient d'un courant chaud venant de l'Est, vers la Plage des Coquillages.</li>
              <li><em>Réussite Critique (15+) :</em> En plus des informations précédentes, Bouboule arrive à isoler une particule grise dans une de ses bulles magiques. Elle obtient un "Échantillon de Brume" (Objet d'inventaire) qui pourrait être utile pour prouver à d'autres animaux que la pollution est réelle.</li>
            </ul>
          </li>
        </ul>

        <h4 className="font-bold text-lg mb-2">2. Scruter les fonds marins (Test de VITESSE/PERCEPTION)</h4>
        <p className="mb-2">Si Bouboule veut plonger un peu pour voir l'état des fonds coralliens :</p>
        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li><em>Pas de jet nécessaire pour voir :</em> Tu lui décris que les coraux d'habitude fluorescents (roses, bleus, jaunes) sont devenus tout gris et repliés sur eux-mêmes. Les petits poissons-clowns ont disparu.</li>
          <li><strong>Jet de CŒUR - DD 12 (Pour fouiller en douceur) :</strong>
            <ul className="list-circle pl-5 mt-1 space-y-1">
              <li><em>Réussite :</em> En soulevant délicatement une anémone de mer triste, Bouboule découvre un petit groupe de crevettes cachées, tremblantes de peur. Si Bouboule leur parle doucement, la doyenne des crevettes lui murmure : "Le grand monstre à carapace... il a craché le nuage noir cette nuit... il est allé vers la plage... ne nous mange pas, grand cachalot !"</li>
              <li><em>Échec :</em> Bouboule est trop brusque avec son énorme corps. Les crevettes s'enfuient dans la vase avant de pouvoir dire un mot.</li>
            </ul>
          </li>
        </ul>

        <h4 className="font-bold text-lg mb-2">3. Sonder avec son Sonar (Test de MUSCLE/CŒUR)</h4>
        <p className="mb-2">Les cachalots utilisent le son pour voir très loin. Bouboule peut pousser un chant pour cartographier les environs.</p>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Jet de CŒUR - DD 10 :</strong>
            <ul className="list-circle pl-5 mt-1 space-y-1">
              <li><em>Réussite :</em> Le chant ("OoooOOOooooh") résonne sur des kilomètres. L'écho qui lui revient est étrange. L'écho rebondit sur la Plage à l'Est, mais il ramène avec lui le son de petits sanglots. Quelqu'un pleure très fort sur le sable.</li>
            </ul>
          </li>
        </ul>
      </ActionBox>

      <h3 className="font-display text-2xl font-bold text-slate-700 mt-8 mb-4">SCÈNE 2 : LA DÉTRESSE DE PINCE-MI (Rencontre et Roleplay)</h3>
      <p className="mb-4">Une fois que Bouboule a décidé de nager vers l'Est (guidée par le courant gris ou les pleurs), elle arrive dans les hauts-fonds près de la plage.</p>
      
      <ReadAloud title="Texte à lire à voix haute">
        "Tu nages dans des eaux de moins en moins profondes, ton ventre frotte presque le sable doux. La brume grise est plus épaisse ici, formant de petits nuages au-dessus de l'eau. Sur la plage, tu vois l'origine des pleurs. Il s'agit d'un jeune crabe violoniste, facilement reconnaissable à sa pince droite géante. Il porte un petit bob humain sur la tête."<br/><br/>
        "Devant lui se dresse ce qui devait être un chef-d'œuvre : une réplique en sable du Palais des Profondeurs. Mais la Brume Grise s'est déposée dessus. Le sable est devenu noir et collant, et l'une des tours s'est effondrée. Le crabe donne des coups de pince dans le vide en hurlant : 'C'est fichu ! C'est dégoûtant ! Tout est toujours dégoûtant de toute façon !' Il a l'air profondément affecté par la magie triste de la Brume."
      </ReadAloud>

      <InfoBox title="Profil du PNJ : Pince-Mi le Bâtisseur">
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Humeur actuelle :</strong> Démoralisé, grognon, fermé à la discussion. La Brume amplifie ses émotions négatives.</li>
          <li><strong>Objectif de la joueuse :</strong> L'apaiser pour obtenir des informations vitales sur ce qui s'est passé cette nuit.</li>
          <li><strong>Si Bouboule s'approche sans précaution :</strong> Pince-Mi lève sa grosse pince de manière agressive. "Va-t'en gros poisson ! Tu vas faire des vagues et détruire le reste de mon palais ! Laisse-moi pleurer en paix !"</li>
        </ul>
      </InfoBox>

      <ActionBox title="L'Arbre de Dialogue et les Résolutions">
        <p className="mb-4">La joueuse doit décrire comment elle interagit. Voici les réactions du PNJ selon les choix de la joueuse :</p>
        
        <h4 className="font-bold text-lg mb-2">Option A : L'Intimidation ou la Force (Jet de MUSCLE)</h4>
        <p className="mb-2">Bouboule peut essayer de faire peur au crabe pour le calmer (taper la queue sur l'eau, utiliser sa grosse voix).</p>
        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li><strong>Résultat :</strong> Pince-Mi est terrifié. Il arrête de pleurer, mais se recroqueville sous son petit bob. "Pardonnez-moi majesté ! Ne m'écrasez pas ! Le nuage gris est sorti du vieux tuyau humain sous la falaise de l'Ouest... Allez-y, mais s'il vous plaît, ne me faites pas de mal !" (Bouboule obtient l'information, mais Pince-Mi a peur d'elle et ne lui donnera aucun objet).</li>
        </ul>

        <h4 className="font-bold text-lg mb-2">Option B : La Compassion et le Dialogue (Jet de CŒUR - DD 12)</h4>
        <p className="mb-2">Bouboule essaie de lui parler avec douceur, de comprendre son art et de valider sa tristesse.</p>
        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li><strong>Échec :</strong> Le crabe est trop englouti par la Brume. "Tu ne peux pas comprendre, tu n'as pas de mains pour construire !" Bouboule devra trouver une autre méthode.</li>
          <li><strong>Réussite :</strong> Pince-Mi renifle, baisse sa pince et regarde le cachalot. "Tu... tu trouves vraiment que les remparts étaient bien faits ? Merci... La Brume m'a rendu si triste que j'ai cru que j'étais nul."</li>
        </ul>

        <h4 className="font-bold text-lg mb-2">Option C : Résolution Magique (Jet de MAGIE - DD 11)</h4>
        <p className="mb-2">Bouboule décide de nettoyer le château de sable avec une invention de son choix (ex: une Bulle d'eau pure parfumée).</p>
        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li><strong>Réussite :</strong> La bulle de Bouboule éclate doucement sur le château. Le sable noir est lavé, la Brume Grise se dissipe avec un sifflement. Les couleurs reviennent. Pince-Mi explose de joie.</li>
        </ul>

        <h4 className="font-bold text-lg mb-2">Récompense de la Scène 2 (Si Option B ou C réussie)</h4>
        <p className="mb-2">Si Bouboule réussit à apaiser Pince-Mi sans la force, le crabe s'incline devant elle.</p>
        <p className="italic mb-2">"Merci grand Cachalot ! Ma tête s'est vidée de cette méchante colère. Pour te remercier, je vais t'aider. Cette nuit, j'ai vu d'où venait la brume : une ombre immense, avec des yeux rouges, est entrée dans la 'Grotte de la Gueule de Fer' sous la falaise. Tiens, prends ça, c'est mon porte-bonheur."</p>
        <p><strong>Loot obtenu : La Pince d'Ambre</strong> (Un petit collier. Permet à Bouboule d'avoir un avantage - lancer 2 dés et garder le meilleur - lors de son prochain test de Force).</p>
      </ActionBox>

      <h3 className="font-display text-2xl font-bold text-slate-700 mt-8 mb-4">SCÈNE 3 : LA FORÊT DES ALGUES RIEUSES (Obstacle de Terrain)</h3>
      <p className="mb-4"><strong>Contexte :</strong> Pour atteindre la "Grotte de la Gueule de Fer" dont a parlé Pince-Mi, Bouboule doit quitter les eaux claires du lagon et s'enfoncer vers la base des falaises abruptes. Le passage est barré par une barrière naturelle : une forêt de varech géant.</p>
      
      <ReadAloud title="Texte à lire à voix haute">
        "Tu laisses derrière toi la plage de sable blanc et le petit crabe pour nager vers l'ombre des grandes falaises de basalte noir. Ici, l'eau devient plus profonde et plus fraîche. Sous tes nageoires, le fond n'est plus tapissé de sable, mais d'une immense forêt d'algues géantes, les Algues Rieuses. Ce sont de longues lianes vertes et ambrées qui montent du fond jusqu'à la surface, ondulant comme des rubans de soie."<br/><br/>
        "D'habitude, ces algues brillent d'une douce lueur dorée, mais aujourd'hui, elles sont ternes et couvertes de cette poussière grise. Pire encore, elles semblent s'être entremêlées pour former un mur végétal presque infranchissable. Pour passer, tu vas devoir faire preuve d'astuce, car ces algues sont connues pour être extrêmement... chatouilleuses !"
      </ReadAloud>

      <ActionBox title="Mécaniques et Interactions">
        <p className="mb-4">Ce n'est pas un combat, mais un <strong>Défi d'Environnement</strong>. Laisse ta fille décrire comment un cachalot de sa taille compte traverser cette forêt dense.</p>
        
        <h4 className="font-bold text-lg mb-2">1. L'approche tout en finesse (Test de VITESSE)</h4>
        <p className="mb-2">Si elle essaie de se faufiler entre les lianes sans les toucher.</p>
        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li><strong>DD 13 :</strong>
            <ul className="list-circle pl-5 mt-1 space-y-1">
              <li><em>Réussite :</em> Bouboule glisse comme une ombre. Elle sent les algues frôler sa peau, mais elle est assez agile pour ne pas déclencher les "guilis magiques". Elle traverse en un temps record.</li>
              <li><em>Échec :</em> Elle se prend une nageoire dans une liane. Immédiatement, l'algue s'enroule autour d'elle et se met à vibrer. Ziiiing ! Bouboule est prise d'une crise de rire incontrôlable. Elle perd <strong>1 PV de fatigue</strong> et ressort de la forêt un peu étourdie.</li>
            </ul>
          </li>
        </ul>

        <h4 className="font-bold text-lg mb-2">2. L'approche magique (Test de MAGIE)</h4>
        <p className="mb-2">Si elle utilise ses bulles pour écarter les algues ou les endormir.</p>
        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li><strong>DD 11 :</strong>
            <ul className="list-circle pl-5 mt-1 space-y-1">
              <li><em>Réussite :</em> Elle souffle une mélodie de bulles bleues. Les algues, apaisées par la magie, se penchent doucement sur son passage, créant un tunnel royal.</li>
              <li><em>Échec :</em> Les bulles éclatent trop tôt. Les algues croient que c'est un jeu et commencent à lancer des morceaux de varech sur Bouboule. C'est amusant, mais frustrant !</li>
            </ul>
          </li>
        </ul>

        <h4 className="font-bold text-lg mb-2">3. L'Observation (Test de PERCEPTION / MAGIE)</h4>
        <p className="mb-2">Si elle prend le temps d'observer la forêt avant d'entrer.</p>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Réussite :</strong> Elle remarque que la Brume Grise semble éviter certaines fleurs de corail rouge qui poussent au pied des algues. Si elle en ramasse une (en utilisant son nez ou une bulle), elle pourra s'en servir comme "bouclier anti-brume" plus tard.</li>
        </ul>
      </ActionBox>

      <h3 className="font-display text-2xl font-bold text-slate-700 mt-8 mb-4">SCÈNE 4 : LA GUEULE DE FER (Investigation et Mystère)</h3>
      <p className="mb-4"><strong>Contexte :</strong> Bouboule arrive enfin au pied de la falaise. Elle se trouve devant la "Gueule de Fer".</p>
      
      <ReadAloud title="Texte à lire à voix haute">
        "La forêt d'algues s'arrête brusquement devant une muraille de roche noire. Là, à moitié immergée, se dresse la Gueule de Fer. Ce n'est pas une grotte naturelle. C'est un immense tuyau de métal rouillé, un vestige des anciens Bipèdes Sans Poils. Le tuyau est si large que tu pourrais y nager à l'aise avec trois de tes amis."<br/><br/>
        "Le métal est rongé par le sel et le temps, couvert de coquillages pointus. De l'intérieur, un courant d'eau sombre et poisseuse s'échappe, emportant avec lui des nuages de Brume Grise. Le bruit à l'intérieur est effrayant : un 'Glong... Glong... Glong...' régulier, comme le cœur d'un géant de fer qui bat encore. À l'entrée, posé sur un rocher, tu vois un petit poisson-globe qui a l'air de monter la garde, mais il tremble comme une feuille."
      </ReadAloud>

      <ActionBox title="Interaction avec le PNJ : Gaston le Poisson-Globe">
        <p className="mb-4">Gaston est le "Gardien" malgré lui. Il est terrifié par ce qui se cache à l'intérieur du tuyau.</p>
        <p className="mb-2"><strong>Le Roleplay :</strong></p>
        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li>Gaston gonfle dès qu'il voit Bouboule : "Halte ! N-n-n'approchez pas ! La Gueule va vous avaler ! Elle a mangé le silence, et maintenant elle recrache de la tristesse !"</li>
          <li><strong>Défi de CŒUR (DD 10) :</strong> Bouboule doit rassurer Gaston. S'il se dégonfle et reprend sa forme normale, il devient une mine d'informations.</li>
        </ul>

        <p className="mb-2"><strong>Ce que Gaston sait (à donner si le dialogue est bon) :</strong></p>
        <ol className="list-decimal pl-5 space-y-2">
          <li>"Une chose noire, avec beaucoup de pattes, est entrée hier soir en portant un sac qui brillait d'une lumière rouge."</li>
          <li>"Le tuyau est protégé par une grille magique. Il faut trouver les trois 'Manivelles de Corail' cachées autour de l'entrée pour l'ouvrir."</li>
          <li>"Si tu entends le 'Glong' devenir plus fort, cache-toi derrière un rocher, car un jet de goudron va sortir !"</li>
        </ol>
      </ActionBox>

      <h3 className="font-display text-2xl font-bold text-slate-700 mt-8 mb-4">SCÈNE 5 : LE MÉCANISME DE LA GRILLE (Énigme Environnementale)</h3>
      <p className="mb-4"><strong>Contexte :</strong> L'entrée du tuyau est bloquée par une grille de métal solide. Elle ne peut pas être brisée par la force (elle est trop épaisse). Elle doit être déverrouillée.</p>
      
      <ActionBox title="Description de la Scène">
        <p className="mb-4">Il y a trois mécanismes autour de la Gueule de Fer. Le MJ doit décrire chaque mécanisme comme un petit puzzle.</p>
        <ul className="list-disc pl-5 space-y-4 mb-6">
          <li><strong>Mécanisme n°1 (Le Levier Encrassé) :</strong> Une manivelle est bloquée par des berniques (coquillages collants).
            <ul className="list-circle pl-5 mt-1">
              <li><em>Solution :</em> Bouboule doit utiliser son <strong>MUSCLE</strong> pour gratter ou sa <strong>MAGIE</strong> (bulle acide) pour dissoudre la colle des coquillages.</li>
            </ul>
          </li>
          <li><strong>Mécanisme n°2 (La Roue Perdue) :</strong> La manivelle manque ! Elle est tombée dans une faille profonde juste en dessous.
            <ul className="list-circle pl-5 mt-1">
              <li><em>Solution :</em> Bouboule doit descendre dans la faille. Attention, une murène grincheuse y habite. Elle doit soit négocier (<strong>CŒUR</strong>), soit être rapide (<strong>VITESSE</strong>) pour récupérer la roue.</li>
            </ul>
          </li>
          <li><strong>Mécanisme n°3 (Le Chant du Code) :</strong> Cette manivelle est musicale. Elle possède trois cloches de cristal.
            <ul className="list-circle pl-5 mt-1">
              <li><em>Solution :</em> Gaston le poisson-globe se souvient de la mélodie mais il a oublié la fin. Bouboule doit chanter une note (utiliser son sonar) pour compléter la mélodie.</li>
            </ul>
          </li>
        </ul>
        <p className="font-bold">Conséquence de la réussite :</p>
        <p className="italic">"Une fois les trois manivelles actionnées, un bruit de rouage ancestral résonne dans toute la falaise. La grille de fer remonte lentement dans un sifflement de bulles. Le chemin vers les entrailles de la Gueule de Fer est ouvert. La Brume Grise s'échappe en masse, créant un tourbillon sombre."</p>
      </ActionBox>

      <h3 className="font-display text-2xl font-bold text-slate-700 mt-8 mb-4">SCÈNE 6 : LE TUNNEL DES ÉCHOS (Ambiance et Tension)</h3>
      <ReadAloud title="Texte à lire à voix haute">
        "Tu pénètres à l'intérieur du tuyau géant. Ici, la lumière du soleil ne t'accompagne plus. C'est l'obscurité presque totale, seulement interrompue par des algues fluorescentes qui tapissent les parois de métal, jetant des reflets violets et bleus sur ta peau. Les parois résonnent de tes propres mouvements : chaque battement de ta queue semble amplifié par mille."<br/><br/>
        "Soudain, tu entends un rire. Un rire métallique, froid, qui ne vient pas d'un animal. Ça vient de plus profond, là où le goudron est le plus épais. Quelque chose t'observe depuis les ombres des tuyaux secondaires. Sens-tu ce frisson sur tes nageoires ?"
      </ReadAloud>

      <ActionBox title="Mécanique : Le Test de Courage">
        <p className="mb-2">Demande à ta fille de faire un jet de <strong>CŒUR (DD 12)</strong> pour voir si Bouboule reste calme face à cette ambiance oppressante.</p>
        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li><strong>Réussite :</strong> Elle remarque des inscriptions sur les murs, des chiffres humains (1, 2, 3...) qui indiquent le chemin vers la salle des machines.</li>
          <li><strong>Échec :</strong> Elle panique un peu et fonce dans un mur, faisant un bruit énorme qui va alerter les premiers ennemis du chapitre...</li>
        </ul>
        <InfoBox title="MJ, est-ce que ce rythme te convient ?">
          <p className="mb-2">On a maintenant :</p>
          <ol className="list-decimal pl-5 space-y-1">
            <li>Une phase de voyage avec obstacle (Algues).</li>
            <li>Une rencontre sociale avec un gardien (Gaston).</li>
            <li>Une phase d'énigme complexe en trois parties (Les Manivelles).</li>
            <li>Une phase d'ambiance pure pour monter la tension avant le premier combat.</li>
          </ol>
        </InfoBox>
      </ActionBox>

      <h3 className="font-display text-2xl font-bold text-slate-700 mt-8 mb-4">SCÈNE 7 : L'EMBUSCADE DES PAGURES-GOUDRON (Combat Tactique)</h3>
      <p className="mb-4"><strong>Contexte :</strong> Bouboule s'enfonce dans le "Tunnel des Échos". L'espace est clos, ce qui limite ses mouvements de cachalot. C'est le moment d'introduire le premier vrai combat de la campagne, en utilisant l'environnement.</p>
      
      <ReadAloud title="Texte à lire à voix haute">
        "Le tunnel métallique tourne brusquement. Tu arrives dans une intersection où plusieurs vieux tuyaux humains se croisent. L'eau ici est poisseuse, presque noire. Soudain, le bruit de ferraille que tu entendais s'arrête. Le silence est total."<br/><br/>
        "Puis, depuis l'obscurité des tuyaux au-dessus de toi, deux paires d'yeux rouges s'allument. Clac. Clac. Ce sont des Pagures-Goudron ! Ce sont d'énormes bernard-l'ermite qui ont utilisé de vieux barils humains toxiques comme coquilles. Ils sont recouverts de Mue Noire, et leurs pinces sont affûtées comme des ciseaux de fer. Ils se laissent tomber de leur cachette et bloquent ton chemin. Ils crachent un jet d'encre noire et se préparent à attaquer !"
      </ReadAloud>

      <CombatBox title="Mécaniques de Combat (Règles Spéciales d'Espace Clos)">
        <p className="mb-4">C'est le moment de faire rouler le dé d'Initiative (1d20 + VITESSE) pour savoir qui agit en premier.</p>
        
        <h4 className="font-bold text-lg mb-2">Les Ennemis : 2 Pagures-Goudron</h4>
        <ul className="list-disc pl-5 space-y-1 mb-6">
          <li><strong>Points de Vie (PV) :</strong> 12 PV chacun.</li>
          <li><strong>Classe d'Armure (CA) :</strong> 12 (Leurs barils en fer les protègent bien).</li>
          <li><strong>Attaque (Coup de Pince) :</strong> +3 pour toucher. S'ils touchent Bouboule, ils infligent 1d4 + 1 dégâts.</li>
        </ul>

        <h4 className="font-bold text-lg mb-2">Tactique et Environnement (Le rôle du MJ) :</h4>
        <p className="mb-2">Explique à ta fille que le tunnel est étroit. Cela offre de nouvelles options tactiques :</p>
        <ul className="list-disc pl-5 space-y-4 mb-6">
          <li><strong>Option A - L'Attaque de Zone (Le Sonar Brutal) :</strong> Bouboule peut utiliser son <strong>MUSCLE</strong> (Coup de bélier) pour frapper non pas les crabes, mais <em>les parois du tunnel</em>.
            <ul className="list-circle pl-5 mt-1">
              <li><em>Conséquence :</em> Si elle réussit (DD 11), les vibrations font s'effondrer un tas de vieille rouille et de corail du plafond directement sur les deux crabes ! Ils perdent 1d6 PV chacun et passent leur prochain tour, étourdis.</li>
            </ul>
          </li>
          <li><strong>Option B - Le Tir de Précision (MAGIE) :</strong> Elle peut cracher des Bulles Acides précisément dans l'ouverture de leurs barils.
            <ul className="list-circle pl-5 mt-1">
              <li><em>Conséquence :</em> Les bulles nettoient le goudron à l'intérieur, leur faisant très mal (dégâts normaux +2) sans abîmer le tunnel.</li>
            </ul>
          </li>
          <li><strong>Option C - Le Corps à Corps risqué :</strong> Si elle fonce dans le tas (MUSCLE sur un crabe), elle fait de gros dégâts, mais risque de se frotter contre le métal tranchant du tunnel (elle subit 1 PV de dégât par égratignure).</li>
        </ul>
        <p className="italic">Raconte chaque coup ! Si un crabe la rate, décris sa pince qui claque dans le vide ou qui s'enfonce dans la paroi rouillée. Lorsqu'ils tombent à 0 PV, l'armure noire éclate, les barils se brisent, et les petits crabes normaux s'enfuient en pleurant.</p>
      </CombatBox>

      <h3 className="font-display text-2xl font-bold text-slate-700 mt-8 mb-4">SCÈNE 8 : LE CARREFOUR DES DEUX COURANTS (Énigme de Navigation)</h3>
      <p className="mb-4"><strong>Contexte :</strong> Après le combat, l'adrénaline retombe. Bouboule arrive à un croisement. C'est un test d'observation pour récompenser la prudence.</p>
      
      <ReadAloud title="Texte à lire à voix haute">
        "Le combat est terminé, tu peux reprendre ton souffle. Tu avances et le tuyau se sépare en deux chemins identiques. Il n'y a plus de lumière du tout."<br/><br/>
        "- Le chemin de gauche dégage une douce odeur d'eau fraîche et tu entends le bruit d'une cascade cristalline."<br/><br/>
        "- Le chemin de droite sent horriblement fort le goudron, et l'eau y est complètement noire. Il fait très peur."
      </ReadAloud>

      <ActionBox title="Le Piège de la Brume">
        <p className="mb-4">La Mue Noire est trompeuse. Le chemin de gauche est une illusion olfactive créée par la brume pour attirer les proies.</p>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Test de MAGIE ou PERCEPTION (DD 12) :</strong>
            <ul className="list-circle pl-5 mt-1 space-y-2">
              <li><em>Réussite :</em> Bouboule remarque que l'odeur d'eau fraîche est <em>trop</em> parfaite. C'est un mensonge magique. De plus, elle voit un léger courant d'eau aspirer de petits cailloux vers la gauche : c'est un cul-de-sac avec une hélice broyeuse géante ! La bonne voie est celle de droite, là où se trouve vraiment la source du poison.</li>
              <li><em>Échec :</em> Elle est tentée par l'eau fraîche et s'engage à gauche. L'hélice se met en marche ! Elle doit faire un jet de <strong>VITESSE (DD 10)</strong> pour faire demi-tour en catastrophe. Elle réussit de justesse mais s'écorche la queue (Perd 2 PV) avant de prendre le bon chemin à droite.</li>
            </ul>
          </li>
        </ul>
      </ActionBox>

      <h3 className="font-display text-2xl font-bold text-slate-700 mt-8 mb-4">SCÈNE 9 : LA SALLE DES FILTRES ET LA FÉE DES ABYSSES (Rencontre et Loot)</h3>
      <p className="mb-4"><strong>Contexte :</strong> Une scène pour ramener de la lumière, de l'espoir, et un objet/compagnon très utile avant le boss final.</p>
      
      <ReadAloud title="Texte à lire à voix haute">
        "Tu t'engages dans le conduit de droite. Bientôt, tu débouches dans une grande salle sphérique : la Salle des Filtres. De grandes grilles retiennent des tonnes de déchets humains anciens. Au milieu de ces déchets, une faible lueur bleu clair clignote désespérément."<br/><br/>
        "En t'approchant, tu découvres une magnifique petite Méduse Bioluminescente. Elle est coincée dans une vieille cage d'oiseau en métal humain. La Brume Grise essaie de l'étouffer, mais sa lumière résiste courageusement."
      </ReadAloud>

      <ActionBox title="L'Intervention et la Récompense">
        <p className="mb-4">Bouboule doit ouvrir la cage. Un simple test de <strong>MUSCLE (DD 10)</strong> suffit pour tordre les barreaux rouillés sans blesser la méduse.</p>
        
        <h4 className="font-bold text-lg mb-2">Le Roleplay avec Lumina :</h4>
        <p className="mb-4">La petite méduse flotte hors de la cage et tourbillonne autour de Bouboule comme une petite fée.</p>
        <p className="italic mb-6">"Oh, merci grand géant des mers ! Je m'appelle Lumina. J'ai été aspirée ici par la machine méchante au bout du couloir. Ma lumière fait fondre la tristesse ! Laisse-moi t'accompagner, je serai ta petite étoile dans la nuit !"</p>
        
        <h4 className="font-bold text-lg mb-2">Loot obtenu : Compagnon Lumina.</h4>
        <p className="mb-2">Lumina n'est pas qu'un objet, c'est un familier ! Elle s'installe sur la tête de Bouboule (ou dans une de ses bulles).</p>
        <ul className="list-disc pl-5 space-y-1">
          <li><strong>Effet Passif :</strong> Elle illumine les zones sombres.</li>
          <li><strong>Effet Actif (1 fois par chapitre) - "Flash de Joie" :</strong> Lumina peut émettre un flash de lumière très puissant qui aveugle tous les ennemis corrompus pendant un tour complet (ils ne peuvent pas attaquer). Une aide précieuse pour le combat qui approche !</li>
        </ul>
      </ActionBox>

      <h3 className="font-display text-2xl font-bold text-slate-700 mt-8 mb-4">SCÈNE 10 : L'ANTICHAMBRE DU CŒUR NOIR (Tension et Préparation)</h3>
      <p className="mb-4"><strong>Contexte :</strong> La dernière pièce avant le Boss. C'est le moment pour Bouboule de se soigner et de se préparer psychologiquement.</p>
      
      <ReadAloud title="Texte à lire à voix haute">
        "Guidée par la douce lumière de Lumina, tu arrives devant une immense porte d'acier ronde, semblable à celle d'un coffre-fort. C'est la fin du tunnel. Derrière cette porte, la machinerie rugit. Boum... Boum... Boum... L'eau vibre tellement que ça te chatouille les moustaches."<br/><br/>
        "Devant la porte, il y a une mare d'eau particulièrement pure qui a miraculeusement échappé à la pollution. De petites anémones roses y poussent."
      </ReadAloud>

      <ActionBox title="Le Repos du Cachalot">
        <p className="mb-4">Explique à ta fille que dans D&D, il est crucial de se préparer avant d'ouvrir la porte du Boss.</p>
        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li>Elle peut manger le <strong>Biscuit Salé Magique</strong> de Pince-Mi si elle l'avait gardé, ou se reposer dans la mare pure (Lui rend 1d8 PV).</li>
          <li>Demande-lui comment Bouboule s'échauffe : Est-ce qu'elle fait craquer ses nageoires ? Est-ce qu'elle fait gonfler une énorme bulle magique pour être prête à tirer dès l'ouverture ?</li>
        </ul>
        <p className="italic">"La grande roue de la porte tourne toute seule sous la pression. Un jet de goudron jaillit par les interstices. Prépare-toi, Bouboule... La porte s'ouvre avec un fracas assourdissant. Le véritable responsable de la Mue Noire t'attend de l'autre côté !"</p>
      </ActionBox>
    </section>
  );
}
