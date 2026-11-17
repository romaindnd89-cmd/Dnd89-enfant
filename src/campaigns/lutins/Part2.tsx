import React from 'react';
import { ReadAloud, CombatBox, ActionBox, InfoBox } from '../../components/StoryBlocks';
import { Chapter } from '../../components/CampaignLayout';
import { AmbianceBox, VictoryBox, SideQuestBox } from '../../components/StoryExtras';

export default function Part2() {
  return (
    <div className="space-y-12">
      {/* SALLE 4 */}
      <section>
        <Chapter id="chap4" emoji="🛡️" title="SALLE 4 : LA GALERIE DES ARMURES" />

        <h3 className="font-display text-2xl font-bold text-slate-700 mt-8 mb-4">
          La scène : l'escalier farceur et le chevalier qui éternue
        </h3>
        <p className="mb-4 text-slate-700">
          Un grand escalier de pierre monte vers une longue galerie. De chaque côté, des armures vides montent la garde. L'une d'elles, plus grande que les autres, tient un plumeau géant à la place d'une épée. Et il semble bien qu'elle respire…
        </p>

        <AmbianceBox>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Ce qu'on voit :</strong> un tapis rouge un peu mité, des portraits de lutins à moustaches qui suivent les visiteurs des yeux, des armures cabossées. Par la visière de la plus grande, on devine trois paires d'yeux, les unes au-dessus des autres.</li>
            <li><strong>Ce qu'on entend :</strong> le métal qui grince, des chuchotements dans l'armure (« Pousse-toi ! — C'est toi qui me marches sur la tête ! »).</li>
            <li><strong>Ce qu'on sent :</strong> la cire, le métal et un peu la poussière qui pique le nez.</li>
            <li><strong>Comment jouer l'armure :</strong> une grosse voix caverneuse, qui change sans arrêt parce que trois lutins parlent à tour de rôle. Elle marche en zigzag : celui du bas ne voit rien.</li>
          </ul>
        </AmbianceBox>

        <ActionBox title="D'abord : l'escalier farceur">
          <p className="mb-2">Au milieu de la montée, les marches s'aplatissent d'un coup : l'escalier devient un toboggan !</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Chaque héros lance <strong>1D20 + Agilité</strong> (réussite à 10) pour s'accrocher à la rampe. L'<strong>Acrobate</strong> peut utiliser sa Galipette.</li>
            <li>Un héros qui a réussi peut tendre la main à un ami : celui-ci relance son dé avec <strong>+2</strong>.</li>
            <li>Ceux qui glissent arrivent en bas dans un tas de coussins, sans mal. L'équipe perd <strong>1 Rire en tout</strong> (pas un par enfant), et tout le monde remonte.</li>
          </ul>
        </ActionBox>

        <ReadAloud title="La narration à voix haute :">
          "En haut de l'escalier, la grande armure fait un pas en avant. CLANG. « HALTE ! » dit-elle d'une voix terrible. « Je suis le chevalier… euh… » Une petite voix souffle de l'intérieur : « Trois-Lutins ! » « …le chevalier Trois-Lutins ! Nul ne passe sans goûter à mon PLUMEAU ! » Et elle brandit son arme à plumes en titubant."
        </ReadAloud>

        <CombatBox title="Le combat : le chevalier Trois-Lutins">
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Résistance :</strong> il faut <strong>6 touches</strong> pour le faire tomber (5 touches à trois enfants). Un jet réussi à <strong>11 ou plus</strong> compte pour une touche.</li>
            <li><strong>Son attaque :</strong> à la fin de chaque tour de table, le plumeau chatouille quelqu'un : le MJ lance <strong>1D6</strong>, et sur 1, 2 ou 3 l'équipe perd <strong>1 Rire</strong>.</li>
            <li><strong>Point faible, les genoux :</strong> un héros qui passe entre ses jambes (Agilité) lui fait perdre l'équilibre : la touche compte <strong>double</strong>.</li>
            <li><strong>Point faible, la visière :</strong> lui souffler de la poussière ou du poivre au visage (Malice) : les trois lutins éternuent, et l'armure <strong>n'attaque pas</strong> à ce tour.</li>
            <li><strong>Sans combat :</strong> parler directement aux lutins cachés dedans (Cœur, réussite à 12) : celui du bas avoue qu'il en a assez de porter les deux autres, et l'armure s'assoit.</li>
          </ul>
        </CombatBox>

        <VictoryBox>
          <p className="italic">"L'armure vacille… penche à gauche… penche à droite… et s'écroule dans un vacarme de casseroles. Le casque roule jusqu'à vos pieds. Trois lutins tout étourdis sortent des morceaux, l'un du plastron, l'autre d'une jambe, le troisième d'un gant. « On vous avait dit que c'était MON tour d'être en haut ! » Ils se regardent, vous regardent, et éclatent de rire. Au fond du casque, deux pièces dorées tintent."</p>
          <p><strong>Récompenses :</strong> <strong>2 pièces en chocolat</strong>. Les trois lutins, bons joueurs, offrent le <strong>plumeau géant</strong> : une fois, il permet de chatouiller un obstacle ou un lutin pour réussir un jet de <strong>Cœur</strong> automatiquement.</p>
        </VictoryBox>
      </section>

      {/* SALLE 5 */}
      <section>
        <Chapter id="chap5" emoji="🪞" title="SALLE 5 : LA SALLE DES MIROIRS" />

        <h3 className="font-display text-2xl font-bold text-slate-700 mt-8 mb-4">
          La scène : le labyrinthe des reflets
        </h3>
        <p className="mb-4 text-slate-700">
          La galerie débouche sur une salle ronde entièrement couverte de miroirs. Certains vous font tout petits, d'autres tout ronds, d'autres vous donnent un nez de carotte. La porte de sortie est là, quelque part, mais elle se reflète cent fois : laquelle est la vraie ?
        </p>

        <AmbianceBox>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Ce qu'on voit :</strong> des centaines de reflets des héros, déformés de toutes les façons. Des cadres dorés, des chandeliers qui se répètent à l'infini. Dans un coin du miroir, de temps en temps, un bonnet à grelot qui ne devrait pas y être.</li>
            <li><strong>Ce qu'on entend :</strong> l'écho de ses propres pas, et des rires qui semblent venir de l'intérieur des miroirs.</li>
            <li><strong>Ce qu'on sent :</strong> rien du tout, et c'est étrange après toutes ces odeurs.</li>
            <li><strong>Comment jouer Reflet,</strong> le lutin des miroirs : il répète tout ce que disent les enfants, avec leur voix, une seconde après eux. Il ne se montre que lorsqu'on le fait rire.</li>
          </ul>
        </AmbianceBox>

        <ReadAloud title="La narration à voix haute :">
          "Vous faites un pas : cent enfants font un pas. Vous levez la main : cent mains se lèvent. Sauf une. Dans le troisième miroir, votre reflet vous tire la langue ! Une voix qui ressemble à la vôtre ricane : « Sauf une… sauf une… Si vous voulez la porte, faites comme moi. Exactement comme moi. Hi hi ! »"
        </ReadAloud>

        <ActionBox title="Le jeu du miroir (pour de vrai !)">
          <p className="mb-3">Cette épreuve se joue debout. Le MJ joue Reflet et fait <strong>trois gestes à la suite</strong> (toucher son nez, tourner sur soi, lever un pied…). Les enfants doivent les refaire <strong>tous ensemble, dans le même ordre</strong>.</p>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li><strong>Manche 1 :</strong> trois gestes lents.</li>
            <li><strong>Manche 2 :</strong> quatre gestes, un peu plus vite.</li>
            <li><strong>Manche 3 :</strong> c'est un enfant qui invente les gestes, et Reflet (le MJ) qui doit suivre. Trompez-vous exprès : les enfants adorent.</li>
          </ul>
          <p className="mb-3">Une manche ratée coûte <strong>1 Rire</strong> et se rejoue. Pour les enfants qui préfèrent les dés : un jet d'<strong>Agilité</strong> par manche, réussite à 10.</p>
          <p><strong>Trouver la vraie porte :</strong> Reflet, vaincu, donne un indice : « La vraie porte est la seule qui n'aime pas qu'on lui souffle dessus. » En soufflant sur les miroirs, tous se couvrent de buée… sauf la vraie porte, qui est en bois. Un jet de <strong>Malice</strong> (réussite à 10) permet de le deviner sans l'indice.</p>
        </ActionBox>

        <VictoryBox>
          <p className="italic">"Vous soufflez tous ensemble. Les miroirs se voilent de buée, l'un après l'autre, comme des fenêtres en hiver. Tous, sauf un. La vraie porte est là, toute simple, avec sa poignée en forme de grelot. Dans la buée d'un miroir, un petit doigt invisible dessine un bonhomme qui sourit, puis deux pièces rondes. Et les pièces tombent du miroir, pour de bon, à vos pieds."</p>
          <p><strong>Récompense :</strong> <strong>2 pièces en chocolat</strong>.</p>
        </VictoryBox>

        <SideQuestBox title="Petit Pois est perdu">
          <p className="italic">"Derrière un grand miroir, on entend renifler. Un tout jeune lutin, bonnet de travers, est assis par terre. « Je… je jouais à cache-cache. Mais je me suis tellement bien caché que je ne me retrouve plus. »"</p>
          <p><strong>Petit Pois</strong> (toute petite voix, il a le hoquet quand il a peur) n'ose plus bouger : tous ses reflets lui font peur.</p>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>Le rassurer</strong> (Cœur, réussite à 8) ou lui donner la main pour traverser.</li>
            <li><strong>Lui montrer que les reflets sont rigolos</strong> en faisant des grimaces devant les miroirs (réussite automatique si les enfants le font pour de vrai).</li>
          </ul>
          <p><strong>Récompense :</strong> Petit Pois suit l'équipe jusqu'à la salle du trésor et confie un secret : « Le roi dit toujours qu'un trésor, c'est comme un fou rire : ça ne vaut rien si on le garde pour soi. » Retenez cette phrase : c'est la clé de la dernière salle.</p>
        </SideQuestBox>
      </section>

      {/* SALLE 6 */}
      <section>
        <Chapter id="chap6" emoji="👑" title="SALLE 6 : LE TRÉSOR DU ROI PIROUETTE" />

        <h3 className="font-display text-2xl font-bold text-slate-700 mt-8 mb-4">
          La scène : la salle du trône
        </h3>
        <p className="mb-4 text-slate-700">
          Derrière la porte, une salle immense, pleine de lutins assis sur des gradins comme au cirque. Au fond, sur un trône fait de coussins empilés, le <strong>roi Pirouette Iᵉʳ</strong>. À ses pieds, un coffre énorme, fermé par <strong>trois serrures</strong>.
        </p>

        <AmbianceBox>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Ce qu'on voit :</strong> des guirlandes, des lampions, des centaines de bonnets à grelots. Un coffre de bois sombre, cerclé d'or, plus haut que les enfants. Sur chaque serrure, un mot gravé : <strong>RIRE</strong>, <strong>RUSE</strong>, <strong>PARTAGE</strong>.</li>
            <li><strong>Ce qu'on entend :</strong> un brouhaha joyeux qui s'arrête net quand les héros entrent. Puis un seul grelot, celui de la couronne du roi.</li>
            <li><strong>Ce qu'on sent :</strong> le chocolat, très fort. Il vient du coffre.</li>
            <li><strong>Comment jouer le roi Pirouette :</strong> minuscule, même pour un lutin, mais une voix de théâtre et de grands gestes. Il fait semblant d'être très sérieux et n'y arrive pas plus de dix secondes. Il aime sincèrement les enfants qui s'entraident.</li>
            <li><strong>Les lutins du public :</strong> ils applaudissent, font « Oooh ! » et « Aaah ! », et soufflent des réponses fausses pour embrouiller tout le monde.</li>
          </ul>
        </AmbianceBox>

        <ReadAloud title="La narration à voix haute :">
          "Le petit roi se lève sur son trône de coussins, manque de tomber, se rattrape. « Chasseurs de trésor ! Vous avez franchi ma grille, survécu à ma cuisine, apprivoisé mes livres, renversé mon chevalier et trompé mes miroirs. Bravo ! Mais mon coffre a trois serrures, et aucune clé au monde ne les ouvre. Il faut trois choses que l'on ne peut pas mettre dans sa poche. Êtes-vous prêts ? » Tous les lutins retiennent leur souffle."
        </ReadAloud>

        <ActionBox title="Première serrure : RIRE">
          <p className="mb-2">Il faut faire rire le roi, qui se retient de toutes ses forces. Chaque enfant tente sa chance, à tour de rôle : une grimace, une blague, une danse, une imitation.</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Si l'enfant le fait <strong>pour de vrai</strong>, c'est réussi d'office. Sinon : jet de <strong>Cœur</strong>, réussite à 10.</li>
            <li>La serrure s'ouvre quand <strong>la moitié des enfants</strong> ont réussi. Le plumeau géant compte pour une réussite.</li>
          </ul>
        </ActionBox>

        <ActionBox title="Deuxième serrure : RUSE">
          <ul className="list-disc pl-5 space-y-3">
            <li><strong>Le roi demande :</strong> <em>« Plus on m'en donne, plus j'en ai. Plus je le garde pour moi, moins j'en ai. Les lutins en ont plein les joues. Qu'est-ce que c'est ? »</em></li>
            <li><strong>Réponse :</strong> le rire (on accepte aussi la joie, le bonheur, les sourires, l'amitié).</li>
            <li><strong>S'ils sèchent :</strong> un jet de <strong>Malice</strong> (réussite à 10), ou Petit Pois souffle la réponse en faisant semblant de tousser.</li>
          </ul>
        </ActionBox>

        <ActionBox title="Troisième serrure : PARTAGE">
          <p className="mb-3">Le roi désigne le bol où l'équipe a rangé ses pièces. Lisez lentement :</p>
          <p className="italic mb-3">"« Dernière serrure. Vous avez gagné de belles pièces en chocolat. Elles sont à vous, vous les avez méritées. Mais regardez mes lutins : ils en ont caché partout, et ils n'en ont plus une seule pour eux. Alors voici ma question. Ce trésor… le gardez-vous, ou le partagez-vous ? »"</p>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Laissez les enfants en discuter entre eux.</strong> N'intervenez pas tout de suite : c'est le plus beau moment de la partie.</li>
            <li><strong>S'ils partagent</strong> (même une seule pièce) : la troisième serrure s'ouvre toute seule. Passez à la victoire.</li>
            <li><strong>S'ils veulent tout garder :</strong> rien de grave. La serrure reste fermée, les lutins font « Oooh… ». Petit Pois (ou Grelot) tire un héros par la manche et répète la phrase du roi : « Un trésor, c'est comme un fou rire : ça ne vaut rien si on le garde pour soi. » Laissez-leur une seconde chance.</li>
          </ul>
        </ActionBox>

        <VictoryBox title="Le coffre s'ouvre ! (à lire à voix haute)">
          <p className="italic">"CLAC. CLAC. CLAC. Les trois serrures tombent. Le couvercle se soulève, et une lumière dorée inonde la salle. Le coffre est plein à ras bord de pièces en chocolat ! Et voilà le plus beau tour des lutins : chaque fois que quelqu'un en donne une, deux autres apparaissent à la place. Les lutins sautent des gradins, lancent leurs bonnets en l'air, vous hissent sur leurs épaules, enfin, ils essaient. Le roi Pirouette pose sa couronne à grelot sur la tête du plus jeune d'entre vous. « Vous êtes venus chercher un trésor, » dit-il, « et vous êtes repartis avec cent amis. C'est la meilleure farce que j'aie jamais faite. »"</p>
          <p><strong>Récompense :</strong> le MJ sort toutes les pièces en chocolat restantes. L'équipe les <strong>partage en parts égales</strong>, et en met une de côté « pour les lutins » (c'est-à-dire pour le MJ).</p>
        </VictoryBox>

        <InfoBox title="Le cœur de l'histoire">
          <p>La leçon tient en une phrase, et les enfants la trouvent souvent tout seuls : <strong>un trésor grandit quand on le partage.</strong> Félicitez l'équipe entière plutôt qu'un héros en particulier.</p>
        </InfoBox>
      </section>
    </div>
  );
}
