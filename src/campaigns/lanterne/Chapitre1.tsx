import React from 'react';
import { ReadAloud, CombatBox, ActionBox, InfoBox, Deduction, FirstRound } from '../../components/StoryBlocks';

export default function Chapitre1() {
  return (
    <section id="chap1">
      <h2 className="font-display text-4xl font-bold text-amber-700 mb-6 border-b-4 border-amber-200 pb-2 mt-16">
        CHAPITRE 1 : LES LANTERNES QUI S'ÉTEIGNENT
      </h2>
      <p className="text-slate-500 font-medium mb-8">Niveau recommandé : 2<br/>Lieu : Le Hall des Lanternes, au cœur du village de Lumignon<br/>Ambiance : Un matin d'hiver silencieux, un peu inquiet. Première enquête, premier combat, premiers indices.</p>

      <InfoBox title="Synopsis du Chapitre pour le Maître du Jeu">
        <p className="mb-2">Le héros reçoit sa première enquête de Maître Bernardin. Il examine les lanternes éteintes, le registre, la cave à huile et le Gardien lui-même. Il découvre des traces de pas nus (des gobelins ?) et des <strong>Ombrelins</strong>, des petites créatures d'ombre attirées par les flammes mourantes, qu'il affronte dans la cave. <strong>Indices à collecter : 1 à 4.</strong></p>
        <p className="mb-2"><strong>Secret à garder :</strong> Maître Bernardin est malade (il tousse, il est pâle, il a de la mousse de marais sur ses bottes). Il va chaque nuit au Puits Oublié, mais le héros ne le sait pas encore. Joue-le avec naturel : un vieil homme fatigué, tendre, qui change de sujet quand on s'inquiète. <strong>À retenir en fin de chapitre :</strong> (1) les lanternes ne manquent pas d'huile ; (2) les pas nus mènent vers le marais ; (3) les Ombrelins profitent de lumière qui faiblit.</p>
      </InfoBox>

      <h3 className="font-display text-2xl font-bold text-slate-700 mt-8 mb-4">SCÈNE 1 : LE HALL DES LANTERNES (Exploration et Roleplay)</h3>
      <ReadAloud title="Texte à lire à voix haute">
        "Le Hall des Lanternes est la plus grande salle du village de Lumignon : une halle de bois et de pierre, haute comme une église, dont les poutres supportent des centaines de crochets. À chaque crochet, une lanterne. Les anciennes, en cuivre verdi. Les neuves, en verre soufflé, encore tièdes. Elles forment un plafond de petites flammes, qui tremble comme un ciel d'été. Mais ce matin, une rangée entière est noire. Douze lanternes éteintes, alignées, comme des dents manquantes dans un sourire."<br/><br/>
        "Maître Bernardin t'attend près du poêle, dans son vieux fauteuil, un plaid sur les genoux. Il tousse un peu, discrètement, dans un mouchoir qu'il range aussitôt. « Mon petit, » dit-il de sa voix rocailleuse, « douze lanternes se sont éteintes cette semaine, et je n'ai pas de réponse. Je suis trop vieux pour courir les chemins, alors c'est toi qui vas chercher. Regarde d'abord ce qui est étrange. Ensuite, demande-toi pourquoi. Et ne va jamais seul dans le Marais de Brume. » Il sourit. « Je compte sur toi. » Autour de toi, le Hall bruisse de chuchotements inquiets. Que fais-tu ?"
      </ReadAloud>

      <InfoBox title="Profil des personnages du Hall">
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Maître Bernardin :</strong> vieux blaireau, lunettes de travers, voix rocailleuse et douce. Il appelle le héros « mon petit ». Il tousse, change de sujet dès qu'on lui demande s'il va bien, et répond toujours par une plaisanterie ou une tisane. <strong>Joue-le avec chaleur : il aime vraiment le héros.</strong></li>
          <li><strong>Pip (Pimprenelle) :</strong> une jeune souris, allumeuse de lanternes depuis un mois. Très gentille, très nerveuse, elle ment mal. Elle cache quelque chose (une moufle, des empreintes). <em>Spoiler : elle donne de l'huile aux gobelins par pitié.</em></li>
          <li><strong>Madame Ronce :</strong> hérissonne herboriste, grincheuse au grand cœur. Elle râle sur tout, mais soigne tout le monde.</li>
        </ul>
      </InfoBox>

      <ActionBox title="Options d'Exploration et Mécaniques (Bac à sable)">
        <p className="mb-4">L'enfant choisit son ordre. <strong>Chaque indice trouvé</strong> est dit à voix haute par toi : l'enfant le retient. Donne un point de <strong>Lueur</strong> à une idée vraiment maline.</p>

        <h4 className="font-bold text-lg mb-2">1. Examiner les douze lanternes éteintes (Test de SAVOIR - DD 11)</h4>
        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li><strong>Réussite :</strong> <strong>Indice 1</strong> : les mèches sont intactes, aucune suie, le verre est glacé comme de la neige. Les réservoirs sont <em>pleins d'huile</em>. Ces lanternes ne se sont pas éteintes faute d'huile : leur flamme a été <strong>prise</strong>, pas consumée.</li>
          <li><strong>Échec :</strong> il voit douze lanternes froides. Maître Bernardin lui souffle : « Regarde les mèches, mon petit. »</li>
        </ul>

        <h4 className="font-bold text-lg mb-2">2. Étudier le registre des allumages (Test de SAVOIR - DD 12)</h4>
        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li><strong>Réussite :</strong> <strong>Indice 2</strong> : le registre note l'heure et le lieu de chaque extinction. Elles se sont éteintes <strong>à minuit passé</strong>, en commençant tout au bout de la vallée (la meunière, le pont), et <strong>chaque nuit un peu plus près du village</strong>. Comme si quelque chose avançait.</li>
          <li><strong>Échec :</strong> les chiffres se mélangent. Il peut recopier le registre et le relire plus tard (+2).</li>
        </ul>

        <h4 className="font-bold text-lg mb-2">3. Observer Maître Bernardin (Test de SAVOIR - DD 12)</h4>
        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li><strong>Réussite :</strong> <strong>Indice 3</strong> : le manteau et les bottes du Gardien sont couverts de <strong>mousse verte de marais</strong>, qui ne pousse qu'au fond de la vallée. Il est pâle, il tousse, il a les mains qui tremblent un peu. Mais il répond : « Une petite promenade du matin. Rien de grave. »</li>
          <li><strong>Échec :</strong> il ne voit qu'un vieux blaireau fatigué dans un fauteuil.</li>
          <li><strong>Si l'enfant s'inquiète (CŒUR - DD 10) :</strong> Maître Bernardin sourit et change de sujet : « Va plutôt voir la cave à huile, il y a du bruit là-bas depuis ce matin. »</li>
        </ul>

        <h4 className="font-bold text-lg mb-2">4. Parler à Pip, l'allumeuse (Test de CŒUR - DD 11)</h4>
        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li><strong>Réussite :</strong> Pip bafouille, jure qu'elle n'a rien vu, mais ses oreilles rougissent. Elle regarde plusieurs fois vers la cave. <strong>(Elle ment : à noter.)</strong></li>
          <li><strong>Échec :</strong> elle devient muette comme une carpe, et se met à compter les lanternes à voix haute.</li>
        </ul>

        <h4 className="font-bold text-lg mb-2">5. Descendre dans la cave à huile (Test de DISCRÉTION - DD 11)</h4>
        <p>C'est la piste la plus directe. Passe à la scène 2.</p>
      </ActionBox>

      <Deduction
        question="Les douze lanternes sont éteintes. Est-ce parce qu'elles manquaient d'huile ?"
        clues={['Indice 1 : les mèches sont intactes, sans suie, et les réservoirs sont pleins.', 'Indice 2 : elles se sont éteintes à minuit, en avançant chaque nuit un peu plus vers le village.']}
        hint="Regarde bien ce qui est dans les réservoirs. Si l'huile est là, alors qu'est-ce qui a disparu ?"
        answer={<>
          <p><strong>Non.</strong> Les réservoirs sont pleins : ce n'est pas l'huile qui a manqué. Ce qui a disparu, c'est la <strong>flamme</strong> elle-même. Quelque chose (ou quelqu'un) la lui a prise, ou ne la nourrit plus.</p>
          <p>L'enfant n'a pas besoin de deviner la cause : il suffit qu'il comprenne que la piste « manque d'huile » est fausse. <strong>Gagne un point de Lueur</strong> s'il l'explique avec ses mots.</p>
        </>}
      />

      <h3 className="font-display text-2xl font-bold text-slate-700 mt-8 mb-4">SCÈNE 2 : LES OMBRELINS DANS LA CAVE (Combat)</h3>
      <ReadAloud title="Texte à lire à voix haute">
        "L'escalier de la cave à huile est étroit, humide, et la lumière de ta lanterne tremble sur les murs de pierre. Au bas des marches, une grande salle voûtée est remplie de tonneaux alignés. Il y règne une odeur d'huile, de poussière et de froid. Tu avances sur la pointe des pieds, lanterne levée. Là, près du dernier tonneau, tu remarques d'abord des <strong>petites empreintes de pieds nus</strong> sur la poussière, qui vont et viennent. Puis, un souffle glacé te fait frissonner."<br/><br/>
        "Dans les coins, trois taches d'ombre se détachent des murs. Elles se mettent à flotter, rondes, noires, avec deux petits points blancs comme des yeux. Des Ombrelins. Ils se tournent vers toi, attirés par la flamme de ta lanterne, et se mettent à bourdonner, affamés : « Lumière... lumière... lumière... » Ils s'avancent."
      </ReadAloud>

      <CombatBox title="Mécaniques de Combat (Les Ombrelins)">
        <FirstRound>
          <p><strong>Ton héros attaque le premier Ombrelin :</strong> il lance le D20 et fait <strong>9</strong>. Il ajoute +3 (Courage) : <strong>12</strong>. La CA de l'Ombrelin est 11 : 12 atteint 11, <strong>touché !</strong> Il lance le D6 : <strong>4</strong> dégâts. L'Ombrelin (5 PV) en a maintenant 1.</p>
          <p><strong>Tour des Ombrelins :</strong> le MJ lance un D20 pour le premier : <strong>8</strong>, +2 = 10. Il fallait 12 ou plus : <strong>raté</strong>. Pour le deuxième : <strong>11</strong>, +2 = 13, c'est 12 ou plus : <strong>touché !</strong> Le MJ lance 1D4 : <strong>3</strong>. Le héros passe de 14 à 11 PV, et son prochain jet aura −1.</p>
        </FirstRound>
        <h4 className="font-bold text-lg mb-2">Les Ennemis : 3 Ombrelins</h4>
        <ul className="list-disc pl-5 space-y-1 mb-6">
          <li><strong>Points de Vie (PV) :</strong> 5 chacun. <strong>Classe d'Armure (CA) :</strong> 11.</li>
          <li><strong>Attaque (Frôlement d'ombre) :</strong> D20 +2 pour toucher (le héros a une CA de 12), 1D4 de dégâts. Chaque coup glace un peu : −1 au prochain jet du héros.</li>
          <li><strong>Point faible : la lumière.</strong> Quand la lanterne brille fort, ils s'éloignent et se cachent.</li>
        </ul>
        <h4 className="font-bold text-lg mb-2">Tactique et Environnement (Le rôle du MJ) :</h4>
        <ul className="list-disc pl-5 space-y-3 mb-4">
          <li><strong>Option A - Coup de Bâton-Lanterne :</strong> D20 + COURAGE (+3), 1D6 de dégâts.</li>
          <li><strong>Option B - Éclat de Lanterne (1 Lueur) :</strong> un Ombrelin est ébloui et perd son tour. Si le héros brandit sa lanterne haut, deux Ombrelins reculent.</li>
          <li><strong>Option C - Renverser un tonneau d'huile (COURAGE - DD 12) :</strong> l'huile glisse, les Ombrelins s'y empêtrent et perdent leur tour.</li>
          <li><strong>Option D - Les comprendre (SAVOIR - DD 12) :</strong> le héros remarque qu'ils s'écartent d'une lanterne tenue immobile : il les maintient à distance (aucun jet d'attaque pour eux pendant un tour).</li>
        </ul>
        <p className="italic">Un Ombrelin vaincu se défait en petit nuage de fumée, avec un soupir.</p>
      </CombatBox>

      <ReadAloud title="Texte à lire à voix haute (après le combat)">
        "Le dernier Ombrelin se dissout dans un souffle, et le silence retombe sur la cave. Tu reprends ton souffle. Sur le sol, entre les tonneaux, il y a quatre cercles vides dans la poussière, là où quatre tonneaux d'huile ont été roulés puis emportés. Les empreintes de pieds nus partent vers l'escalier, puis vers la porte de derrière. Près du mur, un petit objet : une moufle d'enfant, en laine rouge, trop petite pour un enfant du village. Tu la glisses dans ta poche."
      </ReadAloud>

      <ActionBox title="Ce que trouve le héros dans la cave">
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Indice 4 :</strong> quatre tonneaux d'huile ont été volés (les empreintes de pieds nus mènent vers le <strong>nord, vers le Marais de Brume</strong>), et il y a une <strong>moufle d'enfant</strong> en laine rouge. Les Ombrelins, eux, viennent de la <strong>lumière qui faiblit</strong> : ils sont attirés par les flammes mourantes.</li>
          <li><strong>Loot :</strong> <strong>la moufle rouge</strong>. Pip la reconnaîtra (c'est elle qui l'a tricotée : indice pour le chapitre 3).</li>
        </ul>
      </ActionBox>

      <h3 className="font-display text-2xl font-bold text-slate-700 mt-8 mb-4">SCÈNE 3 : LES RUMEURS DE LUMIGNON (Rencontre et Roleplay)</h3>
      <ReadAloud title="Texte à lire à voix haute">
        "En remontant dans le Hall, tu entends des voix en colère. Devant la porte, un énorme sanglier en cuirasse de cuivre, le Brigadier Tonnerre, tape du sabot en brandissant un bâton : « C'est évident ! Les gobelins ! Ces voleurs de la Brume ! On va les chasser du Marais avant ce soir ! » Plusieurs villageois approuvent. Madame Ronce, adossée à son panier de plantes, bougonne : « Moi, j'ai vu des empreintes de pieds nus près de mon potager. Mais de là à accuser tout un peuple... » Pip, un peu plus loin, baisse les yeux. Tout le monde se tourne vers toi. Que fais-tu ?"
      </ReadAloud>

      <ActionBox title="L'Arbre de Dialogue et les Résolutions">
        <h4 className="font-bold text-lg mb-2">Option A : Calmer le Brigadier (Test de CŒUR - DD 12)</h4>
        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li><strong>Réussite :</strong> « On n'a encore aucune preuve que ce soit eux. Laissez-moi enquêter jusqu'à ce soir. » Le Brigadier grogne, mais attend. <strong>Gagne un point de Lueur</strong> : il a refusé le préjugé.</li>
          <li><strong>Échec :</strong> le Brigadier part quand même organiser une patrouille. Il sera au Marais au chapitre 4 (la situation sera plus tendue).</li>
        </ul>

        <h4 className="font-bold text-lg mb-2">Option B : Interroger Madame Ronce (Test de CŒUR - DD 10)</h4>
        <p className="mb-6"><strong>Réussite :</strong> elle donne des tisanes (<strong>Loot : 1 tisane tiède</strong>, +4 PV) et un renseignement : « Ces empreintes étaient toutes petites. Des pieds d'enfants, ou de bébés. Et elles tremblaient, comme si on marchait dans le froid. » (Un indice sur la vérité des gobelins.)</p>

        <h4 className="font-bold text-lg mb-2">Option C : Demander à Pip de l'accompagner (Test de CŒUR - DD 11)</h4>
        <p>Pip accepte, très embêtée. Si elle vient, elle sera <strong>la compagne du héros</strong> pour la suite (aide : +2 à un jet de Discrétion par chapitre). Si le héros lui montre la moufle, elle blêmit : « Je... c'est possible que... je t'expliquerai plus tard. »</p>
      </ActionBox>

      <ReadAloud title="Texte à lire à voix haute (fin du chapitre)">
        "En fin de journée, tu retrouves Maître Bernardin au bord de son poêle, tisane fumante entre les pattes. Tu lui racontes tout. Il t'écoute en silence, hoche la tête, tousse un peu. « Les archives de la Tour te diront peut-être ce que les yeux ne voient pas, » dit-il enfin. « Va demain. Ce soir, mange. Dors. Et mets un bonnet : il va faire froid. » Il te regarde partir. Sur le seuil, tu te retournes : il a posé sa tête contre le dossier du fauteuil, les yeux fermés, un petit sourire aux lèvres. Il a l'air si fatigué. Dehors, la neige commence à tomber, doucement, sur les lanternes encore allumées."
      </ReadAloud>
    </section>
  );
}
