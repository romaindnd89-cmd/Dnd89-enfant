import React from 'react';
import KitImprimable from './KitImprimable';
import { SheetPaper, CharacterSheetProps } from './CharacterSheet';
import { D20Net, D6Net } from './PaperDice';

/**
 * Kit imprimable générique : chaque aventure fournit une config (textes, fiches, monstres, écran du MJ),
 * les pages A4 sont toutes construites ici. Toutes les classes Tailwind sont LITTÉRALES.
 */

export interface KitTheme {
  /** ex. 'from-orange-400 to-amber-600' */
  bandeau: string;
  /** ex. 'text-orange-700 border-orange-200' */
  titre: string;
  /** ex. 'bg-orange-600 hover:bg-orange-700' */
  button: string;
  /** ex. 'text-orange-500' */
  accent: string;
}

export interface KitItem {
  kind: 'lieu' | 'personnage' | 'objet';
  name: string;
  emoji: string;
  description: string;
  effect?: string;
  image?: string;
}

export interface KitMonstre {
  chap: string;
  nom: string;
  nb?: string;
  emoji: string;
  image?: string;
  /** Pastilles de stats : ex. ['❤️ PV 6', '🛡️ CA 11'] */
  chips: string[];
  /** Lignes de texte (attaque, particularités...) : le HTML léger est permis via ReactNode */
  lignes: React.ReactNode[];
}

export interface KitConfig {
  /** Nom court affiché sur le bouton et dans la section */
  titreCourt: string;
  emoji: string;
  titre: string;
  /** Ligne sous le titre du livret : durée, difficulté, âge */
  sous: string;
  theme: KitTheme;
  intro: string;
  resume: React.ReactNode;
  materiel: string[];
  jouer: string[];
  compagnon?: { titre: string; texte: React.ReactNode };
  chapitres: { label: string; combat?: string }[];
  fiches: CharacterSheetProps[];
  /** Phrase sous « Fiche » dans le sommaire, ex. « une par enfant » */
  fichesNote?: string;
  items: KitItem[];
  monstres: KitMonstre[];
  ecranTitre?: string;
  ecranSous?: string;
  ecran: React.ReactNode;
}

export const Titre = ({ theme, children }: { theme: KitTheme; children: React.ReactNode }) => (
  <h3 className={`font-display text-lg font-bold border-b-2 pb-1 mb-2 ${theme.titre}`}>{children}</h3>
);

export const Bandeau = ({ theme, emoji, titre, sous }: { theme: KitTheme; emoji: string; titre: string; sous?: string }) => (
  <div className={`rounded-2xl bg-gradient-to-r text-white px-5 py-3 mb-4 flex items-center gap-4 ${theme.bandeau}`}>
    <span className="text-4xl" aria-hidden="true">{emoji}</span>
    <div>
      <p className="font-display text-2xl font-bold leading-tight">{titre}</p>
      {sous && <p className="text-white/85 text-sm">{sous}</p>}
    </div>
  </div>
);

const TONES = {
  indigo: 'border-indigo-200 bg-indigo-50/50',
  emerald: 'border-emerald-200 bg-emerald-50/50',
  rose: 'border-rose-200 bg-rose-50/50',
  amber: 'border-amber-200 bg-amber-50/60',
  violet: 'border-violet-200 bg-violet-50/50',
  orange: 'border-orange-200 bg-orange-50/60',
  sky: 'border-sky-200 bg-sky-50/50',
  fuchsia: 'border-fuchsia-200 bg-fuchsia-50/50',
  cyan: 'border-cyan-200 bg-cyan-50/50',
} as const;

/** Encadré de l'écran du MJ ; `large` le fait courir sur les deux colonnes. */
export function RuleCard({
  theme,
  tone,
  titre,
  large,
  children,
}: {
  theme: KitTheme;
  tone: keyof typeof TONES;
  titre: string;
  large?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className={`rounded-xl border-2 p-3 ${TONES[tone]} ${large ? 'col-span-2' : ''}`}>
      <Titre theme={theme}>{titre}</Titre>
      {children}
    </div>
  );
}

function chunk<T>(a: T[], n: number): T[][] {
  const out: T[][] = [];
  for (let i = 0; i < a.length; i += n) out.push(a.slice(i, i + n));
  return out;
}

function Illustration({ it, className }: { it: KitItem; className: string }) {
  return it.image ? (
    <img src={it.image} alt={it.name} className={className} />
  ) : (
    <span className="text-6xl" aria-hidden="true">{it.emoji}</span>
  );
}

