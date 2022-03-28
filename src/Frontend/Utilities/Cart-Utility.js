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

const cartQuantityHandler = async (id, setCart, increaseOrDecrease) => {
	try {
		const response = await axios.post(
			`/api/user/cart/${id}`,
			{
				action: {
					type: increaseOrDecrease,
				},
			},
			{
				headers: {
					authorization: getToken(),
				},
			}
		);
		console.log(response);
		setCart(response.data.cart);
	} catch (err) {
		console.log(err);
	}
};

const orderArea = cart => {
	let discountPercent = cart.map(item => (item.discount / item.price) * 100);

	let newPriceReducer = (acc, curr) =>
		acc + Number(curr.qty) * Number(curr.price);
	let priceWithQuantity = cart.reduce(newPriceReducer, 0);

	let discountReducer = (acc, curr) =>
		acc + Number(curr.qty) * Number(curr.discount);
	let discountedPrice = cart.reduce(discountReducer, 0);

	let deliveryCharges = 399;

	let total = priceWithQuantity + deliveryCharges - discountedPrice;

	return {
		total,
		priceWithQuantity,
		discountedPrice,
		discountPercent,
		deliveryCharges,
	};
};

export { addToCart, removeFromCart, cartQuantityHandler, orderArea };
