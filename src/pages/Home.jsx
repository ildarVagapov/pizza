import { useEffect, useState } from "react"
import { URL } from "../api"
import { Categories } from "../components/Categoris"
import { Sort } from "../components/Sort"
import { Pizza } from "../components/Pizza"
import { Skeleton } from "../components/Skeleton"
import { useDispatch, useSelector } from "react-redux"
import { setPizza } from "../redux/pizzas/slice"
import { selectCategoryId, selectSearch, selectSort } from "../redux/filter/selectors"
import { selectPizza } from "../redux/pizzas/selectorls"
import axios from "axios"

export const Home = () => {
	const [loading, setLoading] = useState(true)
	const pizza = useSelector(selectPizza)
	const categoryId = useSelector(selectCategoryId)
	const sort = useSelector(selectSort)
	const search = useSelector(selectSearch)
	const categoryPizzas = categoryId > 0 ? `category=${categoryId}` : ''
	const sortPizza = `&sortBy=${sort.sortProperty}&order=asc`
	const searchPizza = `&search=${search}`
	const dispatch = useDispatch()


	useEffect(() => {
		setLoading(true)
		axios.get(`${URL}${categoryPizzas}${sortPizza}${searchPizza}`)
			.then(res => {
				dispatch(setPizza(res.data))
				setLoading(false)
			})
	}, [categoryPizzas, sortPizza, searchPizza])


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