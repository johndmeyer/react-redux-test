
import * as types from './actionTypes';

function url() {
  return 'www.url.com';
}

// A generic action for recieving data - replace with something more descriptive
export function receiveData(json) {
  return {type: types.RECIEVE_DATA, data: json.data};
}

// A generic action for requesting data - replace with something more descriptive
export function requestData() {
  return dispatch => {
    return fetch(url(), {
      method: 'GET',
      mode: 'cors',
      credentials: 'include',
      headers: {
        //'x-api-key': apiKey,
        'Accept': 'application/json'
      }
    })
    .then(response => response.json())
    .then(json => dispatch(receiveData(json)));
  };
}
