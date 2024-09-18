import React from "react";
import { FaLinkedinIn } from "react-icons/fa";
import { LuGithub } from "react-icons/lu";
import { SiLeetcode } from "react-icons/si";
import { FaInstagram } from "react-icons/fa6";
const SocialSection = () => {
	return (
		<div className="w-[18%] h-full fixed right-0">
			<div className="border-t-[2px] whiteBorder w-[60%] h-full ">
				<div className="w-full h-[37%] sm:h-[35%] md:h-[30%]  border-r-[2px] whiteBorder"></div>
				<div className="w-full h-[25%] sm:h-[30%] md:h-[40%]  relative">
					<div className="blackBeanBg w-12 sm:w-14 md:w-16 h-full absolute -right-6 sm:-right-7 md:-right-8 rounded-full  flex flex-col justify-around items-center shadow-sm shadow-[#b7fcab38]">
						<a
							href="https://github.com/sivatharun2212"
							rel="noreferrer"
							target="_blank">
							<LuGithub
								size={20}
								color="#b7fcab"
							/>
						</a>
						<a
							href="https://www.linkedin.com/in/siva-tharun-thuraka-681528240"
							rel="noreferrer"
							target="_blank">
							<FaLinkedinIn
								size={20}
								color="#b7fcab"
							/>
						</a>
						<a
							href="https://leetcode.com/u/siva_tharun/"
							rel="noreferrer"
							target="_blank">
							<SiLeetcode
								size={20}
								color="#b7fcab"
							/>
						</a>
						<a
							href="https://www.instagram.com/r_o_w_d_y__s_i_v_a/"
							rel="noreferrer"
							target="_blank">
							<FaInstagram
								size={20}
								color="#b7fcab"
							/>
						</a>
					</div>
				</div>
				<div className="w-full h-[38%] sm:h-[35%] md:h-[30%]  border-r-[2px] whiteBorder"></div>
			</div>
		</div>
	);
};

export default SocialSection;
