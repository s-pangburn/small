import { connect } from 'react-redux';

import { login, signup, resetErrors } from '../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = (state, ownProps) => ({
  loggedIn: Boolean(state.session.currentUser),
  errors: state.session.errors,
  formType: ownProps.location.pathname
});

const mapDispatchToProps = (dispatch, ownProps) => {
  const formType = ownProps.location.pathname;
  const processForm = (formType === "/login") ? login : signup;
  return ({
    processForm: user => dispatch(processForm(user)),
    resetErrors: () => dispatch(resetErrors())
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
