import React from "react";
import { useCart } from "../../Context/CartContext";
import { removeFromCart } from "../../Utilities/Cart-Utility";
import { useWishlist } from "../../Context/WishlistContext";
import { addToWishlist } from "../../Utilities/Wishlist-Utility";
import Book from "../../../Assets/books.jpg";

const CartCard = ({ product }) => {
	const { cart, setCart } = useCart();
	const { wishlist, setWishlist } = useWishlist();
	console.log(product);
	return (
		<div class="card cart-card card-shadow">
			<div class="cart-card-header cart-card-image">
				<img src={Book} alt="Book" srcset="" />
			</div>
			<div class="cart-card-info margin-left-l">
				<span class="std-font-two hd-m-font prime-color padding-top  margin-bottom-m">
					{product.title}
				</span>
				<span className="std-font-two para-m-font prime-color margin-left-l">
					- By {product.author}
				</span>
				<div class="card-body  margin-bottom-m">
					₹ {product.price}
					<span class="margin-left-l para-s-font text-cut dark-text margin-bottom-m">
						{" "}
						₹ 5000
					</span>
				</div>
				<span class=" para-m-font dark-text margin-bottom-s">50% off</span>
				<div class="quantity margin-bottom-m">
					<div class="  quantity">
						<h1 class="para-s-font">Quantity:</h1>
						<button class="q-btns margin-left-s">-</button>
						<div class=" para-m-font margin-left-s">5</div>
						<button class="q-btns margin-left-s">+</button>
					</div>
				</div>

				<button
					class="para-m-font icon-btn remove-btn "
					onClick={() => removeFromCart(product._id, setCart)}
				>
					Remove From Cart
				</button>
				<button
					class="icon-btn wishlist-btn para-m-font"
					onClick={() => {
						if (wishlist.find(item => item._id === product._id)) {
							removeFromCart(product._id, setCart);
						} else {
							addToWishlist(product, setWishlist);
							removeFromCart(product._id, setCart);
						}
					}}
				>
					<i class="fa fa-shopping-cart fa-margin-r"></i>Move To wishlist
				</button>
			</div>
		</div>
	);
};

export default CartCard;
