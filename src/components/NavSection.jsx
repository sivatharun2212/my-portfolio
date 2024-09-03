import React from "react";
import { FaUser } from "react-icons/fa";
import { FaTimeline } from "react-icons/fa6";
import { TbBulbFilled } from "react-icons/tb";
import { FaBriefcase } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa6";

const NavSection = () => {
	return (
		<div className="w-[16%] h-[50%] fixed left-0 bottom-[25%] flex flex-col justify-evenly pl-10">
			<div className="flex items-center gap-4 cursor-pointer">
				<FaUser color="white" /> <span className="aquaMentheColor text-shadow-glow-mint tracking-widest font-firacode">About</span>
			</div>
			<div className="flex items-center gap-4 cursor-pointer">
				<FaTimeline color="white" />
				<span className="aquaMentheColor text-shadow-glow-mint tracking-widest font-firacode">Timeline</span>
			</div>
			<div className="flex items-center gap-4 cursor-pointer">
				<TbBulbFilled color="white" />
				<span className="aquaMentheColor text-shadow-glow-mint tracking-widest font-firacode">Skills</span>
			</div>
			<div className="flex items-center gap-4 cursor-pointer">
				<FaBriefcase color="white" />
				<span className="aquaMentheColor text-shadow-glow-mint tracking-widest font-firacode">Work</span>
			</div>
			<div className="flex items-center gap-4 cursor-pointer">
				<FaEnvelope color="white" />
				<span className="aquaMentheColor text-shadow-glow-mint tracking-widest font-firacode">Contact</span>
			</div>
		</div>
	);
};

export default NavSection;
