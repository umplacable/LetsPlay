import { useMemo, useState } from "react";
import heroImg from "./assets/hero.png";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import AppCard from "./components/AppCard.jsx";
import "./App.css";

function App() {
	const [count, setCount] = useState(0);
	const apps = useMemo(() => {});

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
				<button
					type="button"
					className="counter"
					onClick={() => setCount((count) => count + 1)}
				>
					Count is {count}
				</button>
			</section>
			<section className="app_liste">
				{apps.map((app) => (
					<AppCard key={app.id} app={app} />
				))}
			</section>
		</>
	);
}

export default App;
