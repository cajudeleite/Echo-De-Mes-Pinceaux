import './styles.scss';
import PropTypes from 'prop-types';

const ItemText = ({ value, setValue, label, type }) => {

  const labelLowerCase = label.toLowerCase().replace(' ', '').replace("'", '');


  return (
    <div className="connection__container__form__item__text">
      <label htmlFor={labelLowerCase} className='connection__container__form__item__text__label'>{label}</label>
      <input
        type={type}
        id={labelLowerCase}
        className='connection__container__form__item__text__input'
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
  type: PropTypes.string.isRequired,
}

export default ItemText;
