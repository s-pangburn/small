import React from 'react';
import { Link } from 'react-router-dom';

class StoryForm extends React.Component {
  componentWillUnmount() {
    this.props.resetErrors();
  }

  componentDidMount() {
    if (this.props.match.params.storyId) {
      this.props.requestStory(this.props.match.params.storyId)
        .then(() => this.populateFields());
    }
    this.focusFirstElement();
  }

  constructor(props) {
    super(props);

    if (this.props.story) {
      this.state = {
        id: this.props.story.id,
        title: this.props.story.title,
        description: this.props.story.description,
        body: this.props.story.body,
        image_url: this.props.story.image_url,
        formType: "edit"
      };
    } else {
      this.state = {
        id: undefined,
        title: "",
        description: "",
        body: "",
        image_url: "",
        formType: "new"
      };
    }

    this.update = this.update.bind(this);
    this.populateFields = this.populateFields.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.checkSubmit = this.checkSubmit.bind(this);
  }

  update(item) {
    return event => this.setState({ [item]: event.currentTarget.value });
  }

  populateFields() {
    this.setState({
      id: this.props.story.id,
      title: this.props.story.title,
      description: this.props.story.description,
      body: this.props.story.body,
      image_url: this.props.story.image_url,
      formType: "edit"
    });
  }

  focusFirstElement() {
    document.forms[0].elements[0].focus();
  }

  checkSubmit(event) {
    const charCode = event.keyCode || event.which;
    if (charCode === 13) this.handleSubmit(event, this.state);
  }

  handleSubmit(event) {
    event.preventDefault();

    if (this.state.formType === "new") {
      this.props.createStory(this.state)
        .then(({ story }) => {
          this.props.history.push(`/stories/${story.id}`);
        });
    } else {
      this.props.updateStory(this.state)
        .then(({ story }) => this.props.history.push(`/stories/${story.id}`));
    }
  }

  render() {
    const isEdit = (this.state.formType === 'edit');

    return (
      <form className="storyForm">
        <br/>
        { isEdit ? (
          <Link to={`/stories/${this.props.story.id}`}>{"<<Back"}</Link>
        ) : (
          <Link to="/">{"<<Back"}</Link>
        )}

        <ul className="errors">
          {this.props.errors.map((error, i) => <li key={i}>{error}</li>)}
        </ul>

        <label>Title:<br/>
          <input type="text" value={this.state.title}
            onChange={this.update("title")} onKeyPress={this.checkSubmit}/>
        </label>
        <br/>
        <label>Description:<br/>
          <input type="text" value={this.state.description}
            onChange={this.update("description")} onKeyPress={this.checkSubmit}/>
        </label>
        <br/>
        <label>Body:<br/>
          <textarea onChange={this.update("body")} rows="30" cols="90"
            value={this.state.body}></textarea>
        </label>
        <br/>
        <span className="link" onClick={this.handleSubmit}>
          { (isEdit) ? "Edit Story" : "Publish Story" }
        </span>
      </form>
    );
  }
}

export default StoryForm;
