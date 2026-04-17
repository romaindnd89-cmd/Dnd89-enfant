import React from 'react';
import { ReadAloud, CombatBox, ActionBox, InfoBox } from '../../components/StoryBlocks';

export default function Part2() {
  return (
    <div className="space-y-12">
      {/* CHAPITRE 3 (Première partie du PDF) */}
      <section id="chap3">
        <h2 className="font-display text-3xl font-bold text-slate-800 mb-6 border-b-2 border-slate-200 pb-2 mt-12">
          CHAPITRE 3 : LES ENTRAILLES DU GÉANT DE FER
        </h2>

        <h3 className="font-display text-2xl font-bold text-slate-700 mt-8 mb-4">
          SCÈNE 1 : LE MÉCANISME DE LA GRILLE (Énigme)
        </h3>
        <p className="mb-4 text-slate-700">La grille de fer est verrouillée magiquement. Les héros doivent trouver les trois manivelles:</p>
        
        <ActionBox title="Les Trois Manivelles">
          <ol className="list-decimal pl-5 space-y-4">
            <li><strong>Le Levier Encrassé :</strong> Bloqué par des coquillages collants.
              <ul className="list-circle pl-5 mt-1 text-sm">
                <li><strong>Solution :</strong> Utiliser le <strong>MUSCLE</strong> pour gratter ou la <strong>MAGIE</strong> pour dissoudre la colle.</li>
              </ul>
            </li>
            <li><strong>La Roue Perdue :</strong> Tombée dans une faille profonde gardée par une murène grincheuse.
              <ul className="list-circle pl-5 mt-1 text-sm">
                <li><strong>Solution :</strong> Négocier avec le <strong>CŒUR</strong> ou être rapide avec la <strong>VITESSE</strong> pour la récupérer.</li>
              </ul>
            </li>
            <li><strong>Le Chant du Code :</strong> La manivelle possède trois cloches musicales.
              <ul className="list-circle pl-5 mt-1 text-sm">
                <li><strong>Solution :</strong> Gaston se souvient du début, Aura doit compléter la mélodie avec sa voix ou un jet de sonar magique.</li>
              </ul>
            </li>
          </ol>
          <p className="mt-4 text-sm italic">Conséquence : La grille remonte dans un sifflement de bulles. Le chemin vers les entrailles est ouvert.</p>
        </ActionBox>

        <h3 className="font-display text-2xl font-bold text-slate-700 mt-8 mb-4">
          SCÈNE 2 : L'EMBUSCADE DES PAGURES-GOUDRON (Combat)
        </h3>
        <ReadAloud title="Texte à lire à voix haute :">
          "Le tunnel métallique tourne brusquement. L'eau ici est poisseuse, presque noire. Soudain, deux paires d'yeux rouges s'allument dans l'obscurité. Ce sont des Pagures-Goudron ! Ces énormes bernard-l'ermite utilisent de vieux barils humains toxiques comme coquilles. Ils sont recouverts de Mue Noire et leurs pinces sont affûtées. Ils bloquent votre chemin !".
        </ReadAloud>

        <CombatBox title="Mécaniques de Combat">
          <ul className="list-disc pl-5 space-y-2 mb-4">
            <li><strong>Initiative :</strong> (1d20 + VITESSE).</li>
            <li><strong>Ennemis :</strong> 2 Pagures-Goudron (12 PV, CA 12).</li>
          </ul>
          <p className="font-bold mb-2">Options de l'enfant :</p>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Attaque de Zone (Le Sonar Brutal) :</strong> Frapper les parois pour faire tomber de la rouille sur eux (DD 11). Ils perdent 1d6 PV et sont étourdis.</li>
            <li><strong>Tir de Précision (MAGIE) :</strong> Envoyer des bulles acides dans l'ouverture de leurs barils pour laver le goudron (+2 dégâts).</li>
          </ul>
        </CombatBox>

        <InfoBox title="LE CONSEIL DU VIEUX SAGE : L'ENVIRONNEMENT">
          <p className="italic">Explique à ton enfant : "Regarde bien autour de toi ! Parfois, frapper le plafond ou utiliser les objets qui traînent est plus malin que de frapper le monstre directement.".</p>
        </InfoBox>

        {/* CHAPITRE 3 (Deuxième partie détaillée du PDF) */}
        <h2 className="font-display text-3xl font-bold text-slate-800 mb-6 border-b-2 border-slate-200 pb-2 mt-16">
          CHAPITRE 3 : LES ENTRAILLES DU GÉANT DE FER
        </h2>
        <div className="mb-6 text-slate-700">
          <p><strong>Niveau recommandé :</strong> 1+</p>
          <p><strong>Lieu :</strong> L'intérieur de la Gueule de Fer (Ancien complexe humain)</p>
          <p><strong>Ambiance :</strong> Obscurité industrielle, échos métalliques, odeur de goudron magique.</p>
        </div>

        <h3 className="font-display text-2xl font-bold text-slate-700 mt-8 mb-4">
          SCÈNE 1 : LE MÉCANISME DE LA GRILLE (Énigme Environnementale)
        </h3>
        <p className="mb-4 text-slate-700"><strong>Contexte :</strong> L'entrée du tuyau est bloquée par une grille de métal solide qui ne peut pas être brisée par la force. Les héros doivent activer trois mécanismes de "Manivelles de Corail" pour l'ouvrir.</p>

        <ActionBox title="Les Trois Énigmes (Bac à sable)">
          <ul className="list-disc pl-5 space-y-4">
            <li><strong>1. Le Levier Encrassé :</strong> Une manivelle est totalement bloquée par des berniques et des coquillages collants.
              <ul className="list-circle pl-5 mt-1 text-sm space-y-1">
                <li><strong>Action :</strong> Utiliser le <strong>MUSCLE</strong> pour gratter les coquillages ou la <strong>MAGIE</strong> (bulle acide) pour dissoudre la colle.</li>
                <li><strong>Réussite :</strong> Le levier pivote avec un bruit de rouille.</li>
              </ul>
            </li>
            <li><strong>2. La Roue Perdue :</strong> La manivelle manque, elle est tombée dans une faille profonde gardée par une murène grincheuse.
              <ul className="list-circle pl-5 mt-1 text-sm space-y-1">
                <li><strong>Action :</strong> Négocier avec le <strong>CŒUR</strong> pour qu'elle la rende, ou être rapide avec la <strong>VITESSE</strong> pour s'en emparer avant qu'elle ne morde.</li>
              </ul>
            </li>
            <li><strong>3. Le Chant du Code :</strong> Cette manivelle possède trois cloches de cristal.
              <ul className="list-circle pl-5 mt-1 text-sm space-y-1">
                <li><strong>Action :</strong> Gaston se souvient du début du chant, mais les héros doivent compléter la mélodie. Aura doit utiliser son sonar magique ou chanter la bonne note.</li>
              </ul>
            </li>
          </ul>
          <div className="mt-4 p-4 bg-emerald-50 border border-emerald-200 rounded-xl">
            <p className="text-emerald-800"><strong>Résultat de la réussite :</strong> Un bruit de rouage ancestral résonne, la grille remonte et le chemin vers les entrailles s'ouvre.</p>
          </div>
        </ActionBox>

        <h3 className="font-display text-2xl font-bold text-slate-700 mt-8 mb-4">
          SCÈNE 2 : LE TUNNEL DES ÉCHOS (Ambiance et Tension)
        </h3>
        <ReadAloud title="Texte à lire à voix haute (Encadré Narratif) :">
          "Vous pénétrez à l'intérieur du tuyau géant. Ici, la lumière du soleil ne vous accompagne plus. C'est l'obscurité presque totale, seulement interrompue par des algues fluorescentes qui tapissent les parois de métal, jetant des reflets violets et bleus sur votre peau. Soudain, vous entendez un rire. Un rire métallique, froid, qui ne vient pas d'un animal. Ça vient de plus profond, là où le goudron est le plus épais. Quelqu'un ou quelque chose vous observe depuis les ombres."
        </ReadAloud>

        <ActionBox title="Mécanique : Le Test de Courage">
          <p className="mb-2">Demande aux héros de faire un jet de <strong>CŒUR (DD 12)</strong> pour rester calme face à cette ambiance.</p>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Réussite :</strong> Ils remarquent des inscriptions sur les murs, des chiffres humains (1, 2, 3...) qui indiquent le chemin vers la salle des machines.</li>
            <li><strong>Échec :</strong> Les héros paniquent et foncent dans un mur, faisant un bruit énorme qui alerte les ennemis proches.</li>
          </ul>
        </ActionBox>

        <h3 className="font-display text-2xl font-bold text-slate-700 mt-8 mb-4">
          SCÈNE 3 : L'EMBUSCADE DES PAGURES-GOUDRON (Combat Tactique)
        </h3>
        <ReadAloud title="Texte à lire à voix haute :">
          "Le tunnel métallique tourne brusquement. Vous arrivez dans une intersection où plusieurs vieux tuyaux se croisent. L'eau ici est poisseuse, presque noire. Puis, deux paires d'yeux rouges s'allument. Clac. Clac. Ce sont des Pagures-Goudron ! Ce sont d'énormes bernard-l'ermite qui ont utilisé de vieux barils humains toxiques comme coquilles. Ils sont recouverts de Mue Noire et leurs pinces sont affûtées comme des ciseaux de fer."
        </ReadAloud>

        <CombatBox title="Statistiques et Combat (Espace Clos)">
          <ul className="list-disc pl-5 space-y-2 mb-4">
            <li><strong>Ennemis :</strong> 2 Pagures-Goudron (12 PV, CA 12).</li>
            <li><strong>Attaque :</strong> Coup de pince (+3 pour toucher, 1d4 + 1 dégâts).</li>
          </ul>
          <p className="font-bold mb-2">Options Tactiques Spéciales :</p>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>A - L'Attaque de Zone (Vibrations) :</strong> Frapper les parois du tunnel (DD 11). Si réussi, de la vieille rouille et du corail s'effondrent sur les crabes (1d6 dégâts et étourdissement).</li>
            <li><strong>B - Tir de Précision (Magie) :</strong> Cracher des bulles acides précisément dans l'ouverture des barils pour nettoyer le goudron (Dégâts normaux +2).</li>
          </ul>
        </CombatBox>

        <h3 className="font-display text-2xl font-bold text-slate-700 mt-8 mb-4">
          SCÈNE 4 : LA SALLE DES FILTRES ET LA MÉDUSE (Rencontre et Loot)
        </h3>
        <p className="mb-4 text-slate-700"><strong>Contexte :</strong> Une grande salle sphérique où les grilles retiennent des tonnes de déchets. Au milieu, une lueur bleue clignote.</p>
        <ReadAloud title="Texte à lire à voix haute :">
          "Au milieu des déchets humains, vous découvrez une magnifique petite méduse bioluminescente. Elle est coincée dans une vieille cage d'oiseau en métal. La Brume Grise essaie de l'étouffer, mais sa lumière résiste courageusement. Elle a besoin de vous !"
        </ReadAloud>

        <ActionBox title="Résolution et Récompense">
          <ul className="list-disc pl-5 space-y-2 mb-4">
            <li><strong>Action :</strong> Ouvrir la cage avec un test de <strong>MUSCLE (DD 10)</strong>.</li>
            <li><strong>Le Personnage :</strong> Elle s'appelle <strong>Lumina</strong>. Elle est joyeuse et décide de vous accompagner comme "petite étoile dans la nuit".</li>
          </ul>
          <div className="p-4 bg-amber-50 border border-amber-200 rounded-xl">
            <p className="font-bold text-amber-800 mb-2">Loot obtenu : Compagnon Lumina</p>
            <ul className="list-disc pl-5 text-amber-700 text-sm space-y-1">
              <li><strong>Effet Passif :</strong> Elle illumine toutes les zones sombres autour des héros.</li>
              <li><strong>Effet Actif (1 fois par chapitre) :</strong> "Flash de Joie". Lumina émet un flash puissant qui aveugle tous les ennemis corrompus pendant un tour complet.</li>
            </ul>
          </div>
        </ActionBox>

        <h3 className="font-display text-2xl font-bold text-slate-700 mt-8 mb-4">
          SCÈNE 5 : L'ANTICHAMBRE DU CŒUR NOIR (Préparation)
        </h3>
        <ReadAloud title="Texte à lire à voix haute :">
          "Guidée par Lumina, vous arrivez devant une immense porte d'acier ronde, semblable à celle d'un coffre-fort. C'est la fin du tunnel. Derrière cette porte, la machinerie rugit : Boum... Boum... Boum... L'eau vibre tellement que ça vous chatouille les narines. Une mare d'eau pure se trouve devant la porte, entourée d'anémones roses."
        </ReadAloud>

        <ActionBox title="Mécanique : Le Repos du Héros">
          <p className="mb-2">Avant d'affronter le Boss, les héros peuvent se préparer :</p>
          <ul className="list-disc pl-5 space-y-2 mb-4">
            <li><strong>Se reposer dans la mare :</strong> Rend <strong>1d8 PV</strong>.</li>
            <li><strong>S'échauffer :</strong> Le MJ demande à l'enfant comment son personnage se prépare (gonfler une bulle magique, faire craquer ses nageoires/doigts).</li>
          </ul>
          <p className="font-bold text-slate-800">Le Final du Chapitre : La grande roue de la porte tourne toute seule. Un jet de goudron jaillit. Le véritable responsable de la Mue Noire vous attend de l'autre côté !</p>
        </ActionBox>
      </section>

      {/* CHAPITRE 5 */}
      <section id="chap5">
        <h2 className="font-display text-3xl font-bold text-slate-800 mb-6 border-b-2 border-slate-200 pb-2 mt-12">
          CHAPITRE 5 : LES PICS D'ARGENT
        </h2>
        <div className="mb-6 text-slate-700">
          <p><strong>Niveau recommandé :</strong> 2+</p>
          <p><strong>Lieu :</strong> La Banquise Suspendue (Accès aux sommets)</p>
          <p><strong>Ambiance :</strong> Froid éternel, vent hurlant, pureté aveuglante.</p>
        </div>

        <h3 className="font-display text-2xl font-bold text-slate-700 mt-8 mb-4">
          SCÈNE 1 : L'ARRIVÉE DANS LE BLIZZARD (Narration Immersive)
        </h3>
        <ReadAloud title="Texte à lire à voix haute (Prends une voix qui grelotte un peu) :">
          "Tu laisses la chaleur de la forge derrière toi. Un vent glacial s'engouffre dans tes vêtements alors que tu t'élèves vers les sommets. Devant toi, le paysage est d'une beauté à couper le souffle, mais aussi terrifiant : des montagnes pointues recouvertes de neige étincelante s'étendent à perte de vue sous un ciel d'un bleu très pâle, presque blanc.<br/><br/>
          La neige tombe à gros flocons, mais en regardant bien, tu remarques que certains pics rocheux sont recouverts d'une étrange Glace Noire et opaque. Elle ne reflète pas la lumière du soleil, elle semble l'avaler. Tu te trouves sur la Banquise Suspendue, une immense plateforme de glace au-dessus du vide où le vent hurle sans relâche. Au milieu d'un pont de glace naturel, tu aperçois une grosse forme qui grelotte."
        </ReadAloud>

        <ActionBox title="Options d'Exploration et Mécaniques (Bac à sable)">
          <h4 className="font-bold text-slate-800 mb-2">1. Analyser le Gel Magique (Test de MAGIE - Aura)</h4>
          <p className="mb-2">Aura examine comment le froid fige la magie environnante :</p>
          <ul className="list-disc pl-5 space-y-2 mb-4">
            <li><strong>Jet de MAGIE — DD 12 :</strong>
              <ul className="list-circle pl-5 mt-1 text-sm space-y-1">
                <li><strong>Réussite (12+) :</strong> Aura comprend que cette Glace Noire est une forme solide de la Mue Noire. Elle apprend la règle du <strong>Gel Magique</strong> : si les héros ratent trop de tests, ils finiront par geler sur place et devront utiliser une source de chaleur pour se libérer.</li>
                <li><strong>Échec (1 à 11) :</strong> Le froid engourdit les doigts d'Aura. Elle ne parvient pas à se concentrer et subit une fine couche de givre sur sa lanterne, réduisant sa portée lumineuse.</li>
              </ul>
            </li>
          </ul>

          <h4 className="font-bold text-slate-800 mb-2">2. Sonder le précipice (Test de VITESSE/PERCEPTION - Kael)</h4>
          <p className="mb-2">Kael observe les courants d'air pour trouver un passage stable :</p>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Jet de PERCEPTION — DD 13 :</strong>
              <ul className="list-circle pl-5 mt-1 text-sm space-y-1">
                <li><strong>Réussite :</strong> Kael remarque que le pont de glace est fragile à certains endroits. Il repère des courants d'air ascendants qui pourraient l'aider à planer s'il tombait.</li>
                <li><strong>Échec :</strong> Kael glisse sur une plaque de verglas cachée par la neige fraîche. Il manque de tomber dans le vide et se rattrape de justesse, perdant <strong>2 PV</strong> de fatigue dans l'effort.</li>
              </ul>
            </li>
          </ul>
        </ActionBox>

        <h3 className="font-display text-2xl font-bold text-slate-700 mt-8 mb-4">
          SCÈNE 2 : LA RENCONTRE AVEC POLAIRE (Roleplay et Solution)
        </h3>
        <ReadAloud title="Texte à lire à voix haute :">
          "En vous approchant, vous découvrez que la forme n'est pas un rocher, mais un immense Ours Polaire ! Il est assis sur le pont, portant une doudoune humaine jaune vif beaucoup trop grande pour lui, avec la capuche rabattue sur ses oreilles. Il frotte ses grosses pattes l'une contre l'autre en soufflant une fumée de froid. 'B-b-bonjour les enfants... B-brrr ! Je m'appelle Polaire. Des loups couverts de goudron m'ont volé mon Thermos de Soupe Magique. Sans lui, je vais finir par devenir une statue de glace !'"
        </ReadAloud>

        <ActionBox title="Résolutions Sociales et Choix">
          <ul className="list-disc pl-5 space-y-4">
            <li><strong>La Pitié / Le Cœur (Jet de CŒUR - DD 13) :</strong> Aura essaie d'être douce et utilise la chaleur résiduelle du Fragment de Cristal Rouge pour réconforter l'ours.
              <ul className="list-circle pl-5 mt-1 text-sm">
                <li><strong>Réussite :</strong> Polaire arrête de grelotter. "Merci ! Les loups se cachent dans le Labyrinthe des Sapins de Cristal juste devant. Si vous récupérez mon Thermos, je vous donnerai le secret pour ne jamais geler ici."</li>
              </ul>
            </li>
            <li><strong>Le Défi / Le Muscle (Jet de MUSCLE - DD 14) :</strong> Kael montre sa force pour impressionner l'ours et lui promettre vengeance.
              <ul className="list-circle pl-5 mt-1 text-sm">
                <li><strong>Réussite :</strong> Polaire rit d'un ton bourru. "J'aime votre courage ! Si vous survivez à ces monstres, je vous donnerai un objet secret pour affronter le Duc Blizzard."</li>
              </ul>
            </li>
            <li><strong>L'Échec Social :</strong> Si les jets échouent, Polaire accepte votre aide par nécessité, mais il restera grognon et refusera de vous prévenir des pièges à venir sur la route.</li>
          </ul>
        </ActionBox>

        <h3 className="font-display text-2xl font-bold text-slate-700 mt-8 mb-4">
          SCÈNE 3 : L'EMBUSCADE DANS LES SAPINS (Combat Tactique)
        </h3>
        <ReadAloud title="Texte à lire à voix haute :">
          "Vous entrez dans un bois où les sapins sont faits de cristaux de glace pointus. Soudain, trois ombres sortent des troncs. Ce sont les Loups de Givre-Noir ! Leur fourrure est hérissée de stalactites sombres. Ils ne grognent pas, ils sont parfaitement silencieux, leurs yeux bleus vous fixant froidement. L'un d'eux tient le Thermos rouge dans sa gueule. Ils vous encerclent en glissant sur la neige avec une agilité surnaturelle."
        </ReadAloud>

        <CombatBox title="Mécaniques de Combat (Terrain Glissant)">
          <ul className="list-disc pl-5 space-y-2 mb-4">
            <li><strong>Initiative :</strong> (1d20 + VITESSE). Les loups ont 14 (ils sont très rapides sur la glace).</li>
            <li><strong>Ennemis :</strong> 3 Loups de Givre-Noir (15 PV chacun, CA 14).</li>
            <li><strong>Immunité :</strong> Ils résistent au froid (la magie d'eau ou de glace fera moitié moins de dégâts).</li>
          </ul>
          <p className="font-bold mb-2">Actions Spéciales des Héros :</p>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>L'astuce de la Chaleur (Aura) :</strong> Si Aura utilise son Cristal Rouge, elle fait fondre l'armure de glace des loups. La CA des loups tombe à 11.</li>
            <li><strong>Le Coup de Bélier (Kael) :</strong> Kael peut charger. S'il réussit, la force de sa glissade ajoute <strong>+2 dégâts</strong>. Cependant, s'il rate (moins de 14), il percute un sapin de cristal et subit <strong>1d4 dégâts</strong> d'épines.</li>
            <li><strong>L'Attaque des Loups :</strong> Leur morsure peut ralentir les héros. Si un loup touche, le héros ne peut faire qu'une seule action au prochain tour.</li>
          </ul>
        </CombatBox>

        <h3 className="font-display text-2xl font-bold text-slate-700 mt-8 mb-4">
          SCÈNE 4 : LE BUTIN DE LA TOUNDRA (Loot Aléatoire)
        </h3>
        <p className="mb-4 text-slate-700"><strong>Contexte :</strong> Une fois les loups vaincus, la Glace Noire fond et ils redeviennent des loups blancs inoffensifs. Vous récupérez le Thermos.</p>
        
        <ActionBox title="Fouille de la zone (Lance 1d6) :">
          <ol className="list-decimal pl-5 space-y-2">
            <li><strong>Chaussettes en laine :</strong> Inutiles, mais elles sentent fort le fromage.</li>
            <li><strong>Cyalume Humain :</strong> Un bâton qui brille en vert pour éclairer les grottes.</li>
            <li><strong>Patins à Glace :</strong> Donnent un bonus de <strong>+2 en VITESSE</strong> sur la neige.</li>
            <li><strong>Potion de Sang-Chaud :</strong> Immunise contre le gel pendant 1 heure.</li>
            <li><strong>Clochette du Froid :</strong> Permet de créer un petit pont de glace solide de 5 mètres une fois par jour.</li>
            <li><strong>[JACKPOT] Manteau de l'Aurore :</strong> Une cape magique qui donne <strong>+1 CA</strong> et permet de devenir invisible pendant 1 tour.</li>
          </ol>
        </ActionBox>

        <div className="mt-8 p-6 bg-blue-50 border-2 border-blue-200 rounded-2xl">
          <h3 className="font-display text-xl font-bold text-blue-800 mb-4">RÉCOMPENSE ET TRANSITION</h3>
          <p className="text-blue-700 mb-4">En ramenant le Thermos à Polaire, il vous invite à tremper vos mains/nageoires dedans.</p>
          <ul className="list-disc pl-5 text-blue-800 mb-6">
            <li><strong>Effet :</strong> Votre équipement prend une teinte ambrée. Vous gagnez la <strong>Résistance au Gel</strong>, ce qui vous permet d'affronter le Palais du Duc sans risque de geler instantanément.</li>
          </ul>
          <p className="font-bold text-blue-900 mb-2">Le choix final du chapitre :</p>
          <p className="text-blue-800 mb-2">Polaire vous indique deux chemins :</p>
          <ul className="list-disc pl-5 text-blue-800">
            <li><strong>Le Grand Toboggan d'Argent :</strong> Très rapide mais rempli d'obstacles physiques.</li>
            <li><strong>Le Poste d'Observation :</strong> Plus lent mais rempli d'énigmes pour les enfants intelligents.</li>
          </ul>
        </div>
      </section>
    </div>
  );
}
