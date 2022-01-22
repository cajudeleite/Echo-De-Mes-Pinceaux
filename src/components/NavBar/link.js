import './styles.scss';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const Link = ({name, link}) => {

  return (
    <div className="navbar__items__link">
      <NavLink to={link} exact>{name}</NavLink>
    </div>
  );
};

Link.propTypes = {
  name: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
}

export default Link;
