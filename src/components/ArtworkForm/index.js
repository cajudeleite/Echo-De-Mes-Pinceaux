import './styles.scss';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ArtworkTextInput from './textinput';
import ArtworkDropdownInput from './dropdowninput';
import ArtworkFileInput from './fileinput';
import ArtworkTextAreaInput from './textareainput';
import ModalForm from './modalform';
import PhotoPreview from './imagepreview';
import PageAlert from '../PageAlert';

import { getYearsFromApi } from '../../actions/year';
import { getTechniquesFromApi } from '../../actions/technique';
import { getCollectionsFromApi } from '../../actions/collection';
import { getStatusesFromApi } from '../../actions/status';
import { postArtwork } from '../../actions/artwork';

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
  const success = localStorage.getItem('success') === true;
  const yearsList = useSelector((state) => state.year.list);
  const techniquesList = useSelector((state) => state.technique.list);
  const collectionsList = useSelector((state) => state.collection.list);
  const statusesList = useSelector((state) => state.status.list);

  return (
    <section className="artwork_form">
      {!modal && !alert && <div className="artwork_form__container">
        <h1 className="artwork_form__container__title">Publier nouvelle réalisation artistique</h1>
        <form className="artwork_form__container__form" action="" encType='multipart/form-data' method="post" onSubmit={(event) => {
          event.preventDefault();
          const photoToString = photo.toString()
          dispatch(postArtwork(title, year, technique, collection, status, description, photoToString));
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
      {!modal && alert && !success && <PageAlert title='Il y a eu un problème lors de la publication de votre réalisation artistique' button='Réessayer' route='reload' />}
      {!modal && alert && success && <PageAlert title='Votre réalisation artistique a été publiée avec succès' button='OK' route='/artwork' />}
      {modal && alert && !success && <PageAlert title={`Il y a eu un problème lors de la publication de votre ${modalLabel}`} button='Réessayer' route='reload' />}
      {modal && alert && success && <PageAlert title={`Votre ${modalLabel} a été publiée avec succès`} button='OK' route='reload' />}
    </section>
  );
};

export default ArtworkForm;
