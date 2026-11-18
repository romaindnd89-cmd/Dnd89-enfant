import React from 'react';
import { ReadAloud, ActionBox, InfoBox } from '../../components/StoryBlocks';

export default function Chapitre2() {
  return (
    <section id="chap2">
      <h2 className="font-display text-4xl font-bold text-emerald-700 mb-6 border-b-4 border-emerald-200 pb-2 mt-16">
        ACTE 2 : LA JUNGLE QUI RONFLE
      </h2>
      <p className="text-slate-500 font-medium mb-8">⏱️ Durée : environ 10 minutes<br/>Lieu : La jungle au centre de l'île<br/>Ambiance : Aventure et rencontre amusante avec une capitaine rivale. Pas de combat dans cet acte.</p>

      <InfoBox title="Synopsis de l'Acte pour le Maître du Jeu">
        <p>Le mousse traverse la jungle (3 petits obstacles, une seule réussite suffit pour aller vite) puis rencontre <strong>Mademoiselle Barbe-Rose</strong>, une capitaine rivale très susceptible, qui cherche aussi le trésor. Le héros peut s'allier avec elle ou la devancer. <strong>Indice pour le MJ :</strong> la jungle respire à chaque ronflement ; les arbres se balancent en rythme, le sol est tiède, et un ruisseau coule... en arrière. Ne l'explique pas !</p>
      </InfoBox>

      <h3 className="font-display text-2xl font-bold text-slate-700 mt-8 mb-4">SCÈNE 1 : LES TROIS OBSTACLES DE LA JUNGLE (Exploration)</h3>
      <ReadAloud title="Texte à lire à voix haute">
        "La jungle est un tableau de peintre devenu fou : des fleurs grosses comme des parapluies, des lianes qui se balancent toutes dans le même sens, et, tous les dix pas, un grand ronflement qui fait vibrer le sol. Ta carte montre trois étapes : un tronc au-dessus d'un ravin, un rideau de lianes, un marais plein de bulles. Par quoi commences-tu ?"
      </ReadAloud>

      <ActionBox title="Les trois obstacles (une seule réussite suffit)">
        <p className="mb-4"><strong>Pour aller vite :</strong> une réussite sur les trois obstacles permet d'arriver à la scène 2 (les autres sont passés avec un petit exploit de Miette). Pour plus d'aventure, joue-les tous. <strong>Bonus de +2</strong> au premier jet grâce à la carte.</p>

        <h4 className="font-bold text-lg mb-2">1. ⭐ Le tronc au-dessus du ravin (Test de COURAGE - DD 10 ; ou Grappin Express sans jet)</h4>
        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li><strong>Réussite :</strong> le mousse traverse en équilibre, un pied devant l'autre, pendant que le tronc bouge au rythme du ronflement.</li>
          <li><strong>Échec :</strong> il glisse et se rattrape de justesse (−1 PV).</li>
        </ul>

        <h4 className="font-bold text-lg mb-2">2. Le rideau de lianes (aucun jet : on décrit comment on passe)</h4>
        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li>Le mousse comprend que les lianes se balancent avec le ronflement : il attend le bon moment pour traverser. (S'il s'emmêle, c'est juste drôle.)</li>
        </ul>

        <h4 className="font-bold text-lg mb-2">3. Le marais aux bulles (aucun jet : une blague suffit)</h4>
        <ul className="list-disc pl-5 space-y-2">
          <li>Un énorme crapaud, assis sur un nénuphar, grogne : « Péage ! Une blague pour passer ! »</li>
          <li>Le héros raconte une blague, même simple. Le crapaud rit, et le marais s'éclaircit en bulles lumineuses.</li>
        </ul>
      </ActionBox>

      <h3 className="font-display text-2xl font-bold text-slate-700 mt-8 mb-4">SCÈNE 2 : MADEMOISELLE BARBE-ROSE (Rencontre et Roleplay)</h3>
      <ReadAloud title="Texte à lire à voix haute">
        "Dans une clairière, une jeune capitaine te fixe, les poings sur les hanches. Grand chapeau à plumes roses, manteau à rubans, et une barbe en papier collée de travers. Derrière elle, deux petits matelots trépignent. « TOI ! Tu es sur MON île, avec MA carte, pour MON trésor ! Je suis Mademoiselle Barbe-Rose, terreur des sept mers ! » Un matelot chuchote : « On est six ans en retard sur les sept mers. »"
      </ReadAloud>

      <InfoBox title="Profil de Mademoiselle Barbe-Rose">
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Apparence :</strong> grand chapeau rose, fausse barbe en papier (qui se décolle quand elle s'énerve), airs de grande dame.</li>
          <li><strong>Voix :</strong> aiguë, théâtrale, très vexée dès qu'on rit. Elle se calme si on la flatte.</li>
          <li><strong>Son secret :</strong> elle veut le trésor pour réparer son navire, qui prend l'eau. Elle n'est pas méchante : juste très pressée.</li>
          <li><strong>Ses matelots :</strong> Grumeau (bonnet) et Pétoche (cravate), deux petits pirates peureux, qui ne se battent jamais vraiment.</li>
        </ul>
      </InfoBox>

      <ActionBox title="L'Arbre de Dialogue et les Résolutions">
        <h4 className="font-bold text-lg mb-2">Option A : ⭐ Proposer une alliance (Test de CŒUR - DD 11)</h4>
        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li><strong>Réussite :</strong> Barbe-Rose accepte de partager la carte et de marcher avec le héros « pour le moment ». Elle devient une <strong>alliée méfiante</strong> : au combat de l'acte 3, elle hésitera. (<strong>Gagne un Coup de Chance.</strong>)</li>
          <li><strong>Échec :</strong> elle accepte du bout des lèvres, mais s'élance devant pour arriver la première.</li>
        </ul>

        <h4 className="font-bold text-lg mb-2">Option B : La flatter (aucun jet)</h4>
        <p className="mb-6">« Quelle belle barbe ! » Elle fond, rougit, et donne un conseil : « Le trésor est dans la grotte, tout au fond. Mais on dirait que le sol y est mou. » (Indice.)</p>

        <p className="italic">Si l'enfant préfère foncer : Barbe-Rose le suit en trottinant et arrive juste derrière lui à la grotte.</p>
      </ActionBox>

      <ReadAloud title="Texte à lire à voix haute (fin de l'acte)">
        "Au pied de la colline pointue, une grotte s'ouvre comme une bouche. L'air qui en sort est tiède et sent la vanille, ce qui est très étrange. Chaque ronflement fait vibrer le sol, plus fort ici que partout. Au-dessus de l'entrée, une plaque : « ICI DORT LE TRÉSOR DU CŒUR DE L'ÎLE. » Miette déglutit : « Je suis le capitaine, je passe en dernier. »"
      </ReadAloud>
    </section>
  );
}
