import React from 'react';
import { Link } from 'react-router-dom';

class OldAuthorWidget extends React.Component {
  currentUserCanEdit() {
    return this.props.loggedIn &&
      this.props.currentUser.username ===
      this.props.author.username
  }

  render() {
    return (
      <section className="authorWidget">
        <span className="date">{
            `${this.props.date.toDateString()}`
          }</span>
        &nbsp;|&nbsp;
        Written by: {this.props.author.username}
        { this.currentUserCanEdit() ? (
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
      </section>
    )
  }
}

export default OldAuthorWidget;
