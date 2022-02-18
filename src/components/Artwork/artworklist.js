import './styles.scss';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { AdvancedImage } from '@cloudinary/react';
import { Cloudinary } from "@cloudinary/url-gen";
import { setItemId } from '../../actions/artwork';
import { useHistory } from 'react-router-dom';

const ArtworkList = ({id, title, photo_id}) => {

  const history = useHistory();
  const dispatch = useDispatch();
  const photoArray = photo_id.split(',');


  const cld = new Cloudinary({
    cloud: {
      cloudName: 'cajudeleite'
    }
  });

  return (
    <AdvancedImage
    key={id}
    className="artwork__list__photo"
    cldImg={cld.image(photoArray[0])}
    onClick={() => {
      dispatch(setItemId(id));
      history.push("/artwork/item");
    }} />
  )
};

ArtworkList.propTypes = {
  id: PropTypes.number.isRequired,
  photo_id: PropTypes.string.isRequired,
};

export default ArtworkList;
