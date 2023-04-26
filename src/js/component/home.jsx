
import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component

const Home = (props) => {
	return (
		<div className="d-flex justify-content-center">
			<div class = "digit">
				{Math.floor (props.counter/100000)%10}	
			</div>
			<div class = "digit">
				{Math.floor (props.counter/10000)%10}
			</div>
			<div class = "digit">
				{Math.floor (props.counter/1000)%10}
				</div>
			<div class = "digit">
				{Math.floor (props.counter/100)%10}
			</div>
			<div class = "digit">
				{Math.floor (props.counter/10)%10}	
			</div>
			<div class = "digit">
				{Math.floor (props.counter/1)%10}
			</div>
		</div>
	);
};

export default Home;
