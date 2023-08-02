import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { filterReducer } from "./filter/slice";
import { pizzaReducer } from "./pizzas/slice";

const reducer = combineReducers({
	filter: filterReducer,
	pizza: pizzaReducer
});
export const store = configureStore({ reducer, devTools: true })