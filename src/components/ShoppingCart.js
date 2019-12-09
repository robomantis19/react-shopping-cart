import React, { useEffect, useContext } from 'react';
import { CartContext } from '../contexts/CartContext'; 
// Components
import Item from './ShoppingCartItem';
import { useShoppingHistory } from '../hooks/useShoppingHistory'; 
const ShoppingCart = () => {

	const {cart, removeItem} = useContext(CartContext); 
	// const [hist, HistListHook] = useShoppingHistory('shop2', 'NoItems')

	// useEffect(() => { 
		
	// 	  HistListHook(cart);
	// 		console.log("Cart stuff", cart);	
	// },[cart])
	
	 const getCartTotal = () => {
		
		    return cart.reduce((acc, value) => {
				return acc + value.price;
			}, 0).toFixed(2)
		
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
