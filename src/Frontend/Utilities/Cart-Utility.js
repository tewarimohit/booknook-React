import axios from "axios";
import { getToken } from "./Wishlist-Utility";

const addToCart = async (product, setCart) => {
	try {
		const response = await axios.post(
			"/api/user/cart",
			{ product },
			{
				headers: {
					authorization: getToken(),
				},
			}
		);
		console.log(response.data);
		setCart(response.data.cart);
	} catch (error) {
		console.log(error);
	}
};

const removeFromCart = async (id, setCart) => {
	try {
		const response = await axios.delete(`/api/user/cart/${id}`, {
			headers: {
				authorization: getToken(),
			},
		});

		setCart(response.data.cart);
	} catch (err) {
		console.log(err);
	}
};

export { addToCart, removeFromCart };
