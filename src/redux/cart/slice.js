import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	items: [],
	totalPrice: 0,
	numberProduct: 0
}

const cartSlice = createSlice({
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

			state.totalPrice = state.items.reduce((sum, obj) => obj.price * obj.count + sum, 0)
			state.numberProduct = state.items.reduce((sum, obj) => sum + obj.count, 0)
		},
		cleartItems: (state) => {
			state.items = []
			state.totalPrice = 0
			state.numberProduct = 0
		},
		removeItem: (state, action) => {
			state.items = state.items.filter((obj) => obj.id !== action.payload)
			state.totalPrice = state.items.reduce((sum, obj) => obj.price * obj.count + sum, 0)
			state.numberProduct = state.items.reduce((sum, obj) => sum + obj.count, 0)
		},
		decrement: (state, action) => {
			const findItem = state.items.find((obj) => obj.id === action.payload);

			if (findItem) {
				findItem.count--;
				state.items = state.items.filter(obj => obj.count !== 0)
			}
			state.totalPrice = state.items.reduce((sum, obj) => obj.price * obj.count + sum, 0)
			state.numberProduct = state.items.reduce((sum, obj) => sum + obj.count, 0)
		},
	},
})





export const { setItems, cleartItems, removeItem, decrement } = cartSlice.actions
export const cartReducer = cartSlice.reducer