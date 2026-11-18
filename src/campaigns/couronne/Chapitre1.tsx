import React from 'react';
import { ReadAloud, ActionBox, InfoBox } from '../../components/StoryBlocks';

export default function Chapitre1() {
  return (
    <section id="chap1">
      <h2 className="font-display text-4xl font-bold text-fuchsia-700 mb-6 border-b-4 border-fuchsia-200 pb-2 mt-16">
        CHAPITRE 1 : UNE COURONNE, ÇA NE S'ÉVAPORE PAS
      </h2>
      <p className="text-slate-500 font-medium mb-8">Niveau recommandé : 3<br/>Lieu : Le château de Pétaouchnok, du balcon royal aux cuisines<br/>Ambiance : Comédie de palais, un peu de panique et beaucoup de politesse excessive.</p>

      <InfoBox title="Synopsis du Chapitre pour le Maître du Jeu">
        <p>Le héros est convoqué au château. Il enquête sur les lieux du vol (le coussin vide, le roi dans son bain, les gardes, les cuisines), puis le Chancelier Gribouille lui confie officiellement l'enquête et lui impose un partenaire : l'oie Gaston. <strong>Indice n°1 pour le MJ :</strong> la miette est du fromage, la plume est une plume d'oie, mais un cheveu gris et une tache d'encre violette sont aussi sur le coussin (ils appartiennent au Chancelier). <strong>À retenir en fin de chapitre :</strong> (1) la Couronne a disparu cette nuit ; (2) le Chancelier a chargé le héros de l'enquête ; (3) Gaston l'oie veut du maïs doré.</p>
      </InfoBox>

      <h3 className="font-display text-2xl font-bold text-slate-700 mt-8 mb-4">SCÈNE 1 : LA SALLE DU TRÔNE (Exploration)</h3>
      <ReadAloud title="Texte à lire à voix haute">
        "Un messager en chaussons a défoncé ta porte à sept heures, en criant « URGENCE ROYALE ! » avant de s'excuser pour la porte. Tu arrives au château de Pétaouchnok en vingt minutes, essoufflé, un croissant à la main. La salle du trône est un joyeux désastre : des serviteurs courent dans tous les sens en tenant des plateaux vides, un orchestre de trombones joue une marche funèbre un peu trop gaie, et au centre, sur un trône doré beaucoup trop grand pour lui, un petit roi tout rond est assis... dans une baignoire à roulettes remplie de mousse."<br/><br/>
        "« Détective ! » pleure le roi Gaspard en éclaboussant la moquette. « Ma Couronne a disparu ! Sans elle, plus personne ne rigole, et le Grand Banquet de demain sera un enterrement ! » À côté de lui, sur un coussin de velours rouge, il n'y a rien. Dans un coin, deux gardes se saluent l'un l'autre sans jamais s'arrêter. Une porte mène aux cuisines, d'où sort une odeur de tarte brûlée. Un homme maigre, tout en gris, observe la scène avec une moue de dégoût. Que fais-tu ?"
      </ReadAloud>

      <InfoBox title="Profil des personnages de la salle du trône">
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Le roi Gaspard le Gourmand :</strong> rond, rose, sensible, il pleure et rit en même temps. Il répond à tout par une blague ou une remarque sur la nourriture.</li>
          <li><strong>Les gardes Garde-à-vous et Salut-militaire :</strong> ils ne peuvent s'empêcher de se saluer à chaque phrase : « Garde-à-vous ! » « Salut, camarade ! » « Salut, camarade ! » Ils savent peu de choses mais en parlent beaucoup.</li>
          <li><strong>Le Chancelier Gribouille :</strong> grand, maigre, tout en gris, voix tranquille et sans une once d'humour. Il paraît très dévoué au roi, et regarde chaque blague avec une grimace de douleur.</li>
        </ul>
      </InfoBox>

      <ActionBox title="Options d'Exploration et Mécaniques (Bac à sable)">
        <p className="mb-4">Le héros peut faire ce qu'il veut, dans l'ordre qu'il veut. Chaque piste donne un indice, mais aucun n'est indispensable : un seul suffit pour continuer. Donne un point de <strong>Panache</strong> à une idée vraiment drôle ou maligne.</p>

        <h4 className="font-bold text-lg mb-2">1. Examiner le coussin vide (Test de MALICE - DD 12)</h4>
        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li><strong>Réussite :</strong> le héros trouve une <strong>miette de fromage</strong> (du fromage de chèvre très puant), <strong>une plume blanche</strong> et, avec la loupe, <strong>un cheveu gris</strong> collé au velours. <em>« Intéressant... »</em></li>
          <li><strong>Réussite par 4 ou plus (DD 16) :</strong> il remarque en plus <strong>une minuscule tache d'encre violette</strong>. (Indice n°1 sur le vrai coupable.)</li>
          <li><strong>Échec :</strong> il ne voit qu'un coussin. Le roi lui souffle : « Il y avait une miette. Je crois. J'ai peut-être mangé le reste. »</li>
        </ul>

        <h4 className="font-bold text-lg mb-2">2. Interroger les gardes (Test de CHARME - DD 11)</h4>
        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li><strong>Réussite :</strong> à force de patience (et de salut de politesse), ils racontent : « Cette nuit, on a entendu... un caquètement ! Un grand cri d'oie ! Et un bruit de pas silencieux en pantoufles. » Pendant ce temps, ils continuent de se saluer.</li>
          <li><strong>Échec :</strong> ils saluent tellement que le héros finit par saluer lui aussi sans pouvoir s'arrêter. Il perd un tour mais gagne un <strong>Panache</strong> pour son ridicule.</li>
        </ul>

        <h4 className="font-bold text-lg mb-2">3. Fouiller les cuisines (Test de MALICE ou de COURAGE - DD 12)</h4>
        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li>La cuisinière, <strong>Madame Soufflé</strong>, jongle avec trois tartes. Elle n'a pas dormi depuis deux jours.</li>
          <li><strong>Réussite :</strong> en échange d'un coup de main (porter les plateaux, goûter la tarte), elle raconte : « J'ai vu quelqu'un passer en cape grise, vers minuit. Il sentait l'encre. »</li>
          <li><strong>Loot : une Tarte Miracle</strong> (rend 4 PV).</li>
          <li><strong>Échec :</strong> la tarte explose sur le héros, qui perd 1 PV et une manche, mais Madame Soufflé lui sourit : « Tu reviendras me voir. »</li>
        </ul>

        <h4 className="font-bold text-lg mb-2">4. Parler au roi dans son bain (Roleplay)</h4>
        <p>Il explique : la Couronne ne brille que si quelqu'un rit dans le royaume. « Si personne ne rit demain soir pendant le banquet, la magie s'éteint. Le Chancelier Gribouille dit que c'est ridicule, mais lui n'a jamais ri de sa vie. »</p>
      </ActionBox>

      <h3 className="font-display text-2xl font-bold text-slate-700 mt-8 mb-4">SCÈNE 2 : LA MISSION DU CHANCELIER ET L'OIE GASTON (Rencontre et Roleplay)</h3>
      <ReadAloud title="Texte à lire à voix haute">
        "Le Chancelier Gribouille s'approche, les mains jointes comme un prêtre, et te regarde de haut. « Détective, le roi vous accorde sa confiance, et moi aussi, évidemment. L'enquête vous est officiellement confiée. J'ai une piste : il se murmure que le Baron Cornichon, notre voisin, a des vues sur la Couronne. Il est rusé, dangereux, et surtout, il rit tout le temps. » Il fait une grimace de dégoût à ce dernier mot. « Je vous mets à disposition le meilleur enquêteur du royaume pour vous seconder. »"<br/><br/>
        "Une oie énorme, blanche comme une meringue, entre dans la salle en marchant comme sur un tapis rouge. Elle porte un petit chapeau de détective, penché sur un œil. « Gaston, détective officiel de Sa Majesté, honoré. » Elle te regarde de la tête aux pieds. « Tu es le nouveau ? J'avais demandé quelqu'un de plus grand. Mes tarifs : dix grains de maïs doré par jour, plus les repas, et on ne me réveille pas avant dix heures. » Que fais-tu ?"
      </ReadAloud>

      <InfoBox title="Profil de Gaston, l'oie détective">
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Apparence :</strong> grande oie blanche, très fière, un petit chapeau melon toujours de travers.</li>
          <li><strong>Voix :</strong> voix de diva vexée, lente et pleine de soupirs. Elle se prend pour le meilleur détective du monde. Elle commente tout : « Sublime. » « Pitoyable. » « Je vous l'avais dit. »</li>
          <li><strong>Son défaut (à préparer pour le chapitre 5) :</strong> elle adore le <strong>maïs doré</strong>, plus que tout. Dès qu'on en agite devant elle, elle perd la tête. Elle est lâche mais attachante. Sous sa vanité, elle apprécie sincèrement le héros, et le montre en l'insultant gentiment.</li>
          <li><strong>En jeu :</strong> Gaston peut donner <strong>un coup de main</strong> (+2) à un jet une fois par chapitre, en échange d'un compliment sincère du héros.</li>
        </ul>
      </InfoBox>

      <ActionBox title="L'Arbre de Dialogue et les Résolutions">
        <h4 className="font-bold text-lg mb-2">Option A : Poser des questions au Chancelier (Test de MALICE - DD 13)</h4>
        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li><strong>Réussite :</strong> le héros remarque que Gribouille ne cligne jamais des yeux et qu'il a une tache d'encre violette sur le bout du doigt. Il ne dit rien : c'est un détail de plus à garder en tête. (<strong>Indice n°2.</strong>) Le Chancelier hausse un sourcil : « Un détective qui pose trop de questions finit par en poser trop. »</li>
          <li><strong>Échec :</strong> il répond poliment à tout, sans rien dire d'utile, et souligne que le Baron Cornichon est « suspect numéro un, évidemment ».</li>
        </ul>

        <h4 className="font-bold text-lg mb-2">Option B : Négocier avec Gaston (Test de CHARME - DD 11)</h4>
        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li><strong>Réussite :</strong> il baisse ses tarifs à cinq grains de maïs, et accepte de dormir un peu moins tard. Il gagne aussi un peu de respect pour le héros.</li>
          <li><strong>Échec :</strong> il garde ses dix grains, et soupire : « Un amateur, je vous l'avais dit. » Le héros perd 5 écus.</li>
        </ul>

        <h4 className="font-bold text-lg mb-2">Option C : Faire un compliment sincère à Gaston (aucun jet)</h4>
        <p>Il rougit, se tait une seconde, puis se reprend : « Évidemment. » Il donne un coup de main (+2) au prochain jet du héros. <strong>Gagne un point de Panache</strong> pour avoir été gentil.</p>
      </ActionBox>

      <ReadAloud title="Texte à lire à voix haute (fin du chapitre)">
        "Le Chancelier te tend un parchemin tout gris, couvert d'une écriture serrée : l'itinéraire de l'enquête. « Forêt des Brigands, Marché aux Menteurs, puis le château du Baron. Dépêchez-vous : le banquet est demain à vingt heures. » Il sourit, ou plutôt ses lèvres se tendent un peu. Quand tu quittes le château, Gaston te suit en marchant comme si tout lui appartenait. « Chérie, » dit-elle à une passante, « ne regardez pas, c'est mon assistant. » Tu soupires. Ça va être une longue enquête."
      </ReadAloud>

      <h3 className="font-display text-2xl font-bold text-slate-700 mt-8 mb-4">SCÈNE 3 : LES PRÉPARATIFS DANS LE VILLAGE (Exploration et Roleplay)</h3>
      <ReadAloud title="Texte à lire à voix haute">
        "Avant de partir en enquête, il faut s'équiper. Tu retournes à ton agence, au-dessus de la boulangerie de Madame Tartine, pour attraper ton sac, ton manteau de détective et ta loupe. En bas, la boulangère t'attend sur le pas de la porte, les mains pleines de farine. « Alors, c'est vrai ? Tu enquêtes pour le roi ? » Elle essuie une larme avec un torchon (ce qui met de la farine sur sa joue). « Dis-moi ce dont tu as besoin. Pour toi, c'est cadeau. Enfin, presque cadeau. » Dans la rue, les habitants se regroupent : le forgeron, la couturière, le marchand de bretzels. Tout le monde veut te donner un conseil. Que fais-tu ?"
      </ReadAloud>

      <InfoBox title="Profil des habitants de la Rue des Rumeurs">
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Madame Tartine :</strong> boulangère généreuse, grosse voix, câlins dangereux. Elle mélange les noms (« Détective Gaston ! »).</li>
          <li><strong>Gédéon le forgeron :</strong> immense, timide, il forge surtout des cuillères. Il rêve d'être poète.</li>
          <li><strong>Mademoiselle Ficelle, la couturière :</strong> très rapide, parle en rafales, a toujours une aiguille entre les dents.</li>
          <li><strong>Monsieur Bretzel :</strong> marchand ambulant, connaît toutes les rumeurs du village. La moitié sont fausses, et il le sait.</li>
        </ul>
      </InfoBox>

      <ActionBox title="Options d'Exploration et Mécaniques (Bac à sable)">
        <h4 className="font-bold text-lg mb-2">1. Demander un équipement à Madame Tartine (Test de CHARME - DD 11)</h4>
        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li><strong>Réussite :</strong> elle offre, au choix, <strong>trois brioches-potions</strong> (chacune rend 3 PV) ou <strong>un sac de pain de voyage</strong> qui sert d'appât pour les animaux.</li>
          <li><strong>Échec :</strong> elle insiste pour te faire goûter « un petit quelque chose » : le héros perd un tour mais gagne un <strong>Panache</strong> pour sa politesse.</li>
        </ul>

        <h4 className="font-bold text-lg mb-2">2. Visiter la forge de Gédéon (Test de CHARME ou de COURAGE - DD 12)</h4>
        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li>Gédéon forge une petite cuillère en argent. Il t'offre de l'aiguiser, de renforcer ton épée, ou de lire son poème (« Ô marteau, ô enclume »).</li>
          <li><strong>Réussite (en lisant le poème avec émotion) :</strong> <strong>Loot : épée renforcée</strong> (dégâts 1D6 +2 pour toute l'aventure).</li>
          <li><strong>Échec :</strong> la lecture est très mauvaise. Gédéon pleure. L'épée reste inchangée, mais le héros gagne +1 Panache pour sa gentillesse.</li>
        </ul>

        <h4 className="font-bold text-lg mb-2">3. Passer chez Mademoiselle Ficelle (Test de MALICE - DD 11)</h4>
        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li>Elle propose de coudre une <strong>doublure à capes</strong> en un clin d'œil. Mais elle a aussi un tas de vieux costumes à vendre.</li>
          <li><strong>Réussite :</strong> <strong>Loot : un Déguisement en trois parties</strong> (moustache, perruque, lunettes) qui donne +2 à un jet de CHARME ou de MALICE pour passer inaperçu.</li>
          <li><strong>Échec :</strong> elle coud la manche du héros à son propre pantalon par erreur. Il perd un tour et rit.</li>
        </ul>

        <h4 className="font-bold text-lg mb-2">4. Écouter les rumeurs de Monsieur Bretzel (Roleplay + jet de MALICE - DD 12)</h4>
        <p className="mb-2">Il parle sans s'arrêter : « Le roi a perdu sa Couronne ? Normal, il la perd chaque année. » « Le Baron Cornichon ? Il fabrique des bombes à fromage. » « Le Chancelier ? Un saint homme, qui ne dort jamais. » « Le roi a un jumeau caché. » Le héros doit <strong>trier le vrai du faux</strong> (une seule de ces phrases est vraie : le Chancelier ne dort effectivement jamais, car il rédige des décrets la nuit).</p>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Réussite :</strong> le héros repère la vraie rumeur. <strong>Gagne un point de Panache.</strong></li>
          <li><strong>Échec :</strong> il croit aux jumeaux, et Gaston passe dix minutes à en parler.</li>
        </ul>
      </ActionBox>

            <h3 className="font-display text-2xl font-bold text-slate-700 mt-8 mb-4">SCÈNE 4 : LE DÉPART EN CARRIOLE (Roleplay)</h3>
      <ReadAloud title="Texte à lire à voix haute">
        "Le départ se fait en carriole : une vieille charrette de légumes tirée par un âne nommé Philippe, qui soupire à chaque pas. Gaston s'installe à l'avant, un coussin sous les plumes. « Je me place à l'avant, évidemment. Je suis le chef de mission. » Tu t'assois à l'arrière, entre une caisse de choux et un sac de carottes. La charrette démarre dans un grincement, sous les applaudissements du village. Madame Tartine agite un mouchoir, Gédéon récite un vers triste, et un enfant crie : « Détective ! Ramène la Couronne ! » Tu souris. Le soleil se lève, la route s'ouvre devant toi, et à l'horizon, la Forêt des Chuchotis attend."
      </ReadAloud>

      <ActionBox title="Pendant le trajet (Roleplay et petits jets)">
        <p className="mb-4">Ce moment calme sert à créer du lien entre le héros et Gaston. Laisse l'enfant décider de ce qu'il fait.</p>
        <ul className="list-disc pl-5 space-y-3">
          <li><strong>Discuter avec Gaston :</strong> elle parle de sa carrière (« J'ai résolu l'affaire du Gâteau Disparu. C'était moi qui l'avais mangé. »). Si le héros l'écoute avec attention (aucun jet), <strong>gagne un point de Panache</strong> et elle révèle son rêve : posséder un champ entier de maïs doré.</li>
          <li><strong>Examiner le parchemin du Chancelier (Test de MALICE - DD 13) :</strong> l'écriture est soignée, avec un « G » très ornementé. <strong>Réussite :</strong> en l'approchant de la lumière, le héros voit que le papier est <em>très</em> grisé, et qu'il sent l'encre violette (même parfum que sur le coussin). <strong>Indice supplémentaire.</strong></li>
          <li><strong>Jouer à un jeu de devinettes avec l'âne Philippe (Test de CHARME - DD 11) :</strong> il ne répond qu'avec des soupirs, mais, si le héros réussit, il pousse un « hi-han » joyeux et accélère. <strong>Le trajet gagne une heure</strong> (utile pour le chapitre 7).</li>
          <li><strong>Rédiger son carnet de détective :</strong> le héros note ses premiers indices. Le MJ peut l'aider à les résumer (« La miette, la plume, le cheveu... »).</li>
        </ul>
      </ActionBox>

      <InfoBox title="Note pour le MJ : faire le point">
        <p>Résume à voix haute les trois choses à retenir. Compte les points de Panache, les potions et les écus du héros (20 de départ, moins ceux perdus). Rappelle au passage que l'enfant a le droit de dépenser du Panache sur n'importe quel jet : c'est la première fois qu'il y pense.</p>
      </InfoBox>
    </section>
  );
}
