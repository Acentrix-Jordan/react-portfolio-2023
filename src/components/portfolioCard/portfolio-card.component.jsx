import "./portfolio-card.style.scss";

const PortfolioCard = ({ image, imageAlt, title, description, link }) => {
	return (
		<>
			<a
				href={link}
				className="portfolioCard__container"
			>
				<img
					src={image}
					alt={imageAlt}
					width="300"
					height="200"
				/>
				<h4>
					<strong>{title}</strong>
				</h4>
				<p>{description}</p>
			</a>
		</>
	);
};

export default PortfolioCard;
