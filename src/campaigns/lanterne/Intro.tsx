import React from 'react';
import { InfoBox, ActionBox } from '../../components/StoryBlocks';
import CharacterSheet, { SheetTheme } from '../../components/CharacterSheet';
import InvestigationNotebook from '../../components/InvestigationNotebook';
import { BookOpen } from 'lucide-react';

const theme: SheetTheme = {
  bannerGradient: 'from-amber-500 to-indigo-700',
  statBox: 'border-amber-100 bg-amber-50/60',
  statValue: 'text-amber-700',
  dot: 'bg-rose-400',
  accentText: 'text-indigo-700',
  button: 'bg-indigo-600 hover:bg-indigo-700',
};

export default function Intro() {
  return (
    <section id="intro">
      <h2 className="font-display text-3xl font-bold text-slate-800 mb-6 flex items-center gap-3">
        <BookOpen className="w-8 h-8 text-amber-600 shrink-0" />
        LIVRE D'AVENTURE : LA DERNIÈRE LANTERNE
      </h2>

      <InfoBox title="⚠️ À lire avant de jouer : une histoire triste, racontée avec douceur">
        <p className="mb-2">C'est une aventure <strong>émouvante</strong>. Elle parle de la <strong>maladie et de la mort d'un être cher</strong> (le maître du héros), de la <strong>pauvreté</strong> et du <strong>préjugé</strong> (des gobelins qu'on a laissés dans le froid). Tout est raconté avec tendresse, sans scène violente, et l'histoire se termine par de la lumière. Mais elle peut toucher un enfant sensible.</p>
        <ul className="list-disc pl-5 space-y-1">
          <li><strong>Lis l'histoire en entier avant</strong>, surtout les chapitres 5 à 7.</li>
          <li><strong>Adapte le rythme à ton enfant</strong> : tu peux t'arrêter, faire une pause, ou changer un mot. C'est toi qui connais ton enfant.</li>
          <li><strong>Reste disponible à la fin.</strong> L'épilogue contient des questions pour en parler ensemble.</li>
        </ul>
      </InfoBox>

      <InfoBox title="Résumé de toute l'aventure (pour le MJ, avec les secrets)">
        <p className="mb-2">Dans la Vallée des Mille Lanternes, chaque habitant a sa lanterne, allumée à sa naissance. Depuis une semaine, elles s'éteignent une à une. Le héros, apprenti du vieux Gardien des Lanternes (Maître Bernardin, un blaireau), mène l'enquête. Les suspects : des gobelins voleurs d'huile, la nouvelle allumeuse de lanternes, un mystérieux ombre dans le marais.</p>
        <p className="mb-2"><strong>Les rebondissements :</strong> (1) les gobelins volent l'huile pour réchauffer leurs bébés malades, que personne n'a voulu aider ; (2) Pip, l'apprentie, a menti pour les protéger ; (3) la silhouette qui descend la nuit au Puits Oublié, c'est <strong>Maître Bernardin lui-même</strong> : malade et très fatigué, il nourrit seul la Flamme-Source avec sa propre lumière, sans rien dire à personne ; (4) un Dévoreur de Lumière est né de cette flamme affaiblie.</p>
        <p className="mb-2"><strong>La fin :</strong> le héros ne peut pas sauver son maître. Mais en demandant de l'aide à tout le village, gobelins compris, il rallume la Flamme-Source en <strong>partageant</strong> la lumière de chacun. Maître Bernardin s'éteint paisiblement, entouré de tous.</p>
        <p className="mb-2"><strong>La morale :</strong> ne juge pas avant de comprendre ; on n'a pas à porter seul ce qui est trop lourd ; la lumière partagée dure plus longtemps ; dire au revoir fait partie de l'amour.</p>
        <p className="font-bold">Durée : environ 2 heures (en deux séances possibles). Difficulté : moyenne (2,5/5), fondée sur les indices et la déduction. Dès 8 ans. 4 combats.</p>
      </InfoBox>

      <h3 className="font-display text-2xl font-bold text-slate-700 mt-10 mb-4">Comment se joue la difficulté : enquêter, chercher, déduire</h3>
      <InfoBox title="Trois façons de jouer dans cette histoire">
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>🔎 Les recherches (avec les dés).</strong> Fouiller, observer, interroger : l'enfant lance le D20 + son talent (<strong>Savoir</strong> pour les archives et les indices, <strong>Cœur</strong> pour convaincre, <strong>Discrétion</strong> pour se faufiler).</li>
          <li><strong>🧠 Les déductions (sans dé).</strong> Des encadrés violets « À toi de déduire » posent une question. L'enfant relit ses indices et propose une réponse. <strong>Aucun dé : c'est lui qui réfléchit.</strong> Chaque encadré contient un coup de pouce si l'enfant sèche, et la réponse, repliée pour le MJ.</li>
          <li><strong>⚔️ Les combats.</strong> Comme dans les autres histoires : D20 + talent contre la CA, D6 de dégâts. Un exemple du premier tour t'aide au début de chaque combat.</li>
        </ul>
        <p className="mt-2"><strong>Le carnet d'enquête</strong> (à imprimer, plus bas) sert à noter les indices. Il aide l'enfant à relier les informations entre elles. Tu peux aussi l'aider à les noter.</p>
      </InfoBox>

      <InfoBox title="Les règles (un seul coup d'œil)">
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>🎲 Le jet de dé :</strong> D20 + talent, à comparer au <strong>DD</strong>. <em>Exemple : il cherche un indice dans un registre (DD 12). Il fait 8, +4 de Savoir = 12 : réussi !</em> Les DD vont de 10 (facile) à 15 (très dur).</li>
          <li><strong>⚔️ Le combat :</strong> D20 + talent pour toucher la <strong>CA</strong> de l'ennemi, puis 1D6 de dégâts. Quand un ennemi attaque, le MJ lance un D20 et ajoute le bonus du monstre : si le total atteint <strong>12</strong> (la CA du héros), il touche.</li>
          <li><strong>❤️ Les PV :</strong> 14 au départ. À 0 PV, jamais de mort : le héros est épuisé, un ami l'aide à se relever, et il repart avec 5 PV.</li>
          <li><strong>🍵 Les tisanes tièdes :</strong> 2 tisanes, chacune rend 4 PV.</li>
        </ul>
      </InfoBox>

      <ActionBox title="La Lueur : la ressource du héros">
        <p className="mb-2">Le héros a <strong>3 points de Lueur</strong> (5 au maximum). Il peut en dépenser un pour <strong>gagner +3 sur un jet</strong> (après avoir vu le dé), ou pour <strong>faire briller sa lanterne</strong> : un ennemi perd son tour.</p>
        <p><strong>Comment en regagner :</strong> quand l'enfant fait quelque chose de gentil, de courageux ou de malin (aider quelqu'un, trouver un indice par le raisonnement, tenir parole), donne-lui un point de Lueur.</p>
      </ActionBox>

      <CharacterSheet
        heroEmoji="🏮"
        heroTitle="L'Apprenti Gardien"
        subtitle="La Dernière Lanterne : fiche du héros, difficulté moyenne"
        theme={theme}
        hp={14}
        stats={[
          { label: 'Courage', emoji: '🔥', value: '+3', note: 'se battre, résister, tenir bon' },
          { label: 'Savoir', emoji: '📚', value: '+4', note: 'chercher, lire, observer, deviner' },
          { label: 'Cœur', emoji: '💛', value: '+3', note: 'convaincre, rassurer, consoler' },
          { label: 'Discrétion', emoji: '🤫', value: '+2', note: 'se faufiler, écouter' },
        ]}
        abilities={[
          { name: 'Bâton-Lanterne', desc: "pour attaquer : D20 + Courage. Si c'est touché, 1D6 de dégâts." },
          { name: 'Éclat de Lanterne', desc: "une fois par chapitre, tu fais briller ta lanterne : un ennemi est ébloui et perd son tour (1 Lueur)." },
          { name: 'Coup de Savoir', desc: "une fois par chapitre, tu relances un jet de Savoir raté et tu gardes le meilleur." },
        ]}
        startItems={[
          "Une lanterne d'apprenti et un bâton (1D6 de dégâts).",
          '2 tisanes tièdes : +4 PV chacune.',
          "Le carnet d'enquête (à remplir pendant l'aventure).",
          '3 points de Lueur (5 au maximum). Ta CA : 12.',
        ]}
      />

      <InvestigationNotebook
        title="La Dernière Lanterne"
        clueCount={12}
        questions={[
          "Pourquoi les lanternes s'éteignent-elles dans cet ordre ?",
          'Qui vole l\'huile, et pourquoi ?',
          "Qui est la silhouette qui descend au Puits chaque nuit ?",
        ]}
      />
    </section>
  );
}
