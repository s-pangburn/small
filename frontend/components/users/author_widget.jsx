import React from 'react';
import { Link } from 'react-router-dom';

import FollowButton from './follow_button'

class AuthorWidget extends React.Component {
  currentUserCanEdit() {
    return this.props.loggedIn &&
      this.props.currentUser.username ===
      this.props.author.username
  }

  render() {
    return (
      <section className="authorWidget">
        <div className="userInfo">
          <img className="avatar"
            src="https://res.cloudinary.com/dzeqeo9b3/image/upload/v1501173171/avatar_default_wkpp05.png"/>
          <div >
            <span className="username link">{this.props.author.username}</span><br/>
            <span className="date">{this.props.date.toDateString()}</span>
          </div>
        </div>
        <FollowButton />
      </section>
    )
  }
}

export default AuthorWidget;
