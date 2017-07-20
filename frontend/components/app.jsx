import React from 'react';
import { Route, Link } from 'react-router-dom';

import GreetingContainer from './greeting_container';
import SessionFormContainer from './session_form_container';
import { AuthRoute } from '../util/route_util';

const App = () => (
  <div>
    <header>
      <Link to="/">
        <h1 className="logo">small</h1>
      </Link>
      <nav>
        <Route path="/" component={GreetingContainer}/>
      </nav>
    </header>
  </div>
);

export default App;

let temp = (
  <div>
    <AuthRoute path="/login" component={ SessionFormContainer } />
    <AuthRoute path="/signup" component={ SessionFormContainer } />
  </div>
);
