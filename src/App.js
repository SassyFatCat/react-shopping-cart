import React, { useState} from 'react';
import { Route } from 'react-router-dom';
import data from './data';
import {useLocalStorage} from './components/useLocalStorage';

import {ProductContext} from './contexts/ProductContext';
import {CartContext} from './contexts/CartContext';

// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';

function App() {
	const [products] = useState(data);
	const [bookCart, addBook, removeBook] = useLocalStorage();

	return (
		<div className="App">
			<CartContext.Provider value={bookCart}>
			<Navigation />
			</CartContext.Provider>

			{/* Routes */}
			<ProductContext.Provider value={{products, addBook}}>
			<Route exact path="/">
				<Products />
			</Route>
			</ProductContext.Provider>

			<CartContext.Provider value={{bookCart, removeBook}}>
			<Route path="/cart">
				<ShoppingCart />
			</Route>
			</CartContext.Provider>
		</div>
	);
}

export default App;
