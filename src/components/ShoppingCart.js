import React, {useContext} from 'react';


// Components
import Item from './ShoppingCartItem';
import { CartContext } from '../contexts/CartContext';

const ShoppingCart = () => {

const cartContext = useContext(CartContext);

	const getCartTotal = () => {
		return cartContext.bookCart.reduce((acc, value) => {
			return acc + value.price;
		}, 0).toFixed(2);
	};

	return (
		<div className="shopping-cart">
			{cartContext.bookCart.map((item, index) => (
				<Item removeBook={cartContext.removeBook} key={index} {...item} />
			))}

			<div className="shopping-cart__checkout">
				<p>Total: ${getCartTotal()}</p>
				<button>Checkout</button>
			</div>
		</div>
	);
};

export default ShoppingCart;
