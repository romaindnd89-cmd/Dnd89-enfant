import React from 'react';
import { ReadAloud, CombatBox, ActionBox, InfoBox } from '../../components/StoryBlocks';

export default function Part1() {
  return (
    <div className="space-y-12">
      {/* CHAPITRE 1 */}
      <section id="chap1">
        <h2 className="font-display text-3xl font-bold text-slate-800 mb-6 border-b-2 border-slate-200 pb-2 mt-12 flex items-center gap-2">
          <span className="text-2xl">🏔️</span> CHAPITRE 1 : LE SILENCE DU MATIN BLANC
        </h2>

        <h3 className="font-display text-2xl font-bold text-slate-700 mt-8 mb-4">
          La Scène : Une Nurserie sans Chaleur
        </h3>
        <p className="mb-4 text-slate-700">
          La Citadelle est normalement un lieu de lumière, où les reflets du soleil jouent sur les parois de cristal, créant des arcs-en-ciel qui dansent sur le sol. Mais ce matin, l'atmosphère est lourde. Une brume grisâtre rampe entre les colonnes de glace, et les petites vasques de feu magique qui brûlent d'ordinaire avec une flamme bleue sont éteintes.
        </p>

        <ReadAloud title="La Narration à voix haute :">
          "Tu ouvres un œil, puis l'autre. Le silence est si épais que tu entends le battement de ton propre cœur. Autour de toi, tes frères et sœurs de couvée sont encore plongés dans un sommeil profond, leurs écailles recouvertes d'une fine pellicule de givre noir. Tu t'étires, et tes griffes crissent sur le sol glacé.<br/><br/>
          Ton regard se porte immédiatement vers le centre de la salle : le Piédestal d'Or. Il est vide. L'Éclat de Soleil a disparu, laissant derrière lui une aura de froidure qui te glace les os. À la place de la chaleur bienveillante, tu ne vois qu'une traînée de gelée sombre, une trace poisseuse qui semble avoir été laissée par une créature rampant vers les grandes portes de bronze. Tu es le seul éveillé. La montagne compte sur toi."
        </ReadAloud>

        <ActionBox title="L'Interaction : Le Grand Gardien endormi">
          <p className="mb-4">Au pied du piédestal gît <strong>Vieux-Barbe</strong>, un dragon dont les écailles sont aussi grises que de la pierre. Il est le protecteur de la nurserie, mais il semble pétrifié, le museau recouvert de cette même brume sombre.</p>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>L'objectif :</strong> Le joueur peut tenter d'examiner Vieux-Barbe ou de suivre la trace.</li>
            <li><strong>Indices narratifs :</strong> S'il s'approche de Vieux-Barbe, il remarque une petite fiole brisée à ses pieds. Elle sent l'eau de marais et les champignons pourris. C'est un <strong>Somnifère de Brume</strong>, une concoction utilisée par les Gobelins des Ombres.</li>
          </ul>
        </ActionBox>
      </section>

      {/* CHAPITRE 2 */}
      <section id="chap2">
        <h2 className="font-display text-3xl font-bold text-slate-800 mb-6 border-b-2 border-slate-200 pb-2 mt-12 flex items-center gap-2">
          <span className="text-2xl">❄️</span> CHAPITRE 2 : LA DESCENTE VERS L'INCONNU
        </h2>

        <h3 className="font-display text-2xl font-bold text-slate-700 mt-8 mb-4">
          La Scène : Le Balcon du Ciel
        </h3>
        <p className="mb-4 text-slate-700">
          La sortie de la Citadelle mène à un immense balcon naturel dominant la <strong>Vallée des Brumes</strong>. Pour un jeune dragonneau, le vide est impressionnant. Le vent siffle entre les pics rocheux comme un loup qui hurle.
        </p>

        <ReadAloud title="La Narration à voix haute :">
          "Le vent de la montagne s'engouffre sous tes ailes encore fragiles. Devant toi, le chemin n'est plus qu'une étroite corniche couverte de neige fraîche. Au loin, tu aperçois une petite ombre qui dévale la pente à toute allure, serrant contre elle un sac qui brille d'une lueur dorée étouffée : le voleur !<br/><br/>
          Mais alors que tu t'appuies sur le bord pour t'envoler, un craquement sinistre résonne. Au-dessus de toi, les statues de gargouilles qui ornent l'entrée commencent à s'animer. Leurs yeux de pierre s'allument d'une lueur rouge sang. Elles ne veulent pas te laisser partir."
        </ReadAloud>

        <h3 className="font-display text-2xl font-bold text-slate-700 mt-8 mb-4">
          LE COMBAT DES SENTINELLES DE GRANIT
        </h3>
        
        <h4 className="font-bold text-slate-800 mb-2">L'Ambiance de Bataille</h4>
        <p className="mb-4 text-slate-700">
          Le balcon de cristal, autrefois si pur, devient une arène périlleuse. Le vent hurle, et les gargouilles se détachent de la paroi avec un bruit de pierre broyée. Leurs corps sont faits de granit gris, striés de veines de glace bleue. Elles ne respirent pas, elles ne clignent pas des yeux ; elles sont les gardiennes silencieuses d'un ordre désormais corrompu.
        </p>

        <CombatBox title="Les Statistiques des Monstres">
          <p className="font-bold mb-2">Les Sentinelles de Granit (Gargouilles Mineures)</p>
          <ul className="list-disc pl-5 space-y-2 mb-4">
            <li><strong>PV :</strong> 8 chacune.</li>
            <li><strong>CA :</strong> 12 (Leur peau de pierre est dure, mais elles sont lentes).</li>
            <li><strong>Attaque :</strong> <em>Coup de poing de pierre</em>. (1d4 + 1 de dégâts).</li>
            <li><strong>Capacité Spéciale :</strong> <em>Pétrification momentanée</em>. Si elles te touchent, tu dois faire un jet de <strong>Constitution (D20)</strong>. Si tu fais moins de 8, tes pattes s'alourdissent et tu ne peux pas bouger au prochain tour.</li>
          </ul>
        </CombatBox>

        <ReadAloud title="Narration du Combat (À lire et jouer)">
          "Les deux gargouilles se redressent. L'une d'elles frappe le sol de son poing, faisant trembler la corniche de cristal. Elles avancent vers toi en claudiquant, leurs articulations de pierre grinçant de façon sinistre. Tu sens la chaleur monter dans ta gorge, ton instinct de dragon se réveille.<br/><br/>
          La première sentinelle tente de te barrer la route, ses bras massifs levés pour t'écraser. La seconde essaie de te contourner pour te pousser vers le précipice. Tu es encerclé. Le givre noir qui les recouvre semble absorber la faible lumière du matin."
        </ReadAloud>

        <ActionBox title="Le MJ dirige l'action :">
          <ol className="list-decimal pl-5 space-y-4 mb-6">
            <li><strong>L'Initiative :</strong> Lance un <strong>D20</strong>. Si tu fais plus de 10, tu agis avant les gargouilles !</li>
            <li><strong>Ton Action :</strong> Que fais-tu ?
              <ul className="list-circle pl-5 mt-2 space-y-2">
                <li><em>L'Attaque Frontale :</em> Tu griffes et mords la première gargouille. (Lance un <strong>D20 + 4</strong> pour toucher).</li>
                <li><em>Le Souffle :</em> Tu libères ton feu intérieur pour les repousser toutes les deux. (Les gargouilles doivent faire un jet de sauvegarde, sinon elles prennent les dégâts de ton souffle).</li>
                <li><em>La Ruse :</em> Tu tentes de t'envoler pour leur passer au-dessus et les frapper depuis les airs.</li>
              </ul>
            </li>
          </ol>

          <h4 className="font-bold text-slate-800 mb-2">Détail narratif des coups :</h4>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Si tu touches :</strong> "Tes griffes s'enfoncent dans le granit, faisant jaillir des étincelles et des éclats de pierre. La gargouille pousse un cri sourd, comme un éboulement de montagne."</li>
            <li><strong>Si elles te touchent :</strong> "Le poing de pierre te percute au flanc. Tes écailles te protègent, mais le choc te coupe le souffle et une sensation de froid intense envahit ton corps."</li>
          </ul>
        </ActionBox>

        <div className="mt-8 p-6 bg-emerald-50 border-2 border-emerald-200 rounded-2xl">
          <h3 className="font-display text-xl font-bold text-emerald-800 mb-4 flex items-center gap-2">
            <span className="text-2xl">🌿</span> La Fin du Combat
          </h3>
          <p className="text-emerald-800 mb-4">Une fois que les PV des gargouilles tombent à zéro :</p>
          <p className="italic text-emerald-900">
            "Sous ton dernier assaut, la pierre finit par céder. Les sentinelles se fissurent de la tête aux pieds avant d'éclater en mille morceaux de graviers inoffensifs. Le silence revient sur le balcon, seulement troublé par ton souffle court.<br/><br/>
            Mais au loin, en bas dans la vallée, tu vois une lueur violette s'enfoncer sous la canopée de la Forêt des Ombres. Le voleur s'échappe ! Tu n'as plus le choix : tu dois sauter dans le vide et déployer tes ailes pour le poursuivre."
          </p>
        </div>
      </section>

      {/* CHAPITRE 3 */}
      <section id="chap3">
        <h2 className="font-display text-3xl font-bold text-slate-800 mb-6 border-b-2 border-slate-200 pb-2 mt-12 flex items-center gap-2">
          <span className="text-2xl">🌉</span> CHAPITRE 3 : LE PONT DES SOUVENIRS
        </h2>

        <h3 className="font-display text-2xl font-bold text-slate-700 mt-8 mb-4">
          La Scène : Le Gouffre sans Fond
        </h3>
        <p className="mb-4 text-slate-700">
          Après avoir vaincu les sentinelles, le dragonneau arrive au <strong>Pont des Soupirs</strong>. C'est une merveille d'ingénierie ancienne, faite de cordes de soie d'araignée géante et de planches de bois de fer. Le pont flotte littéralement au-dessus d'un gouffre si profond qu'on n'en voit pas le fond.
        </p>

        <ReadAloud title="La Narration à voix haute :">
          "Le pont oscille doucement sous tes pas. À chaque craquement du bois, ton cœur rate un bond. À mi-chemin, une silhouette vaporeuse se matérialise devant toi. C'est un Esprit du Vent, un être fait de courants d'air et de plumes blanches. Ses yeux sont comme deux étoiles lointaines.<br/><br/>
          'Petit prince des écailles,' murmure l'esprit d'une voix qui ressemble au bruissement des feuilles. 'Ceux qui cherchent la lumière doivent prouver qu'ils ont l'esprit aussi vif que le feu. Réponds à mon énigme, ou le vent se fâchera et te balaiera comme une simple plume.'"
        </ReadAloud>

        <ActionBox title="L'Énigme : Le Test de Sagesse">
          <p className="mb-4">L'Esprit pose une question qui demande de la réflexion. C'est un moment calme dans l'aventure, où la tension monte par les mots plutôt que par les épées.</p>
          <ul className="list-disc pl-5 space-y-4 mb-6">
            <li><strong>L'Esprit dit :</strong> <em>"Je dévore tout : les bêtes, les oiseaux, les fleurs et les arbres. Je ronge le fer, je mords l'acier, et je réduis les pierres les plus dures en poussière. Je tue les rois, ruine les villes et j'abats les plus hautes montagnes. Qui suis-je ?"</em></li>
            <li><strong>Réponse :</strong> Le Temps.</li>
          </ul>
          <p className="text-slate-800 italic">
            L'énigme a été résolue. L'esprit du vent, Zéphyr, s'évapore dans un soupir de satisfaction, et le vent qui hurlait contre toi se change en une brise légère qui te pousse vers l'avant. Tu viens de franchir la frontière entre les cimes glacées et le monde d'en bas.
          </p>
        </ActionBox>
      </section>
    </div>
  );
}
