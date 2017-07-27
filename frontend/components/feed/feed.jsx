import React from 'react';
import FeedContainer from './feed_container';
import FeedItem from './feed_item';

class Feed extends React.Component {
  componentDidMount() {
    this.props.requestAllStories();
    this.props.requestAllComments();
  }

  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.stories.length > 0) {
      return (
        <section className="feed">
          {this.props.stories.map(story => {
            return <FeedItem key={story.id} story={story}/>;
          })}

        </section>
      );
    } else {
      return null;
    }
  }
}

export default Feed;
