import React from 'react';
import { ReadAloud, CombatBox, ActionBox, InfoBox } from '../../components/StoryBlocks';

export default function Part4() {
  return (
    <div className="space-y-12">
      {/* CHAPITRE 8 */}
      <section id="chap8">
        <h2 className="font-display text-3xl font-bold text-slate-800 mb-6 border-b-2 border-slate-200 pb-2 mt-12">
          CHAPITRE 8 : LA FAILLE DU MONDE
        </h2>
        <div className="mb-6 text-slate-700">
          <p><strong>Niveau recommandé :</strong> 4 (Héros Légendaires)</p>
          <p><strong>Lieu :</strong> Le Maelström Noir (Centre de l'Océan de Pangéa)</p>
          <p><strong>Ambiance :</strong> Épique, tempétueuse, fin du monde imminente.</p>
        </div>

        <h3 className="font-display text-2xl font-bold text-slate-700 mt-8 mb-4">
          SCÈNE 1 : L'ARMADA DE L'ESPOIR (Rassemblement)
        </h3>
        <ReadAloud title="Texte à lire à voix haute (D'une voix solennelle) :">
          "Guidée par le faisceau éblouissant de vos quatre Cristaux du Rire, votre Bulle-Nuage quitte les Pics d'Argent. Le voyage dure plusieurs jours, mais la rumeur de vos exploits a voyagé plus vite que le vent.<br/><br/>
          Lorsque vous arrivez au-dessus de la Faille du Monde, le spectacle est à couper le souffle. La mer est d'un noir d'encre, tourbillonnant dans un entonnoir géant qui s'enfonce vers les abysses. Mais autour de ce gouffre, vous n'êtes pas seuls. Des centaines d'animaux sont rassemblés sur des radeaux et des icebergs. Vous reconnaissez vos amis : Polaire l'ours sur son bloc de glace, Pince-Mi le crabe sur sa forteresse flottante, et Vulcain qui observe depuis un navire échoué. Tous poussent un cri de joie en voyant vos cristaux briller ! C'est l'Armada de l'Espoir, venue pour vous aider à ouvrir le chemin."
        </ReadAloud>

        <ActionBox title="Le Choix du Champion (Bénédiction finale)">
          <p className="mb-4">Avant de plonger, vous pouvez recevoir l'aide d'un seul allié. Ce choix modifiera vos capacités pour tout le reste de l'aventure.</p>
          <ul className="list-disc pl-5 space-y-4">
            <li><strong>Le Soutien de Polaire (Le Cœur de Givre) :</strong> Il vous offre sa "Soupe des Héros".
              <ul className="list-circle pl-5 mt-1 text-sm">
                <li><strong>Mécanique :</strong> Vous gagnez <strong>+15 PV temporaires</strong>. Toutes vos attaques de MUSCLE ont une chance de geler les ennemis (Vitesse à 0 pour un tour).</li>
              </ul>
            </li>
            <li><strong>Le Soutien de Pince-Mi (La Carapace du Bâtisseur) :</strong> Il installe une armure de coquillages sur vous.
              <ul className="list-circle pl-5 mt-1 text-sm">
                <li><strong>Mécanique :</strong> Votre <strong>Classe d'Armure (CA) augmente de +3</strong>, vous rendant presque intouchable pour les petits monstres.</li>
              </ul>
            </li>
            <li><strong>Le Soutien de Vulcain (L'Étincelle de Forge) :</strong> Il infuse votre arme de chaleur.
              <ul className="list-circle pl-5 mt-1 text-sm">
                <li><strong>Mécanique :</strong> Vos attaques de <strong>MAGIE</strong> infligent <strong>+1d8 dégâts de feu</strong> supplémentaires à chaque coup.</li>
              </ul>
            </li>
          </ul>
        </ActionBox>

        <h3 className="font-display text-2xl font-bold text-slate-700 mt-8 mb-4">
          SCÈNE 2 : LE PLONGEON DANS LE MAELSTRÖM (Défi de Survie)
        </h3>
        <ReadAloud title="Texte à lire à voix haute :">
          "Vous prenez une immense inspiration et vous plongez tête la première dans l'œil du Maelström Noir ! Le choc est d'une violence inouïe. L'eau noire tourne à une vitesse vertigineuse. La pression écrase vos poumons, et le goudron essaie de s'infiltrer dans vos yeux. Vous devez traverser trois zones de danger pour atteindre le fond."
        </ReadAloud>

        <ActionBox title="L'Épreuve de la Descente (Bac à sable de résistance)">
          <p className="mb-4">Chaque héros doit tenter de surmonter ces obstacles. Un échec n'arrête pas la course, mais inflige des blessures.</p>
          
          <h4 className="font-bold text-slate-800 mb-2">1. La Zone de Débris (Test de VITESSE)</h4>
          <p className="mb-2">Un vieux sous-marin rouillé tourbillonne droit sur vous !</p>
          <ul className="list-disc pl-5 space-y-2 mb-4">
            <li><strong>Jet de VITESSE — DD 14 :</strong>
              <ul className="list-circle pl-5 mt-1 text-sm space-y-1">
                <li><strong>Réussite :</strong> Vous slalomez entre les morceaux de ferraille avec l'agilité d'un dauphin.</li>
                <li><strong>Échec :</strong> Le sous-marin vous percute violemment. Vous perdez <strong>2d6 PV</strong>.</li>
              </ul>
            </li>
          </ul>

          <h4 className="font-bold text-slate-800 mb-2">2. Le Courant Acide (Test de MUSCLE)</h4>
          <p className="mb-2">Le goudron devient pur et commence à brûler votre peau.</p>
          <ul className="list-disc pl-5 space-y-2 mb-4">
            <li><strong>Jet de MUSCLE — DD 15 :</strong>
              <ul className="list-circle pl-5 mt-1 text-sm space-y-1">
                <li><strong>Réussite :</strong> Vous nagez de toutes vos forces et traversez la nappe toxique.</li>
                <li><strong>Échec :</strong> L'acide ronge votre endurance. Vous aurez un <strong>Désavantage</strong> (lancer 2 dés, garder le plus petit) sur votre prochain jet de combat.</li>
              </ul>
            </li>
          </ul>

          <h4 className="font-bold text-slate-800 mb-2">3. La Pression des Abysses (Test de CŒUR)</h4>
          <p className="mb-2">L'obscurité est totale. Le murmure de l'Entité Goudron résonne : "Abandonnez...".</p>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Jet de CŒUR — DD 13 :</strong>
              <ul className="list-circle pl-5 mt-1 text-sm space-y-1">
                <li><strong>Réussite :</strong> Vos cristaux brillent et dissipent les pensées noires.</li>
                <li><strong>Échec :</strong> La peur vous paralyse un instant. Vous perdez l'Initiative d'office pour la prochaine rencontre.</li>
              </ul>
            </li>
          </ul>
        </ActionBox>

        <h3 className="font-display text-2xl font-bold text-slate-700 mt-8 mb-4">
          SCÈNE 3 : LA STATION D'ÉPURATION ALPHA
        </h3>
        <ReadAloud title="Texte à lire à voix haute :">
          "Vous traversez enfin le courant furieux et vous atterrissez sur un sol en damier d'acier, à l'intérieur d'un dôme d'énergie crépitant. Vous êtes dans l'Antichambre de la Machine Originelle. Une porte colossale, ornée d'un engrenage rouillé, barre la route. Devant elle, quatre réceptacles vides attendent vos cristaux. Un panneau humain clignote : 'INSERTION DES FILTRES ÉLÉMENTAIRES REQUISE'."
        </ReadAloud>

        <ActionBox title="L'Énigme des Cristaux (Réflexion)">
          <p className="mb-4">Les héros doivent placer les cristaux dans le bon ordre selon les inscriptions gravées.</p>
          <ul className="list-disc pl-5 space-y-2 mb-4">
            <li><strong>Réceptacle Nord :</strong> "Je donne la vie aux feuilles mortes." (Cristal Vert)</li>
            <li><strong>Réceptacle Sud :</strong> "Je suis le souffle du vent polaire." (Cristal Bleu)</li>
            <li><strong>Réceptacle Est :</strong> "Je fais bouillir la mer." (Cristal Rouge)</li>
            <li><strong>Réceptacle Ouest :</strong> "Je suis le sourire du sable chaud." (Cristal Jaune)</li>
          </ul>
          <p className="font-bold text-slate-800">Conséquence : <span className="font-normal">Si vous vous trompez, une décharge électrique vous inflige <strong>1 PV</strong> par erreur. Lorsque les quatre sont placés, la porte s'ouvre avec un bruit de tonnerre.</span></p>
        </ActionBox>

        <h3 className="font-display text-2xl font-bold text-slate-700 mt-8 mb-4">
          SCÈNE 4 : LE MÉGALODON D'ACIER (Mini-Boss)
        </h3>
        <ReadAloud title="Texte à lire à voix haute :">
          "La boue noire qui tapissait les murs se rassemble brutalement. Elle prend la forme d'un requin préhistorique mélangeant métal et goudron : le Mégalodon d'Acier. Ses mâchoires pourraient avaler un navire. Il pousse un rugissement de métal déchiré et charge droit sur vous !"
        </ReadAloud>

        <CombatBox title="Combat et Tactique">
          <ul className="list-disc pl-5 space-y-2 mb-4">
            <li><strong>Mini-Boss :</strong> Mégalodon d'Acier (45 PV, CA 15).</li>
            <li><strong>Attaque :</strong> Morsure Broyeuse (+6 pour toucher, 2d6+2 dégâts).</li>
            <li><strong>L'Astuce du Maître :</strong> La salle est pleine de néons électriques. Si vous utilisez votre <strong>MAGIE (DD 14)</strong> pour projeter de l'eau sur un néon pendant que le requin passe dessous, il est électrocuté et perd <strong>15 PV</strong> d'un coup.</li>
          </ul>
        </CombatBox>

        <div className="mt-8 p-6 bg-indigo-50 border-2 border-indigo-200 rounded-2xl">
          <h3 className="font-display text-xl font-bold text-indigo-800 mb-4">RÉCOMPENSE ÉPIQUE</h3>
          <p className="text-indigo-800 mb-4">Après la défaite du requin, vous trouvez le dernier vestiaire des ingénieurs.</p>
          <p className="font-bold text-indigo-900 mb-2">Loot Ultime (Lancer 1d6) :</p>
          <ol className="list-decimal pl-5 space-y-2 text-indigo-800 mb-6">
            <li><strong>Le Pendentif de l'Océan :</strong> Rend tous vos PV et augmente votre maximum de <strong>+5</strong>.</li>
            <li><strong>L'Hyper-Déflecteur :</strong> Permet de renvoyer une attaque magique sur le lanceur.</li>
            <li><strong>Le Trident du Roi Pélagique :</strong> Votre arme ultime. <strong>+1d10 dégâts</strong> et <strong>+2 CA</strong>.</li>
            <li>(Autres résultats : potions et gantelets de force).</li>
          </ol>
          <div className="bg-white/60 p-4 rounded-xl border border-indigo-100">
            <p className="font-bold text-indigo-900 mb-1">💡 LE CONSEIL DU VIEUX SAGE : LA FIN DU VOYAGE</p>
            <p className="italic text-indigo-800 text-sm">Dis à tes enfants : "Vous avez réuni l'Armada, survécu au Maelström et vaincu le gardien d'acier. Il ne reste plus qu'une porte. Derrière elle se cache l'Entité Goudron. Respirez un grand coup, car le destin de Pangéa se joue maintenant."</p>
          </div>
        </div>
      </section>

      {/* CHAPITRE 9 */}
      <section id="chap9">
        <h2 className="font-display text-3xl font-bold text-slate-800 mb-6 border-b-2 border-slate-200 pb-2 mt-12">
          CHAPITRE 9 : LE CŒUR DU RÉACTEUR ET L'ENTITÉ GOUDRON
        </h2>
        <div className="mb-6 text-slate-700">
          <p><strong>Niveau recommandé :</strong> 5 (Héros Légendaires)</p>
          <p><strong>Lieu :</strong> La Chambre du Projet Éden (Centre de la Terre)</p>
          <p><strong>Ambiance :</strong> Solennelle, vibrante, odeur de métal et de larmes anciennes.</p>
        </div>

        <h3 className="font-display text-2xl font-bold text-slate-700 mt-8 mb-4">
          SCÈNE 1 : L'ARÈNE DU VIDE (La Révélation)
        </h3>
        <ReadAloud title="Texte à lire à voix haute (D'une voix épique et solennelle) :">
          "La porte de bronze s'efface comme un mirage. Vous pénétrez dans une sphère gigantesque, si vaste que vous pourriez y faire tenir la Forêt des Murmures toute entière. Il n'y a ni haut ni bas, vous flottez dans l'immensité. Au centre flotte la Machine Originelle, un cœur mécanique d'acier blanc. Mais elle est étouffée par une masse visqueuse et sombre qui pulse comme une blessure ouverte.<br/><br/>
          Soudain, la masse noire se décolle de la machine et s'assemble pour former une silhouette titanesque, vaguement humaine, mais sans visage. Des dizaines de tentacules immenses fouettent le vide. La chose n'a pas d'yeux, mais elle vous fixe. Une voix résonne directement dans votre tête, lourde comme des millénaires de solitude : 'POURQUOI RÉSISTER... LE MONDE EST FATIGUÉ... LAISSE-MOI TOUT ENDORMIR... LAISSE LE NOIR GAGNER'."
        </ReadAloud>

        <ActionBox title="L'Anatomie du Désespoir (Mécaniques de Boss Final)">
          <p className="mb-4">Le MJ explique aux héros que ce combat ne ressemble à aucun autre.</p>
          
          <h4 className="font-bold text-slate-800 mb-2">1. L'Origine du Mal (Test d'ESPRIT - Aura)</h4>
          <p className="mb-2">Aura tente de comprendre ce qu'est réellement ce monstre.</p>
          <ul className="list-disc pl-5 space-y-2 mb-4">
            <li><strong>Jet de MAGIE — DD 15 :</strong>
              <ul className="list-circle pl-5 mt-1 text-sm space-y-1">
                <li><strong>Réussite :</strong> Aura comprend que l'Entité n'est pas un monstre, mais l'accumulation de toute la tristesse et de la pollution laissées par les anciens humains. Elle n'a pas de plan pour conquérir le monde, elle a juste mal et veut que tout s'arrête.</li>
                <li><strong>Conséquence :</strong> Aura découvre le <strong>Point Faible</strong> : la "Graine de Tristesse" cachée dans le torse de l'entité.</li>
              </ul>
            </li>
          </ul>

          <h4 className="font-bold text-slate-800 mb-2">2. Sentir la Menace (Test de PERCEPTION - Kael)</h4>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Jet de PERCEPTION — DD 14 :</strong>
              <ul className="list-circle pl-5 mt-1 text-sm space-y-1">
                <li><strong>Réussite :</strong> Kael remarque que les parois de la salle sont des grilles de ventilation géantes qui aspirent l'air. Il peut les utiliser pour affaiblir la structure liquide du monstre.</li>
                <li><strong>Échec :</strong> Kael est submergé par les murmures de l'Entité. Il perd <strong>1 point de CŒUR</strong> de manière temporaire.</li>
              </ul>
            </li>
          </ul>
        </ActionBox>

        <h3 className="font-display text-2xl font-bold text-slate-700 mt-8 mb-4">
          SCÈNE 2 : LE COMBAT FINAL - PHASE 1 (L'Océan de Boue)
        </h3>
        
        <CombatBox title="Statistiques du Boss : L'Entité Goudron">
          <ul className="list-disc pl-5 space-y-2 mb-6">
            <li><strong>Points de Vie (PV) :</strong> 100.</li>
            <li><strong>Classe d'Armure (CA) :</strong> 15 (La boue absorbe les coups).</li>
            <li><strong>Immunité :</strong> Les attaques physiques classiques font moitié moins de dégâts.</li>
          </ul>

          <h4 className="font-bold text-slate-800 mb-2">Les Actions de l'Entité (Tour du MJ)</h4>
          <ul className="list-disc pl-5 space-y-2 mb-6">
            <li><strong>Fouet de Tristesse :</strong> Elle claque deux tentacules sur les héros (+6 pour toucher, 2d6 dégâts).</li>
            <li><strong>Vague d'Engourdissement :</strong> Une onde de brume grise. Les héros doivent réussir un jet de <strong>CŒUR (DD 14)</strong> pour ne pas perdre espoir. En cas d'échec, ils ont un malus de -2 aux dégâts.</li>
          </ul>

          <h4 className="font-bold text-slate-800 mb-2">Actions des Héros (Infinités de choix)</h4>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Utiliser l'Environnement :</strong> Kael peut frapper le goudron pour le projeter vers les ventilateurs. Si réussi, la succion retire <strong>10 PV</strong> automatiquement à l'Entité.</li>
            <li><strong>Attaque Combinée :</strong> Aura utilise sa lanterne pour liquéfier le goudron pendant que Kael frappe avec le Trident. (Jet de dé avec <strong>Avantage</strong>).</li>
          </ul>
        </CombatBox>

        <h3 className="font-display text-2xl font-bold text-slate-700 mt-8 mb-4">
          SCÈNE 3 : LE RAYON CORROMPU ET LE POINT FAIBLE
        </h3>
        <ReadAloud title="Texte à lire à voix haute (Phase 2 - 50 PV restants) :">
          "Le monstre hurle en silence ! Dans un geste de rage, il écarte les bras qui protégeaient son torse. Là, vous la voyez : une énorme sphère grise qui palpite comme un cœur malade. C'est la Graine de Tristesse! Mais l'Entité concentre toute son énergie noire pour tirer un rayon laser de goudron géant ! Vous n'avez qu'une chance de frapper avant que le rayon ne vous désintègre."
        </ReadAloud>

        <CombatBox title="Le Coup Critique (La Frappe sur le Noyau)">
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Action :</strong> Les héros doivent viser la sphère grise.</li>
            <li><strong>Mécanique :</strong> Jet contre <strong>CA 14</strong>.</li>
            <li><strong>Réussite :</strong> Le coup inflige les dégâts normaux <strong>+3 d'office</strong>, et on lance un dé supplémentaire de dégâts (1d8) car c'est un point faible.</li>
            <li><strong>Échec du tour :</strong> Si l'Entité n'est pas abattue, elle tire son rayon. Les héros doivent réussir un jet de <strong>VITESSE (DD 15)</strong> pour ne pas perdre <strong>3d6 PV</strong>.</li>
          </ul>
        </CombatBox>

        <h3 className="font-display text-2xl font-bold text-slate-700 mt-8 mb-4">
          SCÈNE 4 : LE SACRIFICE DE LUMIGNON (Le Moment Émotionnel)
        </h3>
        <ReadAloud title="Texte à lire à voix haute :">
          "L'Entité prépare une seconde attaque, plus puissante. Éon est trop faible pour se défendre. C'est alors que Lumignon, votre petit ami qui vous suit depuis le début, s'envole de votre épaule. Il brille d'une lumière orange qu'il n'a jamais eue.<br/><br/>
          — 'Ne pleurez pas, les géants,' murmure-t-il avec un petit sourire. 'Les étoiles appartiennent au ciel, et les guides... ils finissent toujours par trouver leur chemin.'<br/><br/>
          Il fonce tête baissée dans le noyau de l'Entité, éclatant dans une étincelle de joie pure. L'explosion de lumière bloque l'attaque finale et force l'Entité à s'effondrer au sol."
        </ReadAloud>

        <h3 className="font-display text-2xl font-bold text-slate-700 mt-8 mb-4">
          SCÈNE 5 : L'ULTIME DILEMME (La Fin de l'Histoire)
        </h3>
        <ReadAloud title="Texte à lire à voix haute (Le choix moral) :">
          "L'Entité ne ressemble plus à un monstre titanesque. C'est une petite flaque de goudron qui pleure au centre de la machine. La voix dans votre tête est devenue toute petite, comme un enfant qui a peur du noir : 'Ça fait mal... pourquoi tout le monde nous a oubliés ?... je veux juste disparaître...'.<br/><br/>
          Votre couronne avec les 4 Cristaux se met à briller d'une lumière arc-en-ciel. Bouboule, Aura, Kael... vous avez gagné. Mais que faites-vous de ce reste de tristesse ?"
        </ReadAloud>

        <ActionBox title="Le Choix Final :">
          <ol className="list-decimal pl-5 space-y-4">
            <li><strong>La Destruction :</strong> Un dernier coup de grâce pour effacer cette pollution à jamais. (L'océan est sauvé, mais la tristesse reste un souvenir amer).</li>
            <li><strong>La Guérison :</strong> Utiliser la magie des Cristaux et votre <strong>CŒUR (DD 12)</strong> pour transformer cette peine en joie. (Le goudron devient un Esprit de l'Eau pure dorée).</li>
          </ol>
        </ActionBox>
      </section>
    </div>
  );
}
