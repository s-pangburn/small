import React from 'react';
import { Link, Redirect } from 'react-router-dom';

class SessionForm extends React.Component {
  componentWillUnmount() {
    this.props.resetErrors();
  }

  componentDidMount() {
    this.focusFirstElement();
  }

  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      email: "",
      formType: this.props.formType
    };

    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleGuestLogin = this.handleGuestLogin.bind(this);
    this.checkSubmit = this.checkSubmit.bind(this);
  }

  update(item) {
    return event => this.setState({ [item]: event.currentTarget.value });
  }

  setForm(formType) {
    return () => {
      this.setState({ formType });
    };
  }

  focusFirstElement() {
    document.forms[0].elements[0].focus();
  }

  checkSubmit(event) {
    const charCode = event.keyCode || event.which;
    if (charCode === 13) this.handleSubmit(event, this.state);
  }

  handleSubmit(event, state) {
    state = state || this.state;
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
      <Link onClick={this.handleGuestLogin} to="/">Demo Login</Link>
    );
  }

  render() {
    const isLoginForm = (this.state.formType === '/login');

    return (
      <form className="sessionForm">
        <h1>small</h1>
        <ul className="errors">
          {this.props.errors.map((error, i) => <li key={i}>{error}</li>)}
        </ul>

        { isLoginForm ? null : this.renderEmailForm() }
        <label>Username:
          <input type="text" value={this.state.username}
            onChange={this.update("username")} onKeyPress={this.checkSubmit}/>
        </label>
        <br/>
        <label>Password:
          <input type="password" value={this.state.password}
            onChange={this.update("password")} onKeyPress={this.checkSubmit}/>
        </label>
        <br/>
        <Link onClick={this.handleSubmit} to="/">
          { isLoginForm ? "Login" : "Sign Up" }
        </Link>
        <span className='footnote'>
          { isLoginForm ? (
            <div>
              Don't have an account? <Link onClick={this.setForm("/signup")} to="/signup">Sign Up</Link>
            </div>
          ) : (
            <div>
              Already have an account? <Link onClick={this.setForm("/login")} to="/login">Login</Link>
            </div>
          )}
          { this.renderGuestLogin() }
        </span>
      </form>
    );
  }
}

export default SessionForm;
