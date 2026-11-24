import React from 'react';
import { ReadAloud, InfoBox } from '../../components/StoryBlocks';
import CharacterSheet from '../../components/CharacterSheet';
import { renardSheet } from './sheet';
import { BookOpen } from 'lucide-react';

export default function Intro() {
  return (
    <section id="intro">
      <h2 className="font-display text-3xl font-bold text-slate-800 mb-6 flex items-center gap-3">
        <BookOpen className="w-8 h-8 text-orange-500" />
        LIVRE D'AVENTURE : LE RENARDEAU ET LA FORÊT QUI OUBLIE
      </h2>

      <InfoBox title="Résumé de toute l'aventure (pour le MJ, avec les secrets)">
        <p className="mb-2">Le petit renard est le seul à avoir gardé ses souvenirs. Sa mission : retrouver les <strong>3 Glands d'Or</strong> cachés dans la forêt et les rapporter au Grand Chêne-Mémoire <strong>avant la première neige</strong>, sinon l'oubli deviendra définitif.</p>
        <p className="mb-2">La coupable est <strong>Grisaille</strong>, une vieille taupe-sorcière très seule. Elle n'est pas vraiment méchante : elle a lancé la Brume d'Oubli parce que, à force d'être oubliée de tous, elle a préféré que plus personne ne se souvienne de rien. Le secret de l'aventure : <strong>on ne la vainc pas en se battant, mais en lui rendant une amie</strong>.</p>
        <p className="font-bold">Durée : 2h15 à 3h, avec 8 combats (plusieurs sessions possibles). Difficulté : 2/5. Dès 6 ans.</p>
      </InfoBox>

      <h3 className="font-display text-2xl font-bold text-slate-700 mt-10 mb-4 flex items-center gap-2">
        <span className="text-orange-500">🧭</span> Ton compagnon : Lumi la Luciole
      </h3>
      <InfoBox title="À savoir sur Lumi">
        <p>Pendant toute l'aventure, une petite luciole nommée <strong>Lumi</strong> vole aux côtés de l'enfant. Elle brille d'une lumière douce et dorée. Lumi connaît beaucoup de secrets, mais elle est toute petite : elle a besoin du courage du héros. Sa lumière <strong>fait peur aux créatures de la brume</strong> et se ravive chaque fois qu'on approche d'un Gland d'Or. Tu peux la présenter à l'enfant avec tes propres mots, ou directement pendant la première scène du chapitre 1.</p>
      </InfoBox>

      <CharacterSheet {...renardSheet} />

      <InfoBox title="La boîte à outils du jeu de rôle (version enfant)">
        <p className="mb-2">Voici toutes les mécaniques utilisées dans l'aventure. Tu n'as rien à apprendre par cœur : chaque encadré te rappelle quoi faire au bon moment. C'est un vrai petit Donjons & Dragons, juste plus doux.</p>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>🎲 Le jet de dé et le DD :</strong> pour une action difficile, l'enfant lance le <strong>D20</strong> et ajoute le talent qui convient. On compare à un <strong>nombre de réussite (le DD)</strong> : s'il l'atteint ou le dépasse, c'est gagné. (Pas de vrais dés ? Le bouton <strong>🎲</strong> en bas de l'écran les remplace.) <em>Exemple : le renard veut sauter une branche (DD 10). L'enfant lance le D20 : il fait 7. Il ajoute son Agilité (+4) : 11. 11 est plus grand que 10, c'est réussi !</em></li>
          <li><strong>✌️ Avantage et désavantage :</strong> quand la situation aide beaucoup le héros (un ami lui tient la patte, un bon objet), il lance <strong>deux D20 et garde le meilleur</strong> (avantage). Quand tout joue contre lui (le noir, la peur), il en lance deux et garde le <strong>moins bon</strong> (désavantage).</li>
          <li><strong>❤️ Les points de vie (PV) et le repos :</strong> ils descendent quand on est touché. On en regagne en se <strong>reposant</strong> un moment (un petit répit entre deux scènes rend quelques PV) ou en mangeant une noisette. À <strong>0 PV</strong>, on ne « meurt » jamais : on est juste trop fatigué, et un ami vient aider — l'histoire ne se bloque pas.</li>
          <li><strong>🎒 Le sac à dos et les objets :</strong> tout ce que le héros ramasse se note sur sa fiche. Ce ne sont pas des babioles : un objet trouvé tôt (une goutte de rosée, un champignon-lanterne…) sert souvent bien plus loin dans l'aventure. Encouragez l'enfant à fouiller et à ramasser !</li>
          <li><strong>🌀 Les états (ce qui change pour un tour) :</strong> parfois le héros est <em>collé</em>, <em>ébloui</em>, <em>ralenti</em> ou <em>endormi</em>. L'encadré explique à chaque fois comment s'en libérer — en général, un petit jet au tour suivant.</li>
          <li><strong>⚔️ L'initiative (en combat) :</strong> au début d'un combat, un jet de D20 décide qui agit en premier, le héros ou le monstre.</li>
          <li><strong>🛡️ Quand un monstre attaque :</strong> le MJ lance un D20. À <strong>11 ou plus</strong> (la « CA » du renard, sa difficulté à toucher), le monstre touche et le héros perd des PV (le dé de dégâts est indiqué dans la fiche du monstre).</li>
        </ul>
      </InfoBox>
    </section>
  );
}
