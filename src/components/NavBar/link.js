import './styles.scss';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';

const Link = ({name, link}) => {

  const [lien, setLien] = useState(link);

  const method = () => {
    if (link === 'deconnect') {
      localStorage.removeItem('logged');
      setLien('/');
    }
  };

  return (
    <div className="navbar__items__link">
      <NavLink to={lien} exact onClick={() => method()}>{name}</NavLink>
    </div>
  );
};

Link.propTypes = {
  name: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
}

export default Link;
