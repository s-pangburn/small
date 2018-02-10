import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';

import { signup, login, logout } from './actions/session_actions';
import {
  createComment,
  updateComment,
  deleteComment
} from './actions/comment_actions';
import { receiveCloudinaryKeys } from './actions/api_actions';

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById('root');
  const store = createStore();

  store.dispatch(receiveCloudinaryKeys(window.cloudinaryOptions));
  delete window.cloudinaryOptions;

  ReactDOM.render(<Root store={store}/>, root);
});

const createStore = () => {
  let store;
  if (window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser } };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }
  return store;
};
