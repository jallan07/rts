import searchReducer from './searchReducer';
import searchResultsReducer from './searchResults';
import { combineReducers } from 'redux';

const allReducers = combineReducers({
  recentSearches: searchReducer,
  searchResults: searchResultsReducer
});

export default allReducers;
