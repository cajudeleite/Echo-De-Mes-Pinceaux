import './styles.scss';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { AdvancedImage } from '@cloudinary/react';
import { Cloudinary } from "@cloudinary/url-gen";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setFormMethod, deleteArtwork } from '../../actions/artwork';
import { faChevronLeft, faChevronRight, faArrowLeftLong, faPencil, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import PageAlert from '../PageAlert';
import { useCookies } from 'react-cookie';

const ArtworkItem = () => {

  const history = useHistory();
  const dispatch = useDispatch();
  const logged = localStorage.getItem('logged') === 'true';
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const descriptionArray = description.split('\n');
  const [photoArray, setPhotoArray] = useState([]);
  const [n, setN] = useState(0);
  const [yearName, setYearName] = useState('');
  const [techniqueName, setTechniqueName] = useState('');
  const [collectionName, setCollectionName] = useState('');
  const [statusName, setStatusName] = useState('');
  const [alert, setAlert] = useState(false);
  const [cookies, setCookie] = useCookies(['artworkMethod']);
  const id = useSelector((state) => state.artwork.item_id);
  const image = document.querySelector('.artwork__item__photo__image');
  const cookiedId = () => {
    if (cookies.artworkId) {
      return cookies.artworkId;
    };
    return id;
  };

  const textTreatment = (text) => {
    const à = /à/gi;
    const ù = /ù/gi;
    const è = /è/gi;
    const é = /é/gi;
    const µ = /µ/gi;
    let treatedText = text;
    treatedText = treatedText.replace(à, 'á');
    treatedText = treatedText.replace(ù, 'ú');
    treatedText = treatedText.replace(è, 'µ');
    treatedText = treatedText.replace(é, 'è');
    treatedText = treatedText.replace(µ, 'é');
    return treatedText;
  }

  const idToName = (path, id) => {
    axios
      .get(`https://v1-echo-de-mes-pinceaux.herokuapp.com/${path}/${id}`)
      .then(
        (response) => {
          const objectName = response.data.name;
          if (path === 'years') {
            setYearName(objectName)
          } else if (path === 'techniques') {
            setTechniqueName(objectName)
          } else if (path === 'collections') {
            setCollectionName(objectName)
          } else if (path === 'statuses') {
            setStatusName(objectName)
          }
        },
      )
      .catch(
        (error) => {
          console.log(error);
        },
      );
  };

  const cld = new Cloudinary({
    cloud: {
      cloudName: 'cajudeleite'
    }
  });

  const changePhotoPlus = () => {
    checkImage();
    if (photoArray.length === n + 1 && photoArray.length > 1) {
      setN(0);
    } else if (photoArray.length > 1) {
      setN(n + 1);
    };
    checkImage();
  };

  const changePhotoLess = () => {
    checkImage();
    if (n === 0 && photoArray.length > 1) {
      setN(photoArray.length - 1);
    } else if (photoArray.length > 1) {
      setN(n - 1);
    };
    checkImage();
  };

  useEffect(() => {
    axios
      .get(`https://v1-echo-de-mes-pinceaux.herokuapp.com/artworks/${cookiedId()}`)
      .then(
        (response) => {
          const artwork = response.data;
          setTitle(artwork.title);
          idToName('years', artwork.year_id);
          idToName('techniques', artwork.technique_id);
          idToName('collections', artwork.collection_id);
          idToName('statuses', artwork.status_id);
          setDescription(artwork.description);
          setPhotoArray(artwork.photo_id.split(','));
        },
      )
      .catch(
        (error) => {
          console.log(error);
        },
      );
  }, []);

    const checkImage = () => {
      if (image && (image.offsetWidth >= image.offsetHeight)) {
        document.querySelector('.artwork__item__photo').style.padding = "0 2rem";
        document.querySelector('.artwork__item__photo').style.width = "40%";
        document.querySelector('.artwork__item__text').style.width = "60%";
      } else if (image && (image.offsetWidth < image.offsetHeight)) {
        document.querySelector('.artwork__item__photo').style.padding = "0 3rem";
        document.querySelector('.artwork__item__photo').style.width = "35%";
        document.querySelector('.artwork__item__text').style.width = "65%";
      }
    }

    checkImage();

  return (
    <div className='artwork__item'>
      {!alert && <div className="artwork__item__top">
        <button className="artwork__item__top__back_button" onClick={() => history.push('/artwork')}><FontAwesomeIcon className="artwork__item__top__back_button__left_arrow" icon={faArrowLeftLong} /> Revenir en arrière</button>
        {logged && <div className="artwork__item__top__last_buttons">
          <button className="artwork__item__top__last_buttons__edit" onClick={() => {
            dispatch(setFormMethod('patch'));
            if (cookies.allowCookies) {
              setCookie('artworkMethod', 'patch', {
                path: "/"
              });
              setCookie('inputFocus', 'true', {
                path: "/"
              });
            };
            history.push('/artwork/create');
          }}>Modifier <FontAwesomeIcon className="artwork__item__top__last_buttons__edit__pencil" icon={faPencil} /></button>
          <button className="artwork__item__top__last_buttons__delete" onClick={() => {
            setAlert(true);
            dispatch(deleteArtwork(cookiedId()));
          }}>Supprimer <FontAwesomeIcon className="artwork__item__top__last_buttons__delete__trash" icon={faTrashCan} /></button>
        </div>}
      </div>}
      {!alert && <div className="artwork__item__photo">
        <AdvancedImage
          key={cookiedId()}
          id='image'
          className="artwork__item__photo__image"
          cldImg={cld.image(photoArray[n])}
        />
        {photoArray.length > 1 && <div className="artwork__item__photo__arrow">
          <FontAwesomeIcon className="artwork__item__photo__arrow__left" icon={faChevronLeft} onClick={() => {
            changePhotoLess();
            checkImage();
          }} />
          <FontAwesomeIcon className="artwork__item__photo__arrow__right" icon={faChevronRight} onClick={() => {
            changePhotoPlus();
            checkImage();
          }} />
        </div>}
      </div>}
      {!alert && <div className="artwork__item__text">
        <h1 className='artwork__item__text__title'>{title}</h1>
        <p className='artwork__item__text__dateandtechnique'>{yearName} / {textTreatment(techniqueName)}</p>
        <p className='artwork__item__text__collection'>{textTreatment(collectionName)}</p>
        <p className='artwork__item__text__status'>{textTreatment(statusName)}</p>
        {descriptionArray.map((item) => <p className='artwork__item__text__description'>{textTreatment(item)}</p>,<br></br>)}
      </div>}
      {alert && <PageAlert />}
    </div>
  );
};

export default ArtworkItem;
