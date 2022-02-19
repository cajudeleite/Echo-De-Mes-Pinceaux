import './styles.scss';
import PropTypes from 'prop-types';
import { useCookies } from 'react-cookie';
import ArtworkDropdownItem from './dropdownitems';

const ArtworkDropdownInput = ({ value, setValue, label, list, modalValue, setModalValue, setModalLabel }) => {

  const labelLowerCase = label.toLowerCase();
  const labelSingulier = () => {
    if (labelLowerCase === 'techniques') {
      return 'technique'
    } else if (labelLowerCase === 'collections') {
      return 'collection'
    }
    return labelLowerCase;
  };
  const nouveauFeminin = (labelLowerCase === 'status') ? 'nouveau' : 'nouvelle';
  const addNew = `Ajouter ${nouveauFeminin} ${labelSingulier()}`;
  const labelChiant = (label === 'Année') ? 'Annèe' : label;
  const cookieName = `artwork${label}`;
  const [cookies, setCookie] = useCookies([cookieName]);
  const cookieValue = () => {
    if (cookies[cookieName]) {
      return cookies[cookieName];
    };
    return value;
  };

  return (
    <div className="artwork_form__container__form__input__dropdown">
      <label htmlFor={labelLowerCase} className='artwork_form__container__form__input__dropdown__label'>{labelChiant}</label>
      <select
      name="select"
      key={labelLowerCase}
      className='artwork_form__container__form__input__dropdown__select'
      value={cookieValue()}
      onChange={(event) => {
        if (event.target.value === 'modal') {
          setCookie('cookieName', event.target.value, {
            path: "/"
          });
          setModalLabel(labelSingulier());
          setModalValue(!modalValue);
        } else {
          setValue(event.target.value);
          if (cookies.allowCookies) {
            setCookie(cookieName, event.target.value, {
              path: "/"
            });
          };
        }
      }}>
        <ArtworkDropdownItem list={list}/>
        <option key='modal' value='modal'>{addNew}</option>
      </select>
    </div>
  );
};

ArtworkDropdownInput.propTypes = {
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]).isRequired,
  setValue: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  list: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  })),
  modalValue: PropTypes.bool.isRequired,
  setModalValue: PropTypes.func.isRequired,
  setModalLabel: PropTypes.func.isRequired,
}

export default ArtworkDropdownInput;
