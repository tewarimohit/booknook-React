import React from "react";
import "../Styles/Wishlist.css";
import "../Styles/Home.css";
import Header from "../Components/HeaderComponents/Header";
import Book from "../../Assets/book.jpg";

const Wishlist = () => {
	return (
		<div>
			<div class="wishlist-page-container">
				<header class="wishlist-page-header">
					<Header />
				</header>

				<div class="wishlist-info">
					<h1 class="hd-l-font std-font-two ">My Wishlist</h1>
				</div>
				<div class="wishlist-page-content ">
					<div class="card card-shadow">
						<div class="all-icon">
							<button class="heart-icon">
								<i class="fa fa-heart"></i>
							</button>
						</div>
						<div class="card-header card-image">
							<img src={Book} alt="Book" srcset="" />

							<div class="wishlist-card-footer">
								<span class="std-font-two prime-color margin-bottom-m">
									A Beautiful Book
								</span>
								<div class="wishlist-card-body  prime-color margin-bottom-m ">
									₹ 799
								</div>

								<button class="icon-btn wishlist-cart-btn para-m-font">
									<i class="fa fa-shopping-cart fa-margin-r"></i>Move To cart
								</button>
							</div>
						</div>
					</div>

					<div class="card card-shadow">
						<div class="all-icon">
							<button class="heart-icon">
								<i class="fa fa-heart"></i>
							</button>
						</div>
						<div class="card-header card-image">
							<img src={Book} alt="Book" srcset="" />

							<div class="wishlist-card-footer">
								<span class="std-font-two prime-color margin-bottom-m">
									A Beautiful Book
								</span>
								<div class="wishlist-card-body prime-color margin-bottom-m ">
									₹ 799
								</div>

								<button class="icon-btn wishlist-cart-btn para-m-font">
									<i class="fa fa-shopping-cart fa-margin-r"></i>Move To cart
								</button>
							</div>
						</div>
					</div>

					<div class="card card-shadow">
						<div class="all-icon">
							<button class="heart-icon">
								<i class="fa fa-heart"></i>
							</button>
						</div>
						<div class="card-header card-image">
							<img src={Book} alt="Book" srcset="" />

							<div class="wishlist-card-footer">
								<span class="std-font-two prime-color margin-bottom-m">
									A Beautiful Book
								</span>
								<div class="wishlist-card-body prime-color margin-bottom-m ">
									₹ 799
								</div>

								<button class="icon-btn wishlist-cart-btn para-m-font">
									<i class="fa fa-shopping-cart fa-margin-r"></i>Move To cart
								</button>
							</div>
						</div>
					</div>

					<div class="card card-shadow">
						<div class="all-icon">
							<button class="heart-icon">
								<i class="fa fa-heart"></i>
							</button>
						</div>
						<div class="card-header card-image">
							<img src={Book} alt="Book" srcset="" />

							<div class="wishlist-card-footer">
								<span class="std-font-two prime-color margin-bottom-m">
									A Beautiful Book
								</span>
								<div class="wishlist-card-body prime-color margin-bottom-m ">
									₹ 799
								</div>

								<button class="icon-btn wishlist-cart-btn para-m-font">
									<i class="fa fa-shopping-cart fa-margin-r"></i>Move To cart
								</button>
							</div>
						</div>
					</div>
				</div>

				<div class="wishlist-footer"></div>
			</div>
		</div>
	);
};

export default Wishlist;
