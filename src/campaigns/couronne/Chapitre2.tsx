import React from 'react';
import { ReadAloud, CombatBox, ActionBox, InfoBox } from '../../components/StoryBlocks';

export default function Chapitre2() {
  return (
    <section id="chap2">
      <h2 className="font-display text-4xl font-bold text-emerald-700 mb-6 border-b-4 border-emerald-200 pb-2 mt-16">
        CHAPITRE 2 : LA FORÊT DES BRIGANDS POÈTES
      </h2>
      <p className="text-slate-500 font-medium mb-8">Niveau recommandé : 3<br/>Lieu : La Forêt des Chuchotis, sur la route du Marché aux Menteurs<br/>Ambiance : Un guet-apens qui tourne au concours de poésie. Premier vrai combat, à trois contre un.</p>

      <InfoBox title="Synopsis du Chapitre pour le Maître du Jeu">
        <p>Trois brigands ne parlent qu'en rimes et ne peuvent pas attaquer tant qu'ils n'ont pas trouvé une rime. Le héros peut les affronter à l'épée, les battre à leur propre jeu (un duel de rimes), ou négocier. <strong>Indice n°3 pour le MJ :</strong> les brigands ont été payés par quelqu'un « tout en gris », et ils avaient l'ordre de « retarder le détective, pas de le blesser ». Ce n'est pas un hasard.</p>
      </InfoBox>

      <h3 className="font-display text-2xl font-bold text-slate-700 mt-8 mb-4">SCÈNE 1 : L'EMBUSCADE POÉTIQUE (Exploration)</h3>
      <ReadAloud title="Texte à lire à voix haute">
        "La forêt des Chuchotis est jolie comme une carte postale : de grands chênes, des rayons de soleil, des écureuils qui font la sieste. Gaston marche devant, la tête haute, en commentant : « Voyez cette mousse, détective. Médiocre. Voyez ce sentier. Honteux. » Tout à coup, trois silhouettes sautent des arbres, brandissant des épées en bois et des plumes d'oie en guise de dagues."<br/><br/>
        "« Halte-là, voyageurs, c'est la forêt de la peur ! » crie le plus grand. « Et donc, c'est l'heure de payer vos honneurs ! » ajoute le deuxième en rougissant. Le troisième hésite : « Euh... donnez-nous vos bourses, s'il vous plaît... et... biscuit... non, bourse... et... duvet ? » Il s'arrête, mortifié. Les deux autres soupirent. Sur le sentier, un tronc couché pourrait servir d'abri. Derrière toi, des branches basses vont se balancer au moindre souffle. Que fais-tu ?"
      </ReadAloud>

      <InfoBox title="Profil des Brigands Poètes">
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Rimbaud le Grand :</strong> le chef, immense, très fier de ses rimes, très mal à l'aise sans.</li>
          <li><strong>Verlaine le Doux :</strong> petit, timide, rougit à chaque vers.</li>
          <li><strong>La Fontaine le Distrait :</strong> toujours une rime de retard. Il rime avec « euh ».</li>
          <li><strong>Règle comique du MJ :</strong> un brigand ne peut attaquer que s'il a prononcé une rime. Joue-les en cherchant tes rimes devant l'enfant : plus c'est bancal, plus c'est drôle. Si tu es à court, fais-les bloquer et soupirer.</li>
          <li><strong>Ce qu'ils savent :</strong> ils ont été payés « 100 écus par un monsieur tout en gris, avec les doigts tachés d'encre » pour « retarder le détective, sans le blesser, surtout pas ». Ils le diront après leur défaite ou un bon baratin.</li>
        </ul>
      </InfoBox>

      <ActionBox title="Options d'Exploration et Mécaniques (Bac à sable)">
        <h4 className="font-bold text-lg mb-2">1. Repérer l'embuscade avant qu'elle ne démarre (Test de MALICE - DD 12)</h4>
        <p className="mb-6"><strong>Réussite :</strong> le héros évite d'être surpris, et gagne <strong>l'initiative</strong> (il joue en premier). <strong>Échec :</strong> les brigands lancent leur attaque d'abord, et un des trois frappe sans avoir à rimer.</p>

        <h4 className="font-bold text-lg mb-2">2. Se cacher derrière le tronc couché (Test de COURAGE - DD 11)</h4>
        <p className="mb-6"><strong>Réussite :</strong> le héros s'abrite et profite d'un bonus de <strong>+2 à sa CA</strong> pendant le premier tour. <strong>Échec :</strong> le tronc roule et lui tombe sur le pied (−2 PV).</p>

        <h4 className="font-bold text-lg mb-2">3. Défier les brigands en duel de rimes (Test de CHARME - DD 13)</h4>
        <ul className="list-disc pl-5 space-y-2">
          <li>L'enfant répond avec sa propre rime : plus elle est drôle, plus il gagne de points. <strong>Si la rime est vraiment réussie : +3 au jet.</strong></li>
          <li><strong>Réussite :</strong> les brigands, bouleversés, versent une larme et jettent leurs plumes. Ils parlent : le monsieur en gris, les 100 écus... <strong>Le combat est évité.</strong> Gagne un point de Panache.</li>
          <li><strong>Échec :</strong> ils sont vexés : « Ta rime est faible, ton style est vil ! » Le combat commence, avec leurs attaques à +1.</li>
        </ul>
      </ActionBox>

      <h3 className="font-display text-2xl font-bold text-slate-700 mt-8 mb-4">SCÈNE 2 : LE COMBAT DES BRIGANDS POÈTES</h3>
      <ReadAloud title="Texte à lire à voix haute (si le combat démarre)">
        "« Dégaine ton épée, l'ami, on va se battre à l'ennemi ! » hurle Rimbaud. « Voilà, c'était la rime ! » murmure Verlaine, tout fier. La Fontaine se jette en avant : « Euh... prends ça... euh... ça ! » Les trois épées de bois sifflent dans l'air. Gaston, lui, se cache derrière ton dos en soupirant : « Je suis un observateur. »"
      </ReadAloud>

      <CombatBox title="Mécaniques de Combat (trois brigands, un héros)">
        <p className="mb-4">Initiative : chacun lance un D20, le héros ajoute son Courage. Rappel : attaque = D20 + talent contre la CA, puis 1D6 +1 de dégâts avec l'épée.</p>

        <h4 className="font-bold text-lg mb-2">Les Ennemis : 3 Brigands Poètes</h4>
        <ul className="list-disc pl-5 space-y-1 mb-6">
          <li><strong>Rimbaud :</strong> 10 PV, CA 12. Attaque à +3 (le MJ lance D20 +3 : touché si le total atteint 13), 1D6 de dégâts.</li>
          <li><strong>Verlaine :</strong> 8 PV, CA 11. Attaque à +2, 1D4 de dégâts. Il rougit si on le complimente et rate son tour.</li>
          <li><strong>La Fontaine :</strong> 8 PV, CA 11. Attaque à +1, 1D4 de dégâts. Il attaque seulement s'il trouve une rime (D20 : 10 ou plus).</li>
        </ul>

        <h4 className="font-bold text-lg mb-2">Tactique et Environnement (Le rôle du MJ) :</h4>
        <ul className="list-disc pl-5 space-y-4 mb-4">
          <li><strong>Option A - Coup d'épée :</strong> D20 + COURAGE (+2), 1D6 +1 de dégâts.</li>
          <li><strong>Option B - Réplique Cinglante (1 Panache) :</strong> le héros lance une moquerie sur la rime ratée d'un brigand : celui-ci perd son tour, et ses alliés ricanent.</li>
          <li><strong>Option C - Les branches basses (MALICE - DD 12) :</strong> le héros fait basculer une branche qui assomme deux brigands à la fois (1D6 de dégâts chacun).</li>
          <li><strong>Option D - Utiliser Gaston :</strong> il peut mordre un brigand (D20 +2, 1D4 de dégâts), mais en échange le héros doit lui promettre du maïs.</li>
          <li><strong>Option E - Se rendre au concours :</strong> à tout moment, si l'enfant propose un nouveau duel de rimes (CHARME, DD 12), le combat s'arrête et tout le monde tend l'oreille.</li>
        </ul>
        <p className="italic">Un brigand à 0 PV s'évanouit en récitant un vers triste. Si le héros tombe à 0 PV, KO comique : il se réveille attaché à un arbre avec une couronne de fleurs, 5 PV, un Panache en moins, et les brigands, gênés, le détachent en s'excusant.</p>
      </CombatBox>

      <ReadAloud title="Texte à lire à voix haute (après la bataille)">
        "Les trois brigands sont assis dans l'herbe, vaincus, un peu penauds. « Pardon, détective, » murmure Verlaine. « On ne voulait pas être méchants. » « On avait une commande, » dit Rimbaud. « Un monsieur tout en gris, avec les doigts tachés d'encre, nous a donné cent écus pour te retarder, sans te blesser. Il a dit que c'était pour une surprise. » « Une surprise... euh... bise ? » tente La Fontaine. Les deux autres le regardent. « Non. »"
      </ReadAloud>

      <InfoBox title="Récompenses et Indice n°3">
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Loot : une Bourse de 15 écus</strong> et <strong>une Carte du Marché aux Menteurs</strong>, où un « M » est entouré en violet (<em>encre violette !</em>).</li>
          <li><strong>Indice n°3 :</strong> le monsieur en gris avait les doigts tachés d'encre. Le héros pourra le relier au Chancelier plus tard.</li>
          <li><strong>Panache :</strong> donne un point au héros s'il a épargné les brigands ou si sa rime a fait rire.</li>
        </ul>
      </InfoBox>
    </section>
  );
}
