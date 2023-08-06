import { createSlice } from "@reduxjs/toolkit";

const totalPriceCalc = (it, itCount) => {
	const items = it.reduce((total, product) => total + product.price, 0)
	const itemCount = itCount.reduce((total, product) => total + product.price, 0)
	const total = items + itemCount
	return total
}

const initialState = {
	items: [],
	totalPrice: 0
}

const pizzaSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		setItems: (state, action) => {
			const findItem = state.items.find((obj) => obj.id === action.payload.id);

			if (!findItem) {
				state.items.push({
					...action.payload,
					count: 1,
				});
			} else {
				findItem.count++;
			}
			state.totalPrice = state.items.reduce((total, product) => total + product.price, 0)

			// state.totalPrice = totalPriceCalc(state.items, state.items.count)
		},
		cleartItems: (state) => {
			state.items = []
			state.totalPrice = 0
		},
		removeItem: (state, action) => {
			state.items = state.items.filter((obj) => obj.id !== action.payload)
			state.totalPrice = state.items.reduce((total, product) => total + product.price, 0)
		},
		decrement: (state, action) => {
			const findItem = state.items.find((obj) => obj.id === action.payload);

			if (findItem) {
				findItem.count--;
				state.items = state.items.filter(obj => obj.count !== 0)
			}
			state.totalPrice = state.items.reduce((total, product) => total + product.price, 0)
		},
	},
})

export const { setItems, cleartItems, removeItem, decrement } = pizzaSlice.actions
export const cartReducer = pizzaSlice.reducer