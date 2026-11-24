import React from 'react';
import { ReadAloud, CombatBox, ActionBox, InfoBox, FirstRound } from '../../components/StoryBlocks';

export default function Chapitre7() {
  return (
    <section id="chap7">
      <h2 className="font-display text-4xl font-bold text-indigo-700 mb-6 border-b-4 border-indigo-200 pb-2 mt-16">
        CHAPITRE 7 : LA GROTTE AUX ÉCHOS (Le Gland de la Chanson)
      </h2>
      <p className="text-slate-500 font-medium mb-8">Niveau recommandé : 2<br/>Lieu : La Grotte aux Échos, nichée entre deux rochers moussus au fond du vallon<br/>Ambiance : Magique et sonore, un peu solennelle. C'est le chapitre de la musique retrouvée.</p>

      <InfoBox title="Synopsis du Chapitre pour le Maître du Jeu">
        <p>Le héros doit rallumer trois cristaux colorés dans le bon ordre, comme au jeu « Jacques a dit », pour rendre sa chanson à la forêt. Cette chanson est celle que fredonnait Mémé Rouquine au chapitre 1. Pas de combat. Joue l'écho en répétant la fin de tes phrases de plus en plus bas (« Bienvenue… venue… nue… ») : laisse l'enfant crier son nom pour entendre la réponse.</p>
      </InfoBox>

      <h3 className="font-display text-2xl font-bold text-slate-700 mt-8 mb-4">SCÈNE 1 : LA CAVERNE QUI RÉPÈTE TOUT (Exploration)</h3>
      <ReadAloud title="Texte à lire à voix haute">
        "Tu avances de quelques pas et dis « bonjour » pour tester l'endroit. La grotte te répond aussitôt : « bonjour... bonjour... bonjour... » de plus en plus bas, comme une vague de voix qui s'éloigne dans le noir. Lumi glousse de surprise et laisse échapper un petit « hiii ! » que la caverne lui renvoie en cascade."<br/><br/>
        "Les parois sont couvertes de stalactites fines comme les tuyaux d'un gigantesque orgue de pierre. Des flaques parfaitement immobiles reflètent la lumière de Lumi comme de petits miroirs noirs. Tout au fond, trois énormes cristaux, un bleu profond, un jaune éclatant, un rouge sombre, sont les seules vraies couleurs de toute la forêt. Entre eux, sur un rocher plat, le Gland de la Chanson scintille timidement."<br/><br/>
        "« Bienvenue, petit renard, » dit une voix douce qui vient des parois. « La brume a volé la chanson de toute la forêt. Pour prendre le Gland qui dort ici, tu dois d'abord la lui rendre. Écoute bien… et répète exactement comme tu l'entends. » Les cristaux s'allument l'un après l'autre : un bleu, un jaune, un rouge. Que fais-tu ?"
      </ReadAloud>

      <ActionBox title="Le jeu de mémoire (à jouer pour de vrai !)">
        <p className="mb-4">Invente une petite séquence (couleurs nommées, tapes dans les mains, notes chantonnées) que l'enfant répète fidèlement. On augmente la difficulté à chaque manche.</p>
        <ul className="list-disc pl-5 space-y-2 mb-4">
          <li><strong>Niveau 1 :</strong> Bleu – Jaune.</li>
          <li><strong>Niveau 2 :</strong> Bleu – Jaune – Rouge.</li>
          <li><strong>Niveau 3 :</strong> Rouge – Bleu – Jaune – Rouge.</li>
        </ul>
        <p className="mb-2"><strong>Échec :</strong> aucune pénalité. Lumi rechante la séquence depuis le début, calmement.</p>
        <p><strong>Version dés :</strong> pour les enfants qui préfèrent, remplace chaque niveau par un jet de FLAIR : DD 8, puis 11, puis 14.</p>
      </ActionBox>

      <h3 className="font-display text-2xl font-bold text-slate-700 mt-8 mb-4">SCÈNE 2 : LES ÉCHOS MOQUEURS (Combat)</h3>
      <ReadAloud title="Texte à lire à voix haute">
        "Au moment où le dernier cristal s'allume, un « Hihihi ! » moqueur résonne dans la grotte. Trois silhouettes sombres sortent des murs : des ombres en forme de renard, qui imitent chacun de tes gestes avec un temps de retard. « On est les Échos, » ricanent-elles en chœur. « On répète tout ! On vole tous les chants ! Tu ne rendras jamais la chanson à la forêt ! » Elles te foncent dessus, griffes en avant, en répétant tes cris."
      </ReadAloud>

      <CombatBox title="Mécaniques de Combat (Les Échos Moqueurs)" image="/art/monstres/echos-moqueurs.webp" imageAlt="Les Échos Moqueurs">
        <p className="mb-2">Rappel : D20 + talent pour toucher, D6 pour les dégâts. Quand un monstre attaque, le MJ lance un D20 : à 11 ou plus, il touche le renard.</p>
        <FirstRound>
        <p><strong>Le petit renard</strong> attaque un Écho moqueur (4 PV, CA 12). Il lance le D20 et fait <strong>10</strong>. Il ajoute son Courage (+3) : 10 + 3 = <strong>13</strong>. 13 atteint la CA 12 : <strong>touché !</strong> Il lance le D6 pour les dégâts : <strong>4</strong>. Un Écho moqueur avait 4 PV : il tombe à 0, il est <strong>K.O.</strong></p>
        <p>Au tour d'un Écho moqueur, le MJ lance un D20 : <strong>7</strong>. Il faut <strong>11</strong> ou plus pour toucher le petit renard : c'est moins : <strong>raté !</strong> Les griffes d'ombre traversent le vide. (Avec 11 ou plus, le petit renard aurait perdu 1D4 PV.)</p>
        </FirstRound>
        <h4 className="font-bold text-lg mb-2">Les Ennemis : 3 Échos Moqueurs</h4>
        <ul className="list-disc pl-5 space-y-1 mb-4">
          <li><strong>PV :</strong> 4 chacun. <strong>CA :</strong> 12.</li>
          <li><strong>Attaque (Griffes d'ombre) :</strong> touche à 11 ou plus (D20 du MJ), 1D4 de dégâts.</li>
          <li><strong>Règle comique : le renard n'attaque pas deux fois de la même façon.</strong> Si le héros fait deux fois le même geste de suite, l'Écho le copie et l'esquive.</li>
        </ul>
        <h4 className="font-bold text-lg mb-2">Tactique et Environnement (Le rôle du MJ) :</h4>
        <ul className="list-disc pl-5 space-y-3">
          <li><strong>Option A - Griffes et crocs :</strong> D20 + COURAGE (+3), 1D6.</li>
          <li><strong>Option B - Le silence (MALICE +3, DD 11) :</strong> le héros se tait, et les Échos, qui n'ont rien à copier, restent figés.</li>
          <li><strong>Option C - La Chanson (si apprise) :</strong> chanter fait fondre un Écho en note de musique. (Au départ, on peut simplement fredonner : +2.)</li>
          <li><strong>Option D - Lumi (une fois) :</strong> sa lumière chasse les ombres : une touche automatique.</li>
          <li><strong>Option E - Retourner leur imitation (MALICE +3) :</strong> faire un geste ridicule : l'Écho le copie... et se cogne dans son voisin.</li>
        </ul>
        <p className="italic mt-3">Un Écho vaincu se transforme en petite note de musique qui s'envole dans la grotte.</p>
      </CombatBox>

      <h3 className="font-display text-2xl font-bold text-slate-700 mt-8 mb-4">SCÈNE 3 : LA CHANSON DE GRISEFEUILLE</h3>
      <ReadAloud title="Texte à lire à voix haute (ou à chanter !)">
        "Quand les trois cristaux brillent ensemble, ils jouent la véritable Chanson de Grisefeuille, et tu la reconnais, le cœur serré : c'est l'air que fredonnait Mémé Rouquine ce matin-là. Cette fois, les paroles reviennent, portées par l'écho de toute la grotte :"<br/><br/>
        « Feuille d'or et feuille rousse,<br/>
        Le vent chante et la terre est douce.<br/>
        Qui se souvient n'est jamais seul,<br/>
        Sous le grand chêne et le tilleul. »
      </ReadAloud>

      <ActionBox title="Récompenses et Quête Annexe : Mi-Bémol">
        <p className="mb-2"><strong>Loot : le Gland de la Chanson (2 sur 3 !).</strong></p>
        <p className="mb-4"><strong>Loot : la Chanson de Grisefeuille.</strong> Une fois dans l'aventure, la chanter à voix haute redonne <strong>4 PV</strong> au héros ou à un ami blessé. Elle servira aussi devant Grisaille au chapitre 9 : retiens bien ce détail.</p>

        <h4 className="font-bold text-lg mb-2">Mi-Bémol, la chauve-souris qui a perdu la fin de sa berceuse (Roleplay, aucun jet)</h4>
        <p className="mb-2">Accrochée la tête en bas au plafond, une toute petite chauve-souris chantonne : « Dors, mon petit, la nuit est… la nuit est… oh, zut, encore raté ! »</p>
        <ul className="list-disc pl-5 space-y-2">
          <li>L'enfant <strong>invente la suite</strong> de la berceuse : n'importe quelle fin convient, surtout si elle rime ou fait sourire.</li>
          <li><strong>Récompense :</strong> Mi-Bémol connaît les galeries sous la colline voisine et montre une entrée secrète vers le terrier de Grisaille : <strong>+2</strong> aux jets d'infiltration du chapitre 8.</li>
        </ul>
      </ActionBox>

      <InfoBox title="Note pour le MJ : 2 Glands d'Or sur 3 !">
        <p>En sortant de la grotte, la Feuille d'Or brille plus fort et pointe vers le nord : une colline pelée, trouée comme un fromage, le <strong>Terrier de Grisaille</strong>. Lumi tremble : « C'est là-dedans qu'elle garde le dernier Gland. Sois prudent. Et souviens-toi : on ne sait pas encore pourquoi elle fait tout ça. »</p>
      </InfoBox>
    </section>
  );
}
