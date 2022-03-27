import React from "react";
import { useCart } from "../../Context/index";

const CartInfo = () => {
	const { cart } = useCart();

	return (
		<div className="cart-info">
			<h1 className="hd-m-font std-font-two ">My cart ({cart.length})</h1>
		</div>
	);
};

export default CartInfo;
