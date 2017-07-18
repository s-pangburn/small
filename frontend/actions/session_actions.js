import * as APIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_ERRORS = 'RECEIVE ERRORS';
export const RESET_ERRORS = 'RESET ERRORS';

export const receiveCurrentUser = user => ({
  type: RECEIVE_CURRENT_USER,
  user
});

export const receiveErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors
});

export const resetErrors = () => ({
  type: RESET_ERRORS
});

export const signup = user => dispatch => (
  APIUtil.signup(user).then( currentUser => (
    dispatch(receiveCurrentUser(currentUser))
  ), errors => (
    dispatch(receiveErrors(errors.responseJSON))
  ))
);

export const login = user => dispatch => (
  APIUtil.login(user).then( currentUser => (
    dispatch(receiveCurrentUser(currentUser))
  ), errors => (
    dispatch(receiveErrors(errors.responseJSON))
  ))
);

export const logout = () => dispatch => (
  APIUtil.logout().then( currentUser => (
    dispatch(receiveCurrentUser(null))
  ), errors => (
    dispatch(receiveErrors(errors.responseJSON))
  ))
);
