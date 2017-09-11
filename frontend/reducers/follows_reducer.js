import merge from 'lodash/merge';

import {
  RECEIVE_ALL_FOLLOWS,
  RECEIVE_FOLLOW,
  REMOVE_FOLLOW
} from '../actions/follow_actions';

const defaultState = {};

const FollowsReducer = (state = defaultState, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_ALL_FOLLOWS:
      return merge({}, action.follows);
    case RECEIVE_FOLLOW:
      return merge({}, state, { [action.follow.id]: action.follow});
    case REMOVE_FOLLOW:
      let newState = merge({}, state);
      delete newState[action.follow.id];
      return newState;
    default:
      return state;
  }
};

export default FollowsReducer;
