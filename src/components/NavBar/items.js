import './styles.scss';
import Link from './link';

const NavItems = () => {

  const logged = localStorage.getItem('logged') === 'true';

  return (
  <>
    <Link name='Galerie' link='/artwork' />
    <Link name='Contact' link='/contact' />
    {!logged && <Link name='Connexion' link='/connection' />}
    {logged && <Link name='Déconnexion' link='deconnect' />}
  </>
);
};

export default NavItems;
