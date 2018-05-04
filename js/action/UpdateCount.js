import * as ActionTypes from './ActionTypes'

// 计数增加action
export function increaseCount(count) {
	return {
		type: ActionTypes.INCREASE_COUNT,
		count: count
	}
}

// 计数减少action
export function decreaseCount(count) {
	return {
		type: ActionTypes.DECREASE_COUNT,
		count: count
	}
}