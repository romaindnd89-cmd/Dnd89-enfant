import React from 'react';
import { ReadAloud, CombatBox, ActionBox, InfoBox } from '../../components/StoryBlocks';
import { Chapter } from '../../components/CampaignLayout';

export default function Part1() {
  return (
    <div className="space-y-12">
      {/* CHAPITRE 1 */}
      <section>
        <Chapter id="chap1" emoji="🌫️" title="CHAPITRE 1 : LE RÉVEIL GRIS" />

        <h3 className="font-display text-2xl font-bold text-slate-700 mt-8 mb-4">
          La Scène : Un terrier sans couleurs
        </h3>
        <p className="mb-4 text-slate-700">
          Le terrier de la famille Renard sent bon la mousse et les feuilles sèches. Mais ce matin, quelque chose cloche : tout est gris, comme une vieille photo. Dehors, la forêt de Grisefeuille a perdu ses mille couleurs d'automne.
        </p>

        <ReadAloud title="La Narration à voix haute :">
          "Tu sors le museau de ton terrier. L'air est froid et sent le vieux papier. Sur le chemin, tu croises Monsieur Blaireau qui tourne en rond : « Je cherche… je cherche… mais je ne sais plus quoi ! » Plus loin, deux lapins se regardent sans se reconnaître, alors qu'ils sont frère et sœur.<br/><br/>
          Au pied du grand saule, tu trouves <strong>Mémé Rouquine</strong>, ta grand-mère. Elle te sourit doucement, mais son regard est flou. « Oh, bonjour petit… tu me rappelles quelqu'un… » Elle a oublié ton nom. Dans ta patte, ta feuille dorée se met à chauffer, et la petite Lumi se pose sur ton oreille : « Vite ! Tant que tu te souviens, tu peux encore tout sauver. »"
        </ReadAloud>

        <ActionBox title="L'Interaction : Réveiller un souvenir">
          <p className="mb-4">L'enfant peut essayer d'aider Mémé Rouquine à se rappeler qui il est. C'est un moment tout doux pour commencer l'aventure en confiance.</p>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>L'idée :</strong> montrer l'écharpe rouge, chanter une chanson, ou lui faire sentir la feuille d'or.</li>
            <li><strong>Le jet :</strong> lance <strong>1D20 + Cœur (+5)</strong>. À <strong>10 ou plus</strong>, un petit éclat de mémoire revient : Mémé se souvient de ton prénom le temps d'un câlin, et te glisse un indice.</li>
            <li><strong>L'indice de Mémé :</strong> « Les couleurs… je les ai vues partir vers le nord, emportées par des oiseaux noirs comme de la suie. »</li>
          </ul>
        </ActionBox>

        <InfoBox title="Note pour le MJ">
          <p>Si l'enfant rate le jet, ce n'est pas grave : Lumi complète l'indice. On ne bloque jamais la partie. Ce premier chapitre sert à installer l'ambiance et la mission : <strong>retrouver 3 Glands d'Or avant la neige.</strong></p>
        </InfoBox>
      </section>

      {/* CHAPITRE 2 */}
      <section>
        <Chapter id="chap2" emoji="🪶" title="CHAPITRE 2 : LES CORBEAUX DE SUIE" />

        <h3 className="font-display text-2xl font-bold text-slate-700 mt-8 mb-4">
          La Scène : La clairière des épouvantails
        </h3>
        <p className="mb-4 text-slate-700">
          En suivant le nord, tu arrives dans une clairière où de vieux épouvantails de paille montent la garde. Perchés sur leurs bras, trois <strong>Corbeaux de Suie</strong> se disputent des objets brillants qu'ils ont volés : un dé à coudre, une cuillère… et une plume dorée qui ressemble à un morceau de carte.
        </p>

        <ReadAloud title="La Narration à voix haute :">
          "Les trois corbeaux tournent la tête vers toi d'un seul coup. Leurs plumes sont noires et grasses, comme trempées dans la nuit. « Un renard qui se souvient ? CROÂ ! Interdit ! La patronne n'aime pas ça ! » Ils s'envolent en piaillant et foncent sur toi pour te faire fuir. La plume dorée est accrochée au cou du plus gros : tu dois la récupérer !"
        </ReadAloud>

        <CombatBox title="Les Statistiques des Monstres">
          <p className="font-bold mb-2">Les Corbeaux de Suie (× 3)</p>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>PV :</strong> 5 chacun.</li>
            <li><strong>CA :</strong> 11 (il faut faire 11 ou plus pour les toucher).</li>
            <li><strong>Attaque :</strong> <em>Coup de bec piquant</em> (1D4 de dégâts).</li>
            <li><strong>Capacité Spéciale :</strong> <em>Envol moqueur</em>. S'ils ratent leur attaque, ils s'envolent trop haut : impossible de les toucher au tour suivant, sauf avec un <strong>Bond du Renard</strong> (1D20 + Agilité).</li>
            <li><strong>Leur peur :</strong> la lumière de Lumi les éblouit. Si l'enfant demande à Lumi de briller fort, les corbeaux ont <strong>−2</strong> sur toutes leurs actions ce tour-là.</li>
          </ul>
        </CombatBox>

        <ActionBox title="Le MJ dirige l'action :">
          <ol className="list-decimal pl-5 space-y-3 mb-4">
            <li><strong>Initiative :</strong> lance 1D20. À 10 ou plus, le renard agit en premier.</li>
            <li><strong>Ton action, au choix :</strong>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li><em>Griffes & crocs :</em> lance 1D20 + Courage (+3). Si tu touches : 1D6 de dégâts.</li>
                <li><em>Bond du Renard :</em> saute pour attraper un corbeau en plein vol (1D20 + Agilité).</li>
                <li><em>Malice :</em> renverse un épouvantail sur eux pour les coincer (1D20 + Malice).</li>
              </ul>
            </li>
          </ol>
          <p className="italic text-slate-700">Récompense : en battant le gros corbeau, tu récupères la <strong>Plume-Carte dorée</strong>. Dessus, on voit un chemin qui mène à un ruisseau, puis à un village dans les arbres.</p>
        </ActionBox>

        <div className="mt-8 p-6 bg-emerald-50 border-2 border-emerald-200 rounded-2xl">
          <h3 className="font-display text-xl font-bold text-emerald-800 mb-3 flex items-center gap-2">
            <span className="text-2xl">🌿</span> La Fin du Combat
          </h3>
          <p className="italic text-emerald-900">
            "Vaincus, les corbeaux s'enfuient en laissant tomber leurs trésors volés. La Plume-Carte brille faiblement dans ta patte. Lumi s'illumine : « Regarde ! La carte réagit à la lumière. Il faut suivre le ruisseau. Mais attention… il paraît qu'il est bavard, et qu'il n'aime pas qu'on le traverse sans dire un mot gentil. »"
          </p>
        </div>
      </section>

      {/* CHAPITRE 3 */}
      <section>
        <Chapter id="chap3" emoji="💧" title="CHAPITRE 3 : LE RUISSEAU BAVARD" />

        <h3 className="font-display text-2xl font-bold text-slate-700 mt-8 mb-4">
          La Scène : Le gué du vieux crapaud
        </h3>
        <p className="mb-4 text-slate-700">
          Le ruisseau murmure, glougloute et… parle ! Assis sur une pierre plate au milieu de l'eau, un vieux crapaud couleur de boue, nommé <strong>Croâ</strong>, garde le passage. Pour traverser à pied sec, il faut répondre à son énigme. C'est un moment calme, où l'on réfléchit tous ensemble.
        </p>

        <ReadAloud title="La Narration à voix haute :">
          "« Halte-là, petit roux ! » coasse le crapaud. « Moi, Croâ, je garde ce gué depuis cent automnes. La brume grise m'a pris beaucoup de souvenirs, mais pas mon goût pour les devinettes ! Réponds juste, et l'eau te laissera passer. Réponds faux… et tu auras les pattes bien mouillées. »"
        </ReadAloud>

        <ActionBox title="L'Énigme : le Test de Sagesse">
          <p className="mb-4">Laissez l'enfant réfléchir. S'il sèche, proposez-lui de lancer <strong>1D20 + Flair (+5)</strong> : à 12 ou plus, Lumi lui souffle un indice.</p>
          <ul className="list-disc pl-5 space-y-3 mb-4">
            <li><strong>Croâ demande :</strong> <em>« Plus je sèche, plus je deviens grand ; plus je bois, plus je deviens petit. Qui suis-je ? »</em></li>
            <li><strong>Réponse :</strong> le feu (une bougie, une flamme).</li>
            <li className="text-slate-500"><strong>Énigme plus facile (au choix, pour les plus petits) :</strong> <em>« Je suis plein de couleurs mais je n'ai pas de crayon, j'apparais après la pluie quand revient le rayon. »</em> → l'arc-en-ciel.</li>
          </ul>
          <p className="italic text-slate-700">
            Bonne réponse : « CROÂ ! Bravo ! » Le crapaud tape du pied, et les pierres du ruisseau s'alignent pour former un petit pont. En partant, Croâ te confie : « Au village des écureuils, là-haut dans les arbres, ils ont vu l'un des Glands d'Or. Mais ils sont dans un sacré pétrin… »
          </p>
        </ActionBox>

        <InfoBox title="Note pour le MJ — garder le rythme">
          <p>Après trois chapitres (une rencontre douce, un combat, une énigme), c'est un bon moment pour faire une pause si vous jouez en plusieurs sessions. Cochez les chapitres terminés dans le sommaire pour reprendre facilement la prochaine fois !</p>
        </InfoBox>
      </section>
    </div>
  );
}
