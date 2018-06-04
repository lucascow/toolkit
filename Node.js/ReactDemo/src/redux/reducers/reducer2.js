/*
 * You should give this file a better name.
 * Keep & edit the cross-page data object based on action objects
 */
import { TYPE_UPDATE_FAVOURITE } from "../constants/ActionTypes.js";

const initialState = { 
	favourite: "",
	extra: ""
}

const reducer2 = (state = initialState, action) => {
	switch (action.type) {
		case TYPE_UPDATE_FAVOURITE:
			return Object.assign(state, { favourite: action.payload })
		default:
			return state
	}
}

export default reducer2