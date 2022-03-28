import './styles.scss';
import { Route, Switch } from 'react-router-dom';
import Home from '../Home';
import NavBar from '../NavBar';
import Contact from '../Contact';
import Connection from '../Connection';
import ArtworkForm from '../ArtworkForm';
import ArtworkPage from '../Artwork';
import ArtworkItem from '../Artwork/item';
import { useCookies } from "react-cookie";
import CookieCard from '../Cookies';
import { useState, useLayoutEffect, useEffect } from 'react';

const App = () => {

  const logged = localStorage.getItem('logged') === 'true';
  const [cookies, setCookie] = useCookies(['allowCookies']);
  const [cookieCard, setCookieCard] = useState(true);

  useLayoutEffect(() => {
    if (cookies.allowCookies) {
      setCookieCard(false);
    }
  });

  useEffect(() => {
    if (cookieCard) {
      document.body.classList.add('stop-scrolling');
    } else {
      document.body.classList.remove('stop-scrolling');
    };
  });

  return(
    <main className="app">
      {/* {cookieCard && <CookieCard methodAccept={setCookie} methodDecline={setCookieCard} />}
      <NavBar />
      <Switch>
        <Route path='/' exact>
          <Home />
        </Route>
        <Route path='/contact' exact>
          <Contact />
        </Route>
        <Route path='/connection' exact>
          <Connection />
        </Route>
        <Route path='/artwork' exact>
          <ArtworkPage />
        </Route>
        <Route path='/artwork/item' exact>
          <ArtworkItem />
        </Route>
        {logged && <Route path='/artwork/create' exact>
          <ArtworkForm />
        </Route>}
      </Switch> */}
      <img src="https://i1.wp.com/www.mpt-ea.org/wp-content/uploads/2020/01/site-en-construction.jpg?fit=595%2C552&ssl=1" alt="" />
    </main>
  );
};

export default App;
