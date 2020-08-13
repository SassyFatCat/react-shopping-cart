import React, { useState, useEffect} from 'react';
import { Route } from 'react-router-dom';
import data from './data';

import {ProductContext} from './contexts/ProductContext';
import {CartContext} from './contexts/CartContext';

// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';

const initialLocalCart = [];
const getFromLocalStorage = () => {
if (localStorage.getItem('cart')) {
	return JSON.parse(localStorage.getItem('cart'))
}
else {
	return []
}
} 

function App() {
	const [products] = useState(data);
	const [cart, setCart] = useState(getFromLocalStorage);

	const addItem = item => {
	setCart([
		...cart,
		item
	]);

	setToLocalStorage(item)
	};

	const removeItem = (id) => {
		setCart(cart.filter(item => item.id !== id));
		const localCart = JSON.parse(localStorage.getItem('cart'));
		localStorage.setItem('cart', JSON.stringify(localCart.filter(item => item.id !== id)))
	}
	
	const setToLocalStorage = (item) => {
	if (localStorage.getItem('cart')) {
		const localCart = JSON.parse(localStorage.getItem('cart'));
		localCart.push(item);
		localStorage.setItem('cart', JSON.stringify(localCart))
	}
	else {
		initialLocalCart.push(item);
		localStorage.setItem('cart', JSON.stringify(initialLocalCart))
	}
	}

	return (
		<div className="App">
			<CartContext.Provider value={cart}>
			<Navigation />
			</CartContext.Provider>

			{/* Routes */}
			<ProductContext.Provider value={{products, addItem}}>
			<Route exact path="/">
				<Products />
			</Route>
			</ProductContext.Provider>

			<CartContext.Provider value={{cart, removeItem}}>
			<Route path="/cart">
				<ShoppingCart />
			</Route>
			</CartContext.Provider>
		</div>
	);
}

export default App;
