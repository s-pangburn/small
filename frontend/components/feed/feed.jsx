import React from 'react';
import FeedContainer from './feed_container';
import FeedItem from './feed_item';
import SplashStory from './splash_story';

class Feed extends React.Component {
  componentDidMount() {
    this.props.requestAllStories();
    this.props.requestAllComments();
  }

  constructor(props) {
    super(props);
    this.generateFeedRows = this.generateFeedRows.bind(this);
  }

  generateFeedRows() {
    let arr = []
    let idx = 3

    //Generate splash image
    arr.push(
      <SplashStory
        key={this.props.stories[0].id}
        stories={this.props.stories.slice(0,3)} />
    )

    while (idx < this.props.stories.length - 3) {
      arr.push(
        <section key={this.props.stories[idx].id} className="feed-row">
          <FeedItem
            key={this.props.stories[idx].id}
            story={this.props.stories[idx]} />
          <FeedItem
            key={this.props.stories[idx + 1].id}
            story={this.props.stories[idx + 1]} />
          <FeedItem
            key={this.props.stories[idx + 2].id}
            story={this.props.stories[idx + 2]} />
        </section>
      )
      idx += 3;
    }
    return arr;
  }

  render() {
    if (this.props.stories.length > 0) {
      return (
        <section className="feed">
          {this.generateFeedRows()}
        </section>
      );
    } else {
      return null;
    }
  }
}

export default Feed;
