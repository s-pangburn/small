import React from 'react';
import CommentFormContainer from './comment_form_container';
import CommentItem from './comment_item';

class Comments extends React.Component {
  componentDidMount() {
    this.props.requestAllComments();
  }

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section className="comments">
        { this.props.loggedIn ? (
          <CommentFormContainer storyId={this.props.storyId}/>
        ) : null }

        {this.props.comments.length > 0 ? (
          <span className="responsesHeader">Responses</span>
        ) : (
          <span className="noResponses">No responses yet</span>
        )}

        {this.props.comments.map(comment => {
          return (
            <CommentItem key={comment.id} comment={comment}/>
          );
        })}

      </section>
    );
  }
}

export default Comments;
