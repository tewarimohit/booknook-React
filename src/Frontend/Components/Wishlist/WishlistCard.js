import React from "react";
import Book from "../../../Assets/book.jpg";
import { useWishlist } from "../../Context/WishlistContext";
import { removeFromWishlist } from "../../Utilities/Wishlist-Utility";
import { addToCart } from "../../Utilities/Cart-Utility";
import { useCart } from "../../Context/CartContext";

const WishlistCard = ({ product }) => {
	const { wishlist, setWishlist } = useWishlist();
	const { cart, setCart } = useCart();

	return (
		<div class="card card-shadow">
			<div class="all-icon">
				<button
					class="heart-icon"
					title="Remove From Wishlist"
					onClick={() => removeFromWishlist(product._id, setWishlist)}
				>
					<i class="fa fa-heart-crack"></i>
				</button>
			</div>
			<div class="card-header card-image">
				<img src={Book} alt="Book" srcset="" />

				<div class="wishlist-card-footer">
					<span class="std-font-two prime-color margin-bottom-m">
						{product.title}
					</span>
					<span className="std-font-two para-m-font prime-color margin-left-l">
						- By {product.author}
					</span>
					<div class="wishlist-card-body prime-color margin-bottom-m ">
						₹ {product.price}
					</div>

					<button
						class="icon-btn wishlist-cart-btn para-m-font"
						onClick={() => {
							if (cart.find(item => item._id === product._id)) {
								removeFromWishlist(product._id, setWishlist);
							} else {
								addToCart(product, setCart);
								removeFromWishlist(product._id, setWishlist);
							}
						}}
					>
						<i class="fa fa-shopping-cart fa-margin-r"></i>Move To cart
					</button>
				</div>
			</div>
		</div>
	);
};

export default WishlistCard;
