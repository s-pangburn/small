import merge from 'lodash/merge';

import {
  RECEIVE_STORIES,
  RECEIVE_STORY,
  REMOVE_STORY,
  RECEIVE_ERRORS,
  RESET_ERRORS
} from '../actions/story_actions';

const defaultState = {};

const StoriesReducer = (state = defaultState, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_STORIES:
      return merge({}, action.stories);
    case RECEIVE_STORY:
      return merge({}, state, action.story);
    case REMOVE_STORY:
      let newState = merge({}, state);
      delete newState[action.story.id];
      return newState;
    default:
      return state;
  }
};

export default StoriesReducer;
