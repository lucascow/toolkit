/* 
 * Gather reducers & middleware
 */
import { createStore, applyMiddleware } from "redux";
import reducer from "../reducers";

const customMiddleWare = store => next => action => {
  console.log("Middleware triggered:", action);
  next(action);
}

const store = createStore(reducer, applyMiddleware(customMiddleWare));

export default store;