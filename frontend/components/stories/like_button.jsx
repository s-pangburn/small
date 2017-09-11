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
      <div className="like-button">
        <span
          onClick={this.toggleLike.bind(this)}
          >
          { this.state.liked ? (
            <img width="68" src="https://cdn3.iconfinder.com/data/icons/inficons-set-2/512/star-ratings-512.png" />
          ) : (
            <img width="68" src="http://iconshow.me/media/images/Mixed/line-icon/png/256/star-256.png" />
          )}
        </span>
        <span className="like-count">{this.props.storyLikes.length}</span>
      </div>
    )
  }
}

export default LikeButton;
