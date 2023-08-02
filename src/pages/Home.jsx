import { useEffect, useState } from "react"
import { URL } from "../api"
import { Categories } from "../components/Categoris"
import { Sort } from "../components/Sort"
import { Pizza } from "../components/Pizza"
import { Skeleton } from "../components/Skeleton"
import { useDispatch, useSelector } from "react-redux"
import { setPizza } from "../redux/pizzas/slice"

export const Home = () => {
	const [loading, setLoading] = useState(true)
	const pizza = useSelector(state => state.pizza.items)
	const categoryId = useSelector((state) => state.filter.categoryId)
	const sort = useSelector(state => state.filter.sort)
	const search = useSelector(state => state.filter.search)
	const categoryPizzas = categoryId > 0 ? `category=${categoryId}` : ''
	const sortPizza = `&sortBy=${sort.sortProperty}&order=asc`
	const searchPizza = `&search=${search}`
	const dispatch = useDispatch()

	useEffect(() => {
		setLoading(true)
		fetch(`${URL}${categoryPizzas}${sortPizza}${searchPizza}`)
			.then(res => res.json())
			.then(data => {
				dispatch(setPizza(data))
				setLoading(false)
			})
	}, [categoryId, sort, searchPizza])

	return (
		<div className="container">
			<div className="content__top">
				<Categories />
				<Sort />
			</div>
			<h2 className="content__title">Все пиццы</h2>
			<div className="content__items">
				{
					loading
						? Array.from({ length: 8 }).map((_, i) => <Skeleton key={i} />)
						: pizza.map((item, i) => <Pizza key={i} {...item} />)
				}
			</div>
		</div>
	)
}