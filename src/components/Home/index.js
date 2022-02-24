import './styles.scss';
import pinceaux from 'src/assets/photos/2022-01-27_Pinceaux-1.jpg';
import galets from 'src/assets/photos/2018-Galet.JPG';
import armoire from 'src/assets/photos/Armoire-Pharmacie.jpg';
import horloge from 'src/assets/photos/DSC_7388 copie.JPG';
import bateau from 'src/assets/photos/Coffre-bateau.JPG';
import chantalExpo from 'src/assets/photos/20191201_EXPO.jpg';
import chantal from 'src/assets/photos/A-Chantal.JPG';
import { useCookies } from 'react-cookie';
import { useLayoutEffect } from 'react';
import { useHistory } from 'react-router-dom';

const Home = () => {

  const [cookies, setCookie, removeCookie] = useCookies(['reload']);
  const history = useHistory();

  useLayoutEffect(() => {
    if (cookies.reload) {
      removeCookie('reload');
      window.location.reload();
    }
  });

  return (
    <section className="home">
      <div className="home__text__first">
        <p className='home__text__first__strong'>Bienvenue á « L'ècho de mes pinceaux », sur mon site qui voudrait être avant tout un partage de mes passions !</p>
        <div className="home__simpleimage__first">
          <img src={pinceaux} alt="Mes pinceaux" />
        </div>
        <p>Mon site n'est pas d'abord un site de vente. Certes, il n'en n'exclut pas la question, mais mon ambition est avant tout de faire connaître et d'exposer le travail de mes pinceaux.</p>
        <p>« L'ècho de mes pinceaux » est aussi un hommage á vous tous, á tous mes amis, á toutes les rencontres
        proches et lointaines que j'ai pu faire et jusqu'au bout du monde, tous ceux qui m'ont inspirèe et aidèe du fil du temps, á puiser moi-même aux sources de l'èlan crèateur.</p>
        <p>C'est un rèel plaisir de partager avec vous les joies crèatrices d'un univers oú la peinture et le dessin ont ètè mes compagnons depuis toujours. Aprés avoir consacrè une bonne partie de ma vie professionnelle á l'enseignement universitaire et contemplè les œuvres d'art, j'ai eu envie de mettre mes pinceaux á l'œuvre.</p>
        <p>Ce site vient de la question rècurrente entendue lors de mes expositions : « oú peut-on voir ce que vous faites ? ».</p>
        <p>Il ètait donc temps de m'y mettre.</p>
        <p>Une marche á suivre trés souple vous permet de dècouvrir les œuvres par <u>dates</u>, <u>collections</u> ou <u>techniques</u>.</p>
        <p>N'hèsitez pas á me <u onClick={() => history.push()}>contacter</u>, ou laisser á votre tour un petit ècho á celui de mes pinceaux…</p>
        <p className='home__text__first__strong'>Une grande diversitè dans les techniques, les supports et les dècors.</p>
        <p>Un univers variè qui me rend inclassable.</p>
        <p>Je dirais même que je suis èclectique. Tout m'intèresse.</p>
      </div>
      <div className="home__image-text__first">
        <div className="home__image-text__first__photo">
          <img src={chantal} alt="Mes pinceaux" />
        </div>
        <div className="home__image-text__first__text">
          <div className="home__image-text__first__text__container">
            <p className='home__image-text__first__text__container__strong'>Cet èclectisme se retrouve dans les techniques utilisèes.</p>
            <p>Cela peut être - et j'ai commencè par lá - la dècoration traditionnelle, dite « peinture paysanne », sur des supports comme le bois, meubles ou objets.</p>
            <p>J'utilise le plus souvent une peinture á la casèine, une peinture naturelle, á base de lait ou yaourt que l'on colore avec des pigments. Onctueuse, elle est trés agrèable á utiliser et laisse au geste toute souplesse crèative.</p>
          </div>
        </div>
      </div>
      <div className="home__image-text__second">
        <div className="home__image-text__second__text">
          <div className="home__image-text__second__text__container">
            <p className='home__image-text__second__text__container__strong'>Eclectisme dans les supports et leurs dècors:</p>
            <p>Le <u>mètal</u>, les galets, tout se prête facilement au jeu… Rien de plus amusant que de redonner vie á de vieux objets, á des meubles, á transformer les vieux seaux á charbons de nos grands-parents en porte-parapluie dècoratifs. Ou les <u>galets</u>, joies de l'Ocèan de mon enfance, en presse-papiers ludiques et dècoratifs..</p>
          </div>
        </div>
        <div className="home__image-text__second__photo">
          <img src={galets} alt="Galets" />
        </div>
      </div>
      <div className="home__two-images">
        <div className="home__two-images__first">
          <img src={armoire} alt="Armoire Pharmacie" />
        </div>
        <div className="home__two-images__second">
          <img src={horloge} alt="Horloge" />
        </div>
      </div>
      <div className='home__simpletext'>
        <p>Au fil des annèes et des rencontres, des demandes se succédent : meubles de famille ou trouvailles de brocantes, objets á restaurer, insolites, vintages á rénover ou á recycler…</p>
      </div>
      <div className="home__simpleimage__second">
        <img src={bateau} alt="Coffre bateau" />
      </div>
      <div className="home__image-text__third">
        <div className="home__image-text__third__photo">
          <img src={chantalExpo} alt="Chantal EXPO" />
        </div>
        <div className="home__image-text__third__text">
          <div className="home__image-text__third__text__container">
            <p>Autodidacte et camèlèon, je m'adapte et crèe des nouvelles techniques pour la rèalisation de crèations exclusives, uniques et de qualitè pour vous ou pour vos proches.</p>
            <p>J'aime tester, rechercher, expèrimenter, inventer des techniques mixtes : collages, peintures,</p>
            <p className='home__image-text__third__text__container__tab__first'>Bois, mètal, cuir,</p>
            <p className='home__image-text__third__text__container__tab__second'>cailloux, bijoux, joujoux…</p>
            <p className='home__image-text__third__text__container__tab__third'>on peut peindre sur tout , partout, pour tout.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
