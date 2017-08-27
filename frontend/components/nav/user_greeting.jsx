import React from 'react';
import { Link } from 'react-router-dom';

class UserGreeting extends React.Component {
  render() {
    return (
      <div className="greeting">
        <span>Welcome, {this.props.currentUser.username}!</span>
        <Link to="/stories/new">Write a story</Link>
        <Link onClick={this.props.logout} to="/">Logout</Link>
      </div>
    )
  }
}

export default UserGreeting;
