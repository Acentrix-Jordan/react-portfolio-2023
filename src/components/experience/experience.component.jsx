import React from "react";
import "./experience.style.scss";
import {
	SiHtml5,
	SiCss3,
	SiSass,
	SiBootstrap,
	SiTailwindcss,
	SiPhp,
	SiFirebase,
	SiAdobeillustrator,
	SiAdobephotoshop,
	SiFigma,
} from "react-icons/si";

import { FaReact, FaVuejs, FaWordpress } from "react-icons/fa";
import SpinningCard from "../spinningCard/spinning-card.component";

const Experience = () => {
	return (
		<section
			id="experience"
			className="section-padding"
		>
			<div className="experience__title">
				<h5>What Skills I Have</h5>
				<h2>My Experience</h2>
			</div>
			<div className="container experience__container">
				<SpinningCard rearText="HTML">
					<SiHtml5 />
				</SpinningCard>
				<SpinningCard rearText="CSS">
					<SiCss3 />
				</SpinningCard>
				<SpinningCard rearText="SASS">
					<SiSass />
				</SpinningCard>
				<SpinningCard rearText="Bootstrap">
					<SiBootstrap />
				</SpinningCard>
				<SpinningCard rearText="Tailwind">
					<SiTailwindcss />
				</SpinningCard>
				<SpinningCard rearText="React">
					<FaReact />
				</SpinningCard>
				<SpinningCard rearText="Vue">
					<FaVuejs />
				</SpinningCard>
				<SpinningCard rearText="Wordpress">
					<FaWordpress />
				</SpinningCard>
				<SpinningCard rearText="PHP">
					<SiPhp />
				</SpinningCard>
				<SpinningCard rearText="Firebase">
					<SiFirebase />
				</SpinningCard>
				<SpinningCard rearText="Illustrator">
					<SiAdobeillustrator />
				</SpinningCard>
				<SpinningCard rearText="Photoshop">
					<SiAdobephotoshop />
				</SpinningCard>
				<SpinningCard rearText="Figma">
					<SiFigma />
				</SpinningCard>
			</div>
		</section>
	);
};

export default Experience;
