import React from "react";
import "./about.style.scss";
import { FaGem } from "react-icons/fa";
import { AiFillFolderOpen } from "react-icons/ai";
import { BiCoffee } from "react-icons/bi";

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
							<BiCoffee />
							<h5>
								<strong>Coffee Consumed</strong>
							</h5>
							<p>236+</p>
						</div>
					</div>
					<p>
						I am currently a Junior Front End Developer at Twilo
						Creative, where we design, build and maintain,{" "}
						<strong>bespoke</strong>, <strong>custom</strong>{" "}
						wordpress sites. My day to day activities include, site
						maintainance, development of new client builds and
						maintaining our{" "}
						<strong>in-house css and theme framework</strong>.
						<br />
						<br />
						Alongside this, I also have a hand in the development of
						our Web Applications that comprise of a{" "}
						<strong>Vue.js</strong> frontend and{" "}
						<strong>Laravel</strong> Backend. Although I don't have
						much involvement with the backend, I am currently
						completing the Laravel path on Laracasts to improve my
						overall knowledge of an applications infrastructure.
						<br />
						<br />
						That's enough about work... In my spare time I love to
						learn about new technologies being introducted to the
						development space, including React, Express, Firebase
						and so on. As you can probaly guess I LOVE to code!
						Other than coding, I do kickboxing 3x a week to keep
						fit.
						<br />
						<br />I forgot to mention, I am currently studying a BSc
						in Software Development at the Open University and
						currently in my second year!
					</p>
					<h4>Two Truths and a Lie...</h4>
					<ul>
						<li>I orginally worked in the construction industry</li>
						<li>
							I got knocked off my motorbike twice within 4 days
							of each other
						</li>
						<li>I'm orginally from Leeds, UK</li>
					</ul>
					<br />
					<h4>Want to know the answer?</h4>
					<br />
					<a
						href="#contact"
						className="btn btn-primary"
					>
						Suppose you'll have to invite me to that interview
					</a>
				</div>
			</div>
		</section>
	);
};

export default About;
