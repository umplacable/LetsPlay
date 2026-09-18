import {Link} from "react-router-dom";

const UserCard = ({
	user = {
        avatarfull,
        personaname,
        profileurl,
        steamid
	},
    size = "small" // "small" | "medium" | "large"
}) => {
	return (
		<div className={`user_card ${size}`}>
            <img src={user.avatarfull} alt={user.personaname} />
            <div className="user_content">
                <h3>{user.personaname}</h3>
                <p>SteamID: {user.steamid}</p>
                <Link to={user.profileurl} target="_blank">View Profile</Link>
            </div>
        </div>
	);
};

export default UserCard;
