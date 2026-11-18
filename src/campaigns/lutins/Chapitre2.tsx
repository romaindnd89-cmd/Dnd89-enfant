import React from 'react';
import { ReadAloud, CombatBox, ActionBox, InfoBox, FirstRound } from '../../components/StoryBlocks';

export default function Chapitre2() {
  return (
    <section id="chap2">
      <h2 className="font-display text-4xl font-bold text-amber-700 mb-6 border-b-4 border-amber-200 pb-2 mt-16">
        SALLE 2 : LA CUISINE EN FOLIE
      </h2>
      <p className="text-slate-500 font-medium mb-8">Niveau recommandé : 1<br/>Lieu : Les grandes cuisines du château, en pleine effervescence<br/>Ambiance : Bataille de farine joyeuse et bruyante, à jouer comme une scène de film comique. Premier affrontement de l'aventure.</p>

      <InfoBox title="Synopsis de la Salle pour le Maître du Jeu">
        <p>Les lutins marmitons défendent un gâteau géant derrière des barricades de farine. L'équipe peut d'abord explorer (une réserve de confiture collante, un chat endormi qui cache une pièce), puis la bataille s'engage : il suffit de <strong>toucher</strong> chaque marmiton <strong>2 fois</strong> pour le mettre hors jeu (Dame Louche, 3 fois). Tout finit en partage de gâteau.</p>
      </InfoBox>

      <h3 className="font-display text-2xl font-bold text-slate-700 mt-8 mb-4">SCÈNE 1 : LA BATAILLE DE FARINE (Exploration)</h3>
      <ReadAloud title="Texte à lire à voix haute">
        "Au centre de la pièce trône un gâteau à trois étages, absolument gigantesque, décoré de bougies multicolores jamais allumées. Tout autour, retranchés derrière des barricades de sacs de sucre et de farine, les lutins marmitons ont préparé leurs munitions avec un sérieux militaire comique : des boules de farine bien compactées et des tartes à la crème prêtes à voler."<br/><br/>
        "Un nuage de farine flotte dans la lumière des fenêtres. De petites louches en bois dépassent des barricades comme des drapeaux de guerre. Sur le rebord encore tiède du grand four, un gros chat gris dort roulé en boule, et sous l'une de ses pattes, on devine le reflet d'une pièce dorée. Sur une étagère haute, un pot de confiture a l'air très collant."<br/><br/>
        "Tout au fond, une lutine à la toque gigantesque se redresse : « Intrus dans MA cuisine ! Personne ne touche à mon gâteau sans passer par mes valeureux marmitons ! Tartes en position de tir ! » Que faites-vous ?"
      </ReadAloud>

      <InfoBox title="Profil de Dame Louche, cheffe cuisinière du château">
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Apparence :</strong> imposante, toque blanche géante, énorme louche brandie comme une épée.</li>
          <li><strong>Voix :</strong> grosse voix de général en chef, un sérieux comiquement disproportionné.</li>
          <li><strong>Son point faible :</strong> un compliment sincère sur sa cuisine, et son attitude change aussitôt.</li>
        </ul>
      </InfoBox>

      <ActionBox title="Options d'Exploration et Mécaniques (avant la bataille)">
        <h4 className="font-bold text-lg mb-2">1. Attraper le pot de confiture collante (Test d'AGILITÉ - DD 11)</h4>
        <p className="mb-6"><strong>Réussite : Loot : Pot de confiture.</strong> Une fois pendant le combat, un lancer de confiture empêche un marmiton d'attaquer pendant un tour entier (il essaie de se décoller les doigts).</p>

        <h4 className="font-bold text-lg mb-2">2. Récupérer la pièce sous Monsieur Chaussette, le chat endormi</h4>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Le gratter derrière l'oreille (CŒUR - DD 10).</strong> L'Ami des bêtes réussit automatiquement.</li>
          <li><strong>Glisser la patte tout doucement sous la sienne (AGILITÉ - DD 12).</strong></li>
          <li><strong>L'attirer avec un bol de crème chipée (MALICE - DD 8).</strong></li>
          <li><strong>Réussite : Loot : 1 pièce en chocolat.</strong> <strong>Échec :</strong> le chat s'en va dignement avec la pièce, avant de la laisser tomber devant la porte : un chat ne mange pas de chocolat.</li>
        </ul>
      </ActionBox>

      <h3 className="font-display text-2xl font-bold text-slate-700 mt-8 mb-4">SCÈNE 2 : LA BATAILLE DE FARINE (Combat)</h3>
      <CombatBox title="Mécaniques de Combat (Votre première bataille)">
        <p className="mb-2">Une bataille se joue <strong>chacun son tour, autour de la table</strong>, avec un seul dé : le <strong>D20</strong> (le bouton 🎲 en bas de l'écran le contient). Pas de calcul de dégâts : il suffit de <strong>toucher</strong> un marmiton <strong>2 fois</strong> pour le mettre hors jeu.</p>

        <FirstRound>
        <p><strong>Léa, l'Acrobate,</strong> lance le D20 pour attaquer un marmiton : elle fait <strong>8</strong>, +3 parce que c'est son talent (Agilité) = <strong>11</strong>. 11 atteint 10 : <strong>une touche !</strong> Il en faut 2 en tout : il en reste donc une à faire.</p>
        <p>À la fin du tour de table, le MJ lance le D6 : il fait <strong>4</strong>. Il fallait 1 ou 2, donc rien ne se passe : l'équipe garde tous ses Rires. (Avec 1 ou 2, un héros aurait perdu 1 Rire.)</p>
        </FirstRound>
        <h4 className="font-bold text-lg mb-2">Les Ennemis : les Marmitons (un par enfant) et Dame Louche</h4>
        <ul className="list-disc pl-5 space-y-1 mb-6">
          <li><strong>Pour mettre un marmiton hors jeu :</strong> le toucher 2 fois (Dame Louche : 3 fois). Un jet à 10 ou plus est une touche.</li>
          <li><strong>Leur attaque (fin de chaque tour de table) :</strong> le MJ lance 1D6. Sur 1 ou 2, une tarte fait mouche sur un héros au hasard : l'équipe perd <strong>1 Rire</strong>.</li>
          <li><strong>Sol glissant :</strong> un enfant qui rate un jet d'Agilité glisse sur les fesses (sans dégât), mais passe son tour.</li>
        </ul>

        <h4 className="font-bold text-lg mb-2">Tactique et Environnement (Le rôle du MJ) :</h4>
        <ul className="list-disc pl-5 space-y-3 mb-4">
          <li><strong>Option A - Lancer une boule de farine (AGILITÉ).</strong></li>
          <li><strong>Option B - S'abriter derrière un couvercle de marmite géant (COURAGE) :</strong> le prochain 1D6 du MJ est annulé.</li>
          <li><strong>Option C - Jouer un bon tour (MALICE) :</strong> faire glisser un marmiton sur une flaque de beurre ou lui retourner sa tarte sur la tête.</li>
          <li><strong>Option D - Le faire rire (CŒUR) :</strong> une seule réussite suffit à le sortir de la bataille, écroulé de rire.</li>
        </ul>
        <p className="italic">Si l'équipe tombe à 0 Rire : tout le monde est blanc de farine, marmitons compris. Dame Louche déclare un match nul, exige une grimace collective, et rend 3 Rires. Le gâteau est partagé pareil.</p>
      </CombatBox>

      <ReadAloud title="Texte à lire à voix haute (la fin de la bataille)">
        "Le dernier marmiton encore debout s'assoit par terre, plié de rire, de la crème jusqu'aux oreilles. Dame Louche lève sa grande louche pour un dernier coup théâtral... puis la baisse, et un large sourire fend son visage crispé. « Bien joué, les terreurs. Ça faisait des lunes qu'on ne s'était pas autant amusés. » Elle découpe le gâteau en parts égales : une pour chaque héros, une pour chaque marmiton. Et dans certaines parts, quelque chose brille au milieu de la crème."
      </ReadAloud>

      <InfoBox title="Récompenses">
        <p><strong>Loot : 3 pièces en chocolat</strong> cachées dans le gâteau, et l'équipe récupère <strong>2 Rires</strong>.</p>
      </InfoBox>
    </section>
  );
}
