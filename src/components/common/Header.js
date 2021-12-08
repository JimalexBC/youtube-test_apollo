import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
    const activeStyle = { color: "#F15B2A" };
    return (
        <nav>
            <NavLink to="/" activeStyle={activeStyle} exact>
                Home
            </NavLink>
            {" | "}
            <NavLink to="/video" activeStyle={activeStyle}>
                Videos
            </NavLink>
            {" | "}
            <NavLink to="/user" activeStyle={activeStyle}>
                Users
            </NavLink>
            {" | "}
            <NavLink to="/comment" activeStyle={activeStyle}>
                Comments
            </NavLink>
        </nav>
    );
};

export default Header;