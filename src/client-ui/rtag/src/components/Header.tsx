import { Link } from "react-router-dom";

export default function Header() {
    return (
        <>
            <div>rTag v0.0</div>
            <ul>
                <li><Link to={`/splash`}>Splash</Link></li>
                <li><Link to={`/authorize`}>Auth</Link></li>
                <li><Link to={`/rules`}>Rules</Link></li>
                <li><Link to={`/leaders`}>Leader Board</Link></li>
                <li><Link to={`/challenges`}>Challenges</Link></li>
                <li><Link to={`/challenge`}>Challenge Detail</Link></li>
                <li><Link to={`/post-rtag`}>Post an rTag</Link></li>
                <li><Link to={`/rtag`}>rTag Detail</Link></li>
                <li><Link to={`/rtags`}>rTags</Link></li>
                <li><Link to={`/add_challenge`}>Add a Challenge</Link></li>
            </ul>
        </>
    )
}