import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from 'src/store';

import App from 'src/components/App';

const rootReactElement = (
  <Provider store={store} >
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

const target = document.getElementById('root');

render(rootReactElement, target);
