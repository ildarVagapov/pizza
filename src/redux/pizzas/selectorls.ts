type Item = {
	id: string,
	title: string,
	imageUrl: string,
	types: [],
	sizes: number[],
	category: number,
	price: number,
	rating: number
}

interface RootState {
	pizza: {
		items: Item[],
		fullPizza: null,
		status: string,
	}
}

export const selectPizza = (state:RootState) => state.pizza

// export const selectItems = state => state.pizza.items
// export const selectStatus = state => state.pizza.status


