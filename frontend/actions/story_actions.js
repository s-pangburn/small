import * as APIUtil from '../util/story_api_util';

export const RECEIVE_STORIES = 'RECEIVE_STORIES';
export const RECEIVE_STORY = 'RECEIVE_STORY';
export const REMOVE_STORY = 'REMOVE_STORY';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';
export const RESET_ERRORS = 'RESET ERRORS';

export const requestAllStories = () => dispatch => {
  return APIUtil.fetchAllStories()
    .then(stories => dispatch(receiveAllStories(stories)));
};

export const requestStory = id => dispatch => {
  return APIUtil.fetchStory(id)
    .then(story => dispatch(receiveStory(story)));
};

export const createStory = story => dispatch => {
  return APIUtil.createStory(story)
    .then(newStory => dispatch(receiveStory(newStory)));
};

export const updateStory = story => dispatch => {
  return APIUtil.updateStory(story)
    .then(newStory => dispatch(receiveStory(newStory)));
};

export const deleteStory = story => dispatch => {
  return APIUtil.deleteStory(story)
    .then(newStory => dispatch(removeStory(newStory)));
};

export const receiveAllStories = stories => ({
  type: RECEIVE_STORIES,
  stories
});

export const receiveStory = story => ({
  type: RECEIVE_STORY,
  story
});

export const removeStory = story => ({
  type: REMOVE_STORY,
  story
});

export const receiveErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors
});

export const resetErrors = () => ({
  type: RESET_ERRORS
});
