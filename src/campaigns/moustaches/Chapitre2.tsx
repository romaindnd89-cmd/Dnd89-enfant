import React from 'react';
import { ReadAloud, CombatBox, ActionBox } from '../../components/StoryBlocks';

export default function Chapitre2() {
  return (
    <section id="chap2">
      <h2 className="font-display text-4xl font-bold text-emerald-700 mb-6 border-b-4 border-emerald-200 pb-2 mt-16">
        🕳️ Chapitre 2 : Les Abysses Scintillantes.
      </h2>
      
      <h3 className="font-display text-2xl font-bold text-slate-700 mt-8 mb-4">Scène 1 : La Descente dans les Ténèbres (Version Fluide et Narrative)</h3>
      <ReadAloud title="À lire à voix haute avec une voix grave et mystérieuse">
        "La lourde grille de fer grince affreusement sous tes pattes et se referme au-dessus de toi avec un énorme CLANG ! Soudain, la douce chaleur du soleil disparaît. Tu te tiens au bord d'un puits immense qui plonge droit vers le centre de la terre.<br/><br/>
        En bas, c'est l'obscurité totale. Le noir absolu. Une odeur de vieux poisson et de moisissure remonte jusqu'à tes narines, accompagnée par un son inquiétant : Ploc... ploc... ploc... des gouttes d'eau qui tombent dans le vide. Pour un chat habitué aux coussins confortables, c'est terrifiant."
      </ReadAloud>
      
      <ActionBox title="[ACTION 1 : LA PEUR]">
        <p className="mb-2"><strong>Le Maître du Jeu demande :</strong> "Ton cœur de chatte bat à toute vitesse. L'inconnu te donne le vertige. Arrives-tu à trouver le courage de descendre, ou es-tu pétrifiée de peur ?"</p>
        <p className="mb-4">👉 <strong>Fais-lui lancer un D20 (Sagesse / Volonté).</strong></p>
        <p className="italic mb-2">(On enchaîne immédiatement avec la narration selon son jet de dé) :</p>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Si elle réussit (10+) :</strong> &gt; "Tu fermes les yeux, tu prends une grande inspiration, et tes moustaches frétillent. Tu te rappelles que tu es l'héroïne de Miaou-Ville ! Tes poils se hérissent, gonflés de courage. Tu pousses un petit miaulement de défi face aux ténèbres, et tu t'approches du bord du trou."</li>
          <li><strong>Si elle rate (-10) :</strong> &gt; "Un grand frisson d'angoisse te parcourt de la tête à la queue. Tu fais un petit miaou tremblant. Tes pattes refusent d'avancer au début (tu notes qu'elle a un malus de -1 pour son prochain dé car elle a peur). Mais tu sais que tes amis comptent sur toi. En claquant un peu des dents, tu t'obliges à avancer jusqu'au bord."</li>
        </ul>
      </ActionBox>

      <ActionBox title="[ACTION 2 : L'ÉCHELLE]">
        <p className="italic mb-2">(Tu continues la lecture sans t'arrêter) :</p>
        <p className="mb-4">"Tu regardes en bas. Accrochée à la paroi de pierre, il y a une vieille échelle rouillée qui descend dans les abysses. Les barreaux en fer sont recouverts d'une mousse verte, mouillée et extrêmement poisseuse. Un faux pas, et c'est la chute dans l'inconnu !"</p>
        <p className="mb-2"><strong>Le Maître du Jeu demande :</strong> "Comment tu t'y prends pour descendre ? Tu y vas doucement patte après patte en plantant tes griffes, ou tu essaies de glisser le long des montants ?"</p>
        <p className="mb-4">👉 <strong>Fais-lui lancer un D20 (Agilité / Dextérité).</strong></p>
        <p className="italic mb-2">(On enchaîne avec la conséquence de la descente) :</p>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Si elle réussit (10+) :</strong> &gt; "Tes griffes sortent dans un bruit sec : Schtiiing ! Tu t'agrippes à la rouille et tu descends avec l'agilité incroyable d'une panthère. Tu évites les zones glissantes avec brio, et tes bottes touchent enfin le sol boueux tout au fond du puits sans faire le moindre bruit."</li>
          <li><strong>Si elle rate (-10) :</strong> &gt; "Tu poses la patte sur le troisième barreau, mais il est trop glissant ! ZIOUP ! Tu perds l'équilibre. Tu dégringoles les trois derniers mètres en miaulant de surprise et... SPLAT ! Tu atterris les fesses la première dans une énorme flaque de boue froide ! (Tu perds 1 PV à cause de la chute). Ouch ! Ça pique un peu !"</li>
        </ul>
      </ActionBox>

      <ActionBox title="[ACTION 3 : LA LUMIÈRE]">
        <p className="italic mb-2">(Tu continues la lecture) :</p>
        <p className="mb-4">"Que tu aies atterri sur tes pattes ou sur les fesses, te voilà tout en bas. Mais un nouveau problème se pose. Il fait noir comme dans un four. Tu ne vois même pas le bout de ton propre nez ! Tu entends un grondement d'eau très puissant juste devant toi. Si tu fais un pas de plus dans le noir, tu risques de tomber dans une rivière souterraine mortelle. Il te faut absolument de la lumière."</p>
        <p className="mb-2"><strong>Le Maître du Jeu demande :</strong> "Tu es dans le noir complet. Comment fais-tu ? Est-ce que tu tâtonnes les murs avec tes pattes pour trouver quelque chose, ou as-tu de quoi faire du feu dans ton équipement ?"</p>
        <p className="mb-4">👉 <strong>Fais-lui lancer un D20 (Fouille ou Survie, selon son choix).</strong></p>
        <p className="italic mb-2">(On enchaîne vers la fin de la scène) :</p>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Si elle réussit sa Fouille (10+) :</strong> &gt; "En tâtant doucement le mur humide avec tes coussinets, tu sens quelque chose de duveteux. Tu grattes un peu la terre et soudain... Pouf ! Une grosse grappe de champignons souterrains se met à briller d'une intense lumière bleue et magique ! Tu les cueilles et tu les attaches à ta ceinture. Tu rayonnes comme une petite étoile féline."</li>
          <li><strong>Si elle rate (-10) :</strong> &gt; "Tu tâtonnes dans le noir en tendant les pattes. Tu marches un peu au hasard, et... BONG ! Tu te cognes le front de toutes tes forces contre un gros tuyau en fer ! (Tu perds 1 PV de fatigue et de bosse). Sous le choc, le vieux tuyau tremble, et une petite lanterne de chantier rouillée qui était posée dessus te tombe sur la tête, puis s'allume en clignotant. Ça fait mal, mais au moins, tu as de la lumière !"</li>
        </ul>
        <p className="italic mt-4 mb-2">(La transition vers la Scène 2 : Le Toboggan) :</p>
        <p className="mb-4">"Maintenant que les ombres reculent grâce à ta lumière, tu découvres la pièce dans laquelle tu te trouves. Et tes poils se dressent sur ta tête ! Devant toi, le sol s'arrête net. À la place, il y a un gigantesque tuyau d'évacuation d'où coule une puissante rivière d'eau savonneuse rose vif. Et le courant est si fort qu'il ressemble à un toboggan géant..."</p>
      </ActionBox>

      <h3 className="font-display text-2xl font-bold text-slate-700 mt-8 mb-4">🌊 Scène 2 : Le Toboggan de la Mort-qui-Lave</h3>
      <ReadAloud title="À lire à voix haute, en parlant de plus en plus vite pour mimer la vitesse">
        "Grâce à ta nouvelle lumière, tu regardes le puissant courant d'eau rose et savonneuse qui s'engouffre dans le tunnel. De minuscules traces de pas boueux sur le rebord te confirment une chose : les souris sont passées par là ! Tu n'as pas le choix. Tu prends une grande inspiration, tu te bouches le nez avec une patte, et... SPLOUF ! Tu sautes dans la rivière !<br/><br/>
        Immédiatement, le courant t'emporte à une vitesse folle ! WOOOOOOSH ! C'est un véritable toboggan aquatique souterrain ! Le vent siffle dans tes oreilles, l'eau éclabousse ton museau, et les murs défilent à toute allure. Mais soudain, droit devant toi, tu vois une vieille grille rouillée aux barreaux acérés qui bloque la moitié du passage !"
      </ReadAloud>
      
      <ActionBox title="[ACTION 1 : LA GRILLE]">
        <p className="mb-2"><strong>Le Maître du Jeu demande :</strong> "Tu arrives à toute vitesse sur cette grille mortelle ! Vas-tu essayer de plonger sous l'eau pour passer en dessous, ou de t'aplatir sur le côté comme une crêpe féline ?"</p>
        <p className="mb-4">👉 <strong>Fais-lui lancer un D20 (Agilité / Dextérité).</strong></p>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Si elle réussit (10+) :</strong> &gt; "Tu te contorsionnes à la dernière seconde ! Tu passes exactement entre deux barreaux rouillés avec la grâce d'une gymnaste. L'eau t'emporte plus loin dans le tunnel sans une seule égratignure."</li>
          <li><strong>Si elle rate (-10) :</strong> &gt; "Tu essaies de plonger, mais le courant est trop fort ! BAM ! Ton épaule heurte violemment un barreau rouillé (Tu perds 2 PV). La douleur te fait crier, mais le choc te fait passer de l'autre côté de justesse !"</li>
        </ul>
      </ActionBox>

      <ActionBox title="[ACTION 2 : LE TOURBILLON]">
        <p className="italic mb-2">(Tu continues la lecture sans t'arrêter) :</p>
        <p className="mb-4">"Mais tu n'as pas le temps de te reposer ! Le tunnel s'élargit soudainement, et l'eau forme un gigantesque tourbillon de mousse étouffante au milieu de la pièce. Le courant t'aspire droit vers le centre ! Si tu te fais attraper, tu vas boire la tasse !"</p>
        <p className="mb-2"><strong>Le Maître du Jeu demande :</strong> "Le tourbillon t'attire ! Comment tu t'en sors ? Est-ce que tu nages de toutes tes forces à contre-courant, ou est-ce que tu essaies d'attraper une caisse en bois qui flotte à côté de toi ?"</p>
        <p className="mb-4">👉 <strong>Fais-lui lancer un D20 (Force ou Athlétisme).</strong></p>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Si elle réussit (10+) :</strong> &gt; "Tes pattes arrière pédalent à une vitesse fulgurante ! Tu luttes contre la force de l'eau avec la puissance d'un tigre. Tu arrives à te propulser hors du tourbillon et tu t'accroches à une petite corniche en pierre."</li>
          <li><strong>Si elle rate (-10) :</strong> &gt; "Le tourbillon est trop puissant ! Il t'aspire sous la mousse ! Gloub gloub gloub ! Tu bois la tasse avec un affreux goût de savon à la violette (Tu perds 1 PV). Tu finis par remonter à la surface en crachant des bulles, complètement épuisée, et tu t'échoues sur le rivage."</li>
        </ul>
      </ActionBox>

      <ActionBox title="[ACTION 3 : L'ATTERRISSAGE]">
        <p className="italic mb-2">(Tu continues la lecture) :</p>
        <p>"La rivière de savon s'arrête ici, se déversant dans un petit lac souterrain. Tu te hisses sur la berge, trempée de la tête aux pattes. Tu te secoues vigoureusement, envoyant des gouttes d'eau partout : Froufroufrou ! Mais alors que tu reprends ton souffle, un bruit sinistre résonne derrière toi..."</p>
      </ActionBox>

      <h3 className="font-display text-2xl font-bold text-slate-700 mt-8 mb-4">🦀 Scène 3 : L'Embuscade de la Décharge (Le Combat)</h3>
      <ReadAloud title="À lire à voix haute">
        "Tu te rends compte que tu as atterri sur une véritable décharge souterraine. Il y a des montagnes de vieilles boîtes de thon, des roues de vélo rouillées et des casseroles bosselées.<br/><br/>
        Soudain... clic... clac... clic... clac...<br/><br/>
        Quatre tas de déchets se mettent à bouger. Des yeux globuleux montés sur des tiges sortent des ordures. Ce sont des Crabes-Poubelles Géants ! Leurs carapaces sont faites de vieilles poêles à frire, et ils claquent leurs énormes pinces vers toi en crachant de l'eau sale !"
      </ReadAloud>
      
      <CombatBox title="[LE COMBAT NARRATIF]">
        <p className="mb-4">Ici, pas de liste. Tu gères le combat tour par tour.</p>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Les monstres :</strong> 4 Crabes (CA de 13, 5 PV chacun).</li>
          <li><strong>Quand elle réussit une attaque :</strong> Raconte comment son arme frappe la poêle à frire avec un immense GONG métallique, envoyant le crabe valser dans les airs.</li>
          <li><strong>Quand elle rate :</strong> Raconte comment le crabe se cache sous sa casserole comme une tortue, et comment l'arme de ta fille fait des étincelles dessus sans le blesser.</li>
          <li><strong>Quand les crabes attaquent (si ton D20 fait 14+) :</strong> Raconte comment une grosse pince rouillée vient lui pincer la queue ou l'oreille (2 PV de dégâts).</li>
        </ul>
        <p className="italic mt-4 mb-2">(La transition vers la Scène 4, une fois les crabes vaincus) :</p>
        <p>"Le dernier crabe se retourne sur le dos, les pattes en l'air, coincé dans sa casserole. Le silence retombe. Tu as des courbatures, tu as froid, et tu as bien besoin de te reposer. C'est alors que tu remarques une douce lumière dorée au bout d'un petit tunnel adjacent, et surtout... une merveilleuse odeur de soupe chaude aux champignons."</p>
      </CombatBox>

      <h3 className="font-display text-2xl font-bold text-slate-700 mt-8 mb-4">🐸 Scène 4 : Le Repos chez Barnabé</h3>
      <ReadAloud title="À lire à voix haute">
        "Tu suis l'odeur et tu entres dans une petite caverne très chaleureuse. Le plafond est couvert de lucioles. Assis dans un fauteuil en velours usé, il y a Barnabé, un crapaud géant avec un petit gilet à carreaux et un chapeau haut de forme. Il touille une marmite géante.<br/><br/>
        'Croâââ... Bienvenue dans ma modeste demeure, petite chatte mouillée,' coasse-t-il avec une voix très grave et très lente. 'Tu as affronté mes crabes de garde, je vois. Tu as l'air blessée. Je peux t'offrir ma Potion de Poil Brillant qui guérira toutes tes blessures. Mais... je ne prends pas de pièces d'or. Je veux un secret. Raconte-moi un secret sur la surface !' "
      </ReadAloud>

      <ActionBox title="[ACTION 1 : LE DIALOGUE ET LA NÉGOCIATION]">
        <p className="mb-2"><strong>Le Maître du Jeu demande :</strong> "Barnabé te fixe avec ses grands yeux jaunes. Quel secret vas-tu lui inventer pour avoir la potion ? Plus tu seras convaincante, plus la potion sera efficace !"</p>
        <p className="mb-4">👉 <strong>Fais-lui jouer le rôle, puis lancer un D20 (Charme / Persuasion).</strong></p>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Si elle réussit (10+) :</strong> &gt; "Barnabé éclate d'un gros rire gras : 'Croâ ha ha ! Quelle histoire !' Il te tend une fiole rose. Tu la bois, et un frisson magique parcourt ton corps. Toutes tes égratignures disparaissent, ton poil devient doux et soyeux (Elle récupère tous ses PV)."</li>
          <li><strong>Si elle rate (-10) :</strong> &gt; "Barnabé plisse les yeux. 'Croâ... Ce secret est un peu ennuyeux.' Il te donne quand même une louche de sa soupe. Elle a un goût bizarre de vase, mais elle te réchauffe (Elle ne récupère que la moitié de ses PV)."</li>
        </ul>
      </ActionBox>

      <ActionBox title="[ACTION 2 : LE MONOCLE PERDU]">
        <p className="italic mb-2">(Tu continues la lecture) :</p>
        <p className="mb-4">"Le vieux crapaud soupire. 'Je dois te donner la Clé du Labyrinthe pour que tu puisses continuer. Mais j'ai un problème. J'ai fait tomber mon monocle en verre dans cette petite mare, juste là. La mare est remplie de sangsues bleues très rapides. Si tu arrives à repêcher mon monocle, la Clé est à toi.' "</p>
        <p className="mb-2"><strong>Le Maître du Jeu demande :</strong> "Tu vois l'objet briller au fond de l'eau trouble. Les sangsues nagent autour. Vas-tu plonger la patte d'un coup sec, ou utiliser ton arme pour le pêcher doucement ?"</p>
        <p className="mb-4">👉 <strong>Fais-lui lancer un D20 (Dextérité / Agilité).</strong></p>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Si elle réussit (10+) :</strong> &gt; "Ton bras fend l'eau à la vitesse de l'éclair ! Sploosh ! Tu attrapes le monocle et tu ressors la patte avant même que les sangsues n'aient pu réagir. Barnabé applaudit des deux mains et te remet une lourde clé en fer forgé."</li>
          <li><strong>Si elle rate (-10) :</strong> &gt; "Tu plonges la patte, tu frôles le monocle, mais... SLURP ! Une grosse sangsue bleue et gluante se colle directement sur ton nez ! Tu pousses un cri, tu tires en arrière avec le monocle, mais tu dois arracher la sangsue de ton museau (Tu perds 1 PV). Barnabé rigole un peu, s'essuie le monocle et te donne la fameuse clé."</li>
        </ul>
        <p className="italic mt-4 mb-2">(La transition vers la Scène 5) :</p>
        <p className="mb-4">"La clé bien rangée dans ta poche, tu remercies le vieux crapaud. Tu quittes sa caverne chaleureuse pour t'enfoncer de nouveau dans les tunnels sombres. Bientôt, le chemin s'élargit et tu arrives devant un défi terrifiant : une intersection gigantesque."</p>
        <p className="italic">(Et ainsi de suite, tu lances la scène du Labyrinthe où elle sort sa feuille de papier pour dessiner, avec les mêmes transitions fluides vers l'Énigme de la Porte Finale !)</p>
        <p className="italic">Cette méthode demande un peu plus de lecture de ta part, mais elle garantit à 100% que ta fille restera captivée pendant plus d'une heure.</p>
      </ActionBox>

    </section>
  );
}
