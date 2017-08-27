import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';

import NavBar from './nav/nav_bar';
import LoginModalContainer from './session/login_modal_container';
import FeedContainer from './feed/feed_container';
import StoryViewContainer from './stories/story_view_container';
import StoryFormContainer from './stories/story_form_container';

import { AuthRoute } from '../util/route_util';

const App = () => (
  <div>
    <NavBar />

    <Switch>
      <AuthRoute path="/stories/new"
        component = { StoryFormContainer } formType="new"/>

      <Route exact path="/stories/:storyId/" component={ StoryViewContainer }/>

      <AuthRoute path="/stories/:storyId/edit"
        component={ StoryFormContainer} formType="edit"/>

      <Route path="/" component={ FeedContainer }/>
    </Switch>
  </div>
);

export default App;
