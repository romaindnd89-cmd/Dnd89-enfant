import React from 'react';
import { ReadAloud, CombatBox, ActionBox, InfoBox, FirstRound } from '../../components/StoryBlocks';

export default function Chapitre3() {
  return (
    <section id="chap3">
      <h2 className="font-display text-4xl font-bold text-sky-700 mb-6 border-b-4 border-sky-200 pb-2 mt-16">
        CHAPITRE 3 : LE RUISSEAU BAVARD
      </h2>
      <p className="text-slate-500 font-medium mb-8">Niveau recommandé : 1<br/>Lieu : Le gué du vieux crapaud, là où le sentier croise le ruisseau<br/>Ambiance : Calme et un peu magique, un moment pour souffler et réfléchir ensemble.</p>

      <InfoBox title="Synopsis du Chapitre pour le Maître du Jeu">
        <p>Un chapitre sans combat. Un vieux crapaud barre le gué et propose une devinette ; l'enfant peut aussi explorer la rive avant de répondre. Laisse vraiment le silence s'installer : c'est un moment de réflexion. Une petite quête annexe (les têtards) offre une technique utile pour plus tard.</p>
      </InfoBox>

      <h3 className="font-display text-2xl font-bold text-slate-700 mt-8 mb-4">SCÈNE 1 : LE GUÉ DE CROÂ (Exploration et Roleplay)</h3>
      <ReadAloud title="Texte à lire à voix haute">
        "Le ruisseau murmure, glougloute et... oui, c'est bien ça : il parle ! Pas des mots très clairs, plutôt des bribes de conseils marmonnés entre deux clapotis : « par ici... non, pas par là... prudence, petit... »"<br/><br/>
        "Au milieu de l'eau, bien calé sur une large pierre plate, un vieux crapaud couleur de vase te regarde arriver avec des yeux d'or qui ne clignent presque jamais. « Halte-là, petit roux ! » coasse-t-il sans bouger un muscle. « Moi, Croâ, je garde ce gué depuis cent automnes, et la brume m'a pris pas mal de souvenirs, mais pas mon goût pour les bonnes devinettes. Réponds-moi juste, et l'eau te laissera passer. Réponds faux... et tu auras les pattes mouillées, c'est tout. » Sur la rive, quelques galets plus clairs vibrent bizarrement. Que fais-tu ?"
      </ReadAloud>

      <InfoBox title="Profil de Croâ, le vieux crapaud gardien du gué">
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Apparence :</strong> crapaud énorme, peau grumeleuse couleur boue.</li>
          <li><strong>Voix :</strong> très grave et très lente. Gonflez les joues avant chaque réplique. Fier et bougon, mais ravi d'avoir de la visite.</li>
          <li><strong>Ce qu'il sait :</strong> il a vu des écureuils affolés filer vers l'amont du ruisseau.</li>
        </ul>
      </InfoBox>

      <ActionBox title="Options d'Exploration et Mécaniques (Bac à sable)">
        <h4 className="font-bold text-lg mb-2">1. Relever le défi : l'énigme de Croâ (Roleplay)</h4>
        <p className="mb-2">Laisse l'enfant réfléchir. S'il sèche, il peut tenter un jet de FLAIR (DD 12) : Lumi lui souffle un indice. (Si l'enfant a aidé Bringuebale au chapitre 2, l'indice est gratuit.)</p>
        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li><strong>Énigme :</strong> <em>« Plus je sèche, plus je deviens grand. Plus je bois, plus je deviens tout petit. Qui suis-je ? »</em> → le feu (toute réponse dans cet esprit est acceptée).</li>
          <li><strong>Énigme de secours, plus facile :</strong> <em>« Je suis plein de couleurs, mais je n'ai pas de crayon. J'apparais après la pluie, quand revient le beau rayon. »</em> → l'arc-en-ciel.</li>
          <li><strong>Bonne réponse :</strong> « CROÂ ! Bravo ! » Les galets s'alignent d'eux-mêmes pour former un petit pont.</li>
          <li><strong>Mauvaise réponse :</strong> une petite vague éclabousse gentiment le héros, et Croâ offre un deuxième indice : « Ça danse, ça réchauffe, et ça a très peur de mon ruisseau. » On peut retenter aussitôt.</li>
        </ul>

        <h4 className="font-bold text-lg mb-2">2. Examiner les galets de la rive (Test de FLAIR - DD 11)</h4>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Réussite : Loot : Miel cristallisé.</strong> Dans la fente d'un galet, une perle de miel durci. À manger pour récupérer 2 PV, ou à offrir à une créature grognonne pour réussir automatiquement un jet de CŒUR (une fois).</li>
          <li><strong>Échec :</strong> ce ne sont que des galets, et le héros se mouille le bout du nez.</li>
        </ul>
      </ActionBox>

      <h3 className="font-display text-2xl font-bold text-slate-700 mt-8 mb-4">SCÈNE 2 : LES GRENOUILLES ÉCLABOUSSANTES (Combat)</h3>
      <ReadAloud title="Texte à lire à voix haute">
        "Tu sautes de pierre en pierre, plic, ploc, plic, quand trois énormes grenouilles vertes jaillissent de l'eau, juste devant toi, avec des plouf ! sonores. « C'est NOTRE pont ! » coasse la première en gonflant ses joues. « Ce sont NOS pierres ! » ajoute la deuxième. « Et c'est NOTRE jour de bain ! » termine la troisième. Elles se mettent en rang, prennent une grande inspiration, et te lancent trois grands jets d'eau avec leurs bouches : SPLASH !"
      </ReadAloud>

      <CombatBox title="Mécaniques de Combat (Les Grenouilles Éclaboussantes)" image="/art/monstres/grenouilles.webp" imageAlt="Les Grenouilles Éclaboussantes">
        <p className="mb-2">Rappel : D20 + talent pour toucher, D6 pour les dégâts. Quand un monstre attaque, le MJ lance un D20 : à 11 ou plus, il touche le renard.</p>
        <FirstRound>
        <p><strong>Le petit renard</strong> attaque une grenouille (4 PV, CA 10). Il lance le D20 et fait <strong>8</strong>. Il ajoute son Courage (+3) : 8 + 3 = <strong>11</strong>. 11 atteint la CA 10 : <strong>touché !</strong> Il lance le D6 pour les dégâts : <strong>4</strong>. Une grenouille avait 4 PV : il tombe à 0, il est <strong>K.O.</strong></p>
        <p>Au tour d'une grenouille, le MJ lance un D20 : <strong>7</strong>. Il faut <strong>11</strong> ou plus pour toucher le petit renard : c'est moins : <strong>raté !</strong> Le jet d'eau passe au-dessus de ton oreille. (Avec 11 ou plus, le petit renard aurait perdu 1D4 PV.)</p>
        </FirstRound>
        <h4 className="font-bold text-lg mb-2">Les Ennemies : 3 Grenouilles Éclaboussantes</h4>
        <ul className="list-disc pl-5 space-y-1 mb-4">
          <li><strong>PV :</strong> 4 chacune. <strong>CA :</strong> 10.</li>
          <li><strong>Attaque (Jet d'eau) :</strong> touche à 11 ou plus (D20 du MJ), 1D4 de dégâts. Le héros trempé a −1 au prochain jet d'Agilité.</li>
        </ul>
        <h4 className="font-bold text-lg mb-2">Tactique et Environnement (Le rôle du MJ) :</h4>
        <ul className="list-disc pl-5 space-y-3">
          <li><strong>Option A - Griffes et crocs :</strong> 1D20 + COURAGE (+3), dégâts 1D6.</li>
          <li><strong>Option B - Bond du Renard (AGILITÉ +4) :</strong> sauter par-dessus un jet d'eau et atterrir sur une grenouille : dégâts doublés.</li>
          <li><strong>Option C - Le Saut de Grenouille (si appris) :</strong> les grenouilles, impressionnées, perdent leur tour.</li>
          <li><strong>Option D - Lumi (une fois) :</strong> la luciole les éblouit : elles ratent leur prochain jet.</li>
          <li><strong>Option E - Les faire rire (CŒUR +5) :</strong> un renard qui sait faire des grimaces désarme une grenouille.</li>
        </ul>
        <p className="italic mt-3">Une grenouille touchée saute dans l'eau en boudant : « Pas juste ! Je reviendrai avec mes cousines ! »</p>
      </CombatBox>

      <h3 className="font-display text-2xl font-bold text-slate-700 mt-8 mb-4">SCÈNE 3 : LA TRAVERSÉE ET LES TÊTARDS</h3>
      <ReadAloud title="Texte à lire à voix haute">
        "Une à une, les pierres plates remontent du fond de l'eau, toutes luisantes. Tu sautes de l'une à l'autre : plic, ploc, plic ! Sous tes pattes, le ruisseau rit tout bas, comme s'il te félicitait. Sur l'autre rive, tu te retournes : Croâ agite sa grande patte palmée. « Reviens me voir quand la forêt aura retrouvé ses couleurs ! J'aurai inventé une devinette toute neuve, rien que pour toi ! »"<br/><br/>
        "Juste après le gué, de toutes petites voix paniquées appellent à l'aide depuis une flaque qui rapetisse au soleil. Une dizaine de têtards tournent en rond : « À l'aide ! On a oublié le chemin du ruisseau ! » Que fais-tu ?"
      </ReadAloud>

      <ActionBox title="Quête Annexe : les têtards">
        <h4 className="font-bold text-lg mb-2">Au choix de l'enfant :</h4>
        <ul className="list-disc pl-5 space-y-2 mb-4">
          <li><strong>Les porter dans une feuille d'eau (AGILITÉ - DD 10) :</strong> en cas d'échec, la feuille penche et il faut la rattraper : on relance simplement.</li>
          <li><strong>Creuser une rigole jusqu'au ruisseau (COURAGE - DD 10) :</strong> plus physique, mais ça sauve tout le monde d'un coup.</li>
        </ul>
        <p><strong>Récompense :</strong> leur maman grenouille apprend au héros le <strong>Saut de Grenouille</strong> : +2 au prochain jet de Bond du Renard de l'aventure.</p>
      </ActionBox>

      <InfoBox title="Note pour le MJ : faire une pause">
        <p>Après trois chapitres (une rencontre douce, un combat, une énigme), c'est le moment idéal pour une pause. Notez ensemble ce que le héros a trouvé : il retrouvera ses objets à la prochaine séance.</p>
      </InfoBox>
    </section>
  );
}
