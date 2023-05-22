import { useEffect, useState } from "react";
import { getFormSubmissions } from "../../utils/firebase.utils";
import "./Dashboard.style.scss";

const Dashboard = () => {
	const formSubmissionsArray = [];
	const [formSubmissions, setFormSubmissions] = useState([]);

	useEffect(() => {
		getFormSubmissions().then(({ docs }) => {
			docs.forEach((doc) => {
				formSubmissionsArray.push(doc.data());
			});
			setFormSubmissions(formSubmissionsArray);
		});
	}, []);

	return (
		<div className="dashboard__container">
			<h1>Dashboard</h1>
			<div className="submissions__container">
				{formSubmissions.map((submission, index) => {
					const { name, email, date, message, phoneNumber } =
						submission;
					const dateFormatted = new Date(
						date.seconds * 1000
					).toString();
					return (
						<div
							key={index}
							className="submission"
						>
							<p>
								<strong>Name:</strong> {name}
							</p>
							<p>
								<strong>Email:</strong> {email}
							</p>
							<p>
								<strong>Phone Number:</strong> {phoneNumber}
							</p>
							<p>
								<strong>Message:</strong> {message}
							</p>
							<p>
								<strong>Submitted:</strong> {dateFormatted}
							</p>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Dashboard;
