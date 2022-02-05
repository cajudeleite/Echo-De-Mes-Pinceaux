import './styles.scss';
import PropTypes from 'prop-types';

const ArtworkTextAreaInput = ({ value, setValue, label }) => {

  const labelLowerCase = label.toLowerCase();

  return (
    <div className="artwork_form__container__form__input__textarea">
      <label htmlFor={labelLowerCase} className='artwork_form__container__form__input__textarea__label'>{label}</label>
      <textarea
        id={labelLowerCase}
        className='artwork_form__container__form__input__textarea__input'
        placeholder=''
        value={value}
        onChange={(event) => {
          setValue(event.target.value);
        }}
      />
    </div>
  );
};

ArtworkTextAreaInput.propTypes = {
  value: PropTypes.string.isRequired,
  setValue: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
}

export default ArtworkTextAreaInput;
