import React from "react";
import PageTitle from "./PageTitle";
import SearchBar from "./SearchBar";
import NavBar from "./NavBar";

const Header = () => {
	return (
		<div>
			<div className="ecom-head-container">
				<header className="ecom-header">
					<PageTitle />
					<SearchBar />
					<NavBar />
				</header>
			</div>
		</div>
	);
};

export default Header;
