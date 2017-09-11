import * as APIUtil from '../util/like_api_util';
import { receiveErrors } from './error_actions';

export const RECEIVE_ALL_LIKES = "RECEIVE_ALL_LIKES"
export const RECEIVE_LIKE = "RECEIVE_LIKE";
export const REMOVE_LIKE = "REMOVE_LIKE";

export const requestAllLikes = () => dispatch => (
  APIUtil.fetchAllLikes().then( likes => (
    dispatch(receiveAllLikes(likes))
  ), errors => (
    dispatch(receiveErrors(errors.responseJSON))
  ))
);

export const createLike = like => dispatch => (
  APIUtil.createLike(like).then(newLike => (
    dispatch(receiveLike(newLike))
  ), errors => (
    dispatch(receiveErrors(errors.responseJSON))
  ))
);

export const deleteLike = like => dispatch => (
  APIUtil.deleteLike(like).then(newLike => (
    dispatch(removeLike(newLike))
  ), errors => (
    dispatch(receiveErrors(errors.responseJSON))
  ))
);

export const receiveAllLikes = likes => ({
  type: RECEIVE_ALL_LIKES,
  likes
});

export const receiveLike = like => ({
  type: RECEIVE_LIKE,
  like
});

export const removeLike = like => ({
  type: REMOVE_LIKE,
  like
});
