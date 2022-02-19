import './styles.scss';
import Link from './link';
import PropTypes from 'prop-types';

const NavItems = ({simulateClick}) => {

  const logged = localStorage.getItem('logged') === 'true';
  const method = () => {
    if (simulateClick) {
      simulateClick();
    };
  };

  return (
    <>
      <Link name='Galerie' link='/artwork' simulateClick={method} />
      <Link name='Contact' link='/contact' simulateClick={method} />
      {!logged && <Link name='Connexion' link='/connection' simulateClick={method} />}
      {logged && <h1 className="navbar__items__link" onClick={() => {
        localStorage.removeItem('logged');
        window.location.reload();
      }}>Déconnexion</h1>}
    </>
  );
};

NavItems.propTypes = {
  simulateClick: PropTypes.func,
}

export default NavItems;
