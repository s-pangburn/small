import * as APIUtil from '../util/comment_api_util';
import { receiveErrors } from './error_actions';

export const RECEIVE_COMMENTS = 'RECEIVE_COMMENTS';
export const RECEIVE_COMMENT = 'RECEIVE_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';

export const requestComment = id => dispatch => (
  APIUtil.fetchComment(id).then(comment => (
    dispatch(receiveComment(comment))
  ), errors => (
    dispatch(receiveErrors(errors.responseJSON))
  ))
);

export const createComment = comment => dispatch => (
  APIUtil.createComment(comment).then(newComment => (
    dispatch(receiveComment(newComment))
  ), errors => (
    dispatch(receiveErrors(errors.responseJSON))
  ))
);

export const updateComment = comment => dispatch => (
  APIUtil.updateComment(comment).then(newComment => (
    dispatch(receiveComment(newComment))
  ), errors => (
    dispatch(receiveErrors(errors.responseJSON))
  ))
);

export const deleteComment = comment => dispatch => (
  APIUtil.deleteComment(comment).then(newComment => (
    dispatch(removeComment(newComment))
  ), errors => (
    dispatch(receiveErrors(errors.responseJSON))
  ))
);

export const receiveAllStories = stories => ({
  type: RECEIVE_COMMENTS,
  stories
});

export const receiveComment = comment => ({
  type: RECEIVE_COMMENT,
  comment
});

export const removeComment = comment => ({
  type: REMOVE_COMMENT,
  comment
});
