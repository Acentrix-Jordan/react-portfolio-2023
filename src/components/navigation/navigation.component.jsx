import "./navigation.style.scss";

import { AiFillHome, AiFillMessage } from "react-icons/ai";
import { FaUserAstronaut } from "react-icons/fa";
import { GiBrain, GiArchiveResearch } from "react-icons/gi";
import { MdDesignServices } from "react-icons/md";

import { useState } from "react";

// TODO: Componentize nav links

const Navigation = () => {
	const [activeNav, setActiveNav] = useState("");

	return (
		<nav>
			<a
				href="#"
				className={activeNav == "#" ? "nav__link active" : "nav__link"}
				onClick={() => setActiveNav("#")}
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
