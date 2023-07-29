import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { filterReducer } from "./filter/slice";

const reducer = combineReducers({
	filter: filterReducer
});
export const store = configureStore({ reducer, devTools: true })