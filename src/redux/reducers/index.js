import { combineReducers } from 'redux';
import mentors from './mentors';

const rootReducer = combineReducers({
    mentors: mentors
});

export default rootReducer;