import { useState, useEffect } from "react";
import { AppList } from "../Apps/AppList";
import { Link, useLocation } from "react-router-dom";

const Navigator = () => {
    const location = useLocation();
    const [app, setApp] = useState(null);

    useEffect(() => {
        const app = AppList.find((app) => app.name.replace(/<[^>]*>?/gm, "") === location.pathname.slice(1));
        setApp(app);
    }, [location]);

    return (
        <section className="navigation">
            <Link to="/">Steam Magician</Link>
            {location.pathname.slice(1) !== "" && app && (
                <>
                    <p> {">"} </p>
                    <Link to="/">{location.pathname.slice(1)}</Link>
                </>
            )}
        </section>
    )
}

export default Navigator;