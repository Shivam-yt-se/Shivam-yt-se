import React from 'react'
import Marquee from "react-fast-marquee";
const Ticker = () => {
  return (
		<div>
			<div className="home-msg">
				<span>TEXT</span>
				<Marquee>
					This is a sample scrolling text that has scrolls texts to left.
				</Marquee>
			</div>
		</div>
	);
}

export default Ticker
