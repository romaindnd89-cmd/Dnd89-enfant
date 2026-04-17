import React from 'react';
import { ReadAloud, CombatBox, ActionBox } from '../../components/StoryBlocks';

export default function Chapitre3() {
  return (
    <section id="chap3">
      <h2 className="font-display text-4xl font-bold text-emerald-700 mb-6 border-b-4 border-emerald-200 pb-2 mt-16">
        🥷 CHAPITRE 3 : LA FORTERESSE AU FROMAGE
      </h2>
      
      <h3 className="font-display text-2xl font-bold text-slate-700 mt-8 mb-4">🧀 Scène 1 : L'Infiltration Croustillante</h3>
      <ReadAloud title="À lire à voix haute, avec une voix grave et théâtrale pour la porte, puis en chuchotant">
        "La gigantesque porte au visage de chat s'ouvre dans un grondement de tonnerre : Rrrrrroumb ! Tu fais un pas en avant, et la porte se referme lourdement derrière toi. Te voilà enfermée dans le repaire de l'ennemi.<br/><br/>
        Tu te trouves dans un très long couloir creusé dans la roche. Les murs sont soutenus par de vieux manches à balai, et la pièce est éclairée par de petites bougies plantées dans des dés à coudre. L'odeur de gruyère est si forte qu'elle te pique presque le bout du nez.<br/><br/>
        Tu avances à pas de loup. Mais au détour d'un virage, tu t'arrêtes net. Le sol devant toi n'est plus en terre : il est entièrement recouvert de chips et de macaronis secs sur plus de dix mètres de long ! Tout au bout de ce couloir croustillant, il y a deux Souris-Ninjas endormies, appuyées sur leurs petites lances. Si tu marches sur une chips, le CRAC va les réveiller et alerter toute la forteresse !"
      </ReadAloud>

      <ActionBox title="[ACTION 1 : LE PIÈGE SONORE]">
        <p className="mb-2"><strong>Le Maître du Jeu demande :</strong> "Comment vas-tu traverser ce champ de mines croustillant ? Tu essaies de marcher sur la pointe extrême de tes coussinets entre les chips, ou tu sors tes griffes pour essayer de ramper le long du mur en pierre ?"</p>
        <p className="mb-4">👉 <strong>Fais-lui lancer un D20 (Dextérité / Agilité ou Discrétion).</strong></p>
        <p className="italic mb-2">(On enchaîne immédiatement) :</p>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Si elle réussit (10+) :</strong> &gt; "Tu choisis ton chemin avec la précision d'un horloger. Tu lèves une patte... tu la poses à un millimètre d'un macaroni. Tu retiens ton souffle. Tu te contorsionnes, ton ventre frôle le sol. Tu passes les dix mètres sans faire le moindre bruit, comme une véritable ombre féline. Tu te glisses juste derrière les deux gardes qui ronflent toujours : 'Zzzzz... squeak... zzzzz...'."</li>
          <li><strong>Si elle rate (-10) :</strong> &gt; "Tu essaies de faire attention, mais ta queue poilue balaie accidentellement une énorme chips paysanne ! CRAAAAAC ! Le bruit résonne comme un coup de fusil ! Les deux gardes sursautent, lâchent leurs lances et te regardent avec des yeux ronds comme des billes. L'un d'eux ouvre grand la bouche pour crier à l'aide..."</li>
        </ul>
      </ActionBox>

      <ActionBox title="[ACTION 2 : LE SAC DE FARINE]">
        <p className="italic mb-2">(Tu continues la lecture sans t'arrêter) :</p>
        <p className="mb-4">"... mais avant qu'il ne puisse donner l'alarme, tu lèves les yeux. Juste au-dessus de leur tête, suspendu à une corde à linge effilochée, se trouve un énorme sac de farine troué. Si tu arrives à couper cette corde avec ton arme en un éclair, la farine va tomber et créer un énorme nuage de fumée blanche qui les fera taire !"</p>
        <p className="mb-2"><strong>Le Maître du Jeu demande :</strong> "C'est une question de rapidité ! Tu lances ton arme ou tu sautes pour trancher la corde. Vas-tu viser juste ?"</p>
        <p className="mb-4">👉 <strong>Fais-lui lancer un D20 (Dextérité / Attaque à distance).</strong></p>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Si elle réussit (10+) :</strong> &gt; "Ziouip ! Ton attaque coupe la corde nette ! Le sac d'un kilo s'écrase sur les deux souris dans un énorme POUF ! Un épais brouillard blanc et poudreux envahit le couloir. Les gardes toussent : 'Kof kof ! Je ne vois plus rien ! Au secours !' Tu en profites pour courir à travers le nuage blanc en silence. Tu ressors de l'autre côté, couverte de farine comme un chat-fantôme, et tu arrives sur une corniche en hauteur."</li>
          <li><strong>Si elle rate (-10) :</strong> &gt; "Tu essaies de viser la corde, mais tu la rates de justesse ! Les gardes crient à tue-tête : 'ALAAAARME ! INTRUUUS !' L'un d'eux te jette sa petite lance qui t'égratigne la joue (Tu perds 1 PV). N'ayant plus le temps d'être discrète, tu pousses un miaulement féroce qui les terrifie, tu bondis par-dessus leurs têtes et tu cours à perdre haleine dans le couloir, jusqu'à arriver sur une corniche en hauteur."</li>
        </ul>
        <p className="italic mt-4 mb-2">(La transition vers la Scène 2) :</p>
        <p>"Tu te caches derrière une boîte de camembert vide sur cette corniche et tu regardes en bas. La vue te coupe le souffle..."</p>
      </ActionBox>

      <h3 className="font-display text-2xl font-bold text-slate-700 mt-8 mb-4">⛺ Scène 2 : Le Camp d'Entraînement et le Sabotage</h3>
      <ReadAloud title="À lire à voix haute">
        "... En dessous de toi s'étend la véritable caverne de la Forteresse. C'est grand comme un terrain de football ! Il y a des dizaines de tentes faites en mouchoirs en papier. Et surtout, il y a au moins quarante Souris-Ninjas qui s'entraînent en chœur. Certaines font des pompes sur des chamallows géants, d'autres s'entraînent au combat avec des mini-nunchakus en cacahuète.<br/><br/>
        Au fond de cette immense caverne, tu vois un grand pont de bois suspendu. C'est par là que tu dois aller pour trouver le Boss. Mais tu ne peux pas affronter 40 souris en même temps ! Il te faut un plan."
      </ReadAloud>

      <ActionBox title="[ACTION 3 : LE SABOTAGE]">
        <p className="italic mb-2">(Tu continues la lecture) :</p>
        <p className="mb-4">"Tu regardes autour de toi sur ton balcon rocheux. À ta droite, il y a un vieux tuyau de plomberie d'où s'échappe un peu de vapeur d'eau bouillante. À ta gauche, il y a une catapulte miniature fabriquée avec une cuillère, chargée avec une boule puante géante (un vieux chou de Bruxelles pourri)."</p>
        <p className="mb-2"><strong>Le Maître du Jeu demande :</strong> "Pour disperser l'armée, tu dois créer une énorme panique depuis ta cachette. Que choisis-tu ? Frapper le tuyau pour inonder la pièce d'un épais brouillard brûlant, ou déclencher la catapulte pour tirer le chou de Bruxelles puant en plein milieu de leur camp ?"</p>
        <p className="mb-4">👉 <strong>Fais-lui lancer un D20 (Force pour le tuyau, ou Intelligence pour viser avec la catapulte).</strong></p>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Si elle réussit (10+) :</strong> &gt; "Ton plan fonctionne à la perfection ! (Adapte : Le chou s'écrase avec un bruit visqueux et une odeur affreuse / Le tuyau explose et libère un geyser de vapeur). C'est la panique totale ! Les souris lâchent leurs armes, courent dans tous les sens en hurlant : 'Sauve qui peut ! C'est la fin du monde !' Elles se rentrent dedans, font tomber leurs tentes... Plus de trente souris s'enfuient par de petits trous dans les murs en pleurant de peur !"</li>
          <li><strong>Si elle rate (-10) :</strong> &gt; "Tu déclenches ton piège, mais il se retourne un peu contre toi ! (Adapte : Le chou frotte contre le mur et t'éclabousse d'un jus malodorant / La vapeur te brûle un peu les moustaches - Tu perds 2 PV). Ça fait mal ! Mais heureusement, l'explosion dans le camp est si forte que la terreur s'empare des souris. Elles hurlent à la mort et s'enfuient presque toutes en courant dans tous les sens !"</li>
        </ul>
        <p className="italic mt-4 mb-2">(La transition vers la Scène 3) :</p>
        <p>"C'est le moment idéal ! Tu sautes de ta corniche et tu atterris majestueusement au milieu du camp dévasté. La poussière retombe lentement. Tu commences à marcher vers le pont de bois. Mais soudain, une voix perçante s'élève : 'FORMER LES RANGS ! POUR LE CHEDDAR !' "</p>
      </ActionBox>

      <h3 className="font-display text-2xl font-bold text-slate-700 mt-8 mb-4">⚔️ Scène 3 : La Phalange de Biscuits (Le Combat Épique)</h3>
      <ReadAloud title="À lire à voix haute, d'une voix martiale et très rythmée">
        "Entre toi et le pont, dix Souris-Ninjas d'élite ne se sont pas enfuies. Elles portent des bandeaux rouges. En une fraction de seconde, elles soulèvent de grands biscuits Crackers carrés qu'elles emboîtent les uns dans les autres pour former un mur impénétrable ! Derrière ce mur salé, elles pointent dix lances affûtées vers toi. Le Capitaine, une grosse souris balafrée, te pointe du doigt : 'Tu ne feras pas un pas de plus, la boule de poils ! À l'attaque !' "
      </ReadAloud>

      <CombatBox title="[LE COMBAT NARRATIF AU CORPS À CORPS]">
        <p className="italic mb-4">(Ici, c'est le grand combat du chapitre. La CA du mur est de 14. Demande-lui comment elle attaque à chaque tour. Fais durer le plaisir !)</p>
        
        <p className="font-bold mb-2">Tour de l'Héroïne :</p>
        <p className="mb-2">👉 <strong>D20 (Attaque : doit faire 14 ou plus).</strong></p>
        <ul className="list-disc pl-5 space-y-2 mb-4">
          <li><strong>Si réussite :</strong> &gt; "Tu prends ton élan, tu bondis et ton arme s'abat avec la force d'un lion ! CRAAAASH ! Tu fracasses deux biscuits Crackers en mille miettes ! Des morceaux de sel volent partout ! Deux souris sont propulsées en l'air et s'enfuient en courant !" (Lance le dé de dégâts pour voir combien de souris tombent).</li>
          <li><strong>Si échec :</strong> &gt; "Tu frappes de toutes tes forces, mais le biscuit est d'une marque très résistante ! Ton arme rebondit avec un gros BONG ! Tes pattes vibrent sous le choc. Le mur tient bon, et les souris ricanent derrière !"</li>
        </ul>

        <p className="font-bold mb-2">Tour des Monstres (Le MJ lance un D20 contre la CA de la fille : 14) :</p>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Si tu réussis (14+) :</strong> &gt; "Les souris avancent en rythme : Un, deux, un, deux ! Leurs lances passent à travers les trous du mur et viennent te piquer les pattes et le bout du nez ! Aïe ! (Elle perd 2 PV). C'est comme se faire piquer par dix grosses épines de rose !"</li>
          <li><strong>Si tu rates (-14) :</strong> &gt; "Les souris essaient de te piquer, mais tu es beaucoup trop rapide ! Tu fais des petits sauts de côté, des saltos arrière, tu esquives toutes leurs lances avec un sourire moqueur ! Le Capitaine s'énerve : 'Mais piquez-la, bande de cornichons !' "</li>
        </ul>
        <p className="italic mt-4 mb-2">(Vous continuez les tours d'attaque et de défense jusqu'à ce que les 10 souris soient vaincues).</p>
        
        <p className="italic mt-4 mb-2">(La transition vers la fin du Chapitre) :</p>
        <p className="mb-4">"Le Capitaine balafré regarde le tout dernier biscuit de son mur se briser en deux. Son armée est vaincue. Il lève les bras au ciel, lâche son arme et crie avec une petite voix aiguë : 'Repli stratégique ! Le monstre est invincible !' Il s'enfuit à toute vitesse vers le pont.<br/><br/>
        Tu es essoufflée. Ton cœur bat à tout rompre. Tu as des miettes de crackers plein les poils et tu sens la farine. Mais tu te tiens droite, fière : tu as vaincu l'armée entière à toi toute seule !<br/><br/>
        Tu t'avances lentement vers l'immense pont de bois suspendu qui grince au-dessus d'un précipice sans fond. De l'autre côté du pont se trouvent deux immenses portes dorées qui brillent dans l'obscurité. C'est là... C'est la Salle du Boss. Le grand final approche."</p>
      </CombatBox>

    </section>
  );
}
