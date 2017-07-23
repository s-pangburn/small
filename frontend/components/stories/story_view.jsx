import React from 'react';
import { Link } from 'react-router-dom';

class StoryView extends React.Component {
  componentDidMount() {
      this.props.requestStory(this.props.match.params.storyId);
  }

  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.story) {
      return (
        <section className="story">
          <span>AuthorName placeholder</span>
          <h1>{this.props.story.title}</h1>
          <img src={this.props.story.image_url}/>
          <p>{this.props.story.body}</p>
          <span>AuthorName placeholder</span>
        </section>
      );
    } else {
      return null;
    }
  }
}

export default StoryView;
