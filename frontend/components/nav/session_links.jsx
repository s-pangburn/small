import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import Modal from 'react-modal';

import LoginModalContainer from '../session/login_modal_container';
import UserGreeting from './user_greeting';

class SessionLinks extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      modalIsOpen: false,
    };
    this.formType = '';

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.logout = this.logout.bind(this);
  }

  openModal(formType) {
    return () => {
      this.formType = formType;
      this.setState({ modalIsOpen: true });
    };
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
  }

  logout() {
    this.setState({ modalIsOpen: false });
    this.props.logout();
  }

  render() {
    if (this.props.currentUser)
      return <UserGreeting
                currentUser={this.props.currentUser}
                logout={this.logout}
              />;

    return (
      <div className="login-signup">
        <span className="write-story"
          onClick={this.openModal('login')}>Write a story</span>

        <span className="link"
          onClick={this.openModal('login')}>Login</span>

        <span className="link"
          onClick={this.openModal('signup')}>Sign Up</span>

        <Modal
          className="modal"
          overlayClassName="modal-overlay"
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          contentLabel="Login Modal" >

          <LoginModalContainer
            history={this.props.history}
            formType={this.formType} />

        </Modal>
      </div>
    );
  }
}

export default SessionLinks;
