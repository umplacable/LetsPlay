const AppCard = ({
	app = {
		name: "",
		description: "",
		image_logo: "",
		image_bg: "",
	},
}) => {
	return (
		<div
			className="app_card"
			style={{ backgroundImage: `url(${app.image_bg})` }}
		>
			<div className="app_logo">
				<img src={`../img/${app.image_logo}`} alt={app.name} />
			</div>
			<div className="app_content">
				<h3 dangerouslySetInnerHTML={{ __html: app.name }} />
				<p>{app.description}</p>
			</div>
		</div>
	);
};

export default AppCard;
