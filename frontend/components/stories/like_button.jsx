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
            <img width="65" src="https://res.cloudinary.com/dzeqeo9b3/image/upload/v1505191311/star-blue-filled_bvxzle.png" />
          ) : (
            <img width="65" src="https://res.cloudinary.com/dzeqeo9b3/image/upload/v1505191305/star-blue_yyh7qu.png" />
          )}
        </span>
        <span className="like-count">{this.props.storyLikes.length}</span>
      </div>
    )
  }
}

export default LikeButton;
