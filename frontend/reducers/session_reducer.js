import merge from 'lodash/merge';

import {
  RECEIVE_CURRENT_USER,
  RECEIVE_ERRORS,
  RESET_ERRORS
} from '../actions/session_actions';

const _nullUser = {
  currentUser: null
};

const SessionReducer = (state = _nullUser, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      return merge({}, { currentUser: action.user, errors: [] });
    default:
      return state;
  }
};

export default SessionReducer;
