import axios from 'axios';

import { simplifyList, simplifyContact } from '../utils';

import { GET_YEARS_FROM_API, setYears, POST_YEAR } from '../actions/year';
import { GET_TECHNIQUES_FROM_API, setTechniques, POST_TECHNIQUE } from '../actions/technique';
import { GET_COLLECTIONS_FROM_API, setCollections, POST_COLLECTION } from '../actions/collection';
import { GET_STATUSES_FROM_API, setStatus, POST_STATUS } from '../actions/status';
import { POST_ARTWORK } from '../actions/artwork';
import { POST_CONTACT, GET_CONTACT, setContact } from '../actions/contact';
import { AUTHENTICATE } from '../actions/authenticate';

export const dataMiddleware = (store) => (next) => (action) => {

  const api = axios.create({
    baseURL: 'http://localhost:3000/',
  });

  switch (action.type) {
    case GET_YEARS_FROM_API: {
      api
        .get('/years', {
        })
        .then(
          (response) => {
            const yearsList = response.data;
            const simplifiedYears = simplifyList(yearsList);
            store.dispatch(setYears(simplifiedYears));
          },
        )
        .catch(
          (error) => {
            console.log(error);
          },
        );
      next(action);
      break;
    }
    case GET_TECHNIQUES_FROM_API: {
      api
        .get('/techniques')
        .then(
          (response) => {
            const techniquesList = response.data;
            const simplifiedTechniques = simplifyList(techniquesList);
            store.dispatch(setTechniques(simplifiedTechniques));
          },
        )
        .catch(
          (error) => {
            console.log(error);
          },
        );
      next(action);
      break;
    }
    case GET_COLLECTIONS_FROM_API: {
      api
        .get('/collections')
        .then(
          (response) => {
            const collectionsList = response.data;
            const simplifiedCollections = simplifyList(collectionsList);
            store.dispatch(setCollections(simplifiedCollections));
          },
        )
        .catch(
          (error) => {
            console.log(error);
          },
        );
      next(action);
      break;
    }
    case GET_STATUSES_FROM_API: {
      api
        .get('/statuses')
        .then(
          (response) => {
            const statusesList = response.data;
            const simplifiedStatuses = simplifyList(statusesList);
            store.dispatch(setStatus(simplifiedStatuses));
          },
        )
        .catch(
          (error) => {
            console.log(error);
          },
        );
      next(action);
      break;
    }
    case POST_ARTWORK: {
      const token = localStorage.getItem('token');
      const data = {
        title: action.title,
        year_id: action.year,
        technique_id: action.technique,
        collection_id: action.collection,
        status_id: action.status,
        description: action.description,
        photo_id: action.photo,
      };
      const options = {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': token,
        }
      };
      api
        .post('/artworks', data, options)
        .then(
          (response) => {
            console.log(response)
          },
        )
        .catch(
          (error) => {
            console.log(error);
          },
        );
      next(action);
      break;
    }
    case POST_CONTACT: {
      const data = {
        last_name: action.last_name,
        first_name: action.first_name,
        e_mail: action.e_mail,
        title: action.title,
        message: action.message,
        artwork_id: action.artwork_id,
      };
      const options = {
        headers: {
          'Content-Type': 'application/json',
        }
      };
      api
        .post('/contacts', data, options)
        .then(
          (response) => {
            console.log(response)
          },
        )
        .catch(
          (error) => {
            console.log(error);
          },
        );
      next(action);
      break;
    }
    case AUTHENTICATE: {
      const data = {
        username: action.username,
        password: action.password,
      };
      const options = {
        headers: {
          'Content-Type': 'application/json',
        }
      };
      api
        .post('/authenticate', data, options)
        .then(
          (response) => {
            localStorage.setItem('token', response.data.auth_token);
            localStorage.setItem('logged', true);
          },
        )
        .catch(
          (error) => {
            console.log(error);
          },
        );
      next(action);
      break;
    }
    case POST_YEAR: {
      const token = localStorage.getItem('token');
      const data = {
        name: action.name,
      };
      const options = {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': token,
        }
      };
      api
        .post('/years', data, options)
        .then(
          (response) => {
            console.log(response)
          },
        )
        .catch(
          (error) => {
            console.log(error);
          },
        );
      next(action);
      break;
    }
    case POST_TECHNIQUE: {
      const token = localStorage.getItem('token');
      const data = {
        name: action.name,
      };
      const options = {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': token,
        }
      };
      api
        .post('/techniques', data, options)
        .then(
          (response) => {
            console.log(response)
          },
        )
        .catch(
          (error) => {
            console.log(error);
          },
        );
      next(action);
      break;
    }
    case POST_COLLECTION: {
      const token = localStorage.getItem('token');
      const data = {
        name: action.name,
      };
      const options = {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': token,
        }
      };
      api
        .post('/collections', data, options)
        .then(
          (response) => {
            console.log(response)
          },
        )
        .catch(
          (error) => {
            console.log(error);
            console.log(action);
          },
        );
      next(action);
      break;
    }
    case POST_STATUS: {
      const token = localStorage.getItem('token');
      const data = {
        name: action.name,
      };
      const options = {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': token,
        }
      };
      api
        .post('/statuses', data, options)
        .then(
          (response) => {
            console.log(response)
          },
        )
        .catch(
          (error) => {
            console.log(error);
          },
        );
      next(action);
      break;
    }
    case GET_CONTACT: {
      const token = localStorage.getItem('token');
      const options = {
        headers: {
          'Authorization': token,
        }
      };
      api
        .get('/contacts', options)
        .then(
          (response) => {
            const contactList = response.data;
            const simplifiedContact = simplifyContact(contactList);
            store.dispatch(setContact(simplifiedContact));
          },
        )
        .catch(
          (error) => {
            console.log(error);
          },
        );
      next(action);
      break;
    }
    default:
      next(action);
  }
};
