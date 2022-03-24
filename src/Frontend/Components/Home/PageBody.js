import React from "react";
import BgImage from "../../../Assets/storytelling.jpg";
import { Link } from "react-router-dom";

const PageBody = () => {
	return (
		<div className="page-body">
			<div className="home-img">
				<img src={BgImage} alt="home-image" />
			</div>
			<div className="col-2">
				<h1 className="hd-l-font bookish-font margin-1">
					The world’s greatest stories <br />
					at one Place...
				</h1>
				<h1 className="hd-m-font std-font-two margin-1 gap-1">
					There is more treasure in books <br />
					than in all the pirate’s loot on <br />
					Treasure Island.
				</h1>
				<h1 className="hd-m-font std-font-two margin2-left">- Walt Disney</h1>
			</div>
			<div className="explore-btn">
				<Link to="/products" id="">
					<button className="floating-btn floating-btn1 hd-s-font">
						<span className="explore std-font-two">Explore Now</span>
						<i className="fa fa-arrow-circle-right"></i>
					</button>
				</Link>
			</div>
		</div>
	);
};

export default PageBody;
