import React from "react";
import ndc from "../img/NDC.png";
import SearchIcon from "@mui/icons-material/Search";
import "./Header.css";
<<<<<<< HEAD

const Header = () => {
	return (
=======
import About from "../About";
import { Link,BrowserRouter as Router,Routes,Route } from "react-router-dom";

const Header = () => {
	return (
		// <Router>
>>>>>>> c2e50a3 (initial commit)
		<div className="header">
			<div className="header__logo">
				<img className="header__img" src={ndc} alt="Ncet-logo" />
			</div>
			<div className="header__listsec">
				<div className="header_firstlist">
					<ul className="header__list1">
						<li>about us</li>
						<li>programs</li>
						<li>ndc team</li>
						<li>life @ ndc</li>
						<li>sports</li>
						{/* <SearchIcon className="search__logo"/> */}
					</ul>

					<ul className="header__list2">
						<li>research & library</li>
						<li>career & placements</li>
						<li>facilities</li>
					</ul>
				</div>
<<<<<<< HEAD
				<SearchIcon className=""
				/>
			</div>
		</div>
=======
				<SearchIcon className="" />
			</div>
		</div>
		// </Router>
>>>>>>> c2e50a3 (initial commit)
	);
};

export default Header;
