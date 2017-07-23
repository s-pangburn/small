import { connect } from 'react-redux';
import StoryView from './story_view';
import SelectStory from '../../reducers/selectors';
import { requestStory } from '../../actions/story_actions';

const mapStateToProps = (state, ownProps) => ({
  story: state.stories[ownProps.match.params.storyId]
});

const mapDispatchToProps = dispatch => ({
  requestStory: id => dispatch(requestStory(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StoryView);
