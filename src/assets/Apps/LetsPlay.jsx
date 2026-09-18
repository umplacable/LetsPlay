import { useEffect, useRef, useState } from "react";
import UserCard from "../Components/UserCard";

const LetsPlay = () => {
    const selfID = useRef(null);
    const [friendsIDs, setFriends] = useState([]);

    const [selfUser, setSelfUser] = useState(null);
    const [friendsUsers, setFriendsUsers] = useState([]);

    const [sort, setSort] = useState("");

    const fetchSelfData = async () => {
        const response = await fetch(
            `/steam_api/ISteamUser/GetFriendList/v0001/?steamid=${selfID.current.value}&relationship=friend`,
        );
        const fiends = await response.json();
        console.log(fiends.friendslist.friends);
        setFriends(fiends.friendslist.friends);
    };

    useEffect(() => {
        if (friendsIDs.length === 0) return;

        const fetchUsersData = async () => {
            const response = await fetch(
                `/steam_api/ISteamUser/GetPlayerSummaries/v0002/?steamids=${selfID.current.value},${friendsIDs.map((friend) => friend.steamid).join(",")}`,
            );
            const users = await response.json().then((data) => data.response);
            console.log(
                users.players
                    .filter((player) => player.steamid !== selfID.current.value)
                    .sort((a, b) => a.personaname - b.personaname),
            );
            setSelfUser(
                users.players.find(
                    (player) => player.steamid === selfID.current.value,
                ),
            );
            setFriendsUsers(
                users.players
                    .filter((player) => player.steamid !== selfID.current.value)
                    .sort((a, b) =>
                        a.personaname.toLowerCase().trim() <
                        b.personaname.toLowerCase().trim()
                            ? -1
                            : 1,
                    ),
            );
        };
        fetchUsersData();
    }, [friendsIDs]);

    return (
        <div className="letsPlay">
            <section className="letsPlay__recherche">
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        fetchSelfData();
                    }}
                >
                    <input
                        ref={selfID}
                        type="text"
                        placeholder="Friend code, SteamID64, ..."
                    />
                    <button type="submit">Send</button>
                </form>
            </section>

            {selfUser != null && (
                <>
                    <section className="letsPlay__self">
                        <UserCard user={selfUser} size="large" />
                    </section>
                    <section className="letsPlay__resuslt">
                        <div className="letsPlay__friends">
                            <form>
                                <input
                                    type="text"
                                    title="search"
                                    value={sort}
                                    onChange={(e) => setSort(e.target.value)}
                                    className="user_cards_filter"
                                />
                                {friendsUsers.map((friend) => {
                                    const search = sort.toLowerCase().trim();

                                    const matches =
                                        !search ||
                                        friend.personaname
                                            ?.toLowerCase()
                                            .includes(search) ||
                                        friend.realname
                                            ?.toLowerCase()
                                            .includes(search) ||
                                        friend.steamid?.includes(search);

                                    return (
                                        <div
                                            className="user_card_wraper"
                                            hidden={!matches}
                                        >
                                            <UserCard
                                                key={friend.steamid}
                                                user={friend}
                                            />
                                        </div>
                                    );
                                })}
                            </form>
                        </div>
                    </section>
                </>
            )}
        </div>
    );
};

export default LetsPlay;
