import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Welcome = () => {
	const titles = ["Frontend", "MERN Stack", "Full Stack"];
	const [index, setIndex] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setIndex((prevIndex) => (prevIndex + 1) % titles.length);
		}, 3000);
		return () => clearInterval(interval);

		// eslint-disable-next-line
	}, []);

	return (
		<div className="pt-10 flex flex-col gap-14 ">
			<div className="flex flex-col gap-5">
				<h1 className="font-bold text-4xl sm:text-5xl md:text-6xl  font-poppins whiteColor">Hi,</h1>
				<h1 className="font-bold text-4xl sm:text-5xl md:text-6xl font-poppins whiteColor">I'm Siva Tharun</h1>
				<div className="flex">
					<div className="mr-3 flex justify-center items-center rounded-md  overflow-hidden">
						<motion.h2
							key={titles[index]}
							initial={{ y: -50, opacity: 0 }}
							animate={{ y: 0, opacity: 1 }}
							exit={{ y: 50, opacity: 0 }}
							transition={{ type: "spring" }}
							className="font-bold text-2xl sm:text-3xl md:text-4xl font-poppins whiteColor">
							{titles[index]}
						</motion.h2>
					</div>
					<h2 className="font-bold text-2xl sm:text-3xl md:text-4xl font-poppins whiteColor">Developer</h2>
				</div>
			</div>
			<div className="flex flex-col gap-8 items-start">
				<h1 className="font-semibold text-base sm:text-lg  md:text-xl font-poppins whiteColor">
					Navigating the Digital Landscape, One Codeline at a Time
				</h1>
				<p className="font-firacode font-medium whiteColor leading-relaxed text-xs sm:text-sm md:text-base">
					As a passionate <span className="impText">Frontend Developer</span>, I create engaging digital experiences. With a
					recent B.E. in Computer Science and Engineering, I've honed my skills in{" "}
					<span className="impText">JavaScript, React.js, Tailwind CSS, Node.js</span> and{" "}
					<span className="impText">MongoDB</span>. I thrive on collaboration and am currently focused on mastering the{" "}
					<span className="impText">MERN stack</span> while enhancing my <span className="impText">problem-solving</span>{" "}
					abilities.
				</p>
				<a
					className="text-xs sm:text-sm md:text-base  tracking-wider font-semibold whiteColor font-poppins"
					href="#work">
					Explore My Work!
				</a>
			</div>
		</div>
	);
};

export default Welcome;
