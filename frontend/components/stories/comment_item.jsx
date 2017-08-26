import React from 'react';
import CommentUserInfo from './comment_user_info'
import CommentEditControls from './comment_edit_controls'
import CommentEditForm from './comment_edit_form'

class CommentItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.comment.id,
      body: this.props.comment.body,
      author_id: this.props.comment.author.id,
      story_id: this.props.comment.story_id,
      showForm: false
    };

    this.toggleEdit = this.toggleEdit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  toggleEdit() {
    event.preventDefault();
    this.setState({
      showForm: !this.state.showForm
    });
  }

  handleDelete() {
    event.preventDefault();
    return () => {
      this.props.deleteComment(this.state.id);
    };
  }

  userCanEdit() {
    return this.props.loggedIn &&
      this.props.currentUser.username ===
      this.props.comment.author.username &&
      !this.state.showForm
  }

  render() {
    const comment = this.props.comment;
    const date = new Date(comment.created_at);

    return (
      <div className="comment">
        <section className="top">
          <CommentUserInfo
            authorName={comment.author.username}
            date={date.toDateString()}
          />

        {(this.userCanEdit()) ? (
            <CommentEditControls
              toggleEdit={this.toggleEdit}
              handleDelete={this.handleDelete(comment.id)}
            />
          ) : null}
        </section>

        { this.state.showForm ? (
          <CommentEditForm
            comment={this.props.comment}
            toggleEdit={this.toggleEdit}
            updateComment={this.props.updateComment}
            authorId={this.props.currentUser.id}
          />
        ) : (
          <p>{comment.body}</p>
        )}
      </div>
    );
  }
}

export default CommentItem;
