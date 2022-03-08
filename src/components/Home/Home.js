import React from "react";
import bcg_img from "../img/cheerful-attractive-young-woman-with-black-hair-walking.jpg";
import "./Home.css";
import MoveStuffAround from "../Header/Ticker";

const Home = () => {
	return (
		<div>
			<img className="home_img" src={bcg_img} alt="college-girl" />
			<MoveStuffAround/>
		</div>
	);
};
export default Home;
