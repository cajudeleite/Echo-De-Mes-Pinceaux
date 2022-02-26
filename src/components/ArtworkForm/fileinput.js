import './styles.scss';
import PropTypes from 'prop-types';
import { useCookies } from 'react-cookie';

const ArtworkFileInput = ({ setValue, label }) => {

  const photoArray = [];

  const labelLowerCase = label.toLowerCase();
  const cookieName = `artwork${label}`;
  const [cookies, setCookie] = useCookies([cookieName]);

  const myWidget = window.cloudinary.createUploadWidget(
    {
      cloudName: "cajudeleite",
      uploadPreset: "echopinceaux"
    },
    (error, result) => {
      if (!error && result && result.event === "success") {
        photoArray.push(result.info.public_id);
        setValue(photoArray);
        if (cookies.allowCookies) {
          setCookie(cookieName, photoArray, {
            path: "/"
          });
        };
      }
    }
  );

  return (
    <div className="artwork_form__container__form__input__file">
      <label htmlFor={labelLowerCase} className='artwork_form__container__form__input__file__label'>{label}</label>
      <input
        type="file"
        id={labelLowerCase}
        className='artwork_form__container__form__input__file__input'
        onClick={(event) => {
          event.preventDefault();
          myWidget.open();
        }}
      />
    </div>
  );
};

ArtworkFileInput.propTypes = {
  setValue: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
};

export default ArtworkFileInput;
