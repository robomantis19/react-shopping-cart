import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import data from './data';

// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';
import { ProductContext} from './contexts/ProductContext'; 
import { CartContext } from './contexts/CartContext'; 
import { useShoppingHistory } from './hooks/useShoppingHistory';

function App() {
	const [products] = useState(data);
	const [cart, setCart] = useState([]);
	const [hist, HistListHook] = useShoppingHistory('books', [])

	const addItem = item => {
		// add the given item to the cart
		
		// setCart([...cart, item])
		HistListHook([...cart, item])
		setCart([...cart, item])
	};
	
		
			// HistListHook(cart)
	 
	console.log('hist', hist);
	
	const removeItem = Id => { 
		return HistListHook(hist.filter(input => (
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
			<CartContext.Provider value = {{hist, removeItem}}>
				<Route path="/cart" component = {ShoppingCart}/>
			</CartContext.Provider>

				{/* <Route path="/cart/:id" component = {ShoppingCartItem}/>  */}
		</div>
	);
}

export default App;
