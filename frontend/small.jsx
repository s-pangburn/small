import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';

import { signup, login, logout } from './actions/session_actions';
import {
  fetchAllStories,
  fetchStory,
  createStory,
  updateStory,
  deleteStory
} from './util/story_api_util';

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById('root');
  const store = createStore();
  ReactDOM.render(<Root store={store}/>, root);

  window.getState = store.getState;
  window.dispatch = store.dispatch;

  window.fetchAllStories = fetchAllStories;
  window.fetchStory = fetchStory;
  window.createStory = createStory;
  window.updateStory = updateStory;
  window.deleteStory = deleteStory;
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
