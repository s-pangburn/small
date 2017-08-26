import React from 'react';
import { Link } from 'react-router-dom';

import CommentsContainer from '../comments/comments_container';

class StoryView extends React.Component {
  componentDidMount() {
    this.props.requestStory(this.props.match.params.storyId);
    this.props.requestAllComments();
    window.scrollTo(0, 0);
  }

  componentWillUnmount() {
    this.props.resetErrors();
  }

  constructor(props) {
    super(props);

    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete() {
    this.props.deleteStory(this.props.story.id)
      .then(
        story => this.props.history.push({pathname: "/"}),
        ({errors}) => {
          alert(errors);
          this.props.resetErrors();
        }
      );
  }

  render() {
    if (this.props.story) {
      const date = new Date(this.props.story.created_at);
        // <Link className="back" to="/">{"<<Back"}</Link>

      return (
        <div>
          <section className="story">

            <p className="authorWidget">
              <span className="date">{
                  `${date.toDateString()}`
                }</span>
              &nbsp;|&nbsp;
              Written by: {this.props.story.author.username}
              {(this.props.loggedIn &&
                this.props.currentUser.username ===
                this.props.story.author.username) ? (
                <span>
                  &nbsp;|&nbsp;
                  <Link to={`/stories/${this.props.story.id}/edit`}>
                    Edit Story
                  </Link>
                  &nbsp;|&nbsp;
                  <span className="link"
                    onClick={this.handleDelete}>Delete Story</span>
                </span>
              ) : (
                // <span>
                //   &nbsp;|&nbsp;
                //   <span className="link">Like Story</span>
                //   &nbsp;|&nbsp;
                //   <span className="link">Follow User</span>
                // </span>
                null
              ) }
            </p>

            <h1>{this.props.story.title}</h1>
            <h3>{this.props.story.description}</h3>
            {(this.props.story.image_url) ? (
              <figure>
                <div className="imageContainer">
                  <img className="splashImage" src={this.props.story.image_url}/>
                </div>
              </figure>
            ) : null }


            <section className="body" style={{"whiteSpace": "pre-wrap"}}>
              <p>{this.props.story.body}</p>
            </section>

            <p className="authorWidget">
              <span className="date">{
                  `${date.toDateString()}`
                }</span>
              &nbsp;|&nbsp;
              Written by: {this.props.story.author.username}
              {(this.props.loggedIn &&
                this.props.currentUser.username ===
                this.props.story.author.username) ? (
                <span>
                  &nbsp;|&nbsp;
                  <Link to={`/stories/${this.props.story.id}/edit`}>
                    Edit Story
                  </Link>
                  &nbsp;|&nbsp;
                  <span className="link"
                    onClick={this.handleDelete}>Delete Story</span>
                </span>
              ) : null }
            </p>

          </section>
          <CommentsContainer storyId={this.props.story.id}/>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default StoryView;
