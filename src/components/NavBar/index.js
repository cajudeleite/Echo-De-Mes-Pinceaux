import './styles.scss';
import NavItems from './items';
import Burger from './burger';
import { NavLink } from 'react-router-dom';

const NavBar = () => {

  return (
    <section className="navbar">
      <div className="navbar__logo">
        <NavLink to='/' exact>ECHO DE MES PINCEAUX</NavLink>
      </div>
      <div className="navbar__items">
        <NavItems />
      </div>
      <Burger />
    </section>
  );
};

export default NavBar;
