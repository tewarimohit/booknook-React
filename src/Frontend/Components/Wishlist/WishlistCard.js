import React from "react";
import { removeFromWishlist } from "../../Utilities/Wishlist-Utility";
import { addToCart } from "../../Utilities/Cart-Utility";
import { useCart, useWishlist } from "../../Context/index";

const WishlistCard = ({ product }) => {
	const { wishlist, setWishlist } = useWishlist();
	const { cart, setCart } = useCart();

	return (
		<div className="card card-shadow">
			<div className="all-icon">
				<button
					className="heart-icon"
					title="Remove From Wishlist"
					onClick={() => removeFromWishlist(product._id, setWishlist)}
				>
					<i className="fa fa-heart-crack"></i>
				</button>
			</div>
			<div className="card-header card-image">
				<img src={product.imageProduct} alt="Book" srcset="" />

				<div className="wishlist-card-footer">
					<span className="std-font-two prime-color margin-bottom-m">
						{product.title}
					</span>
					<span className="std-font-two para-m-font prime-color margin-left-l">
						- By {product.author}
					</span>
					<div className="wishlist-card-body prime-color margin-bottom-m ">
						₹ {product.price}
						<span className="margin-left-l para-s-font text-cut dark-text">
							{" "}
							₹ {product.discount}
						</span>
					</div>

					<button
						className="icon-btn wishlist-cart-btn para-m-font"
						onClick={() => {
							if (cart.find(item => item._id === product._id)) {
								removeFromWishlist(product._id, setWishlist);
							} else {
								addToCart(product, setCart);
								removeFromWishlist(product._id, setWishlist);
							}
						}}
					>
						<i className="fa fa-shopping-cart fa-margin-r"></i>Move To cart
					</button>
				</div>
			</div>
		</div>
	);
};

export default WishlistCard;
