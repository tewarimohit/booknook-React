import React, { createContext, useContext, useReducer } from "react";

const CartContext = createContext(null);

const itemsInCart = (state, action) => {
	if (action.type === "ADD-TO-CART") {
		return {
			...state,
			cartItems: state.cartItems + 1,
			totalAmount: state.totalAmount + action.payload,
			cartItemStyle: (state.cartItemStyle = "added-items"),
		};
	}
};

const CartProvider = ({ children }) => {
	const [cartState, toCartDispatch] = useReducer(itemsInCart, {
		cartItems: null,
		cartItemStyle: "none",
		totalAmount: 0,
	});

	return (
		<CartContext.Provider value={{ cartState, toCartDispatch }}>
			{children}
		</CartContext.Provider>
	);
};

const useCart = () => useContext(CartContext);

export { CartProvider, useCart };
