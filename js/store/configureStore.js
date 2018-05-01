import {
	createStore,
	applyMiddleware
} from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from '../reducer/rootReducer';

const createStoreWithMiddleware = applyMiddleware(thunkMiddleware)(createStore);

function configureStore(initialState) {
	const store = createStoreWithMiddleware(rootReducer, initialState);
	return store;
}

export default configureStore;