import { connect } from 'react-redux';

import {
  createStory,
  requestStory,
  updateStory
} from '../../actions/story_actions';

import { resetErrors } from '../../actions/error_actions';
import storyForm from './story_form';

const mapStateToProps = (state, ownProps) => ({
  story: state.stories[ownProps.match.params.storyId],
  formType: ownProps.formType,
  errors: state.errors
});

const mapDispatchToProps = dispatch => ({
  createStory: story => dispatch(createStory(story)),
  updateStory: story => dispatch(updateStory(story)),
  requestStory: id => dispatch(requestStory(id)),
  resetErrors: () => dispatch(resetErrors())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(storyForm);
