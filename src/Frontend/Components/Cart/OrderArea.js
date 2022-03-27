import React from "react";

const OrderArea = () => {
	return (
		<div class="filter-area column-flex-wrap">
			<h1 class="std-font-two hd-m-font prime-color ">Price Details</h1>
			<hr class="divider-big" />

			<div class="price-area ">
				<h1 class="std-font-two para-s-font margin-bottom-s ">Price(2items)</h1>
				<h1 class="std-font-two para-s-font margin-auto margin-bottom-s">
					₹4999
				</h1>
			</div>
			<div class="price-area ">
				<h1 class="std-font-two para-s-font margin-bottom-s">Discount</h1>
				<h1 class="std-font-two para-s-font margin-auto margin-bottom-s">
					- ₹1999
				</h1>
			</div>
			<div class="price-area ">
				<h1 class="std-font-two para-s-font margin-bottom-s">
					Delivery Charges
				</h1>
				<h1 class="std-font-two para-s-font margin-auto margin-bottom-s">
					₹399
				</h1>
			</div>
			<hr class="divider-big" />
			<div class="price-area ">
				<h1 class="std-font-two para-m-font  ">Total</h1>
				<h1 class="std-font-two para-m-font margin-auto">₹3499</h1>
			</div>

			<hr class="divider-big " />

			<span class="margin-bottom-s "></span>
			<div class="price-area">
				<h1 class="std-font-two para-s-font margin-bottom-s ">
					You will save ₹1999 on this order
				</h1>
			</div>
			<div class="order-btn">
				<button class="para-m-font place-order">Place Order</button>
			</div>
		</div>
	);
};

export default OrderArea;
