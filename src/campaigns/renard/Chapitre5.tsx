import React from 'react';
import { ReadAloud, CombatBox, ActionBox, InfoBox, FirstRound } from '../../components/StoryBlocks';

export default function Chapitre5() {
  return (
    <section id="chap5">
      <h2 className="font-display text-4xl font-bold text-rose-700 mb-6 border-b-4 border-rose-200 pb-2 mt-16">
        CHAPITRE 5 : LA RONCERAIE (Le Gland du Rire)
      </h2>
      <p className="text-slate-500 font-medium mb-8">Niveau recommandé : 1<br/>Lieu : La Ronceraie, un immense buisson d'épines au sud du village<br/>Ambiance : D'abord inquiétante, puis de plus en plus tendre à mesure qu'on approche du cœur du problème.</p>

      <InfoBox title="Synopsis du Chapitre pour le Maître du Jeu">
        <p>Un labyrinthe d'épines mène au premier Gland d'Or, le Gland du Rire, auprès d'un petit hérisson coincé qui pleure. Il faut le décoincer, puis le faire sourire pour de vrai : c'est le cœur émotionnel du chapitre, pas un test de compétence. Pas de combat.</p>
      </InfoBox>

      <h3 className="font-display text-2xl font-bold text-slate-700 mt-8 mb-4">SCÈNE 1 : LE LABYRINTHE D'ÉPINES (Exploration)</h3>
      <ReadAloud title="Texte à lire à voix haute">
        "Tu t'arrêtes devant un mur de ronces si dense qu'on dirait une barrière tissée exprès pour décourager les curieux. Tout au centre, une petite lueur dorée pulse doucement, comme un cœur qui bat au ralenti : le Gland du Rire dont parlait Noisette. Portés par le vent entre les branches piquantes, de petits sanglots étouffés parviennent jusqu'à toi. Quelqu'un pleure là-dedans depuis longtemps, et personne n'est jamais venu voir pourquoi. Que fais-tu ?"
      </ReadAloud>

      <ActionBox title="Traverser les ronces">
        <h4 className="font-bold text-lg mb-2">Se faufiler entre les épines (Test d'AGILITÉ - DD 10)</h4>
        <ul className="list-disc pl-5 space-y-2 mb-4">
          <li><strong>Réussite :</strong> le héros se tortille comme une couleuvre et passe sans une égratignure.</li>
          <li><strong>Échec :</strong> une épine traîtresse griffe son flanc (−2 PV), mais il continue sans problème.</li>
          <li><strong>Bonus de +3 :</strong> si le héros a mouillé les ronces pour les assouplir, avec la <strong>Goutte de rosée</strong> du chapitre 1 ou de l'eau du ruisseau du chapitre 3 rapportée dans une feuille creuse. Récompense aussi toute autre idée maligne.</li>
        </ul>
        <p className="italic">« À l'intérieur, les ronces forment des couloirs hauts comme des tunnels. Tu croises un vieux cerf-volant d'enfant, ses couleurs mangées par le temps, resté accroché comme un fantôme de papier, et une chenille toute grise qui avance sans se presser sur une épine. Plus tu avances, plus les sanglots se font clairs. »</p>
      </ActionBox>

      <h3 className="font-display text-2xl font-bold text-slate-700 mt-8 mb-4">SCÈNE 2 : LES RONCES GRIFFEUSES (Combat)</h3>
      <ReadAloud title="Texte à lire à voix haute">
        "Tu avances dans un couloir d'épines quand un craquement te fait sursauter : les ronces autour de toi bougent ! Trois grosses branches épineuses se tordent comme des serpents verts, se dressent devant toi et claquent en l'air, leurs épines brillantes comme des dents. « Chhhh... » murmurent-elles. « Personne ne passe... Personne ne vole le Gland... » Elles se préparent à te fouetter."
      </ReadAloud>

      <CombatBox title="Mécaniques de Combat (Les Ronces Griffeuses)" image="/art/monstres/ronces-griffeuses.webp" imageAlt="Les Ronces Griffeuses">
        <p className="mb-2">Rappel : D20 + talent pour toucher, D6 pour les dégâts. Quand un monstre attaque, le MJ lance un D20 : à 11 ou plus, il touche le renard.</p>
        <FirstRound>
        <p><strong>Le petit renard</strong> attaque une ronce griffeuse (5 PV, CA 11). Il lance le D20 et fait <strong>9</strong>. Il ajoute son Courage (+3) : 9 + 3 = <strong>12</strong>. 12 atteint la CA 11 : <strong>touché !</strong> Il lance le D6 pour les dégâts : <strong>3</strong>. Une ronce griffeuse avait 5 PV : il lui en reste <strong>2</strong>.</p>
        <p>Au tour d'une ronce griffeuse, le MJ lance un D20 : <strong>7</strong>. Il faut <strong>11</strong> ou plus pour toucher le petit renard : c'est moins : <strong>raté !</strong> L'épine griffe l'air. (Avec 11 ou plus, le petit renard aurait perdu 1D4 PV.)</p>
        </FirstRound>
        <h4 className="font-bold text-lg mb-2">Les Ennemies : 3 Ronces Griffeuses</h4>
        <ul className="list-disc pl-5 space-y-1 mb-4">
          <li><strong>PV :</strong> 5 chacune. <strong>CA :</strong> 11.</li>
          <li><strong>Attaque (Coup d'épine) :</strong> touche à 11 ou plus (D20 du MJ), 1D4 de dégâts.</li>
          <li><strong>Point faible : l'eau.</strong> Une ronce mouillée s'affaisse : elle perd son tour. (Rappel : la Goutte de rosée du chapitre 1 est parfaite.)</li>
        </ul>
        <h4 className="font-bold text-lg mb-2">Tactique et Environnement (Le rôle du MJ) :</h4>
        <ul className="list-disc pl-5 space-y-3">
          <li><strong>Option A - Griffes et crocs :</strong> D20 + COURAGE (+3), 1D6.</li>
          <li><strong>Option B - Esquiver (AGILITÉ +4, DD 11) :</strong> le renard se faufile : la ronce se noue toute seule, et perd son tour.</li>
          <li><strong>Option C - Goutte de rosée :</strong> versée sur une ronce, elle l'assouplit complètement (+3 pour la toucher).</li>
          <li><strong>Option D - Bouclier d'écorce :</strong> il annule un coup d'épine.</li>
          <li><strong>Option E - Les calmer (CŒUR +5, DD 12) :</strong> « Nous voulons seulement aider celui qui pleure. » Elles se détendent, intriguées.</li>
        </ul>
        <p className="italic mt-3">Une ronce à 0 PV se dénoue et laisse tomber une poignée de mûres (+1 PV chacune).</p>
      </CombatBox>

      <h3 className="font-display text-2xl font-bold text-slate-700 mt-8 mb-4">SCÈNE 3 : PIQUILLON, COINCÉ DANS SES PROPRES ÉPINES (Rencontre et Roleplay)</h3>
      <ReadAloud title="Texte à lire à voix haute">
        "Au cœur du labyrinthe, tu découvres la source des sanglots : un tout petit hérisson, pas plus gros que ton museau, complètement empêtré dans les ronces. Ses propres piquants se sont accrochés partout, et plus il se débat, plus il s'enfonce. À côté de lui, sur un lit de feuilles, le Gland du Rire brille doucement, mais chaque fois que le hérisson renifle, sa lumière vacille."<br/><br/>
        "« Je... je voulais le ramener au Grand Chêne, » renifle-t-il. « Je voulais être utile, pour une fois. Mais je me suis coincé, et maintenant j'ai tout oublié, même comment on fait pour sourire... » Que fais-tu ?"
      </ReadAloud>

      <InfoBox title="Profil de Piquillon">
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Apparence :</strong> tout jeune hérisson minuscule, piquants emmêlés de brindilles.</li>
          <li><strong>Voix :</strong> toute petite, il renifle et commence souvent par « Je... je... ». Craintif, honteux de s'être fait piéger.</li>
        </ul>
      </InfoBox>

      <ActionBox title="L'Arbre de Dialogue et les Résolutions">
        <h4 className="font-bold text-lg mb-2">Étape 1 : décoincer Piquillon (Test de MALICE - DD 10)</h4>
        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li><strong>Réussite :</strong> les piquants sont démêlés doucement, un par un.</li>
          <li><strong>Bonus de +3 :</strong> avec un peu d'eau, les ronces glissent mieux.</li>
          <li><strong>Échec :</strong> on retente : Piquillon est patient (et un peu rassuré).</li>
        </ul>

        <h4 className="font-bold text-lg mb-2">Étape 2 : le faire sourire pour de vrai (Roleplay, aucun jet)</h4>
        <p className="mb-2">Le Gland du Rire ne retrouve son éclat que si Piquillon rit vraiment. Encourage l'enfant à inventer : une grimace, une blague, une danse ridicule, un bruit rigolo. <strong>Toute idée réussit automatiquement.</strong></p>
        <p className="italic">Si l'enfant sèche, Lumi suggère : « Et si tu lui racontais la fois où tu as couru après ta propre queue en pensant qu'elle t'attaquait ? »</p>
      </ActionBox>

      <ReadAloud title="Texte à lire à voix haute (quand Piquillon rit)">
        "Piquillon pouffe timidement, se retient... puis éclate d'un rire si clair qu'il rebondit sur toutes les épines autour de vous. Le Gland d'Or s'allume d'un coup, aussi brillant qu'un petit soleil de poche ! Autour de vous, les mûres reprennent leurs couleurs : noir, violet, rouge sombre. Et quelque part, très loin dans la forêt, quelqu'un d'autre se met à rire sans savoir pourquoi, comme si ce rire s'était répandu par vagues invisibles à travers tous les arbres."
      </ReadAloud>

      <ActionBox title="Récompenses et Quête Annexe : Dame Lente-Lune">
        <p className="mb-2"><strong>Loot : le Gland du Rire (1 sur 3 !)</strong>, une poignée de mûres colorées (+3 PV).</p>
        <p className="mb-4"><strong>Nouvel ami : Piquillon.</strong> Il suit le héros jusqu'à la fin. Une fois par combat, il se met en boule devant lui : l'ennemi qui l'attaque se pique et perd 2 PV.</p>

        <h4 className="font-bold text-lg mb-2">Dame Lente-Lune, l'escargot philosophe (Roleplay)</h4>
        <p className="mb-2">Dans un tunnel, une énorme coquille bouche le passage. Voix très, très lente, avec de longues pauses : « Bonjour... jeune... renard... Je passe mon chemin... ce sera l'affaire d'une petite heure... »</p>
        <ul className="list-disc pl-5 space-y-2">
          <li>Elle s'ennuie : elle se pousse en échange d'une <strong>histoire drôle</strong> ou d'une <strong>petite chanson</strong> inventée par l'enfant. Toute tentative sincère réussit.</li>
          <li><strong>Récompense :</strong> « L'araignée du vallon... n'aime pas... la lumière vive. Et sa toile... craint... la chaleur. » L'enfant connaît les deux points faibles de Filandre (chapitre 6).</li>
        </ul>
      </ActionBox>
    </section>
  );
}
