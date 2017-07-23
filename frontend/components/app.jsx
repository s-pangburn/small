import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';

import GreetingContainer from './nav/greeting_container';
import SessionFormContainer from './session/session_form_container';
import FeedContainer from './feed/feed_container';
import StoryViewContainer from './stories/story_view_container';
import { AuthRoute } from '../util/route_util';

const App = () => (
  <div>
    <nav className="outerNav">
      <header>
        <Link to="/">
          <h1 className="logo">small</h1>
        </Link>
        <Route path="/" component={GreetingContainer}/>
      </header>
    </nav>

    <Switch>
      <Route path="/stories/:storyId/" component={ StoryViewContainer }/>
      <Route path="/" component={ FeedContainer }/>
    </Switch>
  </div>
);

export default App;
