import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunkMiddleware from "redux-thunk";

import reducer from "./modules/reducers";

// Initial State
const rootInitialState = {};

// Middleware
const reduxMiddleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware)
);

export function initializeStore(initialState = rootInitialState) {
  return createStore(reducer, initialState, reduxMiddleware);
}
