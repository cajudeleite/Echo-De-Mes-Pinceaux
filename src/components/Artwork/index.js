import './styles.scss';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { simplifyArtworks } from '../../utils';
import ArtworkList from './artworklist';
import ArtworkFilters from './filter';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faArrowLeftLong } from '@fortawesome/free-solid-svg-icons';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setFormMethod } from '../../actions/artwork';
import { useCookies } from 'react-cookie';
import Page from './page';

const ArtworkPage = () => {

  const history = useHistory();
  const dispatch = useDispatch();
  const logged = localStorage.getItem('logged') === 'true';
  const [artwork, setArtwork] = useState([]);
  const [type, setType] = useState('none');
  const [value, setValue] = useState('none');
  const [length, setLength] = useState(0);
  const [cookies, setCookie, removeCookie] = useCookies(['artworkMethod']);
  const getArtworks = () => {
    axios
      .get('https://v1-echo-de-mes-pinceaux.herokuapp.com/artworks')
      .then(
        (response) => {
          const artworkArray = response.data;
          let simplifiedArray = simplifyArtworks(artworkArray);
          simplifiedArray = simplifiedArray.reverse();
          if (type !== 'none' && value !== 'none') {
            const newArray = [];
            simplifiedArray.reverse().map((item) => {
              if (item[type] === parseInt(value, 10)) {
                newArray.push(item);
              };
            });
            setArtwork(newArray);
          } else {
            if (cookies.artworkPage == 1) {
              setArtwork(simplifiedArray.slice(0, 10));
            } else if (cookies.artworkPage > 1 || simplifiedArray.reverse().splice(0, 10 * (cookies.artworkPage - 1)).slice(0, 10)) {
              simplifiedArray.splice(0, 10 * (cookies.artworkPage -1));
              setArtwork(simplifiedArray.slice(0, 10));
            }
          };
        },
      )
      .catch(
        (error) => {
          console.log(error);
        },
      );
  };

  useEffect(() => {
    getArtworks();
    if (!cookies.artworkPage) {
      setCookie('artworkPage', 1, {
        path: "/"
      });
    };
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
      {value !== 'none' && type !== 'none' && <button className="artwork__item__top__back_button" onClick={() => window.location.reload()}><FontAwesomeIcon className="artwork__item__top__back_button__left_arrow" icon={faArrowLeftLong} /> Revenir en arrière</button>}
      <ArtworkFilters type={type} setType={setType} value={value} setValue={setValue} search={getArtworks} />
      <h2 className='artwork__disclaimer'>Cliquez sur les réalisations pour naviguer</h2>
      {artwork.length > 0 && <div className="artwork__list">
        {artwork.map((artwork) => <ArtworkList id={artwork.id} title={artwork.title} photo_id={artwork.photo_id}/>,)}
      </div>}
      {artwork.length === 0 && <h2 className='artwork__message'>Il n'y a pas de rèsultats selon vos paramétres de recherche</h2>}
      <Page length={length} />
    </section>
  );
};

export default ArtworkPage;
