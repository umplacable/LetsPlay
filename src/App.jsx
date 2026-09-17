import { useState, useEffect } from "react";
import { AppList } from "./assets/Apps/AppList";
import AppCard from "./assets/Components/AppCard";
import heroImg from "./assets/hero.png";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import { useLocation } from "react-router-dom";
import "./App.css";

function App() {

    const location = useLocation();
	
	useEffect(() => {
		if (location.pathname.slice(1) === "") {
			document.title = "Steam Magician";
		}

		if (location.pathname.slice(1) !== "") {
			const app = AppList.find((app) => app.name.replace(/<[^>]*>?/gm, "") === location.pathname.slice(1));
			if (app) {
				document.title = app.name.replace(/<[^>]*>?/gm, "");
			}
		}
		
	}, [location]);

	return (
		<>
			<section id="center">
				<div className="hero">
					<img src={heroImg} className="base" width="170" height="179" alt="" />
					<img src={reactLogo} className="framework" alt="React logo" />
					<img src={viteLogo} className="vite" alt="Vite logo" />
				</div>
				<div>
					<h1>Steam Magician</h1>
					<p>Des outils suplémentaires pour les joueurs Steam.</p>
				</div>
			</section>
			<section className="app_liste">
				{AppList.map((app) => (
					<AppCard key={app.id} app={app} />
				))}
			</section>
		</>
	);
}

export default App;
