import React from 'react';
import { ReadAloud, ActionBox, InfoBox } from '../../components/StoryBlocks';

export default function Epilogue() {
  return (
    <section id="epilogue">
      <h2 className="font-display text-4xl font-bold text-cyan-700 mb-6 border-b-4 border-cyan-200 pb-2 mt-16">
        ÉPILOGUE : LE PIRATE QUI RENDIT L'ŒUF
      </h2>

      <ReadAloud title="Texte à lire à voix haute (pour terminer en beauté)">
        "Le lendemain, l'Albatros Rigolo, réparé avec la Perle de Marée, flotte au pied de l'île. Barbe-Rose te fait un grand salut de chapeau : « La prochaine fois, mousse, je te défie à un concours de rires. » « Je ne perds jamais ! » crie Miette. Une petite tortue te fait coucou depuis le dos de sa maman, et l'île continue sa route en ronflant doucement."
      </ReadAloud>

      <ActionBox title="Lance 1D6 : quelle sera ta prochaine aventure ?">
        <ul className="list-none pl-0 space-y-2">
          <li><strong>1 →</strong> 🏝️ Une autre île bouge : elle est en fait une baleine qui a le hoquet.</li>
          <li><strong>2 →</strong> 🦜 Capitaine Miette a perdu sa voix : il faut retrouver un perroquet capable de la lui rendre.</li>
          <li><strong>3 →</strong> 🐙 Un poulpe géant a volé toutes les chaussettes du navire.</li>
          <li><strong>4 →</strong> 🗺️ Barbe-Rose t'envoie une carte pour un trésor... qui est une pizza.</li>
          <li><strong>5 →</strong> 🌊 La Grande Tortue demande ton aide pour un bébé baleine perdu.</li>
          <li><strong>6 →</strong> ⭐ À toi de choisir : invente la prochaine aventure avec le MJ.</li>
        </ul>
      </ActionBox>

      <InfoBox title="🏅 Les médailles du mousse (à remettre à voix haute)">
        <ul className="list-disc pl-5 space-y-1">
          <li><strong>Œil de Lynx</strong> : tu as compris que l'île respirait avant la révélation.</li>
          <li><strong>Cœur de Pirate</strong> : tu as négocié avec Barbe-Rose au lieu de te battre.</li>
          <li><strong>Roi des Crabes</strong> : tu as battu (ou apaisé) les crabes pirates.</li>
          <li><strong>Ami de la Tortue</strong> : tu as rendu l'œuf sans hésiter.</li>
          <li><strong>Capitaine de l'Île</strong> : tu as terminé l'aventure en 30 minutes. Bravo ! 🏴‍☠️</li>
        </ul>
      </InfoBox>

      <div className="mt-6 p-6 bg-gradient-to-r from-cyan-50 to-emerald-50 border-2 border-cyan-200 rounded-2xl text-center">
        <p className="font-display text-xl font-bold text-cyan-700 mb-2">Merci d'avoir joué ! 🐢</p>
        <p className="text-slate-600">
          Une histoire courte, un grand cœur. Félicite ton mousse : il a découvert, ruse, négocié et sauvé un bébé. C'est exactement ce qu'il faut pour être un bon capitaine.
        </p>
      </div>
    </section>
  );
}
