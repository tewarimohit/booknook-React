import React from "react";
import Header from "../Components/HeaderComponents/Header";
import LoginArea from "../Components/LoginArea.js/LoginArea";
import "../Styles/Login.css";

const Login = () => {
	return (
		<div>
			<Header />

			<div class="login-page-body">
				<LoginArea />
			</div>
		</div>
	);
};

export default Login;
