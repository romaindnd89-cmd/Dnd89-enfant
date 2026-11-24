import React from 'react';
import { ReadAloud, CombatBox, ActionBox, InfoBox, FirstRound } from '../../components/StoryBlocks';

export default function Chapitre8() {
  return (
    <section id="chap8">
      <h2 className="font-display text-4xl font-bold text-stone-700 mb-6 border-b-4 border-stone-300 pb-2 mt-16">
        CHAPITRE 8 : LE TERRIER DE GRISAILLE
      </h2>
      <p className="text-slate-500 font-medium mb-8">Niveau recommandé : 2<br/>Lieu : Le labyrinthe de galeries sous la colline pelée, au nord de la forêt<br/>Ambiance : Feutrée, un peu oppressante, mais jamais effrayante : on sent qu'il y a une tristesse cachée là-dessous. Chapitre d'infiltration.</p>

      <InfoBox title="Synopsis du Chapitre pour le Maître du Jeu">
        <p>Le héros descend dans des tunnels, découvre peu à peu la solitude de Grisaille (une table mise pour deux, un journal intime) et franchit trois obstacles en silence. Un combat est possible mais il vaut mieux l'éviter : le sifflet des écureuils et les indices du journal facilitent tout. Prépare le chapitre 9 : <strong>Grisaille n'est pas une vraie méchante, juste une taupe terriblement seule.</strong></p>
      </InfoBox>

      <h3 className="font-display text-2xl font-bold text-slate-700 mt-8 mb-4">SCÈNE 1 : DES TUNNELS QUI RESPIRENT (Exploration)</h3>
      <ReadAloud title="Texte à lire à voix haute">
        "L'entrée du terrier ressemble à une bouche sombre et ronde, bordée de racines qui pendent comme de longs cheveux emmêlés. L'air qui en sort sent la terre humide et, étrangement, le thé froid, comme si quelqu'un, en bas, buvait sans cesse une tasse qu'il oubliait aussitôt."<br/><br/>
        "Tu descends prudemment, Lumi cachée contre ta fourrure pour ne pas trahir ta présence. Les tunnels sont ronds, tapissés de racines, et de petits champignons phosphorescents diffusent une lueur pâle. Le long des parois, des étagères creusées dans la terre s'alignent, remplies d'objets perdus : boutons dépareillés, rubans décolorés, une seule moufle sans sa paire, et des dessins d'animaux à la craie sur de l'écorce. On dirait un petit musée bricolé, triste et tendre à la fois."<br/><br/>
        "À mi-chemin, une petite pièce abrite une table mise pour deux. L'une des tasses semble avoir servi récemment. L'autre est couverte d'une fine poussière grise. Plus loin, une minuscule porte ronde est entrouverte. Que fais-tu ?"
      </ReadAloud>

      <ActionBox title="Options d'Exploration et Mécaniques (Bac à sable)">
        <h4 className="font-bold text-lg mb-2">1. Examiner la table mise pour deux (Observation)</h4>
        <p className="mb-6">Aucun jet : laisse l'enfant remarquer la tasse poussiéreuse, sans l'expliquer. C'est un indice silencieux sur la solitude de Grisaille, qui prendra son sens au chapitre 9.</p>

        <h4 className="font-bold text-lg mb-2">2. Entrer dans la bibliothèque de Monsieur Lombric (Test de CŒUR - DD 8)</h4>
        <p className="mb-2">Un vieux ver de terre à petites lunettes range des carnets : « Chut ! On ne court pas dans les archives, jeune renard. » Il garde les carnets personnels de Grisaille. Voix pincée, extrêmement poli.</p>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Réussite</strong> (ou aider à ranger une pile de carnets qui s'effondre) : il laisse lire une page. <em>« Cher journal. Aujourd'hui, c'était mon anniversaire. J'ai préparé un gâteau aux racines, avec la recette de ma mère. J'ai mis deux tasses sur la table, comme chaque année, au cas où. J'ai attendu jusqu'au soir. Personne n'est venu, parce que personne ne sait que j'existe, sous cette colline. Demain, j'essaierai un nouveau sortilège. »</em></li>
          <li><strong>Récompense :</strong> au chapitre 9, +3 aux jets de CŒUR face à Grisaille, et réussite automatique si l'enfant lui souhaite un bon anniversaire en retard.</li>
          <li><strong>Échec :</strong> Lombric refuse poliment mais l'enfant peut revenir en proposant son aide.</li>
        </ul>
      </ActionBox>

      <h3 className="font-display text-2xl font-bold text-slate-700 mt-8 mb-4">SCÈNE 2 : L'INFILTRATION, TROIS PASSAGES EN SILENCE</h3>
      <InfoBox title="Profil des Mottes Grises (gardiennes obéissantes)">
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Apparence :</strong> petits tas de terre et de boue grise, de la taille d'un gros chien, deux trous sombres comme yeux.</li>
          <li><strong>Caractère :</strong> pas méchantes, juste obéissantes jusqu'à l'absurde. Elles parlent très lentement et se laissent distraire par n'importe quoi.</li>
        </ul>
      </InfoBox>

      <ReadAloud title="Texte à lire à voix haute">
        "Plus on s'enfonce, plus on entend une voix qui marmonne toute seule dans les profondeurs. Devant toi, trois obstacles te séparent de la grande salle : un long couloir où des pierres roulent sous les pattes, deux tas de boue grise à moitié endormis, puis un enchevêtrement de racines qui cache plusieurs passages. Comment avances-tu ?"
      </ReadAloud>

      <ActionBox title="Les trois passages (dans l'ordre que tu veux)">
        <h4 className="font-bold text-lg mb-2">Passage 1 : le couloir qui craque (Test d'AGILITÉ - DD 10)</h4>
        <p className="mb-6">Avancer sans bruit. <strong>Bonus +2</strong> si le héros a le <strong>Champignon-lanterne</strong> du chapitre 1 : il le frotte pour y voir (lumière trop douce pour réveiller les gardiens). <strong>Bonus +2</strong> aussi avec l'entrée secrète de Mi-Bémol (chapitre 7).</p>

        <h4 className="font-bold text-lg mb-2">Passage 2 : les Mottes Grises endormies</h4>
        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li><strong>Les contourner en silence (AGILITÉ - DD 11).</strong></li>
          <li><strong>Les distraire en faisant rouler une noisette au loin (MALICE - DD 9).</strong> Plus fiable et plus amusant à décrire.</li>
        </ul>

        <h4 className="font-bold text-lg mb-2">Passage 3 : la porte de racines (Test de FLAIR - DD 10)</h4>
        <p>Repérer le bon chemin à l'odeur : celui qui sent le thé froid et la cire de bougie.</p>
      </ActionBox>

      <InfoBox title="Si l'alerte est donnée (deux échecs ou plus)">
        <p>Rien n'est perdu : le héros peut souffler dans le <strong>Sifflet en gland</strong> du chapitre 4 ! Les écureuils de Noisette déboulent par dizaines et chargent les Mottes Grises à coups de noisettes et de cris de guerre. Passe directement à la scène 3, sans combat.</p>
      </InfoBox>

      <CombatBox title="Mécaniques de Combat (uniquement si le héros est repéré)" image="/art/monstres/mottes-grises.webp" imageAlt="Les Mottes Grises">
        <FirstRound>
        <p><strong>Le petit renard</strong> attaque une Motte Grise (6 PV, CA 10). Il lance le D20 et fait <strong>8</strong>. Il ajoute son Courage (+3) : 8 + 3 = <strong>11</strong>. 11 atteint la CA 10 : <strong>touché !</strong> Il lance le D6 pour les dégâts : <strong>4</strong>. Une Motte Grise avait 6 PV : il lui en reste <strong>2</strong>.</p>
        <p>Au tour d'une Motte Grise, le MJ lance un D20 : <strong>7</strong>. Il faut <strong>11</strong> ou plus pour toucher le petit renard : c'est moins : <strong>raté !</strong> La motte glisse et s'écrase par terre. (Avec 11 ou plus, le petit renard aurait perdu 1D4 PV.)</p>
        </FirstRound>
        <h4 className="font-bold text-lg mb-2">Les Ennemis : 2 Mottes Grises</h4>
        <ul className="list-disc pl-5 space-y-1 mb-6">
          <li><strong>Points de Vie (PV) :</strong> 6 chacune.</li>
          <li><strong>Classe d'Armure (CA) :</strong> 10.</li>
          <li><strong>Attaque (Coup de boue) :</strong> touche à 11 ou plus (D20 du MJ), 1D4 de dégâts. Lentes et maladroites, elles ratent souvent.</li>
        </ul>
        <h4 className="font-bold text-lg mb-2">Tactique et Environnement (Le rôle du MJ) :</h4>
        <ul className="list-disc pl-5 space-y-3">
          <li><strong>Option A - Griffes et crocs :</strong> 1D20 + COURAGE (+3), dégâts 1D6.</li>
          <li><strong>Option B - L'eau (MALICE - DD 9) :</strong> asperger ou faire rouler une Motte dans une pente la défait : neutralisée d'un coup, sans dégâts.</li>
        </ul>
      </CombatBox>

      <h3 className="font-display text-2xl font-bold text-slate-700 mt-8 mb-4">SCÈNE 3 : LA GRANDE SALLE</h3>
      <ReadAloud title="Texte à lire à voix haute">
        "Au bout du dernier tunnel, une vaste salle ronde s'ouvre devant toi, bien plus grande que tout ce que tu as traversé. Au centre, sur un trône tressé de racines noueuses, une silhouette toute ronde se tient immobile, le dos tourné. Dans ses petites pattes, serré contre elle comme un trésor, ou peut-être comme un doudou, brille faiblement le dernier Gland d'Or : celui de l'Amitié."
      </ReadAloud>
    </section>
  );
}
