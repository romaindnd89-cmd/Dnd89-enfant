import React from 'react';
import { ReadAloud, CombatBox, ActionBox, InfoBox } from '../../components/StoryBlocks';
import { Chapter } from '../../components/CampaignLayout';
import { AmbianceBox, VictoryBox, SideQuestBox } from '../../components/StoryExtras';

export default function Part2() {
  return (
    <div className="space-y-12">
      {/* CHAPITRE 4 */}
      <section>
        <Chapter id="chap4" emoji="🐿️" title="CHAPITRE 4 : LE VILLAGE DES ÉCUREUILS" />

        <h3 className="font-display text-2xl font-bold text-slate-700 mt-8 mb-4">
          La Scène : Des maisons dans les branches
        </h3>
        <p className="mb-4 text-slate-700">
          En haut d'un grand hêtre, les écureuils ont construit un village de petites maisons reliées par des ponts de corde. Normalement, c'est le lieu le plus joyeux de la forêt. Aujourd'hui, c'est la panique : à cause de la brume, les écureuils ont <strong>oublié où ils avaient caché toutes leurs provisions</strong> pour l'hiver !
        </p>

        <AmbianceBox>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Ce qu'on voit :</strong> des cabanes faites de coques de noix et d'écorce, des ponts de corde qui se balancent, du linge minuscule qui sèche, des lanternes en gland toutes éteintes. Le sol est très, très loin en dessous.</li>
            <li><strong>Ce qu'on entend :</strong> des couinements affolés, des dizaines de petites pattes qui courent sur le bois, les ponts qui grincent.</li>
            <li><strong>Ce qu'on sent :</strong> la résine, la noisette et la sciure.</li>
            <li><strong>Comment les jouer :</strong> les écureuils parlent tous en même temps et très vite. Faites trois ou quatre petites voix différentes qui se coupent la parole.</li>
          </ul>
          <p className="font-bold mt-3">Les personnages à faire parler :</p>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Noisette</strong>, la cheffe : voix chevrotante mais ferme. Elle tape du pied quand elle veut le silence.</li>
            <li><strong>Pignon</strong>, un jeune écureuil : trop bavard, il pose mille questions au renard (« C'est vrai que tu te souviens de TOUT ? Même de ce que tu as mangé hier ? »).</li>
            <li><strong>Cric, Crac et Croc</strong>, les triplés : ils finissent les phrases les uns des autres et ne sont jamais d'accord sur l'endroit des cachettes.</li>
          </ul>
        </AmbianceBox>

        <ReadAloud title="La Narration à voix haute :">
          "Dès que tu grimpes sur la première plateforme, une nuée d'écureuils t'entoure en couinant. « Un visiteur ! Au secours ! On a tout oublié ! On va avoir froid ! On va avoir faim ! » Leur cheffe, la vieille <strong>Noisette</strong>, tape dans ses pattes pour les calmer. « Du calme ! » Puis elle te regarde : « Toi… tes yeux brillent encore. Tu te souviens, n'est-ce pas ? Aide-nous, et je te dirai où nous avons vu briller un Gland d'Or. »"
        </ReadAloud>

        <ActionBox title="L'Interaction : Retrouver les provisions">
          <p className="mb-4">Pas de combat ici : c'est un chapitre d'entraide. L'enfant choisit comment aider. Chaque bonne idée mérite un jet.</p>
          <ul className="list-disc pl-5 space-y-2 mb-4">
            <li><strong>Suivre son nez :</strong> le renard renifle les noisettes enterrées. Lance <strong>1D20 + Flair (+5)</strong>. À 10+, tu déterres trois cachettes d'un coup !</li>
            <li><strong>Grimper tout en haut :</strong> pour repérer la terre fraîchement remuée. Lance <strong>1D20 + Agilité (+4)</strong>.</li>
            <li><strong>Consoler les petits :</strong> rassurer les bébés écureuils qui pleurent. Lance <strong>1D20 + Cœur (+5)</strong>.</li>
          </ul>
          <p className="italic text-slate-700">
            Quand les provisions sont retrouvées, c'est la fête (une petite fête grise, mais une fête quand même !). Noisette te récompense avec un <strong>sifflet en gland</strong> : « Souffle dedans si tu as besoin de nous. Les écureuils arrivent toujours ! »
          </p>
        </ActionBox>

        <VictoryBox title="Les provisions sont retrouvées ! (à lire à voix haute)">
          <p className="italic">"Une cachette, puis deux, puis dix ! À chaque trou que tu découvres, un écureuil pousse un cri de joie et fait la roue. Bientôt, tout le village forme une longue chaîne de petites pattes pour remonter noisettes, glands et pommes de pin jusqu'aux greniers. Les triplés te portent en triomphe, enfin, ils essaient : tu es beaucoup trop lourd, et tout le monde s'écroule en riant. Pour la première fois depuis le matin gris, tu entends quelqu'un rire dans la forêt."</p>
          <p><strong>Récompenses :</strong> le <strong>sifflet en gland</strong> de Noisette, et un bon goûter : le renard récupère <strong>tous ses PV</strong>.</p>
        </VictoryBox>

        <SideQuestBox title="Le grand concours de saut de Pignon">
          <p className="italic">"« Dis, dis, dis ! » Pignon te tire par la queue. « Chez nous, les invités font le concours de saut. Trois branches, de plus en plus loin. Personne n'a jamais réussi la troisième. Enfin… je crois. J'ai oublié. »"</p>
          <p>Trois sauts, trois jets de <strong>Bond du Renard (1D20 + Agilité +4)</strong> :</p>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>Branche du Débutant :</strong> réussite à 8.</li>
            <li><strong>Branche du Casse-Cou :</strong> réussite à 11.</li>
            <li><strong>Branche de la Légende :</strong> réussite à 14.</li>
          </ul>
          <p>Un saut raté n'est pas dangereux : les écureuils ont tendu un filet de toiles et de feuilles, et le renard rebondit dedans.</p>
          <p><strong>Récompense</strong> (dès deux sauts réussis) : un <strong>bouclier d'écorce</strong>. Une fois dans l'aventure, il <strong>annule tous les dégâts d'une attaque</strong>, puis se casse.</p>
        </SideQuestBox>

        <InfoBox title="Note pour le MJ — un allié pour plus tard">
          <p>Le <strong>sifflet en gland</strong> est important : plus tard, dans le terrier de Grisaille (chapitre 8), l'enfant pourra l'utiliser pour appeler les écureuils à la rescousse. Pensez à le lui rappeler discrètement si besoin.</p>
          <p className="mt-2">Noisette révèle son indice : « Le premier Gland d'Or, celui du <strong>Rire</strong>, est tombé dans la <strong>Ronceraie</strong>, le grand buisson d'épines au sud. On entend quelqu'un y pleurer… »</p>
        </InfoBox>
      </section>

      {/* CHAPITRE 5 */}
      <section>
        <Chapter id="chap5" emoji="🌹" title="CHAPITRE 5 : LA RONCERAIE (Le Gland du Rire)" />

        <h3 className="font-display text-2xl font-bold text-slate-700 mt-8 mb-4">
          La Scène : Le labyrinthe d'épines
        </h3>
        <p className="mb-4 text-slate-700">
          La Ronceraie est un immense buisson de ronces aux épines longues comme des aiguilles. Au milieu, une lueur dorée pulse doucement : le <strong>Gland du Rire</strong>. Mais tout près, on entend de petits sanglots.
        </p>

        <AmbianceBox>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Ce qu'on voit :</strong> des ronces hautes comme des maisons, qui forment des tunnels sombres. Des mûres grises pendent partout. Des gouttes de rosée brillent sur les épines comme de petites perles. Au fond, une lueur dorée bat doucement, comme un cœur.</li>
            <li><strong>Ce qu'on entend :</strong> des grattements, le vent qui siffle entre les épines, et de tout petits sanglots étouffés.</li>
            <li><strong>Ce qu'on sent :</strong> la mûre trop mûre et la terre humide.</li>
            <li><strong>Comment jouer Piquillon :</strong> toute petite voix, il renifle entre chaque phrase et commence souvent par « Je… je… ». Il a honte de s'être coincé et a peur qu'on se moque de lui.</li>
            <li><strong>S'il faut aider l'enfant à le faire rire :</strong> proposez une grimace, une danse ridicule, une blague, un bruit rigolo, ou de lui chatouiller le bout du museau avec une plume.</li>
          </ul>
        </AmbianceBox>

        <ReadAloud title="La Narration à voix haute :">
          "Tu t'approches et tu découvres un tout petit hérisson, <strong>Piquillon</strong>, coincé dans les ronces. Ses piquants se sont accrochés partout et il ne peut plus bouger. À côté de lui, le Gland du Rire brille, mais chaque fois que Piquillon pleure, sa lumière faiblit. « Je… je voulais l'attraper pour le ramener au Grand Chêne, » renifle-t-il, « mais je me suis coincé, et maintenant j'ai tout oublié, même comment on sourit… »"
        </ReadAloud>

        <ActionBox title="L'Action : Libérer Piquillon">
          <p className="mb-4">Deux petits défis, à faire dans l'ordre que l'enfant préfère :</p>
          <ul className="list-disc pl-5 space-y-2 mb-4">
            <li><strong>Traverser les ronces :</strong> se faufiler sans se piquer. Lance <strong>1D20 + Agilité (+4)</strong>. En cas d'échec : −2 PV (une épine !) mais on continue.</li>
            <li><strong>Décoincer le hérisson :</strong> démêler les piquants tout doucement. Lance <strong>1D20 + Malice (+3)</strong>. Astuce : mouiller les ronces avec l'eau du ruisseau les rend plus souples (bonus +3).</li>
          </ul>
          <p className="mb-2"><strong>Le vrai secret :</strong> le Gland du Rire ne brillera à nouveau que si Piquillon <strong>re-sourit</strong>. L'enfant doit trouver comment le faire rire : une grimace, une blague, une galipette… Récompensez toute idée rigolote par une réussite automatique !</p>
          <p className="italic text-slate-700">
            Quand Piquillon éclate de rire, le <strong>Gland du Rire</strong> explose de lumière dorée et saute dans ta patte. 🎉 <strong>Premier Gland d'Or récupéré !</strong> Piquillon, tout content, décide de te suivre.
          </p>
        </ActionBox>

        <VictoryBox title="Le Gland du Rire (à lire à voix haute)">
          <p className="italic">"Piquillon pouffe, se retient, puis éclate d'un rire si clair qu'il rebondit sur toutes les épines. Le Gland d'Or s'allume comme un petit soleil ! Autour de vous, les mûres reprennent leur couleur une à une : noir, violet, rouge. Une vague de chaleur te traverse des moustaches jusqu'au bout de la queue. Et quelque part, très loin dans la forêt, quelqu'un d'autre se met à rire sans savoir pourquoi."</p>
          <p><strong>Récompenses :</strong> le <strong>Gland du Rire</strong> (1 sur 3), une poignée de mûres (le renard récupère <strong>3 PV</strong>), et un nouvel ami : <strong>Piquillon</strong> accompagne le renard. Une fois par combat, il peut se mettre en boule devant lui : l'ennemi qui attaque se pique et perd <strong>2 PV</strong>.</p>
        </VictoryBox>

        <SideQuestBox title="Dame Lente-Lune, l'escargot">
          <p className="italic">"Au milieu d'un tunnel de ronces, une énorme coquille en spirale bouche le passage. Deux antennes se tournent vers toi, sans se presser. « Bonjour… jeune… renard. Je passe… Ce sera… l'affaire… d'une petite heure. »"</p>
          <p><strong>Dame Lente-Lune</strong> (voix très, très lente, avec de longues pauses) n'est pas pressée, mais elle s'ennuie. Elle se pousse volontiers en échange d'une <strong>histoire drôle</strong> ou d'une <strong>chanson</strong> inventée par l'enfant. Toute tentative réussit : elle rit en trois fois, très lentement (« Ha… Ha… Ha… »).</p>
          <p><strong>Récompense :</strong> elle a tout vu passer, même si elle est lente. « L'araignée du vallon… n'aime pas… la lumière. Et sa toile… craint… la chaleur. » L'enfant connaît maintenant les deux points faibles de Filandre (chapitre 6).</p>
        </SideQuestBox>

        <InfoBox title="Bravo ! 1 Gland d'Or sur 3">
          <p>C'est une grande étape. La Feuille d'Or du renard brille un peu plus fort. Lumi rappelle : « Il en reste deux : la <strong>Chanson</strong>, cachée dans la Grotte aux Échos, et l'<strong>Amitié</strong>… que garde Grisaille elle-même. »</p>
        </InfoBox>
      </section>

      {/* CHAPITRE 6 */}
      <section>
        <Chapter id="chap6" emoji="🕸️" title="CHAPITRE 6 : L'ARAIGNÉE DE BRUME" />

        <h3 className="font-display text-2xl font-bold text-slate-700 mt-8 mb-4">
          La Scène : Le vallon embrumé
        </h3>
        <p className="mb-4 text-slate-700">
          Pour atteindre la Grotte aux Échos, il faut traverser un vallon plein de brume épaisse. Entre deux arbres morts, une gigantesque toile grise barre le passage. Sa propriétaire, <strong>Filandre l'Araignée de Brume</strong>, descend lentement d'un fil, huit yeux luisant dans le gris.
        </p>

        <AmbianceBox>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Ce qu'on voit :</strong> une brume épaisse qui monte jusqu'aux genoux et cache le sol. Des arbres morts aux branches tordues, comme des mains. Une toile immense, couverte de gouttelettes, qui brille faiblement. On ne voit pas à plus de trois pas, sauf près de Lumi.</li>
            <li><strong>Ce qu'on entend :</strong> des gouttes qui tombent, et parfois un fil de la toile qui vibre comme une corde de violon.</li>
            <li><strong>Ce qu'on sent :</strong> la cave humide et les champignons.</li>
            <li><strong>Comment jouer Filandre :</strong> voix sifflante, elle étire tous les « s ». Elle est plus vaniteuse que méchante : elle adore qu'on admire sa toile et se vexe si on la critique.</li>
            <li><strong>Sa tactique :</strong> au premier tour, elle lance son fil collant. Ensuite elle descend pour mordiller (1D4). Quand il ne lui reste que 4 PV ou moins, elle arrête le combat et supplie qu'on la laisse partir.</li>
            <li><strong>Sans combat :</strong> un enfant qui la complimente sur sa toile peut tenter 1D20 + Cœur (+5). À 12 ou plus, flattée, elle ouvre elle-même un passage.</li>
          </ul>
        </AmbianceBox>

        <ReadAloud title="La Narration à voix haute :">
          "« Ssssalut, petit renard, » siffle l'araignée. « Grisaille m'a dit de n'laisser passssser personne qui se souvient encore. Mais tu peux toujours essssayer… » Filandre lance un jet de fil collant pour t'emprisonner. La brume t'empêche de bien voir : tu dois rester près de Lumi, dont la lumière perce le brouillard."
        </ReadAloud>

        <CombatBox title="Les Statistiques du Monstre">
          <p className="font-bold mb-2">Filandre, l'Araignée de Brume</p>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>PV :</strong> 14.</li>
            <li><strong>CA :</strong> 13.</li>
            <li><strong>Attaque :</strong> <em>Fil collant</em> (1D6). Si elle touche, tu es collé : au tour suivant, tu dois te libérer avec un jet d'<strong>Agilité (1D20 + 4, réussite à 10)</strong> avant de pouvoir agir.</li>
            <li><strong>Point faible — la lumière :</strong> si Lumi brille de toutes ses forces sur Filandre, l'araignée est éblouie et perd <strong>−3</strong> en CA (plus facile à toucher) pendant 2 tours.</li>
            <li><strong>Astuce maligne :</strong> on peut gagner sans combattre, en <strong>brûlant un coin de la toile</strong> avec la chaleur de la Feuille d'Or pour ouvrir un passage, puis en filant très vite (course : 1D20 + Agilité).</li>
          </ul>
        </CombatBox>

        <ActionBox title="Le MJ dirige l'action :">
          <ol className="list-decimal pl-5 space-y-3 mb-4">
            <li><strong>Initiative :</strong> 1D20, à 10+ le renard commence.</li>
            <li><strong>Tes options :</strong>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li><em>Attaque de crocs :</em> 1D20 + Courage (+3), dégâts 1D6.</li>
                <li><em>Éblouir avec Lumi</em> puis frapper (combo malin).</li>
                <li><em>La ruse de la flamme</em> pour éviter le combat (voir ci-dessus).</li>
              </ul>
            </li>
          </ol>
          <p className="italic text-slate-700">
            Vaincue ou semée, Filandre s'enfuit dans la brume en marmonnant. Le vallon se dégage, et devant toi s'ouvre l'entrée sombre de la <strong>Grotte aux Échos</strong>.
          </p>
        </ActionBox>

        <VictoryBox>
          <p className="italic">"« Asssez ! Asssez ! » Filandre remonte le long de son fil en agitant ses huit pattes. « Passse, petit roux, passse ! Tu es bien trop remuant pour moi. » Elle se réfugie tout en haut d'un arbre mort et boude, le dos tourné. La grande toile se déchire lentement, et un rayon de lumière traverse enfin le vallon."</p>
          <p><strong>Butin :</strong> dans les restes de la toile, le renard trouve une <strong>pelote de fil d'argent</strong>, fin et très solide. Elle sert de corde : <strong>+2 à un jet d'Agilité</strong> de son choix (pour grimper, descendre ou franchir un trou).</p>
          <p><strong>Si le renard est tombé à 0 PV :</strong> il se réveille emmailloté comme un saucisson. Piquillon découpe les fils avec ses piquants pendant que Lumi éblouit l'araignée. Le renard repart avec 3 PV.</p>
        </VictoryBox>

        <SideQuestBox title="Velours, le papillon de nuit">
          <p className="italic">"Dans un coin de la toile, quelque chose se débat : un gros papillon de nuit aux ailes de velours gris. « Oh, quelle sotte je fais, » soupire-t-il. « J'ai vu une jolie lumière, et me voilà collé. »"</p>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>Le décoller sans abîmer ses ailes :</strong> 1D20 + Malice (+3), réussite à 10. Avec de l'eau ou l'aide des piquants de Piquillon : +3.</li>
          </ul>
          <p><strong>Récompense :</strong> Velours secoue ses ailes au-dessus de Lumi et la couvre de <strong>poussière de lune</strong>. Une fois dans l'aventure, Lumi peut briller deux fois plus fort : toutes les créatures de la brume présentes ont <strong>−2 à leurs actions pendant tout un combat</strong>.</p>
        </SideQuestBox>

        <div className="mt-8 p-6 bg-emerald-50 border-2 border-emerald-200 rounded-2xl">
          <h3 className="font-display text-xl font-bold text-emerald-800 mb-3 flex items-center gap-2">
            <span className="text-2xl">🌿</span> Petit répit
          </h3>
          <p className="italic text-emerald-900">
            "La brume se déchire enfin. Tu reprends ton souffle, Piquillon serré contre toi, Lumi dansant au-dessus de ta tête. Devant vous, une grotte respire doucement, comme si elle chantait tout bas une chanson oubliée…"
          </p>
        </div>
      </section>
    </div>
  );
}
