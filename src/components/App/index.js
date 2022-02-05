import './styles.scss';
import { Route, Switch } from 'react-router-dom';
import Home from '../Home';
import NavBar from '../NavBar';
import ArtworkForm from '../ArtworkForm';

const App = () => {

  return(
    <main className="app">
      <NavBar />
      <Switch>
        <Route path='/' exact>
          <Home />
        </Route>
        <Route path='/artwork/create' exact>
          <ArtworkForm />
        </Route>
      </Switch>
    </main>
  );
};

export default App;
