import {combineReducers} from 'redux';
import data from './dataReducer'; // A generic reducer for general data format is <typeOfData>Reducer

const rootReducer = combineReducers({
  data
});

export default rootReducer;
