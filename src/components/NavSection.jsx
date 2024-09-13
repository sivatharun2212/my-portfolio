import React from "react";
import { FaUser } from "react-icons/fa";
import { FaTimeline } from "react-icons/fa6";
import { TbBulbFilled } from "react-icons/tb";
import { FaBriefcase } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa6";
import NavItem from "./NavItem";
const NavSection = () => {
	return (
		<div className="w-[18%] h-[50%]  fixed left-0 bottom-[25%] hidden justify-center sm:flex">
			<div className="h-full flex flex-col justify-evenly">
				<NavItem
					Icon={FaUser}
					text="About"
				/>
				<NavItem
					Icon={FaTimeline}
					text="Timeline"
				/>
				<NavItem
					Icon={TbBulbFilled}
					text="Skills"
				/>
				<NavItem
					Icon={FaBriefcase}
					text="Work"
				/>
				<NavItem
					Icon={FaEnvelope}
					text="Contact"
				/>
			</div>
		</div>
	);
};

export default NavSection;
