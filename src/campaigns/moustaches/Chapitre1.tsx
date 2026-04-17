import React from 'react';
import { ReadAloud, CombatBox, ActionBox } from '../../components/StoryBlocks';

export default function Chapitre1() {
  return (
    <section id="chap1">
      <h2 className="font-display text-4xl font-bold text-emerald-700 mb-6 border-b-4 border-emerald-200 pb-2 mt-16">
        🕊️ CHAPITRE 1 : LE VOL DE L'AUBE
      </h2>
      <p className="text-slate-500 font-medium mb-8">(Durée estimée : 1h à 1h30)</p>
      
      <h3 className="font-display text-2xl font-bold text-slate-700 mt-8 mb-4">🛏️ Scène 1 : Le Réveil et la Préparation (Action, Fouille et Roleplay)</h3>
      <ReadAloud title="À lire à voix haute">
        "Tu es réveillée en sursaut par le son de la cloche. Ta voisine, Madame Ronron, une vieille siamoise en chemise de nuit, tambourine à ta porte en hurlant : 'À l'aide ! Au secours !' Mais avant de lui ouvrir, tu dois t'équiper. Ton arme et ton armure sont enfermées dans ton Coffre d'Aventurier."
      </ReadAloud>
      <ActionBox title="Actions">
        <ul className="list-disc pl-5 space-y-4">
          <li><strong>Action 1 : Le Coffre Verrouillé (Jet de réflexion/force).</strong>
            <ul className="list-circle pl-5 mt-1 space-y-1">
              <li>Le coffre est coincé. Demande-lui comment elle l'ouvre.</li>
              <li><em>Si elle utilise la force :</em> Lance un <strong>D20 (Force)</strong>. Si 10+, elle le fracasse d'un coup de patte. Si -10, elle se coince une griffe (elle perd 1 PV) mais l'ouvre quand même.</li>
              <li><em>Si elle cherche la clé :</em> Lance un <strong>D20 (Recherche)</strong> pour la trouver sous son lit.</li>
            </ul>
          </li>
          <li><strong>Action 2 : S'équiper (Narration).</strong> Demande-lui de te décrire, de la tête aux pattes, à quoi ressemble son armure et son arme ce matin-là.</li>
          <li><strong>Action 3 : Calmer Madame Ronron (Roleplay et Jet de Charme).</strong>
            <ul className="list-circle pl-5 mt-1 space-y-1">
              <li>Joue Madame Ronron, qui est complètement hystérique et court partout dans la chambre sans répondre aux questions.</li>
              <li>Ta fille doit lancer un <strong>D20 (Persuasion/Charme)</strong>.</li>
              <li><em>Si 10+ :</em> Elle la calme. Madame Ronron dit : "C'est le Maire ! Sur la place centrale ! La Croquette a disparu et il y a des monstres ! Vas-y par les toits, ce sera plus rapide !"</li>
            </ul>
          </li>
        </ul>
      </ActionBox>

      <h3 className="font-display text-2xl font-bold text-slate-700 mt-8 mb-4">🏘️ Scène 2 : La Course sur les Toits (Agilité et Esquive)</h3>
      <ReadAloud title="À lire à voix haute">
        "Tu sors par la fenêtre. Pour arriver plus vite sur la place centrale, tu décides de courir sur les toits de Miaou-Ville. Le vent souffle dans tes poils, tu sautes de cheminée en cheminée !"
      </ReadAloud>
      <ActionBox title="Actions">
        <ul className="list-disc pl-5 space-y-4">
          <li><strong>Action 1 : Le Grand Saut (Jet de Dextérité).</strong> * Il y a un grand vide entre deux maisons. Lance un <strong>D20 (Agilité)</strong>.
            <ul className="list-circle pl-5 mt-1 space-y-1">
              <li><em>Si 10+ :</em> Un saut majestueux, atterrissage parfait.</li>
              <li><em>Si -10 :</em> Elle glisse sur une tuile couverte de rosée et atterrit lourdement sur un balcon en contrebas (Perte de 1 PV), elle doit remonter.</li>
            </ul>
          </li>
          <li><strong>Action 2 : L'Essaim de Guêpes (Petit combat rapide).</strong>
            <ul className="list-circle pl-5 mt-1 space-y-1">
              <li><strong>(À lire) :</strong> "Soudain, tu déranges un nid de Guêpes-Moutardes mutantes ! Trois d'entre elles t'attaquent !"</li>
              <li>Les guêpes ont <strong>2 PV</strong> chacune. Ta fille doit les repousser avec son arme (lance un D20 pour toucher, puis les dégâts).</li>
              <li>Les guêpes ont une CA de 10. Si le MJ attaque : D20, si 14+, piqûre = 1 PV de dégât.</li>
            </ul>
          </li>
        </ul>
      </ActionBox>

      <h3 className="font-display text-2xl font-bold text-slate-700 mt-8 mb-4">⛲ Scène 3 : La Scène de Crime sur la Place (Enquête à multiples indices)</h3>
      <ReadAloud title="À lire à voix haute">
        "Tu arrives enfin sur la place centrale. C'est la panique. Le Maire pleure devant le piédestal vide. Deux gardes dorment encore, affalés contre une charrette. Le boulanger ramasse ses baguettes tombées par terre."
      </ReadAloud>
      <ActionBox title="L'Enquête">
        <p className="mb-4">Ici, elle doit mener l'enquête et trouver 3 indices différents en interagissant avec 3 éléments de la place. C'est à elle de dire ce qu'elle fait.</p>
        <ul className="list-disc pl-5 space-y-4">
          <li><strong>Action 1 : Interroger le Maire et Fouiller le socle.</strong> * &gt; Maire : "Bouhouhou ! Ils sont venus par dizaines ! Ils ont volé notre trésor !" * Jet de <strong>D20 (Recherche/Fouille)</strong> sur le socle vide. Elle trouve : une corde coupée nette, et une étrange odeur de cheddar piquant (indice sur les voleurs).</li>
          <li><strong>Action 2 : Réveiller et secouer les gardes.</strong>
            <ul className="list-circle pl-5 mt-1 space-y-1">
              <li>Elle doit lancer un <strong>D20 (Intimidation)</strong> pour les réveiller brutalement.</li>
              <li>Garde : "Pardon cheffe ! On nous a jeté des bombes de poudre de dodo ! On a juste vu des petites silhouettes avec des masques noirs s'enfuir vers la Ruelle Sombre..."</li>
            </ul>
          </li>
          <li><strong>Action 3 : Parler au Boulanger.</strong>
            <ul className="list-circle pl-5 mt-1 space-y-1">
              <li>Le boulanger a trouvé une arme par terre. Il refuse de lui donner s'il n'est pas payé. Ta fille doit négocier ou échanger un objet (Roleplay pur). S'il accepte, il lui donne un <strong>Shuriken en forme de Babybel</strong>.</li>
            </ul>
          </li>
        </ul>
      </ActionBox>

      <h3 className="font-display text-2xl font-bold text-slate-700 mt-8 mb-4">⚔️ Scène 4 : L'Embuscade de l'Arrière-garde (Vrai Combat Tactique)</h3>
      <ReadAloud title="À lire à voix haute">
        "Grâce à tes indices, tu t'engages dans la Ruelle Sombre. Mais les voleurs t'attendaient ! Trois petites silhouettes sautent des poubelles. Ce sont des Souris-Ninjas ! Elles portent des kimonos et tiennent des épées en cure-dents. 'Pas un pas de plus, le chat !', crie le chef."
      </ReadAloud>
      <CombatBox title="Le Combat (Tour par tour complet)">
        <ul className="list-disc pl-5 space-y-2">
          <li>Il y a <strong>3 Souris-Ninjas (5 PV chacune, CA de 12)</strong>.</li>
          <li><strong>Règle spéciale :</strong> Les souris utilisent l'environnement. À leur tour, en plus de t'attaquer avec leurs épées (D20 contre ta CA de 14, 1 PV de dégât si touché), elles te jettent des poubelles.</li>
          <li><strong>Action de ton Héroïne :</strong> À chaque tour, elle lance le D20 pour attaquer une souris, puis ses dégâts (D6 ou D8).</li>
          <li><strong>Fin du combat :</strong> Quand les souris sont vaincues, l'une d'elles lâche un petit parchemin roulé. C'est un plan des égouts qui montre l'entrée secrète.</li>
        </ul>
      </CombatBox>

      <h3 className="font-display text-2xl font-bold text-slate-700 mt-8 mb-4">🐶 Scène 5 : Brutus le Péager et Pipo l'Informateur (Épreuve de force et de ruse)</h3>
      <ReadAloud title="À lire à voix haute">
        "Tu arrives au bout de la ruelle, devant une grosse grille en fer qui mène aux égouts. Mais le passage est gardé par Brutus, un bouledogue énorme avec un collier à pointes. Perché au-dessus de lui, un pigeon avec un béret te regarde."
      </ReadAloud>
      <ActionBox title="Actions">
        <ul className="list-disc pl-5 space-y-4">
          <li><strong>Action 1 : Le marchandage avec Pipo le Pigeon.</strong>
            <ul className="list-circle pl-5 mt-1 space-y-1">
              <li>Le pigeon chuchote : "Roucouu ! Je sais comment ouvrir la grille, l'héroïne ! Mais j'ai très faim. Trouve-moi un croissant et je te donne la combinaison secrète."</li>
              <li>L'héroïne doit courir voir le boulanger (retour sur la place), faire un jet d'<strong>Agilité</strong> pour éviter la foule, acheter/demander le croissant, et le ramener.</li>
            </ul>
          </li>
          <li><strong>Action 2 : L'Obstacle Brutus.</strong>
            <ul className="list-circle pl-5 mt-1 space-y-1">
              <li>Brutus refuse de bouger. "Je suis le gardien de la grille ! Interdit de passer !" * Elle a trois options pour le vaincre (demande-lui de choisir) :
                <ol className="list-decimal pl-5 mt-1 space-y-1">
                  <li><strong>Le Duel de Force (Bras de fer) :</strong> 3 jets de D20 de Force contre le MJ. Le premier à 2 victoires gagne.</li>
                  <li><strong>L'Intimidation Magique/Féline :</strong> Elle hérisse ses poils et feule de toutes ses forces (Jet de D20 Intimidation devant faire plus de 15).</li>
                  <li><strong>La Ruse :</strong> Elle lance un bâton le plus loin possible. (Jet de D20 Dextérité pour bien viser, Brutus court le chercher).</li>
                </ol>
              </li>
            </ul>
          </li>
          <li><strong>Action 3 : Le Mécanisme de la Grille.</strong>
            <ul className="list-circle pl-5 mt-1 space-y-1">
              <li>Pipo crie la combinaison : "C'est Soleil, Lune, Étoile !"</li>
              <li>Sur la grille, il y a 3 cadrans rouillés. Ta fille doit réussir un jet de <strong>D20 (Force ou Intelligence)</strong> pour les tourner dans le bon sens. La grille s'ouvre dans un grincement terrifiant... Le donjon des égouts l'attend en dessous</li>
            </ul>
          </li>
        </ul>
      </ActionBox>
    </section>
  );
}
