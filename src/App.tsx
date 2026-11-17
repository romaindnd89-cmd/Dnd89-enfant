/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sword, Shield, Sparkles, Clock, Users, ChevronRight, Star, BookOpen } from 'lucide-react';
import RoyaumeDesMoustaches from './campaigns/RoyaumeDesMoustaches';
import BouboulePangea from './campaigns/BouboulePangea';
import EtoileCampaign from './campaigns/EtoileCampaign';
import AubeCampaign from './campaigns/AubeCampaign';
import RenardCampaign from './campaigns/RenardCampaign';
import ParentGuide from './components/ParentGuide';
import DiceRoller from './components/DiceRoller';
import DragonHelper from './components/DragonHelper';
import EnchantedBackground from './components/EnchantedBackground';
import SparkleCursor from './components/SparkleCursor';
import TrophyShelf from './components/TrophyShelf';
import { readProgressCount } from './hooks/useProgress';

type AgeGroup = 'kids' | 'normal' | 'expert';

interface Campaign {
  id: string;
  title: string;
  description: string;
  duration: string;
  difficulty?: string;
  players: string;
  emoji: string;
  imageUrl?: string;
  gradient?: string;
  colorClass: string;
  bgClass: string;
  comingSoon?: boolean;
  progressId?: string;
  totalChapters?: number;
}

const kidsCampaigns: Campaign[] = [
  {
    id: 'c1',
    title: 'Le Royaume des Moustaches',
    description: 'La Croquette Sacrée a été volée ! Incarnez une courageuse petite chatte et partez à l\'aventure dans les rues de Miaou-Ville, affrontez des Souris-Ninjas et découvrez le secret du terrible Sir Grignote.',
    duration: '1h - 1h30',
    difficulty: 'Difficulté : 1/5',
    players: '1 petit héros (1ère partie initiation)',
    emoji: '🐱👑',
    imageUrl: 'https://i.postimg.cc/d0DjC5Nm/1775600945286.png',
    colorClass: 'text-rose-600',
    bgClass: 'bg-rose-100 border-rose-200',
  },
  {
    id: 'c2',
    title: 'Bouboule et le Secret de Pangéa',
    description: 'La Quête des 4 Cristaux ! Incarnez Bouboule le Cachalot Magique dans un monde où les animaux ont hérité de la Terre. Affrontez la Mue Noire et sauvez l\'océan !',
    duration: '2h - 3h (Plusieurs sessions)',
    difficulty: 'Difficulté : 2.5/5',
    players: '1 petit héros (Dès 8 ans)',
    emoji: '🐋👑',
    imageUrl: 'https://i.postimg.cc/3xBKk9mv/1775684547380.png',
    colorClass: 'text-blue-600',
    bgClass: 'bg-blue-100 border-blue-200',
  },
  {
    id: 'c4',
    title: 'L\'Étoile Filante Perdue',
    description: 'Une petite étoile est tombée du ciel pendant la nuit. Elle a besoin de votre courage pour remonter tout là-haut. Incarnez Aura et Kael dans cette épopée !',
    duration: '2h - 3h (Plusieurs sessions)',
    difficulty: 'Complicités : 2.5/5',
    players: 'Un MJ et deux héros (Aidé par choix multiple)',
    emoji: '⭐✨',
    imageUrl: 'https://i.postimg.cc/rpR69wWt/1775769643787.png',
    colorClass: 'text-indigo-600',
    bgClass: 'bg-indigo-100 border-indigo-200',
  },
  {
    id: 'c5',
    title: 'L\'Héritier de l\'Aube',
    description: 'Incarnez un jeune dragonneau d\'or et partez à la recherche de l\'Éclat de Soleil volé pour sauver la Citadelle de Cristal de la Mue Noire !',
    duration: '2h - 3h (Plusieurs sessions)',
    difficulty: 'Difficulté : 2/5',
    players: '1 petit héros (Dès 6 ans)',
    emoji: '🐉✨',
    imageUrl: 'https://i.postimg.cc/CLscyy0K/1775862835775.png',
    colorClass: 'text-amber-600',
    bgClass: 'bg-amber-100 border-amber-200',
  },
  {
    id: 'c6',
    title: 'Le Renardeau et la Forêt qui Oublie',
    description: 'Une brume grise a volé les couleurs et les souvenirs de la forêt de Grisefeuille ! Incarnez un petit renard, le seul à se souvenir, et partez retrouver les 3 Glands d\'Or avant la première neige.',
    duration: '2h - 3h (Plusieurs sessions)',
    difficulty: 'Difficulté : 2/5',
    players: '1 petit héros (Dès 6 ans)',
    emoji: '🦊🍂',
    gradient: 'from-amber-300 via-orange-400 to-rose-400',
    colorClass: 'text-orange-600',
    bgClass: 'bg-orange-100 border-orange-200',
    progressId: 'renard',
    totalChapters: 12,
  },
  {
    id: 'c3',
    title: 'Le Trésor des Lutins Farceurs',
    description: 'Les lutins ont caché des pièces en chocolat partout dans le château. Saurez-vous déjouer leurs pièges rigolos ?',
    duration: '40 min',
    players: '3-6 petits héros',
    emoji: '🏰🍫',
    gradient: 'from-lime-300 via-emerald-400 to-teal-400',
    colorClass: 'text-emerald-600',
    bgClass: 'bg-emerald-50 border-emerald-200',
    comingSoon: true,
  }
];

