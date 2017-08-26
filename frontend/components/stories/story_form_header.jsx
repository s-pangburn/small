import React from 'react';

class StoryFormHeader extends React.Component {
  render() {
    return this.props.isEdit ? (
      <h1>Edit your story</h1>
    ) : (
      <h1>Create a story</h1>
    )
  }
}

export default StoryFormHeader;
