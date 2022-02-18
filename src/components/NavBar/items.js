import './styles.scss';
import Link from './link';

const NavItems = () => {

  const logged = localStorage.getItem('logged') === 'true';

  return (
  <>
    <Link name='Galerie' link='/artwork' />
    <Link name='Contact' link='/contact' />
    {!logged && <Link name='Connexion' link='/connection' />}
    {logged && <h1 className="navbar__items__link" onClick={() => {
      localStorage.removeItem('logged');
      window.location.reload();
    }}>Déconnexion</h1>}
  </>
);
};

export default NavItems;
