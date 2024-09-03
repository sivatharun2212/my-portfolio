import React from "react";
import { FaLinkedinIn } from "react-icons/fa";
import githubIcon from "../assets/icons/github-icon.svg";
import linkedinIcon from "../assets/icons/linkedin-icon.svg";
import leetcodeIcon from "../assets/icons/leetcode-icon.svg";
import instaGramIcon from "../assets/icons/insta-icon.svg";
import { LuGithub } from "react-icons/lu";
import { SiLeetcode } from "react-icons/si";
import { FaInstagram } from "react-icons/fa6";
const SocialSection = () => {
	return (
		<div className="w-[16%] h-full fixed right-0">
			<div className="border-t-[2px] whiteBorder w-[60%] h-full ">
				<div className="w-full h-[30%] border-r-[2px] whiteBorder"></div>
				<div className="w-full h-[40%]  relative">
					<div className="blackBeanBg w-16 h-full absolute -right-8 rounded-full  flex flex-col justify-around items-center">
						<a
							href="https://github.com/sivatharun2212"
							target="_blank">
							<LuGithub
								size={20}
								color="#00ffbf"
							/>
						</a>
						<a
							href="https://www.linkedin.com/in/siva-tharun-thuraka-681528240"
							target="_blank">
							<FaLinkedinIn
								size={20}
								color="#00ffbf"
							/>
						</a>
						<a
							href="https://leetcode.com/u/siva_tharun/"
							target="_blank">
							<SiLeetcode
								size={20}
								color="#00ffbf"
							/>
						</a>
						<a
							href="https://www.instagram.com/r_o_w_d_y__s_i_v_a/"
							target="_blank">
							<FaInstagram
								size={20}
								color="#00ffbf"
							/>
						</a>
					</div>
				</div>
				<div className="w-full h-[30%] border-r-[2px] whiteBorder"></div>
			</div>
		</div>
	);
};

export default SocialSection;
