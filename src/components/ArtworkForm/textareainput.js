import './styles.scss';
import PropTypes from 'prop-types';
import { useCookies } from 'react-cookie';

const ArtworkTextAreaInput = ({ value, setValue, label }) => {

  const labelLowerCase = label.toLowerCase();
  const cookieName = `artwork${label}`;
  const [cookies, setCookie] = useCookies([cookieName]);
  const cookieValue = () => {
    if (cookies[cookieName]) {
      return cookies[cookieName];
    };
    return value;
  };

  return (
    <div className="artwork_form__container__form__input__textarea">
      <label htmlFor={labelLowerCase} className='artwork_form__container__form__input__textarea__label'>{label}</label>
      <textarea
        key={labelLowerCase}
        className='artwork_form__container__form__input__textarea__input'
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

ArtworkTextAreaInput.propTypes = {
  value: PropTypes.string.isRequired,
  setValue: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
}

export default ArtworkTextAreaInput;
