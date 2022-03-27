import Book from "../../../../Assets/book.jpg";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../../Context/CartContext.js";
import { useWishlist } from "../../../Context/WishlistContext.js";
import { addToWishlist, getToken } from "../../../Utilities/Wishlist-Utility";
import { addToCart } from "../../../Utilities/Cart-Utility";

const ProductCard = ({ product }) => {
	const { cart, setCart } = useCart();
	const { wishlist, setWishlist } = useWishlist();
	// console.log("productid", id);

	return (
		<div className="card card-shadow">
			<div className="all-icon">
				<button
					className="heart-icon"
					title="Add To Wishlist"
					onClick={() => {
						if (wishlist.find(item => item._id === product._id)) {
							console.log("Item is already there.");
						} else {
							addToWishlist(product, setWishlist);
						}
					}}
				>
					<i className="fa fa-heart"></i>
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
				<img src={Book} alt="Book" srcset="" />
				<span className="std-font-two prime-color">{product.title}</span>
			</div>
			<span className="std-font-two para-m-font prime-color margin-left-l">
				- By {product.author}
			</span>
			<div className="card-body margin-left-l">
				₹ {product.price}
				<span className="margin-left-l para-s-font text-cut dark-text">
					{" "}
					₹ 900
				</span>
			</div>
			<div className="card-footer">
				<button className="para-m-font icon-buy">Buy Now</button>
				<button
					className="icon-btn cart-btn para-m-font"
					onClick={() => {
						if (cart.find(item => item._id === product._id)) {
							console.log("Item Already present in cart..");
						} else {
							addToCart(product, setCart);
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
