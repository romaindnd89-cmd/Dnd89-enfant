import React from 'react';
import { ReadAloud, CombatBox, ActionBox, InfoBox, FirstRound } from '../../components/StoryBlocks';

export default function Chapitre4() {
  return (
    <section id="chap4">
      <h2 className="font-display text-4xl font-bold text-rose-700 mb-6 border-b-4 border-rose-200 pb-2 mt-16">
        CHAPITRE 4 : LE NID DU MONT BRAISE
      </h2>
      <p className="text-slate-500 font-medium mb-8">Niveau recommandé : 1<br/>Lieu : Le grand nid, au sommet du Mont Braise<br/>Ambiance : Le climax. Un peu de tension, puis beaucoup de tendresse.</p>

      <InfoBox title="Synopsis du Chapitre pour le Maître du Jeu">
        <p>Au sommet du volcan, Braisillon se cache derrière un golem de pierre qui le protège, mais qui prend les héros pour des ennemis. Les héros peuvent le battre, ou lui expliquer qu'ils sont amis. Ensuite vient la vraie épreuve : aider le bébé dragon à ne plus avoir peur de son feu. <strong>Le cœur de l'histoire :</strong> on n'a pas besoin d'être parfait pour être aimé, et l'amitié aide à dompter ce qui fait peur.</p>
      </InfoBox>

      <h3 className="font-display text-2xl font-bold text-slate-700 mt-8 mb-4">SCÈNE 1 : LES SALAMANDRES DE BRAISE (Combat)</h3>
      <ReadAloud title="Texte à lire à voix haute">
        "Le tunnel monte en spirale, de plus en plus chaud. Les parois deviennent rouges, puis orange, et le sol craque comme du charbon sous vos pieds. Un grésillement vous arrête : trois petites salamandres enflammées, rouges comme des braises, sortent de fissures dans la roche en lâchant des étincelles. « Chaud ! Chaud ! Chaud ! » crient-elles en tournant en rond. « On garde le chemin du nid ! On a la consigne : pas de visiteurs ! » Elles crachent des petites boules de feu : pchh ! pchh ! pchh !"
      </ReadAloud>

      <CombatBox title="Mécaniques de Combat (Les Salamandres de Braise)">
        <FirstRound>
        <p><strong>Le Chevalier</strong> attaque une salamandre de braise (6 PV, CA 11). Il lance le D20 et fait <strong>9</strong>. Il ajoute son Courage (+3) : 9 + 3 = <strong>12</strong>. 12 atteint la CA 11 : <strong>touché !</strong> Il lance le D6 pour les dégâts : <strong>4</strong>. Une salamandre de braise avait 6 PV : il lui en reste <strong>2</strong>.</p>
        <p>Au tour d'une salamandre de braise, le MJ lance un D20 : <strong>6</strong>. Il faut <strong>10</strong> ou plus pour toucher le chevalier : c'est moins : <strong>raté !</strong> La boule de braise éclate contre la roche. (Avec 10 ou plus, le chevalier aurait perdu 1D4 PV.)</p>
        </FirstRound>
        <h4 className="font-bold text-lg mb-2">Les Ennemis : 3 Salamandres de Braise</h4>
        <ul className="list-disc pl-5 space-y-1 mb-4">
          <li><strong>Points de Vie (PV) :</strong> 6 chacune. <strong>Classe d'Armure (CA) :</strong> 11.</li>
          <li><strong>Attaque (Boule de braise) :</strong> touche à 10 ou plus (D20 du MJ), 1D4 de dégâts. Elles attaquent toutes ensemble si elles sont plus de deux.</li>
          <li><strong>Point faible : l'eau.</strong> Une salamandre arrosée s'éteint (elle perd son prochain tour, et ne peut plus attaquer au tour d'après).</li>
        </ul>
        <h4 className="font-bold text-lg mb-2">Tactique et Environnement (Le rôle du MJ) :</h4>
        <ul className="list-disc pl-5 space-y-3">
          <li><strong>Option A - Coup d'épée ou Étincelle :</strong> D20 + talent, 1D6.</li>
          <li><strong>Option B - Le Chapeau-bouclier ou le Bouclier :</strong> annule une boule de braise.</li>
          <li><strong>Option C - Du sirop bleu (MALICE - DD 10) :</strong> si les héros ont encore une flasque du sirop du chapitre 2, ils éteignent deux salamandres d'un coup.</li>
          <li><strong>Option D - La Bille de gelée :</strong> lancée sur une salamandre, elle la colle au mur.</li>
          <li><strong>Option E - Les rassurer (CŒUR - DD 10) :</strong> « Nous venons en amis du petit dragon. » Elles s'arrêtent, puis s'écartent timidement.</li>
        </ul>
        <p className="italic mt-3">À 0 PV, une salamandre se roule en boule et devient une petite braise tiède (+3 PV pour qui la serre dans les mains).</p>
      </CombatBox>

      <h3 className="font-display text-2xl font-bold text-slate-700 mt-8 mb-4">SCÈNE 2 : LE GOLEM GARDIEN (Combat ou Roleplay)</h3>
      <ReadAloud title="Texte à lire à voix haute">
        "Le tunnel débouche sur une plateforme de pierre noire, au sommet du volcan. Le ciel est rouge et orange, le soleil se couche, et un vent chaud vous décoiffe. Au milieu, un immense nid fait de branches et de braises tièdes. Et devant le nid, un grand golem de pierre, haut comme deux hommes, se redresse en craquant. Ses yeux sont deux braises. « Personne ne s'approche du petit, » grince-t-il d'une voix de rocher. « Il a peur. Il a été touché par le feu. Je le protège. »"<br/><br/>
        "Derrière lui, dans le nid, vous apercevez deux grands yeux dorés, ronds comme des assiettes, qui vous regardent entre les cailloux. Une petite voix tremble : « Allez-vous-en... Je suis dangereux... » Que faites-vous ?"
      </ReadAloud>

      <InfoBox title="Profil de Braisillon et du golem">
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Braisillon :</strong> petit dragon rouge de la taille d'un chien, des ailes encore trop grandes, un nez qui fume quand il a peur. Voix toute petite, il bégaie. Il croit qu'il est dangereux, mais il veut surtout un ami.</li>
          <li><strong>Le Golem Gardien :</strong> lent, solennel, protecteur. Il a été créé par Cendrelle pour surveiller son petit. Il obéit aux ordres, mais il peut changer d'avis si on lui explique gentiment.</li>
        </ul>
      </InfoBox>

      <ActionBox title="L'Arbre de Dialogue et les Résolutions">
        <h4 className="font-bold text-lg mb-2">Option A : Parler au golem (Test de CŒUR - DD 10)</h4>
        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li><strong>Réussite :</strong> le golem baisse la tête. « Vous... voulez l'aider ? » Il s'écarte, et le combat est évité.</li>
          <li><strong>Bonus de +2</strong> si les héros ont été gentils avec Grognon au chapitre 3. <strong>Bonus de +2</strong> avec le <strong>Cristal chantant</strong> du chapitre 3.</li>
          <li><strong>Échec :</strong> il grince et il lève ses poings : passe à l'option B.</li>
        </ul>

        <h4 className="font-bold text-lg mb-2">Option B : Se battre (voir la boîte de combat)</h4>
        <p>Le golem veut juste protéger le bébé : un combat gentil, où personne ne veut vraiment faire de mal.</p>
      </ActionBox>

      <CombatBox title="Mécaniques de Combat (Le Golem Gardien)">
        <FirstRound>
        <p><strong>Le Chevalier</strong> attaque le Golem Gardien (12 PV, CA 12). Il lance le D20 et fait <strong>10</strong>. Il ajoute son Courage (+3) : 10 + 3 = <strong>13</strong>. 13 atteint la CA 12 : <strong>touché !</strong> Il lance le D6 pour les dégâts : <strong>4</strong>. Le Golem Gardien avait 12 PV : il lui en reste <strong>8</strong>.</p>
        <p>Au tour du Golem Gardien, le MJ lance un D20 : <strong>6</strong>. Il faut <strong>10</strong> ou plus pour toucher le chevalier : c'est moins : <strong>raté !</strong> Le poing de pierre frappe le sol. (Avec 10 ou plus, le chevalier aurait perdu 1D6 PV.)</p>
        </FirstRound>
        <h4 className="font-bold text-lg mb-2">L'Ennemi : le Golem Gardien</h4>
        <ul className="list-disc pl-5 space-y-1 mb-6">
          <li><strong>Points de Vie (PV) :</strong> 12.</li>
          <li><strong>Classe d'Armure (CA) :</strong> 12.</li>
          <li><strong>Attaque (Coup de poing de pierre) :</strong> touche à 10 ou plus, 1D6 de dégâts. Il est lent : il attaque seulement un tour sur deux.</li>
          <li><strong>Point faible :</strong> les joints d'épaule, couverts de mousse.</li>
        </ul>
        <h4 className="font-bold text-lg mb-2">Tactique et Environnement (Le rôle du MJ) :</h4>
        <ul className="list-disc pl-5 space-y-4 mb-4">
          <li><strong>Option A - Attaque classique :</strong> Coup d'épée (COURAGE) ou Étincelle (MALICE). Chacun joue son tour.</li>
          <li><strong>Option B - Viser l'épaule (MALICE - DD 10) :</strong> les dégâts de l'attaque sont doublés.</li>
          <li><strong>Option C - Le Bouclier (Chevalier) :</strong> annule le coup de poing du golem pour un tour.</li>
          <li><strong>Option D - Rendre les armes :</strong> à tout moment, si les héros arrêtent et lui parlent gentiment (CŒUR - DD 8), le golem s'écarte.</li>
        </ul>
        <p className="italic">À 0 PV, il s'assoit et dit : « Vous avez... du cœur. Allez le voir. »</p>
      </CombatBox>

      <h3 className="font-display text-2xl font-bold text-slate-700 mt-8 mb-4">SCÈNE 3 : BRAISILLON A PEUR DE SON FEU (Rencontre et Roleplay)</h3>
      <ReadAloud title="Texte à lire à voix haute">
        "Le golem s'écarte avec un grand craquement, et vous avancez doucement vers le nid. Braisillon est là, serré dans un coin, la queue entre les pattes, ses grands yeux dorés pleins de larmes. Quand il renifle, une petite étincelle sort de son nez et fait un « pschit » sur le sol. Il recule vivement. « Ne t'approche pas ! Je vais brûler tout le monde ! J'ai brûlé la moustache du boulanger, et la queue du chat... »"<br/><br/>
        "Il serre contre lui une vieille chaussette trouée, son seul doudou. Derrière lui, au loin, vous apercevez le village de Fumerolles, avec la Grande Torche encore éteinte sur la place. La nuit va tomber. Que faites-vous ?"
      </ReadAloud>

      <ActionBox title="Options d'Exploration et Mécaniques (Bac à sable)">
        <p className="mb-4">Pas de bonne ou de mauvaise réponse : les héros doivent rassurer le petit dragon. Les deux joueurs doivent participer, chacun à sa manière.</p>

        <h4 className="font-bold text-lg mb-2">1. Le rassurer avec gentillesse (Test de CŒUR - DD 8)</h4>
        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li>Parler doucement, s'asseoir près de lui, lui dire qu'on n'a pas peur.</li>
          <li><strong>Bonus de +2</strong> avec le <strong>Doudou lézard</strong> de Lila (chapitre 1), ou avec l'<strong>Écaille rouge</strong> (chapitre 1).</li>
          <li><strong>Réussite :</strong> Braisillon s'approche en reniflant.</li>
        </ul>

        <h4 className="font-bold text-lg mb-2">2. Lui montrer qu'on n'a pas peur du feu (Test de COURAGE - DD 9)</h4>
        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li>Tenir la patte au-dessus d'une braise sans broncher, ou lui laisser souffler sur le bouclier. <strong>Le Chevalier peut utiliser son Bouclier</strong> : une étincelle rebondit, et ça fait rire le bébé.</li>
          <li><strong>Réussite :</strong> Braisillon est stupéfait : « Tu n'as pas mal ? »</li>
        </ul>

        <h4 className="font-bold text-lg mb-2">3. Lui apprendre à jouer avec le feu (Test de MALICE - DD 9)</h4>
        <ul className="list-disc pl-5 space-y-2">
          <li>Faire des ombres chinoises avec la <strong>Lueur magique</strong>, ou souffler sur une bougie ensemble.</li>
          <li><strong>Réussite :</strong> Braisillon crache une jolie petite flamme en forme de cœur, qui danse devant tout le monde.</li>
        </ul>
      </ActionBox>

      <ReadAloud title="Texte à lire à voix haute (le premier feu)">
        "Braisillon prend une grande inspiration, ferme les yeux, et souffle. D'abord, rien, un tout petit « pschit ». Puis une étincelle. Puis une flamme jaune, puis une grande flamme dorée qui monte vers le ciel, claire, chaude, douce comme une bougie de gâteau d'anniversaire. Il rouvre ses grands yeux ronds : « C'est... c'est moi qui ai fait ça ? » Autour de vous, le ciel du soir s'illumine. Au loin, dans le village, des gens lèvent le nez et poussent des cris de joie."<br/><br/>
        "Braisillon vous regarde, les yeux brillants. « Vous voulez bien m'accompagner ? Je dois allumer la Grande Torche avant la nuit. Mais j'ai un peu peur de la foule... » Il vous tend sa petite patte rouge."
      </ReadAloud>

      <InfoBox title="Si les héros échouent aux trois épreuves">
        <p>Rien n'est perdu. Le golem, ému, pose sa grosse main sur la tête de Braisillon, et dit : « Je te protège depuis ta naissance. Je ne te laisserai jamais seul. » Braisillon, rassuré, souffle son premier feu avec un peu d'aide. Les héros peuvent alors le prendre dans leurs bras et rejoindre le village.</p>
      </InfoBox>
    </section>
  );
}
