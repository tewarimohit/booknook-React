import React from "react";
import { useCart } from "../../Context/CartContext";

const CartInfo = () => {
	const { cart } = useCart();

	return (
		<div class="cart-info">
			<h1 class="hd-m-font std-font-two ">My cart ({cart.length})</h1>
		</div>
	);
};

export default CartInfo;
