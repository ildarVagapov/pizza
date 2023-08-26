import { useDispatch, useSelector } from "react-redux"
import { setCategoryId } from "../redux/filter/slice"
import { selectCategoryId } from "../redux/filter/selectors"
import React from "react"

export const Categories: React.FC = React.memo(() => {
	const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']
	const categoryId = useSelector(selectCategoryId)
	const dispatch = useDispatch()

	const itemCategoris = categories.map((category, i) => (
		<li
			key={i}
			onClick={() => dispatch(setCategoryId(i))}
			className={categoryId === i ? 'active' : ''}
		>
			{category}
		</li>
	))

	return (
		<div className="categories" >
			<ul>
				{itemCategoris}
			</ul>
		</div >
	)
})