import { createStore, combineReducers, applyMiddleware } from "redux";
import productReducer from "./productReducer";
import { thunk } from "redux-thunk";

const rootReducer = combineReducers({
  products: productReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));