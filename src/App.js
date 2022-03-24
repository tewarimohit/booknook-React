import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Frontend/Pages/Home.js";
import Cart from "./Frontend/Pages/Cart.js";
import Products from "./Frontend/Pages/Products.js";
import Wishlist from "./Frontend/Pages/Wishlist.js";
import Login from "./Frontend/Pages/Login.js";
import Signup from "./Frontend/Pages/Signup.js";

function App() {
	return (
		<div className="App">
			<Routes>
				<Route path="/home" element={<Home />} />
				<Route path="/products" element={<Products />} />
				<Route path="/cart" element={<Cart />} />
				<Route path="/wishlist" element={<Wishlist />} />
				<Route path="/login" element={<Login />} />
				<Route path="/signup" element={<Signup />} />
			</Routes>
		</div>
	);
}

export default App;
