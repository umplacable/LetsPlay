import React, { useEffect } from "react";   

const LetsPlay = () => {
    
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('/steam_api/ISteamUser/GetPlayerSummaries/v0002/?steamids=76561197960435530,76561198863159519',
                {
                    headers: {
                        'Access-Control-Allow-Origin': '*',
                    },
                }
            );
            console.log(await response.json());
        }
        fetchData();
    },[])

    return (
        <div className="letsPlay">
            <input type="text" placeholder="Friend code, SteamID64, ..." />

        </div>
    );
};

export default LetsPlay;