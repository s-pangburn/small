import { connect } from 'react-redux';
import Comments from './comments';
import { commentsByStoryId } from '../../reducers/selectors';

import {
  requestStoryComments,
  updateComment,
  deleteComment
} from '../../actions/comment_actions';

import { resetErrors } from '../../actions/error_actions';

const mapStateToProps = (state, ownProps) => ({
  loggedIn: Boolean(state.session.currentUser),
  currentUser: state.session.currentUser,
  comments: commentsByStoryId(state, ownProps.storyId),
  storyId: ownProps.storyId,
  errors: state.errors
});

const mapDispatchToProps = dispatch => ({
  requestStoryComments: storyId => dispatch(requestStoryComments(storyId)),
  updateComment: comment => dispatch(updateComment(comment)),
  deleteComment: comment => dispatch(deleteComment(comment)),
  resetErrors: () => dispatch(resetErrors())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Comments);
