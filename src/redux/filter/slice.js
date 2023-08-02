import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	search: '',
	categoryId: 0,
	sort: {
		name: 'популярные ', sortProperty: 'rating'
	},

}

const filterSlice = createSlice({
	name: 'filter',
	initialState,
	reducers: {
		setSearch: (state, action) => {
			state.search = action.payload
		},
		setCategoryId: (state, action) => {
			state.categoryId = action.payload
		},
		setSort: (state, action) => {
			state.sort = action.payload
		}
	}
})

export const { setSearch, setCategoryId, setSort } = filterSlice.actions
export const filterReducer = filterSlice.reducer