import { combineReducers } from 'redux';

import yearsReducer from './years';
import techniquesReducer from './techniques';
import collectionsReducer from './collections';
import statusesReducer from './statuses';

const rootReducer = combineReducers({
  years: yearsReducer,
  techniques: techniquesReducer,
  collections: collectionsReducer,
  statuses: statusesReducer,
});

export default rootReducer;
