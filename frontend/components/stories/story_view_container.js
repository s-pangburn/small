import { connect } from 'react-redux';
import StoryView from './story_view';
import SelectStory from '../../reducers/selectors';
import { requestStory, deleteStory } from '../../actions/story_actions';
import { resetErrors } from '../../actions/error_actions';

const mapStateToProps = (state, ownProps) => ({
  story: state.stories[ownProps.match.params.storyId]
});

const mapDispatchToProps = dispatch => ({
  requestStory: id => dispatch(requestStory(id)),
  deleteStory: id => dispatch(deleteStory(id)),
  resetErrors: () => dispatch(resetErrors())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StoryView);
