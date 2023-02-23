import React from "react";
import "./about.style.scss";
import { FaGem } from "react-icons/fa";
import { AiFillFolderOpen } from "react-icons/ai";
import { CiCoffeeCup } from "react-icons/ci";

import ME from "../../assets/me-about.jpg";

const About = () => {
	return (
		<section
			id="about"
			className="section-padding"
		>
			<div className="about__title">
				<h5>Get to Know</h5>
				<h2>About Me</h2>
			</div>
			<div className="container about__container">
				<div className="about__me">
					<div className="about__me-image">
						<img
							src={ME}
							alt="Jordan Wilson Front End Developer"
						/>
					</div>
				</div>
				<div className="about__content">
					<div className="about__cards">
						<div className="about__card">
							<FaGem />
							<h5>
								<strong>Experience</strong>
							</h5>
							<p>2 Years of Coding Experience</p>
						</div>
						<div className="about__card">
							<AiFillFolderOpen />
							<h5>
								<strong>Projects</strong>
							</h5>
							<p>20 and climbing</p>
						</div>
						<div className="about__card">
							<CiCoffeeCup />
							<h5>
								<strong>Coffee Consumed</strong>
							</h5>
							<p>236+</p>
						</div>
					</div>
					<p>
						Lorem ipsum, dolor sit amet consectetur adipisicing
						elit. Ea hic nobis repudiandae iste similique pariatur
						velit neque explicabo, natus, facere in doloribus
						assumenda! Quae perferendis veritatis laborum possimus
						eos nesciunt!
					</p>
					<a
						href="#contact"
						className="btn btn-primary"
					>
						Let's Talk
					</a>
				</div>
			</div>
		</section>
	);
};

export default About;
