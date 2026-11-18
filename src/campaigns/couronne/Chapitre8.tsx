import React from 'react';
import { ReadAloud, CombatBox, ActionBox, InfoBox } from '../../components/StoryBlocks';

export default function Chapitre6() {
  return (
    <section id="chap8">
      <h2 className="font-display text-4xl font-bold text-yellow-700 mb-6 border-b-4 border-yellow-200 pb-2 mt-16">
        CHAPITRE 8 : LE GRAND BANQUET
      </h2>
      <p className="text-slate-500 font-medium mb-8">Niveau recommandé : 3<br/>Lieu : La grande salle de banquet du palais de Pétaouchnok<br/>Ambiance : Le grand final : un procès, un démasquage, un combat contre le Chancelier et beaucoup de rires. Prends ton temps.</p>

      <InfoBox title="Synopsis du Chapitre pour le Maître du Jeu">
        <p>Trois temps : (1) <strong>le procès</strong>, où le héros présente ses preuves pour convaincre le roi ; (2) <strong>le combat final</strong> contre le Chancelier, qui met la Couronne et devient très sérieux ; (3) <strong>le dénouement</strong>. Le retour de Gaston a eu lieu au chapitre 7 : rappelle ce que le héros lui a répondu. Le Chancelier est protégé par un « Bouclier de Sérieux » : <strong>chaque blague et chaque rire l'affaiblit</strong>. C'est la solution de l'histoire.</p>
      </InfoBox>

      <InfoBox title="Rappel des choix du chapitre 7">
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Plan A (Procès Public) :</strong> +2 au jet du procès, mais le Chancelier est prévenu.</li>
          <li><strong>Plan B (Soupière) :</strong> si le héros a réussi l'infiltration, il tient déjà la Couronne : le Chancelier doit improviser avec une copie, et le héros commence le combat avec +2 à tous ses jets (la Couronne le protège un instant).</li>
          <li><strong>Plan C (Cheval de Troie) :</strong> le héros commence avec 1 Panache de plus, et le Baron l'accompagne dans le combat.</li>
          <li><strong>Le Carnet Gris et les autres preuves</strong> trouvés en route comptent comme des preuves supplémentaires (+1 chacune).</li>
        </ul>
      </InfoBox>

      <h3 className="font-display text-2xl font-bold text-slate-700 mt-8 mb-4">SCÈNE 1 : LE PROCÈS DU BANQUET (Roleplay et Enquête)</h3>
      <ReadAloud title="Texte à lire à voix haute">
        "La grande salle de banquet est pleine à craquer : des centaines d'invités en robes de gala, des tables couvertes de gâteaux, des trombones, un orchestre de chaussettes. Au centre, sur son trône, le roi Gaspard, pas de baignoire cette fois, a le visage défait. À côté de lui, le Chancelier Gribouille, tout en gris, lève la main : « Majesté, nobles invités, le voleur a été découvert ! Voici, enchaîné par mes soins, le Baron Cornichon ! » Deux gardes tiennent le Baron par les épaules. Il te fait un signe discret : c'est le moment. « Et voici maintenant, pour le procès, le détective que j'ai moi-même chargé de l'enquête ! » Il se tourne vers toi, sûr de lui. Tout le monde te regarde. Que fais-tu ?"
      </ReadAloud>

      <ActionBox title="Options d'Exploration et Mécaniques : le procès par les preuves">
        <p className="mb-4">Le héros doit <strong>convaincre le roi que le Chancelier est coupable</strong>. Pour ça, il présente ses preuves, une par une, comme au tribunal. Pour chaque indice, l'enfant explique ce qu'il a trouvé : <strong>chaque indice bien expliqué donne +1 au jet final</strong>.</p>

        <h4 className="font-bold text-lg mb-2">Les preuves possibles</h4>
        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li><strong>Preuve 1 :</strong> la tache d'encre violette sur le coussin (chapitre 1).</li>
          <li><strong>Preuve 2 :</strong> la tache d'encre sur le doigt du Chancelier (chapitre 1).</li>
          <li><strong>Preuve 3 :</strong> les brigands payés par un « monsieur en gris, aux doigts tachés d'encre » (chapitre 2).</li>
          <li><strong>Preuve 4 :</strong> le marché payé pour accuser le Baron (chapitre 4).</li>
          <li><strong>Preuve 5 :</strong> la lettre signée « G. » du Baron (chapitre 6).</li>
          <li><strong>Preuve 6 :</strong> l'emplacement de la Couronne, dans la soupière, révélé par Gaston.</li>
        </ul>

        <h4 className="font-bold text-lg mb-2">Le jet final (Test de CHARME - DD 14, +1 par preuve présentée)</h4>
        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li><strong>Réussite :</strong> le roi comprend. Le Chancelier devient pâle : il recule.</li>
          <li><strong>Échec :</strong> le roi hésite : « Les preuves sont... intéressantes. Mais le Chancelier est mon plus fidèle conseiller depuis trente ans ! » Le Chancelier saute sur l'occasion et passe à l'action (le combat commence quand même, mais le héros perd son bonus d'initiative).</li>
        </ul>

        <h4 className="font-bold text-lg mb-2">Le coup de théâtre (aucun jet)</h4>
        <p>Si le héros ouvre la soupière (ou si Gaston la renverse sur la table), la Couronne roule jusqu'au pied du roi. Les invités poussent un cri. <strong>Gagne un point de Panache</strong> pour ce rebondissement spectaculaire.</p>
      </ActionBox>

      <h3 className="font-display text-2xl font-bold text-slate-700 mt-8 mb-4">SCÈNE 2 : GRIBOUILLE LE TRÈS SÉRIEUX (Combat final)</h3>
      <ReadAloud title="Texte à lire à voix haute">
        "Le Chancelier ne tremble pas. Il lève une main, et d'un geste, la Couronne bondit dans sa paume. Il la pose sur sa tête. Un éclair gris traverse la salle. Les bougies s'éteignent. Les trombones se taisent. « Assez ! » dit-il d'une voix froide qui résonne partout. « Vous voulez du rire ? Voilà ce qu'il en coûte. À partir de ce soir, ce royaume sera sérieux, silencieux et propre. » Son manteau gris se gonfle comme une voile, et autour de lui, un halo sombre se forme, fait de trois anneaux de brume grise. La salle entière retient son souffle. Le héros prend une grande inspiration. Que fais-tu ?"
      </ReadAloud>

      <CombatBox title="Mécaniques de Combat (le Chancelier Gribouille, la Couronne sur la tête)">
        <p className="mb-4">C'est le combat le plus dur de l'histoire. Le héros peut utiliser tout son Panache. <strong>Initiative :</strong> D20 + Courage pour le héros, D20 +3 pour le Chancelier.</p>

        <h4 className="font-bold text-lg mb-2">L'Ennemi : Gribouille le Très Sérieux</h4>
        <ul className="list-disc pl-5 space-y-1 mb-6">
          <li><strong>Points de Vie (PV) :</strong> 24.</li>
          <li><strong>Classe d'Armure (CA) :</strong> 15 tant que le « Bouclier de Sérieux » est actif, 11 quand il est brisé.</li>
          <li><strong>Attaques :</strong> « Décret Glacial » (+5 pour toucher, 1D8 de dégâts), « Regard Sévère » (le héros perd 1 Panache s'il rate un jet de CHARME DD 13).</li>
          <li><strong>Bouclier de Sérieux :</strong> <strong>trois anneaux de brume</strong>. Chaque anneau se brise quand quelqu'un fait <strong>rire</strong> dans la salle (voir ci-dessous). Quand les trois sont brisés, la CA tombe à 11 et la Couronne se met à clignoter de lumière dorée.</li>
          <li><strong>Phase 2 (à 12 PV ou moins) :</strong> le Chancelier hurle « SILENCE ! » : le héros ne peut plus dépenser de Panache pendant un tour. Mais il peut compter sur ses alliés.</li>
        </ul>

        <h4 className="font-bold text-lg mb-2">Tactique et Environnement (Le rôle du MJ) :</h4>
        <ul className="list-disc pl-5 space-y-4 mb-4">
          <li><strong>Option A - Attaque classique :</strong> D20 + COURAGE (+2), 1D6 +1. Efficace seulement quand le bouclier est brisé.</li>
          <li><strong>Option B - Faire rire pour briser un anneau (CHARME - DD 13, ou Réplique Cinglante avec 1 Panache) :</strong> une blague, une grimace, une imitation du Chancelier. <strong>Si l'enfant fait vraiment rire, c'est réussi sans jet.</strong> Chaque rire brise un anneau.</li>
          <li><strong>Option C - Les alliés font rire :</strong> le roi (très doué) peut jeter une brioche à la tête du Chancelier : un anneau brisé. Le Baron imite un hibou (un anneau brisé). Boudin raconte une blague de troll (un anneau brisé).</li>
          <li><strong>Option D - Gaston (si pardonné) :</strong> elle lance une pluie de maïs doré : le Chancelier glisse (il perd son tour) et le héros gagne +3 à son prochain jet.</li>
          <li><strong>Option E - Esquive et ruse (COURAGE ou MALICE - DD 13) :</strong> le héros utilise la table, les gâteaux, la nappe pour esquiver le Décret Glacial et frapper par surprise (dégâts doublés si la nappe est tirée).</li>
          <li><strong>Option F - Les potions :</strong> une potion de pomme redonne 5 PV (prend un tour).</li>
        </ul>

        <h4 className="font-bold text-lg mb-2 mt-6">Phase 3 (à 6 PV ou moins) : l'Armée de Statues Grises</h4>
        <p className="mb-2">Désespéré, le Chancelier lève la main : des statues de pierre, au fond de la salle, s'animent, les yeux gris. <strong>Trois Statues Grises</strong> (6 PV chacune, CA 12, attaque à +3, 1D6 de dégâts) avancent lentement vers le héros.</p>
        <ul className="list-disc pl-5 space-y-2 mb-4">
          <li><strong>Chaque rire dans la salle fait trembler une statue :</strong> elle perd son tour.</li>
          <li><strong>Boudin, le Baron et Gaston</strong> peuvent chacun neutraliser une statue (jet de CHARME ou de COURAGE, DD 12).</li>
          <li><strong>Le héros peut ignorer les statues</strong> et frapper directement le Chancelier (CA 11 si le bouclier est brisé) pour finir le combat plus vite, au risque de subir une attaque de statue (1D6).</li>
        </ul>
        <p className="italic">Si le héros tombe à 0 PV, KO comique : il tombe dans un gâteau géant, se réveille avec 5 PV, perd un Panache, et la foule, qui rit de bon cœur, brise un anneau tout seule.</p>
      </CombatBox>

      <ReadAloud title="Texte à lire à voix haute (le dernier anneau se brise)">
        "L'ultime anneau de brume se fend, craque, et s'éparpille en fumée. Le Chancelier lève les bras, stupéfait, comme un homme qui tombe dans le vide. La Couronne, sur sa tête, se met à clignoter : doré, gris, doré, gris. Quelque part dans la salle, quelqu'un éclate de rire, un petit rire de bébé, un rire d'oie, un rire de roi. Puis tous les invités rient ensemble, de plus en plus fort, un énorme rire qui secoue les murs. La Couronne s'enflamme d'une lumière d'or pur, arrache le gris du Chancelier, et s'envole de sa tête pour retomber dans les mains du roi. Gribouille, la bouche ouverte, reste immobile. Puis, très lentement, il ouvre les lèvres... et glousse. Un petit gloussement. Puis un autre. Il se met la main sur la bouche, horrifié. « Je... ne peux pas... Hi hi... Je ne peux plus m'arrêter ! »"
      </ReadAloud>

      <h3 className="font-display text-2xl font-bold text-slate-700 mt-8 mb-4">SCÈNE 3 : L'ULTIME BLAGUE (Épreuve finale de Charme)</h3>
      <ReadAloud title="Texte à lire à voix haute">
        "Le Chancelier est à genoux, la Couronne a quitté sa tête, mais son visage reste figé. Il ne rit pas. Ses lèvres tremblent, ses yeux sont rouges, et pourtant, il se retient de toutes ses forces. « Vous ne comprenez pas, » murmure-t-il. « Quand j'étais petit, on s'est moqué de moi devant tout le monde. J'ai promis de ne plus jamais rire. Ni de laisser les autres rire. Ça fait trente ans que je tiens. » Le roi, ému, s'approche. La salle retient son souffle. Tout le monde regarde le héros. Il y a une dernière chose à faire : lui faire rire. Vraiment. Pour de bon."
      </ReadAloud>

      <ActionBox title="L'Arbre de Dialogue et les Résolutions : la plus belle blague du monde">
        <p className="mb-4">C'est le <strong>moment émotionnel</strong> de l'aventure. Le héros doit trouver <strong>la blague qui fera rire le Chancelier</strong> pour de bon. Laisse l'enfant improviser : c'est lui qui invente la blague (ou la grimace, la chanson, l'histoire).</p>

        <h4 className="font-bold text-lg mb-2">Le jet de l'ultime blague (Test de CHARME - DD 13, +3 si la blague est vraiment drôle, +2 si elle est tendre)</h4>
        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li><strong>Réussite :</strong> le Chancelier éclate d'un rire immense, tendre, libérateur, un rire qui secoue ses épaules et ses cravates. Il se met à pleurer de joie. La salle, émue, applaudit.</li>
          <li><strong>Échec :</strong> il sourit à peine, mais ses yeux brillent. Le roi, qui a toujours su faire rire, lui souffle une blague, et ça marche. (Gagne +1 Panache si le héros remercie le roi.)</li>
          <li><strong>Avec l'aide de Gaston :</strong> si l'oie a été pardonnée, elle peut cancaner un « COUAC ! » si maladroit que le Chancelier ne peut plus s'arrêter de rire. (Fait gagner +2 au jet.)</li>
        </ul>

        <h4 className="font-bold text-lg mb-2">Les mots du Chancelier (à lire lentement)</h4>
        <p className="italic">« Je... j'avais oublié que ça faisait si bon. Pardon, Majesté. Pardon, Baron. Pardon, détective. » Il essuie ses yeux avec sa cravate grise. « Je crois que je vais enlever ce gris, finalement. »</p>
      </ActionBox>

      <h3 className="font-display text-2xl font-bold text-slate-700 mt-8 mb-4">SCÈNE 4 : LE DÉNOUEMENT (Roleplay)</h3>
      <ReadAloud title="Texte à lire à voix haute">
        "Le roi Gaspard se lève, la Couronne dans les mains, des larmes de joie dans les yeux. « Mes amis ! » Il la pose sur sa tête, et un grand éclair d'or éclaire tout le royaume. Au loin, dans les rues, les gens se mettent à rire sans savoir pourquoi. « Détective, » dit-il en te serrant dans ses bras mouillés (il est encore un peu savonneux), « tu as sauvé le royaume. Et tu as sauvé mon Banquet. Ce soir, on mange, on chante, on rit... et on dit merci à ceux qui ont rendu ça possible. » Il se tourne vers le Baron : « Cornichon, mon ami, pardon. » Il se tourne vers toi : « Et pour toi, ce qui reste d'un royaume reconnaissant. »"
      </ReadAloud>

      <ActionBox title="Les choix de la fin">
        <h4 className="font-bold text-lg mb-2">Que faire du Chancelier ? (Roleplay)</h4>
        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li><strong>Le pardonner :</strong> « La punition parfaite : un an à travailler comme bouffon du roi. » Le Chancelier, qui rit de plus en plus, accepte. (+1 Panache pour la clémence.)</li>
          <li><strong>Le faire juger :</strong> le roi décide d'une peine amusante : « Interdit de sérieux pendant un an ! » L'histoire finit sur un éclat de rire.</li>
          <li><strong>Lui demander pourquoi :</strong> Gribouille avoue qu'enfant, on s'était moqué de lui, et qu'il avait juré de ne plus jamais rire. Le héros peut lui répondre (CHARME, DD 12) : s'il réussit, le Chancelier, désarmé, pleure de joie.</li>
        </ul>

        <h4 className="font-bold text-lg mb-2">Que faire de Gaston ? (Roleplay)</h4>
        <p>Si le héros a pardonné, le roi lui offre un titre : « Détective royal en second ». Elle fond en larmes. Sinon, elle repart seule, la tête haute, avec son chapeau de travers. Dans les deux cas, <strong>laisse un moment de calme</strong> : ce que dit le héros compte plus que n'importe quel jet.</p>
      </ActionBox>

      <InfoBox title="Récompenses finales">
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Loot :</strong> la <strong>Médaille du Détective Royal</strong> et 100 écus du roi.</li>
          <li><strong>Panache :</strong> recompte les points de Panache : chaque point qui reste vaut une médaille de bravoure (voir l'épilogue).</li>
          <li><strong>Le cœur de l'histoire :</strong> le rire est une force. Et un ami qui se trompe peut revenir, si on lui laisse la porte ouverte.</li>
        </ul>
      </InfoBox>
    </section>
  );
}
