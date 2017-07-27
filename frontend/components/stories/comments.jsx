import React from 'react';

class Comments extends React.Component {
  componentDidMount() {
    this.props.requestAllComments();
  }

  constructor(props) {
    super(props);

    this.state = {
      body: "",
      author_id: this.props.currentUser.id,
      story_id: this.props.storyId
    };

    this.handlePublish = this.handlePublish.bind(this);
  }

  update(item) {
    return event => this.setState({ [item]: event.currentTarget.value });
  }

  handlePublish() {
    event.preventDefault();
    this.setState({ body: "" });
    this.props.createComment(this.state)
      .then( () => window.scrollTo(0,document.body.scrollHeight) );
  }

  render() {
    return (
      <section className="comments">
        <div className="commentForm">
          <img className="avatar"
            src="http://res.cloudinary.com/dzeqeo9b3/image/upload/r_0/v1501173171/avatar_default_wkpp05.png"/>
          <textarea
            onChange={this.update("body")}
            placeholder="Write a response..."
            value={this.state.body}
            ></textarea>
          <span className="publish link" onClick={ this.handlePublish }>Publish</span>
        </div>

        <span className="responsesHeader">Responses</span>

        {this.props.comments.map(comment => {
          const date = new Date(comment.created_at);

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
  }
}

export default Comments;
