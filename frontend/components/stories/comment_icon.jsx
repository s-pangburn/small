import React from 'react';

class CommentIcon extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const commentOffset = document.getElementById('body').clientHeight + 300;
    $("html, body").animate({ scrollTop: commentOffset });
    
    document.getElementById('commentForm').focus();
  }

  render() {
    return (
      <div onClick={this.handleClick}>
        <img
          width="32"
          src="http://res.cloudinary.com/dzeqeo9b3/image/upload/v1505191447/icon-comment_mg6xzj.png" />
      </div>
    );
  }
}

export default CommentIcon;
