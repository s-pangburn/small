import { connect } from 'react-redux';
import StoryView from './story_view';
import { commentsByStoryId, likesByStoryId } from '../../reducers/selectors';
import { requestAllComments } from '../../actions/comment_actions';
import { requestStory, deleteStory } from '../../actions/story_actions';
import { resetErrors } from '../../actions/error_actions';

const mapStateToProps = (state, ownProps) => ({
  loggedIn: Boolean(state.session.currentUser),
  currentUser: state.session.currentUser,
  story: state.stories[ownProps.match.params.storyId],
  comments: commentsByStoryId(state, ownProps.match.params.storyId),
  storyLikes: likesByStoryId(state, ownProps.match.params.storyId),
  errors: state.errors
});

const mapDispatchToProps = dispatch => ({
  requestAllComments: () => dispatch(requestAllComments()),
  requestStory: id => dispatch(requestStory(id)),
  deleteStory: id => dispatch(deleteStory(id)),
  resetErrors: () => dispatch(resetErrors())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StoryView);
