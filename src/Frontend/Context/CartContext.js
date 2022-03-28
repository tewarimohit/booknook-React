import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import { getToken } from "../Utilities/Wishlist-Utility";
import { useAuth } from "./AuthContext";

const CartContext = createContext(null);

const CartProvider = ({ children }) => {
	const [cart, setCart] = useState([]);
	const { authState } = useAuth();

	useEffect(() => {
		if (!authState.isAuth) return;

		(async () => {
			const response = await axios.get("/api/user/cart", {
				headers: {
					authorization: getToken(),
				},
			});
			console.log(response);
			setCart(response.data.cart);
		})();
	}, []);
	console.log(cart);
	return (
		<CartContext.Provider value={{ cart, setCart }}>
			{children}
		</CartContext.Provider>
	);
};

const useCart = () => useContext(CartContext);

export { CartProvider, useCart };
