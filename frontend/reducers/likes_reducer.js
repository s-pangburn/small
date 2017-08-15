import merge from 'lodash/merge';

import {
  RECEIVE_LIKES,
  RECEIVE_LIKE,
  REMOVE_LIKE
} from '../actions/like_actions';

const defaultState = {};

const LikesReducer = (state = defaultState, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_LIKES:
      return merge({}, action.likes);
    case RECEIVE_LIKE:
      return merge({}, state, { [action.like.id]: action.like});
    case REMOVE_LIKE:
      let newState = merge({}, state);
      delete newState[action.like.id];
      return newState;
    default:
      return state;
  }
};

export default LikesReducer;
