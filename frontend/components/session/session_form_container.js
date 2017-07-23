import { connect } from 'react-redux';

import { login, signup } from '../../actions/session_actions';
import { resetErrors } from '../../actions/error_actions';
import SessionForm from './session_form';

const mapStateToProps = (state, ownProps) => ({
  loggedIn: Boolean(state.session.currentUser),
  errors: state.errors,
  formType: ownProps.formType
});

const mapDispatchToProps = (dispatch, ownProps) => {
  return ({
    login: user => dispatch(login(user)),
    signup: user => dispatch(signup(user)),
    resetErrors: () => dispatch(resetErrors())
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
