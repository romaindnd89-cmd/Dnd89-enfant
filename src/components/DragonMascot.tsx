import React from 'react';
import { motion } from 'motion/react';

/**
 * Flammèche : le petit dragon qui salue. Il flotte, penche la tête
 * et lève un peu les ailes comme s'il faisait coucou.
 */
export default function DragonMascot({ size = 64 }: { size?: number }) {
  return (
    <motion.img
      src="/art/dragon-front.png"
      alt=""
      aria-hidden="true"
      draggable={false}
      width={size}
      style={{ width: size, height: 'auto', transformOrigin: '50% 90%' }}
      className="select-none drop-shadow-md"
      animate={{ y: [0, -4, 0], rotate: [-4, 4, -4], scale: [1, 1.04, 1] }}
      transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut' }}
    />
  );
}
