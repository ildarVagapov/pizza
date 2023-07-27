import { useEffect, useState } from "react"
import { URL } from "../api"
import { Categories } from "../components/Categoris"
import { Sort } from "../components/Sort"
import { Pizza } from "../components/Pizza"

export const Home = () => {
	const [items, setItems] = useState([])

	useEffect(() => {
		fetch(URL)
			.then(res => res.json())
			.then(data => setItems(data))
	}, [])

	return (
		<div className="container">
			<div className="content__top">
				<Categories />
				<Sort />
			</div>
			<h2 className="content__title">Все пиццы</h2>
			<div className="content__items">
				{items.map((item, i) => <Pizza key={i} {...item} />)}
			</div>
		</div>
	)
}