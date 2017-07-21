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
    console.log("Feedprops: ", this.props);
    if (this.props.stories.length > 0) {
      return (
        <FeedItem story={this.props.stories[0]}/>
      );
    } else {
      return null;
    }
  }
}

export default Feed;
