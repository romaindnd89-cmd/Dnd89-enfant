import React from 'react';
import { ReadAloud, ActionBox, InfoBox } from '../../components/StoryBlocks';

export default function Epilogue() {
  return (
    <section id="epilogue">
      <h2 className="font-display text-4xl font-bold text-orange-700 mb-6 border-b-4 border-orange-200 pb-2 mt-16">
        ÉPILOGUE : LA FÊTE DES FLAMMES
      </h2>

      <ReadAloud title="Texte à lire à voix haute (pour terminer en beauté)">
        "Vous redescendez ensemble du Mont Braise, Braisillon sur vos épaules, le golem qui ferme la marche en craquant joyeusement. Sur la place de Fumerolles, tout le village vous attend : Mémé Tisane, Monsieur Mie-de-Pain avec sa moustache toute roussie, Lila qui serre son doudou, Bastien le forgeron, et même Grognon le troll, qui a mis son plus beau bonnet. Au milieu de la place, la Grande Torche attend, immense et éteinte."<br/><br/>
        "Braisillon prend une grande inspiration, regarde la foule, puis vous regarde tous les deux. Vous lui faites un grand sourire. Alors il souffle, et la torche s'embrase d'un seul coup, dorée, joyeuse, plus belle qu'elle ne l'a jamais été. La foule applaudit, et Cendrelle, la vieille mère dragon, descend du volcan pour poser un énorme museau tendre sur la tête de son petit. « Merci, mes petits héros. Vous lui avez appris qu'on peut avoir peur de soi... et que ça passe quand on a des amis. »"<br/><br/>
        "Cette nuit-là, on danse jusqu'à plus soif. Et Braisillon s'endort sur vos genoux, avec une petite flamme qui ronronne dans son nez."
      </ReadAloud>

      <ActionBox title="Lancez 1D6 : quelle sera votre prochaine aventure ?">
        <ul className="list-none pl-0 space-y-2">
          <li><strong>1 →</strong> 🥚 Un second œuf, tout petit, se met à trembler dans le temple.</li>
          <li><strong>2 →</strong> 🌋 Cendrelle veut apprendre à Braisillon à voler : il faut préparer un grand terrain d'entraînement.</li>
          <li><strong>3 →</strong> 🧁 Monsieur Mie-de-Pain veut un gâteau géant pour la fête, et il a besoin d'une plume de dragon.</li>
          <li><strong>4 →</strong> 🏰 Le roi voisin demande à voir le dragonneau. Il faut organiser un voyage.</li>
          <li><strong>5 →</strong> 🐾 Des petites traces d'un autre animal apparaissent au bord du Mont Braise.</li>
          <li><strong>6 →</strong> ⭐ À vous de choisir : les deux joueurs inventent la prochaine aventure avec le MJ.</li>
        </ul>
      </ActionBox>

      <InfoBox title="🏅 Les médailles des héros (à remettre à voix haute)">
        <ul className="list-disc pl-5 space-y-1">
          <li><strong>Cœur de Dragon</strong> : pour celui ou celle qui a rassuré Braisillon.</li>
          <li><strong>Coup de Main d'Or</strong> : pour avoir aidé l'autre héros à chaque épreuve.</li>
          <li><strong>Grande Malice</strong> : pour la meilleure idée de l'aventure.</li>
          <li><strong>Ami des Trolls et des Gelées</strong> : pour avoir préféré la gentillesse au combat.</li>
          <li><strong>Les Gardiens de la Flamme</strong> : pour tous les deux, parce qu'on n'allume pas une torche tout seul.</li>
        </ul>
        <p className="mt-2">Veille à ce que chaque joueur reparte avec au moins une médaille.</p>
      </InfoBox>

      <div className="mt-6 p-6 bg-gradient-to-r from-orange-50 to-rose-50 border-2 border-orange-200 rounded-2xl text-center">
        <p className="font-display text-xl font-bold text-orange-700 mb-2">Merci d'avoir joué ! 🔥</p>
        <p className="text-slate-600">
          N'oubliez pas de féliciter vos deux héros : ils ont été courageux, malins et pleins de cœur. C'est exactement ce qu'il faut pour être de vrais Gardiens de la Flamme.
        </p>
      </div>
    </section>
  );
}
