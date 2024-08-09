import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//include probando js
import { Card } from "./card";
import { Navbar } from "./navbar";

//create your first component
const Home = () => {
	return (
		<div className="container-fluid d-flex justify-content-center">
			<Card/>
		</div>

	);
};

export default Home;
