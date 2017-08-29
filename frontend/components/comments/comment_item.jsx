import React from 'react';
import CommentEditControls from './comment_edit_controls'
import CommentEditForm from './comment_edit_form'
import UserInfo from '../users/user_info'

class CommentItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showForm: false
    };

    this.toggleEdit = this.toggleEdit.bind(this);
    this.bindDelete = this.bindDelete.bind(this);
  }

  toggleEdit() {
    event.preventDefault();
    this.setState({
      showForm: !this.state.showForm
    });
  }

  bindDelete() {
    event.preventDefault();
    return () => {
      this.props.deleteComment(this.props.comment.id);
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

    return (
      <div className="comment">
        <section className="top">
          <UserInfo
            author={comment.author}
            date={this.props.comment.created_at}
          />

        { this.userCanEdit() ? (
            <CommentEditControls
              toggleEdit={this.toggleEdit}
              handleDelete={this.bindDelete(comment.id)}
            />
          ) : null }
        </section>

        { this.state.showForm ? (
          <CommentEditForm
            comment={this.props.comment}
            toggleEdit={this.toggleEdit}
            updateComment={this.props.updateComment}
            authorId={this.props.currentUser.id} />
        ) : (
          <p>{comment.body}</p>
        )}
      </div>
    );
  }
}

export default CommentItem;
