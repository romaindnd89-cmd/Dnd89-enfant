import React from 'react';
import { ReadAloud, InfoBox, ActionBox } from '../../components/StoryBlocks';
import CharacterSheet, { SheetTheme } from '../../components/CharacterSheet';
import ReadingLegend from '../../components/ReadingLegend';
import { BookOpen } from 'lucide-react';

const theme: SheetTheme = {
  bannerGradient: 'from-yellow-500 to-fuchsia-600',
  statBox: 'border-fuchsia-100 bg-fuchsia-50/60',
  statValue: 'text-fuchsia-600',
  dot: 'bg-rose-400',
  accentText: 'text-fuchsia-700',
  button: 'bg-fuchsia-600 hover:bg-fuchsia-700',
};

export default function Intro() {
  return (
    <section id="intro">
      <h2 className="font-display text-3xl font-bold text-slate-800 mb-6 flex items-center gap-3">
        <BookOpen className="w-8 h-8 text-fuchsia-500 shrink-0" />
        LIVRE D'AVENTURE : LA COURONNE DU RIRE
      </h2>

      <ReadingLegend />

      <InfoBox title="L'aventure en deux mots (pour le MJ)">
        <p className="mb-2">Une enquête <strong>drôle et pleine de surprises</strong> pour <strong>un héros</strong>, un cran au-dessus des histoires d'initiation. La Couronne du roi a disparu la veille du Grand Banquet. Le héros, accompagné d'une oie bavarde et très gourmande, mène l'enquête à travers huit étapes : une forêt de brigands poètes, une rivière où les canards sont en grève, un marché où tout le monde ment, un château piégé, des cachots, une course contre la montre et un grand banquet...</p>
        <p className="mb-2"><strong>Attention, spoilers pour le MJ :</strong> le héros va être <strong>trahi</strong> par son propre coéquipier, puis découvrir que <strong>celui qui lui a confié l'enquête est le vrai coupable</strong>. Ne le dis pas à l'enfant : laisse-le deviner, il y a des indices partout. L'oie, elle, aura une chance de se racheter.</p>
        <p className="font-bold">Durée : 3h15 à 4h30 (trois séances conseillées : chapitres 1 à 3, 4 à 6, puis 7 et 8). Difficulté : 3/5. Dès 8 ans.</p>
      </InfoBox>

      <h3 className="font-display text-2xl font-bold text-slate-700 mt-10 mb-4">Les règles de cette aventure (difficulté 3)</h3>
      <InfoBox title="La boîte à outils du jeu de rôle">
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>🎲 Le jet de dé et le DD :</strong> pour une action difficile, l'enfant lance le <strong>D20</strong> et ajoute son talent. Si le total atteint ou dépasse le <strong>DD</strong>, c'est réussi. <em>Exemple : il veut crocheter une porte (DD 13). Il fait 9 au dé, +3 de Malice = 12. Raté de peu ! Il peut dépenser un point de Panache pour gagner +3 : 15, c'est réussi.</em> Les DD de cette histoire vont de 11 (facile) à 15 (très dur).</li>
          <li><strong>⚔️ Le combat :</strong> attaque = D20 + talent contre la <strong>CA</strong> du monstre (sa difficulté pour être touché). Si c'est touché, <strong>1D6 de dégâts</strong> (+1 avec l'épée). Les ennemis attaquent à leur tour : le MJ lance le D20 et ajoute le bonus d'attaque du monstre (écrit dans sa fiche, par exemple +3). Si le total atteint la <strong>CA du héros (13)</strong>, il perd des PV. Les combats ont souvent <strong>plusieurs ennemis</strong>, et un seul héros : il faut ruser.</li>
          <li><strong>💖 Les points de vie (PV) :</strong> 18 au départ. À 0 PV, on ne meurt jamais : le héros fait un « KO comique » (il tombe dans un tonneau, s'évanouit dans un buisson...), se réveille un peu plus tard avec 5 PV et perd un point de Panache.</li>
          <li><strong>🧪 Les potions de pomme :</strong> 3 potions, chacune rend 5 PV. Utiliser une potion prend un tour de combat.</li>
        </ul>
      </InfoBox>

      <ActionBox title="Le Panache : la ressource secrète du héros">
        <p className="mb-3">Le héros a <strong>3 points de Panache</strong> (5 au maximum). C'est sa « ruse de héros » : il peut en dépenser un pour :</p>
        <ul className="list-disc pl-5 space-y-2 mb-3">
          <li><strong>Gagner +3 sur un jet</strong>, après avoir vu le résultat du dé.</li>
          <li><strong>Esquiver une attaque</strong> qui vient de le toucher (elle fait quand même un peu de bruit, mais aucun dégât).</li>
          <li><strong>Lancer une Réplique Cinglante</strong> (voir la fiche).</li>
        </ul>
        <p><strong>Comment en regagner :</strong> chaque fois que l'enfant fait quelque chose de vraiment malin, de drôle, de gentil ou de courageux, <strong>donne-lui un point de Panache</strong>. C'est toi qui juges. L'idée est de récompenser l'imagination, pas seulement les bons jets.</p>
      </ActionBox>

      <CharacterSheet
        heroEmoji="🕵️"
        heroTitle="Le Détective-Aventurier"
        subtitle="La Couronne du Rire : fiche du héros, difficulté 3"
        theme={theme}
        hp={18}
        stats={[
          { label: 'Courage', emoji: '🔥', value: '+3', note: 'se battre, foncer, résister' },
          { label: 'Malice', emoji: '🧠', value: '+3', note: 'enquêter, crocheter, deviner les mensonges' },
          { label: 'Charme', emoji: '😎', value: '+3', note: 'baratiner, faire rire, convaincre' },
        ]}
        abilities={[
          { name: 'Réplique Cinglante', desc: "une fois par chapitre, tu lances une blague qui fait perdre son tour à un ennemi (1 Panache)." },
          { name: 'Coup de Génie', desc: "une fois par chapitre, tu relances un dé raté et tu gardes le meilleur résultat." },
          { name: 'Roulade Héroïque', desc: "tu évites une attaque d'un ennemi en te jetant par terre, avec beaucoup de style (1 Panache)." },
        ]}
        startItems={[
          "Une épée un peu rouillée (1D6 +1 de dégâts) et un manteau de détective (CA 13).",
          '3 potions de pomme : chacune rend 5 PV.',
          'Un sac à gadgets : une loupe, un grappin, une cuillère « très utile » et un sifflet qui fait un bruit de canard.',
          '3 points de Panache (5 au maximum) et 20 écus dans la bourse.',
        ]}
      />

      <InfoBox title="Conseils au MJ pour une histoire drôle et un peu plus difficile">
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Joue les voix !</strong> Tout le monde dans le royaume est excessif : les brigands rimaient, les gardes saluent tout le temps, l'oie parle comme une diva. Plus tu exagères, plus l'enfant rit.</li>
          <li><strong>Un défi, pas un mur.</strong> Les jets sont plus durs que dans les histoires d'initiation, mais l'enfant a toujours une porte de sortie : Panache, Coup de Génie, idée maligne. Ne bloque jamais l'histoire sur un échec.</li>
          <li><strong>Les indices sont partout.</strong> Au fil des chapitres, quatre indices pointent vers le vrai coupable. L'enfant ne les remarquera pas tous : c'est normal, et la révélation n'en sera que meilleure.</li>
          <li><strong>La trahison est dure à vivre.</strong> Joue-la avec humour, puis laisse le temps au héros de digérer. L'oie le regrettera sincèrement.</li>
        </ul>
      </InfoBox>
    </section>
  );
}
