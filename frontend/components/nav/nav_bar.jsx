import React from 'react';
import Logo from './logo';
import SessionLinksContainer from './session_links_container';
import { Route } from 'react-router-dom';

class NavBar extends React.Component {
  render() {
    return (
      <nav className="outerNav">
        <header>
          <Logo />
          <Route path="/" component={ SessionLinksContainer }/>
        </header>
      </nav>
    )
  }
}

export default NavBar;
