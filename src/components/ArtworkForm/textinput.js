import './styles.scss';
import PropTypes from 'prop-types';

const ArtworkTextInput = ({ value, setValue, label }) => {

  const labelLowerCase = label.toLowerCase();

  return (
    <div className="artwork_form__container__form__input__text">
      <label htmlFor={labelLowerCase} className='artwork_form__container__form__input__text__label'>{label}</label>
      <input
        type="text"
        id={labelLowerCase}
        className='artwork_form__container__form__input__text__input'
        placeholder=''
        value={value}
        onChange={(event) => {
          setValue(event.target.value);
        }}
      />
    </div>
  );
};

ArtworkTextInput.propTypes = {
  value: PropTypes.string.isRequired,
  setValue: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
}

export default ArtworkTextInput;
