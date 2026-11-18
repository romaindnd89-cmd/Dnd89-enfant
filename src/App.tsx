/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sword, Clock, Users, ChevronRight, BookOpen, Feather, Swords, Crown, Hourglass } from 'lucide-react';
import RoyaumeDesMoustaches from './campaigns/RoyaumeDesMoustaches';
import BouboulePangea from './campaigns/BouboulePangea';
import EtoileCampaign from './campaigns/EtoileCampaign';
import AubeCampaign from './campaigns/AubeCampaign';
import RenardCampaign from './campaigns/RenardCampaign';
import LutinsCampaign from './campaigns/LutinsCampaign';
import DragonneauCampaign from './campaigns/DragonneauCampaign';
import CouronneCampaign from './campaigns/CouronneCampaign';
import ParentGuide from './components/ParentGuide';
import DiceRoller from './components/DiceRoller';
import DragonHelper from './components/DragonHelper';
import WorldBackdrop from './components/WorldBackdrop';
import PortalGate from './components/PortalGate';
import SparkleCursor from './components/SparkleCursor';
import FlyingDragons from './components/FlyingDragons';
import WalkingParade from './components/WalkingParade';
import MotionToggle from './components/MotionToggle';
import DragonForestBanner from './components/DragonForestBanner';
import DragonSprite from './components/DragonSprite';
import TrophyShelf from './components/TrophyShelf';
import { WORLDS, WorldKey } from './theme/worlds';
import FantasyScene from './components/FantasyScene';

type AgeGroup = 'kids' | 'normal' | 'expert';

interface Campaign {
  id: string;
  title: string;
  description: string;
  duration: string;
  difficulty?: string;
  players: string;
  /** Illustration propre à l'aventure (prioritaire sur la photo du monde) */
  imageUrl?: string;
  /** Monde affiché en fond quand on entre dans l'aventure, et en couverture s'il n'y a pas d'illustration */
  world: WorldKey;
  /** Lueur de la carte au survol (classe Tailwind littérale) */
  glow: string;
  component: React.ComponentType<{ onBack: () => void }>;
}

