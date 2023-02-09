import "./cta-button.style.scss";

const CtaButton = ({ children, ...otherProps }) => {
	return <a {...otherProps}>{children}</a>;
};

export default CtaButton;
