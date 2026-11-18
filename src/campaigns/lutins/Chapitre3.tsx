import React from 'react';
import { ReadAloud, CombatBox, ActionBox, InfoBox } from '../../components/StoryBlocks';

export default function Chapitre3() {
  return (
    <section id="chap3">
      <h2 className="font-display text-4xl font-bold text-sky-700 mb-6 border-b-4 border-sky-200 pb-2 mt-16">
        SALLE 3 : LA BIBLIOTHÈQUE DES LIVRES VOLANTS
      </h2>
      <p className="text-slate-500 font-medium mb-8">Niveau recommandé : 1<br/>Lieu : La grande bibliothèque ronde du château, sous une coupole de verre<br/>Ambiance : Feutrée et un peu magique, avec juste ce qu'il faut de loufoquerie.</p>

      <InfoBox title="Synopsis de la Salle pour le Maître du Jeu">
        <p>Des livres volent partout. L'équipe doit attraper le Grand Livre des Blagues : <strong>3 réussites avant 3 échecs</strong>, chaque enfant proposant une action à son tour. Pour l'ouvrir, il faut vraiment faire rire quelqu'un autour de la table. C'est la moitié de l'aventure : pense à la pause.</p>
      </InfoBox>

      <h3 className="font-display text-2xl font-bold text-slate-700 mt-8 mb-4">SCÈNE 1 : DES LIVRES QUI BATTENT DES AILES (Exploration et Roleplay)</h3>
      <ReadAloud title="Texte à lire à voix haute">
        "Vous poussez la grande porte sculptée de la bibliothèque, et un froissement général s'élève : des dizaines de petits livres de poche s'envolent en escadrille désordonnée, comme un nuage d'oiseaux de papier affolés. Au-dessus, les gros dictionnaires planent beaucoup plus lentement, avec une majesté pataude, comme de grosses oies fatiguées."<br/><br/>
        "Tout en haut, sous la coupole de verre qui laisse entrer une lumière poussiéreuse et dorée, le plus imposant des ouvrages tourne en rond sans jamais se poser : le Grand Livre des Blagues, à la reliure dorée gravée de petits personnages hilares. Entre ses pages entrouvertes, on devine deux pièces dorées qui servent de marque-pages."<br/><br/>
        "Un vieux lutin descend d'une échelle à roulettes, un doigt sur les lèvres. « CHUUUT ! » crie-t-il à tue-tête. « Ici, on ne fait pas de bruit, jeunes gens ! Vous voulez le Grand Livre des Blagues ? Il est farouche comme un chat sauvage. Il ne se pose que si on l'apprivoise, et il ne s'ouvre que si on lui raconte quelque chose de véritablement drôle. » Tout en bas d'une étagère, une petite souris à lunettes tourne en rond parmi des livres éparpillés. Que faites-vous ?"
      </ReadAloud>

      <InfoBox title="Profil de Maître Parchemin, le vieux bibliothécaire">
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Apparence :</strong> très âgé, barbe si longue qu'elle traîne au sol.</li>
          <li><strong>Caractère :</strong> sourd comme un pot, obsédé par le silence, alors qu'il est le plus bruyant du château.</li>
          <li><strong>Ses quiproquos :</strong> il comprend tout de travers (« un trésor ? » il propose de l'eau). Improvise librement.</li>
        </ul>
      </InfoBox>

      <ActionBox title="Options d'Exploration et Mécaniques (Bac à sable)">
        <h4 className="font-bold text-lg mb-2">1. Aider la petite souris bibliothécaire (Test de FLAIR - DD 11)</h4>
        <p className="mb-2">Elle a perdu son dictionnaire des synonymes : « Sans lui, je ne sais plus comment dire autrement 'catastrophe' ! » Il faut retrouver le bon livre parmi la nuée, en reniflant l'encre.</p>
        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li><strong>Réussite :</strong> elle griffonne une info glanée dans de vieux almanachs : « Au fond de la Galerie des Armures, méfiez-vous du grand escalier. Il n'aime pas qu'on le descende sans prévenir. » <strong>Récompense : +2 au prochain jet d'AGILITÉ</strong> de l'équipe (salle 4).</li>
          <li><strong>Échec :</strong> la nuée a emporté le livre trop haut. On peut réessayer après l'épreuve du Grand Livre.</li>
        </ul>

        <h4 className="font-bold text-lg mb-2">2. Attraper le Grand Livre des Blagues (épreuve d'équipe, 3 réussites avant 3 échecs, DD 10)</h4>
        <p className="mb-2">Chaque enfant propose une action différente, à tour de rôle :</p>
        <ul className="list-disc pl-5 space-y-2 mb-4">
          <li><strong>Faire la courte échelle</strong> à un ami (COURAGE).</li>
          <li><strong>Grimper aux étagères</strong> ou sauter d'une échelle roulante à l'autre (AGILITÉ).</li>
          <li><strong>Appâter le livre</strong> avec un beau marque-page ou un filet improvisé avec un rideau (MALICE).</li>
          <li><strong>Chanter une berceuse</strong> pour apaiser les livres affolés (CŒUR).</li>
        </ul>
        <p><strong>À chaque échec :</strong> une nuée de livres chatouille les héros avec leurs pages. L'équipe perd <strong>1 Rire</strong>, rien de plus grave.</p>
      </ActionBox>

      <h3 className="font-display text-2xl font-bold text-slate-700 mt-8 mb-4">SCÈNE 2 : LES DICTIONNAIRES GLOUTONS (Combat)</h3>
      <ReadAloud title="Texte à lire à voix haute">
        "Pendant que vous courez après le Grand Livre, un grondement sourd fait trembler les étagères du fond. Trois énormes dictionnaires, gros comme des coffres, se laissent tomber sur le sol avec un « BOUM ! ». Leurs couvertures s'ouvrent comme des gueules, pleines de pages qui claquent. « GLOUP ! » dit l'un. « Nous avons faim de MOTS ! » grogne l'autre. « Donnez-nous vos histoires, vos blagues, vos chapeaux ! » Ils avancent en traînant leurs reliures sur le parquet, et mordent le premier qui passe à leur portée."
      </ReadAloud>

      <CombatBox title="Mécaniques de Combat (Les Dictionnaires Gloutons)">
        <h4 className="font-bold text-lg mb-2">Les Ennemis : 3 Dictionnaires Gloutons</h4>
        <ul className="list-disc pl-5 space-y-1 mb-4">
          <li><strong>Pour en refermer un :</strong> 2 touches (un jet à 10 ou plus).</li>
          <li><strong>Leur attaque (fin de chaque tour de table) :</strong> 1D6 du MJ. Sur 1 ou 2, un dictionnaire mord un chapeau : l'équipe perd <strong>1 Rire</strong>.</li>
        </ul>
        <h4 className="font-bold text-lg mb-2">Tactique et Environnement (Le rôle du MJ) :</h4>
        <ul className="list-disc pl-5 space-y-3">
          <li><strong>Option A - S'asseoir sur la couverture (COURAGE) :</strong> un dictionnaire coincé ne peut plus mordre.</li>
          <li><strong>Option B - Lui lire une histoire (CŒUR) :</strong> les dictionnaires adorent qu'on leur raconte quelque chose : une touche automatique si l'histoire est drôle.</li>
          <li><strong>Option C - Lui donner un mot difficile (MALICE) :</strong> « Anticonstitutionnellement ! » Le dictionnaire cherche, cherche... et perd son tour.</li>
          <li><strong>Option D - Esquiver en glissant sur le parquet (AGILITÉ) :</strong> glissade acrobatique, +2 au prochain jet.</li>
        </ul>
        <p className="italic mt-3">Un dictionnaire vaincu se referme en soupirant, et glisse timidement à l'équipe : « Pardon, j'avais faim. »</p>
      </CombatBox>

      <h3 className="font-display text-2xl font-bold text-slate-700 mt-8 mb-4">SCÈNE 3 : LE LIVRE S'OUVRE ENFIN</h3>
      <ReadAloud title="Texte à lire à voix haute">
        "Le Grand Livre des Blagues se pose enfin sur les genoux tendus de l'équipe, encore tiède d'avoir tant volé, et se met à ronronner comme un gros chat satisfait. Mais il reste fermé. « Il ne s'ouvre que si on lui raconte quelque chose de drôle ! » crie Maître Parchemin. À qui le tour ?"
      </ReadAloud>

      <ActionBox title="Pour ouvrir le livre (Roleplay, aucun jet)">
        <p className="mb-2">Chaque enfant, à tour de rôle, raconte une vraie blague, fait une grimace mémorable ou imite un animal. <strong>Dès que quelqu'un autour de la table éclate de rire</strong> (même un adulte !), le livre s'ouvre tout seul dans un grand frisson de pages.</p>
        <p className="italic">« Le livre s'ouvre d'un coup dans un grand éclat de rire sonore qui semble venir du papier lui-même, et les deux pièces dorées glissent dans vos mains. Sur la première page, d'une écriture tremblante : « Qu'est-ce qui est jaune et qui attend patiemment ? » Maître Parchemin se penche : « Comment ? Un jongleur de dents ? Quelle drôle d'idée ! » Et tous les livres de la bibliothèque se mettent à rire en chœur avec vous. »</p>
      </ActionBox>

      <InfoBox title="Récompenses et Note pour le MJ : la pause de la mi-temps">
        <p className="mb-2"><strong>Loot : 2 pièces en chocolat.</strong> (La réponse de la blague : Jonathan. Les lutins la trouvent hilarante, sans qu'on sache pourquoi.)</p>
        <p>Vous êtes à la moitié de l'aventure. Si les enfants s'agitent, c'est le moment d'une vraie pause : comptez à voix haute les pièces réunies dans le trésor de l'équipe avant de repartir pour les trois dernières salles.</p>
      </InfoBox>
    </section>
  );
}
