import React from 'react';
import { Route, Link } from 'react-router-dom';

import GreetingContainer from './greeting_container';
import SessionFormContainer from './session_form_container';
import FeedContainer from './feed_container';
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

    <FeedContainer />
  </div>
);

export default App;
