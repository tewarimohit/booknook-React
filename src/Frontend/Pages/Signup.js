import React from "react";
import "../Styles/Signup.css";
import Header from "../Components/HeaderComponents/Header.js";
import SignupArea from "../Components/SignupArea/SignupArea";

const Signup = () => {
	return (
		<div>
			<Header />

			<div class="signup-page-body">
				<SignupArea />
			</div>
		</div>
	);
};

export default Signup;
