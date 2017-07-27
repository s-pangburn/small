import React from 'react';
import CommentFormContainer from './comment_form_container';

class Comments extends React.Component {
  componentDidMount() {
    this.props.requestAllComments();
  }

  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete(commentId) {
    return () => {
      this.props.deleteComment(commentId);
    };
  }

  render() {
    return (
      <section className="comments">
        <CommentFormContainer storyId={this.props.storyId}/>

        {this.props.comments.length > 0 ? (
          <span className="responsesHeader">Responses</span>
        ) : (
          <span className="noResponses">No responses yet</span>
        )}

        {this.props.comments.map(comment => {
          const date = new Date(comment.created_at);

          return (
            <div key={comment.id} className="comment">
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
                      <span className="link">Edit</span>
                      <span className="link" onClick={this.handleDelete(comment.id)}>Delete</span>
                    </div>
                ) : null}
              </section>
              <p>{comment.body}</p>
            </div>
          );
        })}

      </section>
    );
  }
}

export default Comments;
