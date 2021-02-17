import searchReducer from './searchReducer';
import { combineReducers } from 'redux';

const allReducers = combineReducers({
  searches: searchReducer
});

export default allReducers;
