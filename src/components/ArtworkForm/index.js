import './styles.scss';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ArtworkTextInput from './textinput';
import ArtworkDropdownInput from './dropdowninput';
import ArtworkFileInput from './fileinput';
import ArtworkTextAreaInput from './textareainput';


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
  const [photo, setPhoto] = useState(null);
  const yearsList = useSelector((state) => state.years.list);
  const techniquesList = useSelector((state) => state.techniques.list);
  const collectionsList = useSelector((state) => state.collections.list);
  const statusesList = useSelector((state) => state.statuses.list);

  return (
    <section className="artwork_form">
      <div className="artwork_form__container">
        <h1 className="artwork_form__container__title">Publier nouvelle réalisation artistique</h1>
        <form className="artwork_form__container__form" action="" encType='multipart/form-data' method="post" onSubmit={(event) => {
          event.preventDefault();
          dispatch(postArtwork(title, year, technique, collection, status, photo, description));
        }}>
          <ArtworkTextInput value={title} setValue={setTitle} label='Titre'/>
          <ArtworkDropdownInput value={year} setValue={setYear} label='Année' list={yearsList}/>
          <ArtworkDropdownInput value={technique} setValue={setTechnique} label='Techniques' list={techniquesList} />
          <ArtworkDropdownInput value={collection} setValue={setCollection} label='Collections' list={collectionsList} />
          <ArtworkDropdownInput value={status} setValue={setStatus} label='Status' list={statusesList} />
          <ArtworkFileInput setValue={setPhoto} label='Photo'/>
          <ArtworkTextAreaInput value={description} setValue={setDescription} label='Descrition'/>
          <input type="submit" className="artwork_form__container__form__submit" />
        </form>
      </div>
    </section>
  );
};

export default ArtworkForm;
