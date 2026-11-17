import React from 'react';
import { ReadAloud, CombatBox, ActionBox, InfoBox } from '../../components/StoryBlocks';
import { Chapter } from '../../components/CampaignLayout';

export default function Part4() {
  return (
    <div className="space-y-12">
      {/* CHAPITRE 9 */}
      <section>
        <Chapter id="chap9" emoji="🌑" title="CHAPITRE 9 : GRISAILLE, LA TAUPE-SORCIÈRE" />

        <h3 className="font-display text-2xl font-bold text-slate-700 mt-8 mb-4">
          La Scène : La salle du trône de racines
        </h3>
        <p className="mb-4 text-slate-700">
          Grisaille est une vieille taupe toute ronde, avec de grosses lunettes rondes et une cape faite de brume. Elle serre contre elle le <strong>Gland de l'Amitié</strong>, comme un doudou. Quand elle te voit, elle se redresse, et les racines d'ombre se dressent autour d'elle.
        </p>

        <ReadAloud title="La Narration à voix haute :">
          "« Encore un qui vient me prendre quelque chose ! » grince Grisaille. « Vas-y, prends-le, ce Gland ! De toute façon, personne ne se souvient jamais de moi. J'ai passé ma vie sous la terre, et là-haut, personne ne connaît mon nom. Alors j'ai décidé que, puisqu'on m'oubliait… tout le monde oublierait tout ! Comme ça, je ne suis plus la seule… »<br/><br/>
          Sa voix tremble. Derrière sa colère, tu sens surtout une immense tristesse. Les racines d'ombre s'approchent de toi, mais Grisaille, elle, a les yeux pleins de larmes grises."
        </ReadAloud>

        <ActionBox title="LE VRAI CHEMIN : l'Amitié (fortement conseillé)">
          <p className="mb-4">Le secret de l'aventure se révèle ici. Le renard n'a pas besoin de se battre : il doit <strong>montrer à Grisaille qu'on peut se souvenir d'elle</strong>. Encouragez l'enfant à trouver un geste gentil :</p>
          <ul className="list-disc pl-5 space-y-2 mb-4">
            <li><strong>Lui parler doucement</strong> et lui demander son nom (Cœur, 1D20 + 5).</li>
            <li><strong>Lui offrir quelque chose :</strong> l'écharpe rouge de Mémé, une noisette, ou même le Gland du Rire pour la faire sourire.</li>
            <li><strong>Lui proposer de venir vivre dans la forêt</strong>, avec les autres, pour qu'on n'oublie plus jamais son nom.</li>
          </ul>
          <p className="mb-2">Dès que Grisaille comprend qu'on veut être son <strong>ami</strong>, le Gland de l'Amitié s'illumine tout seul entre ses pattes. Les racines d'ombre se changent en lierre fleuri. La brume grise se dissipe comme un mauvais rêve.</p>
          <p className="italic text-slate-700">
            « Mon… mon nom, » murmure-t-elle, « c'est <strong>Grisaille</strong>. Et toi, petit renard… tu es le premier à me le demander. » Elle te tend le <strong>Gland de l'Amitié</strong>. 💛 <strong>Troisième Gland d'Or récupéré !</strong>
          </p>
        </ActionBox>

        <CombatBox title="Si l'enfant choisit quand même de se battre">
          <p className="mb-2">Certains enfants voudront combattre : c'est permis, mais faites en sorte que la bagarre mène quand même à la compréhension (les racines protègent une taupe qui pleure).</p>
          <p className="font-bold mb-2">Les Racines d'Ombre (protègent Grisaille)</p>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>PV :</strong> 18 (réparties sur plusieurs racines). <strong>CA :</strong> 12.</li>
            <li><strong>Attaque :</strong> <em>Fouet de racine</em> (1D6). Elles cherchent à repousser, pas à blesser.</li>
            <li><strong>Point faible :</strong> la lumière des <strong>Glands d'Or</strong> déjà récupérés. Chaque Gland brandi fait <strong>−4 PV</strong> aux racines et calme Grisaille d'un cran.</li>
            <li><strong>Fin forcée :</strong> quand les racines tombent, Grisaille s'effondre en pleurant — et on revient au vrai chemin : l'amitié.</li>
          </ul>
        </CombatBox>

        <InfoBox title="Le cœur de l'histoire">
          <p>Quelle que soit la méthode, la leçon est la même et toute douce : <strong>personne ne mérite d'être oublié.</strong> Grisaille devient une amie et rejoint le groupe pour le dénouement.</p>
        </InfoBox>
      </section>

      {/* CHAPITRE 10 */}
      <section>
        <Chapter id="chap10" emoji="🌳" title="CHAPITRE 10 : LE RÉVEIL DU GRAND CHÊNE" />

        <h3 className="font-display text-2xl font-bold text-slate-700 mt-8 mb-4">
          La Scène : La course contre la première neige
        </h3>
        <p className="mb-4 text-slate-700">
          Les trois Glands d'Or sont réunis ! Mais dehors, les premiers flocons commencent à tomber. Il faut courir jusqu'au <strong>Grand Chêne-Mémoire</strong> et replanter les Glands dans ses racines avant que la neige ne recouvre tout.
        </p>

        <ReadAloud title="La Narration à voix haute :">
          "Tu jaillis du terrier, les trois Glands serrés contre toi, Lumi en éclaireur, Piquillon, Grisaille et les écureuils sur tes talons. La forêt est encore grise, et de gros flocons tombent de plus en plus vite. Devant toi se dresse enfin le Grand Chêne, immense et endormi, ses branches nues tendues vers le ciel comme pour demander de l'aide. À ses pieds, trois petits creux attendent les trois Glands d'Or."
        </ReadAloud>

        <ActionBox title="La Dernière Épreuve : replanter les souvenirs">
          <p className="mb-4">Un dernier élan, tous ensemble. L'enfant place chaque Gland dans son creux. Pour chacun, un petit jet au choix (ou une réussite automatique si le groupe veut savourer le moment) :</p>
          <ul className="list-disc pl-5 space-y-2 mb-4">
            <li><strong>Le Gland du Rire</strong> → le Grand Chêne frémit, et un rire d'enfant résonne dans toute la forêt.</li>
            <li><strong>Le Gland de la Chanson</strong> → les oiseaux, d'un coup, se remettent à chanter.</li>
            <li><strong>Le Gland de l'Amitié</strong> → c'est Grisaille elle-même qui le plante. L'arbre s'illumine.</li>
          </ul>
          <p className="italic text-slate-700">
            Alors, dans un grand souffle doré, <strong>les couleurs reviennent</strong> ! Le rouge, l'orange, le jaune éclaboussent la forêt comme un feu d'artifice. La neige qui tombe devient brillante et joyeuse. Tous les animaux se réveillent et se souviennent. Mémé Rouquine court vers toi en criant ton nom — ton vrai nom. Vous avez sauvé Grisefeuille !
          </p>
        </ActionBox>

        <div className="mt-8 p-6 bg-amber-50 border-2 border-amber-200 rounded-2xl">
          <h3 className="font-display text-xl font-bold text-amber-800 mb-3 flex items-center gap-2">
            <span className="text-2xl">🎉</span> VICTOIRE !
          </h3>
          <p className="italic text-amber-900">
            "Ce soir-là, il y a une grande fête au pied du Grand Chêne. On allume des lanternes dans les branches dorées. Grisaille, assise entre deux écureuils, apprend à rire. Piquillon fait des galipettes. Et toi, petit renard, tu t'endors heureux, ta feuille d'or sur le cœur — en sachant que, grâce à toi, la forêt n'oubliera plus jamais ceux qu'elle aime."
          </p>
        </div>
      </section>
    </div>
  );
}
