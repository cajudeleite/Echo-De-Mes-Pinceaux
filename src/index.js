import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { CookiesProvider } from "react-cookie";
import store from 'src/store';

import App from 'src/components/App';

const rootReactElement = (
  <Provider store={store} >
    <CookiesProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </CookiesProvider>
  </Provider>
);

const target = document.getElementById('root');

render(rootReactElement, target);
