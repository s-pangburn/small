import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import Modal from 'react-modal';

import SessionFormContainer from './session_form_container';

class Greeting extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      modalIsOpen: (this.props.pagePath === "/") ? false : true,
    };
    this.formType = '';

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal(formType) {
    return () => {
      this.formType = formType;
      this.setState({ modalIsOpen: true });
    };
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
    this.props.history.push({pathname: "/"});
  }

  render() {
    if (this.props.currentUser) {
      this.setState({ modalIsOpen: false });
      return (
        <div className="greeting">
          <span>Welcome, {this.props.currentUser.username}!</span>
          <Link onClick={this.props.logout} to="/">Logout</Link>
        </div>
      );
    }
    return (
      <div className="login-signup">
        <Link onClick={this.openModal('/login')} to='/login'>Login</Link>
        &nbsp;
        <Link onClick={this.openModal('/signup')} to='/signup'>Sign Up</Link>
        <Modal
          className="modal"
          overlayClassName="modal-overlay"
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          contentLabel="Login Modal">

          <SessionFormContainer
            history={this.props.history}
            formType={this.formType} />

        </Modal>
      </div>
    );
  }
}

export default Greeting;
