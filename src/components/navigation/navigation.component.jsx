import "./navigation.style.scss";

import { AiFillHome, AiFillMessage } from "react-icons/ai";
import { FaUserAstronaut } from "react-icons/fa";
import { GiBrain, GiArchiveResearch } from "react-icons/gi";

import { useState } from "react";
import { useEffect } from "react";

const sections = ["#header", "#about", "#experience", "#portfolio", "#contact"];

const Navigation = () => {
	const [activeNav, setActiveNav] = useState("");

	useEffect(() => {
		setActiveNav("#header");

		sections.forEach((section) => {
			document.addEventListener("scroll", () => {
				let bounding = document
					.querySelector(`${section}`)
					.getBoundingClientRect();

				if (bounding.top < 200) {
					setActiveNav(section);
				}
			});
		});
	}, []);

	return (
		<nav>
			<a
				href="#header"
				className={
					activeNav == "#header" ? "nav__link active" : "nav__link"
				}
				onClick={() => setActiveNav("#header")}
			>
				<AiFillHome />
				<span>Home</span>
			</a>
			<a
				href="#about"
				className={
					activeNav == "#about" ? "nav__link active" : "nav__link"
				}
				onClick={() => setActiveNav("#about")}
			>
				<FaUserAstronaut />
				<span>About</span>
			</a>
			<a
				href="#experience"
				className={
					activeNav == "#experience"
						? "nav__link active"
						: "nav__link"
				}
				onClick={() => setActiveNav("#experience")}
			>
				<GiBrain />
				<span>Experience</span>
			</a>
			<a
				href="#portfolio"
				className={
					activeNav == "#portfolio" ? "nav__link active" : "nav__link"
				}
				onClick={() => setActiveNav("#portfolio")}
			>
				<GiArchiveResearch />
				<span>Portfolio</span>
			</a>
			<a
				href="#contact"
				className={
					activeNav == "#contact" ? "nav__link active" : "nav__link"
				}
				onClick={() => setActiveNav("#contact")}
			>
				<AiFillMessage />
				<span>Contact</span>
			</a>
		</nav>
	);
};

export default Navigation;
