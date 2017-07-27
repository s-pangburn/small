import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import StoriesReducer from './stories_reducer';
import CommentsReducer from './comments_reducer';
import ErrorsReducer from './errors_reducer';

const rootReducer = combineReducers({
  session: SessionReducer,
  stories: StoriesReducer,
  comments: CommentsReducer,
  errors: ErrorsReducer
});

export default rootReducer;
