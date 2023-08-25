import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { setItems } from "../redux/cart/slice"
import { Link } from "react-router-dom"

type PizzaProps = {
	id: string,
	title: string,
	imageUrl: string,
	types: [],
	sizes: number[],
	category: number,
	price: number,
	rating: number
}
export const Pizza: React.FC<PizzaProps> = (props) => {
	const typeName = ['Тонкое', 'Традиционное']
	const [activeSizes, setActiveSizes] = useState(0)
	const [activeTypes, setActiveTypes] = useState(null)

	const dispatch = useDispatch()
	return (
		<div className="pizza-block">
			<Link to={`/fullpizza/${props.id}`}>
				<img
					className="pizza-block__image"
					src={props.imageUrl}
					alt={props.title}
				/>
				<h4 className="pizza-block__title">{props.title}</h4>
			</Link>
			<div className="pizza-block__selector">
				<ul>
					{props.types.map((i) => {
						return (
							<li key={i} onClick={() => setActiveTypes(i)} className={activeTypes === i ? 'active' : ''}>{typeName[i]}</li>
						)
					})}
				</ul>
				<ul>
					{
						props.sizes.map((size, i) => {
							return (
								<li key={i} onClick={() => setActiveSizes(i)} className={activeSizes === i ? 'active' : ''} >{size}</li>
							)
						})
					}
				</ul>
			</div>
			<div className="pizza-block__bottom">
				<div className="pizza-block__price">{props.price} р</div>
				<div onClick={() => dispatch(setItems(props))} className="button button--outline button--add">
					<svg
						width="12"
						height="12"
						viewBox="0 0 12 12"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
							fill="white"
						/>
					</svg>
					<span >Добавить</span>
					<i>0</i>
				</div>
			</div>
		</div>
	)
}