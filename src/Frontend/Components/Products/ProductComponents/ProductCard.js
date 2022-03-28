import { useNavigate } from "react-router-dom";
import { useCart, useWishlist } from "../../../Context/index";
import { addToWishlist, getToken } from "../../../Utilities/Wishlist-Utility";
import { addToCart } from "../../../Utilities/Cart-Utility";

const ProductCard = ({ product }) => {
	const navigate = useNavigate();
	const { cart, setCart } = useCart();
	const { wishlist, setWishlist } = useWishlist();
	console.log(product);
	return (
		<div className="card card-shadow">
			<div className="all-icon">
				<button
					className="heart-icon"
					title="Add To Wishlist"
					onClick={() => {
						if (getToken()) {
							if (wishlist.find(item => item._id === product._id)) {
								console.log("Item is already there.");
							} else {
								addToWishlist(product, setWishlist);
							}
						} else {
							navigate("/login");
						}
					}}
				>
					<i className="material-icons">favorite_border </i>
				</button>

				<button className="icons">
					<i className="material-icons share" title="Share">
						share
					</i>
				</button>

				<button className="icons">
					<i className="material-icons more" title="More Options">
						more_vert
					</i>
				</button>
			</div>
			<div className="card-header card-image">
				<img src={product.imageProduct} alt="Book" srcset="" />
				<span className="std-font-two prime-color">{product.title}</span>
			</div>
			<span className="std-font-two para-m-font prime-color margin-left-l">
				- By {product.author}
			</span>
			<div className="card-body margin-left-l">
				₹ {product.price}
				<span className="margin-left-l para-s-font text-cut dark-text">
					{" "}
					₹ {product.discount}
				</span>
			</div>
			<div className="card-footer">
				<button className="para-m-font icon-buy">Buy Now</button>
				<button
					className="icon-btn cart-btn para-m-font"
					onClick={() => {
						if (getToken()) {
							if (cart.find(item => item._id === product._id)) {
								console.log("Item Already present in cart..");
							} else {
								addToCart(product, setCart);
							}
						} else {
							navigate("/login");
						}
					}}
				>
					<i className="fa fa-shopping-cart fa-margin-r"></i>Add To cart
				</button>
			</div>
		</div>
	);
};

export default ProductCard;
