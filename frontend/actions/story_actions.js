import * as APIUtil from '../util/story_api_util';
import { receiveErrors, resetErrors } from './error_actions';

export const RECEIVE_STORIES = 'RECEIVE_STORIES';
export const RECEIVE_STORY = 'RECEIVE_STORY';
export const REMOVE_STORY = 'REMOVE_STORY';

export const requestAllStories = () => dispatch => (
  APIUtil.fetchAllStories().then( stories => (
    dispatch(receiveAllStories(stories))
  ), errors => (
    dispatch(receiveErrors(errors.responseJSON))
  ))
);

export const requestStory = id => dispatch => (
  APIUtil.fetchStory(id).then(story => (
    dispatch(receiveStory(story))
  ), errors => (
    dispatch(receiveErrors(errors.responseJSON))
  ))
);

export const createStory = story => dispatch => (
  APIUtil.createStory(story).then(newStory => (
    dispatch(receiveStory(newStory))
  ), errors => (
    dispatch(receiveErrors(errors.responseJSON))
  ))
);

export const updateStory = story => dispatch => (
  APIUtil.updateStory(story).then(newStory => (
    dispatch(receiveStory(newStory))
  ), errors => (
    dispatch(receiveErrors(errors.responseJSON))
  ))
);

export const deleteStory = story => dispatch => (
  APIUtil.deleteStory(story).then(newStory => (
    dispatch(removeStory(newStory))
  ), errors => (
    dispatch(receiveErrors(errors.responseJSON))
  ))
);

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
