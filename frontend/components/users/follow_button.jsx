import React from 'react';

class FollowButton extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      following: false
    }
  }

  toggleFollow() {
    this.setState({
      following: !this.state.following
    });
  }

  render() {
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
