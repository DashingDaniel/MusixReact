import { combineReducers } from 'redux';
import LyricsReducer from './lyrics_reducer';

const rootReducer = combineReducers({
  lyrics: LyricsReducer
});

export default rootReducer;
