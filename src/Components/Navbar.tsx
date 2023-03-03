import React from 'react';
import {Link} from 'react-router-dom';
import logo from '../assets/images/letter.png';

function Navbar() {
    return (
        <div className="navbar">
            <div className="navbar-container">
                <img src="logo" alt="logo"/>
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
