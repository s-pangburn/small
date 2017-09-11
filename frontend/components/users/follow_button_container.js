import { connect } from 'react-redux';

import {
  requestAllFollows,
  createFollow,
  deleteFollow
} from '../../actions/follow_actions';

import { followsByUserId } from '../../reducers/selectors';
import FollowButton from './follow_button';

const mapStateToProps = state => {
  return {
    loggedIn: Boolean(state.session.currentUser),
    currentUser: state.session.currentUser,
    userFollows: followsByUserId(state, state.session.currentUser.id)
  }
}

const mapDispatchToProps = dispatch => {
  return {
    requestAllFollows: () => dispatch(requestAllFollows()),
    createFollow: follow => dispatch(createFollow(follow)),
    deleteFollow: id => dispatch(deleteFollow(id))
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FollowButton);
