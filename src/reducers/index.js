import { combineReducers } from 'redux';

import yearsReducer from './years';
import techniquesReducer from './techniques';
import collectionsReducer from './collections';
import statusesReducer from './statuses';
import artworksReducer from './artworks';
import contactReducer from './contact';
import commentReducer from './comments';
import alertReducer from './alert';

const rootReducer = combineReducers({
  artwork: artworksReducer,
  year: yearsReducer,
  technique: techniquesReducer,
  collection: collectionsReducer,
  status: statusesReducer,
  contact: contactReducer,
  comment: commentReducer,
  alert: alertReducer,
});

export default rootReducer;
