import './styles.scss';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import ArtworkTextInput from './textinput';
import ArtworkDropdownInput from './dropdowninput';
import ArtworkFileInput from './fileinput';
import ArtworkTextAreaInput from './textareainput';
import ModalForm from './modalform';
import PhotoPreview from './imagepreview';
import PageAlert from '../PageAlert';
import { useCookies } from 'react-cookie';
import { getYearsFromApi } from '../../actions/year';
import { getTechniquesFromApi } from '../../actions/technique';
import { getCollectionsFromApi } from '../../actions/collection';
import { getStatusesFromApi } from '../../actions/status';
import { postArtwork, updateArtwork } from '../../actions/artwork';

const ArtworkForm = () => {

  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [year, setYear] = useState('1');
  const [technique, setTechnique] = useState('1');
  const [collection, setCollection] = useState('1');
  const [status, setStatus] = useState('1');
  const [photo, setPhoto] = useState([]);
  const [modal, setModal] = useState(false);
  const [modalLabel, setModalLabel] = useState('');
  const [alert, setAlert] = useState(false);
  const yearsList = useSelector((state) => state.year.list);
  const techniquesList = useSelector((state) => state.technique.list);
  const collectionsList = useSelector((state) => state.collection.list);
  const statusesList = useSelector((state) => state.status.list);
  const [cookies, setCookie, removeCookie] = useCookies(['artworkMethod']);
  const method = () => {
    if (cookies.allowCookies) {
      return cookies.artworkMethod
    };
    return useSelector((state) => state.artwork.method);
  };
  const [id, setId] = useState(useSelector((state) => state.artwork.item_id));
  const formTitle = () => {
    if (method() === 'patch') {
      return 'Modifier réalisation artistique';
    } else if (method() === 'post') {
      return 'Publier nouvelle réalisation artistique';
    };
  };

  useEffect(() => {
    dispatch(getYearsFromApi());
    dispatch(getTechniquesFromApi());
    dispatch(getCollectionsFromApi());
    dispatch(getStatusesFromApi());
    if (cookies.artworkTitre) {
      setTitle(cookies.artworkTitre);
    };
    if (cookies.artworkAnnée) {
      setYear(cookies.artworkAnnée);
    };
    if (cookies.artworkTechniques) {
      setTechnique(cookies.artworkTechniques);
    };
    if (cookies.artworkCollections) {
      setCollection(cookies.artworkCollections);
    };
    if (cookies.artworkStatus) {
      setStatus(cookies.artworkStatus);
    };
    if (cookies.artworkPhoto) {
      setPhoto(cookies.artworkPhoto);
    };
    if (cookies.artworkDescrition) {
      setDescription(cookies.artworkDescrition);
    };
    if (cookies.artworkId) {
      setId(cookies.artworkId);
    };
    const noCookie = !(cookies.artworkTitre && cookies.artworkAnnée && cookies.artworkTechniques && cookies.artworkCollections && cookies.artworkStatus && cookies.artworkPhoto && cookies.artworkDescrition);
    if (cookies.artworkMethod === 'patch' && noCookie) {
      axios
        .get(`https://v1-echo-de-mes-pinceaux.herokuapp.com/artworks/${id}`)
        .then(
          (response) => {
            const artwork = response.data;
            setTitle(artwork.title);
            setYear(artwork.year_id);
            setTechnique(artwork.technique_id);
            setCollection(artwork.collection_id);
            setStatus(artwork.status_id);
            setDescription(artwork.description);
            setPhoto(artwork.photo_id.split(','));
          },
        )
        .catch(
          (error) => {
            console.log(error);
          },
        );
    };
    if (cookies.inputFocus) {
      document.querySelector('#titre').focus();
      removeCookie('inputFocus');
    };
  }, []);

  return (
    <section className="artwork_form">
      {!modal && !alert && <div className="artwork_form__container">
        <h1 className="artwork_form__container__title">{formTitle()}</h1>
        <form className="artwork_form__container__form" action="" encType='multipart/form-data' method="post" onSubmit={(event) => {
          event.preventDefault();
          const photoToString = photo.toString()
          if (method() === 'post') {
            dispatch(postArtwork(title, year, technique, collection, status, description, photoToString));
          } else if (method() === 'patch') {
            console.log(id);
            dispatch(updateArtwork(id, title, year, technique, collection, status, description, photoToString));
          } else {
            console.log('no method')
          };
          setAlert(true);
        }}>
          <ArtworkTextInput value={title} setValue={setTitle} label='Titre'/>
          <ArtworkDropdownInput value={year} setValue={setYear} label='Année' list={yearsList} modalValue={modal} setModalValue={setModal} setModalLabel={setModalLabel} />
          <ArtworkDropdownInput value={technique} setValue={setTechnique} label='Techniques' list={techniquesList} modalValue={modal} setModalValue={setModal} setModalLabel={setModalLabel} />
          <ArtworkDropdownInput value={collection} setValue={setCollection} label='Collections' list={collectionsList} modalValue={modal} setModalValue={setModal} setModalLabel={setModalLabel} />
          <ArtworkDropdownInput value={status} setValue={setStatus} label='Status' list={statusesList} modalValue={modal} setModalValue={setModal} setModalLabel={setModalLabel}/>
          <ArtworkFileInput setValue={setPhoto} label='Photo'/>
          {(photo.length > 0) && <PhotoPreview photo_id={photo}/>}
          <ArtworkTextAreaInput value={description} setValue={setDescription} label='Descrition'/>
          <input type="submit" className="artwork_form__container__form__submit" />
        </form>
      </div>}
      {modal && !alert && <ModalForm label={modalLabel} setAlert={setAlert} />}
      {alert && <PageAlert />}
    </section>
  );
};

export default ArtworkForm;
