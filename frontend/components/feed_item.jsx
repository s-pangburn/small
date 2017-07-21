import React from 'react';

class FeedItem extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props);
    this.state = {
      story: this.props.story
    };
  }

  render() {
    console.log(this.state.story);
    return (
      <div>
        { this.state.story.title }
      </div>
    );
  }
}

export default FeedItem;
