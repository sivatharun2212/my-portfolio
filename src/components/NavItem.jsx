import React from "react";

const NavItem = ({ Icon, text }) => {
	return (
		<div className="flex items-center gap-4 cursor-pointer">
			<Icon color="white" />{" "}
			<span className="aquaMentheColor text-shadow-glow-mint tracking-widest font-firacode sm:text-xs md:text-sm lg:text-base">
				{text}
			</span>
		</div>
	);
};

export default NavItem;
