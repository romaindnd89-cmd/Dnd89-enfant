import React from 'react';
import { ReadAloud, CombatBox, ActionBox, InfoBox } from '../../components/StoryBlocks';

export default function Chapitre1() {
  return (
    <section id="chap1">
      <h2 className="font-display text-4xl font-bold text-emerald-700 mb-6 border-b-4 border-emerald-200 pb-2 mt-16">
        SALLE 1 : LA GRILLE QUI CHATOUILLE
      </h2>
      <p className="text-slate-500 font-medium mb-8">Niveau recommandé : 1<br/>Lieu : L'entrée fortifiée du château de Chantefarce<br/>Ambiance : Fête foraine un peu décatie, pleine de bonne humeur cachée derrière des airs de mystère. Installe bien le ton léger de toute l'aventure.</p>

      <InfoBox title="Synopsis de la Salle pour le Maître du Jeu">
        <p>Première salle, la plus simple, avec une petite bataille d'échauffement contre trois gargouilles. L'équipe explore les abords du château (un trèfle à quatre feuilles à trouver), puis résout la devinette du lutin portier Grelot pour ouvrir la grille. Un seau de confettis est suspendu au-dessus : un piège rigolo. <strong>Rappel : chaque enfant lance son D20 à son tour, +3 si l'action correspond à son talent. 10 ou plus, c'est réussi.</strong></p>
      </InfoBox>

      <h3 className="font-display text-2xl font-bold text-slate-700 mt-8 mb-4">SCÈNE 1 : L'ENTRÉE DU CHÂTEAU (Exploration)</h3>
      <ReadAloud title="Texte à lire à voix haute">
        "Vous voilà tous réunis devant l'immense grille du château. Ses barreaux de fer forgé dessinent des visages grimaçants qui vous tirent la langue chaque fois que le vent souffle. Au milieu, une énorme serrure sculptée en forme de grande bouche souriante, toutes dents dehors."<br/><br/>
        "Dès que l'un de vous s'approche, la grille entière se met à frémir, à glousser, puis carrément à pouffer de rire dans un grand bruit de ferraille. Elle vous chatouille rien qu'en vous voyant approcher ! Sur les créneaux, de petits bonnets rouges à grelots apparaissent entre les pierres, puis disparaissent dans un concert de « chut, chut, ils vont nous voir ! »."<br/><br/>
        "Autour de vous, la colline est couverte de trèfles. Un vieux cadran solaire de pierre tire la langue à midi pile. Au loin, la fumée d'une cheminée forme de petits ronds parfaits, comme si quelqu'un fumait la pipe en bulles de savon. À côté de la grille, un gros chat roux ronfle sur un levier en forme de poisson. Que faites-vous ?"
      </ReadAloud>

      <ActionBox title="Options d'Exploration et Mécaniques (Bac à sable)">
        <h4 className="font-bold text-lg mb-2">1. Chercher un trèfle à quatre feuilles (Test de MALICE - DD 11, chaque enfant peut tenter)</h4>
        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li><strong>Réussite : Loot : Trèfle à quatre feuilles.</strong> Une fois dans l'aventure, l'écraser permet de relancer un dé raté (le sien ou celui d'un ami) et de garder le nouveau résultat.</li>
          <li><strong>Échec :</strong> rien cette fois. On peut réessayer dans une autre salle couverte d'herbe.</li>
        </ul>

        <h4 className="font-bold text-lg mb-2">2. Actionner le levier du chat endormi (Test de MALICE - DD 12)</h4>
        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li>La plaque dit « Pont-levis des douves : NE PAS actionner sans la permission du roi ». Rien d'obligatoire ici : c'est un détail d'ambiance.</li>
          <li><strong>Réussite :</strong> le pont-levis s'abaisse dans un grand fracas... sur des douves vides, remplies de pâquerettes. Le chat bâille et se rendort.</li>
        </ul>

        <h4 className="font-bold text-lg mb-2">3. S'approcher de la grille (aucun jet)</h4>
        <p>Grelot surgit : passe à la Scène 2.</p>
      </ActionBox>

      <h3 className="font-display text-2xl font-bold text-slate-700 mt-8 mb-4">SCÈNE 2 : GRELOT ET SA DEVINETTE (Rencontre et Roleplay)</h3>
      <InfoBox title="Profil de Grelot, le lutin portier">
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Apparence :</strong> pas plus haut qu'une botte, énorme bonnet rouge à pompon.</li>
          <li><strong>Voix :</strong> petite voix pointue et joyeuse. Il parle en rimes quand il y pense, et oublie d'en faire le reste du temps.</li>
          <li><strong>Caractère :</strong> terriblement fier de son poste, incapable de garder un secret. Un compliment sur son accueil, et il devient complaisant.</li>
        </ul>
      </InfoBox>

      <ReadAloud title="Texte à lire à voix haute">
        "Un bonnet rouge surgit entre deux barreaux, suivi d'un visage rond aux joues roses. « Halte-là, les grands dadais ! » lance le petit lutin avec un sérieux théâtral. « Je suis Grelot, portier officiel de ce château depuis — attendez, je compte — depuis très, très longtemps ! Pour entrer, c'est facile : il faut trouver la clé, et la clé, c'est une réponse ! Si vous vous trompez, ma grille vous chatouille un bon coup. Hi hi ! »"<br/><br/>
        "Il se gratte pensivement le menton : « J'ai des dents mais je ne mange jamais de gâteau. J'ai un trou mais je ne pleure jamais. Je tourne sans avoir le tournis. Et sans moi, vous restez tous dehors, bien fait pour vous ! Qui suis-je ? » Au-dessus de la grille, un seau de confettis tient en équilibre au bout d'une ficelle usée. Que faites-vous ?"
      </ReadAloud>

      <ActionBox title="L'Arbre de Dialogue et les Résolutions (épreuve d'équipe)">
        <p className="mb-4">Toute l'équipe réfléchit ensemble, à voix haute. Chaque enfant peut proposer une idée, même la plus farfelue : c'est l'esprit d'entraide de toute l'aventure.</p>

        <h4 className="font-bold text-lg mb-2">Option A : Répondre à la devinette (Roleplay)</h4>
        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li><strong>Réponse attendue :</strong> une clé.</li>
          <li><strong>Mauvaise réponse :</strong> la grille chatouille le héros le plus proche : l'équipe perd <strong>1 Rire</strong>, et Grelot donne un indice : « Ça se range dans une poche... ou sous un paillasson, si on est tête en l'air ! »</li>
          <li><strong>Si l'équipe sèche (Test de MALICE - DD 10, +3 pour le Magicien) :</strong> Grelot laisse échapper la réponse sans s'en rendre compte, puis se couvre la bouche des deux mains.</li>
        </ul>

        <h4 className="font-bold text-lg mb-2">Option B : Repérer le seau de confettis (Test de MALICE ou de FLAIR collectif - DD 10)</h4>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Réussite :</strong> le groupe esquive le piège en riant d'avance. (L'Éclaireur réussit automatiquement avec Œil de lynx.)</li>
          <li><strong>Si personne ne le repère</strong> et que l'équipe pousse la grille, le seau se renverse. Test d'AGILITÉ (DD 10) pour esquiver. <strong>Échec :</strong> le héros touché ressemble à un gâteau d'anniversaire couvert de confettis, et l'équipe perd <strong>1 Rire</strong>.</li>
        </ul>
      </ActionBox>

      <ReadAloud title="Texte à lire à voix haute (la grille s'ouvre)">
        "« Une clé ! Bravo, bravo ! » Grelot tape des mains, et la serrure en forme de bouche éclate de rire, montrant toutes ses dents dans un concert de grincements joyeux. La grille s'ouvre toute seule en grinçant un petit air de fanfare bancale, juste pour vous."<br/><br/>
        "Grelot ôte son énorme bonnet pour saluer, et deux pièces dorées en tombent à vos pieds. « C'est pour vous, cadeau de la maison ! Le roi a dit : une salle, des pièces, c'est la règle. Mais chut, ne répétez pas qu'il y a six salles... Oh, zut, je viens de le dire moi-même. »"
      </ReadAloud>

      <h3 className="font-display text-2xl font-bold text-slate-700 mt-8 mb-4">SCÈNE 3 : LES GARGOUILLES CHATOUILLEUSES (Combat)</h3>
      <ReadAloud title="Texte à lire à voix haute">
        "À peine la grille ouverte, vous faites trois pas dans la cour, et là, au-dessus de vos têtes, trois gargouilles de pierre, perchées sur le mur, ouvrent un œil, puis l'autre. « Hi hi hi ! » ricane la première. « Des visiteurs ! » « On les chatouille ? » « ON LES CHATOUILLE ! » Elles se détachent de la pierre dans un grand bruit de cailloux, déploient leurs ailes toutes lourdes, et fondent sur vous avec chacune une longue plume dans la gueule. Attention : ça va chatouiller !"
      </ReadAloud>

      <CombatBox title="Mécaniques de Combat (Votre première bataille à plusieurs)">
        <p className="mb-2">Chacun son tour, autour de la table. À son tour, un enfant dit ce que fait son héros et lance le <strong>D20</strong> (+3 si l'action correspond à son talent). Si le total atteint <strong>10</strong>, c'est une <strong>touche</strong>. <strong>Exemple :</strong> Léo, l'Acrobate, saute sur une gargouille : il fait 8, +3 = 11. Touché !</p>
        <h4 className="font-bold text-lg mb-2 mt-4">Les Ennemies : 3 Gargouilles Chatouilleuses</h4>
        <ul className="list-disc pl-5 space-y-1 mb-4">
          <li><strong>Pour en faire tomber une :</strong> 2 touches.</li>
          <li><strong>Leur attaque (fin de chaque tour de table) :</strong> le MJ lance 1D6. Sur 1 ou 2, une plume chatouille un héros : l'équipe perd <strong>1 Rire</strong>.</li>
        </ul>
        <h4 className="font-bold text-lg mb-2">Tactique et Environnement (Le rôle du MJ) :</h4>
        <ul className="list-disc pl-5 space-y-3">
          <li><strong>Option A - Grimper et frapper (COURAGE ou AGILITÉ) :</strong> sauter sur le mur pour taper une gargouille sur le nez.</li>
          <li><strong>Option B - Chatouiller en retour (CŒUR) :</strong> une gargouille chatouillée pouffe de rire et perd son tour.</li>
          <li><strong>Option C - Les arroser (MALICE) :</strong> remplir un seau d'eau dans la fontaine et le jeter : une gargouille se met à bouder, et toutes les autres rient d'elle.</li>
          <li><strong>Option D - Le Chevalier :</strong> son Bouclier arrête une plume et fait rire tout le monde.</li>
        </ul>
        <p className="italic mt-3">Une gargouille « vaincue » s'assoit, hilare, sur son rebord, et applaudit les autres. Si l'équipe tombe à 0 Rire : pause chatouilles collective, et les gargouilles rendent 3 Rires en échange d'une grimace.</p>
      </CombatBox>

      <InfoBox title="Récompenses">
        <p><strong>Loot : 2 pièces en chocolat</strong> pour le trésor commun. À déposer tout de suite dans le bol de l'équipe.</p>
      </InfoBox>
    </section>
  );
}
