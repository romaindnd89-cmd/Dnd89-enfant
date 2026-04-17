import React from 'react';
import { ReadAloud, CombatBox, ActionBox, InfoBox } from '../../components/StoryBlocks';

export default function Part1() {
  return (
    <div className="space-y-12">
      {/* CHAPITRE 1 */}
      <section id="chap1">
        <h2 className="font-display text-3xl font-bold text-slate-800 mb-6 border-b-2 border-slate-200 pb-2 mt-12">
          CHAPITRE 1 : L'IMPACT DU CIEL
        </h2>
        <div className="mb-6 text-slate-700">
          <p><strong>Niveau recommandé :</strong> 1</p>
          <p><strong>Lieu :</strong> Le Cœur de la Forêt des Murmures</p>
          <p><strong>Ambiance :</strong> Mystère, électricité, urgence silencieuse.</p>
        </div>

        <h3 className="font-display text-2xl font-bold text-slate-700 mt-8 mb-4">
          SCÈNE 1 : LE CRATÈRE DE CRISTAL ET L'ENQUÊTE SENSORIELLE
        </h3>
        <ReadAloud title="Texte à lire à voix haute (Encadré Narratif) :">
          "Vous écartez les dernières fougères calcinées et vous vous arrêtez net au bord d'un gouffre immense. Là où se trouvait hier un bosquet de chênes, s'étend désormais une cicatrice de cristal bleu lisse comme un lac gelé. Au centre de ce miroir, une petite forme pulse avec difficulté : c’est Éon, l'étoile. Elle ressemble à un oiseau de pure lumière, mais ses plumes d'étincelles sont ternes.<br/><br/>
          L'air vibre d'une électricité qui fait picoter vos doigts et l'odeur de l'ozone, celle qui précède les grands orages, est entêtante. Tout est trop calme. Les oiseaux se sont tus. Aura, ta lanterne brille d'une lueur d'alerte. Kael, ton ombre au sol semble vouloir s'enfuir vers le centre du cratère. Que faites-vous ?"
        </ReadAloud>

        <ActionBox title="Options d'Exploration et Mécaniques (Bac à sable)">
          <p className="mb-4">Laisse les enfants décider de leur approche. Voici les éléments qu'ils peuvent examiner :</p>
          
          <h4 className="font-bold text-slate-800 mb-2">1. Analyser le sol de cristal (Test d'ESPRIT - Aura)</h4>
          <p className="mb-2">Si Aura veut comprendre pourquoi le sol brille ainsi :</p>
          <ul className="list-disc pl-5 space-y-2 mb-4">
            <li><strong>Jet d'ESPRIT — DD 10 :</strong>
              <ul className="list-circle pl-5 mt-1 text-sm space-y-1">
                <li><strong>Échec (1 à 9) :</strong> La lumière du cristal éblouit Aura. Elle voit des taches sombres partout et ses yeux pleurent. Elle ressent une grande fatigue (1 dégât de fatigue).</li>
                <li><strong>Réussite (10 à 14) :</strong> Aura comprend que le cristal est du "Verre Stellaire". Il est brûlant pour ceux qui ont peur, mais froid pour ceux qui sont courageux. Elle repère un chemin de dalles stables.</li>
                <li><strong>Réussite Critique (15+) :</strong> En plus, Aura remarque que le cristal chante. Elle obtient une <strong>"Note de Cristal"</strong> (Objet d'inventaire) qui pourra calmer un monstre plus tard.</li>
              </ul>
            </li>
          </ul>

          <h4 className="font-bold text-slate-800 mb-2">2. Sonder les ombres (Test d'AGILITÉ/PERCEPTION - Kael)</h4>
          <p className="mb-2">Si Kael veut utiliser son affinité avec les ténèbres pour inspecter le cratère :</p>
          <ul className="list-disc pl-5 space-y-2 mb-4">
            <li><strong>Jet d'AGILITÉ — DD 12 :</strong>
              <ul className="list-circle pl-5 mt-1 text-sm space-y-1">
                <li><strong>Réussite :</strong> Kael remarque que les ombres des arbres pétrifiés ne pointent pas vers le soleil, mais vers Éon. Elles essaient d'aspirer sa lumière ! Il découvre deux <strong>Ombres-Miroirs</strong> cachées sous les rebords du cratère.</li>
                <li><strong>Échec :</strong> Kael se concentre trop sur le sol et ne voit pas les mouvements suspects. Il glisse sur une plaque de verre lisse et s'écorche la main (-1 PV).</li>
              </ul>
            </li>
          </ul>

          <h4 className="font-bold text-slate-800 mb-2">3. Appeler l'Étoile (Test de CŒUR - Équipe)</h4>
          <p className="mb-2">S'ils essaient de rassurer Éon à distance :</p>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Jet de CŒUR — DD 10 :</strong>
              <ul className="list-circle pl-5 mt-1 text-sm space-y-1">
                <li><strong>Réussite :</strong> Éon répond par un petit tintement joyeux. La <strong>Jauge d'Éclat</strong> remonte de <strong>+2</strong> (Passant de 15 à 17/20).</li>
                <li><strong>Échec :</strong> Éon a peur de leurs voix fortes et se recroqueville, sa lumière faiblit (-1 Éclat).</li>
              </ul>
            </li>
          </ul>
        </ActionBox>

        <h3 className="font-display text-2xl font-bold text-slate-700 mt-8 mb-4">
          SCÈNE 2 : LA DÉTRESSE DE LUMIGNON (Rencontre et Roleplay)
        </h3>
        <p className="mb-4 text-slate-700">Une fois que les enfants ont atteint le centre (en marchant sur le verre ou en utilisant un pouvoir), un habitant surgit.</p>
        <ReadAloud title="Texte à lire à voix haute :">
          "Alors que vous tendez la main vers l'étoile, un cri aigu retentit : 'STOP ! Ne touchez pas à la fréquence céleste avec vos doigts pleins de confiture !'. Un petit être orange vif, mélange de hibou et de luciole, sort d'une fissure du verre. Il porte un sac à dos en feuilles et des lunettes d'aviateur trop grandes. Il s'agit de Lumignon, le Gardien des Chutes. Il agite ses petites ailes frénétiquement : 'C'est une catastrophe ! Elle perd sa gravité ! Si vous ne l'aidez pas à remonter, le Seigneur du Vide va transformer cette forêt en un désert de poussière !'"
        </ReadAloud>

        <InfoBox title="Profil du PNJ : Lumignon le Gardien">
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>Humeur actuelle :</strong> Paniqué, pointilleux, protecteur.</li>
            <li><strong>Objectif des joueurs :</strong> Le rassurer pour qu'il devienne leur guide.</li>
          </ul>
        </InfoBox>

        <ActionBox title="L'Arbre de Dialogue et les Résolutions :">
          <ul className="list-disc pl-5 space-y-4">
            <li><strong>Option A : L'Intimidation (Jet de MUSCLE - Kael)</strong>
              <ul className="list-circle pl-5 mt-1 text-sm">
                <li><strong>Résultat :</strong> Lumignon se gonfle comme un ballon, terrifié. "D'accord, d'accord ! Ne me plumez pas ! Je vais vous aider... mais je ne vous donnerai pas ma carte secrète !" (Il guide les héros mais ne donne pas d'objet).</li>
              </ul>
            </li>
            <li><strong>Option B : La Compassion (Jet de CŒUR - DD 12 - Aura)</strong>
              <ul className="list-circle pl-5 mt-1 text-sm">
                <li><strong>Réussite :</strong> Lumignon ajuste ses lunettes et soupire. "Vous avez l'air plus malins que les autres géants. Tenez, si vous voulez sauver Éon, il lui faut un réceptacle."</li>
                <li><strong>Loot obtenu : La Sacoche de Soie d'Étoile</strong> (Permet de transporter Éon sans perdre d'Éclat pendant le voyage).</li>
              </ul>
            </li>
          </ul>
        </ActionBox>

        <h3 className="font-display text-2xl font-bold text-slate-700 mt-8 mb-4">
          SCÈNE 3 : L'EMBUSCADE DES OMBRES-MIROIRS (Combat Tactique)
        </h3>
        <ReadAloud title="Texte à lire à voix haute :">
          "Le sol de cristal commence à vibrer. Vos reflets, au lieu de copier vos gestes, se détachent du sol ! Ils deviennent des silhouettes de verre noir, sans visage, avec un éclat de miroir à la place du cœur. 'Les Ombres-Miroirs !' crie Lumignon en se cachant dans ta capuche, Kael. 'Elles veulent voler la chaleur d'Éon pour devenir réelles !'"
        </ReadAloud>

        <CombatBox title="Mécaniques de Combat (Règles Spéciales d'Espace Glissant) :">
          <ul className="list-disc pl-5 space-y-2 mb-4">
            <li><strong>Initiative :</strong> (1d20 + AGILITÉ). Les Ombres ont 12.</li>
            <li><strong>Les Ennemis :</strong> 2 Ombres-Miroirs (12 PV chacune, CA 12).</li>
          </ul>
          
          <p className="font-bold mb-2">Options Tactiques pour les enfants :</p>
          <ul className="list-disc pl-5 space-y-3">
            <li><strong>Option A - L'Attaque de Lumière (Aura) :</strong> Aura utilise sa Lanterne pour éblouir les reflets.
              <ul className="list-circle pl-5 mt-1 text-sm">
                <li><strong>Test de MAGIE — DD 11 :</strong> Si réussi, les ombres perdent 1d6 PV et sont aveuglées (elles ratent leur prochain tour).</li>
              </ul>
            </li>
            <li><strong>Option B - Le Brise-Glace (Kael) :</strong> Kael utilise sa dague de bois pour frapper non pas l'ombre, mais le sol de cristal entre elles.
              <ul className="list-circle pl-5 mt-1 text-sm">
                <li><strong>Test d'AGILITÉ — DD 13 :</strong> Si réussi, le sol se fissure et les ombres tombent dans une crevasse. Elles subissent 1d8 dégâts.</li>
              </ul>
            </li>
            <li><strong>Option C - Le Bouclier de Cœur :</strong> Aura protège Éon avec son corps. Elle subit les dégâts à la place de l'Étoile.</li>
          </ul>
        </CombatBox>

        <h3 className="font-display text-2xl font-bold text-slate-700 mt-8 mb-4">
          SCÈNE 4 : LE SENTIER DES ÉCHOS (Obstacle de Terrain)
        </h3>
        <p className="mb-4 text-slate-700"><strong>Contexte :</strong> Pour quitter le cratère avec Éon, les héros doivent remonter les parois de verre glissant. Ce n'est pas un combat, mais un défi d'environnement qui utilise la coopération.</p>
        <ReadAloud title="Texte à lire à voix haute :">
          "Vous laissez derrière vous les éclats brisés des Ombres-Miroirs. Devant vous, la paroi du cratère s'élève, lisse comme un miroir géant et haute de dix mètres. Les racines des arbres, transformées en fils d'argent tranchants, pendent le long de la pente. Pour sortir de ce trou de verre, vous allez devoir vous entraider. Éon, bien qu'elle soit dans votre sacoche, commence à peser lourd : sa lumière réagit à la roche sombre et crée des ondes de choc qui font vibrer le sol."
        </ReadAloud>

        <ActionBox title="Mécaniques et Interactions (Bac à sable)">
          <p className="mb-4">Laisse les enfants décrire comment ils comptent escalader cette muraille glissante.</p>
          
          <h4 className="font-bold text-slate-800 mb-2">1. L'approche en force (Test de MUSCLE - Kael)</h4>
          <p className="mb-2">Si Kael essaie de planter sa dague dans le verre pour créer des encoches :</p>
          <ul className="list-disc pl-5 space-y-2 mb-4">
            <li><strong>Jet de MUSCLE — DD 13 :</strong>
              <ul className="list-circle pl-5 mt-1 text-sm space-y-1">
                <li><strong>Réussite (13+) :</strong> Kael taille des marches parfaites dans le cristal. Aura et lui grimpent facilement.</li>
                <li><strong>Échec (1 à 12) :</strong> La dague glisse sur la surface trop dure. Kael perd l'équilibre et retombe lourdement. Il perd <strong>2 PV</strong> de fatigue et ressort du trou un peu étourdi.</li>
              </ul>
            </li>
          </ul>

          <h4 className="font-bold text-slate-800 mb-2">2. L'approche magique (Test de MAGIE - Aura)</h4>
          <p className="mb-2">Si elle utilise sa Lanterne pour faire fondre légèrement le bord du verre et créer des prises :</p>
          <ul className="list-disc pl-5 space-y-2 mb-4">
            <li><strong>Jet de MAGIE — DD 11 :</strong>
              <ul className="list-circle pl-5 mt-1 text-sm space-y-1">
                <li><strong>Réussite :</strong> La chaleur de la lanterne ramollit le cristal qui devient malléable comme de la pâte à modeler. Un escalier de lumière se forme sous leurs pieds.</li>
                <li><strong>Échec :</strong> Le verre fond trop vite et devient liquide et collant. Les pieds des héros s'embourbent, et ils mettent deux fois plus de temps à sortir.</li>
              </ul>
            </li>
          </ul>

          <h4 className="font-bold text-slate-800 mb-2">3. L'Observation (Test de PERCEPTION - Équipe)</h4>
          <p className="mb-2">Si les héros prennent le temps d'observer la paroi avant de grimper :</p>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Réussite (DD 12) :</strong> Ils remarquent que la Brume Grise (le fléau du Seigneur du Vide) commence à ramper au sommet du cratère. S'ils sortent par le côté Ouest, ils pourront utiliser une fleur de corail rouge comme "bouclier anti-brume" naturel.</li>
          </ul>
        </ActionBox>

        <h3 className="font-display text-2xl font-bold text-slate-700 mt-8 mb-4">
          SCÈNE 5 : LE CARREFOUR DU SACRIFICE (Dilemme Moral)
        </h3>
        <p className="mb-4 text-slate-700"><strong>Contexte :</strong> Une fois au sommet, les héros font face à leur premier vrai choix de "Héros".</p>
        <ReadAloud title="Texte à lire à voix haute :">
          "Vous êtes enfin hors du trou. Mais la forêt a changé. À gauche, le chemin mène vers le Village des Lucioles. Vous entendez des cris : les habitants sont attaqués par la Brume Grise. À droite, le sentier s'enfonce vers la Grotte de la Gueule de Fer, le seul endroit où Éon pourra récupérer assez de force pour ne pas s'éteindre cette nuit."
        </ReadAloud>

        <InfoBox title="Interaction avec Lumignon">
          <p className="mb-2">Lumignon tire sur la manche de Kael, ses yeux de luciole brillant d'inquiétude :</p>
          <p className="italic">"Écoutez-moi ! Si on va au village pour sauver les lucioles, on perdra trop de temps et Éon risque de devenir une Étoile Noire (0 Éclat). Mais si on les ignore... le village sera perdu pour toujours. Que dicte votre cœur ?"</p>
        </InfoBox>

        <ActionBox title="Les Conséquences du Choix">
          <ul className="list-disc pl-5 space-y-4">
            <li><strong>Option A : Sauver le Village (La Compassion)</strong>
              <ul className="list-circle pl-5 mt-1 text-sm space-y-1">
                <li><strong>Risque :</strong> La Jauge d'Éclat d'Éon baisse immédiatement de <strong>-5 points</strong> à cause de l'effort.</li>
                <li><strong>Récompense :</strong> Les Lucioles, pour vous remercier, offrent à Aura une <strong>"Perle d'Aurore"</strong>. Cet objet permet de soigner un allié ou de regagner 15 PV d'un coup plus tard.</li>
              </ul>
            </li>
            <li><strong>Option B : Filer vers la Grotte (Le Devoir)</strong>
              <ul className="list-circle pl-5 mt-1 text-sm space-y-1">
                <li><strong>Risque :</strong> Le village est recouvert par la Brume. Les héros ressentent une profonde tristesse (Malus de <strong>-2</strong> à tous les tests de CŒUR pour le prochain chapitre).</li>
                <li><strong>Récompense :</strong> Éon reste forte (Jauge d'Éclat intacte) et vous obtenez un <strong>Avantage</strong> (lancer 2 dés) pour le prochain combat contre le Boss du chapitre.</li>
              </ul>
            </li>
          </ul>
        </ActionBox>

        <div className="mt-8 p-6 bg-emerald-50 border-2 border-emerald-200 rounded-2xl">
          <h3 className="font-display text-xl font-bold text-emerald-800 mb-2">BILAN DU CHAPITRE : L'ÉVEIL DU LIEN</h3>
          <p className="text-emerald-700 mb-2">À la fin de ce chapitre, les enfants ont appris les bases du combat, de l'escalade et du choix.</p>
          <p className="text-emerald-800 font-bold">Loot de fin de chapitre : * L'Ambre de Vie : Un petit pendentif donné par Lumignon. Si l'un des héros tombe à 0 PV, il se brise et rend 10 PV instantanément.</p>
        </div>
      </section>

      {/* CHAPITRE 2 */}
      <section id="chap2">
        <h2 className="font-display text-3xl font-bold text-slate-800 mb-6 border-b-2 border-slate-200 pb-2 mt-12">
          CHAPITRE 2 : LES SENTIERS DE L'OUBLI
        </h2>
        
        <InfoBox title="LE CONSEIL DU VIEUX SAGE (Apprentissage MJ)">
          <p className="italic">Papa MJ, si ta fille est triste d'avoir laissé le village, utilise Lumignon pour la rassurer : "Vous avez sauvé l'Étoile, et sans elle, personne n'aurait pu être sauvé à l'avenir." Cela enseigne la notion de priorité dans une campagne D&D.</p>
        </InfoBox>

        <div className="mb-6 mt-6 text-slate-700">
          <p><strong>Niveau recommandé :</strong> 1+</p>
          <p><strong>Lieu :</strong> Le Hameau des Lucioles (Lisière de la Forêt des Murmures)</p>
          <p><strong>Ambiance :</strong> Mystère, transition de la joie à l'inquiétude, brume étouffante.</p>
        </div>

        <h3 className="font-display text-2xl font-bold text-slate-700 mt-8 mb-4">
          SCÈNE 1 : L'ARRIVÉE ET L'ENQUÊTE SENSORIELLE
        </h3>
        <ReadAloud title="Texte à lire à voix haute (Encadré Narratif) :">
          "Vous quittez le cratère de cristal pour rejoindre le Village des Lucioles. D'habitude, cet endroit est une fête de lumières dansantes et de rires. Mais ce matin, quelque chose vous glace le sang. Un silence lourd remplace les chants. En ouvrant les yeux, vous remarquez que la lumière du soleil a du mal à percer l'air. Une étrange substance, semblable à une poussière grise suspendue, flotte autour de vous. Ça pique un peu les yeux et cela dégage une odeur désagréable d'algue pourrie. Les fleurs lumineuses sont devenues ternes et repliées sur elles-mêmes."
        </ReadAloud>

        <ActionBox title="Options d'Exploration et Mécaniques (Bac à sable)">
          <p className="mb-4">Laisse les héros décider de leur approche pour comprendre cette pollution.</p>
          
          <h4 className="font-bold text-slate-800 mb-2">1. Analyser la Brume Grise (Test de MAGIE - Aura)</h4>
          <ul className="list-disc pl-5 space-y-2 mb-4">
            <li><strong>Jet de MAGIE — DD 10 :</strong>
              <ul className="list-circle pl-5 mt-1 text-sm space-y-1">
                <li><strong>Échec (1 à 9) :</strong> La magie d'Aura réagit mal à la poussière. Elle éternue un énorme nuage de bulles, ce qui trouble encore plus l'air. Elle ressent juste une grande tristesse sans en comprendre l'origine.</li>
                <li><strong>Réussite (10 à 14) :</strong> Aura sent que cette substance n'est pas naturelle. C'est une magie ancienne, chargée de colère et de tristesse. Elle comprend que la source vient d'un courant venant de l'Ouest.</li>
                <li><strong>Réussite Critique (15+) :</strong> Aura parvient à isoler une particule grise dans une de ses bulles magiques. Elle obtient un <strong>"Échantillon de Brume"</strong> (Objet d'inventaire) qui pourrait être utile pour prouver le danger.</li>
              </ul>
            </li>
          </ul>

          <h4 className="font-bold text-slate-800 mb-2">2. Sonder le village (Test de PERCEPTION - Kael)</h4>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Jet de CŒUR — DD 12 :</strong>
              <ul className="list-circle pl-5 mt-1 text-sm space-y-1">
                <li><strong>Réussite :</strong> En soulevant délicatement une feuille de chou géante, Kael découvre un groupe de petites lucioles cachées, tremblantes de peur. La doyenne murmure : "Le monstre à carapace... il a craché le nuage noir cette nuit... ne nous mange pas !".</li>
                <li><strong>Échec :</strong> Kael est trop brusque avec ses grands pieds. Les lucioles s'enfuient dans la vase avant de pouvoir dire un mot.</li>
              </ul>
            </li>
          </ul>
        </ActionBox>

        <h3 className="font-display text-2xl font-bold text-slate-700 mt-8 mb-4">
          SCÈNE 2 : LA DÉTRESSE DE PINCE-MI (Roleplay)
        </h3>
        <ReadAloud title="Texte à lire à voix haute :">
          "Sur la plage de sable noirci, vous voyez l'origine des pleurs. Il s'agit d'un jeune crabe violoniste, Pince-Mi, reconnaissable à sa pince droite géante et son petit chapeau humain sur la tête. Devant lui se dresse ce qui devait être un chef-d'œuvre : un palais de sable. Mais la Brume Grise l'a rendu noir et collant, et une tour s'est effondrée. Le crabe donne des coups de pince dans le vide en hurlant : 'C'est fichu ! C'est dégoûtant !'. Il a l'air profondément affecté par la magie triste."
        </ReadAloud>

        <ActionBox title="L'Arbre de Dialogue et les Résolutions">
          <p className="mb-4">L'objectif est d'apaiser Pince-Mi pour obtenir des informations vitales.</p>
          <ul className="list-disc pl-5 space-y-4 mb-4">
            <li><strong>Option A : L'Intimidation ou la Force (Jet de MUSCLE - Kael)</strong>
              <ul className="list-circle pl-5 mt-1 text-sm">
                <li><strong>Résultat :</strong> Pince-Mi est terrifié. Il arrête de pleurer, mais se recroqueville. "Pardonnez-moi majesté ! Le nuage gris est sorti du vieux tuyau humain sous la falaise...". (Vous obtenez l'information, mais aucun objet).</li>
              </ul>
            </li>
            <li><strong>Option B : La Compassion et le Dialogue (Jet de CŒUR — DD 12 - Aura)</strong>
              <ul className="list-circle pl-5 mt-1 text-sm">
                <li><strong>Réussite :</strong> Pince-Mi renifle et regarde Aura. "Tu... tu trouves vraiment que les remparts étaient bien faits ? Merci... La Brume m'a fait croire que j'étais nul".</li>
              </ul>
            </li>
            <li><strong>Option C : Résolution Magique (Jet de MAGIE — DD 11)</strong>
              <ul className="list-circle pl-5 mt-1 text-sm space-y-1">
                <li><strong>Action :</strong> Utiliser la lanterne pour nettoyer le château de sable avec une bulle de lumière pure.</li>
                <li><strong>Réussite :</strong> Le sable noir est lavé, la Brume Grise se dissipe avec un sifflement. Pince-Mi explose de joie.</li>
              </ul>
            </li>
          </ul>
          <div className="mt-4 p-4 bg-amber-50 border border-amber-200 rounded-xl">
            <p className="font-bold text-amber-800">Récompense (Si Option B ou C réussie) :</p>
            <p className="text-amber-700"><strong>Loot obtenu: La Pince d'Ambre</strong> (Un petit collier. Permet à Kael d'avoir un <strong>Avantage</strong> — lancer 2 dés et garder le meilleur — lors de son prochain test de Force).</p>
          </div>
        </ActionBox>

        <h3 className="font-display text-2xl font-bold text-slate-700 mt-8 mb-4">
          SCÈNE 3 : LA FORÊT DES ALGUES RIEUSES (Obstacle)
        </h3>
        <ReadAloud title="Texte à lire à voix haute :">
          "Vous vous enfoncez vers la base des falaises abruptes. Le passage est barré par une barrière naturelle : une forêt de varech géant, les Algues Rieuses. D'habitude dorées, elles sont aujourd'hui couvertes de poussière grise. Elles semblent s'être entremêlées pour former un mur infranchissable. Pour passer, vous allez devoir faire preuve d'astuce, car ces algues sont connues pour être extrêmement... chatouilleuses !".
        </ReadAloud>

        <ActionBox title="Mécaniques et Interactions">
          <ul className="list-disc pl-5 space-y-4">
            <li><strong>1. L'approche tout en finesse (Test de VITESSE - Kael)</strong>
              <ul className="list-circle pl-5 mt-1 text-sm space-y-1">
                <li><strong>DD 13</strong></li>
                <li><strong>Réussite :</strong> Kael glisse comme une ombre entre les lianes sans les toucher. Il traverse en un temps record.</li>
                <li><strong>Échec :</strong> Il se prend un pied dans une liane. Immédiatement, l'algue s'enroule autour de lui et vibre. Kael est pris d'une crise de rire incontrôlable. Il perd <strong>1 PV</strong> de fatigue et ressort de la forêt un peu étourdie.</li>
              </ul>
            </li>
            <li><strong>2. L'approche magique (Test de MAGIE - Aura)</strong>
              <ul className="list-circle pl-5 mt-1 text-sm space-y-1">
                <li><strong>DD 11</strong></li>
                <li><strong>Réussite :</strong> Aura souffle une mélodie de lumière. Les algues, apaisées par la magie, se penchent doucement sur son passage, créant un tunnel royal.</li>
                <li><strong>Échec :</strong> La lumière vacille trop tôt. Les algues croient que c'est un jeu et commencent à lancer des morceaux de varech sur les héros. C'est amusant, mais frustrant !</li>
              </ul>
            </li>
          </ul>
        </ActionBox>

        <h3 className="font-display text-2xl font-bold text-slate-700 mt-8 mb-4">
          SCÈNE 4 : LA GUEULE DE FER (Investigation et Mystère)
        </h3>
        <ReadAloud title="Texte à lire à voix haute :">
          "La forêt d'algues s'arrête devant une muraille de roche noire. Là se dresse la Gueule de Fer : un immense tuyau de métal rouillé, vestige des anciens humains. Le tuyau est si large que vous pourriez y marcher à l'aise. De l'intérieur, un courant sombre s'échappe, emportant de la Brume Grise. Le bruit à l'intérieur est effrayant : un 'Glong... Glong...' régulier, comme le cœur d'un géant de fer qui bat encore. À l'entrée, un petit poisson-globe nommé Gaston tremble comme une feuille".
        </ReadAloud>

        <ActionBox title="Interaction avec Gaston le Poisson-Globe">
          <p className="mb-2">Gaston gonfle dès qu'il vous voit.</p>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Défi de CŒUR (DD 10) :</strong> Aura doit rassurer Gaston pour qu'il reprenne sa forme normale.</li>
            <li><strong>Informations obtenues:</strong>
              <ol className="list-decimal pl-5 mt-1 text-sm space-y-1">
                <li>"Une chose noire avec beaucoup de pattes est entrée hier soir avec un sac brillant rouge."</li>
                <li>"Le tuyau est protégé par une grille magique. Il faut trouver les trois <strong>Manivelles de Corail</strong> cachées pour l'ouvrir."</li>
                <li>"Si tu entends le 'Glong' devenir plus fort, cache-toi, car un jet de goudron va sortir !"</li>
              </ol>
            </li>
          </ul>
        </ActionBox>
      </section>
    </div>
  );
}
