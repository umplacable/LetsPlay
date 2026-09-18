import { useEffect, useState, useRef } from "react"; 
import UserCard from "../Components/UserCard";  

const LetsPlay = () => {
    
    const selfID = useRef(null);
    const [friendsIDs, setFriends] = useState([]);

    const [selfUser, setSelfUser] = useState(null);
    const [friendsUsers, setFriendsUsers] = useState([]);

    const fetchSelfData = async () => {
        const response = await fetch(`/steam_api/ISteamUser/GetFriendList/v0001/?steamid=${selfID.current.value}&relationship=friend`)
        const fiends = await response.json()
        console.log(fiends.friendslist.friends);
        setFriends(fiends.friendslist.friends);
    }

    useEffect(() => {
        if (friendsIDs.length === 0) return;

        const fetchUsersData = async () => {
            const response = await fetch(`/steam_api/ISteamUser/GetPlayerSummaries/v0002/?steamids=${selfID.current.value},${friendsIDs.map(friend => friend.steamid).join(',')}`);
            const users = await response.json().then(data => data.response);
            console.log(users.players);
            setSelfUser(users.players.find(player => player.steamid === selfID.current.value));
            setFriendsUsers(users.players.filter(player => player.steamid !== selfID.current.value));
        }
        fetchUsersData();
    }, [friendsIDs]);


    return (
        <div className="letsPlay">
            <section className="letsPlay__recherche">
                <input ref={selfID} type="text" placeholder="Friend code, SteamID64, ..." />
                <button onClick={fetchSelfData}>Send</button>
            </section>
            {selfUser != null && <><section className="letsPlay__self">
                <UserCard user={selfUser} size="large" />
            </section>
            <section className="letsPlay__friends">
                {friendsUsers.map(friend => (<UserCard key={friend.steamid} user={friend} />))}
            </section></>}
        </div>
    );
};

export default LetsPlay;