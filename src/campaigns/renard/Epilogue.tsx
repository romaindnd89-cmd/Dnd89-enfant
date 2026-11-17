import React from 'react';
import { ReadAloud, ActionBox, InfoBox } from '../../components/StoryBlocks';
import { Chapter } from '../../components/CampaignLayout';

export default function Epilogue() {
  return (
    <div className="space-y-8">
      <section>
        <Chapter id="epilogue" emoji="🎲" title="ÉPILOGUE : ET APRÈS ?" />

        <ReadAloud title="Pour terminer en beauté :">
          "L'hiver est passé, tout doux et tout blanc. Au printemps, Grisefeuille est plus belle que jamais, et personne n'a oublié personne. Mais une forêt pleine de mémoire, c'est aussi une forêt pleine de nouvelles histoires qui t'attendent…"
        </ReadAloud>

        <ActionBox title="Lance 1D6 : quelle sera ta prochaine aventure ?">
          <p className="mb-3">Pour savoir ce qui arrive ensuite dans la forêt, lance un dé à 6 faces :</p>
          <ul className="list-none pl-0 space-y-2">
            <li><strong>1 →</strong> 🍯 Les abeilles ont perdu la recette du miel doré. Sauras-tu la retrouver ?</li>
            <li><strong>2 →</strong> 🦉 Un hibou voyageur apporte une carte vers une forêt voisine, elle aussi en danger.</li>
            <li><strong>3 →</strong> ❄️ Grisaille veut organiser la première « Fête des Souvenirs ». Il faut tout préparer !</li>
            <li><strong>4 →</strong> 🐾 De drôles d'empreintes apparaissent près du ruisseau. Un nouvel ami… ou un nouveau mystère ?</li>
            <li><strong>5 →</strong> 🌰 Un quatrième Gland, inconnu, se met à briller dans les racines du Grand Chêne.</li>
            <li><strong>6 →</strong> ⭐ Tu choisis ! Invente avec le MJ la prochaine quête du petit renard.</li>
          </ul>
        </ActionBox>

        <InfoBox title="🏅 Les médailles du héros (à cocher)">
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>Cœur d'Or</strong> — tu as choisi l'amitié plutôt que la bagarre avec Grisaille.</li>
            <li><strong>Grand Malin</strong> — tu as résolu l'énigme de Croâ tout seul.</li>
            <li><strong>Oreille Musicienne</strong> — tu as réussi la Chanson de la Grotte sans te tromper.</li>
            <li><strong>Ami des Petits</strong> — tu as aidé le village des écureuils ET fait rire Piquillon.</li>
            <li><strong>Sauveur de Grisefeuille</strong> — tu as rapporté les 3 Glands d'Or à temps. Bravo, grand héros ! 🦊</li>
          </ul>
        </InfoBox>

        <div className="mt-6 p-6 bg-gradient-to-r from-orange-50 to-amber-50 border-2 border-orange-200 rounded-2xl text-center">
          <p className="font-display text-xl font-bold text-orange-700 mb-2">Merci d'avoir joué ! 🍂</p>
          <p className="text-slate-600">
            N'oublie pas de féliciter ton petit héros : il a été courageux, malin et plein de cœur. C'est exactement ce qu'il faut pour être un vrai maître des souvenirs.
          </p>
        </div>
      </section>
    </div>
  );
}
