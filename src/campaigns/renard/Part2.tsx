import React from 'react';
import { ReadAloud, CombatBox, ActionBox, InfoBox } from '../../components/StoryBlocks';
import { Chapter } from '../../components/CampaignLayout';

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
