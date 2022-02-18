import './styles.scss';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { simplifyArtworks } from '../../utils';
import ArtworkList from './artworklist';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { useHistory } from 'react-router-dom';

const ArtworkPage = () => {

  const history = useHistory();
  const logged = localStorage.getItem('logged') === 'true';
  const [artwork, setArtwork] = useState([]);

  useEffect(() => {
    axios
      .get('https://v1-echo-de-mes-pinceaux.herokuapp.com/artworks')
      .then(
        (response) => {
          const artworkArray = response.data;
          const simplifiedArray = simplifyArtworks(artworkArray);
          setArtwork(simplifiedArray);
        },
      )
      .catch(
        (error) => {
          console.log(error);
        },
      );
  }, []);

  return (
    <section className='artwork'>
      <h1>Hello your in gallery</h1>
      {logged && <div className="artwork__create">
        <button className='artwork__create__button' onClick={() => history.push('/artwork/create')}>Nouvelle Publication <FontAwesomeIcon className="artwork__create__button__plus" icon={faPlus} /></button>
      </div>}
      <div className="artwork__list">
        {artwork.map((artwork) => <ArtworkList id={artwork.id} title={artwork.title} photo_id={artwork.photo_id}/>,)}
      </div>
    </section>
  );
};

export default ArtworkPage;
