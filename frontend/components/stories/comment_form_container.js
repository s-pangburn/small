import { connect } from 'react-redux';
import CommentForm from './comment_form';

import {
  createComment,
  updateComment,
  deleteComment
} from '../../actions/comment_actions';

import { resetErrors } from '../../actions/error_actions';

const mapStateToProps = (state, ownProps) => ({
  currentUser: state.session.currentUser,
  storyId: ownProps.storyId,
  errors: state.errors
});

const mapDispatchToProps = dispatch => ({
  createComment: comment => dispatch(createComment(comment)),
  updateComment: comment => dispatch(updateComment(comment)),
  deleteComment: comment => dispatch(deleteComment(comment)),
  resetErrors: () => dispatch(resetErrors())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentForm);
