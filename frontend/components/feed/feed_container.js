import { connect } from 'react-redux';
import Feed from './feed';
import { selectAllStories } from '../../reducers/selectors';
import { requestAllStories } from '../../actions/story_actions';

const mapStateToProps = state => ({
  stories: selectAllStories(state)
});

const mapDispatchToProps = dispatch => ({
  requestAllStories: () => dispatch(requestAllStories())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Feed);
