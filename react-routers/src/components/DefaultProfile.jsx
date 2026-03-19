import { Link } from "react-router";

const DefaultProfile = () => {
    return (
        <div>
            <h2>Some Profile links: </h2>
            <ul>
                <li><Link to="popeye">Popeye Page</Link></li>
                <li><Link to="spinach">Spinach Page</Link></li>
                <li><Link to="garry">Garry Page</Link></li>
                <li><Link to="spongebob">Spongebob Page</Link></li>
            </ul>
        </div>
    )
};

export default DefaultProfile;