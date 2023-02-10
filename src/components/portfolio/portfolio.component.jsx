import PortfolioCard from "../portfolioCard/portfolio-card.component";
import "./portfolio.style.scss";

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
					img=""
					imgAlt=""
					title="Card 1"
					description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam voluptatibus corporis ipsum id at ab, nostrum numquam obcaecati nisi ex, impedit amet a omnis accusantium dignissimos cumque hic! Nulla, aperiam!"
					link=""
				/>
				<PortfolioCard
					img=""
					imgAlt=""
					title="Card 2"
					description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam voluptatibus corporis ipsum id at ab, nostrum numquam obcaecati nisi ex, impedit amet a omnis accusantium dignissimos cumque hic! Nulla, aperiam!"
					link=""
				/>
				<PortfolioCard
					img=""
					imgAlt=""
					title="Card 3"
					description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam voluptatibus corporis ipsum id at ab, nostrum numquam obcaecati nisi ex, impedit amet a omnis accusantium dignissimos cumque hic! Nulla, aperiam!"
					link=""
				/>
				<PortfolioCard
					img=""
					imgAlt=""
					title="Card 4"
					description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam voluptatibus corporis ipsum id at ab, nostrum numquam obcaecati nisi ex, impedit amet a omnis accusantium dignissimos cumque hic! Nulla, aperiam!"
					link=""
				/>
				<PortfolioCard
					img=""
					imgAlt=""
					title="Card 5"
					description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam voluptatibus corporis ipsum id at ab, nostrum numquam obcaecati nisi ex, impedit amet a omnis accusantium dignissimos cumque hic! Nulla, aperiam!"
					link=""
				/>
			</div>
		</section>
	);
};

export default Portfolio;
