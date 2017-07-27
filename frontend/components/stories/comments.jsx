import React from 'react';

class Comments extends React.Component {
  componentDidMount() {
    this.props.requestAllComments();
  }

  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.comments.length > 0) {
      return (
        <section className="comments">
          <span className="responses-header">Responses</span>
          {this.props.comments.map(comment => {
            const date = new Date(comment.created_at)

            return (
              <div key={comment.id} className="comment">
                <div className="userInfo">
                  <img className="avatar"
                    src="http://res.cloudinary.com/dzeqeo9b3/image/upload/r_0/v1501173171/avatar_default_wkpp05.png"/>
                  <div>
                    <span className="username link">{comment.author.username}</span><br/>
                    <span className="date">{date.toDateString()}</span>
                  </div>
                </div>
                <p>{comment.body}</p>
              </div>
            );
          })}

        </section>
      );
    } else {
      return null;
    }
  }
}

export default Comments;
