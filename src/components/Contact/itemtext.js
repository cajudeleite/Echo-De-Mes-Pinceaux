import './styles.scss';
import PropTypes from 'prop-types';

const ItemText = ({ value, setValue, label }) => {

  const labelLowerCase = label.toLowerCase();

  return (
    <div className="contact__container__form__item__text">
      <label htmlFor={labelLowerCase} className='contact__container__form__item__text__label'>{label}</label>
      <input
        type="text"
        id={labelLowerCase}
        className='contact__container__form__item__text__input'
        placeholder=''
        value={value}
        onChange={(event) => {
          setValue(event.target.value);
        }}
      />
    </div>
  );
};

ItemText.propTypes = {
  value: PropTypes.string.isRequired,
  setValue: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
}

export default ItemText;
