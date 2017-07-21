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
        <img src={this.props.story.image_url} />
        <h2>{ this.state.story.title }</h2>
        <span>{ this.state.story.body }</span>
      </div>
    );
  }
}

export default FeedItem;
