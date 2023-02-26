import "./socials.style.scss";

import { BsLinkedin, BsGithub } from "react-icons/bs";

const Socials = () => {
	return (
		<div className="socials">
			<a
				href="https://www.linkedin.com/in/jordan-wilson-310030151/"
				target="_blank"
				rel="noreferrer"
			>
				<BsLinkedin />
			</a>
			<a
				href="https://github.com/Acentrix-Jordan"
				target="_blank"
				rel="noreferrer"
			>
				<BsGithub />
			</a>
		</div>
	);
};

export default Socials;
