import React from 'react';
import { Link, Redirect } from 'react-router-dom';

class SessionForm extends React.Component {
  componentWillUnmount() {
    this.props.resetErrors();
  }

  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      email: ""
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
    this.state = {
      username: "",
      password: "",
      email: ""
    };
  }

  renderEmailForm() {
    return (
      <div>
        <label>Email:
          <input type="text" value={this.state.email}
            onChange={this.update("email")}/>
        </label>
        <br/>
      </div>
    );
  }

  render() {
    const isLoginForm = (this.props.formType === '/login');

    return (
      <form onSubmit={this.handleSubmit}>
        <h1>{isLoginForm ? "Login" : "Sign Up"}</h1>
        <ul className="errors">
          {this.props.errors.map((error, i) => <li key={i}>{error}</li>)}
        </ul>

        {isLoginForm ? null : this.renderEmailForm()}
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
