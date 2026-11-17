import React from 'react';
import { ReadAloud, ActionBox, InfoBox } from '../../components/StoryBlocks';

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
        "Un brouhaha joyeux emplissait la salle, mais tout s'arrête net dès que vous franchissez le seuil. Il ne reste qu'un seul petit bruit : celui d'un grelot accroché à la couronne du roi. Le petit roi se lève d'un bond, manque de perdre l'équilibre sur ses coussins, se rattrape de justesse. « Chasseurs de trésor ! Vous avez franchi ma grille, survécu à ma cuisine, apprivoisé mes livres volants, renversé mon chevalier et trompé mes miroirs. Bravo ! Mais mon coffre a trois serrures, et aucune clé au monde ne peut les ouvrir. Il faut, pour chacune, trouver une chose qu'on ne peut pas mettre dans sa poche. Êtes-vous prêts ? » Les lutins retiennent leur souffle. Par quelle serrure commencez-vous ?"
      </ReadAloud>

      <ActionBox title="Les trois serrures (dans l'ordre que tu veux)">
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
