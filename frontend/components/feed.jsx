import React from 'react';
import FeedContainer from './feed_container';
import FeedItem from './feed_item';

class Feed extends React.Component {
  componentDidMount() {
    this.props.requestAllStories();
  }

  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.stories.length > 0) {
      return (
        <div>
          <FeedItem story={this.props.stories[0]}/>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default Feed;
