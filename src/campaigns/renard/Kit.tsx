import React from 'react';
import KitImprimable from '../../components/KitImprimable';
import { SheetPaper } from '../../components/CharacterSheet';
import { D20Net, D6Net } from '../../components/PaperDice';
import { items } from './Galerie';
import { renardSheet } from './sheet';

const TITRE = 'Le Renardeau et la Forêt qui Oublie';

const chapitres: { label: string; combat?: string }[] = [
  { label: 'Prologue : La Légende du Grand Chêne' },
  { label: "Prologue : le début de l'histoire" },
  { label: 'Chapitre 1 : Le Réveil Gris' },
  { label: 'Chapitre 2 : Les Corbeaux de Suie', combat: 'combat' },
  { label: 'Chapitre 3 : Le Ruisseau Bavard', combat: 'combat' },
  { label: 'Chapitre 4 : Le Village des Écureuils' },
  { label: 'Chapitre 5 : La Ronceraie', combat: 'combat' },
  { label: "Chapitre 6 : L'Araignée de Brume", combat: 'combat' },
  { label: 'Chapitre 7 : La Grotte aux Échos', combat: 'combat' },
  { label: 'Chapitre 8 : Le Terrier de Grisaille', combat: 'combat si le héros est repéré' },
  { label: 'Chapitre 9 : Grisaille la Taupe-Sorcière', combat: 'combat facultatif' },
  { label: 'Chapitre 10 : Le Réveil du Grand Chêne', combat: 'combat' },
  { label: 'Épilogue & Médailles' },
];

type Monstre = { chap: number; nom: string; nb: string; emoji: string; pv: string; ca: number; attaque: string; special: string };

/** Stats reprises des encadrés « Les Ennemis » de chaque chapitre. */
const monstres: Monstre[] = [
  { chap: 2, nom: 'Corbeaux de Suie', nb: '×3', emoji: '🐦', pv: '5 (Cendrar : 6)', ca: 11, attaque: 'Coup de bec : 1D4', special: "Un corbeau à 2 PV ou moins s'enfuit en piaillant." },
  { chap: 3, nom: 'Grenouilles Éclaboussantes', nb: '×3', emoji: '🐸', pv: '4', ca: 10, attaque: "Jet d'eau : 1D4", special: "Héros trempé : −1 au prochain jet d'Agilité." },
  { chap: 5, nom: 'Ronces Griffeuses', nb: '×3', emoji: '🌿', pv: '5', ca: 11, attaque: "Coup d'épine : 1D4", special: "Point faible : l'eau. Une ronce mouillée perd son tour." },
  { chap: 6, nom: "Filandre, l'Araignée de Brume", nb: '×1', emoji: '🕷️', pv: '14', ca: 13, attaque: 'Fil collant : 1D6', special: "Héros collé : Agilité DD 10 pour se libérer. À 4 PV ou moins, elle supplie qu'on la laisse partir. Craint la lumière vive et la chaleur." },
  { chap: 7, nom: 'Échos Moqueurs', nb: '×3', emoji: '👻', pv: '4', ca: 12, attaque: "Griffes d'ombre : 1D4", special: "Si le héros répète le même geste, l'Écho le copie et l'esquive." },
  { chap: 8, nom: 'Mottes Grises', nb: '×2', emoji: '🟤', pv: '6', ca: 10, attaque: 'Coup de boue : 1D4', special: 'Lentes et maladroites. Combat seulement si le héros est repéré.' },
  { chap: 9, nom: "Racines d'Ombre", nb: '', emoji: '🌱', pv: '18 au total', ca: 12, attaque: 'Fouet de racine : 1D6', special: 'Elles veulent repousser, pas blesser. Combat facultatif : on peut choisir de se battre.' },
  { chap: 10, nom: 'Ombres de Neige', nb: '×3', emoji: '❄️', pv: '6', ca: 11, attaque: 'Souffle glacé : 1D4', special: 'Héros touché : −1 au prochain jet. Point faible : la lumière et la chaleur.' },
];

const Titre = ({ children }: { children: React.ReactNode }) => (
  <h3 className="font-display text-lg font-bold text-orange-700 border-b-2 border-orange-200 pb-1 mb-2">{children}</h3>
);

const Bandeau = ({ emoji, titre, sous }: { emoji: string; titre: string; sous?: string }) => (
  <div className="rounded-2xl bg-gradient-to-r from-orange-400 to-amber-600 text-white px-5 py-3 mb-4 flex items-center gap-4">
    <span className="text-4xl" aria-hidden="true">{emoji}</span>
    <div>
      <p className="font-display text-2xl font-bold leading-tight">{titre}</p>
      {sous && <p className="text-white/85 text-sm">{sous}</p>}
    </div>
  </div>
);

