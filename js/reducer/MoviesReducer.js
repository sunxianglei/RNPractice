import * as ActionTypes from "../action/ActionTypes";

const initialState = {
	isFetching: false,
	content: {}
}

export default function moviesReducer(state = initialState, action) {

	switch (action.type) {
		case ActionTypes.MOVIES_REQUEST:
			return {
				...state,
				isFetching: action.isFetching
			};
		case ActionTypes.MOVIES_RECEIVE:
			return {
				...state,
				isFetching: action.isFetching,
				content: action.content
			};
		default:
			return state;
	}

}