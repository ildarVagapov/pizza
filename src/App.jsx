import './scss/app.scss'
import { Categories } from './components/Categoris';
import { Header } from './components/Header';
import { Sort } from './components/Sort';
import { Pizza } from './components/Pizza';
import pizzaArr from './server/db.json'

export const App = () => {
	return (
		<div className="App">
			<div className="wrapper">
				<Header />
				<div className="content">
					<div className="container">
						<div className="content__top">
							<Categories />
							<Sort />
						</div>
						<h2 className="content__title">Все пиццы</h2>
						<div className="content__items">
							{pizzaArr.map((pizza, i) => <Pizza key={i} {...pizza} />)}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}