const kidsCampaigns: Campaign[] = [
  {
    id: 'c1',
    title: 'Le Royaume des Moustaches',
    description: 'La Croquette Sacrée a été volée ! Incarnez une courageuse petite chatte et partez à l\'aventure dans les rues de Miaou-Ville, affrontez des Souris-Ninjas et découvrez le secret du terrible Sir Grignote.',
    duration: '1h - 1h30',
    difficulty: 'Difficulté 1/5',
    players: '1 héros (initiation)',
    imageUrl: 'https://i.postimg.cc/d0DjC5Nm/1775600945286.png',
    world: 'hub',
    glow: 'hover:shadow-[0_0_45px_-10px_rgba(244,63,94,0.7)]',
    component: RoyaumeDesMoustaches,
  },
  {
    id: 'c2',
    title: 'Bouboule et le Secret de Pangéa',
    description: 'La Quête des 4 Cristaux ! Incarnez Bouboule le Cachalot Magique dans un monde où les animaux ont hérité de la Terre. Affrontez la Mue Noire et sauvez l\'océan !',
    duration: '2h - 3h (plusieurs séances)',
    difficulty: 'Difficulté 2,5/5',
    players: '1 héros (dès 8 ans)',
    imageUrl: 'https://i.postimg.cc/3xBKk9mv/1775684547380.png',
    world: 'hub',
    glow: 'hover:shadow-[0_0_45px_-10px_rgba(56,189,248,0.7)]',
    component: BouboulePangea,
  },
  {
    id: 'c4',
    title: 'L\'Étoile Filante Perdue',
    description: 'Une petite étoile est tombée du ciel pendant la nuit. Elle a besoin de votre courage pour remonter tout là-haut. Incarnez Aura et Kael dans cette épopée !',
    duration: '2h - 3h (plusieurs séances)',
    difficulty: 'Difficulté 2,5/5',
    players: '2 héros et un MJ',
    imageUrl: 'https://i.postimg.cc/rpR69wWt/1775769643787.png',
    world: 'gate',
    glow: 'hover:shadow-[0_0_45px_-10px_rgba(129,140,248,0.7)]',
    component: EtoileCampaign,
  },
  {
    id: 'c5',
    title: 'L\'Héritier de l\'Aube',
    description: 'Incarnez un jeune dragonneau d\'or et partez à la recherche de l\'Éclat de Soleil volé pour sauver la Citadelle de Cristal de la Mue Noire !',
    duration: '2h - 3h (plusieurs séances)',
    difficulty: 'Difficulté 2/5',
    players: '1 héros (dès 6 ans)',
    imageUrl: 'https://i.postimg.cc/CLscyy0K/1775862835775.png',
    world: 'peaks',
    glow: 'hover:shadow-[0_0_45px_-10px_rgba(251,191,36,0.7)]',
    component: AubeCampaign,
  },
  {
    id: 'c6',
    title: 'Le Renardeau et la Forêt qui Oublie',
    description: 'Une brume grise a volé les couleurs et les souvenirs de la forêt de Grisefeuille. Incarnez un petit renard, le seul à se souvenir, et retrouvez les 3 Glands d\'Or avant la première neige.',
    duration: '2h - 3h (plusieurs séances)',
    difficulty: 'Difficulté 2/5',
    players: '1 héros (dès 6 ans)',
    world: 'renard',
    glow: 'hover:shadow-[0_0_45px_-10px_rgba(249,115,22,0.7)]',
    component: RenardCampaign,
  },
  {
    id: 'c3',
    title: 'Le Trésor des Lutins Farceurs',
    description: 'Les lutins ont caché des pièces en chocolat partout dans le château de Chantefarce. Une aventure d\'équipe pleine de pièges rigolos, idéale pour un anniversaire ou un après-midi entre copains.',
    duration: '45 min - 1h15',
    difficulty: 'Difficulté 1,5/5',
    players: '3 à 6 héros (dès 5 ans)',
    world: 'lutins',
    glow: 'hover:shadow-[0_0_45px_-10px_rgba(52,211,153,0.7)]',
    component: LutinsCampaign,
  },
  {
    id: 'c7',
    title: 'Le Dragonneau Perdu',
    description: "Un bébé dragon s'est enfui la nuit de sa naissance : il a peur de son propre feu ! Deux apprentis, un Chevalier et un Magicien, partent le retrouver avant que la Grande Torche du village ne reste éteinte.",
    duration: '1h - 1h30',
    difficulty: 'Difficulté 1/5',
    players: '2 héros (initiation, dès 6 ans)',
    world: 'volcan',
    glow: 'hover:shadow-[0_0_45px_-10px_rgba(251,146,60,0.7)]',
    component: DragonneauCampaign,
  },
  {
    id: 'c8',
    title: 'La Couronne du Rire',
    description: "La Couronne magique du roi a disparu la veille du Grand Banquet ! Menez l'enquête avec une oie très gourmande, affrontez des brigands poètes, déjouez les mensonges d'un marché... et méfiez-vous de ceux en qui vous avez confiance.",
    duration: '4h - 6h (3 séances conseillées)',
    difficulty: 'Difficulté 3/5',
    players: '1 héros (dès 8 ans)',
    world: 'royaume',
    glow: 'hover:shadow-[0_0_45px_-10px_rgba(217,70,239,0.7)]',
    component: CouronneCampaign,
  },
];

function hasEntered(): boolean {
  try {
    return sessionStorage.getItem('dnd89:entered') === '1';
  } catch {
    return false;
  }
}

