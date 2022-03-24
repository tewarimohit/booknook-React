import React from "react";
import { Link } from "react-router-dom";
import "../Styles/Signup.css";
import Header from "../Components/HeaderComponents/Header.js";

const Signup = () => {
	return (
		<div>
			<Header />

			<div class="signup-page-body">
				<div class="signup-area">
					<h1 class="hd-m2-font heading-color std-font-two margin-bottom-m">
						Signup
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
						<label
							class="para-s-font margin-left-s std-font-two"
							for="username"
						>
							I accept all Terms & Conditions
						</label>
					</div>

					<button class="primary-btn normal-btn btn-width">
						Create New Account
					</button>

					<div class="signin-area">
						<Link class="para-m-font heading-color std-font-two" to="/login">
							Already have an account
						</Link>

						<span class="hd-m2-font bookish-font margin-left-s heading-color">
							{">"}
						</span>
					</div>

					<span class="signup-close std-font-two">X</span>
				</div>
			</div>
		</div>
	);
};

export default Signup;
