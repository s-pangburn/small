import React from 'react';

class LoginModalFooter extends React.Component {
  handleGuestLogin(event) {
    const guest = {
      username: "guest",
      password: "password",
      email: "guest@example.com"
    };
    this.props.login(guest);
  }

  render() {
    return (
      <span className='footnote'>
        { this.props.isLoginForm ? (
          <div>
            Don't have an account? <span className="link"
              onClick={this.props.setSignUp}>Sign Up</span>
          </div>
        ) : (
          <div>
            Already have an account? <span className="link"
              onClick={this.props.setLogin}> Login</span>
          </div>
        )}
        <span
          className="link"
          onClick={this.handleGuestLogin.bind(this)} >
          Demo Login
        </span>
      </span>
    )
  }
}

export default LoginModalFooter;
