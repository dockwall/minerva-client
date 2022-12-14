import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header>
            <div className="ui secondary pointing menu">
                <Link to="/" className="item">Minerva - minimalistic Stream service</Link>
                <div className="right menu">
                    <Link to="/" className="item">All Streams</Link>
                </div>
            </div>
        </header>
    )
};

export default Header;
