import React from 'react';
import { ReadAloud, ActionBox, InfoBox } from '../../components/StoryBlocks';

export default function Epilogue() {
  return (
    <section id="epilogue">
      <h2 className="font-display text-4xl font-bold text-fuchsia-700 mb-6 border-b-4 border-fuchsia-200 pb-2 mt-16">
        ÉPILOGUE : LE ROYAUME QUI RIT
      </h2>

      <ReadAloud title="Texte à lire à voix haute (pour terminer en beauté)">
        "Le lendemain, sur la façade du château, on pose une nouvelle pancarte dorée : « AGENCE DÉTECTIVE (ET OIE) : ENQUÊTES, MYSTÈRES ET BLAGUES. » Au-dessus de la boulangerie, ton bureau a un nouveau fauteuil, une nouvelle vitre et un nouveau coussin pour l'oie. Dehors, le royaume rit comme jamais, et chaque habitant, du roi au dernier balayeur, a une histoire à raconter sur le jour où le Chancelier a gloussé. Quelqu'un frappe à ta porte. Tu soupires, tu souris, tu enfiles ton manteau. Il y a une nouvelle affaire à résoudre."
      </ReadAloud>

      <h3 className="font-display text-2xl font-bold text-slate-700 mt-8 mb-4">Le lendemain : ce qui est devenu de chacun</h3>
      <InfoBox title="Le sort des personnages (à lire à voix haute ou à adapter)">
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Le roi Gaspard :</strong> il décrète une semaine de fête, et un nouveau règlement : « Un rire par jour, ou une soupe. » Il a toujours une baignoire dans la salle du trône.</li>
          <li><strong>Le Baron Cornichon :</strong> il devient le conseiller en chef du roi (le poste de Chancelier est libre !), et ouvre son château au public chaque dimanche : portraits, bibliothèque qui mord et chien Brutus compris.</li>
          <li><strong>Gribouille :</strong> il est devenu bouffon royal en formation. Il ne rit pas encore comme les autres, mais il rit.</li>
          <li><strong>Gaston :</strong> si elle a été pardonnée, elle est promue Détective Royal en second et possède enfin son champ de maïs doré. Sinon, elle ouvre une école de détectives pour oies, et la liste d'attente est longue.</li>
          <li><strong>Les brigands poètes :</strong> ils ouvrent le Café-Poésie « Les Rimes en Fuite ».</li>
          <li><strong>Les canards syndiqués :</strong> ils obtiennent du pain avec du beurre et un chapeau chacun.</li>
          <li><strong>Madame Zut :</strong> elle prédit un grand avenir au héros. Elle n'a pas tort.</li>
        </ul>
      </InfoBox>

      <ActionBox title="Lance 1D6 : quelle sera ta prochaine enquête ?">
        <ul className="list-none pl-0 space-y-2">
          <li><strong>1 →</strong> 🧀 Le Grand Fromage du Roi a disparu. Il sentait vraiment très fort. Il a dû partir tout seul.</li>
          <li><strong>2 →</strong> 🎭 Une troupe de comédiens ambulants jure avoir vu un fantôme dans le théâtre. Il a l'air de bien s'amuser.</li>
          <li><strong>3 →</strong> 🪞 Le Baron Cornichon retrouve un miroir qui répond avec des insultes. Il veut savoir qui l'a ensorcelé.</li>
          <li><strong>4 →</strong> 🦆 Une armée de canards a pris le contrôle de la mare du village. Ils ont des revendications.</li>
          <li><strong>5 →</strong> 👑 Une deuxième Couronne, beaucoup plus petite, est retrouvée dans un tas de foin. À qui est-elle ?</li>
          <li><strong>6 →</strong> ⭐ À toi de choisir : invente avec le MJ la prochaine enquête, et prépare un piège pour le MJ.</li>
        </ul>
      </ActionBox>

      <InfoBox title="🏅 Les médailles du détective (à remettre à voix haute)">
        <ul className="list-disc pl-5 space-y-1">
          <li><strong>Nez de Fin Limier</strong> : tu as trouvé au moins 4 indices avant la révélation du chapitre 6.</li>
          <li><strong>Maître du Baratin</strong> : tu as battu les brigands à leur propre jeu de rimes.</li>
          <li><strong>Cœur d'Or</strong> : tu as pardonné à Gaston, ou tu l'as écoutée.</li>
          <li><strong>Roi du Rire</strong> : tu as fait rire pour briser au moins un anneau du Chancelier.</li>
          <li><strong>Panache Éternel</strong> : tu as fini l'aventure avec 3 points de Panache ou plus.</li>
          <li><strong>Détective Royal</strong> : tu as sauvé la Couronne et le royaume. Bravo ! 🕵️</li>
        </ul>
        <p className="mt-2">Compte les médailles obtenues : une par critère rempli, et félicite l'enfant pour chacune.</p>
      </InfoBox>

      <div className="mt-6 p-6 bg-gradient-to-r from-yellow-50 to-fuchsia-50 border-2 border-fuchsia-200 rounded-2xl text-center">
        <p className="font-display text-xl font-bold text-fuchsia-700 mb-2">Merci d'avoir joué ! 👑</p>
        <p className="text-slate-600">
          N'oublie pas de féliciter ton détective : il a résolu l'enquête, supporté la trahison, et fait rire tout un royaume. C'est exactement ce qu'il faut pour être un vrai héros.
        </p>
      </div>
    </section>
  );
}
