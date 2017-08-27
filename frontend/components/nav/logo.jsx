import React from 'react';
import { Link } from 'react-router-dom';

class Logo extends React.Component {
  render() {
    return (
      <Link to="/">
        <h1 className="logo">small</h1>
      </Link>
    )
  }
}

export default Logo;
