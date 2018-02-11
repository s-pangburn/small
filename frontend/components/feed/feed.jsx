import React from 'react';
import FeedContainer from './feed_container';
import FeedItem from './feed_item';
import SplashStory from './splash_story';
import GroupOfTwo from './group_of_two';
import GroupOfThree from './group_of_three';
import FeedFooter from './feed_footer';

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
    let feedRows = []
    let idx = 3

    //Generate splash image
    if (this.props.stories.length > 3) {
      feedRows.push(
        <SplashStory
          key={this.props.stories[0].id}
          stories={this.props.stories.slice(0,3)} />
      )
    }

    while (idx <= this.props.stories.length - 3) {

      // If we only have 4 stories left, prioritize starting with a 
      // group of two so we don't have hanging tiles, otherwise,
      // push a group of three by default
      switch(idx) {
        case (this.props.stories.length - 4):
          feedRows.push(
            <GroupOfTwo
              key={this.props.stories[idx].id}
              stories={this.props.stories.slice(idx, idx+2)} />
          )
          idx += 2;
          break;
        default:
          feedRows.push(
            <GroupOfThree
              key={this.props.stories[idx].id}
              stories={this.props.stories.slice(idx, idx+3)} />
          )
          idx += 3;
      }

      // If, after having added a group of three or two, there are
      // only three stories left, add them all in a group of three
      switch (idx) {
        case (this.props.stories.length - 3):
          feedRows.push(
            <GroupOfThree
              key={this.props.stories[idx].id}
              stories={this.props.stories.slice(idx, idx+3)} />
          )
          idx += 3;
          break;
        default:
          if (idx <= this.props.stories.length - 2) {
            feedRows.push(
              <GroupOfTwo
                key={this.props.stories[idx].id}
                stories={this.props.stories.slice(idx, idx+2)} />
            )
            idx += 2;
          }
      }
      
      // Unless there are only three stories left after the above steps,
      // prioritize adding another group of two before looping and starting
      // with a group of three again - this makes the ideal arrangment 3-2-2
      switch (idx) {
        case (this.props.stories.length - 3):
          feedRows.push(
            <GroupOfThree
              key={this.props.stories[idx].id}
              stories={this.props.stories.slice(idx, idx + 3)} />
          )
          idx += 3;
          break;
        default:
          if (idx <= this.props.stories.length - 2) {
            feedRows.push(
              <GroupOfTwo
                key={this.props.stories[idx].id}
                stories={this.props.stories.slice(idx, idx + 2)} />
            )
            idx += 2;
          }
      }
    }

    // Catch remainder of stories (if there is more than one)
    if (idx === this.props.stories.length - 2) {
      feedRows.push(
        <GroupOfTwo
          key={this.props.stories[idx].id}
          stories={this.props.stories.slice(idx, idx+2)} />
      )
      idx += 2;
    }

    return feedRows;
  }

  render() {
    if (this.props.stories.length > 0) {
      return (
        <section className="feed">
          {this.generateFeedRows()}
          <FeedFooter />
        </section>
      );
    } else {
      return null;
    }
  }
}

export default Feed;
