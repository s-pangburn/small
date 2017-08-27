import React from 'react';
import { Link } from 'react-router-dom';

import ErrorList from '../errors/error_list';
import LoginModalFooter from './login_modal_footer';
import Logo from '../nav/logo';

class LoginModal extends React.Component {
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

  resetForm(formType) {
    return () => {
      this.setState({ formType }, () => {
        this.props.resetErrors();
        this.focusFirstElement();
      });
    };
  }

  focusFirstElement() {
    document.forms[0].elements[0].focus();
  }

  checkSubmit(event) {
    const charCode = event.keyCode || event.which;
    if (charCode === 13) this.handleSubmit(event, this.state);
  }

  handleSubmit(event) {
    event.preventDefault();

    if (this.state.formType === "login") {
      this.props.login(this.state);
    } else {
      this.props.signup(this.state);
    }
  }

  handleGuestLogin(event) {
    const guest = {
      username: "guest",
      password: "password",
      email: "guest@example.com"
    };
    this.props.login(guest);
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

  render() {
    const isLoginForm = (this.state.formType === 'login');

    return (
      <form className="LoginModal">

        <Logo />

        <ErrorList errors={this.props.errors} />

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

        <span className="link" onClick={this.handleSubmit}>
          { isLoginForm ? "Login" : "Sign Up" }
        </span>

        <LoginModalFooter
          isLoginForm={isLoginForm}
          setSignUp={this.resetForm("signup")}
          setLogin={this.resetForm("login")}
          handleGuestLogin={this.handleGuestLogin}
        />
      </form>
    );
  }
}

export default LoginModal;
