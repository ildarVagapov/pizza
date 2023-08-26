import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { filterReducer } from "./filter/slice";
import { pizzaReducer } from "./pizzas/slice";
import { cartReducer } from "./cart/slice";
import { useDispatch } from "react-redux";

const reducer = combineReducers({
	filter: filterReducer,
	pizza: pizzaReducer,
	cart: cartReducer
});

export const store = configureStore({ reducer, devTools: true })

type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();