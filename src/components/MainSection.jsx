import React from "react";
import Welcome from "./Welcome";
const MainSection = () => {
	return (
		<div className="w-full mx-0 sm:mx-[18%] p-4 pr-[18%] sm:pr-0">
			<Welcome />
			<div className="py-20">
				<h1 className="text-4xl font-bold text-white text-center">Development in progress </h1>
			</div>
		</div>
	);
};

export default MainSection;
