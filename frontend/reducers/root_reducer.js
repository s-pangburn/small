import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import StoriesReducer from './stories_reducer';
import ErrorsReducer from './errors_reducer';

const rootReducer = combineReducers({
  session: SessionReducer,
  stories: StoriesReducer,
  errors: ErrorsReducer
});

export default rootReducer;
