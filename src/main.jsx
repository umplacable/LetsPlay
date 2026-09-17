import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ErrorPage from "./ErrorPage.jsx";
import Navigator from "./assets/Components/Navigator.jsx";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<BrowserRouter>
			<Navigator />

			<Routes>
				<Route path="/" element={<App />} />
				<Route path="/LetsPlay" element={<App />} />
				<Route path="/*" element={<ErrorPage />} />
			</Routes>
		</BrowserRouter>
	</StrictMode>,
);
