import "./header.style.scss";

// import CV from "../../assets/jordan-wilson-front-end-developer-cv.pdf";
import ME from "../../assets/me.png";

import CtaButton from "../buttons/cta-button/cta-button.component";
import Socials from "../socials/socials.component";

const Header = () => {
	return (
		<header id="header">
			<div className="container header__container">
				<h5>Hello, I'm</h5>
				<h1>Jordan Wilson</h1>
				<h5 className="text-light">Your favourite Front End Ninja</h5>
				<div className="header__cta-container">
					{/* <CtaButton
						href={CV}
						download
						className="btn"
					>
						Download CV
					</CtaButton> */}
					<CtaButton
						href="#contact"
						className="btn btn-primary"
					>
						Let's Talk
					</CtaButton>
					<div className="header__socials">
						<Socials />
					</div>
				</div>
				<div className="me">
					<img
						src={ME}
						alt="Jordan Wilson - Front End Developer"
					/>
				</div>
				<a
					href="#contact"
					className="scroll__down"
				>
					Scroll Down
				</a>
			</div>
		</header>
	);
};

export default Header;
