import React from 'react';

class CommentForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      body: "",
      author_id: "",
      story_id: this.props.storyId
    };

    this.handlePublish = this.handlePublish.bind(this);
  }

  update(item) {
    return event => this.setState({ [item]: event.currentTarget.value });
  }

  handlePublish() {
    event.preventDefault();
    this.state.author_id = this.props.currentUser.id;
    this.props.createComment(this.state)
      .then( () => window.scrollTo(0,document.body.scrollHeight) );
    this.setState({ body: "" });
  }

  render() {
    return (
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
    );
  }
}

export default CommentForm;
