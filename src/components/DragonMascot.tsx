import React from 'react';
import { motion } from 'motion/react';

/**
 * Flammèche : un petit dragon dessiné en SVG, bien vivant.
 * Il flotte, bat des ailes, cligne des yeux et lâche parfois une étincelle.
 */
export default function DragonMascot({ size = 64 }: { size?: number }) {
  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      animate={{ y: [0, -4, 0] }}
      transition={{ duration: 2.6, repeat: Infinity, ease: 'easeInOut' }}
    >
      {/* Aile gauche (bat) */}
      <motion.path
        d="M38 62 C18 50 10 56 12 70 C22 66 30 68 40 74 Z"
        fill="#7c3aed"
        style={{ transformOrigin: '40px 68px' }}
        animate={{ rotate: [0, -16, 0] }}
        transition={{ duration: 0.9, repeat: Infinity, ease: 'easeInOut' }}
      />
      {/* Aile droite (bat) */}
      <motion.path
        d="M82 62 C102 50 110 56 108 70 C98 66 90 68 80 74 Z"
        fill="#8b5cf6"
        style={{ transformOrigin: '80px 68px' }}
        animate={{ rotate: [0, 16, 0] }}
        transition={{ duration: 0.9, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Queue */}
      <path d="M60 96 C70 104 78 100 80 92 C74 94 68 92 62 88 Z" fill="#16a34a" />

      {/* Corps */}
      <ellipse cx="60" cy="72" rx="26" ry="28" fill="#22c55e" />
      {/* Ventre */}
      <ellipse cx="60" cy="78" rx="15" ry="18" fill="#bbf7d0" />

      {/* Tête */}
      <circle cx="60" cy="44" r="27" fill="#22c55e" />
      {/* Petites cornes */}
      <path d="M46 22 L50 34 L42 32 Z" fill="#f59e0b" />
      <path d="M74 22 L70 34 L78 32 Z" fill="#f59e0b" />
      {/* Museau clair */}
      <ellipse cx="60" cy="52" rx="14" ry="10" fill="#bbf7d0" />

      {/* Joues roses */}
      <circle cx="44" cy="50" r="5" fill="#fca5a5" opacity="0.8" />
      <circle cx="76" cy="50" r="5" fill="#fca5a5" opacity="0.8" />

      {/* Yeux qui clignent */}
      <motion.g
        animate={{ scaleY: [1, 1, 0.1, 1, 1] }}
        transition={{ duration: 4, repeat: Infinity, times: [0, 0.92, 0.96, 1, 1], ease: 'easeInOut' }}
        style={{ transformOrigin: '60px 42px' }}
      >
        <circle cx="50" cy="42" r="6" fill="white" />
        <circle cx="70" cy="42" r="6" fill="white" />
        <circle cx="51" cy="43" r="3" fill="#1f2937" />
        <circle cx="71" cy="43" r="3" fill="#1f2937" />
        <circle cx="52.5" cy="41.5" r="1" fill="white" />
        <circle cx="72.5" cy="41.5" r="1" fill="white" />
      </motion.g>

      {/* Sourire */}
      <path d="M53 55 Q60 61 67 55" stroke="#15803d" strokeWidth="2.5" strokeLinecap="round" fill="none" />

      {/* Narines */}
      <circle cx="56" cy="52" r="1.3" fill="#15803d" />
      <circle cx="64" cy="52" r="1.3" fill="#15803d" />

      {/* Petite étincelle / flammèche qui apparaît */}
      <motion.g
        animate={{ opacity: [0, 1, 0], y: [0, -6, -12], scale: [0.6, 1, 0.5] }}
        transition={{ duration: 2.2, repeat: Infinity, repeatDelay: 1.6, ease: 'easeOut' }}
      >
        <path d="M60 60 l3 5 -3 3 -3 -3 z" fill="#fbbf24" />
      </motion.g>
    </motion.svg>
  );
}
