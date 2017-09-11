import { connect } from 'react-redux';

import {
  requestAllLikes,
  createLike,
  deleteLike
} from '../../actions/like_actions';

import { likesByStoryId } from '../../reducers/selectors';
import LikeButton from './like_button';

const mapStateToProps = (state, ownProps) => {
  return {
    loggedIn: Boolean(state.session.currentUser),
    currentUser: state.session.currentUser,
    storyLikes: likesByStoryId(state, ownProps.story.id)
  }
}

const mapDispatchToProps = dispatch => {
  return {
    requestAllLikes: () => dispatch(requestAllLikes()),
    createLike: like => dispatch(createLike(like)),
    deleteLike: id => dispatch(deleteLike(id))
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LikeButton);
