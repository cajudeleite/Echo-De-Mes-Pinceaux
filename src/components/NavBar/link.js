import './styles.scss';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { useCookies } from 'react-cookie';

const Link = ({name, link, simulateClick}) => {

  const [cookies, setCookie, removeCookie] = useCookies(['inputFocus']);

  const method = () => {
    if (simulateClick) {
      simulateClick();
    };
    if (name === 'Contact' && cookies.allowCookies) {
      setCookie('inputFocus', 'true', {
        path: "/"
      });
    };
    if (cookies.artworkTitre) removeCookie('artworkTitre');
    if (cookies.artworkAnnée) removeCookie('artworkAnnée');
    if (cookies.artworkTechniques) removeCookie('artworkTechniques');
    if (cookies.artworkCollections) removeCookie('artworkCollections');
    if (cookies.artworkStatuts) removeCookie('artworkStatuts');
    if (cookies.artworkPhoto) removeCookie('artworkPhoto');
    if (cookies.artworkDescrition) removeCookie('artworkDescrition');
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
