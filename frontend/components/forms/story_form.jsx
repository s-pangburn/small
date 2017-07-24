import React from 'react';
import { Link } from 'react-router-dom';

class StoryForm extends React.Component {
  componentWillUnmount() {
    this.props.resetErrors();
  }

  componentDidMount() {
    if (this.props.match.params.storyId) {
      this.props.requestStory(this.props.match.params.storyId);
    }
    this.focusFirstElement();
  }

  constructor(props) {
    super(props);

    this.state = {
      title: "",
      description: "",
      body: "",
      image_url: "",
      formType: "new"
    };

    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.checkSubmit = this.checkSubmit.bind(this);
  }

  update(item) {
    return event => this.setState({ [item]: event.currentTarget.value });
  }

  focusFirstElement() {
    document.forms[0].elements[0].focus();
  }

  checkSubmit(event) {
    const charCode = event.keyCode || event.which;
    if (charCode === 13) this.handleSubmit(event, this.state);
  }

  handleSubmit(event, state) {
    state = state || this.state;
    event.preventDefault();

    if (this.state.formType === "new") {
      this.props.createStory(state);
    } else {
      this.props.updateStory(state);
    }
  }

  render() {
    if (this.props.story) {
      this.state = {
        title: this.props.story.title,
        description: this.props.story.description,
        body: this.props.story.body,
        image_url: this.props.story.image_url,
        formType: "edit"
      };
    }

    return (
      <form className="storyForm">
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
            onKeyPress={this.checkSubmit} value={this.state.body}></textarea>
        </label>
        <br/>
        <span className="link" onClick={this.handleSubmit}>
          { (this.state.formType === 'edit') ? "Edit Story" : "Publish Story" }
        </span>
      </form>
    );
  }
}

export default StoryForm;
