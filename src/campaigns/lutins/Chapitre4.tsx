import React from 'react';
import { ReadAloud, CombatBox, ActionBox, InfoBox } from '../../components/StoryBlocks';

export default function Chapitre4() {
  return (
    <section id="chap4">
      <h2 className="font-display text-4xl font-bold text-rose-700 mb-6 border-b-4 border-rose-200 pb-2 mt-16">
        SALLE 4 : LA GALERIE DES ARMURES
      </h2>
      <p className="text-slate-500 font-medium mb-8">Niveau recommandé : 1<br/>Lieu : Le grand escalier et la longue galerie d'armures du premier étage<br/>Ambiance : Grandiloquente et un peu bancale, comme un théâtre de chevalerie monté par des enfants.</p>

      <InfoBox title="Synopsis de la Salle pour le Maître du Jeu">
        <p>L'escalier se transforme en toboggan, puis l'équipe affronte une grande armure bancale : en réalité trois lutins empilés. Le combat se gagne en <strong>6 touches</strong> (5 si l'équipe n'a que trois enfants), mais il existe une issue sans combat en parlant gentiment aux lutins.</p>
      </InfoBox>

      <h3 className="font-display text-2xl font-bold text-slate-700 mt-8 mb-4">SCÈNE 1 : L'ESCALIER FARCEUR (Exploration)</h3>
      <ReadAloud title="Texte à lire à voix haute">
        "Vous vous engagez sur le grand escalier, un peu impressionnés par sa hauteur et par les portraits qui vous fixent de chaque côté. Puis, exactement au milieu de la montée, les marches s'aplatissent dans un grand « FLOP ! ». L'escalier tout entier devient, en un clin d'œil, un long toboggan de pierre parfaitement lisse !"<br/><br/>
        "Sur le mur du fond de la galerie, un grand portrait poussiéreux représente un tout petit roi coiffé d'une couronne beaucoup trop grande : on jurerait qu'il vous fait un clin d'œil. Plus haut, d'imposantes armures vides montent la garde. L'une d'elles, plus grande et plus bancale que les autres, tient un énorme plumeau à la place d'une épée. Et à y regarder de plus près... cette armure-là semble respirer. Que faites-vous ?"
      </ReadAloud>

      <ActionBox title="Options d'Exploration et Mécaniques (Bac à sable)">
        <h4 className="font-bold text-lg mb-2">1. Franchir l'escalier-toboggan (Test d'AGILITÉ - DD 10, chaque héros)</h4>
        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li>Le <strong>bonus de +2</strong> gagné à la salle 3 (la petite souris) s'applique ici. L'<strong>Acrobate</strong> réussit automatiquement avec Galipette.</li>
          <li><strong>Coup de main :</strong> un enfant qui a réussi tend la main à un ami en difficulté, qui relance avec +2.</li>
          <li><strong>Échec :</strong> le héros glisse dans un grand tas de coussins moelleux, prévus par les lutins. L'équipe perd <strong>1 seul Rire au total</strong>, pas un par enfant.</li>
        </ul>

        <h4 className="font-bold text-lg mb-2">2. Faire un clin d'œil au portrait du roi Pirouette (aucun jet)</h4>
        <p>Le portrait glousse silencieusement derrière le cadre, les épaules secouées de rire. Purement gratuit : ça prépare la rencontre avec le vrai roi à la salle 6.</p>
      </ActionBox>

      <h3 className="font-display text-2xl font-bold text-slate-700 mt-8 mb-4">SCÈNE 2 : LE CHEVALIER TROIS-LUTINS (Combat)</h3>
      <InfoBox title="Profil du chevalier Trois-Lutins">
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Apparence :</strong> vieille armure rouillée, plus haute et bancale que les autres, qui titube à chaque pas.</li>
          <li><strong>Le secret :</strong> trois petits lutins empilés à l'intérieur (casque, torse, jambes).</li>
          <li><strong>Voix :</strong> grosse voix caverneuse, qui change de ton parce que trois lutins parlent chacun leur tour sans se coordonner.</li>
        </ul>
      </InfoBox>

      <ReadAloud title="Texte à lire à voix haute">
        "En haut de l'escalier, la grande armure fait un pas lourd. CLANG. « HALTE ! » dit-elle d'une voix qui se veut terrifiante. « Je suis le chevalier... euh... » Une petite voix souffle de l'intérieur : « Trois-Lutins ! » « ...le chevalier Trois-Lutins, voilà ! Nul ne passe sans goûter à mon redoutable PLUMEAU ! » Elle brandit son arme à plumes, en titubant dangereusement sur le côté. Que faites-vous ?"
      </ReadAloud>

      <CombatBox title="Mécaniques de Combat (Le chevalier Trois-Lutins)">
        <h4 className="font-bold text-lg mb-2">L'Ennemi : le chevalier Trois-Lutins</h4>
        <ul className="list-disc pl-5 space-y-1 mb-6">
          <li><strong>Résistance :</strong> 6 touches pour le faire tomber (5 touches si l'équipe a 3 enfants). Un jet à <strong>11 ou plus</strong> est une touche.</li>
          <li><strong>Attaque (fin de chaque tour de table) :</strong> le plumeau chatouille quelqu'un. Le MJ lance 1D6 : sur 1, 2 ou 3, l'équipe perd <strong>1 Rire</strong>.</li>
        </ul>

        <h4 className="font-bold text-lg mb-2">Tactique et Environnement (Le rôle du MJ) :</h4>
        <ul className="list-disc pl-5 space-y-3">
          <li><strong>Option A - Passer entre ses jambes (AGILITÉ - DD 10) :</strong> l'armure perd l'équilibre, et la touche de ce tour compte <strong>double</strong>.</li>
          <li><strong>Option B - Souffler de la poussière dans la visière (MALICE - DD 9) :</strong> les trois lutins éternuent : l'armure n'attaque pas au tour suivant.</li>
          <li><strong>Option C - Résolution sans combat (CŒUR - DD 12) :</strong> parler gentiment aux lutins cachés. Celui du bas avoue qu'il en a assez de porter les deux autres : l'armure s'assoit dans un grand soupir métallique.</li>
        </ul>
      </CombatBox>

      <ReadAloud title="Texte à lire à voix haute (la chute du chevalier)">
        "L'armure vacille... penche à gauche... se redresse... penche encore plus fort à droite... et s'écroule dans un vacarme de casseroles et de ferraille. Le casque roule jusqu'à vos pieds dans un dernier tintement. Trois lutins étourdis sortent, l'un du plastron, l'autre d'une jambière, le troisième d'un gant froissé. « On t'avait bien dit que c'était MON tour d'être en haut ! » râle l'un d'eux. Ils vous regardent, et tous éclatent de rire. Au fond du casque renversé, deux pièces dorées tintent."
      </ReadAloud>

      <InfoBox title="Récompenses">
        <ul className="list-disc pl-5 space-y-1">
          <li><strong>Loot : 2 pièces en chocolat.</strong></li>
          <li><strong>Loot : le plumeau géant.</strong> Une seule fois, chatouiller un obstacle ou un lutin récalcitrant donne une réussite automatique à un jet de CŒUR.</li>
        </ul>
      </InfoBox>
    </section>
  );
}
