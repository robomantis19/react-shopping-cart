import React, { useContext } from 'react';
import { CartContext } from '../contexts/CartContext'; 
// Components
import Item from './ShoppingCartItem';

const ShoppingCart = () => {

	const {cart, removeItem} = useContext(CartContext); 
	 const getCartTotal = () => {
		// if(props.cart.length > 0){
		    return cart.reduce((acc, value) => {
				return acc + value.price;
			}, 0).toFixed(2)
		// } else{ 
		// 	return false;
		
		// }
	};

	return (
		<div className="shopping-cart">
			{cart.map(item => {
				console.log("ids", item.id)
				return <Item key={item.id} {...item} id={item.id} />
			})}

			<div className="shopping-cart__checkout">
				<p>Total: ${getCartTotal()}</p>
				<button>Checkout</button>
			</div>
		</div>
	);
};

export default ShoppingCart;
