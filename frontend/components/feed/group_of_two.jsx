import React from 'react';
import { Link } from 'react-router-dom';

import FeedItem from './feed_item';

class GroupOfTwo extends React.Component {
  render() {
    return (
      <section key={this.props.stories[0].id} className="feed-row group-of-two">
        <FeedItem story={this.props.stories[0]} />
        <FeedItem story={this.props.stories[1]} />
      </section>
    );
  }
}

export default GroupOfTwo;
