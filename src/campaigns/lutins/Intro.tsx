import React from 'react';
import { ReadAloud, InfoBox, ActionBox } from '../../components/StoryBlocks';
import CharacterSheet, { SheetTheme } from '../../components/CharacterSheet';
import ReadingLegend from '../../components/ReadingLegend';
import { BookOpen } from 'lucide-react';

const theme: SheetTheme = {
  bannerGradient: 'from-emerald-500 to-teal-700',
  statBox: 'border-emerald-100 bg-emerald-50/60',
  statValue: 'text-emerald-600',
  dot: 'bg-emerald-400',
  accentText: 'text-emerald-700',
  button: 'bg-emerald-600 hover:bg-emerald-700',
};

export default function Intro() {
  return (
    <section id="intro">
      <h2 className="font-display text-3xl font-bold text-slate-800 mb-6 flex items-center gap-3">
        <BookOpen className="w-8 h-8 text-emerald-600 shrink-0" />
        LIVRE D'AVENTURE : LE TRÉSOR DES LUTINS FARCEURS
      </h2>

      <ReadingLegend />

      <h3 className="font-display text-2xl font-bold text-slate-700 mt-8 mb-4">
        Prologue : La légende de Chantefarce
      </h3>
      <ReadAloud title="À lire à voix haute, pour ouvrir le livre :">
        Au sommet d'une colline couverte de trèfles se dresse le vieux <strong>château de Chantefarce</strong>. Plus aucun roi n'y habite depuis longtemps. À la place, il est rempli de <strong>lutins farceurs</strong> : de petits bonshommes hauts comme trois pommes, coiffés de bonnets à grelots, qui passent leurs journées à inventer des blagues.<br/><br/>
        Leur roi, <strong>Pirouette Iᵉʳ</strong>, possède un trésor fabuleux : un coffre rempli de <strong>pièces d'or en chocolat</strong>. Mais un trésor que personne ne cherche, c'est ennuyeux. Alors les lutins ont caché des pièces dans tout le château, posé des pièges rigolos dans chaque salle, et envoyé une invitation aux enfants les plus courageux du pays : vous !
      </ReadAloud>

      <ReadAloud title="À lire à voix haute pour commencer :">
        "Ce matin, chacun de vous a trouvé sous son oreiller une minuscule enveloppe verte, fermée par un grelot. Dedans, une carte écrite en lettres tordues : « Avis aux courageux ! Le trésor de Chantefarce attend ceux qui sauront rire, ruser et s'entraider. Venez nombreux. Venez ensemble. Signé : le roi Pirouette. P.-S. : Attention où vous mettez les pieds. Hi hi hi ! »<br/><br/>
        Vous voilà donc, tous réunis, devant la grande grille du château. Quelque part là-haut, derrière une fenêtre, un petit rire s'échappe… puis un autre… puis cent."
      </ReadAloud>

      <InfoBox title="L'aventure en deux mots (pour le MJ)">
        <p className="mb-2">Une aventure <strong>d'équipe pour 3 à 6 enfants</strong>, en 6 salles. Dans chaque salle, les héros déjouent une farce des lutins et gagnent des <strong>pièces en chocolat</strong>. Il n'y a pas de vrais méchants : les lutins veulent surtout jouer, et vérifier que les enfants savent <strong>s'entraider et partager</strong>.</p>
        <p className="mb-2">Le secret de la fin : le grand coffre ne s'ouvre que si l'équipe accepte de <strong>partager le trésor</strong> avec les lutins.</p>
        <p className="font-bold">Durée : 1h15 à 1h45, avec 6 batailles rigolotes. Difficulté : 1,5/5. Dès 5 ans. Idéal pour un anniversaire.</p>
      </InfoBox>

      <InfoBox title="Matériel conseillé">
        <ul className="list-disc pl-5 space-y-1">
          <li>Un dé à 20 faces (ou le <strong>lanceur de dés</strong> en bas de l'écran) et un dé à 6 faces.</li>
          <li>De <strong>vraies pièces en chocolat</strong> : comptez 3 ou 4 par enfant. Le MJ les distribue au fil de l'aventure, et tout le monde se les partage à la fin.</li>
          <li>Un bol ou une boîte pour le <strong>trésor de l'équipe</strong> : les pièces gagnées vont dedans, pas dans les poches.</li>
          <li>Une fiche de héros par enfant (à imprimer ci-dessous) et des crayons.</li>
        </ul>
      </InfoBox>

      <h3 className="font-display text-2xl font-bold text-slate-700 mt-10 mb-4">
        Les règles pour jouer à plusieurs
      </h3>
      <ActionBox title="Trois règles toutes simples">
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Chacun son tour.</strong> On fait le tour de la table. À son tour, un enfant dit ce que fait son héros et lance le <strong>D20</strong>. Il ajoute <strong>+3</strong> si l'action correspond à son talent. <strong>10 ou plus : c'est réussi.</strong></li>
          <li><strong>Le coup de main.</strong> Avant un jet, un autre enfant peut dire comment son héros aide. Le lanceur gagne alors <strong>+2</strong>. Encouragez-le à chaque fois : c'est le cœur de l'aventure.</li>
          <li><strong>Les Rires de l'équipe.</strong> L'équipe n'a pas de points de vie, mais une réserve de <strong>Rires</strong> : 2 par enfant. Quand une farce touche un héros, l'équipe perd 1 Rire. À 0, personne n'est blessé : tout le monde a juste besoin d'une pause chatouilles, et les lutins rendent 3 Rires en échange d'une grimace de groupe.</li>
        </ul>
      </ActionBox>

      <h3 className="font-display text-2xl font-bold text-slate-700 mt-10 mb-4">
        Choisir son héros
      </h3>
      <InfoBox title="Comment ça marche">
        <p>Chaque enfant choisit un rôle différent (à 6, tous les rôles sont pris ; à 3 ou 4, on choisit ses préférés). Chaque rôle a un <strong>talent</strong> (+3 aux jets qui lui correspondent) et un <strong>pouvoir</strong> utilisable <strong>une fois</strong> dans l'aventure.</p>
      </InfoBox>

      <CharacterSheet
        heroEmoji="🍀"
        heroTitle="Chasseur de Trésor"
        subtitle="Le Trésor des Lutins Farceurs — une fiche par enfant"
        theme={theme}
        hp={2}
        hpLabel="Mes Rires"
        hpUnit="Rires"
        abilitiesLabel="Mon rôle (j'en entoure un) et son pouvoir"
        compactPrint
        stats={[
          { label: 'Courage', emoji: '🛡️', value: '+__', note: 'oser, pousser, tenir bon' },
          { label: 'Agilité', emoji: '🤸', value: '+__', note: 'sauter, grimper, attraper' },
          { label: 'Malice', emoji: '🧠', value: '+__', note: 'deviner, ruser, bricoler' },
          { label: 'Cœur', emoji: '💛', value: '+__', note: 'rassurer, faire rire, convaincre' },
        ]}
        abilities={[
          { name: 'Chevalier (Courage)', desc: 'Bouclier : annule une farce qui touche un ami.' },
          { name: 'Acrobate (Agilité)', desc: 'Galipette : réussit automatiquement un saut ou une esquive.' },
          { name: 'Magicien (Malice)', desc: 'Abracadabra : relance le dé d\'un ami.' },
          { name: 'Barde (Cœur)', desc: 'Chanson rigolote : rend 2 Rires à l\'équipe.' },
          { name: 'Éclaireur (Agilité)', desc: 'Œil de lynx : repère un piège avant qu\'il ne se déclenche.' },
          { name: 'Ami des bêtes (Cœur)', desc: 'Appelle une souris du château qui montre le bon chemin.' },
        ]}
        startItems={[
          'J\'entoure mon rôle ci-dessus, et j\'écris +3 dans mon talent (+0 dans les autres).',
          'Mes 2 cœurs sont mes 2 Rires : je les mets dans la réserve de l\'équipe.',
          'Une lanterne, et un grand sac pour les pièces en chocolat.',
        ]}
      />
    </section>
  );
}
