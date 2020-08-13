import React from 'react';

const Item = props => {
	return (
		<div className="shopping-cart_item">
			<img src={props.image} alt={`${props.title} book`} />


			<div>
				<h1>{props.title}</h1>
				<p>$ {props.price}</p>
				<button onClick={event => {
					event.preventDefault();
					props.removeBook(props.id)
				}}>Remove from cart</button>
			</div>
		</div>
	);
};

export default Item;
