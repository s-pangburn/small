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
    alert("You Defeated");
    this.props.deleteStory(this.props.story.id)
      .then(
        story => this.props.history.push({pathname: "/"}),
        ({errors}) => alert(errors)
      );
  }

  render() {
    if (this.props.story) {
      return (
        <section className="story">
          <Link to="/">{"<<Back"}</Link>
          <p>AuthorName placeholder</p>
          <h1>{this.props.story.title}</h1>
          <img src={this.props.story.image_url}/>
          <p>{this.props.story.body}</p>
          <span className="link"
            onClick={this.handleDelete}>Delete Story</span>
          <p>AuthorName placeholder</p>
        </section>
      );
    } else {
      return null;
    }
  }
}

export default StoryView;
