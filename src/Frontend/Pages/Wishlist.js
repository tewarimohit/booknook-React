import React from "react";
import "../Styles/Wishlist.css";
import "../Styles/Home.css";
import Header from "../Components/HeaderComponents/Header";
import { useWishlist } from "../Context/WishlistContext";
import WishlistCard from "../Components/Wishlist/WishlistCard";

const Wishlist = () => {
	const { wishlist } = useWishlist();

	return (
		<div>
			<div class="wishlist-page-container">
				<header class="wishlist-page-header">
					<Header />
				</header>

				<div class="wishlist-info">
					<h1 class="hd-l-font std-font-two ">
						Items in My Wishlist({wishlist.length})
					</h1>
				</div>
				<div class="wishlist-page-content ">
					{wishlist.map(product => (
						<WishlistCard key={product} product={product} />
					))}
				</div>

				<div class="wishlist-footer"></div>
			</div>
		</div>
	);
};

export default Wishlist;
