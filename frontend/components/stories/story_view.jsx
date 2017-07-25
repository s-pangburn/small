import React from 'react';
import { Link } from 'react-router-dom';

class StoryView extends React.Component {
  componentDidMount() {
    this.props.requestStory(this.props.match.params.storyId);
    window.scrollTo(0, 0)
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
      console.log(this.props.story);
      return (
        <section className="story">
          <Link to="/">{"<<Back"}</Link>

          <p className="authorWidget">
            {this.props.story.created_at.slice(0, 10)}
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

          <h1>{this.props.story.title}</h1>
          <h3>{this.props.story.description}</h3>
          {(this.props.story.image_url) ? (
            <figure>
              <div className="imageContainer">
                <img src={this.props.story.image_url}/>
              </div>
              <img src={this.props.story.image_url}/>
            </figure>
          ) : null }


          <section className="body" style={{"whiteSpace": "pre-wrap"}}>
            <p>{this.props.story.body}</p>
          </section>

          <p className="authorWidget">
            {this.props.story.created_at.slice(0, 10)}
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
      );
    } else {
      return null;
    }
  }
}

export default StoryView;
