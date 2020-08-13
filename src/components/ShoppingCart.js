import React, {useContext} from 'react';


// Components
import Item from './ShoppingCartItem';
import { CartContext } from '../contexts/CartContext';

const ShoppingCart = () => {

const cartContext = useContext(CartContext);

	const getCartTotal = () => {
		return cartContext.cart.reduce((acc, value) => {
			return acc + value.price;
		}, 0).toFixed(2);
	};

	return (
		<div className="shopping-cart">
			{cartContext.cart.map((item, index) => (
				<Item removeItem={cartContext.removeItem} id={index} key={index} {...item} />
			))}

			<div className="shopping-cart__checkout">
				<p>Total: ${getCartTotal()}</p>
				<button>Checkout</button>
			</div>
		</div>
	);
};

export default ShoppingCart;
