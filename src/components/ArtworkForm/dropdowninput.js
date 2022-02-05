import './styles.scss';
import PropTypes from 'prop-types';
import ArtworkDropdownItem from './dropdownitems';

const ArtworkDropdownInput = ({ setValue, label, list }) => {

  const labelLowerCase = label.toLowerCase();

  return (
    <div className="artwork_form__container__form__input__dropdown">
      <label htmlFor={labelLowerCase} className='artwork_form__container__form__input__dropdown__label'>{label}</label>
      <select
      name="select"
      id={labelLowerCase}
      className='artwork_form__container__form__input__dropdown__select'
      onChange={(event) => {
        setValue(event.target.value);
      }}>
        <ArtworkDropdownItem list={list}/>
      </select>
    </div>
  );
};

ArtworkDropdownInput.propTypes = {
  setValue: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  list: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  }))
}

export default ArtworkDropdownInput;
