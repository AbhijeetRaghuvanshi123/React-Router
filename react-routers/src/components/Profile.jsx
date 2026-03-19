import { useParams } from "react-router";
import DefaultProfile from "./DefaultProfile";
import Spinach from "./Spinach";
import Popeye from "./Popeye";
import Spongebob from "./Spongebob";
import Garry from "./Garry";
import { Link } from "react-router";

const Profile = () => {
    const { name } = useParams();

    return (
        <div>
            <h1>Hello from Profile page</h1>
            <p>So, Are you fine?</p>
            <hr />
            <h2>The profile visited is here: </h2>
            {name === "popeye" ? (
                <Popeye />
            ) : name === "spinach" ? (
                <Spinach />
            ) : name === "garry" ? (
                <Garry/>
            ) : name === "spongebob" ? (
                <Spongebob/>
            ) : (
                <DefaultProfile />
            )}
            <hr />
            <Link to="/">Click me to go back home</Link>
        </div>
    )
}

export default Profile;