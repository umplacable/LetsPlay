const AppCard = ({ app }) => {
	return (
		<div className="app_card">
			<div className="app_card_img">
				<img src={app.image} alt={app.name} />
			</div>
			<div className="app_card_content">
				<h3>{app.name}</h3>
				<p>{app.description}</p>
			</div>
		</div>
	);
};

export default AppCard;
