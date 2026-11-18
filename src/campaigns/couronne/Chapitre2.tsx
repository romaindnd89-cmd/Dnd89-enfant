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

      <h3 className="font-display text-2xl font-bold text-slate-700 mt-8 mb-4">SCÈNE 1 : LA ROUTE DES CHUCHOTIS (Rencontres et petites surprises)</h3>
      <ReadAloud title="Texte à lire à voix haute">
        "La carriole s'enfonce dans la forêt des Chuchotis, et très vite, le sol devient doux et moussu, les arbres se rapprochent, et un murmure léger parcourt les feuilles : des chuchotements. « ...le détective... le détective arrive... » « ...chut, il nous entend... » Philippe l'âne ralentit, curieux. Gaston se redresse, les plumes en bataille : « Je ne tolère pas qu'on parle de moi dans mon dos. » Au bout d'un moment, le sentier se divise en trois petits chemins, chacun marqué d'un panneau fait de branches : « Par ici », « Par là », « Ni par ici, ni par là. » Un peu plus loin, un hibou à lunettes te regarde du haut d'une branche. Que fais-tu ?"
      </ReadAloud>

      <ActionBox title="La Table des Rencontres de la Forêt (1D6, ou au choix du MJ)">
        <p className="mb-4">Avant l'embuscade, la forêt réserve quelques petites surprises. Lance un D6 une ou deux fois, ou choisis celles qui amusent le plus l'enfant. Aucune n'est obligatoire, et chacune peut donner du Panache.</p>

        <h4 className="font-bold text-lg mb-2">1. L'arbre qui bavarde (Test de CHARME - DD 11)</h4>
        <p className="mb-2">Un vieux chêne se met à parler : « Je suis là depuis trois cents ans, et personne ne m'a jamais demandé comment j'allais. » Il est très triste d'être ignoré.</p>
        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li><strong>Réussite :</strong> le héros l'écoute et le console. En retour, l'arbre indique le raccourci le plus sûr (+2 à l'initiative de l'embuscade).</li>
          <li><strong>Échec :</strong> l'arbre parle pendant dix minutes sans s'arrêter. Le temps passe, mais le héros gagne une anecdote.</li>
        </ul>

        <h4 className="font-bold text-lg mb-2">2. La voyante-taupe (Test de MALICE - DD 12)</h4>
        <p className="mb-2">Une taupe aux lunettes noires, assise devant une tente, annonce : « Je vois ton avenir ! Tu auras très faim demain. »</p>
        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li><strong>Réussite :</strong> en la questionnant, le héros comprend qu'elle voit surtout... rien du tout. Elle lui offre 2 écus pour qu'il garde le secret. (<strong>Gagne un Panache</strong> pour l'esprit de déduction.)</li>
          <li><strong>Échec :</strong> il lui achète une « boule de cristal » (en fait une boule de neige). Perd 3 écus.</li>
        </ul>

        <h4 className="font-bold text-lg mb-2">3. Le champignon qui rit (aucun jet)</h4>
        <p className="mb-6">Un gros champignon rouge à pois blancs se tord de rire quand le héros passe. Si l'enfant rit avec lui, il laisse tomber un petit <strong>champignon porte-bonheur</strong> : <strong>Loot : +1 au prochain jet raté</strong> (il le transforme en réussite de justesse, une fois).</p>

        <h4 className="font-bold text-lg mb-2">4. Le hibou-conseiller (Roleplay)</h4>
        <p className="mb-6">Il donne un « conseil gratuit » : « Méfie-toi de ceux qui sourient trop... et de ceux qui ne sourient jamais. » Il ne dit rien d'autre, mais le héros peut le noter dans son carnet. C'est un <strong>indice vague</strong>, qui prendra tout son sens au chapitre 6.</p>

        <h4 className="font-bold text-lg mb-2">5. Les trois chemins (Test de MALICE - DD 12)</h4>
        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li>« Par ici » mène directement à l'embuscade. « Par là » traverse un marécage (−1 PV, mais on gagne du temps). « Ni par ici, ni par là » est le raccourci secret, plein de ronces (−1 PV, mais le héros surprend les brigands).</li>
          <li>Un jet de MALICE réussi permet de repérer lequel est lequel ; sinon, choisis au hasard.</li>
        </ul>

        <h4 className="font-bold text-lg mb-2">6. Gaston et le maïs (Roleplay)</h4>
        <p>Gaston aperçoit au bord du chemin un petit champ de maïs. Elle propose une pause : « C'est pour mes nerfs. » Si le héros accepte (10 minutes), elle mange tout son soûl, et <strong>jure une loyauté éternelle</strong>. (Rappel pour le MJ : c'est la première fois que le maïs sert de tentation. L'enfant doit s'en souvenir.)</p>
      </ActionBox>

      <h3 className="font-display text-2xl font-bold text-slate-700 mt-8 mb-4">SCÈNE 2 : L'EMBUSCADE POÉTIQUE (Exploration)</h3>
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

      <h3 className="font-display text-2xl font-bold text-slate-700 mt-8 mb-4">SCÈNE 3 : LE COMBAT DES BRIGANDS POÈTES</h3>
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

      <h3 className="font-display text-2xl font-bold text-slate-700 mt-8 mb-4">SCÈNE 4 : LE CAMP DES BRIGANDS (Exploration et Quête annexe)</h3>
      <ReadAloud title="Texte à lire à voix haute">
        "Les trois brigands vous guident, un peu honteux, vers leur repaire : une clairière avec trois tentes, un grand feu de camp, et une énorme bibliothèque faite de caisses empilées, remplies de livres de poèmes. Sur le sol, des centaines de feuilles de papier couvertes de ratures. « Voilà notre quartier général, » dit Rimbaud, un peu gêné. « On est brigands de poésie. On fait peur aux voyageurs, et ensuite on leur lit nos poèmes. » Verlaine rougit. « Personne n'a jamais voulu écouter. » La Fontaine regarde le feu : « Euh... j'ai faim. »"
      </ReadAloud>

      <ActionBox title="Options d'Exploration et Mécaniques (Bac à sable)">
        <h4 className="font-bold text-lg mb-2">1. Écouter un poème de Verlaine (Roleplay + Test de CHARME - DD 11)</h4>
        <p className="mb-2">Verlaine lit, les mains tremblantes, son poème d'amour pour une jolie fermière du village voisin : <em>« Ô fermière aux yeux de lait, / Mon cœur fait trois petits tours... / Ô fermière, quel beau bouquet, / Mais je n'ose pas te dire mon amour. »</em></p>
        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li>Le héros peut l'aider à écrire une meilleure fin (+3 si la rime est drôle ou touchante).</li>
          <li><strong>Réussite :</strong> Verlaine pleure de joie, et offre au héros <strong>Loot : le Journal des Rimes</strong> (donne +2 à un duel de rimes ou à un jet de CHARME à l'avenir).</li>
          <li><strong>Échec :</strong> Verlaine dit « Merci » en rougissant, mais le poème reste maladroit.</li>
        </ul>

        <h4 className="font-bold text-lg mb-2">2. Fouiller les caisses de livres (Test de MALICE - DD 12)</h4>
        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li><strong>Réussite :</strong> parmi les livres, le héros trouve un parchemin avec une carte griffonnée et un reçu : « Reçu de 100 écus, payés par M. G. (tache d'encre violette). » C'est une <strong>preuve écrite</strong> : indice n°3 confirmé.</li>
          <li><strong>Échec :</strong> il ne trouve que des recueils de poèmes de jardinage.</li>
        </ul>

        <h4 className="font-bold text-lg mb-2">3. Partager un repas avec les brigands (aucun jet)</h4>
        <p className="mb-6">La Fontaine fait cuire des saucisses. Le héros mange avec eux, rit, et <strong>regagne 4 PV</strong>. Les brigands racontent comment ils sont devenus brigands : « On voulait devenir poètes, mais personne ne payait. Alors on a pensé : brigands-poètes ! » <strong>Gagne un point de Panache</strong> si le héros leur donne un conseil sincère.</p>

        <h4 className="font-bold text-lg mb-2">4. Proposer aux brigands de changer de métier (Test de CHARME - DD 13)</h4>
        <p>Le héros peut suggérer d'ouvrir un <strong>café-poésie</strong> dans le village. Ils s'enthousiasment. <strong>Réussite :</strong> ils jurent de ne plus attaquer les voyageurs, et promettent d'aider le héros si besoin (<strong>un appel à l'aide gratuit</strong> au chapitre 8). <strong>Échec :</strong> ils hésitent, mais promettent d'y réfléchir.</p>
      </ActionBox>

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
