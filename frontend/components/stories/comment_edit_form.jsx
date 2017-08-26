import React from 'react';

class CommentEditForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      id: this.props.comment.id,
      body: this.props.comment.body,
      author_id: this.props.comment.author.id,
      story_id: this.props.comment.story_id
    }

    this.autoSize = this.autoSize.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
  }

  update(item) {
    return event => {
      this.setState({ [item]: event.currentTarget.value });
      this.autoSize(event);
    };
  }

  autoSize(event) {
    const el = event.currentTarget;
    el.style.height = "35px";
    el.style.height = (el.scrollHeight)+"px";
  }

  handleUpdate() {
    event.preventDefault();
    this.state.author_id = this.props.authorId;
    this.props.updateComment(this.state)
      .then( () => this.props.toggleEdit() );
  }

  render() {
    return (
      <section className="edit">
        <textarea
          className="editForm"
          onChange={this.update("body")}
          autoFocus
          onFocus={this.autoSize}
          value={this.state.body}
        ></textarea>

        <div className="updateOptions">
          <span
            className="link update"
            onClick={this.props.toggleEdit}>Cancel</span>
          <span
            className="link update"
            onClick={this.handleUpdate}>Update</span>
        </div>
      </section>
    )
  }
}

export default CommentEditForm;
