import * as APIUtil from '../util/follow_api_util';
import { receiveErrors } from './error_actions';

export const RECEIVE_ALL_FOLLOWS = "RECEIVE_ALL_FOLLOWS"
export const RECEIVE_FOLLOW = "RECEIVE_FOLLOW";
export const REMOVE_FOLLOW = "REMOVE_FOLLOW";

export const requestAllFollows = () => dispatch => (
  APIUtil.fetchAllFollows().then( follows => (
    dispatch(receiveAllFollows(follows))
  ), errors => (
    dispatch(receiveErrors(errors.responseJSON))
  ))
);

export const createFollow = follow => dispatch => (
  APIUtil.createFollow(follow).then(newFollow => (
    dispatch(receiveFollow(newFollow))
  ), errors => (
    dispatch(receiveErrors(errors.responseJSON))
  ))
);

export const deleteFollow = follow => dispatch => (
  APIUtil.deleteFollow(follow).then(newFollow => (
    dispatch(removeFollow(newFollow))
  ), errors => (
    dispatch(receiveErrors(errors.responseJSON))
  ))
);

export const receiveAllFollows = follows => ({
  type: RECEIVE_ALL_FOLLOWS,
  follows
});

export const receiveFollow = follow => ({
  type: RECEIVE_FOLLOW,
  follow
});

export const removeFollow = follow => ({
  type: REMOVE_FOLLOW,
  follow
});
