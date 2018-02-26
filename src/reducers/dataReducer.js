import initialState from './initialState';
import {REQUEST_DATA, RECIEVE_DATA} from '../actions/actionTypes';

export default function stuff(state = initialState.data, action) {
  let newState;
  switch (action.type) {
    case REQUEST_DATA:
      console.log('REQUEST_DATA Action')
      return action;
    case RECIEVE_DATA:
      newState = action.data;
      console.log('RECIEVE_DATA Action')
      return newState;
    default:
      return state;
  }
}
