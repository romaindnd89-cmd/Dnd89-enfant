import React from 'react';
import { ReadAloud, CombatBox, ActionBox, InfoBox, FirstRound } from '../../components/StoryBlocks';

export default function Chapitre10() {
  return (
    <section id="chap10">
      <h2 className="font-display text-4xl font-bold text-emerald-700 mb-6 border-b-4 border-emerald-200 pb-2 mt-16">
        CHAPITRE 10 : LE RÉVEIL DU GRAND CHÊNE
      </h2>
      <p className="text-slate-500 font-medium mb-8">Niveau recommandé : 2<br/>Lieu : La grande clairière du Grand Chêne-Mémoire, au cœur de la forêt<br/>Ambiance : Une course joyeuse et un peu tendue contre la première neige, qui se termine en vraie fête.</p>

      <InfoBox title="Synopsis du Chapitre pour le Maître du Jeu">
        <p>Dernier chapitre avant l'épilogue. Accélère le rythme de ta voix, phrases courtes, compte les flocons à voix haute (« La neige arrive aux chevilles… aux genoux… »). Trois obstacles, puis le héros replante les trois Glands d'Or. Quand le troisième est planté, marque un grand silence, puis reprends très lentement pour le moment final.</p>
      </InfoBox>

      <h3 className="font-display text-2xl font-bold text-slate-700 mt-8 mb-4">SCÈNE 1 : LA COURSE CONTRE LA NEIGE (Exploration)</h3>
      <ReadAloud title="Texte à lire à voix haute">
        "Tu jaillis hors du terrier dans un grand bond, les trois Glands d'Or serrés contre toi, Lumi en éclaireuse devant ton museau, Piquillon roulé en boule sur ton dos, et Grisaille qui trottine courageusement sur tes talons. La forêt est encore grise, et de gros flocons blancs tombent de plus en plus vite."<br/><br/>
        "Devant toi se dresse le Grand Chêne, immense, endormi depuis la nuit où tout a basculé. Ses branches nues se tendent vers le ciel comme pour implorer de l'aide. Mais avant d'arriver à ses pieds, il faut traverser un tronc couché, un mur de neige grise, et Lumi, dont la lumière faiblit dans l'air glacé. Que fais-tu ?"
      </ReadAloud>

      <ActionBox title="Options d'Exploration et Mécaniques (la course, trois obstacles)">
        <p className="mb-4">Un échec ne bloque jamais la course : un ami aide aussitôt, mais la neige monte d'un cran, ce qui ajoute de la tension sans vrai danger.</p>

        <h4 className="font-bold text-lg mb-2">1. Le tronc couché (Test d'AGILITÉ - DD 10)</h4>
        <p className="mb-6">Sauter par-dessus d'un bond franc. <strong>Échec :</strong> Piquillon roule dessous et montre un passage dérobé juste à temps.</p>

        <h4 className="font-bold text-lg mb-2">2. La congère (Test de COURAGE - DD 10)</h4>
        <p className="mb-6">Foncer dedans de toutes ses forces. <strong>Échec :</strong> Grisaille creuse un tunnel en deux coups de pattes de taupe. (Si elle t'a montré son raccourci au chapitre 9, ce test est automatiquement réussi.)</p>

        <h4 className="font-bold text-lg mb-2">3. Lumi a froid (Test de CŒUR - DD 8)</h4>
        <p>La réchauffer contre son cœur ou lui chanter un bout de la Chanson de Grisefeuille. <strong>Échec :</strong> la chaleur de la Feuille d'Or la réchauffe à la place.</p>
      </ActionBox>

      <h3 className="font-display text-2xl font-bold text-slate-700 mt-8 mb-4">SCÈNE 2 : LE RETOUR DES CORBEAUX DE SUIE (Rencontre et Roleplay)</h3>
      <ReadAloud title="Texte à lire à voix haute">
        "Trois ombres noires familières tournent soudain dans le ciel chargé de neige. Suie, Charbon et le gros Cendrar viennent se poser maladroitement sur une branche basse, bien moins fiers qu'au chapitre 2. « Euh... CROÂ. La patronne ne nous donne plus aucun ordre depuis un moment. Et puis on a froid. Et puis, en fait... on se souvient même plus très bien pourquoi on était méchants avec toi. » Que fais-tu ?"
      </ReadAloud>

      <ActionBox title="L'Arbre de Dialogue et les Résolutions">
        <h4 className="font-bold text-lg mb-2">Pardonner (aucun jet)</h4>
        <p className="mb-2">Il suffit de le décider et de le dire. Le héros peut aussi leur demander de s'excuser d'abord pour la clairière.</p>
        <p><strong>Récompense :</strong> touchés par cette seconde chance, les trois corbeaux soulèvent le héros par son écharpe rouge et le portent au-dessus de la cime des arbres. <strong>Un des obstacles de la course est automatiquement réussi</strong>, et l'enfant aperçoit d'en haut toute la forêt grise avant qu'elle ne retrouve ses couleurs.</p>
      </ActionBox>

      <h3 className="font-display text-2xl font-bold text-slate-700 mt-8 mb-4">SCÈNE 3 : LES OMBRES DE NEIGE (Combat)</h3>
      <ReadAloud title="Texte à lire à voix haute">
        "Vous arrivez à cent pas du Grand Chêne quand la neige se met à tourbillonner : de grandes formes pâles se détachent du vent, trois silhouettes de brume blanche, les yeux vides et les bras traînants. « Les derniers souvenirs... à nous... » murmurent-elles d'une voix de vent. « L'oubli n'est pas fini... Donne-nous tes Glands... » Elles avancent vers toi, en glissant sur la neige, froides comme de la glace."
      </ReadAloud>

      <CombatBox title="Mécaniques de Combat (Les Ombres de Neige)">
        <p className="mb-2">Rappel : D20 + talent pour toucher, D6 pour les dégâts. Quand un monstre attaque, le MJ lance un D20 : à 11 ou plus, il touche le renard.</p>
        <FirstRound>
        <p><strong>Le petit renard</strong> attaque une Ombre de Neige (6 PV, CA 11). Il lance le D20 et fait <strong>9</strong>. Il ajoute son Courage (+3) : 9 + 3 = <strong>12</strong>. 12 atteint la CA 11 : <strong>touché !</strong> Il lance le D6 pour les dégâts : <strong>4</strong>. Une Ombre de Neige avait 6 PV : il lui en reste <strong>2</strong>.</p>
        <p>Au tour d'une Ombre de Neige, le MJ lance un D20 : <strong>7</strong>. Il faut <strong>11</strong> ou plus pour toucher le petit renard : c'est moins : <strong>raté !</strong> Le souffle glacé s'éparpille en flocons. (Avec 11 ou plus, le petit renard aurait perdu 1D4 PV.)</p>
        </FirstRound>
        <h4 className="font-bold text-lg mb-2">Les Ennemies : 3 Ombres de Neige</h4>
        <ul className="list-disc pl-5 space-y-1 mb-4">
          <li><strong>PV :</strong> 6 chacune. <strong>CA :</strong> 11.</li>
          <li><strong>Attaque (Souffle glacé) :</strong> touche à 11 ou plus (D20 du MJ), 1D4 de dégâts. Un héros touché a froid : −1 à son prochain jet.</li>
          <li><strong>Point faible : la lumière et la chaleur.</strong> La Feuille d'Or, la lumière de Lumi et un câlin les font fondre.</li>
        </ul>
        <h4 className="font-bold text-lg mb-2">Tactique et Environnement (Le rôle du MJ) :</h4>
        <ul className="list-disc pl-5 space-y-3">
          <li><strong>Option A - Griffes et crocs :</strong> D20 + COURAGE (+3), 1D6.</li>
          <li><strong>Option B - Brandir la Feuille d'Or (COURAGE +3) :</strong> une Ombre fond d'un coup, sans jet de dégâts.</li>
          <li><strong>Option C - Lumi et la poussière de lune (si obtenue) :</strong> toutes les Ombres perdent leur tour.</li>
          <li><strong>Option D - Piquillon (une fois) :</strong> en boule, il fait perdre 2 PV à une Ombre.</li>
          <li><strong>Option E - Grisaille :</strong> son tunnel permet d'éviter les Ombres, qui se perdent dans la neige.</li>
        </ul>
        <p className="italic mt-3">Une Ombre vaincue se change en petit flocon et s'envole, tout joyeux.</p>
      </CombatBox>

      <h3 className="font-display text-2xl font-bold text-slate-700 mt-8 mb-4">SCÈNE 4 : REPLANTER LES TROIS SOUVENIRS</h3>
      <ReadAloud title="Texte à lire à voix haute">
        "Essoufflés, les flocons plein la fourrure, vous arrivez enfin au pied du Grand Chêne-Mémoire. Ses racines, larges comme des ponts, s'enfoncent dans la terre grise. Entre elles, trois petits creux parfaitement ronds attendent leurs trois Glands d'Or, comme s'ils retenaient leur souffle depuis le début de cette aventure."
      </ReadAloud>

      <ActionBox title="La dernière épreuve">
        <p className="mb-4">Le héros place chaque Gland dans son creux. Propose un jet au choix de l'enfant, ou laisse une réussite automatique si le groupe préfère savourer ce moment.</p>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Le Gland du Rire :</strong> le Grand Chêne frémit, et un rire d'enfant résonne dans toute la forêt.</li>
          <li><strong>Le Gland de la Chanson :</strong> les oiseaux, tus depuis le début, se remettent à chanter tous en même temps.</li>
          <li><strong>Le Gland de l'Amitié :</strong> c'est Grisaille elle-même qui insiste pour le planter. L'arbre s'illumine de la racine à la dernière branche.</li>
        </ul>
      </ActionBox>

      <ReadAloud title="LE GRAND RÉVEIL (à lire lentement, à voix haute)">
        "Alors, dans un immense souffle doré qui part du tronc et se répand dans toutes les directions, les couleurs reviennent. Le rouge, l'orange, le jaune éclaboussent la forêt comme un feu d'artifice silencieux. La neige devient brillante et joyeuse, comme de minuscules confettis blancs. Tous les animaux se réveillent, les uns après les autres, et se souviennent, enfin, pour de bon."<br/><br/>
        "Mémé Rouquine arrive en courant et crie ton nom, ton vrai nom, net et clair. Elle te serre dans ses pattes comme si elle avait eu peur de ne jamais plus pouvoir le faire. Vous avez sauvé Grisefeuille, tous ensemble !"<br/><br/>
        "Ce soir-là, une grande fête s'improvise au pied du Grand Chêne. On allume des lanternes dans les branches, toutes dorées par les couleurs retrouvées. Grisaille, assise entre deux jeunes écureuils qui ne la lâchent plus, apprend à rire pour de bon. Piquillon enchaîne les galipettes. Les Corbeaux de Suie chipent quelques gâteaux sans que personne ne leur en veuille. Et toi, petit renard, tu t'endors, heureux et épuisé, ta feuille d'or contre ton cœur, en sachant que grâce à toi, la forêt n'oubliera plus jamais ceux qu'elle aime."
      </ReadAloud>
    </section>
  );
}
