import React from 'react';
import { ReadAloud, CombatBox, ActionBox, InfoBox } from '../../components/StoryBlocks';

export default function Part3() {
  return (
    <div className="space-y-12">
      {/* CHAPITRE 7 */}
      <section id="chap7">
        <h2 className="font-display text-3xl font-bold text-slate-800 mb-6 border-b-2 border-slate-200 pb-2 mt-12 flex items-center gap-2">
          <span className="text-2xl">🦅</span> CHAPITRE 7 : LE VOL DES CORBEAUX-ESPIONS
        </h2>

        <h3 className="font-display text-2xl font-bold text-slate-700 mt-8 mb-4">
          La Narration : La Chasse Aérienne
        </h3>
        <ReadAloud title="Texte à lire à voix haute :">
          "L'ascenseur t'a propulsé au sommet de la tour, en plein ciel ! Tu débouches sur une plateforme à ciel ouvert. Le voleur n'est plus là... il s'est envolé à dos de <strong>Grand Corbeau des Brumes</strong>, une créature aux plumes sombres comme l'orage.<br/><br/>
          Tu n'as pas le temps d'hésiter. Tu déploies tes ailes d'or et tu plonges dans le vide. Le vent siffle contre tes écailles. Mais alors que tu gagnes de la vitesse, une nuée de corbeaux-espions se forme autour de toi. Ils ne cherchent pas à te blesser, mais à te harceler, à piquer tes ailes pour te faire perdre ton équilibre et te ralentir pendant que leur maître s'échappe vers la Forteresse Noire."
        </ReadAloud>

        <h3 className="font-display text-2xl font-bold text-slate-700 mt-8 mb-4 flex items-center gap-2">
          <span className="text-2xl">⚔️</span> Mécanique de Combat Aérien
        </h3>
        
        <CombatBox title="Le Combat dans les Airs">
          <ul className="list-disc pl-5 space-y-4">
            <li><strong>Vitesse de Vol :</strong> Tu dois maintenir une vitesse constante. (Lance un <strong>D20 d'Athlétisme</strong> à chaque tour).</li>
            <li><strong>Les Corbeaux :</strong> Ils attaquent en nuée.
              <ul className="list-circle pl-5 mt-2 space-y-2 text-sm">
                <li><strong>PV de la Nuée :</strong> 12.</li>
                <li><strong>Attaque :</strong> <em>Coup de bec harcelant</em>. (1d4 dégâts et tu perds de l'altitude).</li>
              </ul>
            </li>
            <li><strong>Ton Action :</strong> Tu peux utiliser ton <strong>Souffle de Lumière</strong> pour disperser la nuée d'un coup, ou faire des vrilles acrobatiques pour les semer.</li>
          </ul>
        </CombatBox>
      </section>

      {/* CHAPITRE 8 */}
      <section id="chap8">
        <h2 className="font-display text-3xl font-bold text-slate-800 mb-6 border-b-2 border-slate-200 pb-2 mt-12 flex items-center gap-2">
          <span className="text-2xl">🏰</span> CHAPITRE 8 : L'INFILTRATION DE LA FORTERESSE NOIRE
        </h2>

        <h3 className="font-display text-2xl font-bold text-slate-700 mt-8 mb-4">
          La Narration : Les Remparts du Silence
        </h3>
        <ReadAloud title="Texte à lire à voix haute :">
          "La Forteresse Noire n'est pas faite pour être accueillante. Ses murs de basalte sont lisses comme du verre et des pointes de fer noir hérissent chaque tour. Pour entrer, tu ne peux pas passer par la grande porte : elle est gardée par un Troll des Roches endormi.<br/><br/>
          Tu t'es posé sur une corniche étroite, juste en dessous d'une fenêtre à barreaux. L'air ici est chargé d'une électricité statique qui fait pétiller tes écailles. À l'intérieur, tu entends des bruits de pas précipités et le murmure plaintif de Gribouille le Lutin. Le temps presse, car l'Éclat de Soleil commence à pulser d'une lumière noire inquiétante."
        </ReadAloud>

        <h3 className="font-display text-2xl font-bold text-slate-700 mt-8 mb-4 flex items-center gap-2">
          <span className="text-2xl">🎲</span> Épreuve 1 : L'Infiltration (Discrétion ou Force)
        </h3>
        <p className="mb-4 text-slate-700">Le joueur doit décider comment pénétrer dans la salle principale sans réveiller le Troll ou donner l'alerte.</p>

        <ActionBox title="Options d'Infiltration">
          <ul className="list-disc pl-5 space-y-4">
            <li><strong>Option A : La Voie de l'Ombre.</strong> Passer par le conduit d'aération.
              <ul className="list-circle pl-5 mt-2 space-y-2 text-sm">
                <li><strong>Jet de dé :</strong> D20 + Agilité (Discrétion) DD 12.</li>
                <li><strong>Réussite :</strong> Tu te glisses comme une couleuvre et tu arrives directement au-dessus de la salle du trône, sur les poutres.</li>
                <li><strong>Échec :</strong> Ta queue renverse un vieux seau en fer. <em>CLANG !</em> Le Troll grogne dans son sommeil. Tu dois rester immobile pendant un tour (Jet de Constitution) pour ne pas te faire repérer.</li>
              </ul>
            </li>
            <li><strong>Option B : La Voie du Petit Dragon Fort.</strong> Forcer les barreaux de la fenêtre.
              <ul className="list-circle pl-5 mt-2 space-y-2 text-sm">
                <li><strong>Jet de dé :</strong> D20 + Force (Athlétisme) DD 14.</li>
                <li><strong>Réussite :</strong> Les barreaux se tordent dans un grincement sourd. Tu entres avec classe.</li>
                <li><strong>Échec :</strong> Tu te coinces une aile entre deux barreaux. Tu perds <strong>2 PV</strong> en te dégageant et tu fais du bruit.</li>
              </ul>
            </li>
          </ul>
        </ActionBox>

        <h3 className="font-display text-2xl font-bold text-slate-700 mt-8 mb-4 flex items-center gap-2">
          <span className="text-2xl">🕵️</span> Épreuve 2 : La Salle des Miroirs de Brume
        </h3>
        <p className="mb-4 text-slate-700">Une fois à l'intérieur, le couloir qui mène au trône est piégé. Des miroirs magiques créent des doubles de toi-même qui imitent tous tes mouvements, t'empêchant d'avancer.</p>

        <ActionBox title="Les Miroirs Magiques">
          <ul className="list-disc pl-5 space-y-4">
            <li><strong>L'Interaction :</strong> Gribouille est au bout du couloir, il te regarde avec confusion. Il y a quatre "toi" dans les miroirs. Seul l'un d'eux est un reflet, les autres sont des <strong>Ombres Mimétiques</strong>.</li>
            <li><strong>Jet de Sagesse (Perception) :</strong> DD 10.
              <ul className="list-circle pl-5 mt-2 space-y-2 text-sm">
                <li><strong>Réussite :</strong> Tu remarques que l'une des images n'a pas la même couleur d'yeux que toi. C'est la sortie !</li>
                <li><strong>Échec :</strong> Tu fonces dans un miroir solide. <em>Aïe !</em> Tu es un peu étourdi.</li>
              </ul>
            </li>
          </ul>
        </ActionBox>

        <h3 className="font-display text-2xl font-bold text-slate-700 mt-8 mb-4 flex items-center gap-2">
          <span className="text-2xl">⚔️</span> Scène de Combat : Les Gardes-Ombres
        </h3>
        <p className="mb-4 text-slate-700">Juste avant d'atteindre Gribouille, deux <strong>Gardes-Ombres</strong> (des armures vides animées par la brume) se matérialisent.</p>

        <CombatBox title="Statistiques des Gardes-Ombres :">
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>PV :</strong> 10 chacun.</li>
            <li><strong>CA :</strong> 13.</li>
            <li><strong>Capacité Spéciale :</strong> <em>Immatériel</em>. Les attaques physiques (griffes) font moitié moins de dégâts, mais ton <strong>Souffle de Lumière</strong> fait des dégâts normaux (et ils détestent ça !).</li>
          </ul>
        </CombatBox>

        <h3 className="font-display text-2xl font-bold text-slate-700 mt-8 mb-4 flex items-center gap-2">
          <span className="text-2xl">📜</span> Le Choix de Fin de Chapitre
        </h3>
        <p className="mb-4 text-slate-700">Une fois les gardes vaincus, tu arrives devant Gribouille.</p>
        <ReadAloud title="Texte à lire à voix haute :">
          "Le petit lutin serre l'Éclat contre lui. Il pleure. Ses larmes s'évaporent en fumée noire au contact de la pierre. Il ne t'attaque pas, il a l'air d'avoir oublié que tu es là."
        </ReadAloud>

        <ActionBox title="Le MJ demande au joueur :">
          <ul className="list-disc pl-5 space-y-2">
            <li>Est-ce que tu essaies de lui parler doucement pour le rassurer ? (<strong>Jet de Charisme</strong>)</li>
            <li>Est-ce que tu profites de sa tristesse pour lui arracher l'Éclat des mains ? (<strong>Jet de Dextérité</strong>)</li>
            <li>Est-ce que tu rugis pour lui faire peur et le faire fuir ? (<strong>Jet d'Intimidation</strong>)</li>
          </ul>
        </ActionBox>
      </section>

      {/* CHAPITRE 9 */}
      <section id="chap9">
        <h2 className="font-display text-3xl font-bold text-slate-800 mb-6 border-b-2 border-slate-200 pb-2 mt-12 flex items-center gap-2">
          <span className="text-2xl">🌑</span> CHAPITRE 9 : LE DUEL DES FLAMMES ET DES OMBRES
        </h2>

        <h3 className="font-display text-2xl font-bold text-slate-700 mt-8 mb-4">
          La Narration : Le Cœur des Ténèbres
        </h3>
        <ReadAloud title="Texte à lire à voix haute :">
          "À l'instant où tu tues le dernier Garde-Ombre, l'air dans la salle du trône devient glacial. Gribouille lâche l'Éclat de Soleil qui lévite désormais au-dessus de l'autel de basalte. La pierre sacrée, corrompue par la tristesse et la magie noire, explose dans une déferlante de fumée violette.<br/><br/>
          De cette fumée surgit le <strong>Seigneur des Brumes</strong>. Il n'a pas de forme fixe, mais il imite ta silhouette, devenant un dragon colossal fait de nuages d'orage et d'éclairs sombres. Ses yeux sont des puits de vide. 'Petit dragonneau d'or,' gronde-t-il, 'ta lumière n'est qu'une bougie face à l'éternité de mon ombre !' Derrière lui, l'Éclat de Soleil palpite comme un cœur malade. Le combat final commence."
        </ReadAloud>

        <h3 className="font-display text-2xl font-bold text-slate-700 mt-8 mb-4 flex items-center gap-2">
          <span className="text-2xl">👑</span> BOSS : LE SEIGNEUR DES BRUMES
        </h3>
        
        <CombatBox title="Statistiques du Boss">
          <ul className="list-disc pl-5 space-y-2 mb-4">
            <li><strong>Points de Vie (PV) :</strong> 35.</li>
            <li><strong>Classe d'Armure (CA) :</strong> 15.</li>
            <li><strong>Capacité :</strong> <em>Forme Vaporeuse</em>. Il est difficile à toucher avec des attaques physiques.</li>
            <li><strong>Attaque 1 :</strong> <em>Griffe de Brouillard</em>. (+4 pour toucher, 1d6+2 dégâts de froid).</li>
            <li><strong>Attaque 2 :</strong> <em>Murmure de Peur</em>. (Le joueur doit faire un jet de <strong>Sagesse DD 12</strong> ou être effrayé et ne pas pouvoir approcher pendant un tour).</li>
          </ul>
        </CombatBox>

        <h3 className="font-display text-2xl font-bold text-slate-700 mt-8 mb-4 flex items-center gap-2">
          <span className="text-2xl">🎲</span> MÉCANIQUE DE COMBAT : LES 3 PHASES
        </h3>
        <p className="mb-4 text-slate-700">Le combat ne se gagne pas seulement en frappant le Boss, mais en purifiant l'Éclat !</p>

        <ActionBox title="Phase 1 : L'Ombre Menaçante (PV 35 à 25)">
          <p className="mb-2">Le Seigneur des Brumes est solide. Tu dois le frapper pour affaiblir son lien avec l'Éclat.</p>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>L'astuce :</strong> Utiliser ton <strong>Souffle de Lumière</strong> ici est très efficace pour briser sa défense de brume.</li>
          </ul>
        </ActionBox>

        <ActionBox title="Phase 2 : L'Éclat Corrompu (PV 24 à 10)">
          <p className="mb-2">Le Boss devient instable et commence à lancer des projectiles d'ombre depuis l'Éclat.</p>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Action spéciale :</strong> À chaque tour, tu peux choisir d'attaquer le Boss <strong>OU</strong> de rugir vers l'Éclat de Soleil pour lui redonner courage.</li>
            <li><strong>Le Jet :</strong> Un jet de <strong>Charisme (Persuasion) DD 13</strong> réussi rend l'Éclat un peu plus brillant, ce qui inflige <strong>5 points de dégâts</strong> directs au Boss.</li>
          </ul>
        </ActionBox>

        <ActionBox title="Phase 3 : La Lumière Finale (PV moins de 10)">
          <p className="mb-2">Le Seigneur des Brumes tente de s'enfuir en absorbant toute la lumière de la pièce.</p>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>La Narration :</strong> <em>"Le monstre ouvre une gueule béante pour avaler l'Éclat ! C'est le moment ou jamais !"</em></li>
            <li><strong>L'Action Finale :</strong> Le joueur doit réussir un dernier jet d'<strong>Attaque (D20)</strong>. S'il réussit, il ne frappe pas le Boss, mais il percute l'Éclat de Soleil pour libérer toute l'énergie stockée à l'intérieur.</li>
          </ul>
        </ActionBox>

        <h3 className="font-display text-2xl font-bold text-slate-700 mt-8 mb-4 flex items-center gap-2">
          <span className="text-2xl">📜</span> Conclusion Narrative du Combat
        </h3>
        <ReadAloud title="Texte à lire à voix haute :">
          "Ton attaque percute l'Éclat de plein fouet. Un craquement de cristal résonne dans toute la forteresse, suivi d'un flash de lumière blanche si intense que tu dois fermer les yeux. Lorsque tu les rouvres, le Seigneur des Brumes a disparu, dissipé comme la rosée du matin.<br/><br/>
          L'Éclat de Soleil flotte doucement vers tes pattes, vibrant d'une chaleur douce et rassurante. La forteresse de basalte commence à se transformer : les pics de fer se changent en branches fleuries et le sol de pierre devient un tapis de mousse verte. Gribouille le lutin lève les yeux vers toi, ses yeux ne sont plus violets mais d'un bleu clair. 'Merci... j'ai enfin retrouvé mon chemin.'"
        </ReadAloud>

        <div className="mt-8 p-6 bg-amber-50 border-2 border-amber-200 rounded-2xl">
          <h3 className="font-display text-xl font-bold text-amber-800 mb-4 flex items-center gap-2">
            <span className="text-2xl">🎁</span> RÉCOMPENSE FINALE
          </h3>
          <p className="text-amber-800 mb-4">En touchant l'Éclat de Soleil purifié, tu gagnes un nouveau pouvoir : <strong>"L'Écaille du Printemps"</strong>.</p>
          <ul className="list-disc pl-5 text-amber-800">
            <li><strong>Effet :</strong> Une fois par jour, tu peux soigner un allié en le touchant de ton museau (récupère 1d10 PV).</li>
          </ul>
        </div>
      </section>
    </div>
  );
}
