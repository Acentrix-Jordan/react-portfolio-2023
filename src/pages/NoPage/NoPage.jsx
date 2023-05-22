import { Link } from "react-router-dom";
import "./NoPage.style.scss";

const NoPage = () => {
	return (
		<div className="no-page__container">
			<h1>404 - Page Not Found</h1>
			<Link
				className="btn"
				to="/"
			>
				Go home
			</Link>
		</div>
	);
};

export default NoPage;
