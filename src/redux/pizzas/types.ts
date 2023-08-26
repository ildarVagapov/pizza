export type Pizza = {
	id: string;
	title: string;
	price: number;
	imageUrl: string;
	sizes: number[];
	types: number[];
	rating: number;
};

export enum Status {
	LOADING = 'loading',
	SUCCESS = 'success',
	ERROR = 'error',
}

export type SearchPizzaParams = {
	categoryPizzas: string,
	sortPizza: string,
	searchPizza: string
};

export interface PizzaSliceState {
	items: Pizza[];
	status: Status;
	fullPizza: null,
}