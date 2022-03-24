import React from "react";
import { Link } from "react-router-dom";
import Avatar from "../../../Assets/avatar.png";

const NavBar = () => {
	return (
		<div className="ecom-header-nav">
			<nav className="nav-items">
				<Link to="/products" className="user" title="Products">
					<span className="head-link">Products</span>
				</Link>
				<Link to="/login" className="link prime-link1 link-text login-color">
					Login
				</Link>
				<Link to="/wishlist" title="Wishlist" className="head-link heart">
					<i className="material-icons">favorite_border</i>
				</Link>

				<Link to="/cart" className="cart head-link" title="Cart">
					<i className="material-icons">shopping_cart</i>
				</Link>
			</nav>
			<Link to="#" className="user" title="User Info">
				<span className="head-link">Profile</span>
			</Link>
			<Link to="#">
				<div className="user-img" title="Profile Picture">
					<img className="border-50" src={Avatar} alt="Avatar" />
				</div>
			</Link>
		</div>
	);
};

export default NavBar;
