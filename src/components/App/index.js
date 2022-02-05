import './styles.scss';
import { Route, Switch } from 'react-router-dom';
import NavBar from '../NavBar';
import ArtworkForm from '../ArtworkForm';

const App = () => {

  return(
    <main className="app">
      <NavBar />
      <Switch>
        <Route path='/' exact>
          <h1>Home</h1>
        </Route>
        <Route path='/artwork/create' exact>
          <ArtworkForm />
        </Route>
      </Switch>
    </main>
  );
};

export default App;
