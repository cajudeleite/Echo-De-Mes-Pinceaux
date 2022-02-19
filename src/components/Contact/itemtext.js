import './styles.scss';
import PropTypes from 'prop-types';
import { useCookies } from 'react-cookie';

const ItemText = ({ value, setValue, label }) => {

  const labelLowerCase = label.toLowerCase();
  const cookieName = `contact${label}`;
  const [cookies, setCookie] = useCookies([cookieName]);
  const cookieValue = () => {
    if (cookies[cookieName]) {
      return cookies[cookieName];
    };
    return value;
  };


  return (
    <div className="contact__container__form__item__text">
      <label htmlFor={labelLowerCase} className='contact__container__form__item__text__label'>{label}</label>
      <input
        type="text"
        id={labelLowerCase}
        className='contact__container__form__item__text__input'
        placeholder=''
        value={cookieValue()}
        onChange={(event) => {
          setValue(event.target.value);
          if (cookies.allowCookies) {
            setCookie(cookieName, event.target.value, {
              path: "/"
            });
          };
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
