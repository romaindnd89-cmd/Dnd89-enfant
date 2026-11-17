import React from 'react';
import { ReadAloud, ActionBox, InfoBox } from '../../components/StoryBlocks';

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

      <h3 className="font-display text-2xl font-bold text-slate-700 mt-8 mb-4">SCÈNE 2 : LA CHANSON DE GRISEFEUILLE</h3>
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
