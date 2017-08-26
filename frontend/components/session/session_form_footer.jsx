import React from 'react';

class SessionFormFooter extends React.Component {
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
          onClick={this.props.handleGuestLogin}
        >
          Demo Login
        </span>
      </span>
    )
  }
}

export default SessionFormFooter;
