import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";
import { FilterProvider } from "./Frontend/Context/FilterContext.js";
import { CartProvider } from "./Frontend/Context/CartContext.js";
import { WishlistProvider } from "./Frontend/Context/WishlistContext.js";
// Call make Server
makeServer();

ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>
			<CartProvider>
				<WishlistProvider>
					<FilterProvider>
						<App />
					</FilterProvider>
				</WishlistProvider>
			</CartProvider>
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById("root")
);
