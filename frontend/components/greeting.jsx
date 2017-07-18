import React from 'react';
import { Link } from 'react-router-dom';

class Greeting extends React.Component {
  render() {
    if (this.props.currentUser) {
      return (
        <div className="greeting">
          <span>Welcome {this.props.currentUser.username}!</span>
          <button onClick={this.props.logout}>Logout</button>
        </div>
      );
    }
    return (
      <div className="login-signup">
        <Link to='/login'>Login</Link>
        &nbsp;
        <Link to='/signup'>Sign Up</Link>
      </div>
    );
  }
}

export default Greeting;
