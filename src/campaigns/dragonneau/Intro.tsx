import React from 'react';
import { ReadAloud, InfoBox, ActionBox } from '../../components/StoryBlocks';
import CharacterSheet, { SheetTheme } from '../../components/CharacterSheet';
import { BookOpen } from 'lucide-react';

const knightTheme: SheetTheme = {
  bannerGradient: 'from-orange-500 to-rose-600',
  statBox: 'border-orange-100 bg-orange-50/60',
  statValue: 'text-orange-600',
  dot: 'bg-rose-400',
  accentText: 'text-orange-700',
  button: 'bg-orange-600 hover:bg-orange-700',
};

const mageTheme: SheetTheme = {
  bannerGradient: 'from-violet-500 to-indigo-700',
  statBox: 'border-violet-100 bg-violet-50/60',
  statValue: 'text-violet-600',
  dot: 'bg-violet-400',
  accentText: 'text-violet-700',
  button: 'bg-violet-600 hover:bg-violet-700',
};

export default function Intro() {
  return (
    <section id="intro">
      <h2 className="font-display text-3xl font-bold text-slate-800 mb-6 flex items-center gap-3">
        <BookOpen className="w-8 h-8 text-orange-500 shrink-0" />
        LIVRE D'AVENTURE : LE DRAGONNEAU PERDU
      </h2>

      <InfoBox title="Résumé de toute l'aventure (pour le MJ, avec les secrets)">
        <p className="mb-2">Une aventure d'<strong>initiation pour 2 joueurs</strong> (deux enfants, ou un enfant et un parent) qui n'ont jamais joué au jeu de rôle. En 4 chapitres, les deux héros retrouvent <strong>Braisillon</strong>, un bébé dragon qui s'est enfui la nuit de sa naissance, avant que la Grande Torche du village ne s'éteigne.</p>
        <p className="mb-2">Il n'y a <strong>pas de vrai méchant</strong> : Braisillon a juste peur de son propre feu. Chaque héros a son propre talent, et l'aventure est faite pour que <strong>les deux soient utiles à chaque chapitre</strong>.</p>
        <p className="font-bold">Durée : 1h30 à 2h, avec 7 combats gentils. Difficulté : 1/5. Dès 6 ans.</p>
      </InfoBox>

      <h3 className="font-display text-2xl font-bold text-slate-700 mt-10 mb-4">Les règles pour jouer à deux</h3>
      <ActionBox title="Trois règles toutes simples">
        <ul className="list-disc pl-5 space-y-3">
          <li><strong>Que fais-tu ?</strong> Le MJ décrit une scène, puis demande à chaque joueur : « Que fais-tu ? ». Chacun répond avec ses mots, comme au théâtre. Il n'y a pas de mauvaise idée.</li>
          <li><strong>Le jet de dé.</strong> Si l'action est difficile, le joueur lance le <strong>D20</strong> (le dé à 20 faces) et ajoute le bonus de son talent. Si le total atteint ou dépasse le <strong>DD</strong> (le nombre à battre), c'est réussi. <em>Exemple : Léo veut sauter un ruisseau (DD 10). Il lance le D20 : 7. Il ajoute son Courage (+3) : 10. 10 atteint le DD : réussi !</em> (Pas de vrais dés ? Le bouton 🎲 en bas de l'écran les contient tous.)</li>
          <li><strong>Le coup de main.</strong> Avant un jet, l'autre joueur peut dire comment il aide. Le lanceur gagne alors <strong>+2</strong>. C'est la règle la plus importante de l'aventure : elle récompense l'entraide.</li>
        </ul>
      </ActionBox>

      <InfoBox title="Points de vie, repos et soins">
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Les PV (points de vie)</strong> descendent quand un monstre touche un héros. À <strong>0 PV</strong>, on ne « meurt » jamais : on est trop fatigué, l'autre héros relève son ami, et il repart avec 3 PV.</li>
          <li><strong>Le D6</strong> (dé à 6 faces) sert à compter les dégâts, quand on touche un monstre en combat.</li>
          <li><strong>Se soigner :</strong> chaque héros a deux petits en-cas magiques (+3 PV chacun). Entre deux chapitres, un court repos rend aussi 2 PV.</li>
          <li><strong>Quand un monstre attaque :</strong> le MJ lance un D20. À <strong>10 ou plus</strong>, le monstre touche et le héros perd des PV (le dé de dégâts est écrit dans la fiche du monstre).</li>
          <li><strong>L'initiative :</strong> au début d'un combat, chaque joueur lance le D20. Le plus haut résultat commence, puis on joue dans l'ordre.</li>
        </ul>
      </InfoBox>

      <h3 className="font-display text-2xl font-bold text-slate-700 mt-10 mb-4">Choisir son héros</h3>
      <InfoBox title="Comment ça marche">
        <p>Chaque joueur prend un héros. Les deux sont complémentaires : le <strong>Chevalier</strong> est costaud et protège, l'<strong>Apprenti Magicien</strong> est malin et lance des étincelles. Si un seul enfant joue avec un parent, le parent prend l'autre rôle, et il aide l'enfant sans jamais prendre sa place.</p>
      </InfoBox>

      <CharacterSheet
        heroEmoji="🛡️"
        heroTitle="Le Chevalier"
        subtitle="Le Dragonneau Perdu : fiche du héros costaud"
        theme={knightTheme}
        hp={12}
        compactPrint
        stats={[
          { label: 'Courage', emoji: '🔥', value: '+3', note: 'foncer, pousser, se battre' },
          { label: 'Malice', emoji: '🧠', value: '+1', note: 'deviner, ruser' },
          { label: 'Cœur', emoji: '💛', value: '+2', note: 'rassurer, convaincre' },
        ]}
        abilities={[
          { name: "Coup d'épée", desc: "pour attaquer : 1D20 + Courage. Si c'est réussi, 1D6 de dégâts." },
          { name: 'Bouclier', desc: "une fois par chapitre, tu annules une attaque contre toi ou contre ton ami." },
        ]}
        startItems={[
          "Une épée d'entraînement et un bouclier en bois.",
          '2 pommes du verger : +3 PV chacune.',
        ]}
      />

      <CharacterSheet
        heroEmoji="🪄"
        heroTitle="L'Apprenti Magicien"
        subtitle="Le Dragonneau Perdu : fiche du héros malin"
        theme={mageTheme}
        hp={10}
        compactPrint
        stats={[
          { label: 'Courage', emoji: '🔥', value: '+1', note: 'foncer, pousser, se battre' },
          { label: 'Malice', emoji: '🧠', value: '+3', note: 'deviner, ruser, lancer des sorts' },
          { label: 'Cœur', emoji: '💛', value: '+2', note: 'rassurer, convaincre' },
        ]}
        abilities={[
          { name: 'Étincelle', desc: "pour attaquer : 1D20 + Malice. Si c'est réussi, 1D6 de dégâts." },
          { name: 'Lueur magique', desc: "une fois par chapitre, tu éclaires un lieu sombre ou tu donnes un avantage à un jet de ton ami (il lance deux D20 et garde le meilleur)." },
        ]}
        startItems={[
          'Une baguette de bois et un petit grimoire.',
          '2 biscuits à la cannelle : +3 PV chacun.',
        ]}
      />
    </section>
  );
}
