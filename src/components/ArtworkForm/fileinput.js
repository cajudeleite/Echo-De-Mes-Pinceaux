import './styles.scss';
import PropTypes from 'prop-types';

const ArtworkFileInput = ({ setValue, label }) => {

  const labelLowerCase = label.toLowerCase();

  return (
    <div className="artwork_form__input__file">
      <label htmlFor={labelLowerCase} className='artwork_form__input__file__label'>{label}</label>
      <input
        type="file"
        id={labelLowerCase}
        className='artwork_form__input__file__input'
        onChange={(event) => {
          setValue(event.target.files[0]);
        }}
      />
    </div>
  );
};

ArtworkFileInput.propTypes = {
  setValue: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
}

export default ArtworkFileInput;
