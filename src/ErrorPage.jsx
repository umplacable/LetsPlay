import { useEffect } from "react";
import "./App.css";

function App() {
	
	useEffect(() => {
	    document.title = "Error 404 - Page not found";
		
	}, []);

	return (
		<>
			<section id="center">
				<div>
					<h1>Error 404</h1>
					<p>Page not found</p>
				</div>
			</section>
		</>
	);
}

export default App;
