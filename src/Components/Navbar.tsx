import React from 'react';
import {Routes, Route, Link} from 'react-router-dom';
import letterM from '/letterM.png'
import Tasks from "../pages/Tasks";
import Home from "../pages/Home";

function Navbar() {
    return (
        <div className="navbar">
            <div className="navbar-container">
                <img src="/letterM.png" alt="icon"/>
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