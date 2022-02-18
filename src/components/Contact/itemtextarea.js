import './styles.scss';
import PropTypes from 'prop-types';
import { useCookies } from 'react-cookie';

const ItemTextarea = ({ value, setValue, label }) => {

  const labelLowerCase = label.toLowerCase();
  const cookieName = `contact${label}`;
  const [cookies, setCookie] = useCookies([cookieName]);
  const cookieValue = () => {
    if (cookies[cookieName]) {
      return cookies[cookieName];
    } else {
      return value;
    };
  };

  return (
    <div className="contact__container__form__item__textarea">
      <label htmlFor={labelLowerCase} className='contact__container__form__item__textarea__label'>{label}</label>
      <textarea
        id={labelLowerCase}
        className='contact__container__form__item__textarea__input'
        placeholder=''
        value={cookieValue()}
        onChange={(event) => {
          setValue(event.target.value);
          setCookie(cookieName, event.target.value, {
            path: "/"
          });
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
