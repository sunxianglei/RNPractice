import * as ActionTypes from "../action/ActionTypes";

const initialState = {
	count: 0
}

export default function countReducer(state = initialState, action) {
	
	switch (action.type){
		case ActionTypes.INCREASE_COUNT:
			return {
				...state,
				count: action.count+1
			};
		case ActionTypes.DECREASE_COUNT:
			return {
				...state,
				count: action.count-1
			};
		default:
			return state;
	}

}