import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./pages/Home/App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login/Login";
import NoPage from "./pages/NoPage/NoPage";
import Dashboard from "./pages/Dashboard/Dashboard";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<BrowserRouter>
			<Routes>
				<Route
					path="/"
					element={<App />}
				/>
				<Route
					path="/yeti"
					element={<Login />}
				/>
				<Route
					path="/dashboard"
					element={<Dashboard />}
				/>
				<Route
					path="*"
					element={<NoPage />}
				/>
			</Routes>
		</BrowserRouter>
	</React.StrictMode>
);
