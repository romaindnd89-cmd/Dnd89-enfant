import React from 'react';
import { ReadAloud, CombatBox, ActionBox, InfoBox } from '../../components/StoryBlocks';

export default function Chapitre3() {
  return (
    <section id="chap3">
      <h2 className="font-display text-4xl font-bold text-amber-700 mb-6 border-b-4 border-amber-200 pb-2 mt-16">
        ACTE 3 : LE TRÉSOR QUI RESPIRE
      </h2>
      <p className="text-slate-500 font-medium mb-8">⏱️ Durée : environ 10 minutes<br/>Lieu : La grotte au cœur de l'île, puis la plage<br/>Ambiance : Le grand final : un duel rigolo, un rebondissement magique et une belle fin.</p>

      <InfoBox title="Synopsis de l'Acte pour le Maître du Jeu">
        <p>Dans la grotte repose un <strong>œuf géant</strong>, grand comme un tonneau. Barbe-Rose veut le prendre pour le vendre, le héros veut le protéger : <strong>duel final</strong>. Puis <strong>le grand rebondissement</strong> : l'île tremble, la montagne se lève, et le héros comprend que <strong>l'île est une tortue géante</strong>, la Grande Tortue Écaille, qui cherche son œuf depuis cent ans. La fin dépend d'un choix simple : <strong>rendre l'œuf</strong>. <strong>Raccourci (5 minutes gagnées) :</strong> remplace le duel par la négociation de l'option B.</p>
      </InfoBox>

      <h3 className="font-display text-2xl font-bold text-slate-700 mt-8 mb-4">SCÈNE 1 : L'ŒUF DANS LA GROTTE (Exploration et Roleplay)</h3>
      <ReadAloud title="Texte à lire à voix haute">
        "Le sol est doux comme du velours, les murs tièdes, et une lueur dorée vient du fond. Sur un nid de mousse repose un œuf immense, couleur de perle, qui bat doucement comme un cœur : boum... boum... Miette murmure, pour une fois : « C'est pas un trésor de pirate. » Derrière toi, un cri : « HA ! JE LE SAVAIS ! » Barbe-Rose et ses matelots déboulent. Elle brandit sa louche d'argent : « Cet œuf vaut cent mille pièces d'or ! Écarte-toi, mousse ! » Le sol tremble plus fort, comme si l'île retenait son souffle. Que fais-tu ?"
      </ReadAloud>

      <ActionBox title="Options d'Exploration et Mécaniques (Bac à sable)">
        <h4 className="font-bold text-lg mb-2">1. ⭐ Examiner l'œuf (Test de MALICE - DD 10)</h4>
        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li><strong>Réussite :</strong> il comprend que l'œuf est vivant, qu'il est tiède, et que quelqu'un est en train de le chercher : le nid est vieux, abandonné, vide depuis très longtemps. <strong>Indice :</strong> un bébé dedans bouge.</li>
          <li><strong>Échec :</strong> il voit un bel œuf, c'est tout.</li>
        </ul>

        <p className="italic">Si le héros colle l'oreille à l'œuf, il entend un petit « tic... tic... » : un bébé, dedans, qui demande sa maman. (Gagne un Coup de Chance.)</p>
      </ActionBox>

      <ActionBox title="L'Arbre de Dialogue et les Résolutions">
        <h4 className="font-bold text-lg mb-2">Option A : Se battre (voir la boîte de combat)</h4>
        <p className="mb-6">Barbe-Rose attaque, avec une louche et beaucoup de théâtre.</p>

        <h4 className="font-bold text-lg mb-2">Option B : ⭐ Négocier (raccourci de 5 minutes ; Test de CŒUR - DD 12)</h4>
        <ul className="list-disc pl-5 space-y-2">
          <li>Le héros explique que l'œuf est un bébé, qu'il bouge, que sa maman le cherche. Si l'enfant montre l'œuf à Grumeau et Pétoche, <strong>+2 au jet</strong> (ils sont émus).</li>
          <li><strong>Réussite :</strong> Barbe-Rose hésite, puis baisse la louche, en larmes : « Je voulais juste réparer mon bateau... » Passe directement à la <strong>Scène 2</strong>.</li>
          <li><strong>Échec :</strong> elle attaque quand même : passe au combat.</li>
        </ul>
      </ActionBox>

      <CombatBox title="Mécaniques de Combat (Le duel contre Barbe-Rose)">
        <p className="mb-2"><strong>Rappel :</strong> D20 + talent pour toucher, 1D6 de dégâts. Quand Barbe-Rose attaque, le MJ lance un D20 : à 11 ou plus, elle touche le mousse.</p>
        <h4 className="font-bold text-lg mb-2">Les Ennemis : Barbe-Rose, Grumeau et Pétoche</h4>
        <ul className="list-disc pl-5 space-y-1 mb-4">
          <li><strong>Barbe-Rose :</strong> 12 PV, CA 12. Attaque (Coup de louche) : touche à 11 ou plus, 1D6 de dégâts. Chaque fois qu'elle est touchée, sa barbe de papier se décolle un peu.</li>
          <li><strong>Grumeau et Pétoche :</strong> 4 PV chacun, CA 10. Attaque (Coup de pied peureux) : touche à 11 ou plus, 1D4. Ils attaquent un tour sur deux, parce qu'ils hésitent.</li>
        </ul>
        <h4 className="font-bold text-lg mb-2">Tactique et Environnement (Le rôle du MJ) :</h4>
        <ul className="list-disc pl-5 space-y-3">
          <li><strong>Option A - Coup de Sabre :</strong> D20 + COURAGE (+3), 1D6.</li>
          <li><strong>Option B - Sa barbe :</strong> si le héros a touché Barbe-Rose, il arrache la fausse barbe : Barbe-Rose lâche un cri et perd son tour.</li>
          <li><strong>Option C - Les matelots :</strong> « Vous aussi, vous trouvez ça injuste ? » Grumeau et Pétoche s'asseyent par terre, honteux.</li>
          <li><strong>Option D - Miette (une fois) :</strong> il hurle « LA GRANDE VAGUE ARRIVE ! » : Barbe-Rose se retourne, et le héros gagne un tour.</li>
          <li><strong>Si Barbe-Rose est alliée (acte 2) :</strong> elle commence à 6 PV et peut abandonner à tout moment .</li>
        </ul>
        <p className="italic mt-3">À 0 PV, Barbe-Rose s'assoit, la barbe de travers : « D'accord, d'accord, je me rends. » Si le héros tombe à 0 PV : KO comique, il se réveille avec 4 PV dans un hamac, et le combat reprend.</p>
      </CombatBox>

      <h3 className="font-display text-2xl font-bold text-slate-700 mt-8 mb-4">SCÈNE 2 : L'ÎLE SE RÉVEILLE (Rebondissement)</h3>
      <ReadAloud title="Texte à lire à voix haute">
        "BOUM ! Le sol se met à bouger vraiment : la grotte se déforme, le plafond s'incline. « Un tremblement de terre ! » hurle Barbe-Rose. Toi, tu as compris : les ronflements, le sol tiède, la carte... Tu sors en courant. La montagne bouge. Une immense tête sort de la jungle, ridée, douce, avec deux yeux couleur de mer. Une voix lente, venue des vagues, murmure : « Mon œuf... Qui a mon œuf ? » L'île est une tortue géante, et elle le cherche depuis cent ans."
      </ReadAloud>

      <InfoBox title="Profil de Grande Tortue Écaille">
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Qui elle est :</strong> l'île elle-même. Une tortue géante, âgée de mille ans, qui dort à la surface de la mer. Un jour, il y a cent ans, elle a perdu son œuf dans un orage. Elle le cherche depuis.</li>
          <li><strong>Voix :</strong> très grave, très lente, très douce. Chaque phrase dure un ronflement.</li>
          <li><strong>Caractère :</strong> tendre, pas du tout méchante. Elle ne veut que son bébé. Elle remercie ceux qui l'aident.</li>
        </ul>
      </InfoBox>

      <ActionBox title="L'Arbre de Dialogue et la Résolution finale">
        <h4 className="font-bold text-lg mb-2">⭐ Rendre l'œuf à la Grande Tortue (aucun jet, juste du cœur)</h4>
        <p className="mb-4">Le héros (avec ou sans l'aide de Barbe-Rose) porte l'œuf doucement jusqu'à la tête de la tortue. Elle le prend avec une grande patte lente, le serre contre son cœur. L'œuf tic-tac, puis fait CRAC !</p>
        <p className="mb-2"><strong>Bonus de gentillesse :</strong> si le héros parle à l'œuf, ou à la tortue, avec douceur, il gagne <strong>un Coup de Chance</strong> pour le futur. Si Barbe-Rose et ses matelots aident, ils se font pardonner.</p>
        <p><strong>Si l'enfant veut garder l'œuf :</strong> Miette soupire : « Capitaine, un œuf, ça coûte cher en biscuits. » Laisse-le décider, puis fais gentiment remarquer qu'il y a une maman qui pleure.</p>
      </ActionBox>

      <ReadAloud title="Texte à lire à voix haute (la fin)">
        "CRAC ! La coquille se fend, et un bébé tortue, grand comme une casserole, sort la tête. « Maman ? » La Grande Tortue pleure de joie, de grosses larmes bleues qui font des vaguelettes autour de l'île. Barbe-Rose essuie ses yeux avec sa barbe de papier : « J'ai failli... » « Chuuut, » dit la tortue. « Vous avez ramené mon bébé. C'est le plus grand trésor du monde. » Elle te tend du bout du nez une perle grosse comme une orange, la <strong>Perle de Marée</strong> : « Elle te protégera des tempêtes, et elle réparera le navire de ta rivale. » Puis elle plonge dans la mer, avec son bébé sur le dos, et toute l'île se met à voguer vers l'horizon. Tu t'assois sur sa carapace, Miette endormi sur ton épaule, et tu regardes le soleil se coucher. Tu es le capitaine de l'île qui bougeait."
      </ReadAloud>

      <InfoBox title="Récompenses de l'aventure">
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Loot final : la Perle de Marée.</strong> Une fois, elle annule tous les dégâts d'une seule attaque.</li>
          <li><strong>Médailles :</strong> voir l'épilogue.</li>
          <li><strong>Le cœur de l'histoire :</strong> parfois, le plus grand des trésors, ce n'est pas de l'or : c'est de rendre un bébé à sa maman.</li>
        </ul>
      </InfoBox>
    </section>
  );
}
