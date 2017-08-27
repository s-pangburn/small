import { connect } from 'react-redux';

import { logout } from '../../actions/session_actions';
import SessionLinks from './session_links';

const mapStateToProps = (state, ownProps) => ({
  currentUser: state.session.currentUser,
  pagePath: ownProps.location.pathname
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionLinks);
