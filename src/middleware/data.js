import axios from 'axios';

import { simplifyList } from '../utils';

import { GET_YEARS_FROM_API, setYears } from '../actions/year';
import { GET_TECHNIQUES_FROM_API, setTechniques } from '../actions/technique';
import { GET_COLLECTIONS_FROM_API, setCollections } from '../actions/collection';
import { GET_STATUSES_FROM_API, setStatus } from '../actions/status';
import { POST_ARTWORK } from '../actions/artwork';
import { useSelector } from 'react-redux';

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
      api
        .post('/artworks', {
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
            console.log(response);
            console.log('title:', action.title);
            console.log('year:', action.year);
            console.log('technique:', action.technique);
            console.log('collection:', action.collection);
            console.log('status:', action.status);
            console.log('photo:', action.photo);
            console.log('description:', action.description);
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