export default function App() {
  const [activeTab, setActiveTab] = useState<AgeGroup>('kids');
  const [selectedCampaignId, setSelectedCampaignId] = useState<string | null>(null);
  const [showParentGuide, setShowParentGuide] = useState(false);

  return (
    <div className="min-h-screen bg-transparent font-sans selection:bg-emerald-200 selection:text-emerald-900">
      <EnchantedBackground />
      <SparkleCursor />
      <DiceRoller />
      <DragonHelper />
      {/* Header */}
      <header className="bg-slate-950/40 backdrop-blur-xl border-b border-white/10 sticky top-0 z-50 shadow-[0_8px_30px_-10px_rgba(0,0,0,0.6)]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div
            className="flex items-center gap-3 cursor-pointer group"
            onClick={() => setSelectedCampaignId(null)}
          >
            <motion.div
              className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl border border-amber-300/40"
              style={{ background: 'radial-gradient(circle at 35% 30%, #fde68a33, #0b102600)' }}
              animate={{ boxShadow: ['0 0 14px 2px rgba(251,191,36,0.3)', '0 0 26px 4px rgba(251,191,36,0.55)', '0 0 14px 2px rgba(251,191,36,0.3)'] }}
              transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut' }}
            >
              🐉
            </motion.div>
            <h1 className="font-fantasy text-xl sm:text-2xl font-bold tracking-wide text-amber-50 drop-shadow-[0_2px_8px_rgba(251,191,36,0.35)]">
              Dnd89 <span className="text-amber-300">&</span> Dragons
            </h1>
          </div>
          <div className="hidden sm:flex items-center gap-2 text-sm font-medium text-amber-100/80 bg-white/5 border border-white/10 px-4 py-2 rounded-full">
            <Star className="w-4 h-4 text-amber-300 fill-amber-300" />
            <span>Le portail des aventures</span>
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-3 sm:px-6 lg:px-8 py-6 sm:py-10">
        <div className="parchment-panel rounded-[1.75rem] sm:rounded-[2rem] p-4 sm:p-8">
        <AnimatePresence mode="wait">
          {showParentGuide ? (
            <motion.div
              key="parent-guide"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <ParentGuide onBack={() => setShowParentGuide(false)} />
            </motion.div>
          ) : selectedCampaignId === 'c1' ? (
            <motion.div
              key="campaign-c1"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <RoyaumeDesMoustaches onBack={() => setSelectedCampaignId(null)} />
            </motion.div>
          ) : selectedCampaignId === 'c2' ? (
            <motion.div
              key="campaign-c2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <BouboulePangea onBack={() => setSelectedCampaignId(null)} />
            </motion.div>
          ) : selectedCampaignId === 'c4' ? (
            <motion.div
              key="campaign-c4"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <EtoileCampaign onBack={() => setSelectedCampaignId(null)} />
            </motion.div>
          ) : selectedCampaignId === 'c5' ? (
            <motion.div
              key="campaign-c5"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <AubeCampaign onBack={() => setSelectedCampaignId(null)} />
            </motion.div>
          ) : selectedCampaignId === 'c6' ? (
            <motion.div
              key="campaign-c6"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <RenardCampaign onBack={() => setSelectedCampaignId(null)} />
            </motion.div>
          ) : (
            <motion.div
              key="campaign-list"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.3 }}
            >
              {/* Navigation Tabs */}
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 mb-10 p-1.5 bg-slate-200/50 rounded-3xl sm:rounded-full overflow-x-auto hide-scrollbar">
                <TabButton 
                  active={activeTab === 'kids'} 
                  onClick={() => setActiveTab('kids')}
                  icon="🦄"
                  label="Petits Dragons"
                  sublabel="5-8 ans (Initiation)"
                  activeColor="bg-white text-emerald-600 shadow-sm ring-1 ring-slate-200/50"
                />
                <TabButton 
                  active={activeTab === 'normal'} 
                  onClick={() => setActiveTab('normal')}
                  icon="⚔️"
                  label="Aventuriers"
                  sublabel="Parties normales"
                  activeColor="bg-white text-blue-600 shadow-sm ring-1 ring-slate-200/50"
                />
                <TabButton 
                  active={activeTab === 'expert'} 
                  onClick={() => setActiveTab('expert')}
                  icon="🧙‍♂️"
                  label="Maîtres"
                  sublabel="Petit expert"
                  activeColor="bg-white text-purple-600 shadow-sm ring-1 ring-slate-200/50"
                />
              </div>

              {/* Content Area */}
              <div className="relative min-h-[400px]">
                <AnimatePresence mode="wait">
                  {activeTab === 'kids' && (
                    <motion.div
                      key="kids"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                      className="space-y-8"
                    >
                      <div className="text-center max-w-2xl mx-auto mb-12">
                        <h2 className="font-fantasy text-2xl sm:text-4xl font-bold mb-4 leading-tight tracking-wide">
                          <span className="shiny-title">Le Repaire des Petits Dragons</span> ✨
                        </h2>
                        <p className="text-lg text-slate-600 font-medium">
                          Des aventures douces, colorées et pleines de magie, spécialement conçues pour initier les plus jeunes (5-8 ans) au jeu de rôle.
                        </p>
                      </div>

                      <button 
                        onClick={() => setShowParentGuide(true)}
                        className="w-full mb-8 bg-gradient-to-r from-blue-500 to-indigo-600 text-white p-6 rounded-3xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all flex items-center justify-between text-left group"
                      >
                        <div className="flex items-center gap-4">
                          <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                            <BookOpen className="w-7 h-7 text-white" />
                          </div>
                          <div>
                            <h3 className="font-bold text-xl sm:text-2xl mb-1 group-hover:underline">Guide du Parent Débutant</h3>
                            <p className="text-blue-100 text-sm sm:text-base">Comment jouer ? Règles super simples et explication des dés pour les 100% novices.</p>
                          </div>
                        </div>
                        <ChevronRight className="w-8 h-8 opacity-50 group-hover:opacity-100 transition-opacity hidden sm:block" />
                      </button>

                      <TrophyShelf />

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {kidsCampaigns.map((campaign, index) => (
                          <motion.div
                            key={campaign.id}
                            onClick={() => { if (!campaign.comingSoon) setSelectedCampaignId(campaign.id); }}
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.1, duration: 0.4, type: "spring", bounce: 0.4 }}
                            className={`relative group overflow-hidden rounded-3xl border-2 ${campaign.bgClass} p-6 sm:p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ${campaign.comingSoon ? 'opacity-90 cursor-default' : 'cursor-pointer'}`}
                          >
                            {campaign.comingSoon && (
                              <div className="absolute top-5 -right-10 rotate-45 bg-slate-700 text-white text-xs font-bold px-12 py-1 shadow-md z-20">
                                Bientôt
                              </div>
                            )}
                            <div className="card-shine pointer-events-none absolute inset-0 rounded-3xl z-[5]" />
                            <div className="absolute -right-6 -top-6 text-8xl opacity-40 group-hover:scale-110 group-hover:rotate-12 transition-transform duration-500 pointer-events-none">
                              {Array.from(campaign.emoji)[0]}
                            </div>

                            <div className="relative z-10">
                              {campaign.imageUrl ? (
                                <div className="mb-5 rounded-2xl overflow-hidden aspect-video border-2 border-white/60 shadow-sm relative">
                                  <img
                                    src={campaign.imageUrl}
                                    alt={campaign.title}
                                    className="w-full h-full object-cover"
                                    referrerPolicy="no-referrer"
                                  />
                                  <div className="absolute top-2 right-2 text-2xl filter drop-shadow-md bg-white/80 rounded-full p-1">
                                    {Array.from(campaign.emoji)[0]}
                                  </div>
                                </div>
                              ) : campaign.gradient ? (
                                <div className={`mb-5 rounded-2xl overflow-hidden aspect-video border-2 border-white/60 shadow-sm relative bg-gradient-to-br ${campaign.gradient} flex items-center justify-center`}>
                                  <motion.span
                                    className="text-7xl drop-shadow-lg"
                                    animate={{ y: [0, -6, 0], rotate: [0, 4, -4, 0] }}
                                    transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                                  >
                                    {Array.from(campaign.emoji)[0]}
                                  </motion.span>
                                  <span className="absolute bottom-2 right-2 text-2xl bg-white/80 rounded-full p-1 shadow">
                                    {Array.from(campaign.emoji)[1] ?? '✨'}
                                  </span>
                                </div>
                              ) : (
                                <div className="text-5xl mb-4 filter drop-shadow-sm">
                                  {campaign.emoji}
                                </div>
                              )}
                              <h3 className={`font-display text-2xl font-bold mb-3 ${campaign.colorClass}`}>
                                {campaign.title}
                              </h3>
                              <p className="text-slate-700 font-medium text-base mb-6 leading-relaxed">
                                {campaign.description}
                              </p>
                              
                              <div className="flex flex-wrap items-center gap-4 text-sm font-bold text-slate-600 mb-8">
                                <div className="flex items-center gap-1.5 bg-white/60 px-3 py-1.5 rounded-full">
                                  <Clock className="w-4 h-4" />
                                  {campaign.duration}
                                </div>
                                {campaign.difficulty && (
                                  <div className="flex items-center gap-1.5 bg-white/60 px-3 py-1.5 rounded-full">
                                    <Sword className="w-4 h-4" />
                                    {campaign.difficulty}
                                  </div>
                                )}
                                <div className="flex items-center gap-1.5 bg-white/60 px-3 py-1.5 rounded-full">
                                  <Users className="w-4 h-4" />
                                  {campaign.players}
                                </div>
                              </div>

                              {campaign.progressId && (() => {
                                const count = readProgressCount(campaign.progressId!);
                                if (count <= 0) return null;
                                return (
                                  <div className="mb-4 -mt-4">
                                    <div className="flex items-center justify-between mb-1">
                                      <span className="text-xs font-bold text-slate-500">📍 En cours</span>
                                      <span className="text-xs font-bold text-slate-500">{count}/{campaign.totalChapters}</span>
                                    </div>
                                    <div className="h-2 rounded-full bg-white/70 overflow-hidden">
                                      <div
                                        className={`h-full rounded-full bg-gradient-to-r ${campaign.gradient ?? 'from-emerald-400 to-teal-500'}`}
                                        style={{ width: `${Math.round((count / (campaign.totalChapters ?? count)) * 100)}%` }}
                                      />
                                    </div>
                                  </div>
                                );
                              })()}

                              {campaign.comingSoon ? (
                                <div className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/70 text-slate-400 px-6 py-3 rounded-2xl font-bold shadow-sm cursor-default">
                                  <Clock className="w-5 h-5" />
                                  En préparation
                                </div>
                              ) : (
                                <button className={`w-full sm:w-auto flex items-center justify-center gap-2 bg-white ${campaign.colorClass} px-6 py-3 rounded-2xl font-bold shadow-sm hover:shadow-md hover:scale-105 active:scale-95 transition-all`}>
                                  Voir l'aventure
                                  <ChevronRight className="w-5 h-5" />
                                </button>
                              )}
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  )}

                  {activeTab === 'normal' && (
                    <ComingSoon 
                      key="normal"
                      title="Le Camp des Aventuriers"
                      description="Les campagnes de niveau normal sont en cours de préparation. Préparez vos épées et vos boucliers, l'aventure arrive bientôt !"
                      icon="⚔️"
                      colorClass="text-blue-600"
                      bgClass="bg-blue-50 border-blue-200"
                    />
                  )}

                  {activeTab === 'expert' && (
                    <ComingSoon 
                      key="expert"
                      title="La Tour des Maîtres"
                      description="Des défis plus corsés pour les petits experts. Les grimoires sont en cours d'écriture, revenez prochainement !"
                      icon="🧙‍♂️"
                      colorClass="text-purple-600"
                      bgClass="bg-purple-50 border-purple-200"
                    />
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        </div>
      </main>
    </div>
  );
}

function TabButton({ 
  active, 
  onClick, 
  icon, 
  label, 
  sublabel, 
  activeColor 
}: { 
  active: boolean; 
  onClick: () => void; 
  icon: string; 
  label: string; 
  sublabel: string;
  activeColor: string;
}) {
  return (
    <button
      onClick={onClick}
      className={`relative flex-1 flex items-center gap-3 px-4 py-3 sm:py-4 rounded-2xl sm:rounded-full transition-all duration-300 ${
        active 
          ? activeColor
          : 'text-slate-500 hover:bg-slate-200/80 hover:text-slate-700'
      }`}
    >
      <div className={`text-2xl sm:text-3xl transition-transform duration-300 ${active ? 'scale-110' : 'scale-100 grayscale opacity-70'}`}>
        {icon}
      </div>
      <div className="text-left">
        <div className="font-display font-bold text-base sm:text-lg leading-tight">{label}</div>
        <div className={`text-xs sm:text-sm font-medium ${active ? 'opacity-80' : 'opacity-60'}`}>{sublabel}</div>
      </div>
    </button>
  );
}

interface ComingSoonProps {
  key?: string; // @types/react absent du projet : on déclare key explicitement
  title: string;
  description: string;
  icon: string;
  colorClass: string;
  bgClass: string;
}

function ComingSoon({
  title,
  description,
  icon,
  colorClass,
  bgClass
}: ComingSoonProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className={`flex flex-col items-center justify-center text-center p-12 rounded-3xl border-2 border-dashed ${bgClass} min-h-[500px]`}
    >
      <motion.div 
        animate={{ 
          y: [0, -10, 0],
          rotate: [0, 5, -5, 0]
        }}
        transition={{ 
          duration: 4, 
          repeat: Infinity,
          ease: "easeInOut" 
        }}
        className="text-8xl mb-6 filter drop-shadow-md"
      >
        {icon}
      </motion.div>
      <h2 className={`font-display text-3xl sm:text-4xl font-bold mb-4 ${colorClass}`}>
        {title}
      </h2>
      <p className="text-slate-600 text-lg font-medium max-w-lg mb-8">
        {description}
      </p>
      <div className="inline-flex items-center gap-2 bg-white px-6 py-3 rounded-full font-bold text-slate-500 shadow-sm border border-slate-200">
        <Clock className="w-5 h-5" />
        Prochainement...
      </div>
    </motion.div>
  );
}

