import axios from "axios";
import React, { createContext, useContext, useState, useEffect } from "react";
import { getToken } from "../Utilities/Wishlist-Utility.js";
import { useAuth } from "../Context/AuthContext.js";

const WishlistContext = createContext();

const WishlistProvider = ({ children }) => {
	const { authState } = useAuth();
	const [wishlist, setWishlist] = useState([]);

	useEffect(() => {
		if (!authState.isAuth) return;

		(async () => {
			try {
				const response = await axios.get("/api/user/wishlist", {
					headers: {
						authorization: getToken(),
					},
				});
				setWishlist(response.data.wishlist);
				console.log(response.data);
			} catch (error) {
				console.log(error);
			}
		})();
	}, []);
	
	return (
		<WishlistContext.Provider value={{ wishlist, setWishlist }}>
			{children}
		</WishlistContext.Provider>
	);
};

const useWishlist = () => useContext(WishlistContext);

export { WishlistProvider, useWishlist };
