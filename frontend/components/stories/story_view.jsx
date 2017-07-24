import React from 'react';
import { Link } from 'react-router-dom';

class StoryView extends React.Component {
  componentDidMount() {
      this.props.requestStory(this.props.match.params.storyId);
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
      return (
        <section className="story">
          <Link to="/">{"<<Back"}</Link>

          <p className="authorWidget">
            AuthorName placeholder
            &nbsp;|&nbsp;
            {(this.props.loggedIn) ? (
              <Link to={`/stories/${this.props.story.id}/edit`}>Edit Story</Link>
            ) : (
              <span className="link"
                onClick={this.handleDelete}>Edit Story</span>
            ) }

            &nbsp;|&nbsp;
            <span className="link"
              onClick={this.handleDelete}>Delete Story</span>
          </p>

          {(this.props.story.image_url) ? (
            <figure>
              <div className="imageContainer">
                <img src={this.props.story.image_url}/>
              </div>
              <img src={this.props.story.image_url}/>
            </figure>
          ) : null }

          <h1>{this.props.story.title}</h1>
          <section className="body" style={{"whiteSpace": "pre-wrap"}}>
            <p>{this.props.story.body}</p>
          </section>

          <p className="authorWidget">
            AuthorName placeholder
            &nbsp;|&nbsp;
            {(this.props.loggedIn) ? (
              <Link to={`/stories/${this.props.story.id}/edit`}>Edit Story</Link>
            ) : (
              <span className="link"
                onClick={this.handleDelete}>Edit Story</span>
            ) }

            &nbsp;|&nbsp;
            <span className="link"
              onClick={this.handleDelete}>Delete Story</span>
          </p>
        </section>
      );
    } else {
      return null;
    }
  }
}

export default StoryView;
