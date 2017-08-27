import React from 'react';
import Logo from './logo';
import GreetingContainer from './greeting_container';

class NavBar extends React.Component {
  render() {
    return (
      <nav className="outerNav">
        <header>
          <Logo />
          <GreetingContainer />
        </header>
      </nav>
    )
  }
}

export default NavBar;
