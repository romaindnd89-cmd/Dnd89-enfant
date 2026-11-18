import React from 'react';
import { ReadAloud, ActionBox, InfoBox, Deduction } from '../../components/StoryBlocks';

export default function Chapitre4() {
  return (
    <section id="chap4">
      <h2 className="font-display text-4xl font-bold text-sky-700 mb-6 border-b-4 border-sky-200 pb-2 mt-16">
        CHAPITRE 4 : CE QUE LA BRUME CACHAIT
      </h2>
      <p className="text-slate-500 font-medium mb-8">Niveau recommandé : 2<br/>Lieu : Le camp des gobelins, puis le sentier du Marais<br/>Ambiance : Calme, tendue, puis très émouvante. Chapitre de dialogue et de déduction, sans combat. C'est le cœur de l'histoire.</p>

      <InfoBox title="Synopsis du Chapitre pour le Maître du Jeu">
        <p className="mb-2">Au camp des gobelins, le héros découvre des gens pauvres mais fiers. Madame Ronce arrive avec des couvertures, puis le <strong>Brigadier Tonnerre</strong> et des villageois armés de torches : il veut chasser les gobelins. Le héros peut les défendre en utilisant ses <strong>indices</strong>. Ensuite, devant le feu, il relie tous les indices : la silhouette au Puits, c'est <strong>Maître Bernardin</strong>. <strong>Indices à collecter : 11 et 12.</strong></p>
        <p><strong>Secret à garder :</strong> Bernardin est très malade (il le sait depuis le printemps). Il nourrit la Flamme-Source avec sa propre lumière pour que les lanternes durent « jusqu'à ce que son apprenti soit prêt ». Chaque nuit, ça le fatigue davantage. <strong>À retenir :</strong> (1) la silhouette est Bernardin ; (2) il cache sa maladie par amour, pas par orgueil ; (3) les gobelins sont innocents.</p>
      </InfoBox>

      <h3 className="font-display text-2xl font-bold text-slate-700 mt-8 mb-4">SCÈNE 1 : LE CAMP DES OUBLIÉS (Roleplay)</h3>
      <ReadAloud title="Texte à lire à voix haute">
        "Le camp est une poignée de cabanes tordues, collées les unes aux autres pour se tenir chaud. Au centre, un petit feu fait fondre la neige. Autour, des silhouettes vertes, drapées dans des couvertures raccommodées mille fois, regardent le héros avec méfiance. Une vieille gobeline, qui s'appelle Mousse, lui tend un bol de soupe de racines, sans un mot. « Tu as marché longtemps, » dit-elle. « Mange. » Elle ne demande rien. Elle n'a rien d'autre à offrir que cette soupe et ce feu."<br/><br/>
        "Derrière toi, la brume s'écarte. Un panier à l'épaule, grommelant dans ses piquants, Madame Ronce arrive à grands pas, suivie de deux villageois portant des couvertures. « Je viens voir si ces petits ont besoin de quelque chose, » râle-t-elle. « Et ne me regardez pas comme ça, je n'ai jamais dit que je venais pour la première fois. »"
      </ReadAloud>

      <InfoBox title="Profil de Mousse, la vieille gobeline">
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Apparence :</strong> toute petite, voûtée, un châle de laine gris qui tombe jusqu'aux pieds. Voix douce comme du coton.</li>
          <li><strong>Caractère :</strong> elle ne se plaint jamais et ne mendie rien. Elle observe tout.</li>
          <li><strong>Ce qu'elle dit si on la questionne (CŒUR - DD 10) :</strong> « Ton maître est déjà venu, tu sais. Il y a longtemps. Il nous a apporté du bois et ne l'a dit à personne. Il disait que les lanternes ne choisissent pas à qui elles donnent de la chaleur. »</li>
        </ul>
      </InfoBox>

      <ActionBox title="Options (Roleplay et enquête)">
        <h4 className="font-bold text-lg mb-2">1. Parler à Madame Ronce (Test de CŒUR - DD 11)</h4>
        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li><strong>Réussite :</strong> elle s'assoit enfin près du feu et soupire : « Bernardin est venu chez moi il y a six mois. Il avait mauvaise mine. Je lui ai donné de la tisane, mais je n'ai pas de remède pour son mal, ce vieux têtu. Il m'a fait jurer de ne rien dire. » <strong>Indice 12</strong> (elle n'ajoute rien de plus : « Je ne peux pas, mon petit. Tu comprendras tout seul. »)</li>
          <li><strong>Échec :</strong> elle grogne et change de sujet. Elle peut dire la même chose plus tard si le héros revient la voir.</li>
        </ul>
        <h4 className="font-bold text-lg mb-2">2. Fouiller le sentier derrière le camp (Test de SAVOIR - DD 12)</h4>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Réussite :</strong> dans la neige, à demi enfoncée, une petite <strong>boîte de tisane</strong> en fer-blanc. Étiquette de la main de Madame Ronce : « Pour B. Bernardin : deux fois par jour, contre la toux. » <strong>Indice 11.</strong> Elle est encore tiède.</li>
          <li><strong>Échec :</strong> Mousse la retrouve plus tard et la lui donne : « Je l'ai trouvée hier. Elle n'est pas à nous. »</li>
        </ul>
      </ActionBox>

      <h3 className="font-display text-2xl font-bold text-slate-700 mt-8 mb-4">SCÈNE 2 : LES TORCHES (Confrontation et Roleplay)</h3>
      <ReadAloud title="Texte à lire à voix haute">
        "Des lueurs rouges apparaissent entre les roseaux, de plus en plus nombreuses. Des torches. Des voix. Le sabot du Brigadier Tonnerre frappe le sol. Il arrive, cuirasse de cuivre brillante, suivi d'une dizaine de villageois, certains hésitants, d'autres déjà en colère. « Les voilà ! » tonne-t-il en pointant son bâton vers les cabanes. « Les voleurs d'huile ! Vous allez quitter ce marais ce soir, et pour de bon ! » Les gobelins se serrent les uns contre les autres. Les bébés se mettent à pleurer. Mousse murmure : « Toujours la même chose. »"
      </ReadAloud>

      <ActionBox title="Défendre les gobelins (épreuve de déduction et de Cœur)">
        <p className="mb-3">Le héros peut s'avancer et parler. Le jet est un <strong>test de CŒUR - DD 13</strong>. Pour l'aider, <strong>chaque indice utile qu'il cite avec ses mots</strong> donne <strong>+1</strong> (maximum +4). Aide-le sans lui souffler : c'est lui qui doit relire son carnet.</p>
        <ul className="list-disc pl-5 space-y-2 mb-4">
          <li><strong>Indice 1 ou 2 :</strong> « Les lanternes s'éteignent chaque nuit à minuit, bien avant que les gobelins ne volent quoi que ce soit. »</li>
          <li><strong>Indice 4 :</strong> « Il ne manque que quatre tonneaux. Ça ne suffit pas à éteindre toutes les lanternes. »</li>
          <li><strong>Indice 5 ou 6 :</strong> « Le problème vient de la Flamme-Source du Puits, pas des voleurs. »</li>
          <li><strong>Indice 9 :</strong> « Les gobelins ont vu quelqu'un d'autre sur le sentier. »</li>
        </ul>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Réussite :</strong> Tonnerre ouvre la bouche, la referme. Un vieil homme parmi les villageois baisse sa torche. Puis une mère. Puis un autre. « Si tu te trompes, apprenti, » grogne Tonnerre, « c'est toi qui répondras de tout ça. » Il tourne les talons. <strong>Gagne 2 points de Lueur.</strong></li>
          <li><strong>Échec :</strong> Tonnerre n'écoute pas. Madame Ronce se plante devant lui, bras croisés : « Tu vas devoir me passer dessus, Tonnerre. » Il recule en maugréant. Les villageois repartent à regret. (Le héros garde sa Lueur, mais pas de bonus.)</li>
        </ul>
      </ActionBox>

      <ReadAloud title="Texte à lire à voix haute (après leur départ)">
        "Quand les torches s'éloignent, le silence retombe. Mousse pose sa main sur la tienne. « Merci, » dit-elle simplement. Personne ne dit plus rien pendant un long moment. Le feu craque. Tu t'assois, ton carnet sur les genoux, et tu relis tes notes. Douze indices. Douze petits morceaux de verre brisé, à remettre dans l'ordre. Un par un, doucement, ils commencent à former une image."
      </ReadAloud>

      <h3 className="font-display text-2xl font-bold text-slate-700 mt-8 mb-4">SCÈNE 3 : LA GRANDE DÉDUCTION</h3>

      <Deduction
        title="La déduction du chapitre"
        question="Qui est la silhouette à la lanterne qui tremble, et pourquoi va-t-elle chaque nuit au Puits Oublié ?"
        clues={[
          'Indice 3 : Maître Bernardin tousse, il est pâle, et il a de la mousse de marais sur ses bottes.',
          'Indice 7 : la Chronique de la Vallée a été empruntée il y a trois semaines par quelqu\'un qui a signé « B. ».',
          'Indice 8 : la page déchirée du Livre des Gardiens porte des poils gris de blaireau.',
          'Indice 9 : la silhouette passe chaque nuit, avec une lanterne qui tremble, et s\'assoit pour tousser.',
          'Indice 10 : elle porte un bonnet à pompon usé et des lunettes qui brillent.',
          'Indice 11 : une boîte de tisane « pour B. Bernardin », contre la toux, trouvée sur le sentier.',
          'Indice 12 : Madame Ronce a juré de garder un secret sur la santé de Bernardin.',
        ]}
        hint="Relis les indices un par un. Qui tousse ? Qui a de la mousse de marais sur ses bottes ? Et qui a un bonnet à pompon et des lunettes ?"
        answer={<>
          <p><strong>C'est Maître Bernardin.</strong> Il est malade, il tousse, il descend au Puits chaque nuit, et il n'en a parlé à personne.</p>
          <p><strong>Pourquoi ?</strong> Il nourrit la Flamme-Source de sa propre lumière pour que les lanternes continuent de brûler. Chaque nuit, ça le fatigue davantage. Il cache tout, pour protéger son apprenti et le village. Si l'enfant dit seulement « c'est Bernardin », demande-lui : « Et pourquoi, à ton avis ? » Une réponse approchante suffit : <em>pour sauver les lanternes</em>, <em>par amour</em>, <em>pour ne pas inquiéter</em>.</p>
          <p>Si l'enfant trouve les deux réponses (qui <em>et</em> pourquoi), <strong>gagne 2 points de Lueur</strong>.</p>
        </>}
      />

      <ReadAloud title="Texte à lire à voix haute (la découverte)">
        "Tu fermes ton carnet. Tes mains tremblent un peu. Tu repenses à la toux étouffée dans le mouchoir, aux pas lents, aux « va dormir, mon petit », aux plaisanteries pour éviter les questions. Tu repenses à la lanterne de ton maître, toujours allumée, et à la façon dont il la tenait, chaque soir, comme on tient une main qui s'en va. Pip pose sa petite patte sur ton bras. « Il ne voulait pas que tu aies peur, » murmure-t-elle. « Alors c'est toi qui as peur à sa place. »"<br/><br/>
        "Dans le feu, une braise éclate. Il est presque minuit. Tu te lèves. Tu sais où aller."
      </ReadAloud>

      <InfoBox title="Note au MJ : le moment important">
        <p className="mb-2"><strong>Laisse un vrai silence</strong> après le texte ci-dessus. Si l'enfant est ému, c'est normal : c'est le but. Tu peux simplement dire : « C'est triste de comprendre ça, n'est-ce pas ? » Ne cherche pas à consoler trop vite.</p>
        <p><strong>Ce qu'il peut dire ou faire :</strong> courir au Puits (continue au chapitre 5), prévenir le village (un peu tard : Tonnerre dort), emmener les gobelins (Mousse refuse : « Ce n'est pas à nous d'y aller. »). Le chemin le plus naturel est de partir seul, avec Pip s'il le souhaite.</p>
      </InfoBox>
    </section>
  );
}