export default function KitAventure({ config: c }: { config: KitConfig }) {
  const personnages = c.items.filter((i) => i.kind === 'personnage');
  const lieux = c.items.filter((i) => i.kind === 'lieu');
  const objets = c.items.filter((i) => i.kind === 'objet');
  const lieuH = lieux.length <= 1 ? 90 : lieux.length === 2 ? 70 : lieux.length === 3 ? 52 : 40;
  const lieuCols = lieux.length >= 4;
  const objetsParPage = objets.length === 5 || objets.length === 6 ? 6 : 4;
  const objetsPetits = objetsParPage === 6;
  const persH = personnages.length > 8 ? 'h-24' : 'h-32';

  const pages = (
    <>
      {/* Livret du MJ */}
      <section className="kit-page text-slate-800 text-[13px] leading-snug">
        <Bandeau theme={c.theme} emoji={c.emoji} titre={c.titre} sous={c.sous} />
        <Titre theme={c.theme}>L'histoire en deux mots (avec les secrets : ne les montre pas aux enfants)</Titre>
        <div className="mb-3 space-y-1.5">{c.resume}</div>

        <div className="grid grid-cols-2 gap-5 mb-3">
          <div>
            <Titre theme={c.theme}>🎒 Le matériel</Titre>
            <ul className="space-y-1">
              {c.materiel.map((m) => (
                <li key={m} className="flex gap-2"><span aria-hidden="true">☐</span>{m}</li>
              ))}
            </ul>
          </div>
          <div>
            <Titre theme={c.theme}>🧭 Comment jouer</Titre>
            <ol className="list-decimal pl-5 space-y-1">
              {c.jouer.map((m) => <li key={m}>{m}</li>)}
            </ol>
          </div>
        </div>

        {c.compagnon && (
          <>
            <Titre theme={c.theme}>{c.compagnon.titre}</Titre>
            <p className="mb-3">{c.compagnon.texte}</p>
          </>
        )}

        <Titre theme={c.theme}>📖 Les étapes (coche au fil de la partie)</Titre>
        <ul className="grid grid-cols-2 gap-x-5 gap-y-1">
          {c.chapitres.map((ch) => (
            <li key={ch.label} className="flex gap-2">
              <span aria-hidden="true">☐</span>
              <span>
                {ch.label}
                {ch.combat && <span className="text-rose-600 font-semibold"> ⚔️ {ch.combat}</span>}
              </span>
            </li>
          ))}
        </ul>
      </section>

      {/* Fiches de personnage */}
      {c.fiches.map((f) => (
        <section key={f.heroTitle} className="kit-page">
          <SheetPaper {...f} />
        </section>
      ))}

      {/* Images à montrer */}
      {(personnages.length > 0 || lieux.length > 0) && (
        <section className="kit-page text-slate-800">
          <Bandeau theme={c.theme} emoji="🖼️" titre="À montrer aux enfants" sous="Montre l'image quand ils arrivent à l'endroit ou rencontrent le personnage. Garde les secrets pour toi." />
          {personnages.length > 0 && (
            <>
              <Titre theme={c.theme}>Les personnages</Titre>
              <div className="grid grid-cols-4 gap-3 mb-4">
                {personnages.map((p) => (
                  <div key={p.name} className="text-center">
                    <div className={`${persH} flex items-center justify-center rounded-xl border-2 border-slate-200 bg-white overflow-hidden`}>
                      <Illustration it={p} className="max-h-full max-w-full object-contain p-1" />
                    </div>
                    <p className="font-display font-bold text-[13px] mt-1 leading-tight">{p.name}</p>
                  </div>
                ))}
              </div>
            </>
          )}
          {lieux.length > 0 && (
            <>
              <Titre theme={c.theme}>Les lieux</Titre>
              <div className={lieuCols ? 'grid grid-cols-2 gap-3' : 'space-y-2'}>
                {lieux.map((l) => (
                  <div key={l.name}>
                    <div style={{ height: `${lieuH}mm` }} className="rounded-xl border-2 border-slate-200 overflow-hidden bg-slate-100 flex items-center justify-center">
                      <Illustration it={l} className="w-full h-full object-cover" />
                    </div>
                    <p className="font-display font-bold text-sm mt-1">{l.emoji} {l.name}</p>
                  </div>
                ))}
              </div>
            </>
          )}
        </section>
      )}

      {/* Cartes d'objets */}
      {chunk(objets, objetsParPage).map((groupe, gi) => (
        <section key={`o${gi}`} className="kit-page text-slate-800">
          <Bandeau theme={c.theme} emoji="🎁" titre="Les objets à découper" sous="Découpe le long des pointillés. Pose chaque carte sur la table quand les enfants trouvent l'objet." />
          <div className="grid grid-cols-2 gap-4">
            {groupe.map((o) => (
              <article key={o.name} className={`kit-cut rounded-xl p-3 flex flex-col ${objetsPetits ? 'h-[78mm]' : 'h-[112mm]'}`}>
                <div className={`${objetsPetits ? 'h-[30mm]' : 'h-[46mm]'} flex items-center justify-center bg-white rounded-lg`}>
                  <Illustration it={o} className="max-h-full max-w-full object-contain" />
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
      ))}

      {/* Cartes de monstres */}
      {chunk(c.monstres, 8).map((groupe, gi) => (
        <section key={`m${gi}`} className="kit-page text-slate-800">
          <Bandeau theme={c.theme} emoji="⚔️" titre="Les cartes des monstres (pour le MJ)" sous="Une carte par combat. Garde-les derrière ton écran : tout y est pour jouer sans chercher dans le livre." />
          <div className="grid grid-cols-2 gap-3">
            {groupe.map((m) => (
              <article key={m.nom} className="kit-cut rounded-xl p-2.5 min-h-[56mm] flex flex-col text-[11.5px] leading-tight">
                <div className="flex items-center gap-2">
                  {m.image ? (
                    <img src={m.image} alt={m.nom} className="h-[26mm] w-[26mm] object-contain shrink-0" />
                  ) : (
                    <span className="text-5xl w-[20mm] text-center shrink-0" aria-hidden="true">{m.emoji}</span>
                  )}
                  <div>
                    <p className="font-display font-bold text-[14px] leading-tight">{m.nom} {m.nb}</p>
                    <p className="text-slate-500 text-[10.5px]">{m.chap}</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-1.5 mt-1.5">
                  {m.chips.map((chip) => (
                    <span key={chip} className="rounded-lg bg-slate-50 border border-slate-200 px-2 py-1 font-bold">{chip}</span>
                  ))}
                </div>
                <div className="mt-1.5 space-y-1">
                  {m.lignes.map((l, i) => <p key={i}>{l}</p>)}
                </div>
              </article>
            ))}
          </div>
        </section>
      ))}

      {/* Écran du MJ */}
      <section className="kit-page text-slate-800 text-[13px] leading-snug">
        <Bandeau theme={c.theme} emoji="🛡️" titre={c.ecranTitre ?? "L'écran du MJ"} sous={c.ecranSous ?? "Tout ce qu'il faut savoir en jouant. Plie la page en deux et pose-la devant toi."} />
        <div className="grid grid-cols-2 gap-4">{c.ecran}</div>
      </section>

      {/* Dés en papier */}
      <section className="kit-page text-slate-800 text-[13px]">
        <Bandeau theme={c.theme} emoji="🎲" titre="Tes dés en papier (facultatif)" sous="Facultatif : tu peux aussi lancer les dés virtuels de l'application (bouton 🎲). Si tu préfères le vrai plaisir du papier : découpe tout autour (languettes jaunes comprises), plie chaque pointillé vers l'intérieur, puis colle chaque languette sous le bord qui porte la même lettre." />
        <div className="flex flex-col items-center gap-5">
          <div>
            <p className="font-display font-bold text-center mb-1">Le dé à 20 faces (D20) : pour réussir ses actions</p>
            <D20Net />
          </div>
          <div>
            <p className="font-display font-bold text-center mb-1">Le dé à 6 faces (D6) : pour les dégâts</p>
            <D6Net />
          </div>
          <p className="text-slate-500 text-center">Astuce : imprime sur du papier épais ou colle le patron sur du carton fin. Marque les plis avec un stylo sans encre et une règle. Colle la dernière languette en tenant le dé fermé quelques secondes.</p>
        </div>
      </section>
    </>
  );

  const nbPages =
    1 + c.fiches.length + (personnages.length + lieux.length > 0 ? 1 : 0) + chunk(objets, objetsParPage).length + chunk(c.monstres, 8).length + 2;

  return (
    <KitImprimable
      title={c.titreCourt}
      intro={c.intro}
      contents={[
        ['📖', 'Livret du MJ : résumé, matériel, étapes'],
        ['📝', `Fiche${c.fiches.length > 1 ? 's' : ''} de personnage${c.fichesNote ? ` (${c.fichesNote})` : ''}`],
        ...(personnages.length + lieux.length > 0 ? ([['🖼️', 'Images des personnages et des lieux']] as [string, string][]) : []),
        ...(objets.length > 0 ? ([['🎁', "Cartes d'objets à découper"]] as [string, string][]) : []),
        ['⚔️', `Cartes des monstres (${c.monstres.length}, pour le MJ)`],
        ['🛡️', "L'écran du MJ : les règles en un coup d'œil"],
        ['🎲', 'Patrons de dés en papier (facultatif)'],
      ]}
      buttonClass={c.theme.button}
      accentClass={c.theme.accent}
      pageCount={nbPages}
      pages={pages}
    />
  );
}
