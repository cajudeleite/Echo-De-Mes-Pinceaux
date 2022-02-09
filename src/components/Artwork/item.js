import './styles.scss';
import PropTypes from 'prop-types';

const ArtworkItem = ([title, year_id, technique_id, collection_id, status_id, description, photo_id]) => {

  return (
    <div className="artwork__list__item">
      <h2>{title}</h2>
      <p>{year_id}</p>
      <p>{technique_id}</p>
      <p>{collection_id}</p>
      <p>{status_id}</p>
      <p>{description}</p>
    </div>
  );
};

ArtworkItem.propTypes = {
  title: PropTypes.string.isRequired,
  year_id: PropTypes.string.isRequired,
  technique_id: PropTypes.string.isRequired,
  collection_id: PropTypes.string.isRequired,
  status_id: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  photo_id: PropTypes.string.isRequired,
};

export default ArtworkItem;
