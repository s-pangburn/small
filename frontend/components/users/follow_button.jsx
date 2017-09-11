import React from 'react';

class FollowButton extends React.Component {
  componentDidMount() {
    this.props.requestAllFollows()
  }

  constructor(props) {
    super(props);

    this.state = {
      follow: {
        followee_id: this.props.followeeId
      },
      following: Boolean(this.props.userFollows.includes(this.props.followeeId))
    }
  }

  toggleFollow() {
    if (!this.state.following) {
      this.props.createFollow(this.state.follow);
    } else {
      this.props.deleteFollow(this.state.follow);
    }
  }

  render() {
    this.state.following = Boolean(
      this.props.userFollows.includes(this.props.followeeId)
    )
    return (
      <button
        className="follow-button"
        onClick={this.toggleFollow.bind(this)}
      >
        { this.state.following ? "Unfollow" : "Follow" }
      </button>
    )
  }
}

export default FollowButton;
