import './styles.scss';
import PropTypes from 'prop-types';
import TypeFilter from './type';
import ValueFilter from './value';

const ArtworkFilters = ({type, setType, value, setValue, search}) => {

  return (
    <div className='artwork__filters'>
      <TypeFilter type={type} setType={setType} />
      {type !== 'none' && <ValueFilter type={type} value={value} setValue={setValue} />}
      {value !== 'none' && type !== 'none' && <button className='artwork__filters__submit' onClick={() => search()}>Rechercher</button>}
    </div>
  );
};

ArtworkFilters.propTypes = {
  type: PropTypes.string.isRequired,
  setType: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  setValue: PropTypes.func.isRequired,
  search: PropTypes.func.isRequired,
};

export default ArtworkFilters;
