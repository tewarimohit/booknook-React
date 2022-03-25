import React, { createContext, useContext, useReducer } from "react";

const WishlistContext = createContext(null);

const itemsInWishlist = (state, action) => {
	if (action.type === "ADD-TO-WISHLIST") {
		return {
			...state,
			wishlistItems: state.wishlistItems + 1,
			totalAmount: state.totalAmount + action.payload,
			wishlistItemStyle: (state.wishlistItemStyle = "added-items"),
		};
	}
};

const WishlistProvider = ({ children }) => {
	const [wishlistState, toWishlistDispatch] = useReducer(itemsInWishlist, {
		wishlistItems: null,
		wishlistItemStyle: "none",
		totalAmount: 0,
	});

	return (
		<WishlistContext.Provider value={{ wishlistState, toWishlistDispatch }}>
			{children}
		</WishlistContext.Provider>
	);
};

const useWishlist = () => useContext(WishlistContext);

export { WishlistProvider, useWishlist };
