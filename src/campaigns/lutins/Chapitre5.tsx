import React from 'react';
import { ReadAloud, CombatBox, ActionBox, InfoBox, FirstRound } from '../../components/StoryBlocks';

export default function Chapitre5() {
  return (
    <section id="chap5">
      <h2 className="font-display text-4xl font-bold text-violet-700 mb-6 border-b-4 border-violet-200 pb-2 mt-16">
        SALLE 5 : LA SALLE DES MIROIRS
      </h2>
      <p className="text-slate-500 font-medium mb-8">Niveau recommandé : 1<br/>Lieu : La salle ronde entièrement tapissée de miroirs déformants<br/>Ambiance : Étrange et hypnotique. Un vrai moment de jeu physique, debout, tous ensemble.</p>

      <InfoBox title="Synopsis de la Salle pour le Maître du Jeu">
        <p>Quelle est la vraie porte parmi des centaines de reflets ? L'équipe joue au jeu du miroir avec le lutin Reflet (c'est toi), puis trouve la vraie porte en soufflant de la buée sur les miroirs. Un petit lutin perdu offre la phrase-clé de l'énigme finale : <strong>retiens-la bien</strong>.</p>
      </InfoBox>

      <h3 className="font-display text-2xl font-bold text-slate-700 mt-8 mb-4">SCÈNE 1 : LE LABYRINTHE DES REFLETS (Exploration)</h3>
      <ReadAloud title="Texte à lire à voix haute">
        "Vous entrez ensemble dans cette curieuse salle ronde, et aussitôt des centaines de reflets de vous-mêmes vous entourent, chacun déformé d'une façon plus ridicule que la précédente. La porte de sortie se reflète elle aussi, encore et encore, dans tous les miroirs : mais laquelle, parmi toutes ces portes identiques, est la vraie ?"<br/><br/>
        "Un miroir tout en longueur donne à chacun des jambes interminables et une toute petite tête. Un miroir bombé renvoie la salle en rond, comme à l'intérieur d'une bulle de savon. Dans un coin, un miroir tout simple ne reflète personne, comme s'il attendait quelqu'un d'autre. Derrière l'un des plus grands miroirs, quelqu'un renifle discrètement. Et dans un troisième miroir, un petit bonnet à grelot apparaît, alors qu'aucun de vous n'en porte. Que faites-vous ?"
      </ReadAloud>

      <ActionBox title="Options d'Exploration et Mécaniques (Bac à sable)">
        <h4 className="font-bold text-lg mb-2">1. S'amuser avec les miroirs déformants (aucun jet)</h4>
        <p className="mb-6">Laisse l'équipe rire une minute devant les reflets : personne n'est pressé.</p>

        <h4 className="font-bold text-lg mb-2">2. Aller voir qui pleure derrière le grand miroir (Roleplay)</h4>
        <p className="mb-2">C'est <strong>Petit Pois</strong>, un tout jeune lutin au bonnet de travers, assis par terre : « Je jouais à cache-cache, mais je me suis tellement bien caché que je ne me retrouve plus moi-même... » Tous ses reflets à l'infini lui font peur. Il a un petit hoquet nerveux dès qu'il a peur.</p>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Le rassurer avec douceur (CŒUR - DD 8)</strong> ou lui tendre la main pour traverser ensemble.</li>
          <li><strong>Lui montrer que les reflets sont rigolos :</strong> réussite automatique si les enfants font vraiment des grimaces devant la table.</li>
          <li><strong>Récompense :</strong> Petit Pois suit l'équipe et confie : « Le roi dit toujours que le trésor, c'est comme un fou rire : ça ne vaut rien si on le garde pour soi tout seul. » <strong>Retiens cette phrase : c'est la clé de la salle 6.</strong></li>
        </ul>
      </ActionBox>

      <h3 className="font-display text-2xl font-bold text-slate-700 mt-8 mb-4">SCÈNE 2 : REFLET ET LE JEU DU MIROIR (Rencontre et Roleplay)</h3>
      <InfoBox title="Profil de Reflet, le lutin des miroirs">
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Apparence :</strong> un reflet décalé de celui qui lui parle, avec un bonnet à grelot en plus.</li>
          <li><strong>Caractère :</strong> farceur, il répète les gestes des visiteurs avec un léger retard malicieux. C'est toi qui le joues.</li>
          <li><strong>Sa règle :</strong> il ne révèle le secret de la vraie porte qu'à ceux qui ont joué le jeu jusqu'au bout.</li>
        </ul>
      </InfoBox>

      <ReadAloud title="Texte à lire à voix haute">
        "Vous faites tous un pas en avant : dans les miroirs, une centaine d'enfants font un pas en avant, en même temps. Vous levez la main : une centaine de mains se lèvent. Sauf une. Dans le troisième miroir en partant de la gauche, votre reflet vous tire la langue, bien que personne n'ait rien fait de tel ! Une voix qui ressemble étrangement à la vôtre ricane : « Si vous voulez retrouver la vraie porte, faites exactement comme moi. Vraiment exactement. Hi hi ! » Prêts ?"
      </ReadAloud>

      <ActionBox title="Le jeu du miroir (à jouer debout, en vrai !)">
        <p className="mb-4">Tu incarnes Reflet et enchaînes des gestes (toucher son nez, tourner sur soi-même, lever un pied, faire une grimace). Les enfants les reproduisent <strong>tous ensemble, dans le bon ordre</strong>.</p>
        <ul className="list-disc pl-5 space-y-2 mb-4">
          <li><strong>Manche 1 :</strong> trois gestes, bien lents.</li>
          <li><strong>Manche 2 :</strong> quatre gestes, un peu plus rapides.</li>
          <li><strong>Manche 3 :</strong> un enfant invente la séquence, et c'est toi qui dois la reproduire. Trompe-toi exprès de temps en temps : les enfants adorent corriger les adultes.</li>
        </ul>
        <p className="mb-2"><strong>Manche ratée :</strong> l'équipe perd 1 Rire, et on rejoue aussitôt.</p>
        <p className="mb-4"><strong>Version dés :</strong> pour ceux qui préfèrent, chaque manche devient un jet d'AGILITÉ collectif (DD 10).</p>

        <h4 className="font-bold text-lg mb-2">Trouver la vraie porte</h4>
        <p>Reflet donne son indice : « La vraie porte est la seule qui n'aime pas qu'on lui souffle dessus. » En soufflant ensemble sur chaque miroir, tous se couvrent de buée, sauf la vraie porte, en bois véritable. Un jet de <strong>MALICE (DD 10)</strong> permet aussi de le deviner sans l'indice.</p>
      </ActionBox>

      <h3 className="font-display text-2xl font-bold text-slate-700 mt-8 mb-4">SCÈNE 3 : LES DOUBLES FARCEURS (Combat)</h3>
      <ReadAloud title="Texte à lire à voix haute">
        "Vous venez de réussir le jeu du miroir. Reflet applaudit... puis il éclate d'un grand rire malicieux. « Hi hi hi ! Vous croyiez que c'était fini ? » Dans les miroirs, vos reflets s'arrêtent de vous imiter. Ils se regardent, sourient d'un air farceur, puis sortent des cadres, un par un, en passant leurs jambes par-dessus le bord ! Devant chaque enfant se tient maintenant un <strong>double</strong> de son héros, avec le même bonnet, les mêmes gestes, et un sourire un peu trop grand. « C'est le dernier jeu, » dit Reflet. « Battez-vous contre vous-mêmes ! »"
      </ReadAloud>

      <CombatBox title="Mécaniques de Combat (Les Doubles Farceurs)">
        <FirstRound>
        <p><strong>Léa, l'Acrobate,</strong> lance le D20 pour attaquer son Double farceur : elle fait <strong>8</strong>, +3 parce que c'est son talent (Agilité) = <strong>11</strong>. 11 atteint 10 : <strong>une touche !</strong> Il en faut 2 en tout : il en reste donc une à faire.</p>
        <p>À la fin du tour de table, le MJ lance le D6 : il fait <strong>4</strong>. Il fallait 1 ou 2, donc rien ne se passe : l'équipe garde tous ses Rires. (Avec 1 ou 2, un héros aurait perdu 1 Rire.)</p>
        </FirstRound>
        <h4 className="font-bold text-lg mb-2">Les Ennemis : un Double par enfant</h4>
        <ul className="list-disc pl-5 space-y-1 mb-4">
          <li><strong>Chaque Double</strong> copie le talent de son héros : il faut le toucher <strong>2 fois</strong> pour qu'il retourne dans son miroir.</li>
          <li><strong>Leur attaque (fin de chaque tour de table) :</strong> 1D6 du MJ. Sur 1 ou 2, un Double joue un tour à son héros : l'équipe perd <strong>1 Rire</strong>.</li>
          <li><strong>Règle comique : le Double copie ton dernier geste.</strong> Si un héros fait deux fois la même action, le Double la copie et l'esquive. Il faut <strong>changer de geste à chaque tour</strong> pour le surprendre !</li>
        </ul>
        <h4 className="font-bold text-lg mb-2">Tactique et Environnement (Le rôle du MJ) :</h4>
        <ul className="list-disc pl-5 space-y-3">
          <li><strong>Option A - Faire le contraire (MALICE) :</strong> le Double fait la même chose que toi... donc si tu tournes à gauche, il tourne à gauche et se cogne dans ton ami.</li>
          <li><strong>Option B - Échanger de place avec un ami :</strong> les Doubles se trompent de cible. Le jet d'AGILITÉ de l'ami gagne +2.</li>
          <li><strong>Option C - Le faire rire (CŒUR) :</strong> un Double qui rit ne peut plus copier : touche automatique.</li>
          <li><strong>Option D - Le Magicien :</strong> son Abracadabra fait disparaître un Double pour un tour.</li>
        </ul>
        <p className="italic mt-3">Un Double touché deux fois se remet dans son miroir en faisant la révérence.</p>
      </CombatBox>

      <ReadAloud title="Texte à lire à voix haute (la vraie porte apparaît)">
        "Vous soufflez ensemble, un grand coup collectif. Les miroirs se voilent de buée les uns après les autres, comme de petites fenêtres embuées un matin d'hiver. Tous, sauf un seul. La vraie porte est là, toute simple, avec sa poignée en forme de grelot. Dans la buée d'un miroir proche, un petit doigt invisible trace un bonhomme qui sourit, puis deux pièces bien rondes. Et ces mêmes pièces tombent du miroir, pour de bon, à vos pieds."
      </ReadAloud>

      <InfoBox title="Récompenses">
        <p><strong>Loot : 2 pièces en chocolat.</strong></p>
      </InfoBox>
    </section>
  );
}
