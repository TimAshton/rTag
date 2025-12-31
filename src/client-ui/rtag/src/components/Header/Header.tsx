import { Link } from "react-router-dom";
import "./Header.css";

import NavButton from "../NavButton/NavButton";

export default function Header() {
    return (
        <>
            <div id="thing">rTag v0.0</div>
            <ul>
                <NavButton path="/splash">Splash</NavButton>
                <NavButton path="/authorize">authorize</NavButton>
                <NavButton path="/rules">rules</NavButton>
                <NavButton path="/leaders">leaders</NavButton>
                <NavButton path="/challenges">challenges</NavButton>
                <NavButton path="/challenge">challenge</NavButton>
                <NavButton path="/post-rtag">post-rtag</NavButton>
                <NavButton path="/rtag">rtag</NavButton>
                <NavButton path="/rtags">rtags</NavButton>
                <NavButton path="/add_challenge">add_challenge</NavButton>
            </ul>
        </>
    )
}