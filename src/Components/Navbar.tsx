import React from 'react';
import {Link} from 'react-router-dom';

function Navbar() {
    return (
        <div className="navbar">
            <div className="navbar-container">
                <img src="https://drive.google.com/file/d/1-JIDwIB-7IoNXO-wRf2bOnIJiec0SiRL/view?usp=share_link" alt="logo"/>
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
