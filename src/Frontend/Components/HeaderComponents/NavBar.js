import React from "react";
import "../../../App.css";
import { Link } from "react-router-dom";
import avatar from "../../../assets/avatar.png";
import { useCart, useWishlist, useAuth } from "../../Context/index";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
	const { cart, setCart } = useCart();
	const { wishlist, setWishlist } = useWishlist();
	const { authState } = useAuth();
	const navigate = useNavigate();

	const logoutHandler = () => {
		localStorage.clear("token");
		setCart([]);
		setWishlist([]);
		authState.isAuth = false;
	};

	return (
		<div className="ecom-header-nav">
			<nav className="nav-items">
				<Link to="/products" className="user" title="Products">
					<span className="head-link">Products</span>
				</Link>

				{authState.isAuth ? (
					<Link
						to="/login"
						className="link prime-link1 link-text login-color"
						onClick={logoutHandler}
					>
						Logout
					</Link>
				) : (
					<Link to="/login" className="link prime-link1 link-text login-color">
						Login
					</Link>
				)}

				<Link to="/wishlist" title="Wishlist" className="head-link heart">
					<i className="material-icons">favorite_border </i>{" "}
					<span className="added-items ">{wishlist.length}</span>
				</Link>

				<Link to="/cart" className="cart head-link" title="Cart">
					<i className="material-icons">shopping_cart</i>
					<span className="added-items ">{cart.length}</span>
				</Link>
			</nav>
			<Link to="#" className="user" title="User Info">
				<span className="head-link">Profile</span>
			</Link>
			<Link to="#">
				<div className="user-img" title="Profile Picture">
					<img className="border-50" src={avatar} alt="Avatar" />
				</div>
			</Link>
		</div>
	);
};

export default NavBar;
