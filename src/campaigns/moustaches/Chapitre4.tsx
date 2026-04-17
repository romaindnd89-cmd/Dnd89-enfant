import React from 'react';
import { ReadAloud, CombatBox, ActionBox, InfoBox } from '../../components/StoryBlocks';

export default function Chapitre4() {
  return (
    <section id="chap4">
      <h2 className="font-display text-4xl font-bold text-emerald-700 mb-6 border-b-4 border-emerald-200 pb-2 mt-16">
        🏰 Chapitre 4 : Le Palais de Sir Grignote.
      </h2>
      
      <InfoBox title="📝 (Note pour le Papa MJ avant de commencer)">
        <p className="mb-2">Pour ce chapitre, <strong>prends un bout de papier et un stylo</strong>. Tu vas devoir noter les Points de Vie (PV) des monstres au fur et à mesure qu'elle les tape. On va avoir <strong>trois vrais combats</strong> qui s'enchaînent, avec la CA (Classe d'Armure), les jets d'attaque et les dégâts bien précis.</p>
        <ul className="list-disc pl-5 mt-4 space-y-2">
          <li><strong>Ton Héroïne :</strong> Elle a une <strong>CA de 14</strong>. (Pour la toucher, tes monstres doivent faire 14 ou plus sur ton D20). Ses attaques font 1D6 ou 1D8 de dégâts selon son arme.</li>
          <li>N'oublie pas de lui demander combien de PV il lui reste avant de commencer, et rappelle-lui qu'elle peut boire une potion si elle en a gardé une !</li>
        </ul>
      </InfoBox>

      <h3 className="font-display text-2xl font-bold text-slate-700 mt-8 mb-4">🌉 Scène 1 : Le Pont Suspendu et la Garde d'Élite (Combat 1)</h3>
      <ReadAloud title="À lire à voix haute, avec le bruit du vent">
        "Le vide sous le pont de bois est terrifiant. Le vent souffle fort : Fffffff ! Le pont grince à chaque pas que tu fais : Cuiiiic... Cuiiiic... &gt; Au bout du pont, juste devant les immenses portes dorées du Boss, deux ombres massives se dressent. Ce sont les Souris-Paladins, la garde personnelle du Roi ! Elles sont deux fois plus grosses que les autres souris. Elles portent des armures lourdes taillées dans des croûtes de Gouda très dur, et manient d'énormes marteaux en os de poulet."
      </ReadAloud>

      <CombatBox title="[LE COMBAT 1 : Les Gardes d'Élite]">
        <ul className="list-disc pl-5 space-y-2 mb-4">
          <li><strong>Les Monstres (2 Souris-Paladins) :</strong> CA = 13 | PV = 8 chacune.</li>
          <li><strong>Leurs attaques :</strong> Dégâts = 2 PV.</li>
        </ul>
        
        <p className="mb-2"><strong>Le Maître du Jeu demande :</strong> "Les deux Paladins lèvent leurs marteaux en os et bloquent les portes dorées. Le vent souffle, le pont balance. C'est à toi d'attaquer ! Quelle est ta cible, celle de gauche ou celle de droite ?"</p>
        
        <p className="font-bold mt-4 mb-2">👉 L'Héroïne attaque : D20.</p>
        <ul className="list-disc pl-5 space-y-2 mb-4">
          <li><strong>Si 13 ou plus :</strong> &gt; "Ton attaque transperce la croûte de Gouda ! La souris pousse un hurlement : 'Squeak ! Mon armure !' " (Fais-lui lancer ses dégâts et déduis-les des 8 PV du monstre).</li>
          <li><strong>Si 12 ou moins :</strong> &gt; "Tu frappes fort, mais l'armure en fromage est vieille et dure comme de la pierre ! Ton arme glisse dessus en faisant des étincelles !"</li>
        </ul>

        <p className="font-bold mt-4 mb-2">👉 Tour des Monstres (Le MJ lance deux D20 contre la CA 14 de l'héroïne) :</p>
        <ul className="list-disc pl-5 space-y-2 mb-4">
          <li><strong>Si 14+ :</strong> &gt; "La Souris-Paladin fait tournoyer son marteau en os et te frappe violemment au flanc ! BAM ! Tu perds 2 PV et tu recules d'un pas sur le pont qui tangue."</li>
          <li><strong>Si 13- :</strong> &gt; "Le lourd marteau s'écrase sur le bois du pont juste à côté de ta patte : CRAAAASH ! Tu as esquivé au dernier millième de seconde !"</li>
        </ul>
        <p className="italic mb-4">(Continue le combat tour par tour jusqu'à ce que les deux gardes tombent à 0 PV).</p>

        <p className="font-bold mb-2">LA NARRATION DE TRANSITION :</p>
        <p>"Le dernier Paladin s'effondre. Son armure en fromage se brise en morceaux. Tu passes par-dessus les gardes vaincus et tu poses tes deux pattes sur les portes dorées. Tu pousses de toutes tes forces. Les portes s'ouvrent dans un grincement majestueux, dévoilant la Salle du Trône. L'heure de vérité a sonné."</p>
      </CombatBox>

      <h3 className="font-display text-2xl font-bold text-slate-700 mt-8 mb-4">👑 Scène 2 : L'Entrée dans la Salle du Trône (Narration et Tension)</h3>
      <ReadAloud title="À lire à voix haute, avec une voix grave, résonnante, mais avec un léger cheveu sur la langue">
        "La salle est éblouissante. Des lustres en cristal éclairent la pièce. Et au centre exact, tu la vois enfin : La Croquette Sacrée Géante ! Elle brille d'une lumière dorée.<br/><br/>
        Mais un affront terrible a été commis ! La Croquette est recouverte d'une nappe à carreaux. Dessus, il y a un énorme gâteau d'anniversaire au fromage avec 5 bougies.<br/><br/>
        Assis derrière cette "table", sur un trône de coussins, se trouve un Hamster gigantesque. Gros comme un ours. Il porte une armure complète faite de boîtes de conserve en fer forgé. Il tient une arme terrifiante : un immense coton-tige géant trempé dans de la sauce piquante rouge fluo.<br/><br/>
        Le sol tremble lorsqu'il se lève.<br/><br/>
        'AHAH !' tonne-t-il. 'Je suis Sir Grignote le Terrible ! Tu as détruit mon armée, petit chaton, mais tu n'auras pas mon repas d'anniversaire ! Cette croquette me sert de table, et personne ne m'empêchera de souffler mes bougies ! En garde !' "
      </ReadAloud>

      <h3 className="font-display text-2xl font-bold text-slate-700 mt-8 mb-4">🛡️ Scène 3 : Le Boss Phase 1 - L'Armure de Conserve (Combat 2)</h3>
      <CombatBox title="[LE COMBAT 2 : Sir Grignote, Phase blindée]">
        <ul className="list-disc pl-5 space-y-2 mb-4">
          <li><strong>Le Boss :</strong> CA = 15 (Il est très bien protégé par les boîtes de conserve) | PV = 15.</li>
          <li><strong>Son attaque :</strong> Le coton-tige pimenté fait 3 PV de dégâts.</li>
        </ul>
        
        <p className="mb-2"><strong>Le Maître du Jeu demande :</strong> "Sir Grignote fonce sur toi en faisant un bruit de ferraille : Clang ! Clang ! Clang ! Il lève son coton-tige géant. Lance ton D20, il te faut faire un très bon score (15+) pour percer son armure !"</p>
        
        <p className="font-bold mt-4 mb-2">👉 L'Héroïne attaque (D20) :</p>
        <ul className="list-disc pl-5 space-y-2 mb-4">
          <li><strong>Si 15+ :</strong> &gt; "Ton coup est d'une précision magistrale ! Tu vises exactement entre deux boîtes de petits pois ! La pointe de ton arme le touche. Il hurle : 'Aïe ! Ma fourrure !' " (Déduis les dégâts des 15 PV).</li>
          <li><strong>Si 14- :</strong> &gt; "Tu frappes, mais GONG ! Ton arme tape en plein milieu d'une boîte de conserve. Le son te casse les oreilles et le hamster rigole de toutes ses dents !"</li>
        </ul>

        <p className="font-bold mt-4 mb-2">👉 Tour du Boss (Le MJ lance un D20 contre CA 14) :</p>
        <ul className="list-disc pl-5 space-y-2 mb-4">
          <li><strong>Si 14+ :</strong> &gt; "Sir Grignote fait un grand balayage avec son coton-tige pimenté ! Il te touche de plein fouet ! PAF ! La sauce piquante te brûle le nez. Tu éternues (Atchoum !) et tu perds 3 PV !"</li>
          <li><strong>Si 13- :</strong> &gt; "Il frappe lourdement, mais tu fais une glissade féline entre ses énormes pattes ! Le coton-tige s'écrase sur le sol en projetant de la sauce rouge partout, mais tu es indemne."</li>
        </ul>
        <p className="italic mb-4">(Continue jusqu'à ce que les 15 PV de cette phase tombent à zéro).</p>

        <p className="font-bold mb-2">LA NARRATION DE TRANSITION :</p>
        <p>"Sous la force de ton dernier coup, l'armure de boîtes de conserve de Sir Grignote cède ! Les ficelles craquent. BAM ! CLANG ! Toutes les boîtes volent à travers la pièce. Le Hamster Géant se retrouve à nu, tout potelé et plein de poils.<br/><br/>
        'Mon armure !' hurle-t-il. 'Tu vas me le payer ! J'active mon arme secrète !' "</p>
      </CombatBox>

      <h3 className="font-display text-2xl font-bold text-slate-700 mt-8 mb-4">🐹 Scène 4 : Le Boss Phase 2 - La Boule Incontrôlable (Combat 3)</h3>
      <ReadAloud title="À lire à voix haute">
        "Sir Grignote appuie sur un bouton sous la Croquette. Soudain, une sphère géante en plastique transparent tombe du plafond et l'enferme à l'intérieur ! C'est une Boule de Hamster blindée ! Il commence à courir à toute vitesse à l'intérieur. La sphère géante fonce sur toi comme une boule de bowling de deux tonnes !"
      </ReadAloud>

      <CombatBox title="[LE COMBAT 3 : La Boule de Hamster]">
        <ul className="list-disc pl-5 space-y-2 mb-4">
          <li><strong>Le Boss :</strong> CA = 12 (C'est plus facile à toucher, c'est du gros plastique, mais la boule roule très vite !) | PV = 15.</li>
          <li><strong>Son attaque (L'écrasement) :</strong> Si la boule la touche, elle prend 4 PV de dégâts.</li>
        </ul>
        
        <p className="mb-2"><strong>Le Maître du Jeu demande :</strong> "La boule rebondit contre les murs : BOING ! BOING ! Elle te fonce droit dessus ! Tu ne peux pas bloquer deux tonnes de plastique. Tu dois frapper la boule au moment où elle te frôle ! Attaque !"</p>
        
        <p className="font-bold mt-4 mb-2">👉 L'Héroïne attaque (D20) :</p>
        <ul className="list-disc pl-5 space-y-2 mb-4">
          <li><strong>Si 12+ :</strong> &gt; "Au moment où la boule allait t'écraser, tu fais une pirouette sur le côté et tu frappes la surface en plastique avec une force titanesque ! CRAAAACK ! Une énorme fissure apparaît sur la boule. Le Hamster à l'intérieur crie : 'Doucement, c'est du plastique renforcé !' " (Déduis les dégâts des 15 PV).</li>
          <li><strong>Si 11- :</strong> &gt; "La boule va trop vite ! Ton coup glisse sur le plastique arrondi sans faire aucun dégât !"</li>
        </ul>

        <p className="font-bold mt-4 mb-2">👉 Tour du Boss (Le MJ lance un D20 contre CA 14) :</p>
        <ul className="list-disc pl-5 space-y-2 mb-4">
          <li><strong>Si 14+ :</strong> &gt; "Tu n'as pas le temps de te pousser ! La sphère géante te percute de plein fouet ! SBAAAAM ! Tu es aplatie au sol comme une crêpe à moustaches. Tu perds 4 PV ! Le sol tremble !"</li>
          <li><strong>Si 13- :</strong> &gt; "La boule te fonce dessus, mais tu t'aplatis au sol au dernier moment ! La sphère géante passe juste au-dessus de toi, frôlant tes oreilles, et va s'écraser contre un pilier : BONG ! Le Hamster est tout secoué à l'intérieur !"</li>
        </ul>
        <p className="italic mb-4">(On continue jusqu'à ce que les PV de la boule tombent à 0).</p>
      </CombatBox>

      <h3 className="font-display text-2xl font-bold text-slate-700 mt-8 mb-4">😭 Scène 5 : L'Épilogue Émotionnel (Fin du Combat, Roleplay pur)</h3>
      <ReadAloud title="À lire à voix haute, avec une petite voix triste et larmoyante">
        "Ton ultime attaque brise la sphère en mille morceaux ! Le plastique explose. Sir Grignote roule sur le sol, les yeux qui tournent. Il s'assoit lourdement. Il regarde son gâteau d'anniversaire qui a été complètement écrabouillé pendant la bagarre...<br/><br/>
        Ses grosses lèvres poilues se mettent à trembler. Ses yeux se remplissent d'eau. Une larme roule sur sa joue, puis deux. Et soudain, le monstre terrifiant éclate en sanglots !<br/><br/>
        'Bouhouhouhouuuu !' pleure le hamster géant en se frottant les yeux. 'Mon anniversaire... Il est fichu ! J'ai 5 ans aujourd'hui ! Je voulais juste inviter des gens à ma fête et avoir une grande table pour mon gâteau au fromage... Je savais pas que c'était une Croquette magique importante pour vous... Je suis un très méchant hamster, bouhouhou !' "
      </ReadAloud>

      <ActionBox title="[ACTION FINALE : LE JUGEMENT DE L'HÉROÏNE]">
        <p className="italic mb-4">(Ici, range les dés. C'est le moment pour ta fille de prendre une vraie décision morale).</p>
        <p className="mb-4"><strong>Le Maître du Jeu demande :</strong> "Le terrible Boss de fin est en fait un gros bébé hamster le jour de son anniversaire. Son armée est détruite, son gâteau est en bouillie. Que fais-tu ? Est-ce que tu l'achèves ? Est-ce que tu le grondes pour lui faire la morale ? Ou est-ce que tu l'invites à fêter son anniversaire à Miaou-Ville avec les gentils chats ?"</p>
        <p className="mb-4">👉 <strong>Laisse-la répondre. Écoute ce qu'elle dit. Joue le Hamster qui s'excuse et promet de ramener la Croquette sur son dos pour se faire pardonner.</strong></p>
      </ActionBox>

      <ReadAloud title="LA CONCLUSION (À lire avec fierté) :">
        "Grâce à ta force, tu as vaincu les monstres. Mais grâce à ton cœur, tu as transformé un ennemi en ami.<br/><br/>
        Tu remontes à la surface. Le soleil se couche sur Miaou-Ville. Sir Grignote, le hamster géant, marche derrière toi en portant la Croquette Sacrée sur son dos. En vous voyant arriver sur la place du marché, tous les habitants éclatent de joie : 'Hourraaaaa !' &gt; La Croquette est replacée sur son socle. La magie illumine à nouveau la ville. Le Maire, les larmes aux yeux, s'avance vers toi et t'accroche autour du cou la plus belle médaille en or de la ville.<br/><br/>
        'À notre plus grande héroïne !' crie la foule. Des feux d'artifice éclatent dans le ciel. Tu as réussi."
      </ReadAloud>

      <InfoBox title="🎉 FIN DE LA CAMPAGNE !">
        <p>Avec ces trois combats bien distincts, la gestion stratégique de l'armure et des points de vie, et cette fin émouvante, vous avez un chef-d'œuvre de campagne d'initiation. C'est le moment idéal pour faire péter le vrai goûter (le "Festin du Boss") dans votre salon !</p>
      </InfoBox>
    </section>
  );
}
