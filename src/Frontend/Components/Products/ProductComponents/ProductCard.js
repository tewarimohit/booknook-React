import React, { useEffect, useState } from "react";
import Book from "../../../../Assets/book.jpg";
import { useCart } from "../../../Context/CartContext.js";
import { useWishlist } from "../../../Context/WishlistContext.js";

const ProductCard = ({ title, author, price }) => {
	const { toCartDispatch } = useCart();
	const { toWishlistDispatch } = useWishlist();

	return (
		<div className="card card-shadow">
			<div className="all-icon">
				<button
					className="heart-icon"
					title="Add To Wishlist"
					onClick={() =>
						toWishlistDispatch({ type: "ADD-TO-WISHLIST", payload: price })
					}
				>
					<i className="fa fa-heart"></i>
				</button>

				<button className="icons">
					<i className="material-icons share" title="Share">
						share
					</i>
				</button>

				<button className="icons">
					<i className="material-icons more" title="More Options">
						more_vert
					</i>
				</button>
			</div>
			<div className="card-header card-image">
				<img src={Book} alt="Book" srcset="" />
				<span className="std-font-two prime-color">{title}</span>
			</div>
			<span className="std-font-two para-m-font prime-color margin-left-l">
				- By {author}
			</span>
			<div className="card-body margin-left-l">
				₹ {price}
				<span className="margin-left-l para-s-font text-cut dark-text">
					{" "}
					₹ 900
				</span>
			</div>
			<div className="card-footer">
				<button className="para-m-font icon-buy">Buy Now</button>
				<button
					className="icon-btn cart-btn para-m-font"
					onClick={() =>
						toCartDispatch({ type: "ADD-TO-CART", payload: price })
					}
				>
					<i className="fa fa-shopping-cart fa-margin-r"></i>Add To cart
				</button>
			</div>
		</div>
	);
};

export default ProductCard;
