import React from 'react';
import { Link } from 'react-router-dom';

import FeedItem from './feed_item';

class SplashStory extends React.Component {
  render() {
    return (
      <div key={this.props.stories[0].id} className="splashStory">
        <div className="splash">
          <FeedItem story={this.props.stories[0]} />
        </div>
        <div className="splashSide">
          <FeedItem story={this.props.stories[1]} />
          <FeedItem story={this.props.stories[2]} />
        </div>
      </div>
    );
  }
}

export default SplashStory;
