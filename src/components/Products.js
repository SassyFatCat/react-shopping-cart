import React, {useContext} from 'react';
import {ProductContext} from '../contexts/ProductContext';

// Components
import Product from './Product';

const Products = () => {

const productContexts = useContext(ProductContext)

	return (
		<div className="products-container">
			{productContexts.products.map((product, index) => (
				<Product
					key={index}
					id={index}
					product={product}
					addItem={productContexts.addItem}
				/>
			))}
		</div>
	);
};

export default Products;
