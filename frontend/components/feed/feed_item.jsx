import React from 'react';
import { Link } from 'react-router-dom';

class FeedItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      story: this.props.story
    };
  }

  render() {
    const storyUrl = `/stories/${this.state.story.id}`;
    return (
      <div className="feedItem">
        {(this.props.story.image_url) ? (
          <Link to={storyUrl}>
            <div className="imageContainer">
              <img src={this.props.story.image_url}
                alt={ this.state.story.title }/>
            </div>
          </Link>
        ) : null }
        <section className="storyInfo">
          <section className="description">
            <Link to={storyUrl}>
              <h2>{ this.state.story.title }</h2>
            </Link>
            <Link to={storyUrl}>
              <span>{ this.state.story.description }</span>
            </Link>
          </section>
          <section className="author">
            <span>{this.state.story.author.username}</span>
            <br/>
            <span>{this.state.story.created_at.slice(0, 10)}</span>
          </section>
        </section>
      </div>
    );
  }
}

export default FeedItem;
