import './styles.scss';
import PropTypes from 'prop-types';
import { useCookies } from 'react-cookie';
import { AdvancedImage } from '@cloudinary/react';
import { Cloudinary } from "@cloudinary/url-gen";
import { fill } from "@cloudinary/url-gen/actions/resize";

const PhotoPreview = ({ photo_id }) => {

  const cld = new Cloudinary({
    cloud: {
      cloudName: 'cajudeleite'
    }
  });
  const [cookies, setCookie] = useCookies(['artworkPhoto']);
  const cookieValue = () => {
    if (cookies.artworkPhoto) {
      return cookies.artworkPhoto;
    };
    return photo_id;
  };

  return (
    <div className="artwork_form__container__form__photo_preview">
      {cookieValue().map((item) => <AdvancedImage key={item} cldImg={cld.image(item).resize(fill().width(250).height(250))} />,)}
    </div>
  );
};

PhotoPreview.propTypes = {
  photo_id: PropTypes.array.isRequired,
}

export default PhotoPreview;