function Image({ it, className }: { it: (typeof items)[number]; className: string }) {
  return it.image ? (
    <img src={it.image} alt={it.name} className={className} />
  ) : (
    <span className="text-6xl" aria-hidden="true">{it.emoji}</span>
  );
}

function Pages() {
  const personnages = items.filter((i) => i.kind === 'personnage');
  const lieux = items.filter((i) => i.kind === 'lieu');
  const objets = items.filter((i) => i.kind === 'objet');

  return (
    <>
      {/* 1. Livret du MJ */}
      <section className="kit-page text-slate-800 text-[13px] leading-snug">
        <Bandeau emoji="🦊" titre={TITRE} sous="Livret du MJ · 2h15 à 3h (plusieurs séances possibles) · Difficulté 2/5 · Dès 6 ans" />

        <Titre>L'histoire en deux mots (avec les secrets : ne les montre pas à l'enfant)</Titre>
        <p className="mb-1.5">
          Le petit renard est le seul à avoir gardé ses souvenirs. Sa mission : retrouver les <strong>3 Glands d'Or</strong> cachés dans la forêt et les rapporter au Grand Chêne-Mémoire <strong>avant la première neige</strong>, sinon l'oubli deviendra définitif.
        </p>
        <p className="mb-3">
          La coupable est <strong>Grisaille</strong>, une vieille taupe-sorcière très seule : elle a lancé la Brume d'Oubli parce que plus personne ne se souvenait d'elle. Le secret : <strong>on ne la vainc pas en se battant, mais en lui rendant une amie.</strong>
        </p>

        <div className="grid grid-cols-2 gap-5 mb-3">
          <div>
            <Titre>🎒 Le matériel</Titre>
            <ul className="space-y-1">
              {[
                'Ce kit imprimé (fiche, cartes, écran du MJ)',
                'Des ciseaux pour découper les cartes',
                'Un dé à 20 faces (D20) et un dé à 6 faces (D6)',
                'Pas de dés ? Le patron en papier (dernière page) ou le bouton 🎲 de l’application',
                'Des crayons de couleur pour le portrait du héros',
              ].map((m) => (
                <li key={m} className="flex gap-2"><span aria-hidden="true">☐</span>{m}</li>
              ))}
            </ul>
          </div>
          <div>
            <Titre>🧭 Comment jouer</Titre>
            <ol className="list-decimal pl-5 space-y-1">
              <li>Découpe les cartes et pose-les près de toi.</li>
              <li>Donne la fiche à l'enfant : il écrit son nom et dessine son portrait.</li>
              <li>Lis le prologue, puis avance chapitre par chapitre.</li>
              <li>Lis à voix haute les textes prévus pour ça ; les règles sont pour toi.</li>
              <li>Montre les images (page 3) quand le héros arrive ou rencontre.</li>
              <li>Une pause entre deux chapitres convient très bien.</li>
            </ol>
          </div>
        </div>

        <Titre>🧭 Ton compagnon : Lumi la Luciole</Titre>
        <p className="mb-3">
          Une petite luciole dorée vole aux côtés de l'enfant. Sa lumière <strong>fait peur aux créatures de la brume</strong> et se ravive chaque fois qu'on approche d'un Gland d'Or. Elle est toute petite : elle a besoin du courage du héros.
        </p>

        <Titre>📖 Les chapitres (coche au fil de la partie)</Titre>
        <ul className="grid grid-cols-2 gap-x-5 gap-y-1">
          {chapitres.map((c) => (
            <li key={c.label} className="flex gap-2">
              <span aria-hidden="true">☐</span>
              <span>
                {c.label}
                {c.combat && <span className="text-rose-600 font-semibold"> ⚔️ {c.combat}</span>}
              </span>
            </li>
          ))}
        </ul>
      </section>

      {/* 2. Fiche de personnage */}
      <section className="kit-page">
        <SheetPaper {...renardSheet} />
      </section>

      {/* 3. Images à montrer */}
      <section className="kit-page text-slate-800">
        <Bandeau emoji="🖼️" titre="À montrer à l'enfant" sous="Montre l'image quand il arrive à l'endroit ou rencontre le personnage. Garde les secrets pour toi." />
        <Titre>Les personnages</Titre>
        <div className="grid grid-cols-4 gap-3 mb-5">
          {personnages.map((p) => (
            <div key={p.name} className="text-center">
              <div className="h-36 flex items-center justify-center rounded-xl border-2 border-slate-200 bg-white overflow-hidden">
                <Image it={p} className="max-h-full max-w-full object-contain p-1" />
              </div>
              <p className="font-display font-bold text-[13px] mt-1 leading-tight">{p.name}</p>
            </div>
          ))}
        </div>
        <Titre>Les lieux</Titre>
        <div className="space-y-2">
          {lieux.map((l) => (
            <div key={l.name}>
              <div className="h-[48mm] rounded-xl border-2 border-slate-200 overflow-hidden bg-slate-100">
                <Image it={l} className="w-full h-full object-cover" />
              </div>
              <p className="font-display font-bold text-sm mt-1">{l.emoji} {l.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Cartes d'objets */}
      <section className="kit-page text-slate-800">
        <Bandeau emoji="🍂" titre="Les objets à découper" sous="Découpe le long des pointillés. Pose chaque carte sur la table quand l'enfant trouve l'objet." />
        <div className="grid grid-cols-2 gap-4">
          {objets.map((o) => (
            <article key={o.name} className="kit-cut rounded-xl p-3 flex flex-col h-[112mm]">
              <div className="h-[46mm] flex items-center justify-center bg-white rounded-lg">
                <Image it={o} className="max-h-full max-w-full object-contain" />
              </div>
              <h4 className="font-display font-bold text-base mt-2">{o.emoji} {o.name}</h4>
              <p className="text-[12.5px] leading-snug mt-1">{o.description}</p>
              {o.effect && (
                <p className="mt-auto text-[12px] rounded-lg bg-amber-50 border border-amber-200 text-amber-900 px-2 py-1.5">
                  <strong>Dans le jeu :</strong> {o.effect}
                </p>
              )}
            </article>
          ))}
        </div>
      </section>

      {/* 5. Cartes de monstres */}
      <section className="kit-page text-slate-800">
        <Bandeau emoji="⚔️" titre="Les cartes des monstres (pour le MJ)" sous="Une carte par combat. Garde-les derrière ton écran : tout y est pour jouer sans chercher dans le livre." />
        <div className="grid grid-cols-2 gap-3">
          {monstres.map((m) => (
            <article key={m.nom} className="kit-cut rounded-xl p-2.5 h-[56mm] flex flex-col text-[11.5px] leading-tight">
              <div className="flex items-center gap-2">
                <span className="text-3xl" aria-hidden="true">{m.emoji}</span>
                <div>
                  <p className="font-display font-bold text-[14px] leading-tight">{m.nom} {m.nb}</p>
                  <p className="text-slate-500 text-[10.5px]">Chapitre {m.chap}</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-1.5 mt-1.5 text-center">
                <div className="rounded-lg bg-rose-50 border border-rose-200 py-1"><span className="font-bold text-rose-700">❤️ PV</span> {m.pv}</div>
                <div className="rounded-lg bg-sky-50 border border-sky-200 py-1"><span className="font-bold text-sky-700">🛡️ CA</span> {m.ca}</div>
              </div>
              <p className="mt-1.5"><strong>Attaque :</strong> {m.attaque}. Touche à 11 ou plus (D20 du MJ).</p>
              <p className="mt-1 text-slate-700">{m.special}</p>
            </article>
          ))}
        </div>
      </section>

      {/* 6. Écran du MJ */}
      <section className="kit-page text-slate-800 text-[13px] leading-snug">
        <Bandeau emoji="🛡️" titre="L'écran du MJ" sous="Tout ce qu'il faut savoir en jouant. Plie la page en deux et pose-la devant toi." />
        <div className="grid grid-cols-2 gap-4">
          <div className="rounded-xl border-2 border-indigo-200 bg-indigo-50/50 p-3">
            <Titre>🎲 Le jet de dé</Titre>
            <p>L'enfant lance le <strong>D20</strong> et ajoute le talent qui convient. Si le total <strong>atteint ou dépasse le DD</strong>, c'est réussi.</p>
            <p className="mt-1.5"><strong>Repères de DD :</strong> 8 facile · 9 à 10 normal · 11 à 13 difficile.</p>
            <p className="mt-1.5 italic">Exemple : sauter une branche (DD 10). D20 : 7, plus Agilité (+4) = 11. C'est réussi !</p>
          </div>
          <div className="rounded-xl border-2 border-emerald-200 bg-emerald-50/50 p-3">
            <Titre>✌️ Avantage et désavantage</Titre>
            <p><strong>Avantage</strong> (un ami aide, un bon objet) : on lance deux D20 et on garde le <strong>meilleur</strong>.</p>
            <p className="mt-1.5"><strong>Désavantage</strong> (le noir, la peur) : on en lance deux et on garde le <strong>moins bon</strong>.</p>
            <p className="mt-1.5"><strong>Petit Malin :</strong> une fois par aventure, l'enfant relance un dé raté.</p>
          </div>
          <div className="rounded-xl border-2 border-rose-200 bg-rose-50/50 p-3">
            <Titre>⚔️ Le combat</Titre>
            <ol className="list-decimal pl-5 space-y-1">
              <li><strong>Initiative :</strong> D20, à 10 ou plus le héros agit en premier.</li>
              <li><strong>Le héros attaque :</strong> D20 + Courage (+3) contre la CA du monstre ; dégâts avec un <strong>D6</strong>.</li>
              <li><strong>Le monstre attaque :</strong> le MJ lance un D20 ; à <strong>11 ou plus</strong> (la CA du renard), il touche.</li>
              <li><strong>Lumi</strong> peut gêner l'ennemi une fois par combat.</li>
            </ol>
          </div>
          <div className="rounded-xl border-2 border-amber-200 bg-amber-50/60 p-3">
            <Titre>❤️ PV et repos</Titre>
            <p>Le renard a <strong>10 PV</strong>. Une noisette grillée rend <strong>3 PV</strong>. Un petit répit entre deux scènes en rend quelques-uns.</p>
            <p className="mt-1.5"><strong>À 0 PV, jamais de panique :</strong> le héros n'est pas éliminé, il est juste trop fatigué. Un ami vient l'aider et l'histoire continue.</p>
          </div>
          <div className="col-span-2 rounded-xl border-2 border-violet-200 bg-violet-50/50 p-3">
            <Titre>🌀 Les états (ils durent un tour)</Titre>
            <p>Parfois le héros est <em>collé</em>, <em>ébloui</em>, <em>ralenti</em> ou <em>endormi</em>. L'encadré du chapitre dit comment s'en libérer : en général un petit jet au tour suivant.</p>
          </div>
          <div className="col-span-2 rounded-xl border-2 border-orange-200 bg-orange-50/60 p-3">
            <Titre>🦊 Les talents du Renardeau</Titre>
            <p className="flex flex-wrap gap-x-5 gap-y-1">
              {renardSheet.stats.map((s) => (
                <span key={s.label}>{s.emoji} <strong>{s.label}</strong> {s.value}</span>
              ))}
            </p>
            <p className="mt-1.5"><strong>Piquillon</strong> (rencontré au chapitre 5) : une fois par combat, il se met en boule et l'ennemi qui l'attaque perd 2 PV.</p>
          </div>
        </div>
      </section>

      {/* 7. Dés en papier */}
      <section className="kit-page text-slate-800 text-[13px]">
        <Bandeau emoji="🎲" titre="Tes dés en papier" sous="Découpe le long des traits pleins, plie le long des pointillés, puis colle ou scotche les bords." />
        <div className="flex flex-col items-center gap-5">
          <div>
            <p className="font-display font-bold text-center mb-1">Le dé à 20 faces (D20) : pour réussir ses actions</p>
            <D20Net />
          </div>
          <div>
            <p className="font-display font-bold text-center mb-1">Le dé à 6 faces (D6) : pour les dégâts</p>
            <D6Net />
          </div>
          <p className="text-slate-500 text-center">Astuce : colle le patron sur du carton fin pour un dé plus solide.</p>
        </div>
      </section>
    </>
  );
}

export default function Kit() {
  return (
    <KitImprimable
      title="Le Renardeau"
      intro="Tout ce qu'il faut pour jouer en famille, à imprimer avant la séance : livret du MJ, fiche de personnage, images à montrer, cartes d'objets et de monstres, écran du MJ et dés en papier."
      contents={[
        ['📖', 'Livret du MJ : résumé, matériel, chapitres'],
        ['🦊', 'Fiche de personnage du Renardeau'],
        ['🖼️', 'Images des personnages et des lieux'],
        ['🍂', "Cartes d'objets à découper"],
        ['⚔️', 'Cartes des 8 monstres (pour le MJ)'],
        ['🛡️', "L'écran du MJ : les règles en un coup d'œil"],
        ['🎲', 'Patrons de dés en papier (D20 et D6)'],
      ]}
      buttonClass="bg-orange-600 hover:bg-orange-700"
      accentClass="text-orange-500"
      pages={<Pages />}
    />
  );
}
