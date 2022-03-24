import React from "react";
import Header from "../Components/HeaderComponents/Header";
import { Link } from "react-router-dom";
import "../Styles/Login.css";

const Login = () => {
	return (
		<div>
			<Header />

			<div class="login-page-body">
				<div class="login-area">
					<h1 class="hd-m2-font heading-color std-font-two margin-bottom-s">
						Login
					</h1>
					<div class="first-input">
						<label
							class="para-m-font std-font-two margin-bottom-s"
							for="username"
						>
							Email address
						</label>
						<input
							class="input-field normal-input margin-bottom-m"
							type="text"
							name="username"
							placeholder="booknook@gmail.com"
						/>
					</div>
					<div class="second-input">
						<label
							class="para-m-font std-font-two margin-bottom-s"
							for="password"
						>
							Password
						</label>
						<input
							class="input-field normal-input margin-bottom-m"
							type="Password"
							name="password"
							placeholder="●●●●●●●●●"
						/>
					</div>
					<div class="third-input">
						<input class="checkbox" type="checkbox" />
						<label class="para-s-font margin-left-s" for="username">
							Remember me
						</label>
						<a href="#" class="margin-auto forgot-pass">
							Forgot your Password ?
						</a>
					</div>

					<button class="primary-btn normal-btn btn-width">Login</button>

					<div class="signin-area">
						<Link class="para-m-font heading-color std-font-two" to="/signup">
							CREATE NEW ACCOUNT
						</Link>

						<span class="hd-m2-font bookish-font margin-left-s heading-color">
							{">"}
						</span>
					</div>

					<span class="login-close std-font-two">X</span>
				</div>
			</div>
		</div>
	);
};

export default Login;
