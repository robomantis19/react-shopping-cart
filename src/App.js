import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import data from './data';

// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';
import { ProductContext} from './contexts/ProductContext'; 
import { CartContext } from './contexts/CartContext'; 
import ShoppingCartItem from './components/ShoppingCart'; 
function App() {
	const [products] = useState(data);
	const [cart, setCart] = useState([]);

	const addItem = item => {
		// add the given item to the cart
		
		setCart([...cart, item])
		
	};
	const removeItem = Id => { 
		return setCart(cart.filter(input => (
			input.id !== Id	
		)))
		
	}
	console.log(cart);
	return (
		<div className="App">
			<CartContext.Provider value = {cart}>
				<Navigation cart={cart} />
			</CartContext.Provider>
			<ProductContext.Provider value = {{products, addItem}}>
				<Route exact path="/" component = {Products}/>
			</ProductContext.Provider>
			<CartContext.Provider value = {{cart, removeItem}}>
				<Route path="/cart" component = {ShoppingCart}/>
			</CartContext.Provider>

				{/* <Route path="/cart/:id" component = {ShoppingCartItem}/>  */}
		</div>
	);
}

export default App;
