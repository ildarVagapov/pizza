interface RootState {
	filter: {
		search: string,
		categoryId: number,
		sort: { name: string, sortProperty: string },
	}
}

export const selectCategoryId = (state: RootState) => state.filter.categoryId
export const selectSort = (state: RootState) => state.filter.sort
export const selectSearch = (state: RootState) => state.filter.search
export const selectFilter = (state: RootState) => state.filter