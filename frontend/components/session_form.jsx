import React from 'react';
import { Link, Redirect } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };

    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(item) {
    return event => this.setState({ [item]: event.currentTarget.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.processForm(this.state);
  }

  render() {
    const isLoginForm = (this.props.formType === '/login');

    return (
      <form onSubmit={this.handleSubmit}>
        <h1>{isLoginForm ? "Login" : "Sign Up"}</h1>
        <ul className="errors">
          {this.props.errors.map((error, i) => <li key={i}>{error}</li>)}
        </ul>

        <label>Username:
          <input type="text" value={this.state.username}
            onChange={this.update("username")}/>
        </label>
        <br/>
        <label>Password:
          <input type="password" value={this.state.password}
            onChange={this.update("password")}/>
        </label>
        <br/>
        <button>{isLoginForm ? "Login" : "Sign Up"}</button>
      </form>
    );
  }
}

export default SessionForm;
