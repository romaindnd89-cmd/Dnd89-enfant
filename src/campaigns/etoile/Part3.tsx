import React from 'react';
import { ReadAloud, CombatBox, ActionBox, InfoBox } from '../../components/StoryBlocks';

export default function Part3() {
  return (
    <div className="space-y-12">
      {/* CHAPITRE 6 */}
      <section id="chap6">
        <h2 className="font-display text-3xl font-bold text-slate-800 mb-6 border-b-2 border-slate-200 pb-2 mt-12">
          CHAPITRE 6 : LA DESCENTE INFERNALE
        </h2>
        <div className="mb-6 text-slate-700">
          <p><strong>Niveau recommandé :</strong> 2</p>
          <p><strong>Lieu :</strong> Le Grand Toboggan d'Argent (Ancienne piste de bobsleigh olympique humaine)</p>
          <p><strong>Ambiance :</strong> Adrénaline, vent hurlant, vitesse fulgurante.</p>
        </div>

        <h3 className="font-display text-2xl font-bold text-slate-700 mt-8 mb-4">
          SCÈNE 1 : LE DÉPART DU TOBOGGAN
        </h3>
        <ReadAloud title="Texte à lire à voix haute (D'une voix rapide et énergique) :">
          "Vous quittez Polaire et vous vous tenez au sommet d'un immense tube de glace pure qui serpente à flanc de montagne, suspendu au-dessus des nuages. C'est le Grand Toboggan d'Argent. Le vent siffle entre vos oreilles et la pente semble plonger à la verticale.<br/><br/>
          Lumignon s'accroche à ton écharpe, Kael, en criant : 'Accrochez-vous à vos dents, ça va secouer !'. Vous vous élancez et, en deux secondes, vous prenez une vitesse incroyable. SWOOOOOSH ! Le paysage défile si vite qu'il devient flou. Vous allez devoir faire preuve de réflexes héroïques pour ne pas percuter les parois de glace !"
        </ReadAloud>

        <ActionBox title="Le Défi de la Descente (Course d'Obstacles)">
          <p className="mb-4">Ce n'est pas un combat classique, mais un défi de mouvement en trois étapes. Les héros doivent réussir au moins deux jets pour arriver en bas sans blessures graves.</p>
          
          <h4 className="font-bold text-slate-800 mb-2">1. Obstacle : Les Stalagmites Géantes (Test de VITESSE)</h4>
          <p className="mb-2">Des pics de glace pointus barrent soudainement le milieu de la piste.</p>
          <ul className="list-disc pl-5 space-y-2 mb-4">
            <li><strong>Jet de VITESSE — DD 13 :</strong>
              <ul className="list-circle pl-5 mt-1 text-sm space-y-1">
                <li><strong>Réussite :</strong> Vous donnez un coup de jambe sec, votre trajectoire remonte sur la paroi verticale de la piste et vous évitez les pics de justesse !</li>
                <li><strong>Échec :</strong> Scriiiiiitch ! Les pics rayent vos jambes et vos boucliers. Vous êtes secoués et perdez <strong>1d4 PV</strong>.</li>
              </ul>
            </li>
          </ul>

          <h4 className="font-bold text-slate-800 mb-2">2. Obstacle : Le Virage en Épingle (Test de MUSCLE)</h4>
          <p className="mb-2">La piste tourne brutalement à 90 degrés au-dessus du vide immense.</p>
          <ul className="list-disc pl-5 space-y-2 mb-4">
            <li><strong>Jet de MUSCLE — DD 12 :</strong>
              <ul className="list-circle pl-5 mt-1 text-sm space-y-1">
                <li><strong>Réussite :</strong> Vous vous jetez de tout votre poids vers l'intérieur du virage. La force vous plaque au sol, mais vous restez sur la piste !</li>
                <li><strong>Échec :</strong> Vous dérapez violemment contre le bord extérieur. BAM ! Le choc vous étourdit et vous perdez <strong>1d6 PV</strong>.</li>
              </ul>
            </li>
          </ul>

          <h4 className="font-bold text-slate-800 mb-2">3. Obstacle : Le Gouffre Brisé (Test de MAGIE)</h4>
          <p className="mb-2">La piste est brisée sur dix mètres ! Il y a un trou béant menant directement dans le vide.</p>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Jet de MAGIE — DD 12 :</strong>
              <ul className="list-circle pl-5 mt-1 text-sm space-y-1">
                <li><strong>Réussite :</strong> Aura utilise sa lanterne pour créer une rampe de lumière solide, ou Kael solidifie une ombre pour combler le vide. Vous décollez et atterrissez élégamment de l'autre côté !</li>
                <li><strong>Échec :</strong> Vous tombez dans le trou ! Lumignon vous rattrape de justesse avec sa magie de luciole, mais l'effort est épuisant. <strong>-2 points d'Éclat</strong> pour l'étoile.</li>
              </ul>
            </li>
          </ul>
        </ActionBox>

        <h3 className="font-display text-2xl font-bold text-slate-700 mt-8 mb-4">
          SCÈNE 2 : LE SERGENT FRISSON (Mini-Boss de Fer)
        </h3>
        <ReadAloud title="Texte à lire à voix haute :">
          "La piste ralentit enfin sur une plateforme circulaire. Devant vous s'étend le Grand Pont de Cristal qui mène au Palais du Duc. Mais un cri métallique déchire le ciel. Un aigle gigantesque plonge des nuages gris. Son corps est en métal rouillé et ses plumes sont de longues lames de Glace Noire tranchantes. Ses yeux sont deux lumières rouges clignotantes. C'est le Sergent Frisson, un ancien drone humain corrompu par la Mue Noire. Il se pose lourdement, bloquant l'accès au Palais, et vous fixe d'un air glacial."
        </ReadAloud>

        <CombatBox title="Combat Tactique et Statistiques">
          <ul className="list-disc pl-5 space-y-2 mb-4">
            <li><strong>Mini-Boss :</strong> Sergent Frisson (30 PV, CA 15).</li>
            <li><strong>Immunité :</strong> Il résiste à la magie d'eau (l'eau gèle sur son armure).</li>
            <li><strong>Faiblesse :</strong> Le MUSCLE. La force brute cabosse son métal.</li>
          </ul>
          <p className="font-bold mb-2">Actions Spéciales des Héros :</p>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>L'Astuce de l'Esquive (Kael) :</strong> Le pont est en cristal fragile. Si Kael réussit un jet de <strong>VITESSE (DD 14)</strong> pour esquiver une charge, le Sergent plante ses serres dans le cristal et reste <strong>coincé</strong> pendant un tour.</li>
            <li><strong>Le Flash de Lanterne (Aura) :</strong> Aura peut viser les capteurs rouges (les yeux) du Sergent. S'il est ébloui, il a un <strong>Malus de -4</strong> pour toucher au prochain tour.</li>
          </ul>
        </CombatBox>

        <h3 className="font-display text-2xl font-bold text-slate-700 mt-8 mb-4">
          SCÈNE 3 : LE BUTIN DU GARDIEN (Loot Aléatoire)
        </h3>
        <p className="mb-4 text-slate-700">Une fois le Sergent Frisson vaincu, il s'effondre en un tas de ferraille et de plumes de glace. À ses côtés, un petit coffre-fort humain est incrusté dans la glace du pont.</p>

        <ActionBox title="Fouille du coffre (Lance 1d6) :">
          <ol className="list-decimal pl-5 space-y-2">
            <li><strong>Écrou Géant :</strong> Un très gros morceau de métal. Lourd mais inutile.</li>
            <li><strong>Plume de Glace Parfaite :</strong> Une arme de jet (usage unique) qui inflige <strong>2d6 dégâts</strong> de glace.</li>
            <li><strong>Spray Dégivrant :</strong> Annule immédiatement n'importe quel effet de gel sur un héros (3 utilisations).</li>
            <li><strong>Potion de Courant d'Air :</strong> Permet d'esquiver automatiquement la prochaine attaque physique.</li>
            <li><strong>Cristal de Batterie :</strong> Donne <strong>+2 dégâts</strong> sur toutes les attaques magiques de feu ou d'électricité.</li>
            <li><strong>[JACKPOT] L'Œil du Sergent :</strong> Une gemme rouge qui scanne les ennemis. Le MJ doit révéler les PV et la CA de tous les futurs monstres.</li>
          </ol>
        </ActionBox>

        <h3 className="font-display text-2xl font-bold text-slate-700 mt-8 mb-4">
          SCÈNE 4 : LES PORTES DU PALAIS (Le Choix d'Approche)
        </h3>
        <ReadAloud title="Texte à lire à voix haute :">
          "Vous traversez le pont de cristal. Devant vous se dresse enfin le Palais du Duc Blizzard, une cathédrale de glace bleue étincelante. L'entrée principale est gardée par deux statues de loups hurlants. Mais Lumignon vous chuchote : 'Attendez ! Polaire m'a parlé d'un conduit d'aération caché sur le côté...'"
        </ReadAloud>

        <ActionBox title="Choix Stratégique :">
          <ul className="list-disc pl-5 space-y-4">
            <li><strong>Option A : L'Entrée Principale.</strong> C'est un piège. Les statues crachent une tempête de neige, vous forçant à un combat surprise contre 2 Golems de Glace.</li>
            <li><strong>Option B : Le Passage Secret.</strong> Vous contournez la façade. Un jet de <strong>MAGIE</strong> fait fondre la neige sur une grille. Vous entrez discrètement, évitant les pièges. C'est l'avantage d'avoir écouté les conseils de Polaire.</li>
          </ul>
        </ActionBox>

        <InfoBox title="LE CONSEIL DU MJ : LA STRATÉGIE">
          <p className="italic">Dis à ton enfant : 'Bravo ! En étant attentif aux dialogues avec Polaire, tu as trouvé un chemin plus facile. Dans D&D, l'exploration est aussi importante que le combat !'</p>
        </InfoBox>
      </section>

      {/* CHAPITRE 7 */}
      <section id="chap7">
        <h2 className="font-display text-3xl font-bold text-slate-800 mb-6 border-b-2 border-slate-200 pb-2 mt-12">
          CHAPITRE 7 : LA SALLE DU TRÔNE GLACÉ
        </h2>
        <div className="mb-6 text-slate-700">
          <p><strong>Niveau recommandé :</strong> 3</p>
          <p><strong>Lieu :</strong> Le Palais du Duc Blizzard</p>
          <p><strong>Ambiance :</strong> Silence de mort, reflets trompeurs, froid absolu.</p>
        </div>

        <h3 className="font-display text-2xl font-bold text-slate-700 mt-8 mb-4">
          SCÈNE 1 : LE COULOIR DES REFLETS TROMPEURS
        </h3>
        <ReadAloud title="Texte à lire à voix haute (D'une voix mystérieuse) :">
          "Vous pénétrez enfin dans le Palais. L'air est si froid que l'eau de vos gourdes crépite doucement. Vous arrivez dans une galerie immense dont les murs ne sont pas faits de pierre, mais de miroirs de glace parfaits.<br/><br/>
          En avançant, vous regardez vos reflets. Mais quelque chose cloche : vos doubles ne font pas les mêmes mouvements que vous. Dans la glace, vos visages ont l'air tristes, fâchés et recouverts de goudron noir. Les miroirs murmurent avec une voix de vent glacé : 'Vous êtes trop petits... vous allez échouer... le noir va gagner...'"
        </ReadAloud>

        <ActionBox title="Mécanique : Le Test de Volonté (Illusion)">
          <p className="mb-2">C'est un piège psychologique créé par le Palais pour briser le moral des héros.</p>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Jet de CŒUR — DD 14:</strong>
              <ul className="list-circle pl-5 mt-1 text-sm space-y-1">
                <li><strong>Réussite (14+) :</strong> Vous fermez les yeux et pensez à vos amis rencontrés (Polaire, Lumignon, Vulcain). Vous poussez un cri de courage. Crrrac ! Les reflets méchants se fissurent et disparaissent. Vous gagnez un <strong>Avantage</strong> (lancez deux dés) pour votre premier tour de combat.</li>
                <li><strong>Échec (1 à 13) :</strong> Les voix glacées vous font douter. Vous baissez la tête et vos mains tremblent. Vous avez un <strong>Malus de -1 à votre CA</strong> lors du premier tour du combat contre le Duc.</li>
              </ul>
            </li>
          </ul>
        </ActionBox>

        <h3 className="font-display text-2xl font-bold text-slate-700 mt-8 mb-4">
          SCÈNE 2 : L'AUDIENCE DU DUC BLIZZARD
        </h3>
        <ReadAloud title="Texte à lire à voix haute :">
          "Au bout du couloir, vous entrez dans la Salle du Trône, une pièce circulaire ouverte sur le ciel étoilé. Sur un bloc de Glace Noire perche le <strong>Duc Blizzard</strong> : un Harfang des Neiges titanesque dont les plumes blanches sont emprisonnées sous une armure de givre noir.<br/><br/>
          Au centre de sa poitrine, incrusté sous la glace, brille une lumière azur : le <strong>Cristal de la Paix</strong>. Le Duc tourne lentement la tête. Ses yeux jaunes sont immenses et froids. Il déploie ses ailes et sa voix résonne comme une tempête : 'Encore des créatures de chaleur... Le froid fige tout. Le froid protège. Repartez, ou soyez gelés pour l'éternité !'"
        </ReadAloud>

        <ActionBox title="Le Choix de l'Approche (Roleplay)">
          <p className="mb-2 italic">Avant que le combat ne commence, les héros peuvent tenter de parler.</p>
          <ul className="list-disc pl-5 space-y-4">
            <li><strong>Option A - L'Empathie (Jet de CŒUR — DD 15) :</strong> Aura tente d'expliquer qu'ils viennent guérir le monde de la Mue Noire.
              <ul className="list-circle pl-5 mt-1 text-sm">
                <li><strong>Réussite :</strong> Le Duc hésite. Ses serres lâchent le trône. "Guérir...?" murmure-t-il, confondu. Il va attaquer, mais son doute le rend plus faible : <strong>sa CA passe de 16 à 14</strong> pour tout le combat.</li>
              </ul>
            </li>
            <li><strong>Option B - L'Attaque Directe :</strong> Kael charge immédiatement.
              <ul className="list-circle pl-5 mt-1 text-sm">
                <li><strong>Résultat :</strong> Le Duc s'exclame : "La violence ! Comme toujours !". Le combat commence et le Duc gagne <strong>+2 à son jet d'Initiative</strong>.</li>
              </ul>
            </li>
          </ul>
        </ActionBox>

        <h3 className="font-display text-2xl font-bold text-slate-700 mt-8 mb-4">
          SCÈNE 3 : LE COMBAT DU BLIZZARD
        </h3>
        
        <CombatBox title="Statistiques du Boss : Le Duc Blizzard">
          <ul className="list-disc pl-5 space-y-2 mb-6">
            <li><strong>Points de Vie (PV) :</strong> 50</li>
            <li><strong>Classe d'Armure (CA) :</strong> 16 (ou 14 si l'interaction a réussi)</li>
            <li><strong>Mouvement :</strong> Il vole au-dessus de la salle, hors de portée du corps-à-corps direct.</li>
          </ul>

          <h4 className="font-bold text-blue-800 mb-2 flex items-center gap-2">
            <span className="text-xl">❄️</span> Phase 1 : La Tempête en Piqué (PV 50 à 25)
          </h4>
          <p className="mb-2">Le Duc plonge pour frapper avec ses <em>Serres du Blizzard</em> (+5 pour toucher, 1d8 dégâts).</p>
          <ul className="list-disc pl-5 space-y-2 mb-6">
            <li><strong>L'Astuce Tactique :</strong> Il y a de grands piliers de glace dans la salle. Si les héros se cachent derrière un pilier, le Duc le percute. Il tombe au sol et devient <strong>vulnérable</strong> (Avantage aux attaques de MUSCLE) pour un tour.</li>
          </ul>

          <h4 className="font-bold text-blue-800 mb-2 flex items-center gap-2">
            <span className="text-xl">❄️</span> Phase 2 : Le Rayon de Glace Noire (PV 25 à 0)
          </h4>
          <p className="mb-2">Le Duc se pose sur son trône et crache un <em>Rayon Congelant</em> de vent noir.</p>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Le Risque :</strong> Si un héros rate un jet de <strong>VITESSE (DD 14)</strong>, il est gelé sur place et perd son prochain tour.</li>
            <li><strong>L'Astuce Magique :</strong> Aura peut incliner un miroir de glace pour réfléchir le rayon. Le Duc se gèle lui-même ses propres ailes, perdant <strong>10 PV d'un coup</strong>.</li>
          </ul>
        </CombatBox>

        <h3 className="font-display text-2xl font-bold text-slate-700 mt-8 mb-4">
          SCÈNE 4 : LE DILEMME FINAL (Le Choix Crucial)
        </h3>
        <ReadAloud title="Texte à lire à voix haute (D'une voix douce) :">
          "Le Duc Blizzard s'effondre. Il ne peut plus voler. L'armure de Glace Noire sur sa poitrine est fissurée. Ses grands yeux jaunes vous regardent avec une tristesse infinie. 'Vous avez gagné... prenez le cristal... laissez-moi m'endormir dans le froid,' murmure-t-il. Vous approchez. Le goudron gelé enserre son cœur. Vous avez un choix à faire."
        </ReadAloud>

        <ActionBox title="Le Choix du Héros:">
          <ul className="list-disc pl-5 space-y-4">
            <li><strong>Choix 1 : La Force Brute.</strong> Vous pulvérisez l'armure de fer d'un coup de dague.
              <ul className="list-circle pl-5 mt-1 text-sm">
                <li><strong>Conséquence :</strong> La glace éclate, vous avez le cristal. Mais le Duc s'éteint pour toujours dans un souffle de givre.</li>
              </ul>
            </li>
            <li><strong>Choix 2 : La Fonte Douce (Jet de MAGIE/CŒUR — DD 15 ou 11 avec aide).</strong> Vous utilisez la chaleur du Cristal Rouge de Vulcain pour réchauffer lentement l'oiseau.
              <ul className="list-circle pl-5 mt-1 text-sm">
                <li><strong>Conséquence (Réussite) :</strong> La Glace Noire fond et devient de l'eau claire. Le Duc retrouve sa blancheur éclatante et sa sagesse. Il vous tend lui-même le <strong>Cristal Azur de la Paix</strong>.</li>
              </ul>
            </li>
          </ul>
        </ActionBox>

        <div className="mt-8 p-6 bg-blue-50 border-2 border-blue-200 rounded-2xl">
          <h3 className="font-display text-xl font-bold text-blue-800 mb-4">RÉCOMPENSE ET RÉVÉLATION</h3>
          <p className="text-blue-800 mb-4">Le Duc vous offre l'<strong>Amulette des Vents du Nord</strong> (Loot Légendaire : Permet de flotter à volonté et donne +3 PV max).</p>
          
          <h4 className="font-bold text-blue-900 mb-2">Conclusion du Chapitre :</h4>
          <p className="text-blue-800 mb-4">Les quatre Cristaux (Jaune, Vert, Rouge, Bleu) s'unissent sur votre couronne et projettent un faisceau de lumière droit vers le centre de l'océan.</p>
          <p className="text-blue-800 mb-6">Le Duc murmure : "Le faisceau indique la <strong>Faille du Monde</strong>... là où dort la Machine Originelle. C'est elle qui crée la brume. Vous êtes prêts pour le voyage final".</p>

          <div className="bg-white/60 p-4 rounded-xl border border-blue-100">
            <p className="font-bold text-blue-900 mb-1">💡 LE CONSEIL DU VIEUX SAGE : LA PITIÉ DU HÉROS</p>
            <p className="italic text-blue-800 text-sm">Dis à ton enfant : "Parfois, la vraie force n'est pas de vaincre le méchant, mais de comprendre qu'il souffrait et de l'aider. En sauvant le Duc, tu t'es fait un allié très puissant pour la fin du monde !"</p>
          </div>
        </div>
      </section>
    </div>
  );
}
