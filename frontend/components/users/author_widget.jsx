import React from 'react';
import { Link } from 'react-router-dom';

class AuthorWidget extends React.Component {
  render() {
    return (
      <p className="authorWidget">
        <span className="date">{
            `${this.props.date.toDateString()}`
          }</span>
        &nbsp;|&nbsp;
        Written by: {this.props.author.username}
        {(this.props.loggedIn &&
          this.props.currentUser.username ===
          this.props.author.username) ? (
          <span>
            &nbsp;|&nbsp;
            <Link to={`/stories/${this.props.story.id}/edit`}>
              Edit Story
            </Link>
            &nbsp;|&nbsp;
            <span className="link"
              onClick={this.props.handleDelete}>Delete Story</span>
          </span>
        ) : null }
      </p>
    )
  }
}

export default AuthorWidget;
