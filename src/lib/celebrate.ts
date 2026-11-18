import confetti from 'canvas-confetti';

const COLORS = ['#f59e0b', '#22c55e', '#6366f1', '#ec4899', '#38bdf8', '#fbbf24'];

/** Une grande pluie de confettis festive (plusieurs salves). */
export function bigCelebration() {
  const end = Date.now() + 1800;

  // Salves depuis les deux coins bas
  (function frame() {
    confetti({ particleCount: 6, angle: 60, spread: 70, origin: { x: 0, y: 0.9 }, colors: COLORS, zIndex: 100 });
    confetti({ particleCount: 6, angle: 120, spread: 70, origin: { x: 1, y: 0.9 }, colors: COLORS, zIndex: 100 });
    if (Date.now() < end) requestAnimationFrame(frame);
  })();

  // Grosse explosion centrale
  confetti({ particleCount: 140, spread: 100, startVelocity: 45, origin: { y: 0.6 }, colors: COLORS, zIndex: 100 });
  setTimeout(() => {
    confetti({ particleCount: 90, spread: 120, startVelocity: 35, scalar: 1.2, origin: { y: 0.5 }, colors: COLORS, zIndex: 100 });
  }, 350);
}

/** Petite salve rapide (par ex. quand on coche un chapitre). */
export function smallPop(x = 0.5, y = 0.5) {
  confetti({ particleCount: 36, spread: 60, startVelocity: 28, origin: { x, y }, colors: COLORS, zIndex: 100, scalar: 0.9 });
}
