import React from 'react';
import { ReadAloud, CombatBox, ActionBox, InfoBox, FirstRound } from '../../components/StoryBlocks';

export default function Chapitre6() {
  return (
    <section id="chap6">
      <h2 className="font-display text-4xl font-bold text-violet-700 mb-6 border-b-4 border-violet-200 pb-2 mt-16">
        CHAPITRE 6 : L'ARAIGNÉE DE BRUME
      </h2>
      <p className="text-slate-500 font-medium mb-8">Niveau recommandé : 2<br/>Lieu : Le vallon embrumé, entre la Ronceraie et la Grotte aux Échos<br/>Ambiance : Mystérieuse et un peu inquiétante, mais jamais terrifiante : Filandre n'est pas une vraie méchante.</p>

      <InfoBox title="Synopsis du Chapitre pour le Maître du Jeu">
        <p>Une araignée vaniteuse garde le passage. Trois voies : la flatter, brûler un coin de sa toile, ou se battre. Le combat est le plus difficile de la première moitié, mais Filandre est lâche. Un papillon englué offre une aide précieuse pour la suite.</p>
      </InfoBox>

      <h3 className="font-display text-2xl font-bold text-slate-700 mt-8 mb-4">SCÈNE 1 : LA BRUME ET LA TOILE (Exploration et Roleplay)</h3>
      <ReadAloud title="Texte à lire à voix haute">
        "Le sentier plonge entre deux parois rocheuses couvertes de mousse grise, et aussitôt une brume épaisse comme du coton monte jusqu'à tes genoux, puis jusqu'à ton ventre. Tu n'y vois plus qu'à trois pas, sauf dans le halo doux que projette Lumi, posée sur ton épaule comme un petit phare tremblant. Des formes passent, floues : peut-être un cerf, peut-être juste un rocher. Une goutte tombe quelque part avec un « plic » qui résonne bizarrement."<br/><br/>
        "Puis, entre deux arbres morts tordus comme de vieilles mains, une toile gigantesque barre le passage, couverte de gouttelettes qui scintillent faiblement. Une forme descend le long d'un fil : huit yeux brillent dans la pénombre. « Ssssalut, petit renard, » siffle-t-elle. « Grisssaille m'a dit de n'laisssser passssser personne qui ssse ssouvient encore. Mais tu as remarqué ma toile, j'esssspère ? C'est du travail de maître, ssi je puis dire. » Que fais-tu ?"
      </ReadAloud>

      <InfoBox title="Profil de Filandre, l'Araignée de Brume">
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Apparence :</strong> grande araignée grise, translucide dans la brume, huit yeux bleu pâle.</li>
          <li><strong>Voix :</strong> sifflante, elle étire tous les « s ». Plus vaniteuse que méchante, elle fond sous les compliments.</li>
          <li><strong>Pourquoi elle garde le passage :</strong> une voix inconnue lui a promis qu'on ne toucherait jamais à sa toile.</li>
        </ul>
      </InfoBox>

      <ActionBox title="L'Arbre de Dialogue et les Résolutions">
        <h4 className="font-bold text-lg mb-2">Option A : Flatter sa toile (Test de CŒUR - DD 12)</h4>
        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li><strong>Réussite :</strong> Filandre rougirait presque. « Oh... stop ! D'accord, passse, petit flatteur. Mais ne touche à rien ! » Elle ouvre elle-même un passage : pas de combat.</li>
          <li><strong>Échec :</strong> elle sourit, flattée, mais ne bouge pas : essaie une autre option.</li>
        </ul>

        <h4 className="font-bold text-lg mb-2">Option B : La ruse, brûler un coin de la toile avec la Feuille d'Or (Test de MALICE - DD 11)</h4>
        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li><strong>Réussite :</strong> un passage s'ouvre pendant que Filandre fanfaronne. Il faut filer avant qu'elle réagisse (AGILITÉ - DD 8).</li>
          <li><strong>Échec :</strong> elle se retourne, furieuse : passe au combat.</li>
        </ul>

        <h4 className="font-bold text-lg mb-2">Option C : Le combat</h4>
        <p>Si l'enfant préfère se battre, ou si les deux premières options échouent, Filandre descend complètement de sa toile.</p>
      </ActionBox>

      <CombatBox title="Mécaniques de Combat (Filandre, l'Araignée de Brume)" image="/art/monstres/filandre.webp" imageAlt="Filandre, l'Araignée de Brume">
        <p className="mb-4">Initiative : D20, à 10 ou plus le héros commence. Rappel : D20 + talent pour toucher, D6 pour les dégâts.</p>

        <FirstRound>
        <p><strong>Le petit renard</strong> attaque Filandre (14 PV, CA 13). Il lance le D20 et fait <strong>11</strong>. Il ajoute son Courage (+3) : 11 + 3 = <strong>14</strong>. 14 atteint la CA 13 : <strong>touché !</strong> Il lance le D6 pour les dégâts : <strong>4</strong>. Filandre avait 14 PV : il lui en reste <strong>10</strong>.</p>
        <p>Au tour de Filandre, le MJ lance un D20 : <strong>7</strong>. Il faut <strong>11</strong> ou plus pour toucher le petit renard : c'est moins : <strong>raté !</strong> Le fil collant s'enroule autour d'une branche. (Avec 11 ou plus, le petit renard aurait perdu 1D6 PV.)</p>
        </FirstRound>
        <h4 className="font-bold text-lg mb-2">L'Ennemie : Filandre</h4>
        <ul className="list-disc pl-5 space-y-1 mb-6">
          <li><strong>Points de Vie (PV) :</strong> 14.</li>
          <li><strong>Classe d'Armure (CA) :</strong> 13.</li>
          <li><strong>Attaque (Fil collant) :</strong> touche à 11 ou plus (D20 du MJ), 1D6 de dégâts. Si elle touche, le héros est collé : au tour suivant, AGILITÉ DD 10 pour se libérer avant d'agir.</li>
          <li><strong>Lâcheté :</strong> à 4 PV ou moins, elle arrête le combat et supplie qu'on la laisse partir.</li>
        </ul>

        <h4 className="font-bold text-lg mb-2">Tactique et Environnement (Le rôle du MJ) :</h4>
        <ul className="list-disc pl-5 space-y-4 mb-4">
          <li><strong>Option A - Griffes et crocs :</strong> 1D20 + COURAGE (+3), dégâts 1D6.</li>
          <li><strong>Option B - Éblouir avec Lumi :</strong> Filandre est éblouie, sa CA baisse de 3 pendant 2 tours (une fois par combat). Puis frappe juste après !</li>
          <li><strong>Option C - Approcher la Feuille d'Or chaude de la toile :</strong> par peur pour son chef-d'œuvre, elle rate son action suivante (AGILITÉ DD 10 pour s'approcher).</li>
        </ul>
        <p className="italic">Si le héros tombe à 0 PV : il se réveille emmailloté dans la soie. Piquillon, hérissé de fureur, découpe les fils pendant que Lumi éblouit Filandre. Le héros repart avec 3 PV.</p>
      </CombatBox>

      <h3 className="font-display text-2xl font-bold text-slate-700 mt-8 mb-4">SCÈNE 2 : LA TOILE DÉCHIRÉE ET LE PAPILLON ENGLUÉ</h3>
      <ReadAloud title="Texte à lire à voix haute">
        "« Asssez ! Asssez ! » Filandre remonte précipitamment le long de son fil. « Passse, petit roux, passse ! » Elle se réfugie en haut d'un arbre mort et boude, le dos tourné, pendant que la grande toile se déchire, laissant filtrer un rayon de lumière grise."<br/><br/>
        "Dans un coin de la toile, quelque chose se débat encore : un gros papillon de nuit aux ailes de velours gris. « Oh, quelle sotte je fais, » soupire-t-il d'une voix feutrée. « J'ai vu une jolie petite lumière danser, et me voilà collé depuis trois heures. » Que fais-tu ?"
      </ReadAloud>

      <ActionBox title="Butin et Quête Annexe : Velours le papillon">
        <p className="mb-4"><strong>Loot : Pelote de fil d'argent</strong> dans les débris de la toile. Corde improvisée : +2 au prochain jet d'AGILITÉ de ton choix.</p>

        <h4 className="font-bold text-lg mb-2">Décoller Velours sans abîmer ses ailes (Test de MALICE - DD 10)</h4>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Bonus de +3</strong> avec un peu d'eau ou l'aide prudente des piquants de Piquillon.</li>
          <li><strong>Réussite : Loot : Poussière de lune.</strong> Velours en saupoudre Lumi : une fois dans l'aventure, sa Lumière Éblouissante est doublée (−2 sur toutes les actions des créatures de la brume pour un tour entier).</li>
        </ul>
      </ActionBox>

      <ReadAloud title="Texte à lire à voix haute (transition)">
        "La brume se déchire enfin, lambeau par lambeau, comme un vieux rideau qu'on tire. Devant vous, nichée entre deux rochers moussus, une grotte respire doucement, par intermittence, comme si elle chantonnait tout bas une mélodie qu'elle aurait depuis longtemps oubliée…"
      </ReadAloud>
    </section>
  );
}
