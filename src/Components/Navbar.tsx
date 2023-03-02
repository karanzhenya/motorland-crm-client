import React from 'react';
import {Link} from 'react-router-dom';

function Navbar() {
    return (
        <div className="navbar">
            <div className="navbar-container">
                <ul>
                    <li><Link to={"/"}>Home</Link></li>
                    <li><Link to={"/tasks"}>Tasks</Link></li>
                    <li><Link to={"/fun"}>Fun</Link></li>
                </ul>
            </div>
        </div>
    );
}

export default Navbar;
