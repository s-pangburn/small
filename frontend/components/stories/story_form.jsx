import React from 'react';
import Dropzone from 'react-dropzone';
import request from 'superagent';
import { Link } from 'react-router-dom';

import ErrorList from '../errors/error_list';
import StoryFormHeader from './story_form_header';

class StoryForm extends React.Component {
  componentWillUnmount() {
    this.props.resetErrors();
  }

  componentDidMount() {
    this.focusFirstElement();

  }

  componentWillReceiveProps(nextProps) {
    this.refreshFormType(nextProps);
    this.focusFirstElement();
  }

  constructor(props) {
    super(props);

    this.clearState();
    this.determineFormType();

    this.update = this.update.bind(this);
    this.populateFields = this.populateFields.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.checkSubmit = this.checkSubmit.bind(this);
  }

  update(item) {
    return event => this.setState({ [item]: event.currentTarget.value });
  }

  clearState() {
    this.state = {
      id: undefined,
      title: "",
      description: "",
      body: "",
      image_url: ""
    };
  }

  determineFormType() {
    if (this.props.match.params.storyId) {
      this.props.requestStory(this.props.match.params.storyId)
        .then(() => this.populateFields());
      this.state.formType = "edit";
    } else {
      this.state.formType = "new";
    }
  }

  refreshFormType(nextProps) {
    if (nextProps.location.pathname === "/stories/new" &&
        this.props.location.pathname !== "/stories/new") {
      this.clearState();
      this.state.formType = "new";
    } else {
      if (nextProps.match.params.storyId &&
          this.state.formType !== "edit") {
        nextProps.requestStory(nextProps.match.params.storyId)
          .then(() => this.populateFields());
      }
      this.state.formType = "edit";
    }
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
    window.scrollTo(0, 0);
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
                }, (errors) => window.scrollTo(0, 0) ); // View errors at top of page
    } else {
      this.props.updateStory(this.state)
                .then(({ story }) => {
                  this.props.history.push(`/stories/${story.id}`);
                }, (errors) => window.scrollTo(0, 0));
    }
  }

  onImageDrop(files) {
    this.setState({
      image_url: files[0]
    });

    this.handleImageUpload(files[0]);
  }

  handleImageUpload(file) {
    const CLOUDINARY_UPLOAD_PRESET = "zl7zltnx";
    const CLOUDINARY_UPLOAD_URL = `https://api.cloudinary.com/v1_1/dzeqeo9b3/upload`;

    let upload = request.post(CLOUDINARY_UPLOAD_URL)
                        .field('upload_preset', CLOUDINARY_UPLOAD_PRESET)
                        .field('file', file);

    upload.end((err, response) => {
      if (err) {
        console.error(err);
      }

      if (response.body.secure_url !== '') {
        this.setState({
          image_url: response.body.secure_url
        });
      }
    });
  }

  render() {
    const isEdit = (this.state.formType === 'edit');

    return (
      <form className="storyForm">
        <br/>

        <ErrorList errors={this.props.errors} />

        <label className="title">
          <input type="text" value={this.state.title} placeholder="Add a title"
            onChange={this.update("title")} onKeyPress={this.checkSubmit}/>
        </label>
        <br/>
        <label className="description">
          <input type="text" value={this.state.description} placeholder="Add a description"
            onChange={this.update("description")} onKeyPress={this.checkSubmit}/>
        </label>

        <div className="imgPreview">
          <img src={this.state.image_url} />
        </div>

        <Dropzone
          className="imgUpload link"
          multiple={false}
          accept="image/*"
          onDrop={this.onImageDrop.bind(this)}>
          <p>Upload an image</p>
        </Dropzone>

        <br/>

        <label className="body">
          <textarea
            onChange={this.update("body")}
            value={this.state.body} />
        </label>
        <br/>

        <span className="link" onClick={this.handleSubmit}>
          { isEdit ? "Edit Story" : "Publish Story" }
        </span>
      </form>
    );
  }
}

export default StoryForm;
