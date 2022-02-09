import { combineReducers } from 'redux';

import yearsReducer from './years';
import techniquesReducer from './techniques';
import collectionsReducer from './collections';
import statusesReducer from './statuses';
import artworksReducer from './artworks';

const rootReducer = combineReducers({
  artworks: artworksReducer,
  years: yearsReducer,
  techniques: techniquesReducer,
  collections: collectionsReducer,
  statuses: statusesReducer,
});

export default rootReducer;
