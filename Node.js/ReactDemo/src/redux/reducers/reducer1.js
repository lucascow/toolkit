/*
 * You should give this file a better name.
 * Keep & edit the cross-page data object based on action objects
 */

import { TYPE_UPDATE_NAME } from "../constants/ActionTypes.js";

const initialState = {
	name: "",
	extra: "",
}

const reducer1 = (state = initialState, action) => {
	switch (action.type) {
		case TYPE_UPDATE_NAME:
			return Object.assign(state, { name: action.payload })
		default:
			return state
	}
}

export default reducer1