export default function App() {
  const [entered, setEntered] = useState<boolean>(hasEntered);
  const [activeTab, setActiveTab] = useState<AgeGroup>('kids');
  const [selectedCampaignId, setSelectedCampaignId] = useState<string | null>(null);
  const [showParentGuide, setShowParentGuide] = useState(false);
  const [flash, setFlash] = useState(0);

  const selected = kidsCampaigns.find((c) => c.id === selectedCampaignId) ?? null;
  const reading = showParentGuide || selected !== null;
  const world: WorldKey = selected ? selected.world : 'hub';

  const enterGate = () => {
    try {
      sessionStorage.setItem('dnd89:entered', '1');
    } catch {
      /* ignore */
    }
    setEntered(true);
  };

  const openCampaign = (id: string) => {
    setFlash((f) => f + 1);
    setSelectedCampaignId(id);
    window.scrollTo(0, 0);
  };

  const goHome = () => {
    setSelectedCampaignId(null);
    setShowParentGuide(false);
    window.scrollTo(0, 0);
  };

  const SelectedComponent = selected?.component;

  return (
    <div className="min-h-screen bg-transparent font-sans selection:bg-amber-200 selection:text-slate-900">
      <WorldBackdrop world={world} />
      <SparkleCursor />

      <AnimatePresence>{!entered && <PortalGate key="gate" onEnter={enterGate} />}</AnimatePresence>

      {/* Éclair de portail quand on entre dans une aventure */}
      {flash > 0 && (
        <motion.div
          key={flash}
          className="fixed inset-0 z-[95] pointer-events-none"
          style={{
            background:
              'radial-gradient(circle at 50% 45%, rgba(253,230,138,0.95) 0%, rgba(124,58,237,0.55) 30%, transparent 62%)',
          }}
          initial={{ opacity: 1, scale: 0.2 }}
          animate={{ opacity: 0, scale: 3.2 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
        />
      )}

      {entered && (
        <>
          <DiceRoller />
          <DragonHelper />
          <FlyingDragons />
          <WalkingParade />
        </>
      )}

      {/* En-tête */}
      <header className="bg-slate-950/55 backdrop-blur-xl border-b border-amber-200/15 sticky top-0 z-50 shadow-[0_8px_30px_-10px_rgba(0,0,0,0.8)]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <button className="flex items-center gap-3 text-left" onClick={goHome}>
            <motion.img
              src="/art/dragon-front.png"
              alt=""
              aria-hidden="true"
              draggable={false}
              className="logo-wiggle w-14 h-14 object-contain select-none shrink-0"
              animate={{
                filter: [
                  'drop-shadow(0 0 6px rgba(251,191,36,0.35))',
                  'drop-shadow(0 0 14px rgba(251,191,36,0.85))',
                  'drop-shadow(0 0 6px rgba(251,191,36,0.35))',
                ],
              }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            />
            <span className="font-display text-xl sm:text-2xl font-bold tracking-wide text-amber-50 drop-shadow-[0_2px_8px_rgba(251,191,36,0.35)]">
              Dnd89 <span className="text-amber-300">&</span> Dragons
            </span>
          </button>
          <div className="flex items-center gap-4">
            <div className="hidden sm:block font-display text-xs tracking-[0.25em] uppercase text-amber-100/70">
              Le portail des aventures
            </div>
            <MotionToggle />
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-3 sm:px-6 lg:px-8 py-6 sm:py-10">
        {reading ? (
          /* Lecture : papier ancien. Pas d'animation de transformation ici,
             pour que les menus en position fixe restent collés à l'écran. */
          <motion.div
            key={showParentGuide ? 'guide' : selectedCampaignId}
            className="parchment-panel rounded-2xl p-4 sm:p-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            {showParentGuide ? (
              <ParentGuide onBack={goHome} />
            ) : (
              SelectedComponent && <SelectedComponent onBack={goHome} />
            )}
          </motion.div>
        ) : (
          <motion.div
            key="home"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            {/* Titre */}
            <div className="text-center max-w-2xl mx-auto mt-4 mb-10">
              <p className="font-display text-amber-200/80 tracking-[0.35em] text-xs uppercase mb-3">
                Bienvenue de l'autre côté
              </p>
              <h2 className="font-display text-3xl sm:text-5xl font-bold leading-tight tracking-wide mb-4">
                <span className="shiny-title">Choisissez votre monde</span>
              </h2>
              <p className="text-lg text-slate-100 leading-relaxed drop-shadow-[0_1px_6px_rgba(2,6,23,0.95)]">
                Chaque aventure est une porte vers un autre monde. Le parent raconte, l'enfant décide, les dés
                font le reste.
              </p>
            </div>

            {/* Onglets */}
            <div className="glass-dark backdrop-blur-md rounded-2xl p-1.5 mb-8 grid grid-cols-3 gap-1.5">
              <TabButton
                active={activeTab === 'kids'}
                onClick={() => setActiveTab('kids')}
                icon={<Feather className="w-5 h-5" />}
                label="Petits Dragons"
                sublabel="5 - 8 ans"
              />
              <TabButton
                active={activeTab === 'normal'}
                onClick={() => setActiveTab('normal')}
                icon={<Swords className="w-5 h-5" />}
                label="Aventuriers"
                sublabel="Parties normales"
              />
              <TabButton
                active={activeTab === 'expert'}
                onClick={() => setActiveTab('expert')}
                icon={<Crown className="w-5 h-5" />}
                label="Maîtres"
                sublabel="Petits experts"
              />
            </div>

            <AnimatePresence mode="wait">
              {activeTab === 'kids' && (
                <motion.div
                  key="kids"
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -14 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Guide du parent */}
                  <button
                    onClick={() => {
                      setShowParentGuide(true);
                      window.scrollTo(0, 0);
                    }}
                    className="group w-full mb-8 glass-dark backdrop-blur-md rounded-2xl p-5 sm:p-6 flex items-center justify-between text-left hover:border-amber-300/50 transition-colors"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full border border-amber-300/40 bg-amber-300/10 flex items-center justify-center shrink-0">
                        <BookOpen className="w-6 h-6 text-amber-300" />
                      </div>
                      <div>
                        <h3 className="font-display font-bold text-lg sm:text-xl text-amber-100 tracking-wide">
                          Guide du parent débutant
                        </h3>
                        <p className="text-slate-300/90 text-sm sm:text-base">
                          Jamais joué ? Les règles et les dés expliqués en cinq minutes.
                        </p>
                      </div>
                    </div>
                    <ChevronRight className="w-6 h-6 text-amber-300/60 group-hover:text-amber-300 group-hover:translate-x-1 transition-all shrink-0" />
                  </button>

                  <TrophyShelf />

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {kidsCampaigns.map((campaign, index) => (
                      <CampaignCard
                        key={campaign.id}
                        campaign={campaign}
                        index={index}
                        onOpen={() => openCampaign(campaign.id)}
                      />
                    ))}
                  </div>

                  <DragonForestBanner className="mt-10 -mb-4" />
                </motion.div>
              )}

              {activeTab === 'normal' && (
                <ComingSoon
                  key="normal"
                  title="Le Camp des Aventuriers"
                  description="Les campagnes de niveau normal sont en cours de préparation. Préparez vos épées et vos boucliers, l'aventure arrive bientôt."
                  icon={<Swords className="w-10 h-10" />}
                />
              )}

              {activeTab === 'expert' && (
                <ComingSoon
                  key="expert"
                  title="La Tour des Maîtres"
                  description="Des défis plus corsés pour les petits experts. Les grimoires sont en cours d'écriture, revenez prochainement."
                  icon={<Crown className="w-10 h-10" />}
                />
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </main>
    </div>
  );
}

interface CampaignCardProps {
  key?: string; // @types/react absent du projet : on déclare key explicitement
  campaign: Campaign;
  index: number;
  onOpen: () => void;
}

function CampaignCard({ campaign, index, onOpen }: CampaignCardProps) {
  const w = WORLDS[campaign.world];
  const [coverFailed, setCoverFailed] = useState(false);

  return (
    <motion.article
      onClick={onOpen}
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 + index * 0.08, duration: 0.5 }}
      whileHover={{ y: -6 }}
      className={`group relative overflow-hidden rounded-2xl glass-dark backdrop-blur-md cursor-pointer transition-shadow duration-500 ${campaign.glow}`}
    >
      {/* Couverture : la porte vers le monde */}
      <div className={`relative aspect-[16/10] overflow-hidden bg-gradient-to-br ${w.fallback}`}>
        {(!campaign.imageUrl || coverFailed) && (
          <FantasyScene
            world={campaign.world}
            animated={false}
            className="absolute inset-0 w-full h-full transition-transform duration-[1400ms] ease-out group-hover:scale-110"
          />
        )}
        {campaign.imageUrl && !coverFailed && (
          <img
            src={campaign.imageUrl}
            alt=""
            loading="lazy"
            referrerPolicy="no-referrer"
            onError={() => setCoverFailed(true)}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-110"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/25 to-transparent" />
        <div className="absolute inset-0 ring-1 ring-inset ring-amber-200/10" />
        {/* Petit dragon qui garde la porte, et qui s'envole quand on approche */}
        <div className="card-dragon absolute right-3 top-3 pointer-events-none" style={{ transform: 'scaleX(-1)' }} aria-hidden="true">
          <div className="card-dragon-inner">
            <DragonSprite size={52} tint={index} speed={0.55 + (index % 3) * 0.1} />
          </div>
        </div>
        <h3 className="absolute left-5 right-5 bottom-4 font-display text-xl sm:text-2xl font-bold text-amber-50 tracking-wide leading-snug drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]">
          {campaign.title}
        </h3>
      </div>

      <div className="relative p-5 sm:p-6">
        <p className="text-slate-300/90 leading-relaxed mb-5">{campaign.description}</p>

        <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-slate-400 mb-5">
          <span className="flex items-center gap-1.5">
            <Clock className="w-4 h-4 text-amber-300/70" />
            {campaign.duration}
          </span>
          {campaign.difficulty && (
            <span className="flex items-center gap-1.5">
              <Sword className="w-4 h-4 text-amber-300/70" />
              {campaign.difficulty}
            </span>
          )}
          <span className="flex items-center gap-1.5">
            <Users className="w-4 h-4 text-amber-300/70" />
            {campaign.players}
          </span>
        </div>

        <span className="inline-flex items-center gap-2 font-display text-sm tracking-[0.18em] uppercase text-amber-300 group-hover:text-amber-200 transition-colors">
          Franchir le portail
          <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </span>
      </div>

      <div className="card-shine pointer-events-none absolute inset-0" />
    </motion.article>
  );
}

function TabButton({
  active,
  onClick,
  icon,
  label,
  sublabel,
}: {
  active: boolean;
  onClick: () => void;
  icon: React.ReactNode;
  label: string;
  sublabel: string;
}) {
  return (
    <button
      onClick={onClick}
      className={`flex flex-col sm:flex-row items-center justify-center gap-1.5 sm:gap-3 px-2 py-3 rounded-xl transition-all duration-300 ${
        active
          ? 'bg-amber-300/15 text-amber-200 shadow-[inset_0_0_0_1px_rgba(253,230,138,0.45)]'
          : 'text-slate-400 hover:text-slate-200 hover:bg-white/5'
      }`}
    >
      {icon}
      <div className="text-center sm:text-left">
        <div className="font-display font-bold text-xs sm:text-base tracking-wide leading-tight">{label}</div>
        <div className="hidden sm:block text-xs opacity-70">{sublabel}</div>
      </div>
    </button>
  );
}

interface ComingSoonProps {
  key?: string; // @types/react absent du projet : on déclare key explicitement
  title: string;
  description: string;
  icon: React.ReactNode;
}

function ComingSoon({ title, description, icon }: ComingSoonProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -14 }}
      transition={{ duration: 0.3 }}
      className="glass-dark backdrop-blur-md rounded-2xl flex flex-col items-center justify-center text-center p-10 sm:p-14 min-h-[380px]"
    >
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        className="w-20 h-20 rounded-full border border-amber-300/40 bg-amber-300/10 text-amber-300 flex items-center justify-center mb-6"
      >
        {icon}
      </motion.div>
      <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-wide text-amber-100 mb-4">{title}</h2>
      <p className="text-slate-300/90 text-lg max-w-lg mb-8">{description}</p>
      <div className="inline-flex items-center gap-2 font-display text-xs tracking-[0.25em] uppercase text-amber-200/80 border border-amber-200/30 px-5 py-2.5 rounded-full">
        <Hourglass className="w-4 h-4" />
        Prochainement
      </div>
    </motion.div>
  );
}
