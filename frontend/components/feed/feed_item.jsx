import React from 'react';
import { Link } from 'react-router-dom';

class FeedItem extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props);
    this.state = {
      story: this.props.story
    };
  }

  render() {
    console.log(this.state.story);
    return (
      <div className="feedItem">
        <Link to={`/stories/${this.state.story.id}`}>
          <div className="imageContainer">
            <img src={this.props.story.image_url}
              alt={ this.state.story.title }/>
          </div>
        </Link>
        <section className="description">
          <Link to={`/stories/${this.state.story.id}`}>
            <h2>{ this.state.story.title }</h2>
          </Link>
          <Link to={`/stories/${this.state.story.id}`}>
            <span>{ this.state.story.body }</span>
          </Link>
        </section>
      </div>
    );
  }
}

export default FeedItem;
