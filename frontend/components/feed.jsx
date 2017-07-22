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
        <section className="feed">
          <FeedItem story={this.props.stories[1]}/>
        </section>
      );
    } else {
      return null;
    }
  }
}

export default Feed;
