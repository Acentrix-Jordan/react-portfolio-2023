import PortfolioCard from "../portfolioCard/portfolio-card.component";
import "./portfolio.style.scss";

import crwnClothingSnapshot from "../../assets/crwn-clothing-snapshot.jpg";
import amazonCloneSnapshot from "../../assets/amazon-clone-snapshot.jpg";
import twiloPracticalSnapshot from "../../assets/twilo-practical-snapshot.jpg";
import agenciesSnapshot from "../../assets/agencies-snapshot.jpg";
import Cheese1912Snapshot from "../../assets/1912-snapshot.jpg";
import RCaptialSnapshot from "../../assets/RCapital-snapshot.jpg";
import emicaConsultingSnapshot from "../../assets/emica-consulting-snapshot.jpg";
import easibeddingSnapshot from "../../assets/easibedding-snapshot.jpg";
import tumblebugsSnapshot from "../../assets/tumblebugs-snapshot.jpg";

const Portfolio = () => {
	return (
		<section
			id="portfolio"
			className="section-padding"
		>
			<div className="portfolio__title-container">
				<h5>Proofs in the pudding</h5>
				<h2>Portfolio</h2>
			</div>
			<div className="container portfolio__container">
				<PortfolioCard
					img={crwnClothingSnapshot}
					imgAlt="Crwn Clothing Snapshot"
					title="Crwn Clothing"
					description="Eccommerce Site built with React, Redux, Stripe, Firebase and other tools from the React Ecosystem"
					link="https://jw-crwn-clothing.netlify.app/"
				/>
				<PortfolioCard
					img={amazonCloneSnapshot}
					imgAlt="Amazon Clone"
					title="Amazon Clone Bulid"
					description="Amazon 5 day code along with Sonny Sangha on Youtube. Note: This build is just over two years old so some features do not work as they should and I will be refactoring the code in the near future"
					link="https://amazon-clone-biggyjdev.vercel.app/"
				/>
				<PortfolioCard
					img={twiloPracticalSnapshot}
					imgAlt="Twilo Practical Interview"
					title="Twilo Practical Interview"
					description="This was the interview practical I completed to get my first Junior Dev Job at Twilo Creative"
					link="https://acentrix-portfolio-1.netlify.app/"
				/>
				<PortfolioCard
					img={agenciesSnapshot}
					imgAlt="agencies.co snapshot"
					title="Agencies.co"
					description="A website built for a private client that required a website to buy and sell agencies"
					link="https://agencies.co"
				/>
				<PortfolioCard
					img={Cheese1912Snapshot}
					imgAlt="1912 snapshot"
					title="1912"
					description="Disclaimer: I do not own the rights to this site, I simply developed the site during my time at Twilo Creative"
					link="https://1912.co.uk"
				/>
				<PortfolioCard
					img={RCaptialSnapshot}
					imgAlt="rcapital snapshot"
					title="RCapital"
					description="Disclaimer: I do not own the rights to this site, I simply developed the site during my time at Twilo Creative"
					link="https://rcapital.co.uk"
				/>
				<PortfolioCard
					img={emicaConsultingSnapshot}
					imgAlt="emica consulting snapshot"
					title="Emica Consulting"
					description="Disclaimer: I do not own the rights to this site, I simply developed the site during my time at Twilo Creative"
					link="https://emicaconsulting.com"
				/>
				<PortfolioCard
					img={easibeddingSnapshot}
					imgAlt="easibedding snapshot"
					title="Easibedding"
					description="Disclaimer: I do not own the rights to this site, I simply developed the site during my time at Twilo Creative"
					link="https://easibedding.co.uk"
				/>
				<PortfolioCard
					img={tumblebugsSnapshot}
					imgAlt="tumblebugs snapshot"
					title="Tumblebugs"
					description="A website built for a private client to advertise there gymnastics club"
					link="https://tumblebugs.co.uk"
				/>
			</div>
		</section>
	);
};

export default Portfolio;
