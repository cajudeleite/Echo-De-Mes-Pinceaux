import './styles.scss';
import PropTypes from 'prop-types';
import { useCookies } from 'react-cookie';

const TypeFilter = ({type, setType}) => {

  const [cookies, setCookie] = useCookies(['getFilterValues']);

  return (
    <div className='artwork__filters__type'>
      <label htmlFor='type'className='artwork__filters__type__label'>Trier par :</label>
      <select
        name="select"
        key='type'
        className='artwork__filters__type__select'
        value={type}
        onChange={(event) => {
          setType(event.target.value);
          if (!cookies.getFilterValues) {
            setCookie('getFilterValues', 'true', {
              path: "/"
            });
          };
        }}>
        <option key='none' value='none'></option>
        <option key='year' value='year_id'>Année</option>
        <option key='technique' value='technique_id'>Technique</option>
        <option key='collection' value='collection_id'>Collection</option>
        <option key='status' value='status_id'>Statut</option>
      </select>
    </div>
  );
};

TypeFilter.propTypes = {
  type: PropTypes.string.isRequired,
  setType: PropTypes.func.isRequired,
};

export default TypeFilter;
