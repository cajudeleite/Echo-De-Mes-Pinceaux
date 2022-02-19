import './styles.scss';
import PropTypes from 'prop-types';

const ArtworkDropdownItem = ({ list }) => {

  return (
    list.map((item) => (
      <option key={item.name} value={item.id}>{item.name}</option>
    ),)
  );
};

ArtworkDropdownItem.propTypes = {
  list: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  }))
}

export default ArtworkDropdownItem;
