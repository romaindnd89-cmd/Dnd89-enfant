import React from 'react';
import { ReadAloud, CombatBox, ActionBox, InfoBox, FirstRound } from '../../components/StoryBlocks';

export default function Chapitre6() {
  return (
    <section id="chap6">
      <h2 className="font-display text-4xl font-bold text-yellow-700 mb-6 border-b-4 border-yellow-200 pb-2 mt-16">
        SALLE 6 : LE TRÉSOR DU ROI PIROUETTE
      </h2>
      <p className="text-slate-500 font-medium mb-8">Niveau recommandé : 1<br/>Lieu : La grande salle du trône, bondée de lutins en liesse<br/>Ambiance : Le climax joyeux de l'aventure, mêlant spectacle, réflexion et émotion.</p>

      <InfoBox title="Synopsis de la Salle pour le Maître du Jeu">
        <p>Un coffre à trois serrures : <strong>RIRE</strong>, <strong>RUSE</strong>, <strong>PARTAGE</strong>. L'équipe fait rire le roi, résout une énigme, puis choisit de partager ses pièces en chocolat avec les lutins. Joue les lutins du public avec beaucoup d'énergie : « Oooh ! » et « Aaah ! » à chaque étape, et parfois de fausses réponses soufflées pour embrouiller gentiment tout le monde.</p>
      </InfoBox>

      <InfoBox title="Profil du roi Pirouette Iᵉʳ">
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Apparence :</strong> minuscule même pour un lutin, voix de théâtre et gestes disproportionnés.</li>
          <li><strong>Caractère :</strong> il joue au roi sérieux et solennel, et craque en sourire après dix secondes.</li>
          <li><strong>Son vrai secret :</strong> il aime les enfants qui savent s'entraider, bien plus que ceux qui veulent seulement gagner.</li>
        </ul>
      </InfoBox>

      <h3 className="font-display text-2xl font-bold text-slate-700 mt-8 mb-4">SCÈNE 1 : LA SALLE DU TRÔNE (Rencontre et Roleplay)</h3>
      <ReadAloud title="Texte à lire à voix haute">
        "À vos pieds, devant le trône royal, un coffre gigantesque attend, cerclé de bandes dorées et fermé par trois énormes serrures. Sur chacune, un mot est gravé : RIRE, RUSE, PARTAGE. L'air sent le chocolat, très fort, et ça vient du coffre lui-même."<br/><br/>
        "Un brouhaha joyeux emplissait la salle, mais tout s'arrête net dès que vous franchissez le seuil. Il ne reste qu'un seul petit bruit : celui d'un grelot accroché à la couronne du roi. Le petit roi se lève d'un bond, manque de perdre l'équilibre sur ses coussins, se rattrape de justesse. « Chasseurs de trésor ! Vous avez franchi ma grille, survécu à ma cuisine, apprivoisé mes livres volants, renversé mon chevalier et trompé mes miroirs. Bravo ! Mais mon coffre a trois serrures, et aucune clé au monde ne peut les ouvrir. Il faut, pour chacune, trouver une chose qu'on ne peut pas mettre dans sa poche. Êtes-vous prêts ? » Les lutins retiennent leur souffle. Mais avant de toucher aux serrures, il y a une petite formalité..."
      </ReadAloud>

      <ActionBox title="Avant les serrures : l'épreuve de la Garde Royale">
        <h4 className="font-bold text-lg mb-2">Avant les serrures : l'épreuve de la Garde Royale (Combat)</h4>
        <p className="mb-2">Le roi tape trois fois sur son trône : « Avant de toucher à mon coffre, il faut prouver que vous êtes assez costauds pour le porter ! » Quatre lutins en armure de casserole bondissent de derrière les rideaux avec de gros <strong>coussins</strong> pour armes : c'est la Garde Royale, menée par le capitaine <strong>Sir Plumard</strong>.</p>
      </ActionBox>

      <CombatBox title="Mécaniques de Combat (La Bataille de Coussins)">
        <FirstRound>
        <p><strong>Léa, l'Acrobate,</strong> lance le D20 pour attaquer un Garde Royal : elle fait <strong>9</strong>, +3 parce que c'est son talent (Agilité) = <strong>12</strong>. 12 atteint 11 : <strong>une touche !</strong> Il en faut 2 en tout : il en reste donc une à faire.</p>
        <p>À la fin du tour de table, le MJ lance le D6 : il fait <strong>4</strong>. Il fallait 1, 2 ou 3, donc rien ne se passe : l'équipe garde tous ses Rires. (Avec 1, 2 ou 3, un héros aurait perdu 1 Rire.)</p>
        </FirstRound>
        <h4 className="font-bold text-lg mb-2">Les Ennemis : 3 Gardes Royaux et le capitaine Sir Plumard</h4>
        <ul className="list-disc pl-5 space-y-1 mb-4">
          <li><strong>Gardes Royaux (× 3) :</strong> 2 touches chacun. <strong>Sir Plumard :</strong> 3 touches. Un jet à <strong>11 ou plus</strong> est une touche.</li>
          <li><strong>Leur attaque (fin de chaque tour de table) :</strong> 1D6 du MJ. Sur 1, 2 ou 3, un coussin « paf » un héros : l'équipe perd <strong>1 Rire</strong>.</li>
          <li><strong>Plumes partout :</strong> chaque coussin touché explose en plumes, qui flottent dans l'air. Le premier à éternuer perd son tour (tire un D6 : sur 1, c'est toi).</li>
        </ul>
        <h4 className="font-bold text-lg mb-2">Tactique et Environnement (Le rôle du MJ) :</h4>
        <ul className="list-disc pl-5 space-y-3">
          <li><strong>Option A - Lancer un coussin (AGILITÉ) :</strong> un garde est assis par terre, assommé de fous rires.</li>
          <li><strong>Option B - Faire une forteresse de coussins (COURAGE) :</strong> les attaques du MJ ratent sur 1 ou 2 pendant un tour.</li>
          <li><strong>Option C - Faire rire le capitaine (CŒUR) :</strong> une grimace et il laisse tomber son coussin.</li>
          <li><strong>Option D - Rouler Sir Plumard sur le tapis (MALICE) :</strong> il glisse et passe son tour.</li>
        </ul>
        <p className="italic mt-3">Après la bataille, tout le monde est couvert de plumes, le roi applaudit debout, et la Garde Royale salue les héros avant de leur rendre leurs coussins en cadeau.</p>
      </CombatBox>

      <ActionBox title="Maintenant, les trois serrures (dans l'ordre que tu veux)">

        <h4 className="font-bold text-lg mb-2">Serrure 1 : RIRE (Roleplay ou test de CŒUR - DD 10)</h4>
        <p className="mb-6">Il faut faire rire le roi, qui se retient de toutes ses forces. Chaque enfant tente à son tour devant le public : une grimace, une blague, une danse, une imitation. <strong>Si l'enfant le fait pour de vrai, c'est réussi d'office</strong>, sans jet. Sinon, jet de CŒUR. La serrure s'ouvre dès que la <strong>moitié de l'équipe</strong> a réussi. Le <strong>plumeau géant</strong> compte pour une réussite garantie.</p>

        <h4 className="font-bold text-lg mb-2">Serrure 2 : RUSE (Énigme)</h4>
        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li><strong>Le roi demande :</strong> <em>« Plus on m'en donne, plus j'en ai encore. Plus je le garde pour moi tout seul, moins j'en ai au final. Les lutins en ont toujours plein les joues. Qu'est-ce que c'est ? »</em></li>
          <li><strong>Réponse attendue :</strong> le rire (on accepte aussi la joie, le bonheur, les sourires, l'amitié).</li>
          <li><strong>Si l'équipe sèche :</strong> jet de MALICE collectif (DD 10), ou <strong>Petit Pois</strong>, s'il a été secouru, souffle la réponse en faisant semblant de tousser.</li>
        </ul>

        <h4 className="font-bold text-lg mb-2">Serrure 3 : PARTAGE (Roleplay)</h4>
        <p className="mb-2">Le roi désigne le bol où l'équipe a rangé ses pièces en chocolat. Lis lentement, en laissant le silence s'installer avant la question finale :</p>
        <p className="italic mb-3">« Dernière serrure, la plus importante. Vous avez gagné de bien belles pièces, et vous les avez méritées. Mais regardez mes lutins : ils en ont caché partout pour vous, et il ne leur en reste aucune pour eux-mêmes. Voici ma dernière question, et c'est à vous d'y répondre tous ensemble : ce trésor que vous avez amassé... le gardez-vous pour vous, ou choisissez-vous de le partager ? »</p>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Laisse vraiment les enfants en discuter.</strong> N'interviens pas tout de suite : c'est le plus beau moment de la partie.</li>
          <li><strong>S'ils partagent</strong> (même une seule pièce) : la serrure s'ouvre dans un grand déclic.</li>
          <li><strong>S'ils préfèrent tout garder :</strong> aucun mal. La serrure reste fermée, les lutins font « Oooh... » déçus. Petit Pois (ou Grelot) tire un héros par la manche et répète la phrase : « Un trésor, c'est comme un fou rire : ça ne vaut rien si on le garde pour soi tout seul. » Laisse-leur une seconde chance.</li>
        </ul>
      </ActionBox>

      <h3 className="font-display text-2xl font-bold text-slate-700 mt-8 mb-4">SCÈNE 2 : LE COFFRE S'OUVRE</h3>
      <ReadAloud title="Texte à lire à voix haute (lentement)">
        "CLAC. CLAC. CLAC. Les trois serrures tombent l'une après l'autre. Le couvercle du coffre se soulève dans un grand souffle, et une lumière chaude et dorée inonde la salle. Le coffre est rempli à ras bord de pièces en chocolat ! Et voici le plus beau tour de magie des lutins : chaque fois que quelqu'un en offre une à quelqu'un d'autre, deux nouvelles apparaissent à la place."<br/><br/>
        "Les lutins bondissent de leurs gradins, lancent leurs bonnets à grelots en l'air, essaient de vous hisser sur leurs épaules sans y parvenir, ce qui déclenche un fou rire général. Le roi Pirouette descend de son trône et pose sa couronne à grelot sur la tête du plus jeune de l'équipe. « Vous êtes venus chercher un trésor, mes braves, » dit-il d'une voix soudain très douce, « et vous repartez avec cent nouveaux amis. C'est la meilleure farce que j'aie jamais vue réussir dans ce château. »"
      </ReadAloud>

      <InfoBox title="Récompenses et Cœur de l'histoire">
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Loot final :</strong> sors toutes les pièces en chocolat restantes. L'équipe les partage en parts égales et met une petite part de côté « pour les lutins » (c'est-à-dire pour toi, le MJ).</li>
          <li><strong>À dire simplement :</strong> un trésor grandit vraiment quand on choisit de le partager. Félicite toute l'équipe plutôt qu'un seul héros.</li>
        </ul>
      </InfoBox>
    </section>
  );
}
