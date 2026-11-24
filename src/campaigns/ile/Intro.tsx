import React from 'react';
import { ReadAloud, InfoBox } from '../../components/StoryBlocks';
import CharacterSheet from '../../components/CharacterSheet';
import { mousseSheet } from './sheet';
import { BookOpen, Timer } from 'lucide-react';

export default function Intro() {
  return (
    <section id="intro">
      <h2 className="font-display text-3xl font-bold text-slate-800 mb-6 flex items-center gap-3">
        <BookOpen className="w-8 h-8 text-cyan-600 shrink-0" />
        LIVRE D'AVENTURE : L'ÎLE QUI BOUGEAIT
      </h2>

      <InfoBox title="Résumé de toute l'aventure (pour le MJ, avec les secrets)">
        <p className="mb-2">Une aventure <strong>express de 30 minutes</strong> pour <strong>un héros</strong> : un jeune pirate échoue sur une île qui ronfle, rencontre une capitaine rivale très susceptible, trouve un œuf géant dans une grotte... et découvre que <strong>l'île est une tortue géante</strong> qui cherche son œuf depuis cent ans.</p>
        <p className="mb-2"><strong>Spoiler pour le MJ :</strong> ne dis pas à l'enfant que l'île est vivante ! Il y a des indices dès le début (le sol qui tremble, les arbres qui ronflent, la « montagne » qui respire). La révélation est le grand moment de l'histoire.</p>
        <p className="font-bold">Durée : 30 à 40 minutes (20 minutes avec les raccourcis), en 3 actes d'environ 10 minutes. Difficulté : 2/5. Dès 6 ans. 2 petits combats.</p>
      </InfoBox>

      <InfoBox title="⏱️ Le chrono du MJ : tenir 30 minutes">
        <div className="flex items-start gap-3">
          <Timer className="w-6 h-6 text-amber-600 shrink-0 mt-1" />
          <div>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Acte 1 : 10 minutes.</strong> Si tu dépasses 12 minutes, saute l'option « grimper au cocotier » et passe directement au combat.</li>
              <li><strong>Acte 2 : 10 minutes.</strong> Une seule option suffit pour avancer. Si l'enfant veut aller vite, laisse-le tenter un seul obstacle (le tronc) et dis que les autres sont passés.</li>
              <li><strong>Acte 3 : 10 minutes.</strong> Le combat contre Barbe-Rose peut être remplacé par une négociation (voir l'acte) pour gagner 5 minutes.</li>
              <li><strong>Pas de temps pour tout ?</strong> Joue seulement les textes violets (« à lire à voix haute »), les encadrés verts marqués ⭐ et les deux combats. Tu auras une histoire complète en 20 minutes.</li>
            </ul>
          </div>
        </div>
      </InfoBox>

      <InfoBox title="Les règles express (un seul coup d'œil)">
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>🎲 Le jet de dé :</strong> pour une action difficile, l'enfant lance le <strong>D20</strong> et ajoute son talent. S'il atteint ou dépasse le <strong>DD</strong>, c'est réussi. <em>Exemple : il veut sauter un tronc (DD 10). Il fait 8, +3 de Courage = 11 : réussi !</em></li>
          <li><strong>⚔️ Le combat :</strong> pour toucher un ennemi, D20 + talent contre sa <strong>CA</strong>. Si c'est touché, 1D6 de dégâts. Quand un ennemi attaque, le MJ lance un D20 : à <strong>11 ou plus</strong> (la CA du mousse), il touche.</li>
          <li><strong>❤️ Les PV :</strong> 12 au départ. À 0 PV, jamais de mort : le mousse s'endort dans un hamac, et se réveille avec 4 PV.</li>
          <li><strong>🍪 Les biscuits de mer :</strong> 2 biscuits, chacun rend 3 PV.</li>
        </ul>
      </InfoBox>

      <CharacterSheet {...mousseSheet} />
    </section>
  );
}
