import './styles.scss';
import { Route, Switch } from 'react-router-dom';
import NavBar from '../NavBar';

const App = () => {

  return(
    <main className="app">
      <NavBar />
      <h1>Composant : App</h1>
    </main>
  );
};

export default App;
