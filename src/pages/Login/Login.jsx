import "./Login.style.scss";
import { signInWithGooglePopUp } from "../../utils/firebase.utils";
import { useNavigate } from "react-router-dom";

const Login = () => {
	const navigate = useNavigate();

	const signInHandler = async () => {
		const user = await signInWithGooglePopUp();

		if (user) {
			navigate("/dashboard");
		}
	};

	return (
		<div className="login__container">
			<h1>Login</h1>
			<button
				className="btn"
				onClick={signInHandler}
			>
				Sign In With Google
			</button>
		</div>
	);
};

export default Login;
