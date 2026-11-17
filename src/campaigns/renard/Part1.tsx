import React from 'react';
import { ReadAloud, CombatBox, ActionBox, InfoBox } from '../../components/StoryBlocks';
import { Chapter } from '../../components/CampaignLayout';
import { AmbianceBox, VictoryBox, SideQuestBox } from '../../components/StoryExtras';

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

        <AmbianceBox>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Ce qu'on voit :</strong> tout est gris comme un dessin au crayon : les feuilles, la mousse, même le ciel. La seule tache de couleur du monde est la feuille d'or dans la patte du renard. Des feuilles mortes tombent sans tourbillonner, toutes droites.</li>
            <li><strong>Ce qu'on entend :</strong> presque rien. Pas un chant d'oiseau. Juste le vent, qui souffle un peu, s'arrête, puis reprend, comme s'il avait oublié sa route.</li>
            <li><strong>Ce qu'on sent :</strong> le vieux papier mouillé et la poussière, à la place de la bonne odeur de champignons et de châtaignes.</li>
            <li><strong>Comment le jouer :</strong> parlez lentement et à voix basse. Les animaux qui ont oublié répètent la même phrase en boucle, s'arrêtent au milieu d'un mot, sourient poliment sans reconnaître personne.</li>
          </ul>
          <p className="font-bold mt-3">Les personnages à faire parler :</p>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Monsieur Blaireau</strong> (voix bourrue) : il cherche ses lunettes partout… alors qu'elles sont sur son nez. Si l'enfant le lui dit, il est ravi, puis oublie aussitôt et recommence à chercher.</li>
            <li><strong>Mémé Rouquine</strong> (voix douce et chevrotante) : elle fredonne sans cesse un petit air dont elle a perdu les paroles. Retenez ce détail : c'est la <em>Chanson de Grisefeuille</em>, que l'enfant retrouvera au chapitre 7.</li>
          </ul>
        </AmbianceBox>

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

        <VictoryBox title="Si Mémé se souvient (à lire à voix haute)">
          <p className="italic">"Les yeux de Mémé Rouquine s'éclairent d'un coup, comme une lanterne qu'on rallume. « Mon tout-petit ! C'est toi ! » Elle te serre si fort que ton museau disparaît dans son écharpe. Pendant un instant, une touche de roux revient sur sa fourrure grise. Puis la brume repasse, et son regard redevient flou… mais elle garde ta patte dans la sienne. « Va, mon petit. Je ne sais plus pourquoi… mais je sais que je suis fière de toi. »"</p>
          <p><strong>Cadeau de Mémé :</strong> elle resserre le nœud de l'écharpe rouge du renard et y dépose un baiser. Une fois dans l'aventure, l'enfant peut « serrer l'écharpe » pour gagner <strong>+2 à un jet de Courage</strong>.</p>
        </VictoryBox>

        <SideQuestBox title="Margot la pie a perdu son nid">
          <p className="italic">"Sur le chemin, une pie sautille d'arbre en arbre en criant : « C'est celui-là ! Non, celui-là ! Oh là là, ils se ressemblent tous quand ils sont gris ! »"</p>
          <p><strong>Margot</strong> (voix aiguë, parle très vite) a oublié dans quel arbre elle a construit son nid. Le renard peut l'aider :</p>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>Suivre l'odeur des plumes :</strong> 1D20 + Flair (+5), réussite à 10.</li>
            <li><strong>Grimper pour regarder d'en haut :</strong> 1D20 + Agilité (+4), réussite à 10.</li>
          </ul>
          <p><strong>Récompense :</strong> Margot offre un <strong>bouton doré</strong> de sa collection. Les corbeaux adorent ce qui brille : au chapitre 2, si le renard lance le bouton au loin, <strong>un des trois corbeaux quitte le combat</strong> pour aller le chercher.</p>
        </SideQuestBox>
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

        <AmbianceBox>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Ce qu'on voit :</strong> une clairière ronde, des épouvantails penchés aux chapeaux troués, des citrouilles devenues grises. Par terre, des plumes noires et de petites traces de suie, comme des empreintes de doigts sales.</li>
            <li><strong>Ce qu'on entend :</strong> la paille qui craque dans le vent, des froissements d'ailes, des croassements moqueurs qui se répondent.</li>
            <li><strong>Ce qu'on sent :</strong> le feu de cheminée éteint.</li>
            <li><strong>Comment les jouer :</strong> voix nasillarde, phrases courtes qui finissent par « CROÂ ! ». Ils s'appellent <strong>Suie</strong>, <strong>Charbon</strong> et le gros <strong>Cendrar</strong>, le chef. Ils se disputent entre eux même pendant le combat (« C'est MON renard ! — Non, c'est le MIEN ! »).</li>
            <li><strong>Leur tactique :</strong> ils attaquent chacun leur tour, jamais ensemble. Un corbeau qui tombe à 2 PV ou moins s'enfuit en piaillant : ce sont des froussards.</li>
          </ul>
        </AmbianceBox>

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

        <VictoryBox title="Le butin des corbeaux">
          <p>En fouillant le tas d'objets volés, le renard trouve :</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>La <strong>Plume-Carte dorée</strong> (elle montre le chemin jusqu'au ruisseau et au village des écureuils).</li>
            <li>Un <strong>dé à coudre</strong> : Lumi s'en fait un casque et en est très fière.</li>
            <li>Une <strong>petite cuillère brillante</strong> : elle sert de miroir. Une fois dans l'aventure, elle renvoie la lumière de Lumi et donne <strong>+2 à un jet</strong> contre une créature de la brume.</li>
            <li><strong>1 noisette grillée</strong> de plus dans le sac à dos (+3 PV quand on la mange).</li>
          </ul>
          <p><strong>Si le renard est tombé à 0 PV :</strong> les corbeaux, surpris d'avoir gagné, se disputent pour savoir qui est le plus fort et laissent tomber la Plume-Carte en s'envolant. Le renard se réveille avec 3 PV, Lumi posée sur son museau.</p>
        </VictoryBox>

        <SideQuestBox title="Bringuebale, l'épouvantail qui parle">
          <p className="italic">"« Psst ! Par ici ! » La voix vient du plus vieil épouvantail, celui qui a un bouton à la place d'un œil. « Ces sacripants m'ont volé mon chapeau. Sans lui, j'ai les idées qui s'envolent ! »"</p>
          <p>Le chapeau de <strong>Bringuebale</strong> (voix lente, il cherche ses mots) est accroché tout en haut d'un bouleau.</p>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>Aller le chercher :</strong> Bond du Renard, 1D20 + Agilité (+4), réussite à 10. En cas d'échec, le renard dégringole dans un tas de feuilles (aucun dégât, juste un fou rire) et peut réessayer.</li>
          </ul>
          <p><strong>Récompense :</strong> une fois coiffé, Bringuebale retrouve la mémoire d'un secret : « Le crapaud du ruisseau adore les devinettes, mais il déteste attendre. Si tu sèches, dis-lui que tu réfléchis tout haut : il ne pourra pas s'empêcher de t'aider ! » L'enfant gagne <strong>un indice gratuit</strong> pour l'énigme du chapitre 3.</p>
        </SideQuestBox>
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

        <AmbianceBox>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Ce qu'on voit :</strong> une eau couleur d'argent terni, des galets ronds, des roseaux immobiles. Des libellules sont posées sur les joncs, les ailes ouvertes : elles ont oublié comment voler.</li>
            <li><strong>Ce qu'on entend :</strong> le glouglou de l'eau qui forme presque des mots (« par ici… par là… plouf… »).</li>
            <li><strong>Ce qu'on sent :</strong> la menthe sauvage et la vase fraîche.</li>
            <li><strong>Comment jouer Croâ :</strong> voix très grave et très lente. Gonflez les joues avant chaque phrase. Il est vieux, fier, un peu vexé qu'on ne lui rende plus visite, mais il a bon cœur.</li>
            <li><strong>Mauvaise réponse :</strong> pas de dégât. Une petite vague éclabousse le renard (« SPLASH ! ») et Croâ donne un indice de plus : « Ça danse, ça réchauffe… et ça a très peur de mon ruisseau. »</li>
          </ul>
        </AmbianceBox>

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

        <VictoryBox title="La traversée (à lire à voix haute)">
          <p className="italic">"Une à une, les pierres plates remontent du fond de l'eau, toutes luisantes. Tu sautes de l'une à l'autre : plic, ploc, plic ! Sous tes pattes, le ruisseau chatouille et rit tout bas. Arrivé sur l'autre rive, tu te retournes : le vieux Croâ agite sa patte palmée. « Reviens me voir quand la forêt aura retrouvé ses couleurs, petit roux ! J'aurai une devinette toute neuve ! »"</p>
        </VictoryBox>

        <SideQuestBox title="Les têtards de la flaque">
          <p className="italic">"Juste après le gué, de minuscules voix appellent : « À l'aide ! À l'aide ! » Dans une flaque qui rétrécit, une dizaine de têtards tournent en rond. Ils ont oublié le chemin du ruisseau, et leur flaque sèche."</p>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>Les porter dans une grande feuille pleine d'eau :</strong> 1D20 + Agilité (+4), réussite à 10. En cas d'échec, la feuille penche, il faut la rattraper : on relance.</li>
            <li><strong>Creuser une rigole jusqu'au ruisseau :</strong> 1D20 + Courage (+3), réussite à 10.</li>
          </ul>
          <p><strong>Récompense :</strong> leur maman grenouille, soulagée, apprend au renard le <strong>Saut de Grenouille</strong> : <strong>+2 à son prochain Bond du Renard</strong>.</p>
        </SideQuestBox>

        <InfoBox title="Note pour le MJ — garder le rythme">
          <p>Après trois chapitres (une rencontre douce, un combat, une énigme), c'est un bon moment pour faire une pause si vous jouez en plusieurs sessions. Cochez les chapitres terminés dans le sommaire pour reprendre facilement la prochaine fois !</p>
        </InfoBox>
      </section>
    </div>
  );
}
