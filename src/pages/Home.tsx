import { useEffect } from "react"
import { Categories } from "../components/Categoris"
import { Sort } from "../components/Sort"
import { Pizza } from "../components/Pizza"
import { Skeleton } from "../components/Skeleton"
import { useSelector } from "react-redux"
import { fetchPizza } from "../redux/pizzas/slice"
import { selectPizza } from "../redux/pizzas/selectorls"
import { selectFilter } from "../redux/filter/selectors"
import { useAppDispatch } from "../redux/store"


export const Home: React.FC = () => {

	const { categoryId, sort, search } = useSelector(selectFilter)
	const { status, items } = useSelector(selectPizza)
	const dispatch = useAppDispatch()

	const getPizza = () => {
		const categoryPizzas = categoryId > 0 ? `category=${categoryId}` : ''
		const sortPizza = `&sortBy=${sort.sortProperty}&order=asc`
		const searchPizza = `&search=${search}`
		dispatch(fetchPizza({ categoryPizzas, sortPizza, searchPizza }))
	}

	useEffect(() => {
		getPizza()
	}, [categoryId, sort, search])

	return (
		<div className="container">
			<div className="content__top">
				<Categories />
				<Sort />
			</div>
			<h2 className="content__title">Все пиццы</h2>
			<div className="content__items">
				{status === 'loading' && Array.from({ length: 8 }).map((_, i) => <Skeleton key={i} />)}
				{status === 'success' && items.map((item: any, i: number) => <Pizza  {...item} key={i} />)}
				{status === 'error' && <h5>error</h5>}
			</div>
		</div>
	)
}