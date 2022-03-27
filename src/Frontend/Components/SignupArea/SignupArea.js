import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useAuth } from "../../Context/AuthContext";

const SignupArea = () => {
	const { authState, authDispatch } = useAuth();

	const [userSignup, setUserSignup] = useState({
		firstName: "",
		lastName: "",
		password: "",
		confirmPassword: "",
		termsCondition: false,
	});

	const userInputHandler = event => {
		if (event.target.value === "termsCondition") {
			setUserSignup(data => ({
				...data,
				[event.target.id]: event.target.checked,
			}));
		}
		setUserSignup(data => ({
			...data,
			[event.target.name]: event.target.value,
		}));
	};

	console.log(userSignup);

	const userSignupHandler = async (
		firstName,
		lastName,
		password,
		confirmPassword
	) => {
		try {
			const { data } = await axios.post("/api/auth/signup", {
				firstName,
				lastName,
				password,
				confirmPassword,
			});
			authDispatch({
				type: "USER-LOADING-SUCCESSFUL",
				payload: data.createdUser,
			});
			localStorage.setItem("token", data.encodedToken);
		} catch (error) {
			console.log(error.response.data);
		}
	};

	return (
		<div className="signup-area">
			<h1 className="hd-m2-font heading-color std-font-two margin-bottom-m">
				Signup
			</h1>
			<div className="first-input">
				<label
					className="para-m-font std-font-two margin-bottom-s"
					for="username"
				>
					First Name
				</label>
				<input
					className="input-field normal-input margin-bottom-m"
					type="text"
					value={userSignup.firstName}
					name="firstName"
					placeholder="Example:- Adarsh"
					onChange={userInputHandler}
				/>
			</div>
			<div className="first-input">
				<label
					className="para-m-font std-font-two margin-bottom-s"
					for="username"
				>
					Last Name
				</label>
				<input
					className="input-field normal-input margin-bottom-m"
					type="text"
					value={userSignup.lastName}
					name="lastName"
					placeholder="Example:- Balika"
					onChange={userInputHandler}
				/>
			</div>

			<div className="second-input">
				<label
					className="para-m-font std-font-two margin-bottom-s"
					for="password"
				>
					Password
				</label>
				<input
					className="input-field normal-input margin-bottom-m"
					type="Password"
					value={userSignup.password}
					name="password"
					placeholder="●●●●●●●●●"
					onChange={userInputHandler}
				/>
			</div>
			<div className="second-input">
				<label
					className="para-m-font std-font-two margin-bottom-s"
					for="password"
				>
					Re-Enter Password
				</label>
				<input
					className="input-field normal-input margin-bottom-m"
					type="Password"
					value={userSignup.confirmPassword}
					name="confirmPassword"
					placeholder="●●●●●●●●●"
					onChange={userInputHandler}
				/>
			</div>

			<div className="third-input">
				<input
					className="checkbox"
					type="checkbox"
					name="termsCondition"
					value={userSignup.termsCondition}
					id="termsCondition"
					onChange={userInputHandler}
				/>
				<label className="para-s-font margin-left-s std-font-two">
					I accept all Terms & Conditions
				</label>
			</div>

			<button
				className="primary-btn normal-btn btn-width"
				onClick={() =>
					userSignupHandler(
						userSignup.firstName,
						userSignup.lastName,
						userSignup.password,
						userSignup.confirmPassword
					)
				}
			>
				Create New Account
			</button>

			<div className="signin-area">
				<Link className="para-m-font heading-color std-font-two" to="/login">
					Already have an account
				</Link>

				<span className="hd-m2-font bookish-font margin-left-s heading-color">
					{">"}
				</span>
			</div>

			<span className="signup-close std-font-two">X</span>
		</div>
	);
};

export default SignupArea;
