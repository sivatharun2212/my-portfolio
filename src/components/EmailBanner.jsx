import React, { useState } from "react";

const EmailBanner = () => {
	const [isEmailHovered, setIsEmailHovered] = useState(false);

	return (
		<div className="w-full h-16 flex items-end fixed">
			<div className="relative w-[82%] flex justify-end pb-[1px]">
				<a
					onMouseEnter={() => setIsEmailHovered(true)}
					onMouseLeave={() => setIsEmailHovered(false)}
					href="mailto:sivatharun2212@gmail.com"
					className={`whiteColor font-firacode font-semibold text-sm sm:text-md md:text-lg lg:text-xl  tracking-widest `}>
					sivatharun2212@gmail
					<span
						className={`inline-block transition-transform duration-300 ${
							isEmailHovered ? "rotate-45 translate-y-5 aquaMentheColor text-shadow-glow-mint" : ""
						}`}>
						.com
					</span>
				</a>
				<div
					className={`absolute bottom-0 w-full border-b-[2px] whiteBorder transition-transform duration-300 ${
						isEmailHovered ? "-translate-x-12" : ""
					}`}></div>
			</div>
		</div>
	);
};

export default EmailBanner;
