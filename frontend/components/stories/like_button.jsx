import React from 'react';

class LikeButton extends React.Component {
  componentDidMount() {
    this.props.requestAllLikes()
  }

  constructor(props) {
    super(props);

    this.state = {
      like: {
        story_id: this.props.story.id
      },
      liked: Boolean(this.props.storyLikes.includes(this.props.currentUser.id))
    }
  }

  toggleLike() {
    if (!this.state.liked) {
      this.props.createLike(this.state.like);
    } else {
      this.props.deleteLike(this.state.like);
    }
  }

  render() {
    this.state.liked = Boolean(
      this.props.storyLikes.includes(this.props.currentUser.id)
    )
    return (
      <button
        className="like-button"
        onClick={this.toggleLike.bind(this)}
      >
        { this.state.liked ? "Unlike" : "Like" }
      </button>
    )
  }
}

export default LikeButton;
