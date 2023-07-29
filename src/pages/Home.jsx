import { useEffect, useState } from "react"
import { URL, sortPrice } from "../api"
import { Categories } from "../components/Categoris"
import { Sort } from "../components/Sort"
import { Pizza } from "../components/Pizza"
import { Skeleton } from "../components/Skeleton"
import { useSelector } from "react-redux"

export const Home = () => {
	const [items, setItems] = useState([])
	const [loading, setLoading] = useState(true)
	const categoryId = useSelector((state) => state.filter.categoryId)

	useEffect(() => {
		setLoading(true)
		fetch(`${URL}?category=${categoryId === 0 ? '' : categoryId}`)
			.then(res => res.json())
			.then(data => {
				setItems(data)
				setLoading(false)
			})
	}, [categoryId])

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
						: items.map((item, i) => <Pizza key={i} {...item} />)
				}
			</div>
		</div>
	)
}