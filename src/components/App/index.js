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
import { useState, useLayoutEffect } from 'react';

const App = () => {

  const logged = localStorage.getItem('logged') === 'true';
  const [cookies, setCookie] = useCookies(['allowCookies']);
  const [cookieCard, setCookieCard] = useState(true);

  useLayoutEffect(() => {
    if (cookies.allowCookies) {
      setCookieCard(false);
    }
  });

  return(
    <main className="app">
      {cookieCard && <CookieCard methodAccept={setCookie} methodDecline={setCookieCard} />}
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
      </Switch>
    </main>
  );
};

export default App;
