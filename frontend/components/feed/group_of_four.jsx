import React from 'react';
import { Link } from 'react-router-dom';

import FeedItem from './feed_item';
import GroupOfTwo from './group_of_two';

class GroupOfFour extends React.Component {
  render() {
    return (
      <section key={this.props.stories[0].id} className="feed-row group-of-four">
        <GroupOfTwo
          key={this.props.stories[0].id}
          stories={this.props.stories.slice(0, 2)} />
        <GroupOfTwo
          key={this.props.stories[2].id}
          stories={this.props.stories.slice(2)} />
      </section>
    );
  }
}

export default GroupOfFour;
