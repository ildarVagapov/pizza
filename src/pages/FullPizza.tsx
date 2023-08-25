import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setFullPizza } from "../redux/pizzas/slice";

export const FullPizza: React.FC = () => {
	// const pizza = useSelector(state => state.pizza.fullPizza)
	// const dispatch = useDispatch()
	const [pizza, setPizza] = useState<{
		imageUrl: string,
		title: string,
		price: number,
	}>()

	const { id } = useParams();
	const navigate = useNavigate();

	useEffect(() => {
		async function fetchPizza() {
			try {
				const { data } = await axios.get('https://64c271c9eb7fd5d6ebcfe085.mockapi.io/item/' + id);
				// dispatch(setFullPizza(data))
				setPizza(data)
			} catch (error) {
				alert('Ошибка при получении пиццы!');
				navigate('/');
			}
		}

		fetchPizza();
	}, []);

	if (!pizza) {
		// return <>Загрузка...</>;
		return 'Загрузка...'
	}

	return (
		<div className="container">
			<img src={pizza.imageUrl} />
			<h2>{pizza.title}</h2>
			<h4>{pizza.price} ₽</h4>
			<Link to="/">
				<button className="button button--outline button--add">
					<span>Назад</span>
				</button>
			</Link>
		</div>
	);
};
