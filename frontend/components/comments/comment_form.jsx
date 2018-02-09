import React from 'react';

class CommentForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      body: "",
      author_id: "",
      story_id: this.props.storyId
    };
    
    this.handleEnterKey = this.handleEnterKey.bind(this);
    this.handlePublish = this.handlePublish.bind(this);
  }

  update(item) {
    return event => {
      this.setState({ [item]: event.currentTarget.value });
      this.autoSize(event);
    };
  }

  handleEnterKey(e) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      this.handlePublish();
    }
  }

  autoSize(event) {
    const el = event.currentTarget;
    el.style.height = "35px";
    el.style.height = (el.scrollHeight)+"px";
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
      <div className="newCommentForm">
        <img className="avatar"
          src="https://res.cloudinary.com/dzeqeo9b3/image/upload/v1501173171/avatar_default_wkpp05.png"/>
        <textarea
          id="commentForm"
          onChange={this.update("body")}
          onKeyPressCapture={this.handleEnterKey}
          placeholder="Write a response..."
          value={this.state.body} />
        <span className="publish link" onClick={ this.handlePublish }>Publish</span>
      </div>
    );
  }
}

export default CommentForm;
