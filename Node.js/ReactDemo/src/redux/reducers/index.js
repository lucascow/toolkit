/* 
 * Gather all pages/components/objects & export
 */
import { combineReducers } from 'redux'
import reducer1 from "./reducer1.js";
import reducer2 from "./reducer2.js";

export default combineReducers({
  reducer1,
  reducer2
})