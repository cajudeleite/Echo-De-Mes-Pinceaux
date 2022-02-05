import './styles.scss';
import PropTypes from 'prop-types';

const ItemTextarea = ({ value, setValue, label }) => {

  const labelLowerCase = label.toLowerCase();

  return (
    <div className="contact__container__form__item__textarea">
      <label htmlFor={labelLowerCase} className='contact__container__form__item__textarea__label'>{label}</label>
      <textarea
        id={labelLowerCase}
        className='contact__container__form__item__textarea__input'
        placeholder=''
        value={value}
        onChange={(event) => {
          setValue(event.target.value);
        }}
      />
    </div>
  );
};

ItemTextarea.propTypes = {
  value: PropTypes.string.isRequired,
  setValue: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
}

export default ItemTextarea;
