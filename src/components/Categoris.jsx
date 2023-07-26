import { useState } from "react"


export const Categories = () => {
	const [activeIndex, setActiveIndex] = useState(0)
	const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']

	const handleClick = (index) => {
		setActiveIndex(index)
	}

	const itemCategoris = categories.map((category, index) => (
		<li key={index} onClick={() => handleClick(index)} className={activeIndex === index ? 'active' : ''} >{category}</li>
	))

	return (
		<div className="categories">
			<ul>
				{itemCategoris}
			</ul>
		</div>
	)
}