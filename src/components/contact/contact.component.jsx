import "./contact.style.scss";

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import ReCAPTCHA from "react-google-recaptcha";

import { HiPhone } from "react-icons/hi";
import { MdBusinessCenter, MdEmail } from "react-icons/md";

import { submitFormToDb } from "../../utils/firebase.utils";
import { createRef } from "react";

const Contact = () => {
	const {
		register,
		handleSubmit,
		formState,
		formState: { errors, isSubmitSuccessful },
		reset,
		submittedData,
	} = useForm();

	useEffect(() => {
		if (isSubmitSuccessful) {
			reset();
		}
	}, [formState, submittedData, reset, isSubmitSuccessful]);

	const recaptchaRef = createRef();

	const [recaptchaState, setRecaptchaState] = useState(null);
	const [isFormSuccessfullySubmitted, setisFormSuccessfullySubmitted] =
		useState(false);

	const onSubmit = (data) => {
		if (!recaptchaState) {
			alert("Please complete the ReCaptcha");
			return;
		}

		data = {
			...data,
			date: new Date(),
		};
		submitFormToDb(data);
		recaptchaRef.current.reset();
		setisFormSuccessfullySubmitted(true);
	};

	const onChangeHandler = (value) => {
		setRecaptchaState(value);
	};

	return (
		<section
			id="contact"
			className="section-padding"
		>
			<div className="contact__tiles"></div>
			<div className="contact__title">
				<h5>Get in Touch</h5>
				<h2 className="">Contact Me</h2>
			</div>
			<div className="container container__contact">
				<div className="contact__cards">
					<div className="contact__card">
						<HiPhone />
						Phone Number
						<a href="tel:+447730778571">07730 778571</a>
					</div>
					<div className="contact__card">
						<MdEmail />
						Personal Email
						<a href="mailto:jordan_wilson1999@outlook.com?subject=Website&nbsp;Enquiry&nbsp;-&nbsp;Personal">
							Jordan_wilson1999@outlook.com
						</a>
					</div>
					<div className="contact__card">
						<MdBusinessCenter />
						Business Email
						<a href="mailto:jordan@acentrix.co.uk?subject=Website&nbsp;Enquiry&nbsp;-&nbsp;Business">
							Jordan@acentrix.co.uk
						</a>
					</div>
				</div>
				{/* React Hook Forms */}
				<div className="contact__form">
					<form onSubmit={handleSubmit(onSubmit)}>
						<h3>
							Fill in the form below and I will aim to respond
							within 24 hours <br />
							<span>
								Alternativly feel free to contact me on any of
								the methods above
							</span>
						</h3>
						<div className="form-input">
							<input
								placeholder="Name*"
								{...register("name", { required: true })}
							/>
							{errors.name && (
								<span className="error">
									This Name is required
								</span>
							)}
						</div>
						<div className="form-input">
							<input
								placeholder="Phone Number*"
								{...register("phoneNumber", { required: true })}
							/>
							{errors.phoneNumber && (
								<span className="error">
									This Phone Number is required
								</span>
							)}
						</div>
						<div className="form-input">
							<input
								placeholder="Email*"
								{...register("email", { required: true })}
							/>
							{errors.email && (
								<span className="error">
									This Email is required
								</span>
							)}
						</div>
						<div className="form-input">
							<textarea
								placeholder="Message*"
								{...register("message", { required: true })}
							/>
							{errors.message && (
								<span className="error">
									This Message is required
								</span>
							)}
						</div>
						<ReCAPTCHA
							ref={recaptchaRef}
							sitekey={process.env.REACT_APP_RECAPTCHA_SITE_KEY}
							onChange={onChangeHandler}
						/>
						{isFormSuccessfullySubmitted && (
							<div className="success">
								Thanks for submitting, I will be in touch soon
							</div>
						)}

						<input
							type="submit"
							className="btn btn-primary"
						/>
					</form>
				</div>
			</div>
		</section>
	);
};

export default Contact;
