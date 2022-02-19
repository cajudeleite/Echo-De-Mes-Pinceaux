import './styles.scss';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const Link = ({name, link, simulateClick}) => {

  const method = () => {
    if (simulateClick) {
      simulateClick();
    };
  };

  return (
    <div className="navbar__items__link">
      <NavLink to={link} exact onClick={() => method()}>{name}</NavLink>
    </div>
  );
};

Link.propTypes = {
  name: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  simulateClick: PropTypes.func,
}

export default Link;
