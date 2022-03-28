import React from "react";
import { useCart, useWishlist } from "../../Context/index";
import {
	removeFromCart,
	cartQuantityHandler,
	orderArea,
} from "../../Utilities/Cart-Utility";
import { addToWishlist } from "../../Utilities/Wishlist-Utility";


const CartCard = ({ product }) => {
	const { cart, setCart } = useCart();
	const { wishlist, setWishlist } = useWishlist();
	const { discountPercent } = orderArea(cart);

	return (
		<div className="card cart-card card-shadow">
			<div className="cart-card-header cart-card-image">
				<img src={product.imageCart} alt="Book" srcset="" />
			</div>
			<div className="cart-card-info margin-left-l">
				<span className="std-font-two hd-m-font prime-color padding-top  margin-bottom-m">
					{product.title}
				</span>
				<span classNameName="std-font-two para-m-font prime-color margin-left-l">
					- By {product.author}
				</span>
				<div className="card-body  margin-bottom-m">
					₹ {product.price}
					<span className="margin-left-l para-s-font text-cut dark-text margin-bottom-m">
						{" "}
						₹ {product.discount}
					</span>
				</div>
				<span className=" para-m-font dark-text margin-bottom-s">20% off</span>
				<div className="quantity margin-bottom-m">
					<div className="  quantity">
						<h1 className="para-s-font">Quantity:</h1>
						<button
							className="q-btns margin-left-s"
							disabled={product.qty <= 1}
							onClick={() =>
								cartQuantityHandler(product._id, setCart, "decrement")
							}
						>
							<strong>-</strong>
						</button>

						<div className=" para-m-font margin-left-s">{product.qty}</div>
						<button
							className="q-btns margin-left-s"
							onClick={() =>
								cartQuantityHandler(product._id, setCart, "increment")
							}
						>
							<strong>+</strong>
						</button>
					</div>
				</div>

				<button
					className="para-m-font icon-btn remove-btn "
					onClick={() => removeFromCart(product._id, setCart)}
				>
					Remove From Cart
				</button>
				<button
					className="icon-btn wishlist-btn para-m-font"
					onClick={() => {
						if (wishlist.find(item => item._id === product._id)) {
							removeFromCart(product._id, setCart);
						} else {
							addToWishlist(product, setWishlist);
							removeFromCart(product._id, setCart);
						}
					}}
				>
					<i className="fa fa-shopping-cart fa-margin-r"></i>Move To wishlist
				</button>
			</div>
		</div>
	);
};

export default CartCard;
