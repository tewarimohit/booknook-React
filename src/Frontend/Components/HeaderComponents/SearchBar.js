import React from "react";

const SearchBar = () => {
	return (
		<div className="search-bar">
			<form className="search-bar-el" action="">
				<input
					className="input-search"
					type="text"
					name=""
					id=""
					placeholder="What are you looking for?"
				/>
				<button className="rounded-btn rounded-btn3 normal-btn search-btn">
					Search
				</button>
			</form>
		</div>
	);
};

export default SearchBar;
