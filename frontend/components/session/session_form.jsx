import React from 'react';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      email: ""
    };

    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.checkSubmit = this.checkSubmit.bind(this);
  }

  update(item) {
    return event => this.setState({ [item]: event.currentTarget.value });
  }

  checkSubmit(event) {
    const charCode = event.keyCode || event.which;
    if (charCode === 13) this.handleSubmit(event, this.state);
  }

  handleSubmit(event) {
    event.preventDefault();

    if (this.props.formType === "login") {
      this.props.login(this.state);
    } else {
      this.props.signup(this.state);
    }
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
    return (
      <section className="session-form">
        { this.props.isLoginForm ? null : this.renderEmailForm() }

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
          { this.props.isLoginForm ? "Login" : "Sign Up" }
        </span>
      </section>
    )
  }
}

export default SessionForm;
