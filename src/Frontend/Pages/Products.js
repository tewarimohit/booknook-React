import React from "react";
import "../Styles/Products.css";
import "../Styles/Home.css";
import Header from "../Components/HeaderComponents/Header";
import FilterArea from "../Components/Products/ProductComponents/FilterArea";
import ProductsInfo from "../Components/Products/ProductComponents/ProductsInfo";
import ProductCard from "../Components/Products/ProductComponents/ProductCard";
import { useFilter } from "../Context/FilterContext.js";
const Products = () => {
	const { filteredProducts } = useFilter();

	return (
		<div>
			<div className="product-page-container">
				<header className="page-header">
					<Header />
				</header>
				<div className="side-bar">
					<nav>
						<FilterArea />
					</nav>
				</div>

				<ProductsInfo totalProducts={filteredProducts} />
				<div className="page-content">
					{filteredProducts.map(product => (
						<ProductCard key={product.id} product={product} />
					))}
				</div>

				<div className="footer"></div>
			</div>
		</div>
	);
};

export default Products;
