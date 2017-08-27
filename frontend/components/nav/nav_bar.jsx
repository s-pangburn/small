import React from 'react';
import Logo from './logo';
import GreetingContainer from './greeting_container';
import { Route } from 'react-router-dom';

class NavBar extends React.Component {
  render() {
    return (
      <nav className="outerNav">
        <header>
          <Logo />
          <Route path="/" component={ GreetingContainer }/>
        </header>
      </nav>
    )
  }
}

export default NavBar;
