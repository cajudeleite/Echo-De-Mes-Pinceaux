import './styles.scss';
import { Route, Switch } from 'react-router-dom';
import Home from '../Home';
import NavBar from '../NavBar';
import Contact from '../Contact';
import Connection from '../Connection';
import ArtworkForm from '../ArtworkForm';

const App = () => {

  const logged = localStorage.getItem('logged') === 'true';

  return(
    <main className="app">
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
        <Route path='/artwork/create' exact>
          <ArtworkForm />
        </Route>
      </Switch>
    </main>
  );
};

export default App;
