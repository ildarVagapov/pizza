import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { URL } from "../../api";
import axios from "axios";

export const fetchPizza = createAsyncThunk('pizza/FetchData', async (params) => {
	const { categoryPizzas, sortPizza, searchPizza } = params
	const { data } = await axios.get(`${URL}${categoryPizzas}${sortPizza}${searchPizza}`)
	return data
})

const initialState = {
	items: [],
	status: '' //  panding, fulfilled, error ,
}

const pizzaSlice = createSlice({
	name: 'pizza',
	initialState,
	reducers: {
		setPizza: (state, action) => {
			state.items = action.payload;
		}
	},
	extraReducers: {
		[fetchPizza.pending]: (state) => {
			state.status = 'loading'
			state.items = []
		},
		[fetchPizza.fulfilled]: (state, action) => {
			state.items = action.payload
			state.status = 'success'
		},
		[fetchPizza.rejected]: (state) => {
			state.status = 'error'
			state.items = []
		}
	}
})

export const { setPizza } = pizzaSlice.actions
export const pizzaReducer = pizzaSlice.reducer