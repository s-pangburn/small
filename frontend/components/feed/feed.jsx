import React from 'react';
import FeedContainer from './feed_container';
import FeedItem from './feed_item';
import SplashStory from './splash_story';
import GroupOfTwo from './group_of_two';
import GroupOfThree from './group_of_three';

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
    if (this.props.stories.length > 3) {
      arr.push(
        <SplashStory
          key={this.props.stories[0].id}
          stories={this.props.stories.slice(0,3)} />
      )
    }

    while (idx <= this.props.stories.length - 3) {
      arr.push(
        <GroupOfThree
          key={this.props.stories[idx].id}
          stories={this.props.stories.slice(idx, idx+3)} />
      )
      idx += 3;

      if (idx === this.props.stories.length - 3) {
        arr.push(
          <GroupOfThree
            key={this.props.stories[idx].id}
            stories={this.props.stories.slice(idx, idx+3)} />
        )
        idx += 3;
      } else {
        if (idx <= this.props.stories.length - 2) {
          arr.push(
            <GroupOfTwo
              key={this.props.stories[idx].id}
              stories={this.props.stories.slice(idx, idx+2)} />
          )
          idx += 2;
        }
      }
    }

    if (idx === this.props.stories.length - 2) {
      arr.push(
        <GroupOfTwo
          key={this.props.stories[idx].id}
          stories={this.props.stories.slice(idx, idx+2)} />
      )
      idx += 2;
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
