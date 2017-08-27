import React from 'react';
import { Link } from 'react-router-dom';

import ErrorList from '../errors/error_list';
import LoginModalFooter from './login_modal_footer';
import Logo from '../nav/logo';
import SessionForm from './session_form'

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
      formType: this.props.formType
    };
  }

  focusFirstElement() {
    document.forms[0].elements[0].focus();
  }

  resetForm(formType) {
    return () => {
      this.setState({ formType }, () => {
        this.props.resetErrors();
        this.focusFirstElement();
      });
    };
  }

  render() {
    const isLoginForm = (this.state.formType === 'login');

    return (
      <form className="LoginModal">

        <h1>small</h1>

        <ErrorList errors={this.props.errors} />

        <SessionForm
          formType={this.props.formType}
          isLoginForm={isLoginForm}
          login={this.props.login}
          signup={this.props.signup}
        />

        <LoginModalFooter
          isLoginForm={isLoginForm}
          setSignUp={this.resetForm("signup")}
          setLogin={this.resetForm("login")}
          login={this.props.login}
        />
      </form>
    );
  }
}

export default LoginModal;
