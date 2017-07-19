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
    this.handleGuestLogin = this.handleGuestLogin.bind(this);
  }

  update(item) {
    return event => this.setState({ [item]: event.currentTarget.value });
  }

  handleSubmit(event, state) {
    state = (state instanceof Event) ? this.state : state;
    event.preventDefault();
    this.props.processForm(state);
    this.setState({
      username: "",
      password: "",
      email: ""
    });
  }

  handleGuestLogin(event) {
    const guest = {
      username: "guest",
      password: "password",
      email: "guest@example.com"
    };
    this.handleSubmit(event, guest);
  }

  renderEmailForm() {
    return (
      <div>
        <label>Email Address:
          <input type="text" value={this.state.email}
            onChange={this.update("email")}/>
        </label>
        <br/>
      </div>
    );
  }

  renderGuestLogin() {
    return (
      <button onClick={this.handleGuestLogin}>Demo Login</button>
    );
  }

  render() {
    const isLoginForm = (this.props.formType === '/login');

    return (
      <form className="sessionForm">
        <h1>{ /*isLoginForm ? "Login" : "Sign Up"*/ }small</h1>
        <ul className="errors">
          {this.props.errors.map((error, i) => <li key={i}>{error}</li>)}
        </ul>

        { isLoginForm ? null : this.renderEmailForm() }
        <label>Username:
          <input type="text" value={this.state.username}
            onChange={this.update("username")} />
        </label>
        <br/>
        <label>Password:
          <input type="password" value={this.state.password}
            onChange={this.update("password")}/>
        </label>
        <br/>
        <button onClick={this.handleSubmit}>
          { isLoginForm ? "Login" : "Sign Up" }
        </button>
        { isLoginForm ? this.renderGuestLogin() : null }
      </form>
    );
  }
}

export default SessionForm;
