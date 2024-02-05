import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div className="counter-display d-flex justify-content-center my-5">
			<div className="clock-img">
				<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-clock" viewBox="0 0 16 16">
					<path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z" />
					<path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0" />
				</svg>
			</div>
			<div className="seconds thousands">0</div>
			<div className="seconds hundreds">0</div>
			<div className="seconds tens">0</div>
			<div className="seconds ones">0</div>
		</div>

	);
};

export default Home;
