import React from 'react';
import { ReadAloud, CombatBox, ActionBox, InfoBox, FirstRound } from '../../components/StoryBlocks';

export default function Chapitre6() {
  return (
    <section id="chap6">
      <h2 className="font-display text-4xl font-bold text-rose-700 mb-6 border-b-4 border-rose-200 pb-2 mt-16">
        CHAPITRE 6 : TOUTES LES LUMIÈRES
      </h2>
      <p className="text-slate-500 font-medium mb-8">Niveau recommandé : 2<br/>Lieu : La Grand-Place du village, puis le fond du Puits Oublié<br/>Ambiance : Un grand rassemblement, puis le combat final, plus lumineux qu'effrayant. C'est le climax de l'histoire.</p>

      <InfoBox title="Synopsis du Chapitre pour le Maître du Jeu">
        <p className="mb-2">Le héros remonte en courant, sonne la grande cloche, et doit convaincre tout le village (y compris le Brigadier Tonnerre et les gobelins) de descendre avec sa lanterne. Il peut les convaincre en <strong>racontant la vérité</strong>, sans mentir. Puis il retourne au Puits avec la procession et affronte le <strong>Dévoreur de Lumière</strong>, en plusieurs phases. À la fin, il peut <strong>offrir de la lumière</strong> au Dévoreur au lieu de le vaincre.</p>
        <p><strong>Secret à garder :</strong> le Dévoreur n'est pas une créature mauvaise : c'est la faim d'une flamme qui n'a jamais été partagée. Ce que l'enfant va comprendre ici est le cœur de la morale.</p>
      </InfoBox>

      <h3 className="font-display text-2xl font-bold text-slate-700 mt-8 mb-4">SCÈNE 1 : LA CLOCHE DE LA GRAND-PLACE (Roleplay)</h3>
      <ReadAloud title="Texte à lire à voix haute">
        "Tu remontes l'escalier du Puits en courant, sans te retourner, Pip sur les talons. Dehors, la neige tombe à gros flocons. Le village dort, toutes les lanternes éteintes, à l'exception de trois ou quatre qui vacillent encore. Tu cours jusqu'à la Grand-Place, tu attrapes la corde de la grande cloche et tu tires de toutes tes forces. DONG. DONG. DONG. Les volets s'ouvrent un à un. Des visages apparaissent aux fenêtres : mal réveillés, inquiets, parfois en colère."<br/><br/>
        "Le Brigadier Tonnerre surgit en bonnet de nuit, le sabot déjà levé. « Qu'est-ce que ça veut dire ? C'est toi qui sonnes ? » Autour de lui, les villageois s'attroupent. Madame Ronce arrive en traînant les pieds, et derrière elle, timides, hésitants, quelques silhouettes vertes. Gribouille et Mousse. Personne ne leur a jamais permis d'entrer sur la Grand-Place. Tout le village se tait. C'est à toi de parler."
      </ReadAloud>

      <ActionBox title="Convaincre le village (épreuve de CŒUR et de vérité)">
        <p className="mb-3">Le héros dit la vérité : Bernardin, la Flamme, le Dévoreur, le besoin de lumières. <strong>Laisse-le parler avec ses propres mots</strong> (même s'il hésite). Plus il dit la vérité avec cœur, plus c'est facile :</p>
        <ul className="list-disc pl-5 space-y-2 mb-4">
          <li><strong>Test de CŒUR - DD 12</strong> pour convaincre la foule.</li>
          <li><strong>+2</strong> s'il avoue que Bernardin est malade, sans cacher la peine.</li>
          <li><strong>+2</strong> s'il dit que les gobelins sont innocents et qu'on leur doit des excuses.</li>
          <li><strong>+1</strong> si Pip, ou Madame Ronce, ou Mousse prend la parole à ses côtés.</li>
        </ul>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Réussite :</strong> un silence. Puis Tonnerre se racle la gorge : « Je... je me suis trompé. Sur les gobelins. » Il tend le sabot à Gribouille, gauchement. « Pardon. » Un à un, les villageois allument leurs lanternes avec celle de leur voisin. <strong>Tout le village descend.</strong></li>
          <li><strong>Échec (ou si l'enfant ne veut pas insister) :</strong> Madame Ronce monte sur un tonneau : « Écoutez-moi tous, bande d'ingrats ! » Elle raconte à sa place, avec des mots plus rudes. Moins de villageois viennent (la moitié), mais les plus courageux sont là. Le combat sera un peu plus difficile (voir ci-dessous).</li>
        </ul>
      </ActionBox>

      <ReadAloud title="Texte à lire à voix haute (la procession)">
        "Ils descendent tous ensemble, en longue file, dans l'escalier gelé. Il y a des mères avec leurs petits, des vieillards appuyés sur des cannes, le boulanger, la sage-femme, Madame Ronce, qui râle sans arrêt pour cacher qu'elle pleure. Les gobelins sont au milieu, sans qu'on sache comment, mêlés aux autres. Chacun tient sa lanterne. Chacune est différente : verte, rose, bleue, dorée, grande, minuscule. Dans le grand escalier de pierre, cela fait une rivière de lumières qui coule vers le fond."
      </ReadAloud>

      <h3 className="font-display text-2xl font-bold text-slate-700 mt-8 mb-4">SCÈNE 2 : LE DÉVOREUR DE LUMIÈRE (Combat)</h3>
      <ReadAloud title="Texte à lire à voix haute">
        "Le Dévoreur est devenu immense. Il occupe presque toute la salle, un nuage noir aux bras trop longs, qui aspire la Flamme-Source en une longue traînée dorée. Maître Bernardin, accroché à l'autel, est à genoux, tout pâle. « Mon petit... » souffle-t-il. Quand la procession entre, les lanternes du village brillent toutes ensemble, et le Dévoreur se retourne. Deux trous d'ombre se fixent sur toi. Il tend un bras. Toutes les lanternes de la salle vacillent d'un coup."
      </ReadAloud>

      <CombatBox title="Mécaniques de Combat (Le Dévoreur de Lumière)">
        <FirstRound>
          <p><strong>Ton héros attaque le Dévoreur :</strong> il lance le D20 et fait <strong>8</strong>. Il ajoute +3 (Courage), puis +2 (les lanternes du village) : <strong>13</strong>. La CA du Dévoreur est 12 : <strong>touché !</strong> Il lance le D6 : <strong>4</strong> dégâts. Il lui reste 16 PV sur 20 (et la Chaîne de lumières lui retire 2 PV de plus à la fin du tour : 14).</p>
          <p><strong>Tour du Dévoreur :</strong> le MJ lance un D20 : <strong>9</strong>, +4 = 13. Il fallait 12 ou plus : <strong>touché !</strong> Le MJ lance 1D6 : <strong>3</strong>. Le héros passe de 14 à 11 PV, et perd 1 point de Lueur (le Dévoreur aspire sa lumière).</p>
        </FirstRound>
        <h4 className="font-bold text-lg mb-2">L'Ennemi : le Dévoreur de Lumière</h4>
        <ul className="list-disc pl-5 space-y-1 mb-6">
          <li><strong>Points de Vie (PV) :</strong> 20. <strong>Classe d'Armure (CA) :</strong> 12.</li>
          <li><strong>Attaque (Voile d'ombre) :</strong> D20 +4 pour toucher (CA du héros : 12), 1D6 de dégâts. À chaque coup touché, le héros perd aussi <strong>1 point de Lueur</strong>.</li>
          <li><strong>Chaîne de lumières :</strong> à la fin de chaque tour, les lanternes du village lui infligent <strong>2 dégâts automatiques</strong> (1 seul si la moitié du village seulement est venue). Le Dévoreur grogne mais n'a pas peur.</li>
          <li><strong>Bonus des lanternes :</strong> tant que les villageois sont là, le héros gagne <strong>+2 à chaque jet d'attaque</strong> (+1 si la moitié seulement est venue).</li>
        </ul>
        <h4 className="font-bold text-lg mb-2">Les 3 phases du combat (pour mettre de la tension) :</h4>
        <ul className="list-disc pl-5 space-y-3 mb-4">
          <li><strong>Phase 1 (20 à 11 PV) : l'ombre qui avale.</strong> Il aspire les lumières. Au début de chaque tour, <strong>une lanterne du village s'éteint</strong> : le bonus de lanterne baisse d'un cran tant que quelqu'un ne la rallume pas (Option D).</li>
          <li><strong>Phase 2 (10 à 1 PV) : le Dévoreur grandit.</strong> Il hurle, ses bras s'allongent. Il peut attaquer <strong>deux fois</strong> par tour (une fois le héros, une fois une lanterne : si elle est touchée, Option D devient nécessaire).</li>
          <li><strong>Phase 3 (à 0 PV) : il ne s'effondre pas.</strong> Il se fige, rétrécit, et tremble. Passe à la Scène 3.</li>
        </ul>
        <h4 className="font-bold text-lg mb-2">Tactique et Environnement (Le rôle du MJ) :</h4>
        <ul className="list-disc pl-5 space-y-3 mb-4">
          <li><strong>Option A - Coup de Bâton-Lanterne :</strong> D20 + COURAGE (+3), 1D6 de dégâts.</li>
          <li><strong>Option B - Éclat de Lanterne (1 Lueur) :</strong> le Dévoreur est ébloui et perd son tour ; il lâche la Flamme-Source qui grandit un peu.</li>
          <li><strong>Option C - Coup de Savoir (SAVOIR - DD 12) :</strong> le héros se rappelle que la Flamme ne s'épuise pas quand on la partage : il crie à tout le village de joindre ses lanternes. <strong>Toutes les attaques du tour suivant ont +2</strong>, et les dégâts de la Chaîne passent à 4.</li>
          <li><strong>Option D - Rallumer une lanterne (CŒUR - DD 10) :</strong> le héros va vers une lanterne éteinte, la rallume avec la sienne : le bonus remonte d'un cran, et le villageois lui sourit. <strong>Chaque lanterne rallumée donne 1 point de Lueur.</strong></li>
          <li><strong>Option E - Si le héros tombe à 0 PV :</strong> jamais de mort. Pip et Madame Ronce le tirent à l'abri, lui donnent une tisane (+4 PV, puis il repart avec 5 PV). Le village tient le Dévoreur à distance pendant ce temps.</li>
        </ul>
        <p className="italic">Le Dévoreur ne veut pas faire de mal : il a faim, voilà tout. Joue ses gestes comme ceux d'un enfant perdu très grand, qui cherche et ne trouve pas.</p>
      </CombatBox>

      <h3 className="font-display text-2xl font-bold text-slate-700 mt-8 mb-4">SCÈNE 3 : LE DERNIER GESTE</h3>
      <ReadAloud title="Texte à lire à voix haute (lentement)">
        "Le Dévoreur chancelle. Il ne tombe pas : il rétrécit, rétrécit encore, jusqu'à n'être plus qu'une toute petite boule d'ombre grise, grosse comme un chaton, qui tremble sur le sol de pierre. Deux petits points blancs te regardent. Il n'a plus ni bras, ni voix, ni faim : seulement du froid. Autour de vous, la salle est silencieuse. Le village retient son souffle. Maître Bernardin murmure : « Tu vois, mon petit ? Il n'a jamais été un monstre. Il est ce qui arrive à une lumière qu'on laisse seule. »"
      </ReadAloud>

      <ActionBox title="La décision du héros (le choix important)">
        <p className="mb-3">Laisse l'enfant choisir <strong>ce qu'il fait de la petite ombre</strong>. Il n'y a pas de mauvaise réponse, mais certaines sont plus belles :</p>
        <ul className="list-disc pl-5 space-y-3">
          <li><strong>La réchauffer (CŒUR - DD 10, ou réussite automatique si le héros l'a demandé) :</strong> il pose sa lanterne près d'elle. La boule grise s'agrandit un peu, brille d'une lueur faible, puis d'une lueur dorée : une toute petite <strong>luciole</strong>. Elle vient se poser sur l'épaule du héros. <strong>Gagne 2 points de Lueur.</strong></li>
          <li><strong>Demander au village de partager :</strong> chacun détache une petite étincelle de sa lanterne et la pose au pied de l'autel. La Flamme-Source remonte, lentement, au rythme de tous les cœurs. <strong>C'est ainsi que la Flamme est sauvée.</strong></li>
          <li><strong>Chasser la boule d'ombre :</strong> elle disparaît dans la brume avec un petit cri triste, et le héros ne la reverra pas. <em>(Ne juge pas. Plus tard, Bernardin lui dira : « Tu n'as pas à avoir peur de ce que tu ne connais pas. »)</em></li>
        </ul>
      </ActionBox>

      <ReadAloud title="Texte à lire à voix haute (la Flamme revit)">
        "Un à un, les villageois s'avancent. Une petite étincelle de chaque lanterne, posée sur l'autel. Gribouille donne la sienne en tremblant. Mousse aussi. Tonnerre, solennel, pose la sienne et reste un instant la patte sur sa poitrine. Puis Pip. Puis Madame Ronce. La Flamme-Source, qui n'était qu'une bougie, devient un feu, puis un grand brasier doux et doré qui éclaire le Puits jusqu'au sommet. Dans le grand escalier, tout là-haut, tu entends un bruit comme un long soupir de soulagement : les lanternes de la Vallée se rallument, une par une, dans la nuit."
      </ReadAloud>

      <InfoBox title="Récompenses">
        <ul className="list-disc pl-5 space-y-1">
          <li><strong>La Flamme est sauvée.</strong> Le village comprend que la lumière ne diminue pas quand on la partage.</li>
          <li><strong>Loot :</strong> <strong>la Lanterne partagée</strong> (offerte par tout le village : elle brille toujours, même quand l'huile est vide), et la <strong>luciole</strong> si le héros a réchauffé l'ombre.</li>
          <li><strong>Passe au chapitre 7 sans attendre.</strong> Le plus important est ce qui vient maintenant.</li>
        </ul>
      </InfoBox>
    </section>
  );
}
