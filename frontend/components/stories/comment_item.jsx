import React from 'react';

class CommentItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.comment.id,
      body: this.props.comment.body,
      author_id: this.props.comment.author.id,
      story_id: this.props.comment.story_id
    };

    this.handleEdit = this.handleEdit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleEdit() {
    //Nothing
  }

  handleDelete() {
    return () => {
      this.props.deleteComment(this.state.id);
    };
  }

  render() {
    const comment = this.props.comment;
    const date = new Date(comment.created_at);

    return (
      <div className="comment">
        <section className="top">

          <div className="userInfo">
            <img className="avatar"
              src="http://res.cloudinary.com/dzeqeo9b3/image/upload/r_0/v1501173171/avatar_default_wkpp05.png"/>
            <div>
              <span className="username link">{comment.author.username}</span><br/>
              <span className="date">{date.toDateString()}</span>
            </div>
          </div>

          {(this.props.loggedIn &&
            this.props.currentUser.username ===
            comment.author.username) ? (
              <div className="options">
                <span className="link" onClick={this.handleEdit}>Edit</span>
                <span className="link" onClick={this.handleDelete(comment.id)}>Delete</span>
              </div>
          ) : null}
        </section>

        <p>{comment.body}</p>
      </div>
    );
  }
}

export default CommentItem;
