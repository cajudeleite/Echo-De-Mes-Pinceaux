import './styles.scss';
import { Carousel } from 'react-responsive-carousel';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { AdvancedImage } from '@cloudinary/react';
import { Cloudinary } from "@cloudinary/url-gen";
import { simplifyArtworks } from '../../utils';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const HomeCarousel = () => {

  const [artworkArray, setArtworkArray] = useState([]);
  const cld = new Cloudinary({
    cloud: {
      cloudName: 'cajudeleite'
    }
  });

  useEffect(() => {
    axios
      .get('https://v1-echo-de-mes-pinceaux.herokuapp.com/artworks')
      .then(
        (response) => {
          const artworkArray = response.data;
          const simplifiedArray = simplifyArtworks(artworkArray);
          setArtworkArray(simplifiedArray.slice(-3));
        },
      )
      .catch(
        (error) => {
          console.log(error);
        },
      );
      setTimeout(() => {
        document.querySelector('.home__carousel__right').click();
      }, 5000);
  }, []);

  return (
    <Carousel showThumbs={false} selectedItem={3} autoPlay={true} interval={5000} emulateTouch={true} swipeable={true} infiniteLoop={true} dynamicHeight={true} centerMode={true} renderArrowPrev={(onClickHandler, hasPrev, label) =>
      hasPrev && (
        <button className='home__carousel__left' type="button" onClick={onClickHandler} title={label}>
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
      )
    } renderArrowNext={(onClickHandler, hasNext, label) =>
        hasNext && (
          <button className='home__carousel__right' type="button" onClick={onClickHandler} title={label}>
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
        )
      } className='home__carousel'>
      {artworkArray.map((artwork) => <div>
        <AdvancedImage
          key={artwork.id}
          className='home__carousel__image'
          cldImg={cld.image(artwork.photo_id.split(',')[0])}
        />
      </div>)}
    </Carousel>
  );
};

export default HomeCarousel;
