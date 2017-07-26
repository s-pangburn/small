import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';

import { signup, login, logout } from './actions/session_actions';
import {
  requestAllStories,
  requestStory,
  createStory,
  updateStory,
  deleteStory
} from './actions/story_actions';

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById('root');
  const store = createStore();
  ReactDOM.render(<Root store={store}/>, root);

  document.body.style.zoom = 0.9;

  window.getState = store.getState;
  window.dispatch = store.dispatch;
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
