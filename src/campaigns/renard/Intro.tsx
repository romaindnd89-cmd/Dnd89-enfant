import React from 'react';
import { ReadAloud, InfoBox } from '../../components/StoryBlocks';
import CharacterSheet, { SheetTheme } from '../../components/CharacterSheet';
import { BookOpen } from 'lucide-react';

const theme: SheetTheme = {
  bannerGradient: 'from-orange-400 to-amber-600',
  statBox: 'border-orange-100 bg-orange-50/60',
  statValue: 'text-orange-600',
  dot: 'bg-orange-400',
  accentText: 'text-orange-600',
  button: 'bg-orange-600 hover:bg-orange-700',
};

export default function Intro() {
  return (
    <section id="intro" className="scroll-mt-44">
      <h2 className="font-display text-3xl font-bold text-slate-800 mb-6 flex items-center gap-3">
        <BookOpen className="w-8 h-8 text-orange-500" />
        LIVRE D'AVENTURE : LE RENARDEAU ET LA FORÊT QUI OUBLIE
      </h2>

      <h3 className="font-display text-2xl font-bold text-slate-700 mt-8 mb-4 flex items-center gap-2">
        <span className="text-orange-500">🍂</span> Prologue : La Légende du Grand Chêne-Mémoire
      </h3>
      <p className="mb-4 text-slate-700">
        Il était une fois une forêt si belle qu'on l'appelait <strong>Grisefeuille-la-Dorée</strong>. À l'automne, ses arbres se couvraient de feuilles rouges, oranges et jaunes, et le vent les faisait danser comme une pluie de pièces d'or. Mais le vrai trésor de la forêt n'était pas sa couleur : c'était sa <strong>mémoire</strong>.
      </p>
      <p className="mb-4 text-slate-700">
        Au cœur de Grisefeuille se dresse le <strong>Grand Chêne-Mémoire</strong>, le plus vieil arbre du monde. Dans ses racines profondes sont gardés les trois plus précieux souvenirs de la forêt, enfermés dans trois <strong>Glands d'Or</strong> : le Gland du <strong>Rire</strong>, le Gland de la <strong>Chanson</strong> et le Gland de l'<strong>Amitié</strong>. Tant qu'ils brillent, les animaux se souviennent de ceux qu'ils aiment, des chansons du soir et des rires d'été.
      </p>
      <p className="mb-4 text-slate-700">
        Mais une nuit, tout a changé. Une <strong>brume grise</strong> s'est levée du fond des terriers. Au matin, les couleurs avaient disparu, les oiseaux avaient oublié leurs chansons, et les trois Glands d'Or s'étaient envolés. La forêt commençait à oublier… et bientôt, elle oublierait tout, pour toujours.
      </p>

      <ReadAloud title="À lire à voix haute pour commencer :">
        "Cette nuit-là, tu t'es endormi tout au fond de ton terrier, un petit renardeau roulé en boule, serrant très fort contre ton cœur une feuille dorée que ta grand-mère t'avait offerte. Et c'est peut-être pour ça… que toi, tu n'as rien oublié.<br/><br/>
        Quand tu ouvres les yeux, la forêt n'est plus qu'un dessin au crayon gris. Les arbres, l'herbe, le ciel : tout a perdu ses couleurs. Autour de toi, les animaux marchent sans savoir où ils vont, le regard tout flou. Dans ta patte, ta feuille brille encore, chaude et dorée, comme un petit soleil. Une toute petite lumière s'approche en voletant… et une voix minuscule chuchote : « Enfin ! Quelqu'un qui se souvient ! »"
      </ReadAloud>

      <InfoBox title="L'aventure en deux mots (pour le MJ)">
        <p className="mb-2">Le petit renard est le seul à avoir gardé ses souvenirs. Sa mission : retrouver les <strong>3 Glands d'Or</strong> cachés dans la forêt et les rapporter au Grand Chêne-Mémoire <strong>avant la première neige</strong>, sinon l'oubli deviendra définitif.</p>
        <p className="mb-2">La coupable est <strong>Grisaille</strong>, une vieille taupe-sorcière très seule. Elle n'est pas vraiment méchante : elle a lancé la Brume d'Oubli parce que, à force d'être oubliée de tous, elle a préféré que plus personne ne se souvienne de rien. Le secret de l'aventure : <strong>on ne la vainc pas en se battant, mais en lui rendant une amie</strong>.</p>
        <p className="font-bold">Durée : 2h à 3h (plusieurs sessions possibles). Difficulté : 2/5. Dès 6 ans.</p>
      </InfoBox>

      <h3 className="font-display text-2xl font-bold text-slate-700 mt-10 mb-4 flex items-center gap-2">
        <span className="text-orange-500">🧭</span> Ton compagnon : Lumi la Luciole
      </h3>
      <p className="mb-4 text-slate-700">
        Pendant toute l'aventure, une petite luciole nommée <strong>Lumi</strong> vole à tes côtés. Elle brille d'une lumière douce et dorée. Lumi connaît beaucoup de secrets, mais elle est toute petite : elle a besoin de ton courage. Sa lumière <strong>fait peur aux créatures de la brume</strong> et se ravive chaque fois que tu approches d'un Gland d'Or.
      </p>

      <CharacterSheet
        heroEmoji="🦊"
        heroTitle="Le Renardeau"
        subtitle="Le seul à se souvenir — dès 6 ans"
        theme={theme}
        hp={10}
        stats={[
          { label: 'Courage', emoji: '🔥', value: '+3' },
          { label: 'Agilité', emoji: '🤸', value: '+4', note: 'pour bondir' },
          { label: 'Flair', emoji: '👃', value: '+5', note: 'ton super-pouvoir' },
          { label: 'Malice', emoji: '🦊', value: '+3' },
          { label: 'Cœur', emoji: '💛', value: '+5', note: 'pour les amis' },
        ]}
        abilities={[
          { name: 'Bond du Renard', desc: "tu sautes très loin ou très haut. Lance 1D20 + Agilité." },
          { name: 'Super-Flair', desc: "tu sens les choses cachées et tu devines les mensonges. Lance 1D20 + Flair." },
          { name: 'Petit Malin', desc: "une fois par aventure, tu peux relancer un dé raté." },
        ]}
        startItems={[
          'La Feuille d’Or : ta boussole magique. Elle brille plus fort quand un souvenir est tout près.',
          '3 Noisettes grillées : si tu en manges une, tu récupères 3 PV.',
          'Une écharpe rouge, tricotée par Mémé Rouquine.',
        ]}
      />

      <InfoBox title="Rappel des règles super simples">
        <ul className="list-disc pl-5 space-y-1">
          <li>Pour réussir une action difficile, l'enfant lance le <strong>D20</strong> et ajoute le talent qui va bien. <strong>10 ou plus = réussite.</strong></li>
          <li>Les <strong>PV</strong> (points de vie) descendent quand on est touché et remontent avec le repos ou une noisette. À 0 PV, on ne « meurt » pas : on est juste trop fatigué et un ami vient nous aider (on ne bloque jamais l'histoire).</li>
          <li>Utilise le bouton <strong>🎲 Lanceur de dés</strong> en bas à droite si vous n'avez pas de vrais dés !</li>
        </ul>
      </InfoBox>
    </section>
  );
}
