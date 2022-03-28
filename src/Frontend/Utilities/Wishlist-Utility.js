import axios from "axios";


const getToken = () => localStorage.getItem("token");

const addToWishlist = async (product, setWishlist) => {
	

	try {
		const response = await axios.post(
			"/api/user/wishlist",
			{ product },
			{
				headers: {
					authorization: getToken(),
				},
			}
		);

		
		setWishlist(response.data.wishlist);
	} catch (error) {
		console.log(error);
	}
};

const removeFromWishlist = async (id, setWishlist) => {
	try {
		const response = await axios.delete(`/api/user/wishlist/${id}`, {
			headers: {
				authorization: getToken(),
			},
		});

		setWishlist(response.data.wishlist);
	} catch (err) {
		console.log(err);
	}
};

export { addToWishlist, removeFromWishlist, getToken };
