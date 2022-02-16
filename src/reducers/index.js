import { combineReducers } from 'redux';

import yearsReducer from './years';
import techniquesReducer from './techniques';
import collectionsReducer from './collections';
import statusesReducer from './statuses';
import artworksReducer from './artworks';
import contactReducer from './contact';

const rootReducer = combineReducers({
  artwork: artworksReducer,
  year: yearsReducer,
  technique: techniquesReducer,
  collection: collectionsReducer,
  status: statusesReducer,
  contact: contactReducer,
});

export default rootReducer;
