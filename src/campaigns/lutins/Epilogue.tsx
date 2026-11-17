import React from 'react';
import { ReadAloud, ActionBox, InfoBox } from '../../components/StoryBlocks';

export default function Epilogue() {
  return (
    <div className="space-y-8">
      <section id="epilogue">
        <h2 className="font-display text-4xl font-bold text-emerald-700 mb-6 border-b-4 border-emerald-200 pb-2 mt-16">
          ÉPILOGUE : LA GRANDE FÊTE
        </h2>

        <ReadAloud title="Pour terminer en beauté :">
          "Ce soir-là, le château de Chantefarce brille de toutes ses fenêtres. Dame Louche sert du gâteau, Maître Parchemin raconte des blagues que personne ne comprend, le chevalier Trois-Lutins danse en perdant ses morceaux. Quand vous repartez, les poches pleines et le ventre aussi, Grelot vous rattrape à la grille : « Revenez quand vous voulez ! On a déjà inventé de nouvelles farces. Et cette fois… on ne vous dira pas où sont les seaux de confettis ! »"
        </ReadAloud>

        <ActionBox title="Lancez 1D6 : quelle farce pour la prochaine fois ?">
          <ul className="list-none pl-0 space-y-2">
            <li><strong>1 →</strong> Les lutins ont repeint toutes les vaches du village en violet. Il faut retrouver le pot de peinture magique.</li>
            <li><strong>2 →</strong> Le roi Pirouette a perdu son rire. Sans lui, plus aucune farce ne fonctionne.</li>
            <li><strong>3 →</strong> Un dragon enrhumé s'est installé dans la cuisine de Dame Louche : il éternue des flammes sur les gâteaux.</li>
            <li><strong>4 →</strong> Le Grand Livre des Blagues s'est envolé par la fenêtre, direction la forêt.</li>
            <li><strong>5 →</strong> Un lutin d'un château voisin défie Chantefarce au concours de la meilleure farce.</li>
            <li><strong>6 →</strong> À vous de jouer : les enfants inventent la prochaine farce, et le MJ doit la déjouer.</li>
          </ul>
        </ActionBox>

        <InfoBox title="Les médailles de l'équipe (à remettre à voix haute)">
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>Le Coup de Main d'Or</strong> : pour celui ou celle qui a le plus aidé les autres.</li>
            <li><strong>La Grimace Royale</strong> : pour la grimace qui a fait rire le roi.</li>
            <li><strong>Le Cerveau en Chocolat</strong> : pour celui ou celle qui a trouvé une devinette.</li>
            <li><strong>Le Cœur de Lutin</strong> : pour celui ou celle qui a proposé de partager en premier.</li>
            <li><strong>Les Rois de la Farce</strong> : pour toute l'équipe, parce qu'on n'ouvre pas un coffre à trois serrures tout seul.</li>
          </ul>
          <p className="mt-2">Veillez à ce que chaque enfant reparte avec une médaille.</p>
        </InfoBox>

        <div className="mt-6 p-6 bg-gradient-to-r from-emerald-50 to-teal-50 border-2 border-emerald-200 rounded-2xl text-center">
          <p className="font-display text-xl font-bold text-emerald-700 mb-2">Merci d'avoir joué !</p>
          <p className="text-slate-600">
            Il ne reste plus qu'à partager les pièces en chocolat, les vraies.
          </p>
        </div>
      </section>
    </div>
  );
}
