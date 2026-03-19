import { Link } from "react-router";

const Spongebob = () => {
    return (
        <>
            <p>Hi, I am Spongebob!, I love to cook crabypatties!!</p>
            <Link to="/profile">Click me to go back</Link>
        </>
    )
}

export default Spongebob;