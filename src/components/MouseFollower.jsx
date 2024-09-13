import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const MouseFollower = () => {
	const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
	const [isMoving, setIsMoving] = useState(false); // Track if mouse is moving
	const [size, setSize] = useState(0); // Default size of the circle

	useEffect(() => {
		const handleMouseMove = (event) => {
			setMousePosition({ x: event.clientX, y: event.clientY });
			setIsMoving(true); // Set moving state to true when mouse moves

			// Set a timeout to detect when mouse stops
			clearTimeout(window.mouseStopTimer);
			window.mouseStopTimer = setTimeout(() => {
				setIsMoving(false); // Set moving state to false after mouse stops
			}, 50); // Adjust this value to control how quickly the circle shrinks after stopping
		};

		window.addEventListener("mousemove", handleMouseMove);

		return () => {
			window.removeEventListener("mousemove", handleMouseMove);
			clearTimeout(window.mouseStopTimer);
		};
	}, []);

	useEffect(() => {
		if (isMoving) {
			setSize(15); // Increase size when mouse is moving
		} else {
			setSize(0); // Decrease size when mouse stops
		}
	}, [isMoving]);

	return (
		<motion.div
			style={{
				position: "fixed",
				borderRadius: "50%",
				backgroundColor: "white",
				pointerEvents: "none",
			}}
			// Use Framer Motion to animate position and size
			animate={{
				top: mousePosition.y, // Center the circle vertically
				left: mousePosition.x, // Center the circle horizontally
				width: size, // Animate the width based on mouse activity
				height: size, // Animate the height based on mouse activity
			}}
			transition={{
				type: "spring",
				stiffness: 300,
				damping: 20,
			}}
		/>
	);
};

export default MouseFollower;
