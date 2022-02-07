import './styles.scss';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ArtworkTextInput from './textinput';
import ArtworkDropdownInput from './dropdowninput';
import ArtworkFileInput from './fileinput';
import ArtworkTextAreaInput from './textareainput';
import ModalForm from './modalform';
import PhotoPreview from './imagepreview';

import { getYearsFromApi } from '../../actions/year';
import { getTechniquesFromApi } from '../../actions/technique';
import { getCollectionsFromApi } from '../../actions/collection';
import { getStatusesFromApi } from '../../actions/status';
import { postArtwork } from '../../actions/artwork';

const ArtworkForm = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getYearsFromApi());
    dispatch(getTechniquesFromApi());
    dispatch(getCollectionsFromApi());
    dispatch(getStatusesFromApi());
  }, []);

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [year, setYear] = useState('1');
  const [technique, setTechnique] = useState('1');
  const [collection, setCollection] = useState('1');
  const [status, setStatus] = useState('1');
  const [photo, setPhoto] = useState([]);
  const [modal, setModal] = useState(false);
  const [modalLabel, setModalLabel] = useState('');
  const yearsList = useSelector((state) => state.years.list);
  const techniquesList = useSelector((state) => state.techniques.list);
  const collectionsList = useSelector((state) => state.collections.list);
  const statusesList = useSelector((state) => state.statuses.list);

  return (
    <section className="artwork_form">
      {!modal && <div className="artwork_form__container">
        <h1 className="artwork_form__container__title">Publier nouvelle réalisation artistique</h1>
        <form className="artwork_form__container__form" action="" encType='multipart/form-data' method="post" onSubmit={(event) => {
          event.preventDefault();
          const photoToString = photo.toString()
          dispatch(postArtwork(title, year, technique, collection, status, description, photoToString));
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
      {modal && <ModalForm label={modalLabel} modal={modal} setModal={setModal} />}
    </section>
  );
};

export default ArtworkForm;
