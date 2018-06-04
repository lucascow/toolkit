/*
 * You should give this file a better name.
 *
 * Action is a simple function returning an object, indicating command type & payload
 * Actions will be packed in a json in the mapDispatchToProps function:
 *
 * const mapDispatchToProps = dispatch => {
 *	return {
 *		updateName: name => dispatch(updateName(name)),
 *		updateSomthing: something => dispatch(updateSomthing(something))
 *	};
 * };
 *
 */
import { TYPE_UPDATE_FAVOURITE } from "../constants/ActionTypes.js"

export const updateFavourite = favourite => (
	{ type: TYPE_UPDATE_FAVOURITE, payload: favourite }
)