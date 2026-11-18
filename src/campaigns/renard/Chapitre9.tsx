import React from 'react';
import { ReadAloud, CombatBox, ActionBox, InfoBox } from '../../components/StoryBlocks';

export default function Chapitre9() {
  return (
    <section id="chap9">
      <h2 className="font-display text-4xl font-bold text-slate-700 mb-6 border-b-4 border-slate-300 pb-2 mt-16">
        CHAPITRE 9 : GRISAILLE, LA TAUPE-SORCIÈRE
      </h2>
      <p className="text-slate-500 font-medium mb-8">Niveau recommandé : 2<br/>Lieu : La salle du trône, au cœur du terrier<br/>Ambiance : Le climax émotionnel de l'aventure. Prends ton temps, baisse la voix, laisse le silence faire son travail.</p>

      <InfoBox title="Synopsis du Chapitre pour le Maître du Jeu">
        <p>Le héros n'a pas besoin de se battre : Grisaille est une taupe terriblement seule. La vraie victoire est de lui offrir son amitié, par un geste gentil (nom, cadeau, chanson, tasse, anniversaire). Le combat reste possible si l'enfant y tient, mais il mène lui aussi à la compréhension. C'est le chapitre le plus important de l'histoire.</p>
      </InfoBox>

      <h3 className="font-display text-2xl font-bold text-slate-700 mt-8 mb-4">SCÈNE 1 : LA SALLE DU TRÔNE DE RACINES (Rencontre et Roleplay)</h3>
      <ReadAloud title="Texte à lire à voix haute">
        "Grisaille est une vieille taupe toute ronde, enveloppée dans une cape de brume. De grosses lunettes rondes, trop grandes pour son petit museau, glissent sans cesse sur son nez. Quand elle te voit, elle se redresse d'un coup sur son trône, et autour d'elle, de fines racines sombres se dressent, prêtes à réagir au moindre geste brusque."<br/><br/>
        "« Encore un qui vient me prendre quelque chose ! » grince-t-elle d'une voix qui se veut dure, mais qui tremble sur la fin. « Vas-y, prends-le, ce Gland, si tu y tiens tant ! De toute façon, personne ne se souvient jamais de moi, alors pourquoi le garder ? »"<br/><br/>
        "Derrière cette colère de façade, tu sens une tristesse immense, comme un brouillard bien plus épais que toute la brume qu'elle a répandue. Grisaille a les yeux pleins de larmes grises qui n'arrivent même pas à couler. Que fais-tu ?"
      </ReadAloud>

      <InfoBox title="Profil de Grisaille, la taupe-sorcière">
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Voix :</strong> commence par une grosse voix qui se veut intimidante. Dès que quelqu'un est gentil avec elle, elle devient toute petite et hésitante, presque enfantine.</li>
          <li><strong>Sous la colère :</strong> immensément seule. Elle s'est convaincue que, puisque personne ne se souvient d'elle, autant que personne ne se souvienne de rien.</li>
          <li><strong>Si l'enfant hésite :</strong> Lumi chuchote : « Regarde ses yeux, derrière ses lunettes… tu crois vraiment qu'elle est en colère ? Ou qu'elle a très, très peur ? »</li>
        </ul>
      </InfoBox>

      <ActionBox title="L'Arbre de Dialogue et les Résolutions">
        <p className="mb-4">Il n'y a pas de mauvaise réponse. Demande : « Elle a l'air en colère, mais au fond elle est triste et seule. Qu'est-ce que tu as envie de faire ? » Laisse l'enfant proposer d'abord ; les gestes ci-dessous sont là s'il hésite. Il peut en tenter plusieurs.</p>

        <h4 className="font-bold text-lg mb-2">Option A : Lui demander son nom (Test de CŒUR - DD 10)</h4>
        <p className="mb-6">Parler doucement, comme si c'était la chose la plus naturelle du monde. <strong>Bonus +2</strong> si le héros serre le <strong>Fil de laine rouge</strong> du chapitre 1. <strong>Bonus +3</strong> s'il a lu le journal chez Monsieur Lombric.</p>

        <h4 className="font-bold text-lg mb-2">Option B : Lui offrir un objet trouvé en chemin (aucun jet)</h4>
        <p className="mb-6">L'écharpe de Mémé, une noisette grillée, le Gland du Rire... Si l'enfant propose sincèrement, c'est réussi.</p>

        <h4 className="font-bold text-lg mb-2">Option C : Lui chanter la Chanson de Grisefeuille (Réussite automatique)</h4>
        <p className="mb-6">La chanter en entier, même un peu faux : c'est le geste le plus fort de tous.</p>

        <h4 className="font-bold text-lg mb-2">Option D : S'asseoir à sa table, devant la deuxième tasse (Test de CŒUR - DD 8)</h4>
        <p className="mb-6">Très facile exprès : c'est un geste immense. Proposer de remplir enfin la tasse poussiéreuse.</p>

        <h4 className="font-bold text-lg mb-2">Option E : Lui souhaiter un bon anniversaire en retard (Réussite automatique)</h4>
        <p>Seulement si l'enfant a lu le journal de Grisaille chez Monsieur Lombric.</p>
      </ActionBox>

      <ReadAloud title="Texte à lire à voix haute (quand Grisaille devient une amie, lentement)">
        "Dès que Grisaille comprend qu'on veut vraiment être son ami, et pas seulement lui reprendre quelque chose, un frisson la traverse. Les racines d'ombre se changent lentement en lierre fleuri, tige après tige. Le Gland de l'Amitié s'illumine tout seul d'une lumière chaude et dorée, et la brume se dissipe en quelques secondes, comme un mauvais rêve dont on vient de se réveiller."<br/><br/>
        "« Mon... mon nom, » murmure-t-elle en essuyant ses lunettes embuées. « C'est Grisaille. Et toi, petit renard... tu es le tout premier, depuis tellement longtemps, à me le demander pour de vrai. » Elle te tend le Gland de l'Amitié, avec des gestes maladroits, comme si elle n'avait plus l'habitude de donner quoi que ce soit."
      </ReadAloud>

      <InfoBox title="Récompenses et Cœur de l'histoire">
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Loot : le Gland de l'Amitié (3 sur 3 !).</strong></li>
          <li><strong>Nouvelle amie :</strong> Grisaille rejoint le groupe et connaît un tunnel secret vers le Grand Chêne : un raccourci pour la course du chapitre 10.</li>
          <li><strong>À dire à l'enfant, simplement :</strong> personne ne mérite jamais d'être complètement oublié.</li>
        </ul>
      </InfoBox>

      <CombatBox title="Mécaniques de Combat (si l'enfant choisit de se battre : c'est permis)">
        <p className="mb-4">Fais en sorte que la bagarre mène, elle aussi, vers la compréhension : les racines défendent avant tout une taupe qui pleure en silence.</p>

        <h4 className="font-bold text-lg mb-2">L'Ennemi : les Racines d'Ombre</h4>
        <ul className="list-disc pl-5 space-y-1 mb-6">
          <li><strong>Points de Vie (PV) :</strong> 18 au total (réparties sur plusieurs racines qui attaquent chacune leur tour).</li>
          <li><strong>Classe d'Armure (CA) :</strong> 12.</li>
          <li><strong>Attaque (Fouet de racine) :</strong> touche à 11 ou plus (D20 du MJ), 1D6 de dégâts. Elles cherchent à repousser et à impressionner, jamais à blesser gravement.</li>
        </ul>

        <h4 className="font-bold text-lg mb-2">Tactique et Environnement (Le rôle du MJ) :</h4>
        <ul className="list-disc pl-5 space-y-3 mb-4">
          <li><strong>Option A - Griffes et crocs :</strong> 1D20 + COURAGE (+3), dégâts 1D6.</li>
          <li><strong>Option B - Brandir un Gland d'Or :</strong> chaque Gland déjà obtenu inflige automatiquement −4 PV aux racines et calme Grisaille d'un cran.</li>
        </ul>
        <p className="italic">Quand les racines tombent, Grisaille s'effondre en pleurant sur son trône. L'histoire revient naturellement au chemin de l'amitié, décrit plus haut.</p>
      </CombatBox>
    </section>
  );
}
