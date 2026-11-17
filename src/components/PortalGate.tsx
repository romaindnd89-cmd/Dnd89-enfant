import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'motion/react';
import { WORLDS } from '../theme/worlds';
import FantasyScene from './FantasyScene';

/**
 * Écran d'entrée : un portail d'énergie tourbillonnante (rendu en temps réel
 * par un shader WebGL) au fond d'une grotte aux cristaux. En le franchissant, la caméra
 * plonge dedans, puis le monde apparaît derrière.
 */

const VERT = `
attribute vec2 a_pos;
void main() { gl_Position = vec4(a_pos, 0.0, 1.0); }
`;

const FRAG = `
precision highp float;
uniform vec2 u_res;
uniform float u_time;

float hash(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
float noise(vec2 p) {
  vec2 i = floor(p), f = fract(p);
  f = f * f * (3.0 - 2.0 * f);
  return mix(mix(hash(i), hash(i + vec2(1.0, 0.0)), f.x),
             mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), f.x), f.y);
}
float fbm(vec2 p) {
  float v = 0.0, a = 0.5;
  for (int i = 0; i < 5; i++) { v += a * noise(p); p = p * 2.02 + vec2(3.1, 1.7); a *= 0.5; }
  return v;
}

void main() {
  vec2 uv = (gl_FragCoord.xy - 0.5 * u_res) / min(u_res.x, u_res.y);
  float r = length(uv);
  float a = atan(uv.y, uv.x);
  float R = 0.36;

  // Tourbillon : l'angle se tord de plus en plus vers le centre
  float sw = a + 1.5 / (r + 0.22) + u_time * 0.30;
  vec2 q = vec2(cos(sw), sin(sw)) * (r * 3.2);
  float n = fbm(q * 1.5 + vec2(0.0, -u_time * 0.22));
  float n2 = fbm(q * 3.1 - u_time * 0.12 + n);

  vec3 deep = vec3(0.02, 0.02, 0.09);
  vec3 cyan = vec3(0.10, 0.70, 0.90);
  vec3 violet = vec3(0.52, 0.24, 0.95);
  vec3 gold = vec3(1.00, 0.86, 0.58);

  float inside = smoothstep(R, R - 0.025, r);
  vec3 col = mix(deep, violet, smoothstep(0.28, 0.78, n));
  col = mix(col, cyan, smoothstep(0.48, 0.92, n2) * 0.85);
  col += gold * exp(-r * r * 26.0) * 0.55;          // coeur lumineux
  col *= inside;

  // Anneau d'énergie qui vacille
  float flick = 0.7 + 0.3 * fbm(vec2(cos(a), sin(a)) * 2.4 + u_time * 0.35);
  float ring = exp(-pow((r - R) * 30.0, 2.0));
  col += mix(gold, cyan, 0.35) * ring * 0.95 * flick;

  // Halo extérieur
  float halo = exp(-max(r - R, 0.0) * 9.0) * (1.0 - inside);
  col += mix(violet, cyan, 0.3) * halo * 0.9;

  // L'image s'efface complètement avant le bord du canevas (pas de carré visible)
  float edge = smoothstep(0.5, 0.42, r);
  float alpha = clamp(inside + ring + halo * 0.8, 0.0, 1.0) * edge;
  gl_FragColor = vec4(col, alpha);
}
`;

function usePortalShader(canvasRef: React.RefObject<HTMLCanvasElement | null>) {
  const [supported, setSupported] = useState(true);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const gl = canvas.getContext('webgl', { premultipliedAlpha: false, alpha: true, antialias: true });
    if (!gl) {
      setSupported(false);
      return;
    }

    const compile = (type: number, src: string) => {
      const s = gl.createShader(type)!;
      gl.shaderSource(s, src);
      gl.compileShader(s);
      return gl.getShaderParameter(s, gl.COMPILE_STATUS) ? s : null;
    };
    const vs = compile(gl.VERTEX_SHADER, VERT);
    const fs = compile(gl.FRAGMENT_SHADER, FRAG);
    if (!vs || !fs) {
      setSupported(false);
      return;
    }
    const prog = gl.createProgram()!;
    gl.attachShader(prog, vs);
    gl.attachShader(prog, fs);
    gl.linkProgram(prog);
    if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) {
      setSupported(false);
      return;
    }
    gl.useProgram(prog);

    const buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]), gl.STATIC_DRAW);
    const loc = gl.getAttribLocation(prog, 'a_pos');
    gl.enableVertexAttribArray(loc);
    gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0);

    const uRes = gl.getUniformLocation(prog, 'u_res');
    const uTime = gl.getUniformLocation(prog, 'u_time');

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const size = Math.round(canvas.clientWidth * dpr);
      if (canvas.width !== size) {
        canvas.width = size;
        canvas.height = size;
      }
      gl.viewport(0, 0, canvas.width, canvas.height);
    };

    let raf = 0;
    const start = performance.now();
    const frame = () => {
      resize();
      gl.uniform2f(uRes, canvas.width, canvas.height);
      gl.uniform1f(uTime, (performance.now() - start) / 1000);
      gl.clearColor(0, 0, 0, 0);
      gl.clear(gl.COLOR_BUFFER_BIT);
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
      raf = requestAnimationFrame(frame);
    };
    frame();
    return () => cancelAnimationFrame(raf);
  }, [canvasRef]);

  return supported;
}

