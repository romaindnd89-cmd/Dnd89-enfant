import React from 'react';
import { ReadAloud, ActionBox, InfoBox } from '../../components/StoryBlocks';

export default function Part4() {
  return (
    <div className="space-y-12">
      {/* INTERACTION DE TRANSITION */}
      <section id="interaction-gribouille">
        <h2 className="font-display text-3xl font-bold text-slate-800 mb-6 border-b-2 border-slate-200 pb-2 mt-12 flex items-center gap-2">
          <span className="text-2xl">🍃</span> INTERACTION : LE CADEAU DE GRIBOUILLE
        </h2>
        <p className="mb-4 text-slate-700">
          Avant que tu ne déploies tes ailes pour quitter la Forteresse redevenue vivante, Gribouille le lutin s'approche de toi en trottinant. Il ne tremble plus. Il fouille dans sa sacoche en toile et en sort un petit objet qui brille d'une lueur azurée.
        </p>

        <h3 className="font-display text-2xl font-bold text-slate-700 mt-8 mb-4">
          La Narration :
        </h3>
        <ReadAloud title="Texte à lire à voix haute :">
          "Gribouille s'arrête devant tes griffes dorées. Il a l'air tout petit face à toi, mais ses yeux brillent de gratitude. 'Attends, Chevalier des Écailles !' murmure-t-il. 'L'Éclat de Soleil appartient aux tiens, c'est vrai. Mais sans toi, l'Ombre m'aurait dévoré. Tiens, c'est une Clochette des Brumes Douces. Si jamais tu te perds dans le brouillard, agite-la, et le vent te montrera toujours le chemin de ta maison.'"
        </ReadAloud>

        <ActionBox title="L'Objet Magique">
          <ul className="list-disc pl-5 space-y-2">
            <li>Tu ajoutes la <strong>Clochette de Gribouille</strong> à ton inventaire. Elle te permet de réussir automatiquement un test de survie ou de navigation dans la brume une fois par aventure.</li>
          </ul>
        </ActionBox>
      </section>

      {/* CHAPITRE 10 */}
      <section id="chap10">
        <h2 className="font-display text-3xl font-bold text-slate-800 mb-6 border-b-2 border-slate-200 pb-2 mt-12 flex items-center gap-2">
          <span className="text-2xl">🌅</span> CHAPITRE 10 : LE RETOUR TRIOMPHAL ET L'AUBE ÉTERNELLE
        </h2>

        <h3 className="font-display text-2xl font-bold text-slate-700 mt-8 mb-4">
          La Narration : Le Vol du Retour
        </h3>
        <ReadAloud title="Texte à lire à voix haute :">
          "Tu serres l'Éclat de Soleil contre ton poitrail, là où tes écailles sont les plus chaudes. En t'envolant de la Forteresse, tu vois un spectacle magnifique : derrière toi, la forêt noire s'illumine. Les ombres que tu as libérées retournent vers leurs propriétaires dans un grand ballet de silhouettes dansantes.<br/><br/>
          Le trajet vers les Pics d'Argent, qui t'avait semblé si long et périlleux, te paraît maintenant facile. Tu voles avec une force nouvelle, porté par les courants d'air que Zéphyr, l'esprit du vent, dirige pour t'aider. Tu n'es plus le petit dragonneau maladroit du premier jour ; tes ailes battent avec la certitude d'un protecteur."
        </ReadAloud>

        <h3 className="font-display text-2xl font-bold text-slate-700 mt-8 mb-4 flex items-center gap-2">
          <span className="text-2xl">🏰</span> Le Retour à la Citadelle
        </h3>
        <p className="mb-4 text-slate-700">
          Alors que tu approches du sommet, tu vois des centaines de dragons alignés sur les remparts de glace. Ils ne crachent pas de feu, ils chantent. Un chant grave et vibrant qui fait résonner la montagne tout entière.
        </p>

        <h3 className="font-display text-2xl font-bold text-slate-700 mt-8 mb-4">
          La Scène de Fin :
        </h3>
        <ReadAloud title="Texte à lire à voix haute :">
          "Tu te poses sur le balcon principal. Vieux-Barbe est là, debout, son bâton de cristal à la main. Il s'incline devant toi. Tu déposes l'Éclat de Soleil sur son piédestal d'or.<br/><br/>
          Instantanément, une onde de chaleur dorée parcourt toute la Citadelle. Le givre noir s'évapore. Dans la nurserie, un craquement se fait entendre... puis un autre. Les œufs commencent à éclore ! Des dizaines de petits dragonneaux sortent la tête, et grâce à toi, leur premier regard se pose sur un monde baigné de soleil et de fleurs de printemps."
        </ReadAloud>
      </section>

      {/* ÉPILOGUE */}
      <section id="epilogue">
        <h2 className="font-display text-3xl font-bold text-slate-800 mb-6 border-b-2 border-slate-200 pb-2 mt-12 flex items-center gap-2">
          <span className="text-2xl">🎲</span> ÉPILOGUE : LE GRADE DE GRAND GARDIEN
        </h2>
        <p className="mb-4 text-slate-700">
          Vieux-Barbe s'approche de toi et pose une patte lourde et amicale sur ton épaule.
        </p>

        <ActionBox title="Le Cadeau final du MJ">
          <ul className="list-disc pl-5 space-y-2">
            <li>"Pour ta bravoure, ta sagesse face à l'énigme et ta compassion envers le lutin, tu es nommé <strong>Grand Gardien de l'Aube</strong>. Ton nom sera gravé dans les murs de la Citadelle."</li>
          </ul>
        </ActionBox>

        <div className="mt-8 p-8 bg-gradient-to-br from-amber-50 to-orange-50 border-2 border-amber-200 rounded-3xl">
          <h3 className="font-display text-2xl font-bold text-amber-900 mb-6 text-center">
            Statistiques finales de ton héros :
          </h3>
          <ul className="list-disc pl-5 space-y-4 text-amber-800 text-lg max-w-2xl mx-auto">
            <li><strong>Niveau :</strong> Tu passes au <strong>Niveau 2 !</strong></li>
            <li><strong>Nouvelle Capacité :</strong> <em>Rugissement de l'Aube</em>. Tu peux maintenant encourager tes amis, leur donnant un bonus de <strong>+2</strong> à leurs prochains jets de dés.</li>
          </ul>
          
          <div className="mt-8 text-center">
            <p className="text-xl font-bold text-amber-900">
              Félicitations, jeune dragon ! Tu as sauvé le printemps et ramené la lumière. Ton histoire devient une légende que les mères dragons raconteront à leurs petits pendant des siècles.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
