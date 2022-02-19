import './styles.scss';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { postYear } from '../../actions/year';
import { postTechnique } from '../../actions/technique';
import { postCollection } from '../../actions/collection';
import { postStatus } from '../../actions/status';
import { useCookies } from 'react-cookie';

const ModalForm = ({ label, setAlert }) => {

  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState('');
  const labelCapitalize = label.charAt(0).toUpperCase() + label.slice(1);
  const nouveauFeminin = (label === 'status') ? 'nouveau' : 'nouvelle';
  const title = `Ajouter ${nouveauFeminin} ${label}`;
  const labelChiant = (labelCapitalize === 'Année') ? 'Annèe' : labelCapitalize;
  const [cookies, setCookie, removeCookie] = useCookies(['inputFocus']);

  useEffect(() => {
    if (cookies.inputFocus) {
      removeCookie('inputFocus');
      document.querySelector(`#${label}`).focus();
    };
  }, []);

  return (
    <div className="artwork_form__container__form__modal">
      <h2 className="artwork_form__container__form__modal__title">{title}</h2>
      <form action="" className="artwork_form__container__form__modal__form" onSubmit={(event) => {
        event.preventDefault();
        if (label === 'année') {
          dispatch(postYear(inputValue));
        } else if (label === 'technique') {
          dispatch(postTechnique(inputValue));
        } else if (label === 'collection') {
          dispatch(postCollection(inputValue));
        } else if (label === 'status') {
          dispatch(postStatus(inputValue));
        }
        setAlert(true);
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
  setAlert: PropTypes.func.isRequired,
}

export default ModalForm;
