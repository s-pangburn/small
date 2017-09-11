import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import StoriesReducer from './stories_reducer';
import CommentsReducer from './comments_reducer';
import LikesReducer from './likes_reducer';
import FollowsReducer from './follows_reducer';
import ErrorsReducer from './errors_reducer';

const rootReducer = combineReducers({
  session: SessionReducer,
  stories: StoriesReducer,
  comments: CommentsReducer,
  likes: LikesReducer,
  follows: FollowsReducer,
  errors: ErrorsReducer
});

export default rootReducer;
