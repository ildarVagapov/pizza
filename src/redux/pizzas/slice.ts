import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { URL } from "../../api";
import axios from "axios";
import { Pizza, PizzaSliceState, SearchPizzaParams, Status } from "./types";


export const fetchPizza = createAsyncThunk<Pizza[], SearchPizzaParams>('pizza/FetchData', async (params) => {
	const { categoryPizzas, sortPizza, searchPizza } = params
	const { data } = await axios.get(`${URL}${categoryPizzas}${sortPizza}${searchPizza}`)
	return data
})

const initialState: PizzaSliceState = {
	fullPizza: null,
	items: [],
	status: Status.LOADING //  panding, fulfilled, error ,
}

const pizzaSlice = createSlice({
	name: 'pizza',
	initialState,
	reducers: {
		setPizza: (state, action: PayloadAction<Pizza[]>) => {
			state.items = action.payload;
		},
		setFullPizza: (state, action) => {
			state.fullPizza = action.payload
		}
	},
	extraReducers:
		(builder) => {
			builder.addCase(fetchPizza.pending, (state) => {
				state.status = Status.LOADING
				state.items = []
			})
			builder.addCase(fetchPizza.fulfilled, (state, action) => {
				state.items = action.payload
				state.status = Status.SUCCESS
			})
			builder.addCase(fetchPizza.rejected, (state) => {
				state.status = Status.ERROR
				state.items = []
			})
		},
})

export const { setPizza, setFullPizza } = pizzaSlice.actions
export const pizzaReducer = pizzaSlice.reducer