import React from "react";

const ProductsInfo = ({ totalProducts }) => {
	return (
		<div className="info">
			<h1 className="std-font-two hd-s-font margin-left-l">
				Showing All Products{" "}
			</h1>
			<span className="para-s-font std-font-two margin-left-l">
				(Showing {totalProducts.length} Products)
			</span>
		</div>
	);
};

export default ProductsInfo;
