import React from 'react';
import { ReadAloud, ActionBox, InfoBox, Deduction } from '../../components/StoryBlocks';

export default function Chapitre2() {
  return (
    <section id="chap2">
      <h2 className="font-display text-4xl font-bold text-indigo-700 mb-6 border-b-4 border-indigo-200 pb-2 mt-16">
        CHAPITRE 2 : LA TOUR DES ARCHIVES
      </h2>
      <p className="text-slate-500 font-medium mb-8">Niveau recommandé : 2<br/>Lieu : La Tour des Archives, sur la colline de Lumignon<br/>Ambiance : Calme, studieux, un peu mystérieux. Chapitre de recherche et de déduction, sans combat.</p>

      <InfoBox title="Synopsis du Chapitre pour le Maître du Jeu">
        <p className="mb-2">Le héros fouille les archives avec l'archiviste Hulotte, une chouette un peu sourde. Il apprend que les lanternes sont toutes liées à la <strong>Flamme-Source du Puits Oublié</strong>, au fond du Marais de Brume : quand elle faiblit, les lanternes les plus lointaines s'éteignent en premier. Il trouve une <strong>fiche de prêt</strong> signée « B. » (la Chronique a été empruntée il y a trois semaines) et une page déchirée dans le Livre des Gardiens. <strong>Indices à collecter : 5 à 8.</strong></p>
        <p><strong>Secret à garder :</strong> « B. » est Maître Bernardin, qui a étudié la Flamme en secret. La page déchirée explique qu'un Gardien peut nourrir la Flamme de sa propre lumière, mais « chaque flamme donnée est une année retirée ». Le héros ne comprendra tout que plus tard. <strong>À retenir :</strong> (1) les lanternes dépendent de la Flamme-Source ; (2) le Puits est au fond du Marais ; (3) quelqu'un connaissait déjà tout cela.</p>
      </InfoBox>

      <h3 className="font-display text-2xl font-bold text-slate-700 mt-8 mb-4">SCÈNE 1 : LE ROYAUME DES LIVRES (Exploration et Roleplay)</h3>
      <ReadAloud title="Texte à lire à voix haute">
        "La Tour des Archives se dresse sur la colline, grande, penchée, comme un vieux géant qui regarderait ses pieds. Il neige. À l'intérieur, une odeur de papier, de poussière et de bougie t'enveloppe dès la porte. Des escaliers tournent le long des murs, bordés de milliers de livres, de rouleaux, de cartes, de registres : plus de livres que tu n'en as jamais vus. Au milieu de cette forêt de papier, perchée sur une échelle roulante, une petite chouette en tablier, avec trois paires de lunettes sur le bec, te regarde en clignant des yeux."<br/><br/>
        "« Chhhut ! » chuchote-t-elle de sa voix fluette, sans se rendre compte qu'elle parle très fort. « Ici on ne crie jamais ! Je suis Hulotte, archiviste. Si c'est pour un renseignement, c'est par ordre alphabétique. Si c'est pour une émotion, c'est au deuxième étage. » Elle te détaille. « Tu es l'apprenti de Bernardin, n'est-ce pas ? Il vient souvent. Très souvent, ces derniers temps. Que cherches-tu ? »"
      </ReadAloud>

      <InfoBox title="Profil de Hulotte, l'archiviste">
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Apparence :</strong> petite chouette ronde, trois paires de lunettes superposées, tablier plein d'encre.</li>
          <li><strong>Voix :</strong> chuchote très fort. Elle se trompe de livre, de page, de jour, et ne se trompe jamais sur le fond.</li>
          <li><strong>Ce qu'elle sait :</strong> tout ce qui est écrit. Elle a connu Bernardin jeune : « Têtu comme un blaireau. Il ne demandait jamais d'aide. Il disait que c'était son fardeau à lui. »</li>
        </ul>
      </InfoBox>

      <ActionBox title="Options d'Exploration et Mécaniques (Bac à sable)">
        <p className="mb-4">Les archives sont immenses : l'enfant choisit où chercher. Donne un point de <strong>Lueur</strong> à une idée maligne (par exemple, demander à Hulotte comment sont classés les livres).</p>

        <h4 className="font-bold text-lg mb-2">1. Chercher « Lanternes » dans la Chronique de la Vallée (Test de SAVOIR - DD 12)</h4>
        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li><strong>Réussite :</strong> <strong>Indice 5</strong> : « Toutes les lanternes de la Vallée sont nourries par la Flamme-Source, qui brûle au Puits Oublié. Quand la Flamme faiblit, les lanternes les plus éloignées du Puits s'éteignent les premières. »</li>
          <li><strong>Échec :</strong> il tombe sur la recette de la tarte aux pommes du Gardien de 1740. Hulotte lui tend un autre livre : « Essaie la lettre F, comme Flamme. » (+2 pour réessayer)</li>
        </ul>

        <h4 className="font-bold text-lg mb-2">2. Étudier la grande carte de la Vallée (Test de SAVOIR - DD 11)</h4>
        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li><strong>Réussite :</strong> <strong>Indice 6</strong> : il reporte les douze lanternes éteintes sur la carte avec des punaises rouges. Elles forment une <strong>ligne qui avance du sud vers le nord</strong>, droit vers le <strong>Marais de Brume</strong>. Et tout au fond du marais, la carte indique : « Puits Oublié (interdit) ».</li>
          <li><strong>Échec :</strong> il met les punaises au mauvais endroit, et Hulotte rectifie en chuchotant très fort : « Non, non, non ! Le moulin est à gauche ! »</li>
        </ul>

        <h4 className="font-bold text-lg mb-2">3. Consulter la fiche de prêt de la Chronique (Test de SAVOIR - DD 13)</h4>
        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li><strong>Réussite :</strong> <strong>Indice 7</strong> : la Chronique a été <strong>empruntée il y a trois semaines</strong> par quelqu'un qui a signé d'un « B. ». Hulotte, qui n'y voit plus rien : « Bernardin ? Bartholomé le boulanger ? Brigadier ? Ah, ma vue... »</li>
          <li><strong>Échec :</strong> la fiche est trop griffonnée. Il peut demander à Hulotte, qui répond au hasard (CŒUR - DD 11 pour qu'elle réfléchisse).</li>
        </ul>

        <h4 className="font-bold text-lg mb-2">4. Entrer dans la Réserve interdite (voir la scène 2)</h4>
        <p>Une porte basse, fermée par une énigme.</p>
      </ActionBox>

      <Deduction
        question="Pourquoi les lanternes s'éteignent-elles dans cet ordre, du sud vers le nord ?"
        clues={['Indice 2 : elles s\'éteignent à minuit, en avançant chaque nuit un peu plus près du village.', 'Indice 5 : les lanternes sont nourries par la Flamme-Source du Puits Oublié. Quand elle faiblit, les plus éloignées s\'éteignent d\'abord.', 'Indice 6 : les lanternes éteintes forment une ligne qui avance vers le Marais de Brume, où se trouve le Puits.']}
        hint="Imagine une grande bougie au nord, et des petites lumières qui s'éloignent d'elle. Quelles sont les premières à manquer de force ?"
        answer={<>
          <p><strong>La Flamme-Source du Puits Oublié (au nord, dans le Marais) faiblit.</strong> Les lanternes sont comme reliées à elle par des fils invisibles : celles qui sont <em>les plus loin</em> (au sud) s'éteignent les premières, puis celles qui sont un peu plus proches, nuit après nuit. La ligne avance donc vers le Marais.</p>
          <p>Conséquence : <strong>le vrai problème est au Puits</strong>, pas chez les gobelins. Si l'enfant le dit, <strong>gagne un point de Lueur</strong>.</p>
        </>}
      />

      <h3 className="font-display text-2xl font-bold text-slate-700 mt-8 mb-4">SCÈNE 2 : LA RÉSERVE ET L'ÉNIGME (Énigme et Roleplay)</h3>
      <ReadAloud title="Texte à lire à voix haute">
        "Au fond de la Tour, derrière une étagère de dictionnaires, une petite porte voûtée est fermée par un cadenas en forme de lanterne. À côté, gravée dans la pierre, une inscription : « La Réserve des Gardiens ne s'ouvre qu'à celui qui sait ce qui ne diminue jamais quand on le partage. » Hulotte chuchote, fort : « Personne n'est entré là depuis trente ans. Bernardin y est venu il y a quelques semaines, il m'a dit : 'Ce n'est pas la peine de noter, Hulotte.' Et il avait la voix qui tremblait un peu. Mais ça, je ne sais pas ce que ça veut dire. »"
      </ReadAloud>

      <Deduction
        title="L'énigme de la porte"
        question="Qu'est-ce qui ne diminue jamais quand on le partage, mais qui s'éteint quand on le garde pour soi seul ?"
        clues={['Le cadenas est en forme de lanterne.', 'La Tour est pleine de livres sur les lanternes et la Flamme.', 'Maître Bernardin disait : « Une lanterne brille pour dire à quelqu\'un : je suis là. »']}
        hint="Pense à ce que tu fais quand tu allumes ta lanterne avec la lanterne d'un ami : est-ce que sa flamme devient plus petite ?"
        answer={<>
          <p><strong>La lumière</strong> (ou la flamme). Accepte aussi « une bougie », « la chaleur », « l'amitié », « la joie » : toute réponse dans cet esprit ouvre la porte. C'est l'idée centrale de l'histoire : <strong>une lumière partagée ne diminue pas.</strong></p>
        </>}
      />

      <ReadAloud title="Texte à lire à voix haute (la Réserve)">
        "Le cadenas s'illumine d'un petit éclat doré, et s'ouvre avec un tintement de clochette. La Réserve est une petite pièce ronde, sans fenêtre, éclairée par une seule bougie qui ne s'éteint jamais. Au centre, sur un pupitre, repose un grand livre à la couverture de cuir usé : le Livre des Gardiens. Tu le feuillettes avec précaution. Les pages racontent les Gardiens d'autrefois : leurs noms, leurs flammes, leurs hivers. Mais l'une des pages a été <strong>déchirée</strong>, brutalement, en plein milieu d'une phrase : « ...un Gardien peut nourrir la Flamme de sa propre lumière. Mais chaque flamme donnée est... » La suite est coupée."
      </ReadAloud>

      <ActionBox title="Dans la Réserve">
        <ul className="list-disc pl-5 space-y-3">
          <li><strong>Examiner la page déchirée (Test de SAVOIR - DD 12) :</strong> <strong>Indice 8</strong> : la déchirure est récente. Il y a des <strong>poils gris de blaireau</strong> collés à la tranche. Quelqu'un a déchiré cette page <strong>par colère, ou par peur</strong>. Le héros peut la glisser dans son carnet : <em>la suite de la page est quelque part, ailleurs.</em></li>
          <li><strong>Interroger Hulotte (Test de CŒUR - DD 11) :</strong> elle avoue : « Bernardin m'a demandé de ne pas parler de cette page. Il m'a dit : 'Mon petit apprenti est trop jeune pour porter ça.' Il aime ses secrets, ce blaireau. » <strong>Gagne un point de Lueur</strong> pour avoir su la faire parler.</li>
          <li><strong>Prendre une copie du registre (aucun jet) :</strong> Hulotte accepte de recopier les passages sur la Flamme-Source : le héros les emporte dans son carnet.</li>
        </ul>
      </ActionBox>

      <ReadAloud title="Texte à lire à voix haute (fin du chapitre)">
        "Quand tu sors de la Tour, la nuit est tombée. La neige a recouvert le village, et les lanternes encore allumées dessinent des cercles dorés sur le sol blanc. Tu respires l'air froid. Dans ta tête, les indices tournent comme des rouages : la Flamme-Source, le Puits Oublié, la page déchirée, le « B. » sur la fiche de prêt. Il y a quelque chose, tout au fond de ces mots, que tu ne comprends pas encore. À la porte de la Tour, une petite silhouette t'attend, enroulée dans une écharpe, la queue dressée : Pip. « Je dois te parler, » murmure-t-elle. « C'est à propos des gobelins. »"
      </ReadAloud>
    </section>
  );
}
