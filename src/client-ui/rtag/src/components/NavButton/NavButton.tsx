import { Link } from "react-router-dom";

export default function NavButton({children, path}) {
    return <li><Link to={path}>{children}</Link><button onClick={() => alert('love')}>{children}</button></li>;
}