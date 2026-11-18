import React from 'react';
import { ReadAloud, CombatBox, ActionBox, InfoBox, Deduction, FirstRound } from '../../components/StoryBlocks';

export default function Chapitre5() {
  return (
    <section id="chap5">
      <h2 className="font-display text-4xl font-bold text-indigo-700 mb-6 border-b-4 border-indigo-200 pb-2 mt-16">
        CHAPITRE 5 : LE PUITS OUBLIÉ
      </h2>
      <p className="text-slate-500 font-medium mb-8">Niveau recommandé : 2<br/>Lieu : Les profondeurs gelées du Puits, sous le Marais de Brume<br/>Ambiance : Sombre, silencieuse, de plus en plus froide. Une énigme, un combat, et une rencontre bouleversante.</p>

      <InfoBox title="Synopsis du Chapitre pour le Maître du Jeu">
        <p className="mb-2">Le héros descend dans le Puits par un long escalier de pierre gelée. Il doit résoudre l'énigme des <strong>trois braziers</strong> (déduction), puis affronter deux <strong>Loups de Givre</strong>, nés du froid quand la Flamme faiblit. Tout au fond, il retrouve <strong>Maître Bernardin</strong>, assis près d'une flamme presque éteinte. Il lui raconte la vérité. Soudain, la Flamme se vide : un <strong>Dévoreur de Lumière</strong> s'éveille dans l'ombre.</p>
        <p><strong>Secret à garder :</strong> le Dévoreur est né de la peur et de la solitude : à force de ne donner la lumière qu'à un seul gardien, la Flamme a créé un être qui ne sait plus que la prendre. Bernardin le sait : « Une flamme qu'on garde pour soi seul finit par avoir faim. »</p>
      </InfoBox>

      <h3 className="font-display text-2xl font-bold text-slate-700 mt-8 mb-4">SCÈNE 1 : LA DESCENTE (Exploration)</h3>
      <ReadAloud title="Texte à lire à voix haute">
        "Le Puits Oublié n'est pas un trou dans la terre. C'est un grand escalier en colimaçon taillé dans la pierre, qui s'enfonce sous le marais, marche après marche, dans le noir. Les murs sont couverts de givre. À chaque pas, ton souffle forme un petit nuage blanc. Ta lanterne éclaire à peine trois mètres devant toi. Et partout, gravées dans la pierre, des centaines de petites lanternes, les noms des Gardiens d'autrefois, du plus ancien au plus récent. Le dernier nom, tout en bas, est écrit à la craie : Bernardin."<br/><br/>
        "Pip serre ta main. « Il est passé par là cette nuit, » dit-elle. « Regarde : les marches ont encore la trace de ses bottes. »"
      </ReadAloud>

      <ActionBox title="Options (Bac à sable)">
        <h4 className="font-bold text-lg mb-2">1. Lire les noms des Gardiens (Test de SAVOIR - DD 11)</h4>
        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li><strong>Réussite :</strong> chaque Gardien a gravé quelques mots. Le plus ancien : « La lumière qu'on garde s'éteint. » Un autre : « Donner ne vide pas la flamme. » Le dernier, celui de Bernardin : « Pardonne-moi, mon petit. » <strong>Le héros gagne 1 point de Lueur.</strong> (À lire lentement.)</li>
          <li><strong>Échec :</strong> la pierre est trop gelée, les lettres illisibles. On peut réessayer en bas.</li>
        </ul>
        <h4 className="font-bold text-lg mb-2">2. Descendre prudemment (Test de DISCRÉTION - DD 11)</h4>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Réussite :</strong> le héros évite une marche glissante et repère une niche : <strong>une tisane tiède</strong> (+4 PV), laissée là par Bernardin.</li>
          <li><strong>Échec :</strong> il glisse, perd 2 PV, mais retrouve vite l'équilibre. Pip lui tend la main.</li>
        </ul>
      </ActionBox>

      <h3 className="font-display text-2xl font-bold text-slate-700 mt-8 mb-4">SCÈNE 2 : LES TROIS BRAZIERS (Énigme)</h3>
      <ReadAloud title="Texte à lire à voix haute">
        "En bas de l'escalier, une grande porte de glace barre le chemin. À sa droite, trois braziers de pierre, vides, portent chacun un nom gravé : AUBE, MIDI, CRÉPUSCULE. Au-dessus de la porte, une inscription : « Allume d'abord la lumière qui termine le jour. Puis celle qui commence le jour. Enfin, celle qui remplit le jour. » Rien d'autre. Le froid mord tes doigts. Il faut trouver l'ordre."
      </ReadAloud>

      <Deduction
        title="L'énigme des braziers"
        question="Dans quel ordre faut-il allumer les trois braziers pour ouvrir la porte de glace ?"
        clues={[
          'Le brasier « AUBE » est celui du matin, quand le jour commence.',
          'Le brasier « MIDI » est celui du milieu du jour, quand il est le plus plein.',
          'Le brasier « CRÉPUSCULE » est celui du soir, quand le jour se termine.',
          "L'inscription dit : d'abord celle qui termine le jour, puis celle qui commence, enfin celle qui remplit.",
        ]}
        hint="Lis l'inscription phrase par phrase. Quelle lumière termine le jour ? Quelle lumière le commence ? Laquelle le remplit ?"
        answer={<>
          <p><strong>1. CRÉPUSCULE → 2. AUBE → 3. MIDI.</strong> Crépuscule termine le jour ; Aube le commence ; Midi le remplit.</p>
          <p>Si l'enfant se trompe, un brasier s'éteint dans un petit souffle glacé : <strong>il perd 1 PV</strong> (le froid), et on recommence. Si l'enfant réussit du premier coup, <strong>gagne 1 point de Lueur.</strong></p>
        </>}
      />

      <ReadAloud title="Texte à lire à voix haute (la porte s'ouvre)">
        "Les trois braziers s'allument l'un après l'autre, chacun d'une couleur différente : orange, rose, doré. La porte de glace fond en une cascade d'eau claire. Derrière, un souffle glacial te percute. Deux yeux bleus brillent dans le noir, puis deux autres. Quelque chose gronde, grand, blanc, couvert de givre. « Des Loups de Givre, » souffle Pip, blême. « Ils sont nés du froid quand la Flamme a faibli. Ils n'ont jamais connu la chaleur. »"
      </ReadAloud>

      <h3 className="font-display text-2xl font-bold text-slate-700 mt-8 mb-4">SCÈNE 3 : LES LOUPS DE GIVRE (Combat)</h3>

      <CombatBox title="Mécaniques de Combat (Les Loups de Givre)">
        <FirstRound>
          <p><strong>Ton héros attaque un Loup de Givre :</strong> il lance le D20 et fait <strong>11</strong>. Il ajoute +3 (Courage) : <strong>14</strong>. La CA du Loup est 12 : 14 atteint 12, <strong>touché !</strong> Il lance le D6 : <strong>5</strong> dégâts. Le Loup (8 PV) en a maintenant 3.</p>
          <p><strong>Tour des Loups :</strong> le MJ lance un D20 pour le premier : <strong>10</strong>, +3 = 13. Il fallait 12 ou plus : <strong>touché !</strong> Le MJ lance 1D6 : <strong>4</strong>. Le héros passe de 14 à 10 PV. Pour le deuxième Loup : <strong>5</strong>, +3 = 8 : <strong>raté</strong>.</p>
        </FirstRound>
        <h4 className="font-bold text-lg mb-2">Les Ennemis : 2 Loups de Givre</h4>
        <ul className="list-disc pl-5 space-y-1 mb-6">
          <li><strong>Points de Vie (PV) :</strong> 8 chacun. <strong>Classe d'Armure (CA) :</strong> 12.</li>
          <li><strong>Attaque (Morsure glacée) :</strong> D20 +3 pour toucher (CA du héros : 12), 1D6 de dégâts. Sur un 1 naturel du MJ, le loup glisse sur la glace et perd son tour.</li>
          <li><strong>Point faible : la chaleur.</strong> Une flamme qui brille fort les fait reculer. Un loup dont les PV tombent à 3 ou moins se couche et se laisse approcher.</li>
        </ul>
        <h4 className="font-bold text-lg mb-2">Tactique et Environnement (Le rôle du MJ) :</h4>
        <ul className="list-disc pl-5 space-y-3 mb-4">
          <li><strong>Option A - Coup de Bâton-Lanterne :</strong> D20 + COURAGE (+3), 1D6 de dégâts.</li>
          <li><strong>Option B - Éclat de Lanterne (1 Lueur) :</strong> les deux Loups reculent et ne peuvent pas attaquer pendant un tour : la chaleur les fait trembler.</li>
          <li><strong>Option C - Tendre la main (CŒUR - DD 13) :</strong> le héros pose sa lanterne par terre, s'agenouille et offre sa chaleur au loup. Le loup renifle, hésite, puis s'allonge à côté de la lanterne. <strong>Un des loups devient un ami</strong> et ne combat plus. (Joue-le comme un moment tendre : le loup tremble de froid.)</li>
          <li><strong>Option D - Pip chante pour les apaiser (si elle est là) :</strong> les Loups ferment les yeux une seconde : le héros attaque avec +2.</li>
        </ul>
        <p className="italic">Un Loup « vaincu » ne s'enfuit pas : il se blottit contre la lanterne et s'endort, enveloppé de chaleur pour la première fois de sa vie.</p>
      </CombatBox>

      <h3 className="font-display text-2xl font-bold text-slate-700 mt-8 mb-4">SCÈNE 4 : MAÎTRE BERNARDIN (Roleplay)</h3>
      <ReadAloud title="Texte à lire à voix haute (lentement)">
        "Au fond de la grande salle ronde, sur un banc de pierre, un vieux blaireau est assis, un plaid sur les genoux, une lanterne à la main. Sa flamme est minuscule, comme une luciole prête à s'éteindre. Devant lui, sur un autel de pierre, la Flamme-Source ne dépasse pas la taille d'une bougie d'anniversaire. Il lève la tête. Ses lunettes de travers renvoient un reflet doré."<br/><br/>
        "« Mon petit, » dit-il doucement. « Je savais que tu viendrais. J'espérais seulement que tu mettrais un peu plus de temps. »"
      </ReadAloud>

      <ActionBox title="Ce que Bernardin raconte (à jouer avec douceur, sans se presser)">
        <p className="mb-3">Laisse l'enfant poser ses questions. Tu peux dire ceci avec tes mots, dans l'ordre que tu veux :</p>
        <ul className="list-disc pl-5 space-y-3">
          <li>« Au printemps, j'ai su que j'étais malade. Ma lanterne à moi baisse chaque jour. Je n'ai plus beaucoup de temps. »</li>
          <li>« La Flamme-Source ne peut brûler que si un Gardien lui donne sa propre lumière. J'ai pensé que si je le faisais tout seul, tu serais préservé. Que les lanternes de la Vallée brilleraient assez longtemps pour que tu sois grand. »</li>
          <li>« J'avais tort. Chaque nuit, la Flamme prenait un peu plus de moi, et un peu moins de force pour les autres. Et j'ai déchiré cette page, tu sais, celle du Livre : elle disait que <strong>la Flamme ne se nourrit qu'un temps de la lumière d'un seul</strong>. Que seuls beaucoup de petits feux la rendent immortelle. Je ne voulais pas le lire. Je voulais le porter seul. »</li>
          <li>« J'ai eu peur de te le dire. Pas peur de mourir, mon petit. Peur de te voir pleurer. »</li>
        </ul>
        <p className="mt-3"><strong>Réponses possibles de l'enfant :</strong> il peut pleurer, se fâcher (« pourquoi tu ne m'as rien dit ? »), vouloir tout réparer, serrer son maître dans ses bras. Tout est bon. <strong>Laisse-le dire ce qu'il veut dire.</strong> Réponds par la voix de Bernardin, avec tendresse. Si l'enfant dit « je vais te sauver », Bernardin sourit : « Tu me sauves déjà en étant là. »</p>
      </ActionBox>

      <ReadAloud title="Texte à lire à voix haute (la Flamme s'affaiblit)">
        "Soudain, la Flamme-Source tremble. Elle s'incline, s'étire, et se met à descendre dans l'autel, aspirée par quelque chose. Les ombres, autour de la salle, s'épaississent. Un grondement sourd roule sous tes pieds. Maître Bernardin se redresse, les yeux grands : « Ah. Le voilà. Je craignais qu'il se réveille. » Au fond de la salle, une forme immense sans contour, faite de noir et de froid, déploie deux grands bras de brume. Deux trous d'ombre en guise d'yeux se tournent vers vous. Il a faim."
      </ReadAloud>

      <InfoBox title="Note au MJ : la transition vers le chapitre 6">
        <p className="mb-2">Le Dévoreur ne se bat pas tout de suite. Bernardin, essoufflé, tient la Flamme avec ce qui lui reste de force. Il dit : « Mon petit, <strong>je ne peux pas le vaincre seul.</strong> Toi non plus. Il faut beaucoup de lumières. Va chercher le village. » Il tousse. « Tu me crois fou ? Ils ne viendront peut-être pas. Mais tu as toi-même sauvé les gobelins ce soir, n'est-ce pas ? Va. »</p>
        <p><strong>Si l'enfant refuse de partir</strong> (« je ne te laisse pas ! ») : joue-le. Bernardin le prend par les épaules : « Rester ici ne m'aidera pas. C'est de la lumière dont j'ai besoin, pas d'un gardien de plus. » Pip prend la main du héros : « Allons-y. »</p>
      </InfoBox>
    </section>
  );
}
