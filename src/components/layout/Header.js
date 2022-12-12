import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header>
            <h1>Minerva - minimalistic Stream service</h1>
            <Link to="/">All Streams</Link>
            <Link to="/new">Create new Stream</Link>
        </header>
    )
};

export default Header;
