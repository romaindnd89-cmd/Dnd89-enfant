import React from 'react';
import { ReadAloud, CombatBox, ActionBox, InfoBox } from '../../components/StoryBlocks';

export default function Chapitre3() {
  return (
    <section id="chap3">
      <h2 className="font-display text-4xl font-bold text-sky-700 mb-6 border-b-4 border-sky-200 pb-2 mt-16">
        CHAPITRE 3 : LES GROTTES DE CRISTAL
      </h2>
      <p className="text-slate-500 font-medium mb-8">Niveau recommandé : 1<br/>Lieu : Les grottes de cristal au pied du Mont Braise<br/>Ambiance : Scintillante et mystérieuse. Énigme à deux, puis un troll grincheux qu'on peut amadouer.</p>

      <InfoBox title="Synopsis du Chapitre pour le Maître du Jeu">
        <p>Dans une grotte pleine de cristaux, les deux héros doivent coopérer pour une énigme de leviers (l'un tient, l'autre passe), puis rencontrer Grognon le troll, qui garde le pont. Le combat est possible mais très difficile à gagner : la bonne solution est de négocier. L'écaille du chapitre 1 se met à briller pour montrer que le bébé dragon est tout proche.</p>
      </InfoBox>

      <h3 className="font-display text-2xl font-bold text-slate-700 mt-8 mb-4">SCÈNE 1 : LA SALLE AUX LEVIERS (Exploration et Énigme)</h3>
      <ReadAloud title="Texte à lire à voix haute">
        "Vous entrez dans la grotte, et c'est un feu d'artifice silencieux. Des cristaux bleus, roses et verts sortent des murs comme des fleurs de glace, et chacun renvoie la lumière de vos torches en mille éclats. Le sol est lisse comme de l'eau gelée. Dans votre sac, l'écaille rouge, si vous l'avez, se met à briller plus fort."<br/><br/>
        "Au bout de la salle, une grosse porte de pierre est fermée. À côté, deux leviers sont plantés dans le mur, chacun à un bout de la salle, à dix pas l'un de l'autre. Sur la porte, gravé : « Un seul ne suffit pas. » Sur le sol, entre les deux leviers, un trou profond couvert de cristaux pointus. Que faites-vous ?"
      </ReadAloud>

      <ActionBox title="Options d'Exploration et Mécaniques (Bac à sable)">
        <p className="mb-4">C'est une énigme de <strong>coopération</strong> : il faut tenir les deux leviers en même temps. Laisse les joueurs chercher la solution avant d'aider.</p>

        <h4 className="font-bold text-lg mb-2">1. Tenir les deux leviers en même temps (aucun jet)</h4>
        <p className="mb-2">Chaque héros prend un levier. La porte s'ouvre si les deux le tiennent. Mais le trou est large, et l'un d'eux ne peut pas traverser seul.</p>
        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li><strong>Solution A :</strong> un héros tient son levier, l'autre contourne le trou (COURAGE - DD 9) et tient le second levier. Ils ouvrent la porte ensemble.</li>
          <li><strong>Solution B :</strong> le Magicien utilise <strong>Lueur magique</strong> pour trouver un passage secret sur le côté, sans jet.</li>
          <li><strong>Solution C :</strong> lancer la <strong>Bille de gelée</strong> du chapitre 2 pour atteindre le second levier de loin (MALICE - DD 8).</li>
        </ul>

        <h4 className="font-bold text-lg mb-2">2. Fouiller les cristaux (Test de MALICE - DD 10)</h4>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Réussite : Loot : un Cristal chantant.</strong> Il émet une note douce. Une fois dans l'aventure, souffler dedans rassure un animal effrayé (réussite automatique d'un jet de CŒUR).</li>
          <li><strong>Échec :</strong> les cristaux sont trop bien accrochés, mais ils renvoient un joli reflet.</li>
        </ul>
      </ActionBox>

      <h3 className="font-display text-2xl font-bold text-slate-700 mt-8 mb-4">SCÈNE 2 : LES CHAUVES-SOURIS DE CRISTAL (Combat)</h3>
      <ReadAloud title="Texte à lire à voix haute">
        "La porte de pierre s'ouvre dans un long grincement, et un souffle d'air froid sort de la grotte. Tout à coup, les cristaux du plafond se mettent à bouger : ce ne sont pas des cristaux, ce sont des <strong>chauves-souris de cristal</strong> ! Trois petites bêtes translucides, aux ailes pointues comme du verre, se décrochent du plafond et tournoient autour de vous en poussant des « Iiiiik ! » aigus. Chacun de leurs cris fait tinter les cristaux alentour, comme un orchestre de verre."
      </ReadAloud>

      <CombatBox title="Mécaniques de Combat (Les Chauves-Souris de Cristal)">
        <h4 className="font-bold text-lg mb-2">Les Ennemis : 3 Chauves-Souris de Cristal</h4>
        <ul className="list-disc pl-5 space-y-1 mb-4">
          <li><strong>Points de Vie (PV) :</strong> 5 chacune. <strong>Classe d'Armure (CA) :</strong> 12.</li>
          <li><strong>Attaque (Piqué) :</strong> touche à 10 ou plus (D20 du MJ), 1D4 de dégâts.</li>
          <li><strong>Cri de verre :</strong> si deux chauves-souris crient en même temps, un héros ébloui perd son tour (tire un D6 : 1 ou 2).</li>
        </ul>
        <h4 className="font-bold text-lg mb-2">Tactique et Environnement (Le rôle du MJ) :</h4>
        <ul className="list-disc pl-5 space-y-3">
          <li><strong>Option A - Coup d'épée ou Étincelle :</strong> D20 + talent, 1D6. Elles sont difficiles à toucher en vol.</li>
          <li><strong>Option B - Lueur magique (Magicien) :</strong> elles ne supportent pas la lumière : elles tombent, éblouies, au sol (+2 pour les toucher).</li>
          <li><strong>Option C - Le Bouclier (Chevalier) :</strong> il renvoie le cri : une chauve-souris étourdie perd son tour.</li>
          <li><strong>Option D - Les calmer (CŒUR - DD 11) :</strong> une berceuse ou le <strong>Cristal chantant</strong> les endort doucement.</li>
        </ul>
        <p className="italic mt-3">Une chauve-souris vaincue se pose sur un cristal et s'endort, la tête en bas.</p>
      </CombatBox>

      <h3 className="font-display text-2xl font-bold text-slate-700 mt-8 mb-4">SCÈNE 3 : GROGNON, LE TROLL DU PONT (Rencontre et Roleplay)</h3>
      <InfoBox title="Profil de Grognon, le troll du pont">
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Apparence :</strong> énorme, moussu, avec un petit bonnet de laine sur la tête.</li>
          <li><strong>Voix :</strong> grosse voix qui râle, mais il finit toujours par un petit soupir tendre.</li>
          <li><strong>Son secret :</strong> il est enrhumé et il a très faim. Un mouchoir, une brioche ou un câlin l'adoucissent aussitôt.</li>
        </ul>
      </InfoBox>

      <ReadAloud title="Texte à lire à voix haute">
        "La porte s'ouvre sur un pont de pierre qui traverse un gouffre rempli de lueurs rouges : le ventre du volcan, qui ronfle doucement. Au milieu du pont, assis sur un tonneau, un troll énorme, moussu et enrhumé, vous regarde en reniflant. « ATCHAAA ! Personne ne passe, » grogne-t-il. « Pas un pas de plus sans payer. Et j'ai faim. Et j'ai froid. Et j'ai mal à la tête. Mais personne n'est jamais gentil avec moi. » Il s'essuie le nez sur sa manche. Que faites-vous ?"
      </ReadAloud>

      <ActionBox title="L'Arbre de Dialogue et les Résolutions">
        <p className="mb-4">Il y a trois solutions. Laisse les joueurs proposer leur idée avant de leur donner ces options.</p>

        <h4 className="font-bold text-lg mb-2">Option A : Lui offrir de la nourriture (réussite automatique)</h4>
        <p className="mb-6">Une pomme, un biscuit ou une brioche : il la mange en trois secondes et sourit. « Hm... pas mal. » Il laisse passer en soupirant.</p>

        <h4 className="font-bold text-lg mb-2">Option B : Le consoler gentiment (Test de CŒUR - DD 9)</h4>
        <p className="mb-6"><strong>Réussite :</strong> il pleure de joie qu'on soit gentil avec lui, et confie : « Le petit dragon est passé hier soir, tout seul. Il avait l'air si triste. Il est allé vers le grand nid en haut. » <strong>Échec :</strong> il grogne encore, mais s'adoucit si l'autre joueur aide (+2).</p>

        <h4 className="font-bold text-lg mb-2">Option C : Se battre (déconseillé, mais possible)</h4>
        <p>Si l'enfant insiste, joue un combat très court, et laisse le troll s'effondrer en riant à la première touche : il adore les batailles pour rire.</p>
      </ActionBox>

      <CombatBox title="Mécaniques de Combat (uniquement si les héros attaquent le troll)">
        <h4 className="font-bold text-lg mb-2">L'Ennemi : Grognon, le troll enrhumé</h4>
        <ul className="list-disc pl-5 space-y-1 mb-6">
          <li><strong>Points de Vie (PV) :</strong> 8.</li>
          <li><strong>Classe d'Armure (CA) :</strong> 11.</li>
          <li><strong>Attaque (Gros coup de massue) :</strong> touche à 10 ou plus (D20 du MJ), 1D4 de dégâts. Il éternue toutes les deux attaques et rate alors son coup.</li>
        </ul>
        <h4 className="font-bold text-lg mb-2">Tactique et Environnement (Le rôle du MJ) :</h4>
        <ul className="list-disc pl-5 space-y-3">
          <li><strong>Option A - Attaque classique :</strong> Coup d'épée ou Étincelle.</li>
          <li><strong>Option B - Chatouiller le nez (MALICE - DD 9) :</strong> il éternue deux fois et passe un tour.</li>
          <li><strong>Option C - Rendre les armes :</strong> à tout moment, un héros peut lui tendre un biscuit : le combat s'arrête.</li>
        </ul>
      </CombatBox>

      <ReadAloud title="Texte à lire à voix haute (en quittant le pont)">
        "Grognon mouche son nez si fort que le pont tremble. « Merci, petits. Personne n'est jamais gentil avec moi. » Il vous tend un sachet : deux petits cristaux rouges, tièdes comme des galets de rivière. « Pour le chemin. Et dites au petit dragon que même un troll est gentil de temps en temps. » Devant vous, un tunnel monte vers la lumière. Tout en haut, il y a un nid."
      </ReadAloud>

      <InfoBox title="Récompenses">
        <ul className="list-disc pl-5 space-y-1">
          <li><strong>Loot : 2 cristaux tièdes.</strong> Chacun redonne 3 PV à un héros qui le serre contre lui.</li>
          <li>Si les héros ont été gentils avec Grognon, il leur confie la <strong>direction du nid</strong> et donne <strong>+2 au premier jet du chapitre 4</strong>.</li>
        </ul>
      </InfoBox>
    </section>
  );
}
