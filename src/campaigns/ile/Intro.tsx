import React from 'react';
import { ReadAloud, InfoBox } from '../../components/StoryBlocks';
import CharacterSheet, { SheetTheme } from '../../components/CharacterSheet';
import ReadingLegend from '../../components/ReadingLegend';
import { BookOpen, Timer } from 'lucide-react';

const theme: SheetTheme = {
  bannerGradient: 'from-cyan-500 to-emerald-600',
  statBox: 'border-cyan-100 bg-cyan-50/60',
  statValue: 'text-cyan-700',
  dot: 'bg-rose-400',
  accentText: 'text-cyan-700',
  button: 'bg-cyan-600 hover:bg-cyan-700',
};

export default function Intro() {
  return (
    <section id="intro">
      <h2 className="font-display text-3xl font-bold text-slate-800 mb-6 flex items-center gap-3">
        <BookOpen className="w-8 h-8 text-cyan-600 shrink-0" />
        LIVRE D'AVENTURE : L'ÎLE QUI BOUGEAIT
      </h2>

      <ReadingLegend />

      <InfoBox title="L'aventure en deux mots (pour le MJ)">
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

      <h3 className="font-display text-2xl font-bold text-slate-700 mt-10 mb-4">Prologue : Le Mousse de l'Albatros Rigolo</h3>
      <ReadAloud title="Texte à lire à voix haute, pour ouvrir le livre">
        "Tu es le mousse de l'Albatros Rigolo, le navire le plus drôle des sept mers, dont la voile est rapiécée avec des chaussettes. Ton capitaine, c'est un perroquet vert, Capitaine Miette, qui s'est nommé chef parce qu'il parle plus fort que tout le monde. Ce matin, une tempête ridicule (des vagues qui font « splash », un éclair qui éternue) a fait tourner le navire sur lui-même, et toi, tu as atterri sur un tonneau, Miette accroché à ton épaule : « ON COULE ! JE SUIS LE CAPITAINE ! » Le tonneau file sur les vagues... vers une île."
      </ReadAloud>

      <InfoBox title="Les règles express (un seul coup d'œil)">
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>🎲 Le jet de dé :</strong> pour une action difficile, l'enfant lance le <strong>D20</strong> et ajoute son talent. S'il atteint ou dépasse le <strong>DD</strong>, c'est réussi. <em>Exemple : il veut sauter un tronc (DD 10). Il fait 8, +3 de Courage = 11 : réussi !</em></li>
          <li><strong>⚔️ Le combat :</strong> pour toucher un ennemi, D20 + talent contre sa <strong>CA</strong>. Si c'est touché, 1D6 de dégâts. Quand un ennemi attaque, le MJ lance un D20 : à <strong>11 ou plus</strong> (la CA du mousse), il touche.</li>
          <li><strong>❤️ Les PV :</strong> 12 au départ. À 0 PV, jamais de mort : le mousse s'endort dans un hamac, et se réveille avec 4 PV.</li>
          <li><strong>🍪 Les biscuits de mer :</strong> 2 biscuits, chacun rend 3 PV.</li>
        </ul>
      </InfoBox>

      <CharacterSheet
        heroEmoji="🏴‍☠️"
        heroTitle="Le Mousse Pirate"
        subtitle="L'Île qui Bougeait : fiche du héros (aventure express)"
        theme={theme}
        hp={12}
        compactPrint
        stats={[
          { label: 'Courage', emoji: '🔥', value: '+3', note: 'se battre, sauter, grimper' },
          { label: 'Malice', emoji: '🧠', value: '+4', note: 'ruser, observer, bricoler' },
          { label: 'Cœur', emoji: '💛', value: '+2', note: 'convaincre, rassurer, faire rire' },
        ]}
        abilities={[
          { name: 'Coup de Sabre', desc: "pour attaquer : D20 + Courage. Si c'est touché, 1D6 de dégâts." },
          { name: 'Coup de Chance', desc: "une fois par acte, tu relances un dé raté et tu gardes le meilleur." },
          { name: 'Grappin Express', desc: "une fois par acte, tu franchis un obstacle (tronc, ravin) sans jet." },
          { name: 'Conseil du Perroquet', desc: "une fois par acte, Capitaine Miette te donne un indice gratuit (en hurlant)." },
        ]}
        startItems={[
          "Un sabre de bois renforcé, un grappin et une longue-vue.",
          '2 biscuits de mer : +3 PV chacun.',
          'Capitaine Miette, un perroquet qui se prend pour le chef.',
          'Ta CA : 11 (les ennemis doivent faire 11 ou plus au D20 pour te toucher).',
        ]}
      />
    </section>
  );
}
