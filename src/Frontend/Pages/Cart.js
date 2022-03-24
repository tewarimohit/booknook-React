import React from "react";
import "../Styles/Cart.css";
import "../Styles/Home.css";
import { Link } from "react-router-dom";
import Header from "../Components/HeaderComponents/Header";
import Book from "../../Assets/books.jpg";

const Cart = () => {
	return (
		<div>
			<div class="cart-page-container">
				<header class="cart-page-header">
					<Header />
				</header>

				<div class="cart-side-bar">
					<div class="drawer margin-right-l margin-up">
						<div class="filter-area column-flex-wrap">
							<h1 class="std-font-two hd-m-font prime-color ">Price Details</h1>
							<hr class="divider-big" />

							<div class="price-area ">
								<h1 class="std-font-two para-s-font margin-bottom-s ">
									Price(2items)
								</h1>
								<h1 class="std-font-two para-s-font margin-auto margin-bottom-s">
									₹4999
								</h1>
							</div>
							<div class="price-area ">
								<h1 class="std-font-two para-s-font margin-bottom-s">
									Discount
								</h1>
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
					</div>
				</div>
				<div class="cart-info">
					<h1 class="hd-m-font std-font-two ">My cart (2)</h1>
				</div>

				<div class="cart-page-content margin-left-l">
					<div class="card cart-card card-shadow">
						<div class="cart-card-header cart-card-image">
							<img src={Book} alt="Book" srcset="" />
						</div>
						<div class="cart-card-info margin-left-l">
							<span class="std-font-two hd-m-font prime-color padding-top  margin-bottom-m">
								Beautiful Books
							</span>

							<div class="card-body  margin-bottom-m">
								₹ 2500{" "}
								<span class="margin-left-l para-s-font text-cut dark-text margin-bottom-m">
									{" "}
									₹ 5000
								</span>
							</div>
							<span class=" para-m-font dark-text margin-bottom-s">
								50% off
							</span>
							<div class="quantity margin-bottom-m">
								<div class="  quantity">
									<h1 class="para-s-font">Quantity:</h1>
									<button class="q-btns margin-left-s">-</button>
									<input class="q-input margin-left-s" type="number" />
									<button class="q-btns margin-left-s">+</button>
								</div>
							</div>

							<button class="para-m-font icon-btn remove-btn ">
								Remove From Cart
							</button>
							<button class="icon-btn wishlist-btn para-m-font">
								<i class="fa fa-shopping-cart fa-margin-r"></i>Move To wishlist
							</button>
						</div>
					</div>

					<div class="card cart-card card-shadow">
						<div class="cart-card-header cart-card-image">
							<img src={Book} alt="Book" srcset="" />
						</div>
						<div class="cart-card-info margin-left-l">
							<span class="std-font-two hd-m-font prime-color padding-top  margin-bottom-m">
								Beautiful Books
							</span>

							<div class="card-body  margin-bottom-m">
								₹ 2500{" "}
								<span class="margin-left-l para-s-font text-cut dark-text margin-bottom-m">
									{" "}
									₹ 5000
								</span>
							</div>
							<span class=" para-m-font dark-text margin-bottom-s">
								50% off
							</span>
							<div class="quantity margin-bottom-m">
								<div class="  quantity">
									<h1 class="para-s-font">Quantity:</h1>
									<button class="q-btns margin-left-s">-</button>
									<input class="q-input margin-left-s" type="number" />
									<button class="q-btns margin-left-s">+</button>
								</div>
							</div>

							<button class="para-m-font icon-btn remove-btn ">
								Remove From Cart
							</button>
							<button class="icon-btn wishlist-btn para-m-font">
								<i class="fa fa-shopping-cart fa-margin-r"></i>Move To wishlist
							</button>
						</div>
					</div>
				</div>

				<div class="cart-footer"></div>
			</div>
		</div>
	);
};

export default Cart;
