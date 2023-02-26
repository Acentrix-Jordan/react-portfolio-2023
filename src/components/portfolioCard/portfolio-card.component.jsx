import "./portfolio-card.style.scss";

const PortfolioCard = ({ img, imgAlt, title, description, link }) => {
	return (
		<>
			<a
				href={link}
				className="portfolioCard__container"
				target="_blank"
				rel="noreferrer"
			>
				<img
					src={img}
					alt={imgAlt}
					width="300"
					height="184"
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
