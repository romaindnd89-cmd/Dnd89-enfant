import React from 'react';
import { ReadAloud, CombatBox, ActionBox, InfoBox, FirstRound } from '../../components/StoryBlocks';

export default function Chapitre2() {
  return (
    <section id="chap2">
      <h2 className="font-display text-4xl font-bold text-orange-700 mb-6 border-b-4 border-orange-200 pb-2 mt-16">
        CHAPITRE 2 : LES CORBEAUX DE SUIE
      </h2>
      <p className="text-slate-500 font-medium mb-8">Niveau recommandé : 1<br/>Lieu : La clairière des épouvantails, à la lisière nord de la forêt<br/>Ambiance : Un décor de fête abandonné, entre inquiétant et carrément grotesque. Premier vrai combat : gardez-le fun, pas effrayant.</p>

      <InfoBox title="Synopsis du Chapitre pour le Maître du Jeu">
        <p>Trois corbeaux voleurs se disputent un tas d'objets brillants, dont une plume dorée qui ressemble à un morceau de carte. L'enfant peut les éviter (discrétion), les distraire (grelot) ou les affronter : c'est le tout premier combat, donc on prend le temps d'expliquer les dés. Après la bataille, un épouvantail bavard offre une petite quête annexe et un précieux indice pour le chapitre suivant.</p>
      </InfoBox>

      <h3 className="font-display text-2xl font-bold text-slate-700 mt-8 mb-4">SCÈNE 1 : LA CLAIRIÈRE DES ÉPOUVANTAILS (Exploration)</h3>
      <ReadAloud title="Texte à lire à voix haute">
        "La clairière s'ouvre devant vous comme une immense pièce sans toit. De vieux épouvantails de paille montent une garde un peu penchée, leurs chapeaux troués laissant passer le vent avec un sifflement grêle. Entre eux, des citrouilles qui auraient dû être orange sont devenues grises comme des pierres."<br/><br/>
        "Perchés tout en haut, sur les bras raides des épouvantails, trois grosses formes noires se chamaillent bruyamment. Ce sont des corbeaux, mais des corbeaux pas comme les autres : leurs plumes sont grasses et sales, comme trempées dans de la suie, et une légère fumée noire s'échappe de leur bec à chaque croassement. Entre leurs serres, ils se disputent un butin de pacotille : un dé à coudre rouillé, une vieille cuillère cabossée, et une plume dorée qui ressemble étrangement à un morceau de carte déchirée."<br/><br/>
        "Lumi se pose sur ton oreille : « Ce sont les Corbeaux de Suie. Ils servent quelqu'un, mais je ne sais pas encore qui. Ils n'aiment pas ceux qui se souviennent. » Que fais-tu ?"
      </ReadAloud>

      <InfoBox title="Profil des Corbeaux de Suie : Suie, Charbon et Cendrar">
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Qui ils sont :</strong> <em>Suie</em> (nerveux), <em>Charbon</em> (bête, facile à distraire) et <em>Cendrar</em> (le plus gros, se prend pour le chef).</li>
          <li><strong>Voix :</strong> nasillarde, phrases courtes qui finissent par un « CROÂ ! ». Ils se disputent entre eux même en plein combat.</li>
          <li><strong>Leur secret :</strong> une voix inconnue leur a ordonné de voler ce qui brille et de garder le passage vers le nord. Ils le confient volontiers après leur défaite.</li>
        </ul>
      </InfoBox>

      <ActionBox title="Options d'Exploration et Mécaniques (Bac à sable)">
        <p className="mb-4">Le combat n'est pas obligatoire tout de suite. Laisse l'enfant choisir son approche.</p>

        <h4 className="font-bold text-lg mb-2">1. Se faufiler en douce entre les épouvantails (Test d'AGILITÉ - DD 13)</h4>
        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li><strong>Réussite :</strong> le héros attrape la Plume-Carte sans réveiller personne. Pas de combat : passe directement à la Scène 3.</li>
          <li><strong>Échec :</strong> une brindille craque, les trois corbeaux se retournent. Le combat commence, mais ils sont surpris : −2 à leur premier jet.</li>
        </ul>

        <h4 className="font-bold text-lg mb-2">2. Fouiller l'herbe à la recherche d'une distraction (Test de FLAIR - DD 9)</h4>
        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li><strong>Réussite : Loot : Grelot de laiton.</strong> Lancé loin au début du combat, il attire Charbon (le plus bête) : un ennemi de moins.</li>
          <li><strong>Échec :</strong> rien que des cailloux et de la paille mouillée.</li>
        </ul>

        <h4 className="font-bold text-lg mb-2">3. Foncer tout droit</h4>
        <p>Aucun jet : on passe directement au combat. C'est l'option la plus simple pour les plus jeunes.</p>
      </ActionBox>

      <h3 className="font-display text-2xl font-bold text-slate-700 mt-8 mb-4">SCÈNE 2 : LE COMBAT CONTRE LES CORBEAUX DE SUIE</h3>
      <ReadAloud title="Texte à lire à voix haute">
        "Les trois corbeaux tournent la tête vers toi d'un seul mouvement, comme actionnés par un même fil invisible. « Un renard qui se souvient ? CROÂ ! Interdit ! La patronne n'aime pas ça du tout ! » Dans un envol de plumes grasses et de petite fumée noire, ils s'élancent vers toi, leurs serres tendues en avant."
      </ReadAloud>

      <CombatBox title="Mécaniques de Combat (Ton tout premier combat)" image="/art/monstres/corbeaux-de-suie.webp" imageAlt="Les Corbeaux de Suie">
        <p className="mb-2">Un combat se joue au <strong>tour par tour</strong>, avec seulement deux dés : le <strong>D20</strong> pour savoir si on touche, le <strong>D6</strong> pour les dégâts. (Le bouton 🎲 en bas de l'écran contient tous les dés.)</p>
        <p className="mb-4">Commence par l'initiative : D20, à 10 ou plus le héros agit en premier.</p>

        <FirstRound>
        <p><strong>Le petit renard</strong> attaque un corbeau (Suie) (5 PV, CA 11). Il lance le D20 et fait <strong>9</strong>. Il ajoute son Courage (+3) : 9 + 3 = <strong>12</strong>. 12 atteint la CA 11 : <strong>touché !</strong> Il lance le D6 pour les dégâts : <strong>3</strong>. Un corbeau (Suie) avait 5 PV : il lui en reste <strong>2</strong>.</p>
        <p>Au tour d'un corbeau (Suie), le MJ lance un D20 : <strong>7</strong>. Il faut <strong>11</strong> ou plus pour toucher le petit renard : c'est moins : <strong>raté !</strong> Le bec noir se referme dans le vide. (Avec 11 ou plus, le petit renard aurait perdu 1D4 PV.)</p>
        </FirstRound>
        <h4 className="font-bold text-lg mb-2">Les Ennemis : 3 Corbeaux de Suie</h4>
        <ul className="list-disc pl-5 space-y-1 mb-6">
          <li><strong>Points de Vie (PV) :</strong> 5 chacun (Cendrar en a 6).</li>
          <li><strong>Classe d'Armure (CA) :</strong> 11.</li>
          <li><strong>Attaque (Coup de bec) :</strong> touche à 11 ou plus (D20 du MJ), 1D4 de dégâts. Ils attaquent chacun leur tour, jamais ensemble.</li>
          <li><strong>Lâcheté :</strong> un corbeau tombé à 2 PV ou moins s'enfuit en piaillant.</li>
        </ul>

        <h4 className="font-bold text-lg mb-2">Tactique et Environnement (Le rôle du MJ) :</h4>
        <ul className="list-disc pl-5 space-y-4 mb-6">
          <li><strong>Option A - Griffes et crocs :</strong> 1D20 + COURAGE (+3) pour toucher, dégâts 1D6.</li>
          <li><strong>Option B - Bond du Renard :</strong> 1D20 + AGILITÉ (+4), utile contre un corbeau qui vient de s'envoler après avoir raté son attaque (il est intouchable sinon).</li>
          <li><strong>Option C - Renverser un épouvantail (MALICE +3) :</strong> l'épouvantail s'écroule sur un corbeau, qui rate son prochain tour.</li>
          <li><strong>Lumi (une fois par combat) :</strong> « Lumière Éblouissante », les corbeaux ont −2 pour un tour.</li>
        </ul>
        <p className="italic">Si l'enfant tombe à 0 PV : jamais de panique. Les corbeaux, trop lâches pour achever un adversaire, s'envolent en se disputant. Lumi réveille le héros d'un coup de lumière chaude : il se relève avec 3 PV.</p>
      </CombatBox>

      <h3 className="font-display text-2xl font-bold text-slate-700 mt-8 mb-4">SCÈNE 3 : LE BUTIN ET BRINGUEBALE L'ÉPOUVANTAIL</h3>
      <ReadAloud title="Texte à lire à voix haute">
        "Vaincus, les derniers corbeaux lâchent tout leur butin et s'enfuient dans un grand vacarme de plumes. « CROÂ ! On dira rien à la patronne, promis ! » hurle l'un d'eux. Le silence retombe sur la clairière, juste troublé par le bourdonnement satisfait de Lumi, qui tourne en cercles de joie autour de ta tête."<br/><br/>
        "« Psst ! Par ici, petit ! » La voix grinçante vient du plus vieil épouvantail, celui qui a un gros bouton de nacre à la place d'un œil. « Ces sacripants m'ont volé mon chapeau pendant que je dormais debout. Sans lui, j'ai les idées qui s'envolent comme des moineaux ! » Que fais-tu ?"
      </ReadAloud>

      <ActionBox title="Butin et Quête Annexe (Bac à sable)">
        <h4 className="font-bold text-lg mb-2">1. Fouiller le tas d'objets volés</h4>
        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li><strong>Loot : Plume-Carte dorée.</strong> Elle dessine en lignes qui brillent le chemin jusqu'au ruisseau puis au village des écureuils.</li>
          <li><strong>Loot : Dé à coudre rouillé.</strong> Lumi s'en fait un casque et en est ridiculement fière.</li>
          <li><strong>Loot : Cuillère-miroir.</strong> Elle renvoie la lumière de Lumi sur une créature de la brume : −2 à son prochain jet (une fois).</li>
          <li><strong>Loot : Noisette grillée</strong> de plus (+3 PV).</li>
        </ul>

        <h4 className="font-bold text-lg mb-2">2. Aider Bringuebale (Test d'AGILITÉ - DD 10)</h4>
        <p className="mb-2">Son chapeau est coincé en haut d'un bouleau voisin. Bringuebale parle lentement et cherche longtemps ses mots.</p>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Réussite :</strong> chapeau récupéré. Bringuebale retrouve un souvenir : « Le crapaud du ruisseau adore les devinettes, mais déteste qu'on le fasse attendre. Si tu sèches, dis-lui que tu réfléchis à voix haute : il ne pourra pas s'empêcher de t'aider ! » <strong>Récompense : un indice gratuit garanti</strong> pour l'énigme du chapitre 3.</li>
          <li><strong>Échec :</strong> le héros dégringole dans un tas de feuilles mortes (aucun dégât, fou rire garanti) et peut retenter.</li>
        </ul>
      </ActionBox>
    </section>
  );
}