interface PortalGateProps {
  key?: string; // @types/react absent du projet : on déclare key explicitement
  onEnter: () => void;
}

export default function PortalGate({ onEnter }: PortalGateProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const supported = usePortalShader(canvasRef);
  const [entering, setEntering] = useState(false);

  const enter = () => {
    if (entering) return;
    setEntering(true);
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    window.setTimeout(onEnter, reduced ? 0 : 1250);
  };

  return (
    <motion.div
      className="fixed inset-0 z-[100] overflow-hidden bg-black"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.7 }}
    >
      {/* La grotte aux cristaux */}
      <motion.div
        className={`absolute inset-0 bg-gradient-to-b ${WORLDS.gate.fallback}`}
        animate={{ scale: entering ? 1.6 : 1 }}
        transition={{ duration: 1.3, ease: 'easeIn' }}
      >
        <FantasyScene world="gate" className="absolute inset-0 w-full h-full" />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-transparent to-black/55" />

      <div className="relative z-10 h-full flex flex-col items-center justify-center px-6 text-center">
        <motion.p
          className="font-display text-amber-200/80 tracking-[0.35em] text-xs sm:text-sm uppercase mb-3"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: entering ? 0 : 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Le portail des aventures
        </motion.p>
        <motion.h1
          className="font-display font-bold text-amber-50 text-3xl sm:text-5xl tracking-wide drop-shadow-[0_2px_18px_rgba(251,191,36,0.45)]"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: entering ? 0 : 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          Dnd89 <span className="text-amber-300">&</span> Dragons
        </motion.h1>

        {/* Le portail */}
        <motion.button
          onClick={enter}
          aria-label="Franchir le portail"
          className="relative my-6 sm:my-8 w-[min(78vw,54vh,420px)] aspect-square rounded-full focus:outline-none"
          initial={{ opacity: 0, scale: 0.6 }}
          animate={entering ? { scale: 9, opacity: 1 } : { opacity: 1, scale: 1 }}
          transition={entering ? { duration: 1.25, ease: [0.6, 0, 0.9, 0.4] } : { duration: 1.2, delay: 0.2, ease: 'easeOut' }}
          whileHover={entering ? undefined : { scale: 1.04 }}
        >
          {supported ? (
            <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
          ) : (
            <motion.div
              className="absolute inset-[10%] rounded-full"
              style={{
                background: 'conic-gradient(from 0deg, #0ea5e9, #7c3aed, #fde68a, #0ea5e9)',
                filter: 'blur(14px)',
              }}
              animate={{ rotate: 360 }}
              transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
            />
          )}

          {/* Anneaux de runes qui tournent */}
          <motion.svg
            viewBox="0 0 200 200"
            className="absolute inset-0 w-full h-full"
            animate={{ rotate: 360 }}
            transition={{ duration: 90, repeat: Infinity, ease: 'linear' }}
          >
            <circle cx="100" cy="100" r="88" fill="none" stroke="rgba(253,230,138,0.55)" strokeWidth="0.6" />
            <circle cx="100" cy="100" r="96" fill="none" stroke="rgba(253,230,138,0.25)" strokeWidth="0.4" />
            {Array.from({ length: 36 }).map((_, i) => (
              <line
                key={i}
                x1="100"
                y1={i % 3 === 0 ? 4 : 6}
                x2="100"
                y2="12"
                stroke="rgba(253,230,138,0.7)"
                strokeWidth={i % 3 === 0 ? 1 : 0.5}
                transform={`rotate(${i * 10} 100 100)`}
              />
            ))}
          </motion.svg>
        </motion.button>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: entering ? 0 : 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          <button
            onClick={enter}
            className="font-display tracking-[0.2em] uppercase text-sm sm:text-base text-amber-100 border border-amber-200/50 bg-black/30 backdrop-blur-sm px-7 py-3 rounded-full hover:bg-amber-200/15 hover:border-amber-200 transition-colors"
          >
            Franchir le portail
          </button>
          <p className="mt-4 text-slate-300/70 text-sm italic">Un autre monde vous attend de l'autre côté…</p>
        </motion.div>
      </div>

      {/* Éclair de lumière au passage */}
      <motion.div
        className="absolute inset-0 z-20 pointer-events-none bg-amber-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: entering ? [0, 0, 1] : 0 }}
        transition={{ duration: 1.25, times: [0, 0.55, 1] }}
      />
    </motion.div>
  );
}
