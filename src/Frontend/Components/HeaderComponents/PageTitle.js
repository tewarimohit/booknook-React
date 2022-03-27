import React from "react";
import { Link } from "react-router-dom";

const PageTitle = () => {
	return (
		<Link
			to="./"
			className="logo hd-m-font bookish-font letter-spacing-l txt-shadow"
		>
			booknook
		</Link>
	);
};

export default PageTitle;
