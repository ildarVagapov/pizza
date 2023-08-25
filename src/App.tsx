import './scss/app.scss'
import { Header } from './components/Header';
import { Home } from './pages/Home';
import { Route, Routes } from 'react-router-dom';
import { NotFound } from './pages/NotFound';
import { Cart } from './pages/Cart';
import { FullPizza } from './pages/FullPizza';

export const App: React.FC = () => {
	return (
		< div className="App" >
			<div className="wrapper">
				<Header />
				<div className="content">
					<Routes>
						<Route path='/' element={<Home />} />
						<Route path='/cart' element={<Cart />} />
						<Route path='/fullpizza/:id' element={<FullPizza />} />
						<Route path='*' element={<NotFound />} />
					</Routes>
				</div>
			</div>
		</ div>
	);
}


