import * as ActionTypes from './ActionTypes'

// 异步Action
export default function getMoviesData(url) {

	return dispatch => {
		dispatch(moviesRequest());
		return fetch(url)
			.then(response => {
                console.log("movies result -> ", response);
				return response.json();
			})
			.then(json => {
                console.log("movies result to json -> ", json);
                dispatch(moviesReceive(json))
			})
		// let result = fetch(url);
		// console.log("movies result -> ", result);
		// dispatch(moviesReceive(result));
		// console.log("movies result to json -> ", result);
	}

}

function moviesRequest() {
	return {
		type: ActionTypes.MOVIES_REQUEST,
		isFetching: true
	}
}

function moviesReceive(result) {
	return {
		type: ActionTypes.MOVIES_RECEIVE,
		isFetching: false,
		content: result
	}
}