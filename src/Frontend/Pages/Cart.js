import React from "react";
import "../Styles/Cart.css";
import "../Styles/Home.css";
import Header from "../Components/HeaderComponents/Header";
import OrderArea from "../Components/Cart/OrderArea";
import CartInfo from "../Components/Cart/CartInfo";
import CartCard from "../Components/Cart/CartCard";
import { useCart } from "../Context/index";

const Cart = () => {
	const { cart } = useCart();

	return (
		<div>
			<div className="cart-page-container">
				<header className="cart-page-header">
					<Header />
				</header>

				<div className="cart-side-bar">
					<div className="drawer margin-right-l margin-up">
						<OrderArea />
					</div>
				</div>

				<CartInfo />

				<div className="cart-page-content margin-left-l">
					{cart.map(product => (
						<CartCard key={product} product={product} />
					))}
				</div>

				<div className="cart-footer"></div>
			</div>
		</div>
	);
};

export default Cart;
