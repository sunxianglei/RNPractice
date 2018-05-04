import {
	combineReducers
} from 'redux';
import countReducer from './CountReducer';
import moviesReducer from './MoviesReducer';

const rootReducer = combineReducers({
	countReducer,
	moviesReducer
});

export default rootReducer;