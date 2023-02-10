import "./spinning-card.style.scss";

const SpinningCard = ({ rearText, children }) => {
	return (
		<div className="spinningCard__container">
			<div className="spinningCard__circle">
				{children}
				<span>
					<strong>{rearText}</strong>
				</span>
			</div>
		</div>
	);
};

export default SpinningCard;
