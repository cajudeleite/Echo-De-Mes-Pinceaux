import axios from 'axios';
import { useHistory } from 'react-router-dom';

import { simplifyList } from '../utils';

import { GET_YEARS_FROM_API, setYears } from '../actions/year';
import { GET_TECHNIQUES_FROM_API, setTechniques } from '../actions/technique';
import { GET_COLLECTIONS_FROM_API, setCollections } from '../actions/collection';
import { GET_STATUSES_FROM_API, setStatus } from '../actions/status';
import { POST_ARTWORK } from '../actions/artwork';
import { POST_CONTACT } from '../actions/contact';
import { AUTHENTICATE } from '../actions/authenticate';

export const dataMiddleware = (store) => (next) => (action) => {

  const api = axios.create({
    baseURL: 'http://localhost:3000/',
  });

  switch (action.type) {
    case GET_YEARS_FROM_API: {
      api
        .get('/years')
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
      api
        .post('/artworks', {
          headers: {
            'Content-Type': 'multipart/form-data',
            'Authorization' : token
          },
          user_id: 1,
          title: action.title,
          year_id: action.year,
          technique_id: action.technique,
          collection_id: action.collection,
          status_id: action.status,
          photo: action.photo,
          description: action.description,
        })
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
      api
        .post('/contacts', {
          headers: {
            'Content-Type': 'multipart/form-data'
          },
          last_name: action.last_name,
          first_name: action.first_name,
          e_mail: action.e_mail,
          title: action.title,
          message: action.message,
          artwork_id: action.artwork_id,
        })
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
      api
        .post('/authenticate', {
          headers: {
            'Content-Type': 'application/json'
          },
          username: action.username,
          password: action.password,
        })
        .then(
          (response) => {
            localStorage.setItem('token', response.data.auth_token);
            localStorage.setItem('logged', true);
          },
        )
        .catch(
          (error) => {
            console.log(error);
            console.log('nop');
          },
        );
      next(action);
      break;
    }
    default:
      next(action);
  }
};
