import React from 'react';
import { ReadAloud, CombatBox, ActionBox, InfoBox } from '../../components/StoryBlocks';
import EggHatch from '../../components/EggHatch';

export default function Chapitre1() {
  return (
    <section id="chap1">
      <h2 className="font-display text-4xl font-bold text-orange-700 mb-6 border-b-4 border-orange-200 pb-2 mt-16">
        CHAPITRE 1 : L'ŒUF VIDE
      </h2>
      <p className="text-slate-500 font-medium mb-8">Niveau recommandé : 1<br/>Lieu : Le village de Fumerolles et le temple du Dragon<br/>Ambiance : Un matin de fête qui tourne à l'inquiétude, mais toujours chaleureux. Un petit combat de poursuite à la fin : on apprend à jouer.</p>

      <EggHatch size={190} className="mb-2" />

      <InfoBox title="Synopsis du Chapitre pour le Maître du Jeu">
        <p>Premier chapitre, idéal pour apprendre les dés tranquillement, avec une poursuite de pies voleuses à la fin. Les héros explorent le temple, interrogent trois villageois et découvrent les traces du bébé dragon, qui mènent à la forêt. Chaque joueur a au moins un jet à faire ; si un enfant hésite, propose-lui une idée plutôt qu'un test. <strong>À retenir en fin de chapitre :</strong> (1) l'œuf a éclos cette nuit ; (2) Braisillon a peur de son feu ; (3) ses traces mènent à la Forêt des Champignons.</p>
      </InfoBox>

      <h3 className="font-display text-2xl font-bold text-slate-700 mt-8 mb-4">SCÈNE 1 : LE TEMPLE DU DRAGON (Exploration)</h3>
      <ReadAloud title="Texte à lire à voix haute">
        "Vous courez jusqu'au temple, au bout de la rue des Brioches. Le grand portail est grand ouvert, et à l'intérieur, tout est encore tiède. Au centre de la salle ronde, sur un coussin de velours rouge, repose une énorme coquille ouverte, grosse comme un seau, craquelée comme du verre. Elle est vide."<br/><br/>
        "Autour de vous, le sol est couvert de petites choses brillantes : des écailles rouges minuscules, une trace de pas de la taille d'une pomme, et une longue traînée de suie noire qui file vers la porte de derrière. Une vieille dame voûtée, la gardienne Mémé Tisane, se tord les mains près de la coquille. Que faites-vous ?"
      </ReadAloud>

      <ActionBox title="Options d'Exploration et Mécaniques (Bac à sable)">
        <p className="mb-4">Chaque joueur propose ce qu'il fait. Voici les pistes, toutes optionnelles : l'enfant peut en faire une, deux ou trois, dans l'ordre qu'il veut.</p>

        <h4 className="font-bold text-lg mb-2">1. Examiner la coquille (Test de MALICE - DD 9)</h4>
        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li><strong>Réussite :</strong> la coquille est brisée de l'intérieur, et près d'un éclat, il y a une marque de dents minuscules. Le bébé dragon n'a pas été enlevé : il est sorti tout seul. Pas de méchant à poursuivre !</li>
          <li><strong>Échec :</strong> la coquille est très belle, mais ne dit rien de plus. Mémé Tisane complète : « Il est sorti tout seul, mon petit, il avait juste très peur... »</li>
        </ul>

        <h4 className="font-bold text-lg mb-2">2. Suivre la traînée de suie (Test de COURAGE - DD 8)</h4>
        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li>Suivre les traces à quatre pattes, nez au sol, jusqu'à la porte arrière.</li>
          <li><strong>Réussite :</strong> les traces mènent au portail est du village, vers une forêt. <strong>Loot : une Écaille rouge</strong>, encore chaude, qui rougit quand on s'approche du bébé dragon (elle servira au chapitre 3).</li>
          <li><strong>Échec :</strong> on perd la piste un instant, et le héros se retrouve avec le nez noir de suie. Les villageois de l'étape suivante remettent les héros sur la bonne voie.</li>
        </ul>

        <h4 className="font-bold text-lg mb-2">3. Parler à Mémé Tisane (Roleplay)</h4>
        <p className="mb-2">Voix tremblante, très douce. Elle explique l'histoire de la Fête des Flammes, de la vieille Cendrelle et de la Grande Torche. Elle confie : « Il n'a jamais soufflé de feu. Cette nuit, il a éternué une étincelle sur la queue du chat du boulanger, et il s'est enfui en pleurant. »</p>
        <p className="italic">Si les joueurs ne savent pas quoi demander, suggère : « Pourquoi s'est-il enfui ? » ou « Comment est-il, ce petit dragon ? »</p>
      </ActionBox>

      <h3 className="font-display text-2xl font-bold text-slate-700 mt-8 mb-4">SCÈNE 2 : LE VILLAGE EN ALERTE (Rencontres et Roleplay)</h3>
      <ReadAloud title="Texte à lire à voix haute">
        "En sortant du temple, vous voyez toute la rue des Brioches s'agiter. Des villageois s'appellent d'une fenêtre à l'autre, un chat roux au poil roussi passe en courant, la queue encore fumante, et le boulanger, Monsieur Mie-de-Pain, brandit sa grande spatule en criant : « Un dragon ! Il a brûlé ma moustache ! » Devant le puits, la petite Lila, huit ans, pleure à chaudes larmes en serrant un doudou en forme de lézard. Plus loin, le forgeron Bastien, immense et tout barbu, secoue la tête en regardant au loin. Que faites-vous ?"
      </ReadAloud>

      <InfoBox title="Profil des villageois">
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Monsieur Mie-de-Pain, le boulanger :</strong> rond, rouge, très bruyant, mais tout gentil dans le fond. Sa moustache est partiellement brûlée. Il fait de grands gestes.</li>
          <li><strong>Lila, huit ans :</strong> petite voix, elle renifle. Elle a vu le dragon passer et se sent responsable : « Je lui ai crié dessus, il s'est sauvé ! »</li>
          <li><strong>Bastien, le forgeron :</strong> voix grave, il parle peu. Il a trouvé des traces près du portail est.</li>
        </ul>
      </InfoBox>

      <ActionBox title="L'Arbre de Dialogue et les Résolutions">
        <h4 className="font-bold text-lg mb-2">Option A : Calmer le boulanger (Test de CŒUR - DD 8)</h4>
        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li><strong>Réussite :</strong> il souffle, rigole de sa moustache (« Elle repoussera ! »), et offre deux <strong>brioches chaudes</strong> (+3 PV chacune, à partager entre les héros).</li>
          <li><strong>Échec :</strong> il continue de râler, mais finit par glisser : « J'en veux pas à ce petit ! »</li>
        </ul>

        <h4 className="font-bold text-lg mb-2">Option B : Consoler Lila (Test de CŒUR - DD 8)</h4>
        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li><strong>Réussite :</strong> Lila renifle moins fort. Elle confie un détail utile : « Il avait peur de lui, pas de nous ! Il m'a regardée avec ses yeux tout ronds, et il a dit : "Je suis dangereux". » Les héros comprennent que le bébé n'est pas méchant.</li>
          <li><strong>Échec :</strong> elle serre son doudou. Mais elle accepte de leur prêter ce doudou : <strong>Loot : le Doudou lézard</strong>. Il rassurera Braisillon au chapitre 4.</li>
        </ul>

        <h4 className="font-bold text-lg mb-2">Option C : Interroger Bastien (Test de MALICE - DD 9)</h4>
        <p>Il connaît la région. <strong>Réussite :</strong> il explique que le bébé a filé vers la Forêt des Champignons, à l'est : « Attention, les champignons sont tout mous et les gelées sautent partout. » <strong>Échec :</strong> il montre simplement l'est du doigt.</p>
      </ActionBox>

      <h3 className="font-display text-2xl font-bold text-slate-700 mt-8 mb-4">SCÈNE 3 : LES PIES VOLEUSES (Poursuite et Combat)</h3>
      <ReadAloud title="Texte à lire à voix haute">
        "Vous remplissez vos sacs en courant vers le portail est quand, soudain, deux éclairs noir et blanc fondent sur vous du haut d'un toit. « Ça brille ! Ça brille ! » croassent deux pies à grands cris. Avant que vous puissiez dire « ouf », la première vous pique votre <strong>brioche</strong> et la seconde vous arrache l'<strong>écaille rouge</strong> (ou, si vous ne l'avez pas, votre plus beau bouton). Elles s'envolent en riant, et se posent sur le toit de la boulangerie, la brioche dans le bec. « Attrapez-nous si vous pouvez ! »"
      </ReadAloud>

      <CombatBox title="Mécaniques de Combat (Les Pies Voleuses)">
        <p className="mb-2">C'est un combat de <strong>poursuite</strong> : les pies ne cherchent pas à blesser, elles veulent voler. Rappel : D20 + talent pour toucher, D6 pour les dégâts.</p>
        <h4 className="font-bold text-lg mb-2">Les Ennemis : 2 Pies Voleuses</h4>
        <ul className="list-disc pl-5 space-y-1 mb-4">
          <li><strong>Points de Vie (PV) :</strong> 5 chacune. <strong>Classe d'Armure (CA) :</strong> 11.</li>
          <li><strong>Leur attaque :</strong> si elles touchent (D20 du MJ à 10 ou plus), elles <strong>volent un objet</strong> au lieu de faire des dégâts. Quand une pie est touchée, elle <strong>laisse tomber</strong> ce qu'elle tenait.</li>
        </ul>
        <h4 className="font-bold text-lg mb-2">Tactique et Environnement (Le rôle du MJ) :</h4>
        <ul className="list-disc pl-5 space-y-3">
          <li><strong>Option A - Monter sur le toit (COURAGE - DD 10) :</strong> escalader la gouttière pour surprendre une pie.</li>
          <li><strong>Option B - L'appât (MALICE - DD 10) :</strong> poser une cuillère brillante au sol : une pie se précipite et se cogne.</li>
          <li><strong>Option C - Lancer un caillou (COURAGE) :</strong> toucher une pie en plein vol : 1D6 de dégâts.</li>
          <li><strong>Option D - Coup de main :</strong> un héros tient l'échelle pendant que l'autre grimpe (+2).</li>
        </ul>
        <p className="italic mt-3">Une pie touchée lâche sa trouvaille et s'envole en grommelant : « Pas drôle ! » Elle revient une minute plus tard, et propose un échange : une plume contre une brioche.</p>
      </CombatBox>

      <ReadAloud title="Texte à lire à voix haute (fin du chapitre)">
        "Vous remplissez vos sacs, vos poches, vos cœurs. Au bout de la rue, le portail est du village est grand ouvert, et derrière lui, on aperçoit la lisière d'une étrange forêt toute rose et orange, avec de gros champignons qui rebondissent dans la brume. Quelque part là-dedans, un tout petit dragon a peur de lui-même. Vous échangez un regard : c'est parti ! Quand êtes-vous prêts à partir ?"
      </ReadAloud>

      <InfoBox title="Note pour le MJ : faire le point">
        <p>Avant de passer au chapitre 2, résume à voix haute les trois choses à retenir. Compte aussi les en-cas que les héros ont gagnés. Rappelle que chaque joueur a lancé au moins un dé : c'est le but de ce chapitre.</p>
      </InfoBox>
    </section>
  );
}
