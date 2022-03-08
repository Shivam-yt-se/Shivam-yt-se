import React from "react";
import Ticker from "react-ticker";
import "./Ticker.css"

const MoveStuffAround = () => (
	<Ticker>
		{({ index }) => (
			<div>
				<p className="ticker">This is the Headline of element. </p>
			</div>
		)}
	</Ticker>
);

export default MoveStuffAround;