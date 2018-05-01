
import * as ActionTypes from './ActionTypes'

export function  increaseCount(count) {
	return {
		type: ActionTypes.INCREASE_COUNT,
		count: count
	}
}

export function decreaseCount(count) {
	return {
		type: ActionTypes.DECREASE_COUNT,
		count:count
	}
}
