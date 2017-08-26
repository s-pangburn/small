import React from 'react';

class CommentEditControls extends React.Component {
  render() {
    return (
      <div className="options">
        <span className="link" onClick={this.props.toggleEdit}>Edit</span>
        <span
          className="link"
          onClick={this.props.handleDelete}>
          Delete
        </span>
      </div>
    )
  }
}

export default CommentEditControls;
