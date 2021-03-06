import merge from 'lodash/merge';

import {
  RECEIVE_ERRORS,
  RESET_ERRORS
} from '../actions/error_actions';

const ErrorsReducer = (state = [], action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_ERRORS:
      return action.errors;
    case RESET_ERRORS:
      return [];
    default:
      return state;
  }
};

export default ErrorsReducer;
