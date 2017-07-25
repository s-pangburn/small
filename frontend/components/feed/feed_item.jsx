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
        <Link to={storyUrl}>
          <div className="imageContainer">
            {(this.props.story.image_url) ? (
                  <img src={this.props.story.image_url}
                    alt={ this.state.story.title }/>
            ) : (
              <img src="http://68.media.tumblr.com/a8e8623fc8b4f3d89a916ca640217bfc/tumblr_nk1p2qpKZC1qc2xm1o1_500.gif"
                style={{"filter": "grayscale(100%)"}}
                alt={ this.state.story.title }/>
            ) }
          </div>
        </Link>
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
            <span className="date">{this.state.story.created_at.slice(0, 10)}</span>
          </section>
        </section>
      </div>
    );
  }
}

export default FeedItem;
