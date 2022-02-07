import './styles.scss';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getYearsFromApi, postYear } from '../../actions/year';
import { getTechniquesFromApi, postTechnique } from '../../actions/technique';
import { getCollectionsFromApi, postCollection } from '../../actions/collection';
import { getStatusesFromApi, postStatus } from '../../actions/status';

const ModalForm = ({ label, modal, setModal }) => {

  const dispatch = useDispatch();

  const [inputValue, setInputValue] = useState('');

  const labelCapitalize = label.charAt(0).toUpperCase() + label.slice(1);

  const nouveauFeminin = (label === 'status') ? 'nouveau' : 'nouvelle';

  const title = `Ajouter ${nouveauFeminin} ${label}`;

  const labelChiant = (labelCapitalize === 'Année') ? 'Annèe' : labelCapitalize;

  return (
    <div className="artwork_form__container__form__modal">
      <h2 className="artwork_form__container__form__modal__title">{title}</h2>
      <form action="" className="artwork_form__container__form__modal__form" onSubmit={(event) => {
        event.preventDefault();
        console.log(inputValue);
        if (label === 'année') {
          dispatch(postYear(inputValue));
        } else if (label === 'technique') {
          dispatch(postTechnique(inputValue));
        } else if (label === 'collection') {
          dispatch(postCollection(inputValue));
        } else if (label === 'status') {
          dispatch(postStatus(inputValue));
        }
        window.location.reload();
      }}>
        <label htmlFor={label} className='artwork_form__container__form__modal__form__label'>{labelChiant}</label>
        <input
          type="text"
          id={label}
          value={inputValue}
          className='artwork_form__container__form__modal__form__input'
          onChange={(event) => {
            setInputValue(event.target.value);
          }}
        />
        <input type="submit" className='artwork_form__container__form__modal__form__submit' />
      </form>
    </div>
  );
};

ModalForm.propTypes = {
  label: PropTypes.string.isRequired,
  modal: PropTypes.bool.isRequired,
  setModal: PropTypes.func.isRequired,
}

export default ModalForm;
