import Header from "./components/header/header.component";
import Navigation from "./components/navigation/navigation.component";
import About from "./components/about/about.component";
import Experience from "./components/experience/experience.component";
import Portfolio from "./components/portfolio/portfolio.component";
import Contact from "./components/contact/contact.component";
import Footer from "./components/footer/footer.component";

const App = () => {
	return (
		<>
			<Header />
			<Navigation />
			<About />
			<Experience />
			<Portfolio />
			<Contact />
			<Footer />
		</>
	);
};

export default App;
