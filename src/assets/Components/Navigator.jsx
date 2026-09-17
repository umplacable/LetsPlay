import { Link, useLocation } from "react-router-dom";

const Navigator = () => {
    const location = useLocation();

    return (
        <section CLassName="navigation">
            <Link to="/">Steam Magician</Link>
            {location.pathname.slice(1) !== "" && (
                <>
                <p> {">"} </p>
                <Link to="/">{location.pathname.slice(1)}</Link>
                </>
            )}
        </section>
    )
}


export default Navigator;