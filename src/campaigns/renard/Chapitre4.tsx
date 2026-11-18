import React from 'react';
import { ReadAloud, ActionBox, InfoBox } from '../../components/StoryBlocks';

export default function Chapitre4() {
  return (
    <section id="chap4">
      <h2 className="font-display text-4xl font-bold text-amber-700 mb-6 border-b-4 border-amber-200 pb-2 mt-16">
        CHAPITRE 4 : LE VILLAGE DES ÉCUREUILS
      </h2>
      <p className="text-slate-500 font-medium mb-8">Niveau recommandé : 1<br/>Lieu : Le village suspendu dans les branches du grand hêtre<br/>Ambiance : La panique joyeuse et maladroite d'un village entier en plein chaos. Chapitre d'entraide, sans combat : l'occasion de souffler.</p>

      <InfoBox title="Synopsis du Chapitre pour le Maître du Jeu">
        <p>Les écureuils ont oublié où ils ont caché leurs provisions d'hiver. Le héros les aide (au flair, en grimpant ou en consolant les bébés) et la cheffe Noisette, en échange, lui dit où est tombé le premier Gland d'Or. Une petite quête annexe (le concours de saut) rapporte un bouclier utile plus tard.</p>
      </InfoBox>

      <h3 className="font-display text-2xl font-bold text-slate-700 mt-8 mb-4">SCÈNE 1 : UN VILLAGE SENS DESSUS DESSOUS (Rencontre et Roleplay)</h3>
      <ReadAloud title="Texte à lire à voix haute">
        "Dès que tu poses la patte sur la première plateforme de bois, une nuée d'écureuils affolés déboule de toutes les maisonnettes à la fois, en couinant si fort que tu dois reculer d'un pas. « Un visiteur ! Au secours ! On a tout oublié ! On va avoir faim tout l'hiver ! » Les petites boules de poils tournent en rond, se cognent, laissent tomber les brindilles qu'elles ramassaient."<br/><br/>
        "Au milieu de ce désordre, une vieille écureuil tape dans ses petites pattes avec une autorité surprenante. « DU CALME ! » Le silence retombe. Elle se tourne vers toi, et son regard, contrairement à celui des autres, est parfaitement net. « Toi... tes yeux brillent encore. Aide-nous à retrouver nos provisions, et je te dirai où j'ai vu briller, hier encore, quelque chose qui ressemblait à un gros gland tout doré. » Que fais-tu ?"
      </ReadAloud>

      <InfoBox title="Profil de Noisette, la cheffe du village, et de sa bande">
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Noisette :</strong> écureuil âgé, pelage grisonnant, cicatrice sur l'oreille portée comme une médaille. Organisée et autoritaire, le cœur sur la main. Elle a vu une lueur dorée disparaître dans la Ronceraie, au sud.</li>
          <li><strong>Pignon :</strong> jeune écureuil bavard qui pose mille questions sans attendre les réponses.</li>
          <li><strong>Cric, Crac et Croc :</strong> triplés qui finissent les phrases les uns des autres et ne sont jamais d'accord sur les cachettes.</li>
          <li><strong>Grand-Père Chaton :</strong> a oublié son propre prénom et répond à n'importe quel nom. Fais parler deux ou trois personnages en même temps, façon dessin animé.</li>
        </ul>
      </InfoBox>

      <ActionBox title="Options d'Exploration et Mécaniques (Bac à sable)">
        <p className="mb-4">Les provisions sont cachées partout, mais personne ne sait où. Une seule réussite suffit pour avancer ; plus l'enfant essaie de méthodes, plus la fête finale sera belle.</p>

        <h4 className="font-bold text-lg mb-2">1. Suivre son nez (Test de FLAIR - DD 10)</h4>
        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li><strong>Réussite :</strong> le héros déterre trois cachettes d'un coup, suivi d'une procession de petits écureuils ravis.</li>
          <li><strong>Échec :</strong> il ne trouve qu'une vieille racine. Il peut retenter ou choisir une autre méthode.</li>
        </ul>

        <h4 className="font-bold text-lg mb-2">2. Grimper en haut du hêtre (Test d'AGILITÉ - DD 10)</h4>
        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li><strong>Réussite :</strong> vue imprenable sur la forêt grise, et on repère de loin la terre fraîchement remuée. Décris le paysage d'en haut.</li>
          <li><strong>Échec :</strong> le héros glisse et se rattrape de justesse : un petit fou rire, sans dégât.</li>
        </ul>

        <h4 className="font-bold text-lg mb-2">3. Consoler les bébés écureuils (Test de CŒUR - DD 10)</h4>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Réussite :</strong> calmés, l'un des petits se souvient d'une cachette secrète que même les grands ignoraient.</li>
          <li><strong>Échec :</strong> ils pleurent encore plus fort, mais l'un d'eux hoquette : « Chez moi, c'est sous la souche... »</li>
        </ul>
      </ActionBox>

      <h3 className="font-display text-2xl font-bold text-slate-700 mt-8 mb-4">SCÈNE 2 : LA FÊTE DES PROVISIONS</h3>
      <ReadAloud title="Texte à lire à voix haute">
        "Une cachette, puis deux, puis dix ! À chaque trou que tu découvres, un écureuil pousse un cri de joie suraigu et fait la roue sur place, ce qui n'est pas très prudent sur une branche si étroite. Bientôt, tout le village forme une longue chaîne de petites pattes pour faire remonter noisettes et pommes de pin jusqu'aux greniers d'écorce. Les triplés tentent de te porter en triomphe, mais tu es beaucoup trop lourd pour eux, et tout le monde s'écroule dans un grand éclat de rire."<br/><br/>
        "Pour la première fois depuis ce matin gris, un vrai rire résonne dans la forêt, net et chaud. Noisette te prend à part : « Le premier Gland d'Or, celui du Rire, est tombé dans la Ronceraie, le grand buisson d'épines au sud du village. On entend quelqu'un y pleurer, la nuit. » Pignon te tire par la queue : « Dis, dis, dis ! Chez nous, les invités font le grand concours de saut ! »"
      </ReadAloud>

      <ActionBox title="Récompenses et Quête Annexe : le concours de saut">
        <p className="mb-2"><strong>Récompenses :</strong> le <strong>Sifflet en gland</strong> de Noisette (au chapitre 8, il permet d'appeler les écureuils à la rescousse : rappelle-le discrètement le moment venu) et un goûter de fête : le héros récupère <strong>tous ses PV</strong>.</p>

        <h4 className="font-bold text-lg mb-2 mt-4">Le concours de saut de Pignon (3 sauts, AGILITÉ)</h4>
        <ul className="list-disc pl-5 space-y-2 mb-4">
          <li><strong>Branche du Débutant :</strong> DD 8.</li>
          <li><strong>Branche du Casse-Cou :</strong> DD 11.</li>
          <li><strong>Branche de la Légende :</strong> DD 14.</li>
        </ul>
        <p className="mb-2">Un saut raté n'est pas dangereux : un grand filet de toiles et de feuilles rattrape le héros, qui peut retenter sans limite.</p>
        <p><strong>Loot (si 2 sauts sur 3 sont réussis) : Bouclier d'écorce.</strong> Une fois dans l'aventure, il annule tous les dégâts d'une seule attaque, puis se brise.</p>
      </ActionBox>
    </section>
  );
}
