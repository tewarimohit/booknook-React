import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useAuth } from "../../Context/AuthContext";

const LoginArea = () => {
	const { authState, authDispatch } = useAuth();

	const [userLogin, setUserLogin] = useState({ email: "", password: "" });

	const userInputHandler = event => {
		setUserLogin(data => ({
			...data,
			[event.target.name]: event.target.value,
		}));
		// console.log(userLogin);
	};

	const userLoginHandler = async (email, password) => {
		console.log(email, password);
		try {
			const { data } = await axios.post("/api/auth/login", {
				email,
				password,
			});
			authDispatch({
				type: "USER-LOADING-SUCCESSFUL",
				payload: data.foundUser,
			});
			localStorage.setItem("token", data.encodedToken);
		} catch (error) {
			console.log(error.response.data);
		}
	};

	return (
		<div class="login-area">
			<h1 class="hd-m2-font heading-color std-font-two margin-bottom-s">
				Login
			</h1>
			<div class="first-input">
				<label class="para-m-font std-font-two margin-bottom-s" for="username">
					Email address
				</label>
				<input
					class="input-field normal-input margin-bottom-m"
					type="text"
					value={userLogin.email}
					name="email"
					placeholder="booknook@gmail.com"
					onChange={userInputHandler}
				/>
			</div>
			<div class="second-input">
				<label class="para-m-font std-font-two margin-bottom-s" for="password">
					Password
				</label>
				<input
					class="input-field normal-input margin-bottom-m"
					type="Password"
					value={userLogin.password}
					name="password"
					placeholder="●●●●●●●●●"
					onChange={userInputHandler}
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

			<button
				class="primary-btn normal-btn btn-width"
				onClick={() => userLoginHandler(userLogin.email, userLogin.password)}
			>
				Login
			</button>

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
	);
};

export default LoginArea;
