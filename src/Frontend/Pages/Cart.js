import React from "react";
import "../Styles/Cart.css";
import "../Styles/Home.css";
import Header from "../Components/HeaderComponents/Header";
import OrderArea from "../Components/Cart/OrderArea";
import CartInfo from "../Components/Cart/CartInfo";
import CartCard from "../Components/Cart/CartCard";
import { useCart } from "../Context/CartContext";

const Cart = () => {
	const { cart } = useCart();

	return (
		<div>
			<div class="cart-page-container">
				<header class="cart-page-header">
					<Header />
				</header>

				<div class="cart-side-bar">
					<div class="drawer margin-right-l margin-up">
						<OrderArea />
					</div>
				</div>

				<CartInfo />

				<div class="cart-page-content margin-left-l">
					{cart.map(product => (
						<CartCard key={product} product={product} />
					))}
				</div>

				<div class="cart-footer"></div>
			</div>
		</div>
	);
};

export default Cart;
