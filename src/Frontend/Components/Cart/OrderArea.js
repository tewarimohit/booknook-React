import React from "react";
import { useCart } from "./../../Context/index";
import { orderArea } from "../../Utilities/Cart-Utility";

const OrderArea = () => {
	const { cart } = useCart();
	console.log(cart);
	if (cart.length === 0) {
		return (
			<h2 className="std-font-two hd-m-font prime-color">Your Cart is Empty</h2>
		);
	}

	const { total, priceWithQuantity, discountedPrice, deliveryCharges } =
		orderArea(cart);

	return (
		<div className="filter-area column-flex-wrap">
			<h1 className="std-font-two hd-m-font prime-color ">Price Details</h1>
			<hr className="divider-big" />

			<div className="price-area ">
				<h1 className="std-font-two para-s-font margin-bottom-s ">
					Price({cart.qty}Books)
				</h1>
				<h1 className="std-font-two para-s-font margin-auto margin-bottom-s">
					₹ {priceWithQuantity}
				</h1>
			</div>
			<div className="price-area ">
				<h1 className="std-font-two para-s-font margin-bottom-s">Discount</h1>
				<h1 className="std-font-two para-s-font margin-auto margin-bottom-s">
					- ₹ {discountedPrice}
				</h1>
			</div>
			<div className="price-area ">
				<h1 className="std-font-two para-s-font margin-bottom-s">
					Delivery Charges
				</h1>
				<h1 className="std-font-two para-s-font margin-auto margin-bottom-s">
					₹{deliveryCharges}
				</h1>
			</div>
			<hr className="divider-big" />
			<div className="price-area ">
				<h1 className="std-font-two para-m-font  ">Total</h1>
				<h1 className="std-font-two para-m-font margin-auto"> ₹ {total}</h1>
			</div>

			<hr className="divider-big " />

			<span className="margin-bottom-s "></span>
			<div className="price-area">
				<h1 className="std-font-two para-s-font margin-bottom-s ">
					You will save ₹ {discountedPrice} on this order
				</h1>
			</div>
			<div className="order-btn">
				<button className="para-m-font place-order">Place Order</button>
			</div>
		</div>
	);
};

export default OrderArea;
