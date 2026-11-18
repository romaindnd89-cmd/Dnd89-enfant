import React from 'react';
import { ReadAloud, CombatBox, ActionBox, InfoBox } from '../../components/StoryBlocks';

export default function Chapitre2() {
  return (
    <section id="chap2">
      <h2 className="font-display text-4xl font-bold text-pink-700 mb-6 border-b-4 border-pink-200 pb-2 mt-16">
        CHAPITRE 2 : LA FORÊT DES CHAMPIGNONS
      </h2>
      <p className="text-slate-500 font-medium mb-8">Niveau recommandé : 1<br/>Lieu : La Forêt des Champignons Rebondissants, à l'est du village<br/>Ambiance : Étrange, drôle et colorée. Deux combats gentils et rigolos : des gelées, puis un champignon géant.</p>

      <InfoBox title="Synopsis du Chapitre pour le Maître du Jeu">
        <p>Les héros traversent une forêt de gros champignons qui rebondissent, puis tombent sur deux gelées farceuses qui gardent un sentier. C'est le premier combat : <strong>prends le temps d'expliquer les dés avec l'exemple.</strong> Une petite quête annexe offre une aide pour le chapitre 3.</p>
      </InfoBox>

      <h3 className="font-display text-2xl font-bold text-slate-700 mt-8 mb-4">SCÈNE 1 : LES CHAMPIGNONS QUI REBONDISSENT (Exploration)</h3>
      <ReadAloud title="Texte à lire à voix haute">
        "La forêt est un monde à l'envers. Les troncs sont des champignons géants, rose bonbon, orange vif, bleu pâle, avec des chapeaux aussi larges que des tables. Vous marchez sur un sol mou comme un matelas. Un chapeau jaune fait POING ! quand vous marchez dessus, et vous rebondissez en riant. Dans l'air flottent de petites poussières dorées qui sentent la barbe à papa."<br/><br/>
        "Les traces de suie noire sont bien là, sur le sol mou, et elles s'arrêtent devant un large ruisseau de sirop bleu, avec un vieux pont de bois de champignon. De l'autre côté, un grand chapeau violet barre le sentier. Que faites-vous ?"
      </ReadAloud>

      <ActionBox title="Options d'Exploration et Mécaniques (Bac à sable)">
        <h4 className="font-bold text-lg mb-2">1. Rebondir sur les champignons pour traverser (Test de COURAGE - DD 9)</h4>
        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li><strong>Réussite :</strong> un grand saut, et le héros passe de l'autre côté en riant.</li>
          <li><strong>Échec :</strong> il rebondit trop fort et atterrit dans le sirop, trempé et collant. Aucun dégât : il rigole. Il peut retenter.</li>
          <li><strong>Coup de main :</strong> l'autre joueur peut lui tendre la main (+2).</li>
        </ul>

        <h4 className="font-bold text-lg mb-2">2. Fouiller au pied des gros champignons (Test de MALICE - DD 9)</h4>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Réussite : Loot : Chapeau-bouclier.</strong> Un petit champignon dur comme du bois. Une fois dans l'aventure, il annule une attaque contre toi.</li>
          <li><strong>Échec :</strong> que des champignons tout mous qui éclatent en poussière rose.</li>
        </ul>
      </ActionBox>

      <h3 className="font-display text-2xl font-bold text-slate-700 mt-8 mb-4">SCÈNE 2 : LES DEUX GELÉES FARCEUSES (Combat)</h3>
      <ReadAloud title="Texte à lire à voix haute">
        "Alors que vous approchez du grand chapeau violet, il se met à trembler, à rire, à se diviser en deux ! Deux grosses gelées vertes et brillantes, grosses comme des ballons, rebondissent devant vous en faisant des « bloup bloup ». « Le péage ! » dit l'une d'une voix de bulle. « Il faut payer le péage pour passer ! » « Ou jouer avec nous ! » ajoute l'autre. « Mais attention, nos jeux, c'est de la bagarre ! » Elles s'élancent en faisant glouglou."
      </ReadAloud>

      <CombatBox title="Mécaniques de Combat (Votre premier combat)">
        <p className="mb-2">Le combat se joue <strong>chacun son tour</strong>. À chaque tour, un héros lance le <strong>D20</strong> et ajoute son talent pour savoir s'il <em>touche</em> : si le total atteint la <strong>CA</strong> (la difficulté pour toucher) du monstre, c'est touché. Puis il lance le <strong>D6</strong> pour compter les dégâts.</p>
        <p className="italic mb-4"><strong>Exemple :</strong> le Chevalier frappe une gelée. Il lance le D20 : 8. Il ajoute son Courage (+3) : 11. 11 atteint la CA de 10 : touché ! Il lance le D6 : 4. La gelée avait 6 PV, il lui en reste 2.</p>
        <p className="mb-4">Initiative : chaque héros lance un D20 ; les gelées jouent après les deux héros.</p>

        <h4 className="font-bold text-lg mb-2">Les Ennemis : 2 Gelées Farceuses</h4>
        <ul className="list-disc pl-5 space-y-1 mb-6">
          <li><strong>Points de Vie (PV) :</strong> 6 chacune.</li>
          <li><strong>Classe d'Armure (CA) :</strong> 10.</li>
          <li><strong>Attaque (Éclaboussure) :</strong> elles touchent à 10 ou plus sur un D20 (le MJ lance), et font 1D4 de dégâts. Chaque gelée attaque un héros différent.</li>
        </ul>

        <h4 className="font-bold text-lg mb-2">Tactique et Environnement (Le rôle du MJ) :</h4>
        <ul className="list-disc pl-5 space-y-4 mb-4">
          <li><strong>Option A - Attaque classique :</strong> Coup d'épée (COURAGE) ou Étincelle (MALICE), puis 1D6 de dégâts.</li>
          <li><strong>Option B - Le sirop (MALICE - DD 9) :</strong> verser du sirop bleu sur une gelée la colle au sol : elle passe son prochain tour.</li>
          <li><strong>Option C - Les rebonds (COURAGE - DD 9) :</strong> bondir sur un champignon pour frapper de plus haut : +2 aux dégâts de l'attaque.</li>
          <li><strong>Option D - Les calmer (CŒUR - DD 10) :</strong> les jouer à la gentillesse. Elles se transforment en bonbons et cessent le combat.</li>
        </ul>
        <p className="italic">Si un héros tombe à 0 PV, l'autre l'aide à se relever (il repart avec 3 PV). Ne dis jamais « mort » : dis « trop fatigué ». Les gelées, vexées d'avoir été si méchantes, offrent un câlin de gelée qui redonne 2 PV à chaque héros.</p>
      </CombatBox>

      <ReadAloud title="Texte à lire à voix haute (la fin du combat)">
        "Les gelées s'effondrent en deux flaques brillantes, puis rebondissent de nouveau, de plus en plus petites, jusqu'à devenir de minuscules billes sucrées. « On abandonne ! » rient-elles. « C'était trop drôle ! Prenez le sentier, petits héros. Et si vous croisez le petit dragon, dites-lui qu'on l'aime bien ! » Elles roulent s'asseoir sous un champignon rose, en grignotant leur propre queue sucrée."
      </ReadAloud>

      <h3 className="font-display text-2xl font-bold text-slate-700 mt-8 mb-4">SCÈNE 3 : LE CHAMPIGNON GÉANT SAUTEUR (Combat)</h3>
      <ReadAloud title="Texte à lire à voix haute">
        "Vous venez de laisser les gelées derrière vous quand le sol se met à trembler : BOING... BOING... BOING ! Un champignon violet, gros comme une maison, sort de terre en rebondissant sur son pied, avec deux petits yeux ronds sous son chapeau. « QUI MARCHE SUR MON JARDIN ? » demande-t-il d'une voix de basse. À chaque saut, il lâche un nuage de spores roses qui sentent la barbe à papa. « Je suis Gros-Chapeau, roi des champignons ! Personne ne passe sans me battre au saut ! »"
      </ReadAloud>

      <CombatBox title="Mécaniques de Combat (Gros-Chapeau, le champignon géant)">
        <h4 className="font-bold text-lg mb-2">L'Ennemi : Gros-Chapeau</h4>
        <ul className="list-disc pl-5 space-y-1 mb-4">
          <li><strong>Points de Vie (PV) :</strong> 14. <strong>Classe d'Armure (CA) :</strong> 11.</li>
          <li><strong>Attaque (Saut écrasant) :</strong> touche à 10 ou plus (D20 du MJ), 1D6 de dégâts. Il saute un tour sur deux : le tour d'après, il est en l'air et ne peut pas attaquer.</li>
          <li><strong>Spores qui chatouillent :</strong> toutes les deux attaques, il souffle des spores : un héros tire un D6 ; sur 1 ou 2, il éclate de rire et passe son tour.</li>
        </ul>
        <h4 className="font-bold text-lg mb-2">Tactique et Environnement (Le rôle du MJ) :</h4>
        <ul className="list-disc pl-5 space-y-3">
          <li><strong>Option A - Coup d'épée ou Étincelle :</strong> D20 + talent, 1D6.</li>
          <li><strong>Option B - Viser le pied (COURAGE - DD 11) :</strong> quand il est au sol, les dégâts sont doublés.</li>
          <li><strong>Option C - Rebondir sur un petit champignon (COURAGE - DD 10) :</strong> frapper depuis les airs, +2 aux dégâts.</li>
          <li><strong>Option D - Lueur magique (Magicien) :</strong> il est ébloui et perd son prochain saut.</li>
          <li><strong>Option E - Le faire rire (CŒUR - DD 11) :</strong> Gros-Chapeau rigole si fort qu'il perd l'équilibre.</li>
        </ul>
        <p className="italic mt-3">À 0 PV, il s'assoit, tout rond : « Pardon, c'était pour rire ! » Il offre une <strong>poudre de spores</strong> (une fois : fait éternuer un ennemi, qui perd son tour).</p>
      </CombatBox>

      <ActionBox title="Butin et Quête Annexe : le pont cassé">
        <p className="mb-4"><strong>Loot : une Bille de gelée,</strong> qui rebondit très haut : au chapitre 3, elle permet de lancer un objet très loin.</p>
        <h4 className="font-bold text-lg mb-2">Réparer le pont de champignons (Test de COURAGE ou de MALICE - DD 9)</h4>
        <p>Un petit crapaud pêcheur, Monsieur Ploc, regarde tristement son pont cassé : « Mon pont est tombé, et mon bateau est de l'autre côté ! » Les deux héros peuvent le réparer, chacun avec ses talents. <strong>Récompense :</strong> il offre une <strong>carte griffonnée</strong> de la Montagne de Cristal, qui donne <strong>+2 au premier jet du chapitre 3</strong>.</p>
      </ActionBox>
    </section>
  );
}
