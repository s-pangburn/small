import merge from 'lodash/merge';

import {
  RECEIVE_CURRENT_USER,
  RECEIVE_ERRORS
} from '../actions/session_actions';

const _nullUser = {
  currentUser: null,
  errors: []
};

const SessionReducer = (state = _nullUser, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      return merge({}, { currentUser: action.user, errors: [] });
    case RECEIVE_ERRORS:
      return merge({}, { currentUser: null, errors: action.errors});
    default:
      return state;
  }
};

export default SessionReducer;
