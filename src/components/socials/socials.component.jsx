import "./socials.style.scss";

import { BsLinkedin, BsGithub } from "react-icons/bs";

const Socials = () => {
	return (
		<div className="socials">
			<a
				href="https://linkedin.com"
				target="_blank"
			>
				<BsLinkedin />
			</a>
			<a
				href="https://github.com"
				target="_blank"
			>
				<BsGithub />
			</a>
		</div>
	);
};

export default Socials;
