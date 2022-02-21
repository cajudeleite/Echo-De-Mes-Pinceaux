import './styles.scss';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { getYearsFromApi } from '../../actions/year';
import { getTechniquesFromApi } from '../../actions/technique';
import { getCollectionsFromApi } from '../../actions/collection';
import { getStatusesFromApi } from '../../actions/status';
import ArtworkDropdownItem from '../ArtworkForm/dropdownitems';
import { useCookies } from 'react-cookie';

const ValueFilter = ({ type, value, setValue }) => {

  const dispatch = useDispatch();
  const yearsList = useSelector((state) => state.year.list);
  const techniquesList = useSelector((state) => state.technique.list);
  const collectionsList = useSelector((state) => state.collection.list);
  const statusesList = useSelector((state) => state.status.list);
  const [list, setList] = useState([]);
  const [cookies, setCookie, removeCookie] = useCookies(['getFilterValues']);

  useEffect(() => {
    if (cookies.getFilterValues) {
      removeCookie('getFilterValues');
      dispatch(getYearsFromApi());
      dispatch(getTechniquesFromApi());
      dispatch(getCollectionsFromApi());
      dispatch(getStatusesFromApi());
    };
    if (type === 'year_id') {
      setList(yearsList);
    } else if (type === 'technique_id') {
      setList(techniquesList);
    } else if (type === 'collection_id') {
      setList(collectionsList);
    } else if (type === 'status_id') {
      setList(statusesList);
    };
  });

  return (
    <div className='artwork__filters__value'>
      <label htmlFor='value' className='artwork__filters__value__label'>Sèlectionner par :</label>
      <select
        name="select"
        key='value'
        className='artwork__filters__value__select'
        value={value}
        onChange={(event) => {
          setValue(event.target.value);
        }}>
        <option key='none' value='none'></option>
        <ArtworkDropdownItem list={list} />
      </select>
    </div>
  );
};

ValueFilter.propTypes = {
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  setValue: PropTypes.func.isRequired,
};

export default ValueFilter;
