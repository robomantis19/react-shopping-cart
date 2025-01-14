import React, { useContext } from 'react';
import { CartContext } from '../contexts/CartContext'; 
// Components
import Item from './ShoppingCartItem';


const ShoppingCart = () => {

	const { hist } = useContext(CartContext); 
	
	// const [hist, HistListHook] = useShoppingHistory('shopy', 'NoItems')
	// const [hist2, setHist2] = useState([]); 
	// let arr = []
	// arr.push(HistListHook(cart));
	// useEffect(() => { 
		  
	// 	  HistListHook(cart)
	// 	  setHist2([...hist2, hist]);
	// },[])
	
	// console.log(arr);
	// console.log('hist2', hist2);
	// console.log('hist', hist); 
	// console.log('cart' , cart);
	 const getCartTotal = () => {
		
		    return hist.reduce((acc, value) => {
				return acc + value.price;
			}, 0).toFixed(2) 
		
	};

	return (
		<div className="shopping-cart">
			{hist.map(item => (
				<Item key={item.id} {...item} id={item.id} />
			))}
			

			<div className="shopping-cart__checkout">
				<p>Total: ${getCartTotal()}</p>
				<button>Checkout</button>
			</div>
		</div>
	);
};

export default ShoppingCart;
