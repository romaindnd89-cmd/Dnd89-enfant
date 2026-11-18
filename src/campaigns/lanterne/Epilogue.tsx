import React from 'react';
import { ReadAloud, ActionBox, InfoBox } from '../../components/StoryBlocks';

export default function Epilogue() {
  return (
    <section id="epilogue">
      <h2 className="font-display text-4xl font-bold text-amber-700 mb-6 border-b-4 border-amber-200 pb-2 mt-16">
        ÉPILOGUE : CE QUE LA LUMIÈRE NOUS APPREND
      </h2>

      <ReadAloud title="Texte à lire à voix haute (quelques jours plus tard)">
        "Le printemps arrive dans la Vallée des Mille Lanternes. Les gobelins ont construit de vraies maisons au bord du Marais, avec des fenêtres, des cheminées, et un petit jardin. Gribouille aide le boulanger à porter les sacs de farine, et Mousse raconte des histoires aux enfants du village sur la place, le soir. Madame Ronce a transformé sa boutique en infirmerie. Le Brigadier Tonnerre s'est installé près de la cloche, et s'est mis à tricoter des moufles, en jurant que ce n'est pas du tout par gentillesse. Pip, devenue apprentie Gardienne, allume les lanternes chaque soir avec la tienne, en chantonnant. Et le petit gobelin porte, tous les jours, une moufle rouge."<br/><br/>
        "Quand le soir tombe, tu montes sur la colline et tu poses ta lanterne au bord de la Tour. Elle brille avec toutes les autres. Et tout au fond de sa flamme, si tu regardes bien, tu peux voir une petite lueur en plus, juste une, qui danse pour toi."
      </ReadAloud>

      <InfoBox title="💛 Les quatre morales de l'histoire (pour en parler avec l'enfant)">
        <ul className="list-disc pl-5 space-y-3">
          <li><strong>Ne juge pas avant de comprendre.</strong> Les gobelins n'étaient pas des voleurs : ils avaient froid et personne ne les avait aidés. <em>Question : « Est-ce qu'il t'est arrivé de croire quelqu'un coupable, et de te tromper ? »</em></li>
          <li><strong>On n'a pas à porter seul ce qui est trop lourd.</strong> Bernardin a caché sa maladie pour protéger son apprenti, et cela l'a rendu plus seul. <em>Question : « Quand quelque chose te fait peur, à qui peux-tu en parler ? »</em></li>
          <li><strong>La lumière partagée ne diminue pas.</strong> La Flamme n'a brûlé fort que quand tout le monde a donné une étincelle. <em>Question : « Quelle petite chose peux-tu partager aujourd'hui ? »</em></li>
          <li><strong>Dire au revoir fait partie de l'amour.</strong> Bernardin n'a pas disparu : il vit dans la flamme, dans les leçons, dans les lanternes. <em>Question : « Y a-t-il quelqu'un que tu aimes et dont tu gardes une part en toi ? »</em></li>
        </ul>
      </InfoBox>

      <InfoBox title="🤗 Pour les parents : en parler après la partie">
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Laisse un moment de calme</strong> avant de ranger les dés. Un câlin, un verre d'eau, un silence : c'est bien.</li>
          <li><strong>Pas besoin de tout expliquer.</strong> Si l'enfant pose une question sur la mort, réponds simplement, avec tes mots et tes croyances. « Je ne sais pas » est une réponse honnête.</li>
          <li><strong>Si l'enfant a pleuré,</strong> dis-lui que c'est normal : « C'est parce que tu as aimé Bernardin. » Les larmes d'une histoire sont une façon de s'entraîner à ressentir, en sécurité.</li>
          <li><strong>S'il a perdu quelqu'un récemment,</strong> garde cette histoire pour plus tard, ou lis-la avec lui, sans le presser.</li>
          <li><strong>Propose de dessiner la lanterne de Bernardin,</strong> ou d'allumer une vraie bougie ensemble, un soir, pour quelqu'un qu'on aime.</li>
        </ul>
      </InfoBox>

      <ActionBox title="Lance 1D6 : quelle sera ta prochaine mission de Gardien ?">
        <ul className="list-none pl-0 space-y-2">
          <li><strong>1 →</strong> 🏮 Une lanterne de la Montagne reste éteinte : qui s'est perdu dans la neige ?</li>
          <li><strong>2 →</strong> 🦉 Hulotte a trouvé la suite de la page déchirée du Livre des Gardiens… et elle dit autre chose.</li>
          <li><strong>3 →</strong> 🐺 Le Loup de Givre est revenu : il a faim de chaleur, et il a ramené des amis.</li>
          <li><strong>4 →</strong> 🌫️ Une vallée voisine n'a jamais eu de lanternes : allez les lui apporter.</li>
          <li><strong>5 →</strong> 🪔 La luciole veut te montrer un endroit secret au fond du Puits.</li>
          <li><strong>6 →</strong> ⭐ À toi de choisir : invente la prochaine histoire avec le MJ.</li>
        </ul>
      </ActionBox>

      <InfoBox title="🏅 Les médailles du Gardien (à remettre à voix haute)">
        <ul className="list-disc pl-5 space-y-1">
          <li><strong>Esprit d'enquête</strong> : tu as trouvé la vraie raison des lanternes éteintes.</li>
          <li><strong>Œil de Hibou</strong> : tu as reconnu la silhouette avant qu'on te le dise.</li>
          <li><strong>Cœur de Lanterne</strong> : tu as défendu les gobelins sans te battre.</li>
          <li><strong>Ami des Loups</strong> : tu as tendu la main à un Loup de Givre.</li>
          <li><strong>Gardien des Lanternes</strong> : tu as rallumé la Flamme avec tout le village. Bravo ! 🏮</li>
        </ul>
      </InfoBox>

      <div className="mt-6 p-6 bg-gradient-to-r from-amber-50 to-indigo-50 border-2 border-amber-200 rounded-2xl text-center">
        <p className="font-display text-xl font-bold text-amber-700 mb-2">Merci d'avoir joué ! 🏮</p>
        <p className="text-slate-600">
          Une histoire douce et triste, qui parle de partager sa lumière et de dire au revoir. Félicite ton Gardien : il a enquêté, pardonné, demandé de l'aide, et su rester présent quand c'était difficile.
        </p>
      </div>
    </section>
  );
}
