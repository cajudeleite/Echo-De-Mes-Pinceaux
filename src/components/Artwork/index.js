import './styles.scss';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { simplifyArtworks } from '../../utils';
import ArtworkList from './artworklist';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setFormMethod } from '../../actions/artwork';
import { useCookies } from 'react-cookie';

const ArtworkPage = () => {

  const history = useHistory();
  const dispatch = useDispatch();
  const logged = localStorage.getItem('logged') === 'true';
  const [artwork, setArtwork] = useState([]);
  const [cookies, setCookie] = useCookies(['artworkMethod']);

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
      {logged && <div className="artwork__create">
        <button key='new_artwork' className='artwork__create__button' onClick={() => {
          dispatch(setFormMethod('post'));
          if (cookies.allowCookies) {
            setCookie('artworkMethod', 'post', {
              path: "/"
            });
            setCookie('inputFocus', 'true', {
              path: "/"
            });
          };
          history.push('/artwork/create');
        }}>Nouvelle Publication <FontAwesomeIcon className="artwork__create__button__plus" icon={faPlus} /></button>
      </div>}
      <div className="artwork__list">
        {artwork.map((artwork) => <ArtworkList id={artwork.id} title={artwork.title} photo_id={artwork.photo_id}/>,)}
      </div>
    </section>
  );
};

export default ArtworkPage;
