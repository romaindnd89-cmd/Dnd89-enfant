import React from 'react';
import { ReadAloud, CombatBox, ActionBox, InfoBox, FirstRound } from '../../components/StoryBlocks';

export default function Chapitre1() {
  return (
    <section id="chap1">
      <h2 className="font-display text-4xl font-bold text-cyan-700 mb-6 border-b-4 border-cyan-200 pb-2 mt-16">
        ACTE 1 : LE NAUFRAGE DE POCHE
      </h2>
      <p className="text-slate-500 font-medium mb-8">⏱️ Durée : environ 10 minutes<br/>Lieu : La plage de sable doré d'une île inconnue<br/>Ambiance : Drôle et lumineuse. Premières découvertes et premier petit combat.</p>

      <InfoBox title="Synopsis de l'Acte pour le Maître du Jeu">
        <p>Le mousse échoue sur la plage. Il explore (⭐ une option au minimum), puis une bande de crabes pirates en chapeau lui barre la route : c'est le premier combat, facile et rigolo. <strong>Indice pour le MJ :</strong> toutes les deux minutes environ, le sol « ronfle » : un grand grondement doux, comme quelqu'un qui dort. Mentionne-le sans l'expliquer. <strong>À retenir en fin d'acte :</strong> (1) l'île ronfle ; (2) il y a un trésor au centre ; (3) la carte déchirée en deux.</p>
      </InfoBox>

      <h3 className="font-display text-2xl font-bold text-slate-700 mt-8 mb-4">SCÈNE 1 : LA PLAGE QUI RONFLE (Exploration)</h3>
      <ReadAloud title="Texte à lire à voix haute">
        "Splotch ! Ton tonneau s'échoue sur du sable doré, chaud comme du pain. Autour de toi, des cocotiers penchés comme des fainéants, et au loin, une montagne verte si ronde qu'on dirait un dos. Soudain, un grand grondement : <em>rrrrooonnnfff...</em> Le sol tremble doucement, les cocos tombent, Miette se cache sous ton chapeau. « C'est un volcan ? » Toi, tu penses plutôt à quelqu'un qui dort. Que fais-tu ?"
      </ReadAloud>

      <ActionBox title="Options d'Exploration et Mécaniques (Bac à sable)">
        <p className="mb-4">L'enfant choisit ce qu'il fait. <strong>⭐ Fouiller le tonneau</strong> est l'option conseillée. Une seule réussite suffit pour passer à la suite.</p>

        <h4 className="font-bold text-lg mb-2">1. ⭐ Fouiller le tonneau (Test de MALICE - DD 10)</h4>
        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li><strong>Réussite :</strong> au fond, <strong>Loot : la moitié d'une carte au trésor</strong> déchirée en deux, avec un grand « X » dessiné au centre de l'île. Au dos, un mot : « Ne réveillez pas ce qui dort. »</li>
          <li><strong>Échec :</strong> il trouve seulement un vieux biscuit. Miette, vexée, finit par se rappeler : « J'ai une carte dans la poche ! » (elle est déchirée en deux).</li>
        </ul>

        <h4 className="font-bold text-lg mb-2">2. Grimper au cocotier (aucun jet : l'enfant décrit comment il grimpe)</h4>
        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li><strong>Il grimpe :</strong> du haut, le mousse voit l'île entière : une forêt, une jungle, et au centre, une grande colline pointue. <strong>Loot : une noix de coco fraîche</strong> (+3 PV).</li>
          <li><strong>S'il glisse :</strong> il retombe en riant, sans dégât, Miette applaudit (il trouve quand même une noix).</li>
        </ul>

        <p className="italic">Si l'enfant hésite : Capitaine Miette hurle « ON CHERCHE LE TRÉSOR, ON RENTRE, ON MANGE ! » (conseil du perroquet, un indice gratuit).</p>
      </ActionBox>

      <h3 className="font-display text-2xl font-bold text-slate-700 mt-8 mb-4">SCÈNE 2 : LES CRABES PIRATES (Combat)</h3>
      <ReadAloud title="Texte à lire à voix haute">
        "« CLAC CLAC CLAC ! » Trois crabes sortent du sable, chacun coiffé d'un tricorne. « HALTE ! C'est notre plage ! » crie le plus gros. « Payez le péage... ou on pince, s'il vous plaît », murmure le plus timide. Ils lèvent leurs pinces. Miette hurle « À L'ABORDAGE ! » depuis ton épaule, sans bouger."
      </ReadAloud>

      <CombatBox title="Mécaniques de Combat (Les Crabes Pirates)">
        <p className="mb-2"><strong>Rappel :</strong> D20 + talent pour toucher, 1D6 de dégâts. Quand un crabe attaque, le MJ lance un D20 : à 11 ou plus, il touche le mousse.</p>
        <FirstRound>
        <p><strong>Le mousse</strong> attaque un crabe pirate (4 PV, CA 11). Il lance le D20 et fait <strong>9</strong>. Il ajoute son Courage (+3) : 9 + 3 = <strong>12</strong>. 12 atteint la CA 11 : <strong>touché !</strong> Il lance le D6 pour les dégâts : <strong>4</strong>. Un crabe pirate avait 4 PV : il tombe à 0, il est <strong>K.O.</strong></p>
        <p>Au tour d'un crabe pirate, le MJ lance un D20 : <strong>7</strong>. Il faut <strong>11</strong> ou plus pour toucher le mousse : c'est moins : <strong>raté !</strong> La pince claque dans le sable. (Avec 11 ou plus, le mousse aurait perdu 1D4 PV.)</p>
        </FirstRound>
        <h4 className="font-bold text-lg mb-2">Les Ennemis : 3 Crabes Pirates</h4>
        <ul className="list-disc pl-5 space-y-1 mb-4">
          <li><strong>Points de Vie (PV) :</strong> 4 chacun. <strong>Classe d'Armure (CA) :</strong> 11.</li>
          <li><strong>Attaque (Coup de pince) :</strong> touche à 11 ou plus, 1D4 de dégâts.</li>
        </ul>
        <h4 className="font-bold text-lg mb-2">Tactique et Environnement (Le rôle du MJ) :</h4>
        <ul className="list-disc pl-5 space-y-3">
          <li><strong>Option A - Coup de Sabre :</strong> D20 + COURAGE (+3), 1D6 de dégâts.</li>
          <li><strong>Option B - Une noix de coco (COURAGE) :</strong> le héros la lance : touche automatique sur un crabe, 1D6.</li>
          <li><strong>Option C - Le Péage (CŒUR - DD 11) :</strong> le héros offre un biscuit : le petit crabe timide accepte, et les autres hésitent. Le combat s'arrête.</li>
          <li><strong>Miette (une fois) :</strong> elle hurle « BOU ! » : un crabe lâche sa pince de peur.</li>
        </ul>
        <p className="italic mt-3">Un crabe vaincu lève les pinces en l'air : « Pardon ! On voulait juste des biscuits. »</p>
      </CombatBox>

      <ReadAloud title="Texte à lire à voix haute (fin de l'acte)">
        "Les crabes, vexés mais gentils, te laissent passer. Le plus gros te tend la deuxième moitié d'une carte : « On l'avait trouvée il y a longtemps. Elle dit des trucs bizarres. » Tu assembles les deux morceaux : une île, un chemin pointillé, un grand X au milieu, et une phrase en lettres tremblantes : « Le trésor dort. Ne le secouez pas. » Au loin, la montagne ronfle. Rrrrooonnnfff..."
      </ReadAloud>

      <InfoBox title="Récompenses de l'Acte 1">
        <ul className="list-disc pl-5 space-y-1">
          <li><strong>Loot : la carte entière.</strong> Elle donne +2 au premier jet de l'acte 2 (le mousse sait où aller).</li>
          <li><strong>Panache de l'acte :</strong> si l'enfant a fait rire quelqu'un (le crabe timide, Miette...), il gagne un <strong>Coup de Chance</strong> en plus.</li>
        </ul>
      </InfoBox>
    </section>
  );
}
