import React from 'react';

class ErrorList extends React.Component {
  render() {
    return (
      <ul className="errors">
        {this.props.errors.map((error, i) => <li key={i}>{error}</li>)}
      </ul>
    )
  }
}

export default ErrorList;
